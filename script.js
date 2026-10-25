const MASTER_RECORDS = {
  Client: [
    { id: 'CL-001', name: 'Alpha Construction', category: 'Building' },
    { id: 'CL-002', name: 'BlueStar Developments', category: 'Developer' },
    { id: 'CL-003', name: 'CivilWorks Ltd', category: 'Contractor' }
  ],
  Vendor: [
    { id: 'VN-001', name: 'Cement Supply Co', category: 'Material' },
    { id: 'VN-002', name: 'Steel Pro Traders', category: 'Material' },
    { id: 'VN-003', name: 'M&E Solutions', category: 'Services' }
  ],
  Employee: [
    { id: 'EM-001', name: 'Ahsan Khan', department: 'Engineering' },
    { id: 'EM-002', name: 'Bilal Ahmed', department: 'Accounts' },
    { id: 'EM-003', name: 'Zain Ali', department: 'Procurement' }
  ],
  Worker: [
    { id: 'WK-001', name: 'Sajid', department: 'Civil Works' },
    { id: 'WK-002', name: 'Imran', department: 'Finishing' },
    { id: 'WK-003', name: 'Haroon', department: 'Electrical' }
  ],
  Projects: [
    { id: 'PR-001', name: 'P1 - Gulberg Plaza', budget: 50000000 },
    { id: 'PR-002', name: 'P2 - DHA Residency', budget: 42000000 },
    { id: 'PR-003', name: 'P3 - Gulshan Heights', budget: 36000000 }
  ],
  'Project Phases': [
    { id: 'PH-001', name: 'Excavation' },
    { id: 'PH-002', name: 'Structure' },
    { id: 'PH-003', name: 'Finishing' }
  ],
  Activities: [
    { id: 'AC-001', name: 'Concrete Work' },
    { id: 'AC-002', name: 'Plastering' },
    { id: 'AC-003', name: 'Electrical' }
  ],
  'Cost Centers': [
    { id: 'CC-001', name: 'Site Office' },
    { id: 'CC-002', name: 'Plant & Machinery' },
    { id: 'CC-003', name: 'Head Office' }
  ],
  'Cost Categories': [
    { id: 'CAT-001', name: 'Materials' },
    { id: 'CAT-002', name: 'Labour' },
    { id: 'CAT-003', name: 'Plant' }
  ],
  'Products / Services': [
    { id: 'IT-001', name: 'Cement Bags' },
    { id: 'IT-002', name: 'Steel Rods' },
    { id: 'IT-003', name: 'Labour Services' }
  ],
  'GL Accounts': [
    { id: 'GL-001', name: 'Cash In Hand' },
    { id: 'GL-002', name: 'Bank Account' },
    { id: 'GL-003', name: 'Accounts Payable' }
  ]
};

