/** 
 * By Shashikant Sharma 
 * 
 * This code will take the user action and based on the user action and payload it will call the respective payment service.
 *  
 */ 
// eslint-disable-next-line import/prefer-default-export
const axios = require('axios');
const {parse, stringify} = require('flatted/cjs');
const HttpErrors = require('http-errors');

const isNull = function (val) {
  if (typeof val === 'string') { val = val.trim(); }
  if (val === undefined || val === null || typeof val === 'undefined' || val === '' || val === 'undefined') {
    return true;
  }
  return false;
};

const isJson = function (str) {
  try {
    var obj = JSON.parse(JSON.stringify(str));
    if (obj && typeof obj === 'object' && obj !== null) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
}

function quickBookServices(BASE_URL) {
  this.execute = function (payload,callback) {
    // action key calls api.
    if(payload.action){
      switch(payload.action){
        case "CREATE_ACCOUNT":
          return funAddAccount(BASE_URL,payload,callback);
        break;
        case "EDIT_ACCOUNT":
          return funEditAccount(BASE_URL,payload,callback);
        break;
        case "GET_ACCOUNT":
          return funGetAccount(BASE_URL,payload,callback);
        break;
        case "CREATE_CUSTOMER":
          return funAddCustomer(BASE_URL,payload,callback);
        break;
        case "EDIT_CUSTOMER":
          return funEditCustomer(BASE_URL,payload,callback);
        break;
        case "GET_CUSTOMER":
          return funGetCustomer(BASE_URL,payload,callback);
        break;
        case "DELETE_CUSTOMER":
          return funDeleteCustomer(BASE_URL,payload,callback);
        break;
        case "GETALL_CUSTOMERS":
          return funGetAllCustomers(BASE_URL,payload,callback);
        break;
        case "CREATE_EMPLOYEE":
          return funAddEmployee(BASE_URL,payload,callback);
        break;
        case "EDIT_EMPLOYEE":
          return funEditEmployee(BASE_URL,payload,callback);
        break;
        case "GET_EMPLOYEE":
          return funGetEmployee(BASE_URL,payload,callback);
        break;
        case "DELETE_EMPLOYEE":
          return funDeleteEmployee(BASE_URL,payload,callback);
        break;
        case "GETALL_EMPLOYEES":
          return funGetAllEmployees(BASE_URL,payload,callback);
        break;
        case "CREATE_INVOICE":
          return funCreateInvoice(BASE_URL,payload,callback);
        break;
        case "EDIT_INVOICE":
          return funEditInvoice(BASE_URL,payload,callback);
        break;
        case "DELETE_INVOICE":
          return funDeleteInvoice(BASE_URL,payload,callback);
        break;
        case "VOID_INVOICE":
          return funVoidInvoice(BASE_URL,payload,callback);
        break;
        case "GETALL_INVOICES":
          return funGetAllInvoices(BASE_URL,payload,callback);
        break;
        case "EMAIL_INVOICE":
          return funEmailInvoice(BASE_URL,payload,callback);
        break;
        case "GET_INVOICE_PDF":
          return funGetPdfInvoice(BASE_URL,payload,callback);
        break;
        case "CREATE_PAYMENT":
          return funAddPayment(BASE_URL,payload,callback);
        break;
        case "EDIT_PAYMENT":
          return funEditPayment(BASE_URL,payload,callback);
        break;
        case "GET_PAYMENT":
          return funGetPayment(BASE_URL,payload,callback);
        break;
        case "DELETE_PAYMENT":
          return funDeletePayment(BASE_URL,payload,callback);
        break;
        case "GETALL_PAYMENTS":
          return funGetAllPayments(BASE_URL,payload,callback);
        break;
        case "CREATE_VENDOR":
          return funAddVendor(BASE_URL,payload,callback);
        break;
        case "EDIT_VENDOR":
          return funEditVendor(BASE_URL,payload,callback);
        break;
        case "GET_VENDOR":
          return funGetVendor(BASE_URL,payload,callback);
        break;
        case "DELETE_VENDOR":
          return funDeleteVendor(BASE_URL,payload,callback);
        break;
        case "GETALL_VENDORS":
          return funGetAllVendors(BASE_URL,payload,callback);
        break;
        default:
          let errorMessage = `Please add BaseUrl.`;
          return errorMessage;
        break;
      }
    }else{
      return "Please provide valid action";
    }

  };
}


/**
* This function will call create account in QBO.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
const funAddAccount = function (BASE_URL,payload,callback) {
  let accountId = "";
  if (!isNull(payload["meta"]["accountId"])) {
    accountId = payload["meta"]["accountId"];
  }

  delete payload["meta"]["accountId"];

  let url = `${BASE_URL}QBAccounts/createAccount?accountId=${accountId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funEditAccount = function (BASE_URL,payload,callback) {
  let accountId = "";
  if (isNull(payload["meta"]["accountId"])) {
      return callback(new HttpErrors.BadRequest('accountId is mandatory.', { expose: false }));
  }else{
    accountId = payload["meta"]["accountId"];
  }

  delete payload["meta"]["accountId"];

  let url = `${BASE_URL}QBAccounts/editAccount?accountId=${accountId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetAccount = function (BASE_URL,payload,callback) {
  let accountId = "";
  if (isNull(payload["meta"]["accountId"])) {
      return callback(new HttpErrors.BadRequest('accountId is mandatory.', { expose: false }));
  }else{
      accountId = payload["meta"]["accountId"];
  }

  delete payload["meta"]["accountId"];

  let url = `${BASE_URL}QBAccounts/getAccount?accountId=${accountId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funAddCustomer = function (BASE_URL,payload,callback) {
   let customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["customerId"];

  let url = `${BASE_URL}QBCustomers/createCustomer?customerId=${customerId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funEditCustomer = function (BASE_URL,payload,callback) {
  let customerId = "";
  if (isNull(payload["meta"]["customerId"])) {
      return callback(new HttpErrors.BadRequest('customerId is mandatory.', { expose: false }));
  }else{
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["customerId"];

  let url = `${BASE_URL}QBCustomers/editCustomer?customerId=${customerId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetCustomer = function (BASE_URL,payload,callback) {
  let customerId = "";
  if (isNull(payload["meta"]["customerId"])) {
      return callback(new HttpErrors.BadRequest('customerId is mandatory.', { expose: false }));
  }else{
      customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["customerId"];

  let url = `${BASE_URL}QBCustomers/getCustomer?customerId=${customerId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}

const funDeleteCustomer = function (BASE_URL,payload,callback) {
  let customerId = "";
  if (isNull(payload["meta"]["customerId"])) {
      return callback(new HttpErrors.BadRequest('customerId is mandatory.', { expose: false }));
  }else{
      customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["customerId"];

  let url = `${BASE_URL}QBCustomers/deleteCustomer?customerId=${customerId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetAllCustomers = function (BASE_URL,payload,callback) {
  let pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
      return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  }else{
      pageNo = payload["meta"]["pageNo"];
  }

  let url = `${BASE_URL}QBCustomers/getAllCustomers?pageNo=${pageNo}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}

////
const funAddEmployee = function (BASE_URL,payload,callback) {
   let employeeId = "";
  if (!isNull(payload["meta"]["employeeId"])) {
    employeeId = payload["meta"]["employeeId"];
  }

  delete payload["meta"]["employeeId"];

  let url = `${BASE_URL}QBEmployees/createEmployee?employeeId=${employeeId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funEditEmployee = function (BASE_URL,payload,callback) {
  let employeeId = "";
  if (isNull(payload["meta"]["employeeId"])) {
      return callback(new HttpErrors.BadRequest('employeeId is mandatory.', { expose: false }));
  }else{
    employeeId = payload["meta"]["employeeId"];
  }

  delete payload["meta"]["employeeId"];

  let url = `${BASE_URL}QBEmployees/editEmployee?employeeId=${employeeId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetEmployee = function (BASE_URL,payload,callback) {
  let employeeId = "";
  if (isNull(payload["meta"]["employeeId"])) {
      return callback(new HttpErrors.BadRequest('employeeId is mandatory.', { expose: false }));
  }else{
      employeeId = payload["meta"]["employeeId"];
  }

  delete payload["meta"]["employeeId"];

  let url = `${BASE_URL}QBEmployees/getEmployee?employeeId=${employeeId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}

const funDeleteEmployee = function (BASE_URL,payload,callback) {
  let employeeId = "";
  if (isNull(payload["meta"]["employeeId"])) {
      return callback(new HttpErrors.BadRequest('employeeId is mandatory.', { expose: false }));
  }else{
      employeeId = payload["meta"]["employeeId"];
  }

  delete payload["meta"]["employeeId"];

  let url = `${BASE_URL}QBEmployees/deleteEmployee?employeeId=${employeeId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetAllEmployees = function (BASE_URL,payload,callback) {
  let pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
      return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  }else{
      pageNo = payload["meta"]["pageNo"];
  }

  let url = `${BASE_URL}QBEmployees/getAllEmployees?pageNo=${pageNo}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}



const funCreateInvoice = function (BASE_URL,payload,callback) {
  let paymentInvoiceId = "";
  if (!isNull(payload["meta"]["paymentInvoiceId"])) {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }
  let customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["paymentInvoiceId"];
  delete payload["meta"]["customerId"];

  let url = `${BASE_URL}QBInvoices/createInvoice?paymentInvoiceId=${paymentInvoiceId}&customerId=${customerId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funEditInvoice = function (BASE_URL,payload,callback) {
  let paymentInvoiceId = "";
  if (!isNull(payload["meta"]["paymentInvoiceId"])) {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }
  let customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["paymentInvoiceId"];
  delete payload["meta"]["customerId"];

  let url = `${BASE_URL}QBInvoices/editInvoice?paymentInvoiceId=${paymentInvoiceId}&customerId=${customerId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funDeleteInvoice = function (BASE_URL,payload,callback) {
  let paymentInvoiceId = "";
  if (isNull(payload["meta"]["paymentInvoiceId"])) {
      return callback(new HttpErrors.BadRequest('paymentInvoiceId is mandatory.', { expose: false }));
  }else{
      paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentInvoiceId"];

  let url = `${BASE_URL}QBInvoices/deleteInvoice?paymentInvoiceId=${paymentInvoiceId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}

const funVoidInvoice = function (BASE_URL,payload,callback) {
  let paymentInvoiceId = "";
  if (isNull(payload["meta"]["paymentInvoiceId"])) {
      return callback(new HttpErrors.BadRequest('paymentInvoiceId is mandatory.', { expose: false }));
  }else{
      paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentInvoiceId"];

  let url = `${BASE_URL}QBInvoices/voidInvoice?paymentInvoiceId=${paymentInvoiceId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetAllInvoices = function (BASE_URL,payload,callback) {
  let pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
      return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  }else{
      pageNo = payload["meta"]["pageNo"];
  }

  let url = `${BASE_URL}QBInvoices/getAllInvoices?pageNo=${pageNo}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funEmailInvoice = function (BASE_URL,payload,callback) {
  let paymentInvoiceId = "";
  if (isNull(payload["meta"]["paymentInvoiceId"])) {
      return callback(new HttpErrors.BadRequest('paymentInvoiceId is mandatory.', { expose: false }));
  }else{
      paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  let emailId = "";
  if (isNull(payload["meta"]["emailId"])) {
      return callback(new HttpErrors.BadRequest('emailId is mandatory.', { expose: false }));
  }else{
      emailId = payload["meta"]["emailId"];
  }

  delete payload["meta"]["paymentInvoiceId"];

  let url = `${BASE_URL}QBInvoices/emailInvoice?paymentInvoiceId=${paymentInvoiceId}&emailId=${emailId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetPdfInvoice = function (BASE_URL,payload,callback) {
  let paymentInvoiceId = "";
  if (isNull(payload["meta"]["paymentInvoiceId"])) {
      return callback(new HttpErrors.BadRequest('paymentInvoiceId is mandatory.', { expose: false }));
  }else{
      paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentInvoiceId"];

  let url = `${BASE_URL}QBInvoices/getPDFInvoice?paymentInvoiceId=${paymentInvoiceId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funAddPayment = function (BASE_URL,payload,callback) {
  let paymentId = "";
  if (!isNull(payload["meta"]["paymentId"])) {
    paymentId = payload["meta"]["paymentId"];
  }

  let customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  let paymentInvoiceId = "";
  if (!isNull(payload["meta"]["paymentInvoiceId"])) {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentId"];
  delete payload["meta"]["customerId"];
  delete payload["meta"]["paymentInvoiceId"];

  let url = `${BASE_URL}QBPayments/createPayment?paymentId=${paymentId}&customerId=${customerId}&paymentInvoiceId=${paymentInvoiceId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funEditPayment = function (BASE_URL,payload,callback) {
  let paymentId = "";
  if (!isNull(payload["meta"]["paymentId"])) {
    paymentId = payload["meta"]["paymentId"];
  }

  let customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  let paymentInvoiceId = "";
  if (!isNull(payload["meta"]["paymentInvoiceId"])) {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentId"];
  delete payload["meta"]["customerId"];
  delete payload["meta"]["paymentInvoiceId"];

  let url = `${BASE_URL}QBPayments/editPayment?paymentId=${paymentId}&customerId=${customerId}&paymentInvoiceId=${paymentInvoiceId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetPayment = function (BASE_URL,payload,callback) {
  let paymentId = "";
  if (isNull(payload["meta"]["paymentId"])) {
      return callback(new HttpErrors.BadRequest('paymentId is mandatory.', { expose: false }));
  }else{
      paymentId = payload["meta"]["paymentId"];
  }

  delete payload["meta"]["paymentId"];

  let url = `${BASE_URL}QBPayments/getPayment?paymentId=${paymentId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}

const funDeletePayment = function (BASE_URL,payload,callback) {
  let paymentId = "";
  if (isNull(payload["meta"]["paymentId"])) {
      return callback(new HttpErrors.BadRequest('paymentId is mandatory.', { expose: false }));
  }else{
      paymentId = payload["meta"]["paymentId"];
  }

  delete payload["meta"]["paymentId"];

  let url = `${BASE_URL}QBPayments/deletePayment?paymentId=${paymentId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetAllPayments = function (BASE_URL,payload,callback) {
  let pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
      return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  }else{
      pageNo = payload["meta"]["pageNo"];
  }

  let url = `${BASE_URL}QBPayments/getAllPayments?pageNo=${pageNo}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}

//------------- VENDOR ------------------
const funAddVendor = function (BASE_URL,payload,callback) {
   let vendorId = "";
  if (!isNull(payload["meta"]["vendorId"])) {
    vendorId = payload["meta"]["vendorId"];
  }

  delete payload["meta"]["vendorId"];

  let url = `${BASE_URL}QBVendors/createVendor?vendorId=${vendorId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funEditVendor = function (BASE_URL,payload,callback) {
  let vendorId = "";
  if (isNull(payload["meta"]["vendorId"])) {
      return callback(new HttpErrors.BadRequest('vendorId is mandatory.', { expose: false }));
  }else{
    vendorId = payload["meta"]["vendorId"];
  }

  delete payload["meta"]["vendorId"];

  let url = `${BASE_URL}QBVendors/editVendor?vendorId=${vendorId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetVendor = function (BASE_URL,payload,callback) {
  let vendorId = "";
  if (isNull(payload["meta"]["vendorId"])) {
      return callback(new HttpErrors.BadRequest('vendorId is mandatory.', { expose: false }));
  }else{
      vendorId = payload["meta"]["vendorId"];
  }

  delete payload["meta"]["vendorId"];

  let url = `${BASE_URL}QBVendors/getVendor?vendorId=${vendorId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}

const funDeleteVendor = function (BASE_URL,payload,callback) {
  let vendorId = "";
  if (isNull(payload["meta"]["vendorId"])) {
      return callback(new HttpErrors.BadRequest('vendorId is mandatory.', { expose: false }));
  }else{
      vendorId = payload["meta"]["vendorId"];
  }

  delete payload["meta"]["vendorId"];

  let url = `${BASE_URL}QBVendors/deleteVendor?vendorId=${vendorId}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


const funGetAllVendors = function (BASE_URL,payload,callback) {
  let pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
      return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  }else{
      pageNo = payload["meta"]["pageNo"];
  }

  let url = `${BASE_URL}QBVendors/getAllVendors?pageNo=${pageNo}`;
  axios.post(url, payload).then(response => {
    //console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}



module.exports = quickBookServices;
