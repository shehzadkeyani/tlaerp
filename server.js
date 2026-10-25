const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 8000);
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const DATA_FILE = path.join(DATA_DIR, 'store.json');

const defaultState = {
  sheetState: {},
  projectBudgets: {
    'PR-001': 50000000,
    'PR-002': 42000000,
    'PR-003': 36000000
  },
  budgetChangeLog: [
    {
      date: '2026-10-24',
      project: 'P1 - Gulberg Plaza',
      previousBudget: 50000000,
      newBudget: 50000000,
      reason: 'Initial project budget',
      status: 'Approved'
    }
  ],
  ledger: [
    { date: '2026-10-01', module: 'Cash Books', reference: 'CB-001', party: 'Site Team', project: 'PR-001', amount: 150000, status: 'Posted' },
    { date: '2026-10-02', module: 'Bank Books', reference: 'BK-001', party: 'Cement Supply Co', project: 'PR-001', amount: 500000, status: 'Posted' },
    { date: '2026-10-05', module: 'Sales Journal', reference: 'SJ-001', party: 'Alpha Construction', project: 'PR-001', amount: 750000, status: 'Approved' },
    { date: '2026-10-08', module: 'Cash Books', reference: 'CB-002', party: 'Labour Crew', project: 'PR-002', amount: 220000, status: 'Posted' },
    { date: '2026-10-10', module: 'Purchase Journal', reference: 'PJ-002', party: 'Steel Pro Traders', project: 'PR-002', amount: 410000, status: 'Posted' },
    { date: '2026-10-12', module: 'Sales Journal', reference: 'SJ-002', party: 'BlueStar Developments', project: 'PR-002', amount: 890000, status: 'Approved' },
    { date: '2026-10-14', module: 'Bank Books', reference: 'BK-002', party: 'M&E Solutions', project: 'PR-003', amount: 380000, status: 'Posted' },
    { date: '2026-10-15', module: 'Purchase Journal', reference: 'PJ-003', party: 'M&E Solutions', project: 'PR-003', amount: 310000, status: 'Posted' },
    { date: '2026-10-18', module: 'Sales Journal', reference: 'SJ-003', party: 'CivilWorks Ltd', project: 'PR-003', amount: 640000, status: 'Approved' }
  ],
  documents: []
};

function ensureDataFile() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultState, null, 2), 'utf8');
  }
}

function readData() {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      sheetState: parsed.sheetState || {},
      projectBudgets: parsed.projectBudgets || defaultState.projectBudgets,
      budgetChangeLog: Array.isArray(parsed.budgetChangeLog) ? parsed.budgetChangeLog : defaultState.budgetChangeLog,
      ledger: Array.isArray(parsed.ledger) ? parsed.ledger : defaultState.ledger,
      documents: Array.isArray(parsed.documents) ? parsed.documents : defaultState.documents
    };
  } catch (error) {
    return { ...defaultState };
  }
}

function writeData(state) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(state, null, 2), 'utf8');
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function handleJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error('Invalid JSON payload'));
      }
    });
    req.on('error', reject);
  });
}

function serveFile(filePath, res) {
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  };

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ok: true, service: 'tlaerp-api' }));
    return;
  }

  if (url.pathname === '/api/state' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(readData()));
    return;
  }

  if (url.pathname === '/api/state' && req.method === 'POST') {
    try {
      const payload = await handleJsonBody(req);
      const nextState = {
        ...readData(),
        ...payload,
        sheetState: payload.sheetState || {},
        projectBudgets: payload.projectBudgets || {},
        budgetChangeLog: Array.isArray(payload.budgetChangeLog) ? payload.budgetChangeLog : [],
        ledger: Array.isArray(payload.ledger) ? payload.ledger : [],
        documents: Array.isArray(payload.documents) ? payload.documents : []
      };

      writeData(nextState);

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ ok: true, message: 'State saved' }));
      return;
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ ok: false, message: error.message || 'Invalid request' }));
      return;
    }
  }

  const normalizedPath = url.pathname === '/' ? '/index.html' : url.pathname;
  const filePath = path.join(ROOT_DIR, normalizedPath);

  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    serveFile(filePath, res);
    return;
  }

  const fallbackFile = path.join(ROOT_DIR, 'index.html');
  serveFile(fallbackFile, res);
});

server.listen(PORT, () => {
  console.log(`TLA ERP server running at http://localhost:${PORT}`);
});