const ERP_DATA = {
  setup: {
    label: 'Setup',
    modules: [
      { name: 'Client', columns: ['Client ID', 'Client Name', 'Client Category', 'NTN / CNIC', 'Address', 'Contact Person', 'Contact No.', 'Contact Person Designation'] },
      { name: 'Vendor', columns: ['Vendor ID', 'Vendor Name', 'Vendor Category', 'NTN / CNIC', 'Address', 'Contact Person', 'Contact No.', 'Contact Person Designation'] },
      { name: 'Employee', columns: ['Employee ID', 'Employee Name', 'Employee Category', 'NTN / CNIC', 'Address', 'Employee Department', 'Employee Designation', 'Family Contact Person', 'Family Contact No.', 'Contact Person Relationship'] },
      { name: 'Worker', columns: ['Worker ID', 'Worker Name', 'Worker Category', 'NTN / CNIC', 'Address', 'Worker Department', 'Worker Designation', 'Family Contact Person', 'Family Contact No.', 'Contact Person Relationship'] },
      { name: 'System User', columns: ['User ID', 'User Name', 'User Category', 'User Role'] },
      { name: 'User Roles', columns: ['Role ID', 'Role Name', 'Role Category', 'Read Permission', 'Write Permission', 'Edit Permission', 'Delete Permission'] },
      { name: 'Projects', columns: ['Project ID', 'Project Name', 'Project Category', 'Project Value', 'Project Cost'] },
      { name: 'Jobs', columns: ['Job ID', 'Job Name', 'Job Category', 'Job Value', 'Job Cost'] },
      { name: 'Project Phases', columns: ['Phase ID', 'Phase Name', 'Phase Category'] },
      { name: 'Activities', columns: ['Activity ID', 'Activity Name', 'Activity Category'] },
      { name: 'Cost Centers', columns: ['CC ID', 'CC Name', 'CC Category'] },
      { name: 'Cost Categories', columns: ['Cost Cat ID', 'Cost Cat Name', 'Cost Type'] },
      { name: 'Transaction Categories', columns: ['TC ID', 'TC Name', 'TC Type'] },
      { name: 'Products / Services', columns: ['Item ID', 'Item Name', 'Item Category', 'Item Type'] },
      { name: 'Documents', columns: ['Doc ID', 'Doc Name', 'Doc Category', 'Doc Type'] },
      { name: 'GL Accounts', columns: ['Acc ID', 'Acc Name', 'Acc Category', 'Acc Type'] }
    ]
  },
  transaction: {
    label: 'Transaction',
    modules: [
      { name: 'Cash Books', columns: ['Date', 'Trx. Reference No.', 'Cash Account Name', 'Cash Voucher No.', 'Party Name', 'Payee Name', 'Description', 'Receipt', 'Payment', 'Running Balance', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'Prepared/Posted By', 'Remarks'] },
      { name: 'Bank Books', columns: ['Date', 'Trx. Reference No.', 'Bank Account Name', 'Bank Voucher No.', 'Cheque/Txn No.', 'Party Name', 'Payee Name', 'Description', 'Deposit', 'Withdrawal', 'Bank Charges', 'Running Balance', 'IT Withholding', 'Sales Tax Withholding', 'Gross Amount Paid', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'Purchase Ref. No.', 'Reconciliation Ref.', 'Remarks'] },
      { name: 'Purchase Journal', columns: ['Date', 'Trx. Reference No.', 'Purchase Invoice No.', 'Supplier Code', 'Supplier Name', 'NTN/STRN', 'PO No.', 'GRN No.', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Payable', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] },
      { name: 'Sales Journal', columns: ['Date', 'Trx. Reference No.', 'Sales Invoice No.', 'Client Code', 'Client Name', 'NTN/STRN', 'Sales Order No.', 'GD No.', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Receivable', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] },
      { name: 'General Journal', columns: ['Date', 'Trx. Reference No.', 'GJ Document No.', 'Party Code', 'Party Name', 'NTN/STRN', 'Order No.', 'GRN / GD No.', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Amount', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] },
      { name: 'Payroll Register', columns: ['Payroll Month', 'Emp ID', 'Employee Name', 'Employee CNIC', 'Designation', 'Department', 'Basic Salary', 'Allowances', 'Gross Salary', 'OT', 'Bonus', 'Tax', 'EOBI/PESSI', 'Advance/Loan', 'Other Deduction', 'Net Salary', 'Employer Contributions', 'Project/Cost Center', 'Receiver Signature', 'Payment Status'] },
      { name: 'Wages Register', columns: ['Date', 'Worker ID', 'Worker Name', 'Worker CNIC', 'Trade', 'Project/Site', 'Days/Units', 'Rate', 'Normal Wages', 'OT Hours', 'OT Rate', 'OT Amount', 'Gross Wages', 'Deduction', 'Net Wages', 'Payment Ref.', 'Worker Signature'] },
      { name: 'Assets Register', columns: ['Asset ID', 'Asset Description', 'Category', 'Location', 'Department', 'Project', 'Supplier', 'Invoice No.', 'Purchase Date', 'Capital Cost', 'Installation/Incidental', 'Total Cost', 'Useful Life (Years)', 'Depreciation Method', 'Annual Depreciation', 'Accumulated Depreciation', 'NBV', 'Status', 'Custodian'] },
      { name: 'Sales Quotation', columns: ['Date', 'Trx. Reference No.', 'Sales Quotation No.', 'Client Code', 'Client Name', 'NTN/STRN', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Receivable', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] },
      { name: 'Sales Order', columns: ['Date', 'Trx. Reference No.', 'Sales Order No.', 'Client Code', 'Client Name', 'NTN/STRN', 'Sales Quotation No.', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Receivable', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] },
      { name: 'Goods Delivery Note', columns: ['Date', 'Trx. Reference No.', 'Sales GD No.', 'Client Code', 'Client Name', 'NTN/STRN', 'Sales Order No.', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Receivable', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] },
      { name: 'Purchase Requisition', columns: ['Date', 'Trx. Reference No.', 'Purchase Requisition No.', 'Supplier Code', 'Supplier Name', 'NTN/STRN', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Payable', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] },
      { name: 'Purchase Quotation', columns: ['Date', 'Trx. Reference No.', 'Purchase Quotation No.', 'Supplier Code', 'Supplier Name', 'NTN/STRN', 'Purchase Requisition No.', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Payable', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] },
      { name: 'Purchase Order', columns: ['Date', 'Trx. Reference No.', 'Purchase Order No.', 'Supplier Code', 'Supplier Name', 'NTN/STRN', 'Purchase Quotation No.', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Payable', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] },
      { name: 'Goods Received Note', columns: ['Date', 'Trx. Reference No.', 'Purchase GRN No.', 'Supplier Code', 'Supplier Name', 'NTN/STRN', 'Purchase Order No.', 'Description', 'Product / Service Name', 'Unit', 'Quantity', 'Rate', 'Amount', 'Sales Tax', 'WHT', 'Net Payable', 'Payment Terms', 'Payment Status', 'Project Code', 'Project Phase', 'Activity Code', 'Cost Center', 'Cost Category', 'File Ref.'] }
    ]
  },
  reporting: {
    label: 'Reporting',
    modules: [
      { name: 'Customer Ledgers', columns: ['Customer', 'Invoice No.', 'Amount', 'Received', 'Balance', 'Due Date'] },
      { name: 'Project Job wise Receivables', columns: ['Project', 'Job', 'Receivable', 'Collected', 'Outstanding', 'Status'] },
      { name: 'Vendor Ledgers', columns: ['Vendor', 'Invoice No.', 'Amount', 'Paid', 'Balance', 'Due Date'] },
      { name: 'Project Job wise Payables', columns: ['Project', 'Job', 'Payable', 'Cleared', 'Outstanding', 'Status'] },
      { name: 'Employee Payroll', columns: ['Payroll Month', 'Employee', 'Gross Salary', 'Deductions', 'Net Salary', 'Status'] },
      { name: 'Project Wise Employee Payroll', columns: ['Project', 'Employee', 'Gross Salary', 'Deductions', 'Net Salary', 'Status'] },
      { name: 'Wages Payroll', columns: ['Month', 'Worker', 'Normal Wages', 'OT', 'Deductions', 'Net Wages'] },
      { name: 'Project Wise Wages Payroll', columns: ['Project', 'Worker', 'Normal Wages', 'OT', 'Deductions', 'Net Wages'] },
      { name: 'Customer Aging Report', columns: ['Customer', 'Current', '30 Days', '60 Days', '90+ Days', 'Total'] },
      { name: 'Vendor Aging Report', columns: ['Vendor', 'Current', '30 Days', '60 Days', '90+ Days', 'Total'] },
      { name: 'General Ledgers', columns: ['Account', 'Debit', 'Credit', 'Balance', 'Period'] },
      { name: 'Trial Balance', columns: ['Account', 'Debit', 'Credit', 'Closing Balance', 'Status'] },
      { name: 'Profit and Loss', columns: ['Category', 'Revenue', 'Expense', 'Net Profit', 'Period'] },
      { name: 'Balance Sheet', columns: ['Asset', 'Liability', 'Equity', 'Amount', 'Period'] },
      { name: 'Cash Flow', columns: ['Category', 'Opening', 'Inflow', 'Outflow', 'Closing', 'Period'] },
      { name: 'Changes in Equity', columns: ['Owner', 'Opening', 'Additions', 'Withdrawals', 'Closing', 'Period'] },
      { name: 'Notes to the Accounts', columns: ['Note', 'Description', 'Amount', 'Type', 'Status'] },
      { name: 'Fiscal Budget', columns: ['Account', 'Budget', 'Actual', 'Variance', 'Status'] },
      { name: 'Project Budget', columns: ['Project', 'Budget', 'Actual', 'Variance', 'Status'] },
      { name: 'Project Budget Change Log', columns: ['Date', 'Project', 'Previous Budget', 'New Budget', 'Reason', 'Status'] },
      { name: 'Project Approval Queue', columns: ['Project', 'Requested By', 'Amount', 'Reason', 'Status'] },
      { name: 'Project Report', columns: ['Project', 'Cost', 'Revenue', 'Profit', 'Status'] },
      { name: 'Project Varience Report', columns: ['Project', 'Planned', 'Actual', 'Variance', 'Status'] },
      { name: 'Custome Report', columns: ['Report', 'Filter', 'Value', 'Result', 'Owner'] }
    ]
  },
  documents: {
    label: 'Documents',
    modules: [
      { name: 'Sales Quotation', columns: ['Doc No.', 'Client', 'Issue Date', 'Valid Until', 'Status', 'Attachment'] },
      { name: 'Sales Order', columns: ['Doc No.', 'Client', 'Issue Date', 'Status', 'Attachment'] },
      { name: 'Goods Delivery Note', columns: ['Doc No.', 'Client', 'Issue Date', 'Vehicle', 'Status', 'Attachment'] },
      { name: 'Sales Invoice', columns: ['Doc No.', 'Client', 'Invoice Date', 'Amount', 'Status', 'Attachment'] },
      { name: 'Purchase Requisition', columns: ['Doc No.', 'Supplier', 'Request Date', 'Status', 'Attachment'] },
      { name: 'Purchase Quotation', columns: ['Doc No.', 'Supplier', 'Issue Date', 'Status', 'Attachment'] },
      { name: 'Purchase Order', columns: ['Doc No.', 'Supplier', 'Issue Date', 'Status', 'Attachment'] },
      { name: 'Goods Received Note', columns: ['Doc No.', 'Supplier', 'Received Date', 'Status', 'Attachment'] },
      { name: 'Purcashe Invoice', columns: ['Doc No.', 'Supplier', 'Invoice Date', 'Amount', 'Status', 'Attachment'] },
      { name: 'Employee Payslip', columns: ['Payslip No.', 'Employee', 'Month', 'Net Salary', 'Status', 'Attachment'] },
      { name: 'Wages Payslip', columns: ['Payslip No.', 'Worker', 'Month', 'Net Wages', 'Status', 'Attachment'] }
    ]
  }
};

const NAV_STORAGE_KEY = 'tlaerp-last-navigation';

let selectedCategory = 'setup';
let selectedModule = ERP_DATA.setup.modules[0].name;
let selectedUserRole = 'Admin';
let activeRowIndex = 0;
const columnFiltersByModule = {};
const columnWidthState = {};

const STORAGE_KEY = 'tlaerp-sheet-state';

function restoreNavigationState() {
  try {
    const raw = localStorage.getItem(NAV_STORAGE_KEY);
    if (!raw) return;

    const saved = JSON.parse(raw);
    if (!saved || typeof saved !== 'object') return;

    const hasCategory = saved.category && ERP_DATA[saved.category];
    if (!hasCategory) return;

    const modules = ERP_DATA[saved.category].modules || [];
    const hasModule = modules.some((module) => module.name === saved.module);
    selectedCategory = saved.category;
    selectedModule = hasModule ? saved.module : modules[0]?.name || selectedModule;
  } catch (error) {
    // Ignore invalid saved navigation state and use the default tab.
  }
}

function persistNavigationState() {
  try {
    localStorage.setItem(NAV_STORAGE_KEY, JSON.stringify({
      category: selectedCategory,
      module: selectedModule
    }));
  } catch (error) {
    // Ignore storage errors and continue.
  }
}
const BUDGET_STORAGE_KEY = 'tlaerp-project-budgets';
const BUDGET_CHANGE_LOG_KEY = 'tlaerp-project-budget-log';
const APPROVAL_STORAGE_KEY = 'tlaerp-project-approvals';
const moduleState = {};

const ROLE_PERMISSIONS = {
  Admin: {
    newRecord: true,
    deleteRow: true,
    validate: true,
    saveSheet: true,
    budgetChange: true,
    approveBudget: true,
    export: true,
    postEntry: true,
    draftEntry: true,
    createDoc: true,
    approveDoc: true
  },
  Accountant: {
    newRecord: true,
    deleteRow: false,
    validate: true,
    saveSheet: true,
    budgetChange: false,
    approveBudget: true,
    export: true,
    postEntry: true,
    draftEntry: true,
    createDoc: true,
    approveDoc: true
  },
  'Site Manager': {
    newRecord: true,
    deleteRow: true,
    validate: true,
    saveSheet: true,
    budgetChange: true,
    approveBudget: false,
    export: true,
    postEntry: true,
    draftEntry: true,
    createDoc: true,
    approveDoc: false
  },
  Procurement: {
    newRecord: true,
    deleteRow: false,
    validate: true,
    saveSheet: true,
    budgetChange: true,
    approveBudget: true,
    export: true,
    postEntry: true,
    draftEntry: false,
    createDoc: true,
    approveDoc: false
  },
  HR: {
    newRecord: false,
    deleteRow: false,
    validate: false,
    saveSheet: false,
    budgetChange: false,
    approveBudget: false,
    export: false,
    postEntry: false,
    draftEntry: false,
    createDoc: false,
    approveDoc: false
  }
};

function ensurePermission(action, label) {
  const permissions = ROLE_PERMISSIONS[selectedUserRole] || ROLE_PERMISSIONS.Admin;
  if (!permissions[action]) {
    setStatus(`Access denied for ${selectedUserRole}: ${label} is not permitted.`, false);
    return false;
  }
  return true;
}

function updateRolePermissions() {
  const permissions = ROLE_PERMISSIONS[selectedUserRole] || ROLE_PERMISSIONS.Admin;
  const controlMap = {
    newRecord: document.getElementById('newRecordBtn'),
    deleteRow: document.getElementById('deleteRowBtn'),
    validate: document.getElementById('validateBtn'),
    saveSheet: document.getElementById('saveSheetBtn'),
    budgetChange: document.getElementById('budgetChangeBtn'),
    approveBudget: document.getElementById('approvalBtn'),
    export: document.getElementById('exportBtn'),
    postEntry: document.getElementById('postEntryBtn'),
    draftEntry: document.getElementById('draftEntryBtn'),
    createDoc: document.getElementById('createDocBtn'),
    approveDoc: document.getElementById('approveDocBtn')
  };

  Object.entries(controlMap).forEach(([action, element]) => {
    if (!element) return;
    const allowed = Boolean(permissions[action]);
    element.disabled = !allowed;
    element.style.opacity = allowed ? '1' : '0.45';
    element.title = allowed ? '' : `${selectedUserRole} cannot ${action.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
  });
}

async function syncStateToServer() {
  if (window.location.hostname.includes('github.io') || window.location.protocol === 'file:') {
    return;
  }

  try {
    const response = await fetch('/api/state', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sheetState: readStoredSheetState(),
        projectBudgets: readProjectBudgets(),
        budgetChangeLog: readBudgetChangeLog(),
        ledger: readLedgerEntries(),
        documents: readDocumentEntries()
      })
    });

    if (!response.ok) {
      throw new Error('Server sync failed');
    }
  } catch (error) {
    // Keep browser localStorage as the fallback when the backend is unavailable.
  }
}

async function hydrateStateFromServer() {
  if (window.location.hostname.includes('github.io') || window.location.protocol === 'file:') {
    return;
  }

  try {
    const response = await fetch('/api/state');
    if (!response.ok) return;

    const payload = await response.json();
    if (!payload || typeof payload !== 'object') return;

    if (payload.sheetState && typeof payload.sheetState === 'object') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload.sheetState));
    }
    if (payload.projectBudgets && typeof payload.projectBudgets === 'object') {
      localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(payload.projectBudgets));
    }
    if (Array.isArray(payload.budgetChangeLog)) {
      localStorage.setItem(BUDGET_CHANGE_LOG_KEY, JSON.stringify(payload.budgetChangeLog));
    }
    if (Array.isArray(payload.ledger)) {
      localStorage.setItem('tlaerp-ledger', JSON.stringify(payload.ledger));
    }
    if (Array.isArray(payload.documents)) {
      localStorage.setItem('tlaerp-documents', JSON.stringify(payload.documents));
    }
  } catch (error) {
    // Ignore startup hydration errors and continue with local storage data.
  }
}

function generateSeedRowsForModule(moduleName, columns, totalRows = 5) {
  const cities = ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Peshawar', 'Quetta', 'Multan', 'Sialkot', 'Hyderabad'];
  const categories = ['Commercial', 'Residential', 'Industrial', 'Infrastructure', 'Developer', 'Government', 'Private', 'Retail', 'Hospitality', 'Utilities'];
  const departments = ['Engineering', 'Accounts', 'Procurement', 'Site Works', 'Operations', 'HR', 'Finance'];
  const trades = ['Civil Works', 'Finishing', 'Electrical', 'Plumbing', 'Masonry', 'Steel Fixing', 'Painting'];
  const projectNames = MASTER_RECORDS.Projects.map((project) => project.name);
  const projectIds = MASTER_RECORDS.Projects.map((project) => project.id);
  const clientNames = MASTER_RECORDS.Client.map((client) => client.name);
  const vendorNames = MASTER_RECORDS.Vendor.map((vendor) => vendor.name);
  const employeeNames = MASTER_RECORDS.Employee.map((employee) => employee.name);
  const workerNames = MASTER_RECORDS.Worker.map((worker) => worker.name);
  const phaseNames = MASTER_RECORDS['Project Phases'].map((phase) => phase.name);
  const activityNames = MASTER_RECORDS.Activities.map((activity) => activity.name);
  const costCenterNames = MASTER_RECORDS['Cost Centers'].map((item) => item.name);
  const costCategoryNames = MASTER_RECORDS['Cost Categories'].map((item) => item.name);
  const productNames = MASTER_RECORDS['Products / Services'].map((item) => item.name);
  const glAccounts = MASTER_RECORDS['GL Accounts'].map((item) => item.name);
  const cashAccounts = ['Main Cash', 'Site Cash', 'Petty Cash', 'Operations Cash', 'Project Cash'];
  const bankAccounts = ['Bank Al Habib', 'MCB Bank', 'UBL', 'HBL', 'Meezan Bank'];

  function pick(list, index) {
    if (!Array.isArray(list) || list.length === 0) return '';
    return list[index % list.length];
  }

  function formatMoney(value) {
    return Number(value).toLocaleString('en-US', { maximumFractionDigits: 0 });
  }

  return Array.from({ length: totalRows }, (_, index) => {
    const count = index + 1;
    const seq = String(count).padStart(3, '0');
    const row = {};

    columns.forEach((column) => {
      const field = column.trim();
      const lowerField = field.toLowerCase();
      const projectName = pick(projectNames, count);
      const clientName = pick(clientNames, count);
      const vendorName = pick(vendorNames, count);
      const employeeName = pick(employeeNames, count);
      const workerName = pick(workerNames, count);
      const phaseName = pick(phaseNames, count);
      const activityName = pick(activityNames, count);
      const costCenterName = pick(costCenterNames, count);
      const costCategoryName = pick(costCategoryNames, count);
      const productName = pick(productNames, count);
      const city = pick(cities, count);
      const category = pick(categories, count);

      if (lowerField.includes('client code') || lowerField.includes('client id')) {
        row[field] = `CL-${seq}`;
      } else if (lowerField.includes('vendor id') || lowerField.includes('supplier code') || lowerField.includes('vendor code')) {
        row[field] = `VN-${seq}`;
      } else if (lowerField.includes('employee id') || lowerField.includes('emp id')) {
        row[field] = `EM-${seq}`;
      } else if (lowerField.includes('worker id')) {
        row[field] = `WK-${seq}`;
      } else if (lowerField.includes('project id') || lowerField.includes('project code')) {
        row[field] = pick(projectIds, count);
      } else if (lowerField.includes('job id')) {
        row[field] = `JB-${seq}`;
      } else if (lowerField.includes('phase id')) {
        row[field] = `PH-${seq}`;
      } else if (lowerField.includes('activity id') || lowerField.includes('activity code')) {
        row[field] = `AC-${seq}`;
      } else if (lowerField.includes('cc id') || lowerField.includes('cost center id')) {
        row[field] = `CC-${seq}`;
      } else if (lowerField.includes('cost cat id')) {
        row[field] = `CAT-${seq}`;
      } else if (lowerField.includes('item id') || lowerField.includes('product id')) {
        row[field] = `IT-${seq}`;
      } else if (lowerField.includes('doc id')) {
        row[field] = `DOC-${seq}`;
      } else if (lowerField.includes('acc id') || lowerField.includes('gl account')) {
        row[field] = `GL-${seq}`;
      } else if (lowerField.includes('user id')) {
        row[field] = `USR-${seq}`;
      } else if (lowerField.includes('role id')) {
        row[field] = `ROL-${seq}`;
      } else if (lowerField.includes('client name')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('vendor name') || lowerField.includes('supplier name')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('employee name')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('worker name')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('project name')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('phase name')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('activity name')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('cc name') || lowerField.includes('cost center')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('cost cat name') || lowerField.includes('cost category')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('item name') || lowerField.includes('product') || lowerField.includes('service')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('doc name')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('acc name') || lowerField.includes('account name')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('cash account name')) {
        row[field] = pick(cashAccounts, count);
      } else if (lowerField.includes('bank account name')) {
        row[field] = pick(bankAccounts, count);
      } else if (lowerField.includes('project phase')) {
        row[field] = phaseName;
      } else if (lowerField.includes('party name') || lowerField.includes('payee name') || lowerField.includes('customer')) {
        row[field] = clientName;
      } else if (lowerField.includes('category') || lowerField.includes('type') || lowerField.includes('trade')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('ntn') || lowerField.includes('cnic') || lowerField.includes('strn')) {
        row[field] = `${String(1000000 + count).slice(0, 7)}-${(count % 9) + 1}`;
      } else if (lowerField.includes('address') || lowerField.includes('location')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('contact person')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('contact no.') || lowerField.includes('phone') || lowerField.includes('mobile')) {
        row[field] = `030${String(count % 1000).padStart(3, '0')}-${String((count * 17) % 10000000).padStart(7, '0')}`;
      } else if (lowerField.includes('department')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('designation')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('date') || lowerField.includes('issue date') || lowerField.includes('valid until') || lowerField.includes('invoice date') || lowerField.includes('received date') || lowerField.includes('purchase date')) {
        const date = new Date(2026, (count % 12), 2 + (count % 24));
        row[field] = date.toISOString().slice(0, 10);
      } else if (lowerField.includes('payroll month')) {
        row[field] = new Date(2026, (count % 12), 1).toISOString().slice(0, 7);
      } else if (lowerField.includes('reference no.') || lowerField.includes('voucher no.') || lowerField.includes('invoice no.') || lowerField.includes('doc no.') || lowerField.includes('ref.') || lowerField.includes('no.')) {
        const prefix = moduleName.substring(0, 2).toUpperCase();
        row[field] = `${prefix}-${seq}`;
      } else if (lowerField.includes('description') || lowerField.includes('remarks') || lowerField.includes('reason')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('status')) {
        row[field] = `${field} ${count}`;
      } else if (lowerField.includes('quantity') || lowerField.includes('days') || lowerField.includes('hours')) {
        row[field] = String((count % 20) + 5);
      } else if (lowerField.includes('rate') || lowerField.includes('price')) {
        row[field] = String((count * 15) + 100);
      } else if (lowerField.includes('unit')) {
        row[field] = ['Bag', 'Nos', 'Unit', 'Hour', 'Day', 'Lot'][count % 6];
      } else if (lowerField.includes('amount') || lowerField.includes('receipt') || lowerField.includes('payment') || lowerField.includes('deposit') || lowerField.includes('withdrawal') || lowerField.includes('balance') || lowerField.includes('gross') || lowerField.includes('net') || lowerField.includes('budget') || lowerField.includes('variance') || lowerField.includes('cost') || lowerField.includes('value') || lowerField.includes('salary') || lowerField.includes('wages')) {
        const amount = 12000 + (count * 2600) + ((count % 5) * 1500);
        row[field] = formatMoney(amount);
      } else if (lowerField.includes('file ref')) {
        row[field] = `FILE-${seq}`;
      } else if (lowerField.includes('project value') || lowerField.includes('project cost') || lowerField.includes('job value') || lowerField.includes('job cost')) {
        row[field] = formatMoney(250000 + count * 12500);
      } else {
        row[field] = field.includes('Name') ? clientName : field.includes('Date') ? new Date(2026, 0, count).toISOString().slice(0, 10) : `${field} ${seq}`;
      }
    });

    return row;
  });
}

const DEFAULT_ROWS_BY_MODULE = (() => {
  const generated = {};
  ERP_DATA.setup.modules.forEach((module) => {
    generated[module.name] = generateSeedRowsForModule(module.name, module.columns, 5);
  });
  ERP_DATA.transaction.modules.forEach((module) => {
    generated[module.name] = generateSeedRowsForModule(module.name, module.columns, 5);
  });
  return generated;
})();

const categoryTabs = document.getElementById('categoryTabs');
const moduleTabs = document.getElementById('moduleTabs');
const sectionTitle = document.getElementById('sectionTitle');
const selectedModuleLabel = document.getElementById('selectedModuleLabel');
const sheetHead = document.getElementById('sheetHead');
const sheetBody = document.getElementById('sheetBody');
const sheetStatus = document.getElementById('sheetStatus');
const newRecordBtn = document.getElementById('newRecordBtn');
const duplicateRecordBtn = document.getElementById('duplicateRecordBtn');
const deleteRowBtn = document.getElementById('deleteRowBtn');
const saveSheetBtn = document.getElementById('saveSheetBtn');
const budgetChangeBtn = document.getElementById('budgetChangeBtn');
const approvalBtn = document.getElementById('approvalBtn');
const exportBtn = document.getElementById('exportBtn');
const validateBtn = document.getElementById('validateBtn');
const exportCsvBtn = document.getElementById('exportCsvBtn');
const exportPdfBtn = document.getElementById('exportPdfBtn');
const postEntryBtn = document.getElementById('postEntryBtn');
const draftEntryBtn = document.getElementById('draftEntryBtn');
const createDocBtn = document.getElementById('createDocBtn');
const approveDocBtn = document.getElementById('approveDocBtn');
const projectFilter = document.getElementById('projectFilter');
const statusFilter = document.getElementById('statusFilter');
const userRoleSelect = document.getElementById('userRoleSelect');
const ledgerPreview = document.getElementById('ledgerPreview');
const documentTracker = document.getElementById('documentTracker');
const summaryTotalRows = document.getElementById('summaryTotalRows');
const summaryCompleteRows = document.getElementById('summaryCompleteRows');
const summaryMissingRows = document.getElementById('summaryMissingRows');
const summaryDraftRows = document.getElementById('summaryDraftRows');
const summaryPostedRows = document.getElementById('summaryPostedRows');
const summaryApprovedRows = document.getElementById('summaryApprovedRows');
const summaryNetValue = document.getElementById('summaryNetValue');

function buildMasterLookup() {
  const lookup = {};

  Object.entries(MASTER_RECORDS).forEach(([masterName, items]) => {
    items.forEach((item) => {
      lookup[masterName] = lookup[masterName] || {};
      if (item.id) lookup[masterName][item.id] = item;
      if (item.name) lookup[masterName][item.name] = item;
    });
  });

  return lookup;
}

const MASTER_LOOKUP = buildMasterLookup();

function setStatus(message, isSuccess = true) {
  if (!sheetStatus) return;
  sheetStatus.textContent = message;
  sheetStatus.style.background = isSuccess ? '#eaf5ea' : '#fdecec';
  sheetStatus.style.color = isSuccess ? '#1d6b2f' : '#9b2c2c';
  sheetStatus.style.borderColor = isSuccess ? '#cfe7d2' : '#f1c7c7';
}

function readStoredSheetState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
}

function readProjectBudgets() {
  try {
    const defaultBudgets = Object.fromEntries(MASTER_RECORDS.Projects.map((project) => [project.id, Number(project.budget || 0)]));
    const raw = localStorage.getItem(BUDGET_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(defaultBudgets));
      return defaultBudgets;
    }

    const parsed = JSON.parse(raw);
    const merged = { ...defaultBudgets, ...(parsed && typeof parsed === 'object' ? parsed : {}) };
    localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(merged));
    return merged;
  } catch (error) {
    const defaultBudgets = Object.fromEntries(MASTER_RECORDS.Projects.map((project) => [project.id, Number(project.budget || 0)]));
    return defaultBudgets;
  }
}

function readBudgetChangeLog() {
  try {
    const raw = localStorage.getItem(BUDGET_CHANGE_LOG_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveBudgetChangeLog(entries) {
  localStorage.setItem(BUDGET_CHANGE_LOG_KEY, JSON.stringify(entries));
  syncStateToServer();
}

function getProjectBudgetChangeLogRows() {
  const logs = readBudgetChangeLog();
  return logs
    .slice()
    .reverse()
    .map((entry) => ({
      Date: entry.date || new Date().toISOString().slice(0, 10),
      Project: entry.project || 'N/A',
      'Previous Budget': entry.previousBudget || 0,
      'New Budget': entry.newBudget || 0,
      Reason: entry.reason || 'Budget revision',
      Status: entry.status || 'Pending'
    }));
}

function saveProjectBudgets(budgets) {
  localStorage.setItem(BUDGET_STORAGE_KEY, JSON.stringify(budgets));
  syncStateToServer();
}

function readApprovalQueue() {
  try {
    const raw = localStorage.getItem(APPROVAL_STORAGE_KEY);
    const defaultQueue = [
      {
        project: 'P1 - Gulberg Plaza',
        requestedBy: 'Project Manager',
        amount: 5000000,
        reason: 'Material escalation due to market increase',
        status: 'Pending'
      },
      {
        project: 'P2 - DHA Residency',
        requestedBy: 'Cost Controller',
        amount: 3200000,
        reason: 'Additional finishing scope approval',
        status: 'Pending'
      }
    ];

    if (!raw) {
      localStorage.setItem(APPROVAL_STORAGE_KEY, JSON.stringify(defaultQueue));
      return defaultQueue;
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : defaultQueue;
  } catch (error) {
    return [];
  }
}

function saveApprovalQueue(approvals) {
  localStorage.setItem(APPROVAL_STORAGE_KEY, JSON.stringify(approvals));
  syncStateToServer();
}

function getApprovalQueueRows() {
  const queue = readApprovalQueue();

  if (!queue.length) {
    return [
      {
        Project: 'P1 - Gulberg Plaza',
        'Requested By': 'Project Manager',
        Amount: 5000000,
        Reason: 'Material escalation due to market increase',
        Status: 'Pending'
      },
      {
        Project: 'P2 - DHA Residency',
        'Requested By': 'Cost Controller',
        Amount: 3200000,
        Reason: 'Additional finishing scope approval',
        Status: 'Pending'
      }
    ];
  }

  return queue.map((entry) => ({
    Project: entry.project || 'N/A',
    'Requested By': entry.requestedBy || 'Project Manager',
    Amount: Number(entry.amount || 0),
    Reason: entry.reason || 'Project cost revision',
    Status: entry.status || 'Pending'
  }));
}

function getProjectBudget(projectId) {
  const budgets = readProjectBudgets();
  const project = MASTER_RECORDS.Projects.find((entry) => entry.id === projectId || entry.name === projectId);
  if (!project) return 0;
  return Number(budgets[project.id] ?? project.budget ?? 0);
}

function addProjectBudgetChange() {
  const projectOptions = MASTER_RECORDS.Projects.map((project) => `${project.id} - ${project.name}`).join(', ');
  const input = window.prompt(`Select project (ID or name):\n${projectOptions}`);
  if (input === null || input.trim() === '') {
    setStatus('Budget update cancelled', false);
    return;
  }

  const project = MASTER_RECORDS.Projects.find((entry) => {
    return entry.id === input.trim() || entry.name === input.trim() || `${entry.id} - ${entry.name}` === input.trim();
  });

  if (!project) {
    setStatus('Project not found for budget update', false);
    return;
  }

  const previousBudget = getProjectBudget(project.id);
  const newBudgetInput = window.prompt(`Enter updated budget for ${project.name} (amount in USD):`);
  if (newBudgetInput === null || newBudgetInput.trim() === '') {
    setStatus('Budget value is required', false);
    return;
  }

  const numericBudget = Number(String(newBudgetInput).replace(/[^0-9.-]/g, ''));
  if (!Number.isFinite(numericBudget)) {
    setStatus('Budget value must be numeric', false);
    return;
  }

  const reason = window.prompt('Reason for change (optional):', 'Budget revision') || 'Budget revision';
  const budgets = readProjectBudgets();
  budgets[project.id] = numericBudget;
  saveProjectBudgets(budgets);

  const approvalQueue = readApprovalQueue();
  approvalQueue.push({
    project: project.name,
    requestedBy: 'Project Manager',
    amount: numericBudget,
    reason,
    status: 'Pending',
    createdAt: new Date().toISOString()
  });
  saveApprovalQueue(approvalQueue);

  const logEntries = readBudgetChangeLog();
  logEntries.push({
    date: new Date().toISOString().slice(0, 10),
    project: project.name,
    previousBudget,
    newBudget: numericBudget,
    reason,
    status: 'Pending'
  });
  saveBudgetChangeLog(logEntries);

  const projectIndex = MASTER_RECORDS.Projects.findIndex((entry) => entry.id === project.id);
  if (projectIndex >= 0) {
    MASTER_RECORDS.Projects[projectIndex] = { ...MASTER_RECORDS.Projects[projectIndex], budget: numericBudget };
  }

  render();
  setStatus(`Budget change requested for ${project.name} (${reason})`, true);
}

function approvePendingProjectChange() {
  const approvals = readApprovalQueue();
  const pending = approvals.find((entry) => entry.status === 'Pending');

  if (!pending) {
    setStatus('No pending project approval requests', false);
    return;
  }

  const project = MASTER_RECORDS.Projects.find((entry) => entry.name === pending.project || `${entry.id} - ${entry.name}` === pending.project);
  const previousBudget = project ? getProjectBudget(project.id) : 0;
  const newBudget = Number(pending.amount || 0);

  if (project) {
    const budgets = readProjectBudgets();
    budgets[project.id] = newBudget;
    saveProjectBudgets(budgets);
  }

  const logEntries = readBudgetChangeLog();
  const updatedLog = logEntries.map((entry) => {
    if (entry.project === pending.project && entry.status === 'Pending') {
      return { ...entry, newBudget, status: 'Approved' };
    }
    return entry;
  });
  saveBudgetChangeLog(updatedLog);

  const pendingIndex = approvals.findIndex((entry) => entry.status === 'Pending');
  if (pendingIndex >= 0) {
    approvals[pendingIndex] = { ...approvals[pendingIndex], status: 'Approved' };
    saveApprovalQueue(approvals);
  }

  render();
  setStatus(project ? `Project approval approved for ${project.name}` : 'Project approval approved', true);
}

function getModuleStorageKey() {
  return `${selectedCategory}:${selectedModule}`;
}

function getModuleColumns(moduleName) {
  const allModules = [...ERP_DATA.setup.modules, ...ERP_DATA.transaction.modules];
  const columns = (allModules.find((module) => module.name === moduleName) || {}).columns || [];
  return ['Transaction No', ...columns];
}

function getColumnWidthState(moduleName) {
  const key = `${selectedCategory}:${moduleName}`;
  if (!columnWidthState[key]) {
    columnWidthState[key] = {};
  }
  return columnWidthState[key];
}

function applyColumnWidthStyle(cell, columnIndex, moduleName) {
  const width = getColumnWidthState(moduleName)[columnIndex];
  if (width) {
    cell.style.width = `${width}px`;
    cell.style.minWidth = `${width}px`;
    cell.style.maxWidth = `${width}px`;
  }
}

function stripInternalRowMetadata(row) {
  if (!row || typeof row !== 'object') return {};

  const cleanRow = {};
  Object.entries(row).forEach(([key, value]) => {
    if (key === '__order' || key === '__isNew') return;
    cleanRow[key] = value;
  });

  return cleanRow;
}

function getNextTransactionNumber(rows) {
  const values = (Array.isArray(rows) ? rows : [])
    .map((row) => Number(row && typeof row === 'object' ? (row.__txnNo ?? row['Transaction No'] ?? row.__order ?? 0) : 0))
    .filter((value) => Number.isFinite(value) && value > 0);

  return values.length ? Math.max(...values) + 1 : 1;
}

function hasLegacySeedPattern(rows, moduleName) {
  if (!Array.isArray(rows) || rows.length === 0) return true;

  const columns = getModuleColumns(moduleName);
  if (columns.length === 0) return false;

  const ignoredKeys = new Set(['__order', '__isNew', '__txnNo', 'Transaction No']);
  const cleanedRows = rows.map(stripInternalRowMetadata);
  const sample = cleanedRows[0] || {};
  const projectCode = sample['Project Code'] || sample['Project ID'] || sample['Project'] || '';
  const clientName = sample['Client Name'] || sample['Vendor Name'] || sample['Employee Name'] || sample['Worker Name'] || '';

  if (typeof projectCode === 'string' && /^[A-Za-z]+ \d+$/.test(projectCode.trim())) {
    return true;
  }

  if (typeof clientName === 'string' && /^[A-Za-z]+ \d+$/.test(clientName.trim())) {
    return true;
  }

  const hasUnexpectedKey = cleanedRows.some((row) => {
    return Object.keys(row).some((key) => !columns.includes(key) && !ignoredKeys.has(key));
  });

  return hasUnexpectedKey;
}

function normalizeModuleRows(moduleName, rows, minimumRows = 5) {
  const sourceRows = Array.isArray(rows) ? rows : [];
  const seedRows = DEFAULT_ROWS_BY_MODULE[moduleName] || [];
  const columns = getModuleColumns(moduleName);

  const normalizedSource = sourceRows
    .map(stripInternalRowMetadata)
    .map((row) => ({ ...row }));

  if (sourceRows.length > 0 && !hasLegacySeedPattern(sourceRows, moduleName)) {
    return normalizeRowOrder(normalizedSource);
  }

  const generatedRows = columns.length > 0
    ? generateSeedRowsForModule(moduleName, columns, Math.max(minimumRows, sourceRows.length || minimumRows))
    : sourceRows.map((row) => ({ ...row }));

  if (generatedRows.length >= minimumRows) {
    return normalizeRowOrder(generatedRows).map((row) => ({ ...row }));
  }

  const normalized = normalizedSource.map((row) => ({ ...row }));
  const templateRows = seedRows.length > 0 ? seedRows : [{}];

  while (normalized.length < minimumRows) {
    const template = templateRows[normalized.length % templateRows.length] || {};
    normalized.push({ ...template });
  }

  return normalizeRowOrder(normalized);
}

function getSeedRowsForCurrentModule() {
  const seedRows = DEFAULT_ROWS_BY_MODULE[selectedModule] || DEFAULT_ROWS_BY_MODULE[ERP_DATA[selectedCategory].modules[0].name] || [{ }];
  return normalizeModuleRows(selectedModule, seedRows, 5).map((row) => ({ ...row }));
}

function getProjectBudgetRows() {
  const entries = readLedgerEntries();

  return MASTER_RECORDS.Projects.map((project) => {
    const projectEntries = entries.filter((entry) => {
      return entry.project === project.id || entry.project === project.name;
    });

    const actual = projectEntries.reduce((sum, entry) => sum + getNumericValue(entry.amount), 0);
    const budget = getProjectBudget(project.id);
    const variance = budget - actual;
    const status = variance > 0 ? 'On Track' : variance < 0 ? 'Over Budget' : 'Balanced';

    return {
      Project: project.name,
      Budget: budget,
      Actual: actual,
      Variance: variance,
      Status: status
    };
  });
}

function getProjectVarianceRows() {
  const entries = readLedgerEntries();

  return MASTER_RECORDS.Projects.map((project) => {
    const projectEntries = entries.filter((entry) => {
      return entry.project === project.id || entry.project === project.name;
    });

    const planned = getProjectBudget(project.id);
    const actual = projectEntries.reduce((sum, entry) => sum + getNumericValue(entry.amount), 0);
    const variance = actual - planned;
    const status = variance <= 0 ? 'Below Budget' : 'Above Budget';

    return {
      Project: project.name,
      Planned: planned,
      Actual: actual,
      Variance: variance,
      Status: status
    };
  });
}

function getProjectReportRows() {
  const entries = readLedgerEntries();

  return MASTER_RECORDS.Projects.map((project) => {
    const projectEntries = entries.filter((entry) => {
      return entry.project === project.id || entry.project === project.name;
    });

    const revenue = projectEntries
      .filter((entry) => {
        const module = entry.module || '';
        return module.includes('Sales') || module.includes('Invoice') || module.includes('Quotation') || module.includes('Order');
      })
      .reduce((sum, entry) => sum + getNumericValue(entry.amount), 0);

    const cost = projectEntries
      .filter((entry) => {
        const module = entry.module || '';
        return module.includes('Purchase') || module.includes('Cash') || module.includes('Bank') || module.includes('Payroll') || module.includes('Wages') || module.includes('General') || module.includes('Journal');
      })
      .reduce((sum, entry) => sum + getNumericValue(entry.amount), 0);

    const profit = revenue - cost;
    const projectBudget = getProjectBudget(project.id);
    const margin = projectBudget ? (profit / projectBudget) * 100 : 0;
    const status = profit >= 0 ? 'Healthy' : 'At Risk';

    return {
      Project: project.name,
      Cost: cost,
      Revenue: revenue,
      Profit: profit,
      Status: margin >= 10 ? 'Healthy' : status
    };
  });
}

function normalizeRowOrder(rows) {
  if (!Array.isArray(rows)) return [];

  return rows
    .map((row, index) => {
      const currentTxn = row && typeof row === 'object' ? Number(row.__txnNo ?? row['Transaction No'] ?? row.__order ?? 0) : NaN;
      const transactionNo = Number.isFinite(currentTxn) && currentTxn > 0 ? currentTxn : (index + 1);
      const currentOrder = row && typeof row === 'object' ? Number(row.__order) : NaN;
      const safeOrder = Number.isFinite(currentOrder) && currentOrder > 0 ? currentOrder : (index + 1);

      return {
        ...row,
        __txnNo: transactionNo,
        'Transaction No': transactionNo,
        __order: safeOrder
      };
    })
    .sort((left, right) => Number(right.__txnNo ?? right['Transaction No'] ?? right.__order ?? 0) - Number(left.__txnNo ?? left['Transaction No'] ?? left.__order ?? 0));
}

function getCurrentRowState() {
  const key = getModuleStorageKey();
  if (selectedCategory === 'reporting' && (selectedModule === 'Project Budget' || selectedModule === 'Project Approval Queue' || selectedModule === 'Project Report' || selectedModule === 'Project Varience Report')) {
    if (selectedModule === 'Project Approval Queue') return getApprovalQueueRows();
    if (selectedModule === 'Project Report') return getProjectReportRows();
    if (selectedModule === 'Project Varience Report') return getProjectVarianceRows();
    return getProjectBudgetRows();
  }

  const savedState = readStoredSheetState();
  const currentRows = moduleState[key];

  const rows = Array.isArray(savedState[key]) && savedState[key].length > 0
    ? normalizeModuleRows(selectedModule, savedState[key], 5)
    : getSeedRowsForCurrentModule();

  const normalizedRows = normalizeRowOrder(rows);

  if (!Array.isArray(currentRows) || currentRows.length < 5 || hasLegacySeedPattern(currentRows, selectedModule)) {
    moduleState[key] = normalizedRows;
    savedState[key] = normalizedRows;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
  }

  return normalizeRowOrder(moduleState[key] || normalizedRows);
}

function persistCurrentRowState(rows) {
  const key = getModuleStorageKey();
  const orderedRows = normalizeRowOrder(rows).map((row, index) => {
    const transactionNo = Number(row.__txnNo ?? row['Transaction No'] ?? 0);
    const nextTransactionNumber = Number.isFinite(transactionNo) && transactionNo > 0
      ? transactionNo
      : getNextTransactionNumber(rows) + index;
    const currentOrder = Number(row.__order);
    const nextOrder = Number.isFinite(currentOrder) && currentOrder > 0
      ? currentOrder
      : (Date.now() + (index + 1));

    return {
      ...stripInternalRowMetadata(row),
      __txnNo: nextTransactionNumber,
      'Transaction No': nextTransactionNumber,
      __order: nextOrder,
      __isNew: Boolean(row.__isNew)
    };
  });

  moduleState[key] = orderedRows;

  const savedState = readStoredSheetState();
  savedState[key] = orderedRows;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
  syncStateToServer();
}

function getReferenceOptions(fieldName) {
  const normalized = fieldName.trim();

  if (normalized.includes('Client') && normalized.includes('Name')) {
    return MASTER_RECORDS.Client.map((item) => item.name);
  }
  if (normalized.includes('Client') && normalized.includes('Code')) {
    return MASTER_RECORDS.Client.map((item) => item.id);
  }
  if (normalized.includes('Supplier') && normalized.includes('Name')) {
    return MASTER_RECORDS.Vendor.map((item) => item.name);
  }
  if (normalized.includes('Supplier') && normalized.includes('Code')) {
    return MASTER_RECORDS.Vendor.map((item) => item.id);
  }
  if (normalized.includes('Employee') && (normalized.includes('Name') || normalized.includes('ID'))) {
    return [...MASTER_RECORDS.Employee.map((item) => item.name), ...MASTER_RECORDS.Employee.map((item) => item.id)];
  }
  if (normalized.includes('Worker') && (normalized.includes('Name') || normalized.includes('ID'))) {
    return [...MASTER_RECORDS.Worker.map((item) => item.name), ...MASTER_RECORDS.Worker.map((item) => item.id)];
  }
  if (normalized.includes('Project') && normalized.includes('Code')) {
    return MASTER_RECORDS.Projects.map((item) => item.id);
  }
  if (normalized.includes('Project') && normalized.includes('Name')) {
    return MASTER_RECORDS.Projects.map((item) => item.name);
  }
  if (normalized.includes('Phase') || normalized.includes('Project Phase')) {
    return MASTER_RECORDS['Project Phases'].map((item) => item.name);
  }
  if (normalized.includes('Activity')) {
    return MASTER_RECORDS.Activities.map((item) => item.name);
  }
  if (normalized.includes('Cost Center')) {
    return MASTER_RECORDS['Cost Centers'].map((item) => item.name);
  }
  if (normalized.includes('Cost Category')) {
    return MASTER_RECORDS['Cost Categories'].map((item) => item.name);
  }
  if (normalized.includes('Product') || normalized.includes('Item')) {
    return MASTER_RECORDS['Products / Services'].map((item) => item.name);
  }
  if (normalized.includes('GL') || normalized.includes('Account')) {
    return MASTER_RECORDS['GL Accounts'].map((item) => item.name);
  }

  return [];
}

function syncRelatedFields(row, key, value) {
  if (!row || !value) return row;

  const itemByName = MASTER_LOOKUP.Client?.[value];
  const itemById = MASTER_LOOKUP.Client?.[value];

  if (key === 'Client Code' || key === 'Client Name') {
    const client = MASTER_RECORDS.Client.find((entry) => entry.id === value || entry.name === value);
    if (client) {
      row['Client Code'] = client.id;
      row['Client Name'] = client.name;
    }
  }

  if (key === 'Supplier Code' || key === 'Supplier Name') {
    const vendor = MASTER_RECORDS.Vendor.find((entry) => entry.id === value || entry.name === value);
    if (vendor) {
      row['Supplier Code'] = vendor.id;
      row['Supplier Name'] = vendor.name;
    }
  }

  if (key === 'Project Code' || key === 'Project Name') {
    const project = MASTER_RECORDS.Projects.find((entry) => entry.id === value || entry.name === value);
    if (project) {
      row['Project Code'] = project.id;
      row['Project Name'] = project.name;
    }
  }

  if (key === 'Employee Name' || key === 'Emp ID') {
    const employee = MASTER_RECORDS.Employee.find((entry) => entry.name === value || entry.id === value);
    if (employee) {
      row['Emp ID'] = employee.id;
      row['Employee Name'] = employee.name;
    }
  }

  if (key === 'Worker Name' || key === 'Worker ID') {
    const worker = MASTER_RECORDS.Worker.find((entry) => entry.name === value || entry.id === value);
    if (worker) {
      row['Worker ID'] = worker.id;
      row['Worker Name'] = worker.name;
    }
  }

  return row;
}

function validateRow(row, columns) {
  const requiredFields = columns.filter((column) => {
    if (column === 'Actions') return false;
    if (column.includes('Date') || column.includes('Trx. Reference No.')) return true;
    if (column.includes('ID') || column.includes('Code') || column.includes('Name')) return false;
    return true;
  });

  if (selectedModule === 'Client') {
    requiredFields.push('Client Name');
  }

  const missing = requiredFields.filter((field) => {
    const value = row[field];
    return value === undefined || String(value).trim() === '';
  });

  return {
    valid: missing.length === 0,
    missing
  };
}

function validateSheet() {
  const rows = getCurrentRowState();
  const currentModule = getCurrentModules().find((module) => module.name === selectedModule) || getCurrentModules()[0];
  const validations = rows.map((row) => validateRow(row, currentModule.columns));
  const invalidRows = validations.filter((item) => !item.valid).length;

  if (invalidRows === 0) {
    setStatus(`Validated: ${rows.length} rows are complete`, true);
    return { valid: true, invalidRows: 0 };
  }

  setStatus(`Validation issues: ${invalidRows} rows need review`, false);
  return { valid: false, invalidRows, details: validations };
}

function getNumericValue(value) {
  if (value === null || value === undefined || value === '') return 0;
  const parsed = Number(String(value).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
}

function updateSummaryVisibility() {
  const isSetupModule = selectedCategory === 'setup';
  const cardsToHide = ['summaryDraftRows', 'summaryPostedRows', 'summaryApprovedRows', 'summaryNetValue'];

  cardsToHide.forEach((id) => {
    const card = document.getElementById(id)?.closest('.summary-card');
    if (card) {
      card.style.display = isSetupModule ? 'none' : 'flex';
    }
  });
}

function renderSummary() {
  updateSummaryVisibility();

  const rows = getCurrentRowState();
  const currentModule = getCurrentModules().find((module) => module.name === selectedModule) || getCurrentModules()[0];
  const selectedProject = projectFilter?.value || 'All Projects';
  const projectMap = Object.fromEntries(MASTER_RECORDS.Projects.map((project) => [project.id, project.name]));

  const filteredRows = selectedProject === 'All Projects'
    ? rows
    : rows.filter((row) => {
        const rowProjectCode = row['Project Code'] || row['Project ID'] || row['Project'] || '';
        const rowProjectName = row['Project Name'] || row['Project/Site'] || '';
        return rowProjectCode === selectedProject || rowProjectName === selectedProject || rowProjectName === projectMap[selectedProject];
      });

  const completeRows = filteredRows.filter((row) => {
    const result = validateRow(row, currentModule.columns);
    return result.valid;
  }).length;

  const missingRows = filteredRows.length - completeRows;

  const totalAmount = filteredRows.reduce((sum, row) => {
    const values = Object.entries(row).map(([field, value]) => {
      if (field.toLowerCase().includes('amount') || field.toLowerCase().includes('value') || field.toLowerCase().includes('cost') || field.toLowerCase().includes('receipt') || field.toLowerCase().includes('payment') || field.toLowerCase().includes('deposit') || field.toLowerCase().includes('withdrawal') || field.toLowerCase().includes('balance') || field.toLowerCase().includes('gross') || field.toLowerCase().includes('net')) {
        return getNumericValue(value);
      }
      return 0;
    });
    return sum + values.reduce((innerSum, num) => innerSum + num, 0);
  }, 0);

  const ledgerEntries = readLedgerEntries();
  const selectedStatus = statusFilter?.value || 'All';
  const projectLedger = (selectedProject === 'All Projects' ? ledgerEntries : ledgerEntries.filter((entry) => {
    return entry.project === selectedProject || entry.project === projectMap[selectedProject];
  })).filter((entry) => selectedStatus === 'All' || entry.status === selectedStatus);

  const draftRows = projectLedger.filter((entry) => entry.status === 'Draft').length;
  const postedRows = projectLedger.filter((entry) => entry.status === 'Posted').length;
  const approvedRows = projectLedger.filter((entry) => entry.status === 'Approved').length;
  const ledgerValue = projectLedger.reduce((sum, entry) => sum + getNumericValue(entry.amount), 0);

  if (summaryTotalRows) summaryTotalRows.textContent = String(filteredRows.length);
  if (summaryCompleteRows) summaryCompleteRows.textContent = String(completeRows);
  if (summaryMissingRows) summaryMissingRows.textContent = String(missingRows);
  if (summaryDraftRows) summaryDraftRows.textContent = String(draftRows);
  if (summaryPostedRows) summaryPostedRows.textContent = String(postedRows);
  if (summaryApprovedRows) summaryApprovedRows.textContent = String(approvedRows);
  if (summaryNetValue) summaryNetValue.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(ledgerValue || totalAmount);
}

function readLedgerEntries() {
  try {
    const raw = localStorage.getItem('tlaerp-ledger');
    const parsed = raw ? JSON.parse(raw) : [];
    const meaningfulEntries = (Array.isArray(parsed) ? parsed : []).filter((entry) => {
      if (!entry || !entry.project || entry.project === 'N/A') return false;
      return getNumericValue(entry.amount) > 0 || (entry.module && (entry.module.includes('Sales') || entry.module.includes('Purchase') || entry.module.includes('Bank') || entry.module.includes('Cash')));
    });

    if (meaningfulEntries.length > 0) return meaningfulEntries;

    const sampleEntries = [
      { date: '2026-10-01', module: 'Cash Books', reference: 'CB-001', party: 'Site Team', project: 'PR-001', amount: 150000, status: 'Posted' },
      { date: '2026-10-02', module: 'Bank Books', reference: 'BK-001', party: 'Cement Supply Co', project: 'PR-001', amount: 500000, status: 'Posted' },
      { date: '2026-10-05', module: 'Sales Journal', reference: 'SJ-001', party: 'Alpha Construction', project: 'PR-001', amount: 750000, status: 'Approved' },
      { date: '2026-10-08', module: 'Cash Books', reference: 'CB-002', party: 'Labour Crew', project: 'PR-002', amount: 220000, status: 'Posted' },
      { date: '2026-10-10', module: 'Purchase Journal', reference: 'PJ-002', party: 'Steel Pro Traders', project: 'PR-002', amount: 410000, status: 'Posted' },
      { date: '2026-10-12', module: 'Sales Journal', reference: 'SJ-002', party: 'BlueStar Developments', project: 'PR-002', amount: 890000, status: 'Approved' },
      { date: '2026-10-14', module: 'Bank Books', reference: 'BK-002', party: 'M&E Solutions', project: 'PR-003', amount: 380000, status: 'Posted' },
      { date: '2026-10-15', module: 'Purchase Journal', reference: 'PJ-003', party: 'M&E Solutions', project: 'PR-003', amount: 310000, status: 'Posted' },
      { date: '2026-10-18', module: 'Sales Journal', reference: 'SJ-003', party: 'CivilWorks Ltd', project: 'PR-003', amount: 640000, status: 'Approved' }
    ];

    localStorage.setItem('tlaerp-ledger', JSON.stringify(sampleEntries));
    return sampleEntries;
  } catch (error) {
    return [];
  }
}

function saveLedgerEntries(entries) {
  localStorage.setItem('tlaerp-ledger', JSON.stringify(entries));
  syncStateToServer();
}

function getAmountFromRow(row) {
  const candidateFields = ['Amount', 'Net Receivable', 'Net Payable', 'Net Amount', 'Receipt', 'Payment', 'Deposit', 'Withdrawal', 'Opening Balance', 'Running Balance', 'Gross Amount Paid', 'Project Value', 'Project Cost', 'Gross Wages', 'Net Wages', 'Net Salary'];
  for (const field of candidateFields) {
    if (row[field] !== undefined && row[field] !== '') return getNumericValue(row[field]);
  }

  const matching = Object.entries(row).filter(([key, value]) => {
    const name = key.toLowerCase();
    return (name.includes('amount') || name.includes('value') || name.includes('cost') || name.includes('receipt') || name.includes('payment') || name.includes('deposit') || name.includes('withdrawal') || name.includes('balance') || name.includes('gross') || name.includes('net')) && value !== '' && value !== undefined;
  });

  return matching.reduce((sum, [, value]) => sum + getNumericValue(value), 0);
}

function getPartyFromRow(row) {
  const partyKeys = ['Client Name', 'Supplier Name', 'Vendor Name', 'Party Name', 'Employee Name', 'Worker Name', 'Payee Name', 'Customer', 'Vendor'];
  for (const key of partyKeys) {
    if (row[key]) return row[key];
  }
  return 'N/A';
}

function getReferenceFromRow(row) {
  const refKeys = ['Trx. Reference No.', 'Cash Voucher No.', 'Bank Voucher No.', 'Purchase Invoice No.', 'Sales Invoice No.', 'GJ Document No.', 'Doc No.', 'Invoice No.'];
  for (const key of refKeys) {
    if (row[key]) return row[key];
  }
  return `${selectedModule}-${Date.now()}`;
}

function buildLedgerEntries(rows, status) {
  return rows
    .filter((row) => Object.keys(row).length > 0)
    .map((row) => ({
      id: `${selectedModule}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      module: selectedModule,
      date: row.Date || new Date().toISOString().slice(0, 10),
      reference: getReferenceFromRow(row),
      party: getPartyFromRow(row),
      project: row['Project Code'] || row['Project Name'] || row['Project/Site'] || 'N/A',
      amount: getAmountFromRow(row),
      status,
      createdAt: new Date().toISOString()
    }));
}

function renderLedger() {
  if (!ledgerPreview) return;
  if (selectedCategory === 'reporting' || selectedCategory === 'documents') {
    ledgerPreview.innerHTML = '';
    if (ledgerPreview.parentElement) ledgerPreview.parentElement.style.display = 'none';
    return;
  }

  const entries = readLedgerEntries();
  const projectValue = projectFilter?.value || 'All Projects';
  const statusValue = statusFilter?.value || 'All';
  const filteredEntries = entries.filter((entry) => {
    const matchesProject = projectValue === 'All Projects' || entry.project === projectValue || entry.project === 'PR-001' || entry.project === 'PR-002' || entry.project === 'PR-003';
    const matchesStatus = statusValue === 'All' || entry.status === statusValue;
    return matchesProject && matchesStatus;
  });

  const helper = `
    <div class="panel-note">
      <strong>Posting and ledger:</strong> Each posted entry is written into the financial ledger with date, reference, party, project and current status. This helps track what was posted, where it belongs, and whether it is draft, posted or approved.
    </div>
  `;

  if (!filteredEntries.length) {
    ledgerPreview.innerHTML = `${helper}<p class="empty-ledger">No ledger entries yet. Post a transaction to begin.</p>`;
    return;
  }

  const rows = filteredEntries
    .slice()
    .reverse()
    .map((entry) => `
    <tr>
      <td>${entry.date}</td>
      <td>${entry.module}</td>
      <td>${entry.reference}</td>
      <td>${entry.party}</td>
      <td>${entry.project}</td>
      <td>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(entry.amount)}</td>
      <td><span class="ledger-status ${entry.status.toLowerCase()}">${entry.status}</span></td>
    </tr>
  `).join('');

  ledgerPreview.innerHTML = `
    ${helper}
    <table class="ledger-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Module</th>
          <th>Reference</th>
          <th>Party</th>
          <th>Project</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function readDocumentEntries() {
  try {
    const raw = localStorage.getItem('tlaerp-documents');
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveDocumentEntries(entries) {
  localStorage.setItem('tlaerp-documents', JSON.stringify(entries));
  syncStateToServer();
}

function getDocumentRows() {
  const rows = getCurrentRowState();
  if (!rows.length) return [];

  return rows.map((row, index) => ({
    id: `DOC-${selectedModule}-${index + 1}`,
    code: row['Trx. Reference No.'] || row['Doc No.'] || row['Sales Invoice No.'] || row['Purchase Invoice No.'] || `${selectedModule}-${index + 1}`,
    module: selectedModule,
    type: selectedModule,
    party: getPartyFromRow(row),
    project: row['Project Code'] || row['Project Name'] || row['Project/Site'] || 'N/A',
    status: 'Draft',
    dueDate: row.Date || new Date().toISOString().slice(0, 10),
    attachment: row['File Ref.'] ? 'Attached' : 'Pending'
  }));
}

function getFilteredDocumentEntries() {
  const entries = readDocumentEntries();
  const matchingProject = projectFilter?.value || 'All Projects';
  const matchingStatus = statusFilter?.value || 'All';

  return entries.filter((entry) => {
    const projectMatch = matchingProject === 'All Projects' || entry.project === matchingProject;
    const statusMatch = matchingStatus === 'All' || entry.status === matchingStatus;
    return projectMatch && statusMatch;
  });
}

function renderDocumentTracker() {
  if (!documentTracker) return;
  if (selectedCategory === 'reporting' || selectedCategory === 'documents') {
    documentTracker.innerHTML = '';
    if (documentTracker.parentElement) documentTracker.parentElement.style.display = 'none';
    return;
  }

  const entries = getFilteredDocumentEntries();
  const source = entries.length ? entries : getDocumentRows();
  const helper = `
    <div class="panel-note">
      <strong>Document tracker:</strong> This log shows all generated documents, their status, project, and attachment status. Use it to review drafts, posted documents and approved approvals without losing context.
    </div>
  `;

  if (!source.length) {
    documentTracker.innerHTML = `${helper}<p class="empty-ledger">No document records yet.</p>`;
    return;
  }

  const rows = source
    .slice()
    .reverse()
    .map((entry) => {
      const statusClass = (entry.status || 'Draft').toLowerCase();
      return `
      <tr>
        <td>${entry.code}</td>
        <td>${entry.type}</td>
        <td>${entry.module}</td>
        <td>${entry.party}</td>
        <td>${entry.project}</td>
        <td>${entry.dueDate}</td>
        <td>${entry.attachment || 'Attached'}</td>
        <td><span class="ledger-status ${statusClass}">${entry.status || 'Draft'}</span></td>
      </tr>
    `;
    }).join('');

  documentTracker.innerHTML = `
    ${helper}
    <table class="ledger-table">
      <thead>
        <tr>
          <th>Doc No.</th>
          <th>Type</th>
          <th>Module</th>
          <th>Party</th>
          <th>Project</th>
          <th>Due Date</th>
          <th>Attachment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function postCurrentEntries(status) {
  if (status === 'Posted' && !ensurePermission('postEntry', 'post entries')) return;
  if (status === 'Draft' && !ensurePermission('draftEntry', 'mark entries as draft')) return;
  const rows = getCurrentRowState();
  const ledgerEntries = readLedgerEntries();
  const newEntries = buildLedgerEntries(rows, status);
  saveLedgerEntries([...ledgerEntries, ...newEntries]);
  renderLedger();
  setStatus(`${status} entries recorded`, true);
}

function createDocument() {
  if (!ensurePermission('createDoc', 'create documents')) return;
  const documents = readDocumentEntries();
  const queue = getDocumentRows();
  const existingCodes = new Set(documents.map((doc) => doc.code));
  const nextDocs = [...documents];

  queue.forEach((doc) => {
    if (existingCodes.has(doc.code)) {
      const index = nextDocs.findIndex((entry) => entry.code === doc.code);
      if (index >= 0) nextDocs[index] = { ...nextDocs[index], ...doc, status: 'Draft' };
      return;
    }

    nextDocs.push({ ...doc, status: 'Draft' });
    existingCodes.add(doc.code);
  });

  saveDocumentEntries(nextDocs);
  renderDocumentTracker();
  setStatus('Document created', true);
}

function approveDocument() {
  if (!ensurePermission('approveDoc', 'approve documents')) return;
  const documents = readDocumentEntries();
  const targetProject = projectFilter?.value || 'All Projects';
  const updatedDocs = documents.map((doc) => {
    const matchesProject = targetProject === 'All Projects' || doc.project === targetProject;
    return matchesProject ? { ...doc, status: 'Approved', attachment: doc.attachment || 'Attached' } : doc;
  });

  saveDocumentEntries(updatedDocs);
  renderDocumentTracker();
  setStatus('Document approved', true);
}

function getCurrentModules() {
  return ERP_DATA[selectedCategory].modules;
}

function renderCategoryTabs() {
  categoryTabs.innerHTML = '';

  Object.entries(ERP_DATA).forEach(([key, value]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `category-tab ${selectedCategory === key ? 'active' : ''}`;
    button.textContent = value.label;
    button.addEventListener('click', () => {
      selectedCategory = key;
      const firstModule = ERP_DATA[key].modules[0].name;
      selectedModule = firstModule;
      persistNavigationState();
      render();
    });
    categoryTabs.appendChild(button);
  });
}

function renderModuleTabs() {
  moduleTabs.innerHTML = '';
  const modules = getCurrentModules();

  modules.forEach((module) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `module-tab ${selectedModule === module.name ? 'active' : ''}`;
    button.textContent = module.name;
    button.addEventListener('click', () => {
      selectedModule = module.name;
      persistNavigationState();
      renderTable();
      renderModuleTabs();
    });
    moduleTabs.appendChild(button);
  });
}

function getColumnFiltersForCurrentModule() {
  const key = `${selectedCategory}:${selectedModule}`;
  columnFiltersByModule[key] = columnFiltersByModule[key] || {};
  return columnFiltersByModule[key];
}

function applyColumnFilters(rows, columns) {
  const filters = getColumnFiltersForCurrentModule();

  return rows
    .map((row, originalIndex) => ({ row, originalIndex }))
    .filter(({ row }) => {
      return columns.every((column) => {
        const rawValue = filters[column];
        if (rawValue === undefined || rawValue === null || String(rawValue).trim() === '') {
          return true;
        }

        const rowValue = row[column] ?? '';
        return String(rowValue).toLowerCase().includes(String(rawValue).trim().toLowerCase());
      });
    });
}

function getRunningBalanceForRow(rows, rowIndex) {
  const effectiveRows = Array.isArray(rows) ? rows : [];
  const chronologicalRows = effectiveRows
    .map((row) => ({ ...row, __txnNo: Number(row.__txnNo ?? row['Transaction No'] ?? row.__order ?? 0) }))
    .sort((left, right) => Number(left.__txnNo) - Number(right.__txnNo));

  let runningBalance = 0;
  for (let index = 0; index <= rowIndex; index += 1) {
    const row = chronologicalRows[index] || {};
    if (selectedModule === 'Cash Books') {
      runningBalance += getNumericValue(row['Receipt']) - getNumericValue(row['Payment']);
    } else if (selectedModule === 'Bank Books') {
      runningBalance += getNumericValue(row['Deposit']) - getNumericValue(row['Withdrawal']);
    }
  }

  return runningBalance;
}

function reconcileRunningBalances(rows) {
  const effectiveRows = Array.isArray(rows) ? rows.map((row) => ({ ...row })) : [];

  if (selectedModule !== 'Cash Books' && selectedModule !== 'Bank Books') {
    return normalizeRowOrder(effectiveRows);
  }

  const chronologicalRows = [...effectiveRows]
    .map((row) => ({
      ...row,
      __txnNo: Number(row.__txnNo ?? row['Transaction No'] ?? row.__order ?? 0)
    }))
    .sort((left, right) => Number(left.__txnNo) - Number(right.__txnNo));

  let cumulativeBalance = 0;
  const runningBalanceByTxn = new Map();

  chronologicalRows.forEach((row) => {
    if (selectedModule === 'Cash Books') {
      cumulativeBalance += getNumericValue(row['Receipt']) - getNumericValue(row['Payment']);
    } else if (selectedModule === 'Bank Books') {
      cumulativeBalance += getNumericValue(row['Deposit']) - getNumericValue(row['Withdrawal']);
    }

    runningBalanceByTxn.set(String(row.__txnNo), cumulativeBalance);
  });

  return effectiveRows
    .map((row) => ({
      ...row,
      __txnNo: Number(row.__txnNo ?? row['Transaction No'] ?? row.__order ?? 0),
      'Running Balance': runningBalanceByTxn.get(String(Number(row.__txnNo ?? row['Transaction No'] ?? row.__order ?? 0))) ?? 0
    }))
    .sort((left, right) => Number(right.__txnNo ?? right['Transaction No'] ?? right.__order ?? 0) - Number(left.__txnNo ?? left['Transaction No'] ?? left.__order ?? 0));
}

function refreshRunningBalanceInputsFromRows(rows) {
  const rowsInDom = Array.from(sheetBody?.querySelectorAll('tr') || []);
  if (!rowsInDom.length) return;

  rowsInDom.forEach((rowEl, index) => {
    const rowInputs = Array.from(rowEl.querySelectorAll('input'));
    const balanceInput = rowInputs.find((input) => input.placeholder === 'Running Balance');
    if (!balanceInput) return;

    const rowData = rows[index];
    if (!rowData) return;
    const value = rowData['Running Balance'];
    if (value !== undefined && value !== null) {
      balanceInput.value = value;
    }
  });
}

function applyStickyHeaderStyles() {
  const rows = sheetHead.querySelectorAll('tr');
  rows.forEach((row, rowIndex) => {
    row.querySelectorAll('th').forEach((cell) => {
      cell.style.position = 'sticky';
      cell.style.top = rowIndex === 0 ? '0px' : '35px';
      cell.style.zIndex = String(rowIndex === 0 ? 3 : 4);
      cell.style.background = rowIndex === 0 ? '#edf3fa' : '#f8fafc';
      cell.style.color = '#1f2a3d';
      cell.style.fontWeight = '700';
    });
  });
}

function renderDataTableBody(currentModule, rows) {
  const visibleColumns = getModuleColumns(currentModule.name);
  const visibleRows = applyColumnFilters(reconcileRunningBalances(normalizeRowOrder(rows)), visibleColumns);
  sheetBody.innerHTML = '';

  visibleRows.forEach(({ row: rowState, originalIndex: rowIndex }) => {
    const row = document.createElement('tr');

    visibleColumns.forEach((column, columnIndex) => {
      if (column === 'Transaction No') {
        const cell = document.createElement('td');
        cell.dataset.columnIndex = String(columnIndex);
        applyColumnWidthStyle(cell, columnIndex, currentModule.name);
        const transactionNo = rowState['Transaction No'] ?? rowState.__txnNo ?? 0;
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'data-input';
        input.placeholder = 'Transaction No';
        input.value = transactionNo;
        input.readOnly = true;
        input.style.background = '#f4f7fb';
        input.addEventListener('focus', () => {
          activeRowIndex = rowIndex;
        });
        cell.appendChild(input);
        row.appendChild(cell);
        return;
      }

      const cell = document.createElement('td');
      cell.dataset.columnIndex = String(columnIndex);
      applyColumnWidthStyle(cell, columnIndex, currentModule.name);
      const options = getReferenceOptions(column);
      const currentValue = column === 'Running Balance' && (selectedModule === 'Cash Books' || selectedModule === 'Bank Books')
        ? (rowState['Running Balance'] ?? getRunningBalanceForRow(rows, rowIndex))
        : (rowState[column] || '');

      if (options.length > 0) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'data-input';
        input.placeholder = `Select or type ${column}`;
        input.value = currentValue;
        input.setAttribute('list', `combo-${Math.random().toString(36).slice(2, 9)}-${column.replace(/[^a-zA-Z0-9]/g, '-')}`);

        const datalist = document.createElement('datalist');
        datalist.id = input.getAttribute('list');
        options.forEach((optionValue) => {
          const option = document.createElement('option');
          option.value = optionValue;
          datalist.appendChild(option);
        });

        input.addEventListener('focus', () => {
          activeRowIndex = rowIndex;
        });

        input.addEventListener('input', (event) => {
          activeRowIndex = rowIndex;
          const rowValues = getCurrentRowState();
          rowValues[rowIndex] = rowValues[rowIndex] || {};
          rowValues[rowIndex][column] = event.target.value;
          syncRelatedFields(rowValues[rowIndex], column, event.target.value);

          let persistedRows = rowValues;
          if (selectedModule === 'Cash Books' || selectedModule === 'Bank Books') {
            persistedRows = reconcileRunningBalances(rowValues);
            persistedRows.forEach((item, index) => {
              rowValues[index] = item;
            });
            refreshRunningBalanceInputsFromRows(persistedRows);
          }

          persistCurrentRowState(persistedRows);
          setStatus('Selection updated');
        });

        cell.appendChild(input);
        cell.appendChild(datalist);
      } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'data-input';
        input.placeholder = column;
        input.value = currentValue;
        input.addEventListener('focus', () => {
          activeRowIndex = rowIndex;
        });

        input.addEventListener('input', (event) => {
          activeRowIndex = rowIndex;
          const rowValues = getCurrentRowState();
          rowValues[rowIndex] = rowValues[rowIndex] || {};
          rowValues[rowIndex][column] = event.target.value;
          syncRelatedFields(rowValues[rowIndex], column, event.target.value);

          let persistedRows = rowValues;
          if (selectedModule === 'Cash Books' || selectedModule === 'Bank Books') {
            persistedRows = reconcileRunningBalances(rowValues);
            persistedRows.forEach((item, index) => {
              rowValues[index] = item;
            });
            refreshRunningBalanceInputsFromRows(persistedRows);
          }

          persistCurrentRowState(persistedRows);
          setStatus('Draft saved');
        });
        cell.appendChild(input);
      }

      cell.dataset.row = String(rowIndex);
      cell.dataset.column = String(columnIndex);
      cell.setAttribute('aria-label', `${column} row ${rowIndex + 1}`);
      row.appendChild(cell);
    });

    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'row-delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      const rowValues = getCurrentRowState();
      if (rowValues.length <= 1) {
        rowValues.splice(0, rowValues.length, {});
      } else {
        rowValues.splice(rowIndex, 1);
      }
      persistCurrentRowState(rowValues);
      renderTable();
      setStatus('Row deleted');
    });
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    sheetBody.appendChild(row);
  });
}

function renderTable() {
  const modules = getCurrentModules();
  const currentModule = modules.find((module) => module.name === selectedModule) || modules[0];

  updateToolbarVisibility();
  selectedModuleLabel.textContent = currentModule.name;
  sectionTitle.textContent = ERP_DATA[selectedCategory].label;

  const columns = [...getModuleColumns(currentModule.name), 'Actions'];
  const rows = getCurrentRowState();

  if (selectedCategory === 'reporting' && (selectedModule === 'Project Budget' || selectedModule === 'Project Budget Change Log' || selectedModule === 'Project Approval Queue' || selectedModule === 'Project Report' || selectedModule === 'Project Varience Report')) {
    const reportRows = selectedModule === 'Project Budget Change Log'
      ? getProjectBudgetChangeLogRows()
      : selectedModule === 'Project Approval Queue'
        ? getApprovalQueueRows()
        : selectedModule === 'Project Report'
          ? getProjectReportRows()
          : selectedModule === 'Project Varience Report'
            ? getProjectVarianceRows()
            : rows;

    const filteredRows = projectFilter && projectFilter.value !== 'All Projects' && selectedModule !== 'Project Budget Change Log'
      ? reportRows.filter((row) => row.Project === projectFilter.value || row.Project === MASTER_RECORDS.Projects.find((project) => project.id === projectFilter.value)?.name)
      : reportRows;

    sheetHead.innerHTML = '';
    const headerRow = document.createElement('tr');
    columns.forEach((column) => {
      const th = document.createElement('th');
      th.textContent = column;
      headerRow.appendChild(th);
    });
    sheetHead.appendChild(headerRow);

    sheetBody.innerHTML = '';
    filteredRows.forEach((row) => {
      const tr = document.createElement('tr');
      currentModule.columns.forEach((column) => {
        const td = document.createElement('td');
        const rawValue = row[column] ?? 0;
        const numericValue = Number(rawValue || 0);
        const isCurrency = column.toLowerCase().includes('budget') || column.toLowerCase().includes('actual') || column.toLowerCase().includes('variance') || column.toLowerCase().includes('amount') || column.toLowerCase().includes('cost') || column.toLowerCase().includes('revenue') || column.toLowerCase().includes('profit');
        td.textContent = isCurrency
          ? `$${Number.isFinite(numericValue) ? numericValue.toLocaleString('en-US', { maximumFractionDigits: 0 }) : '0'}`
          : String(rawValue ?? 0);
        tr.appendChild(td);
      });

      const actionCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.className = 'row-delete-btn';
      deleteButton.textContent = 'View';
      actionCell.appendChild(deleteButton);
      tr.appendChild(actionCell);
      sheetBody.appendChild(tr);
    });
    renderSummary();
    return;
  }

  sheetHead.innerHTML = '';
  const headerRow = document.createElement('tr');
  columns.forEach((column, columnIndex) => {
    const th = document.createElement('th');
    th.dataset.columnIndex = String(columnIndex);
    applyColumnWidthStyle(th, columnIndex, currentModule.name);

    const titleWrap = document.createElement('div');
    titleWrap.className = 'column-header-content';
    titleWrap.textContent = column;

    const resizer = document.createElement('span');
    resizer.className = 'column-resizer';
    resizer.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const startX = event.clientX;
      const startWidth = th.getBoundingClientRect().width || 120;
      const widths = getColumnWidthState(currentModule.name);

      const handlePointerMove = (moveEvent) => {
        const delta = moveEvent.clientX - startX;
        const nextWidth = Math.max(80, startWidth + delta);
        widths[columnIndex] = nextWidth;

        sheetHead.querySelectorAll(`th[data-column-index="${columnIndex}"]`).forEach((headerCell) => {
          headerCell.style.width = `${nextWidth}px`;
          headerCell.style.minWidth = `${nextWidth}px`;
          headerCell.style.maxWidth = `${nextWidth}px`;
        });

        sheetBody.querySelectorAll(`td[data-column-index="${columnIndex}"]`).forEach((bodyCell) => {
          bodyCell.style.width = `${nextWidth}px`;
          bodyCell.style.minWidth = `${nextWidth}px`;
          bodyCell.style.maxWidth = `${nextWidth}px`;
        });
      };

      const handlePointerUp = () => {
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
      };

      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    });

    th.appendChild(titleWrap);
    th.appendChild(resizer);
    headerRow.appendChild(th);
  });
  sheetHead.appendChild(headerRow);

  if (selectedCategory === 'setup' || selectedCategory === 'transaction') {
    const filterRow = document.createElement('tr');
    filterRow.className = 'table-filter-row';

    columns.forEach((column, columnIndex) => {
      const filterCell = document.createElement('th');
      filterCell.dataset.columnIndex = String(columnIndex);
      applyColumnWidthStyle(filterCell, columnIndex, currentModule.name);
      const filterValue = getColumnFiltersForCurrentModule()[column] || '';

      if (column === 'Actions') {
        filterCell.innerHTML = '<span class="filter-placeholder">Filter</span>';
      } else {
        const filterInput = document.createElement('input');
        filterInput.type = 'text';
        filterInput.className = 'table-filter-input';
        filterInput.placeholder = 'Filter';
        filterInput.value = filterValue;
        filterInput.addEventListener('input', (event) => {
          const filters = getColumnFiltersForCurrentModule();
          filters[column] = event.target.value;
          const activeModule = getCurrentModules().find((module) => module.name === selectedModule) || getCurrentModules()[0];
          renderDataTableBody(activeModule, getCurrentRowState());
        });
        filterCell.appendChild(filterInput);
      }

      filterRow.appendChild(filterCell);
    });

    sheetHead.appendChild(filterRow);
  }

  applyStickyHeaderStyles();
  renderDataTableBody(currentModule, rows);
  renderSummary();
}

function focusTopInsertedRow() {
  setTimeout(() => {
    const firstRow = sheetBody?.querySelector('tr');
    if (!firstRow) return;

    const firstInput = firstRow.querySelector('input');
    if (!firstInput) return;

    firstInput.focus();
    if (typeof firstInput.select === 'function') {
      firstInput.select();
    }

    setTimeout(() => {
      firstInput.focus();
      if (typeof firstInput.select === 'function') {
        firstInput.select();
      }
    }, 25);
  }, 50);
}

function handleSaveSheet() {
  if (!ensurePermission('saveSheet', 'save sheets')) return;
  const rows = getCurrentRowState();
  persistCurrentRowState(rows);
  setStatus('Sheet saved locally');
}

function handleNewRecord() {
  if (!ensurePermission('newRecord', 'create new records')) return;
  const rows = getCurrentRowState();
  rows.unshift({
    __order: Date.now() + 1,
    __txnNo: getNextTransactionNumber(rows),
    'Transaction No': getNextTransactionNumber(rows),
    __isNew: true
  });
  persistCurrentRowState(rows);
  renderTable();
  focusTopInsertedRow();
  setStatus('New row added at the top');
}

function handleDuplicateRecord() {
  if (!ensurePermission('newRecord', 'duplicate records')) return;
  const rows = getCurrentRowState();
  const fallbackIndex = rows.findIndex((row) => Object.keys(row || {}).some((key) => key !== '__order' && key !== '__isNew' && key !== '__txnNo' && key !== 'Transaction No' && row[key] !== undefined && row[key] !== null && String(row[key]).trim() !== ''));
  const sourceIndex = Number.isInteger(activeRowIndex) && activeRowIndex >= 0 && activeRowIndex < rows.length ? activeRowIndex : fallbackIndex >= 0 ? fallbackIndex : 0;
  const sourceRow = rows[sourceIndex] || rows[0] || {};
  const duplicateRow = { ...stripInternalRowMetadata(sourceRow) };
  const nextTransactionNumber = getNextTransactionNumber(rows);

  rows.unshift({
    ...duplicateRow,
    __order: Date.now() + 1,
    __txnNo: nextTransactionNumber,
    'Transaction No': nextTransactionNumber,
    __isNew: true
  });

  persistCurrentRowState(rows);
  renderTable();
  focusTopInsertedRow();
  setStatus('Record duplicated and placed at the top');
}

function handleDeleteRow() {
  if (!ensurePermission('deleteRow', 'delete rows')) return;
  const rows = getCurrentRowState();
  if (rows.length <= 1) {
    const cleared = [{}];
    persistCurrentRowState(cleared);
    renderTable();
    setStatus('Current row cleared');
    return;
  }
  rows.pop();
  persistCurrentRowState(rows);
  renderTable();
  setStatus('Last row removed');
}

function escapeCsvValue(value) {
  const text = value === null || value === undefined ? '' : String(value);
  const escaped = text.replace(/"/g, '""');
  return /[",\n]/.test(escaped) ? `"${escaped}"` : escaped;
}

function exportRowsAsCsv(rows) {
  const currentModule = getCurrentModules().find((module) => module.name === selectedModule) || getCurrentModules()[0];
  const columns = currentModule.columns;
  const header = columns.join(',');
  const body = rows.map((row) => columns.map((column) => escapeCsvValue(row[column] ?? '')).join(',')).join('\n');
  return `${header}\n${body}`;
}

function handleExportCsv() {
  const rows = getCurrentRowState();
  const csv = exportRowsAsCsv(rows);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${selectedModule.replace(/\s+/g, '-').toLowerCase()}-data.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  setStatus('CSV exported');
}

function handleExportPdf() {
  const rows = getCurrentRowState();
  const currentModule = getCurrentModules().find((module) => module.name === selectedModule) || getCurrentModules()[0];
  const columns = currentModule.columns;
  const rowsHtml = rows.map((row) => {
    const cells = columns.map((column) => `<td>${String(row[column] ?? '').replace(/</g, '&lt;')}</td>`).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  const printWindow = window.open('', '_blank', 'width=900,height=700');
  if (!printWindow) {
    setStatus('Popup blocked. Please allow popups to export PDF.', false);
    return;
  }

  printWindow.document.write(`<!DOCTYPE html><html><head><style>
    body { font-family: Arial, sans-serif; padding: 24px; }
    h2 { margin-bottom: 12px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #dfe6ee; padding: 8px; text-align: left; font-size: 12px; }
    th { background: #edf3fa; }
    @media print { body { padding: 0; } }
  </style></head><body>
    <h2>${selectedModule}</h2>
    <table><thead><tr>${columns.map((column) => `<th>${column}</th>`).join('')}</tr></thead><tbody>${rowsHtml}</tbody></table>
  </body></html>`);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => printWindow.print(), 400);
  setStatus('PDF print dialog opened');
}

function handleExportJson() {
  if (!ensurePermission('export', 'export data')) return;
  const rows = getCurrentRowState();
  const payload = {
    category: selectedCategory,
    module: selectedModule,
    rows,
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${selectedModule.replace(/\s+/g, '-').toLowerCase()}-data.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  setStatus('JSON exported');
}

function updateToolbarVisibility() {
  const isSetupOrTransaction = selectedCategory === 'setup' || selectedCategory === 'transaction';
  const isReportingOrDocuments = selectedCategory === 'reporting' || selectedCategory === 'documents';

  const setupButtons = [newRecordBtn, duplicateRecordBtn, deleteRowBtn, exportCsvBtn, exportPdfBtn];
  const operationalButtons = [validateBtn, saveSheetBtn, budgetChangeBtn, approvalBtn, exportBtn];

  setupButtons.forEach((button) => {
    if (!button) return;
    const show = isSetupOrTransaction || isReportingOrDocuments;
    button.style.display = show ? 'inline-flex' : 'none';
  });

  operationalButtons.forEach((button) => {
    if (!button) return;
    button.style.display = isSetupOrTransaction ? 'none' : isReportingOrDocuments ? 'none' : 'inline-flex';
  });

  if (isReportingOrDocuments) {
    [newRecordBtn, deleteRowBtn, validateBtn, saveSheetBtn, budgetChangeBtn, approvalBtn, exportBtn].forEach((button) => {
      if (button) button.style.display = 'none';
    });
    [exportCsvBtn, exportPdfBtn].forEach((button) => {
      if (button) button.style.display = 'inline-flex';
    });
  }
}

function bindActions() {
  newRecordBtn?.addEventListener('click', handleNewRecord);
  duplicateRecordBtn?.addEventListener('click', handleDuplicateRecord);
  deleteRowBtn?.addEventListener('click', handleDeleteRow);
  exportCsvBtn?.addEventListener('click', handleExportCsv);
  exportPdfBtn?.addEventListener('click', handleExportPdf);
  validateBtn?.addEventListener('click', () => {
    if (!ensurePermission('validate', 'validate sheets')) return;
    validateSheet();
  });
  saveSheetBtn?.addEventListener('click', handleSaveSheet);
  budgetChangeBtn?.addEventListener('click', () => {
    if (!ensurePermission('budgetChange', 'change budgets')) return;
    addProjectBudgetChange();
  });
  approvalBtn?.addEventListener('click', () => {
    if (!ensurePermission('approveBudget', 'approve budget changes')) return;
    approvePendingProjectChange();
  });
  exportBtn?.addEventListener('click', handleExportJson);
  postEntryBtn?.addEventListener('click', () => postCurrentEntries('Posted'));
  draftEntryBtn?.addEventListener('click', () => postCurrentEntries('Draft'));
  createDocBtn?.addEventListener('click', createDocument);
  approveDocBtn?.addEventListener('click', approveDocument);
  projectFilter?.addEventListener('change', () => {
    renderLedger();
    renderSummary();
    renderDocumentTracker();
  });
  statusFilter?.addEventListener('change', () => {
    renderLedger();
    renderSummary();
    renderDocumentTracker();
  });
  userRoleSelect?.addEventListener('change', (event) => {
    selectedUserRole = event.target.value || 'Admin';
    updateRolePermissions();
    setStatus(`${selectedUserRole} role active`, true);
  });
}

function updateContextualPanels() {
  const workflowPanel = document.querySelector('.workflow-panel');
  const documentPanel = document.querySelector('.document-panel');
  const hidePanels = selectedCategory === 'setup' || selectedCategory === 'transaction' || selectedCategory === 'reporting' || selectedCategory === 'documents';

  if (workflowPanel) workflowPanel.style.display = hidePanels ? 'none' : 'block';
  if (documentPanel) documentPanel.style.display = hidePanels ? 'none' : 'block';

  const filterBar = document.getElementById('topbarFilters');
  if (filterBar) {
    filterBar.style.display = hidePanels ? 'none' : 'flex';
  }

  if (ledgerPreview) {
    ledgerPreview.style.display = selectedCategory === 'reporting' || selectedCategory === 'documents' ? 'none' : 'block';
  }

  if (documentTracker) {
    documentTracker.style.display = selectedCategory === 'reporting' || selectedCategory === 'documents' ? 'none' : 'block';
  }
}

function render() {
  persistNavigationState();
  renderCategoryTabs();
  renderModuleTabs();
  renderTable();
  renderSummary();
  updateContextualPanels();
  renderLedger();
  renderDocumentTracker();
  updateToolbarVisibility();
  setStatus('Ready');
}

if (userRoleSelect) {
  userRoleSelect.value = selectedUserRole;
}

restoreNavigationState();
bindActions();
hydrateStateFromServer();
updateRolePermissions();
render();
