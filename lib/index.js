'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** 
 * By Shashikant Sharma 
 * 
 * This code will take the user action and based on the user action and payload it will call the respective payment service.
 *  
 */
// eslint-disable-next-line import/prefer-default-export
var axios = require('axios');

var _require = require('flatted/cjs'),
    parse = _require.parse,
    stringify = _require.stringify;

var HttpErrors = require('http-errors');

var isNull = function isNull(val) {
  if (typeof val === 'string') {
    val = val.trim();
  }
  if (val === undefined || val === null || typeof val === 'undefined' || val === '' || val === 'undefined') {
    return true;
  }
  return false;
};

var isJson = function isJson(str) {
  try {
    var obj = JSON.parse(JSON.stringify(str));
    if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
};

function quickBookServices(BASE_URL) {
  this.execute = function (payload, callback) {
    // action key calls api.
    if (payload.action) {
      switch (payload.action) {
        case "CREATE_ACCOUNT":
          return funAddAccount(BASE_URL, payload, callback);
          break;
        case "EDIT_ACCOUNT":
          return funEditAccount(BASE_URL, payload, callback);
          break;
        case "GET_ACCOUNT":
          return funGetAccount(BASE_URL, payload, callback);
          break;
        case "CREATE_CUSTOMER":
          return funAddCustomer(BASE_URL, payload, callback);
          break;
        case "EDIT_CUSTOMER":
          return funEditCustomer(BASE_URL, payload, callback);
          break;
        case "GET_CUSTOMER":
          return funGetCustomer(BASE_URL, payload, callback);
          break;
        case "DELETE_CUSTOMER":
          return funDeleteCustomer(BASE_URL, payload, callback);
          break;
        case "GETALL_CUSTOMERS":
          return funGetAllCustomers(BASE_URL, payload, callback);
          break;
        case "CREATE_EMPLOYEE":
          return funAddEmployee(BASE_URL, payload, callback);
          break;
        case "EDIT_EMPLOYEE":
          return funEditEmployee(BASE_URL, payload, callback);
          break;
        case "GET_EMPLOYEE":
          return funGetEmployee(BASE_URL, payload, callback);
          break;
        case "DELETE_EMPLOYEE":
          return funDeleteEmployee(BASE_URL, payload, callback);
          break;
        case "GETALL_EMPLOYEES":
          return funGetAllEmployees(BASE_URL, payload, callback);
          break;
        case "CREATE_INVOICE":
          return funCreateInvoice(BASE_URL, payload, callback);
          break;
        case "EDIT_INVOICE":
          return funEditInvoice(BASE_URL, payload, callback);
          break;
        case "DELETE_INVOICE":
          return funDeleteInvoice(BASE_URL, payload, callback);
          break;
        case "VOID_INVOICE":
          return funVoidInvoice(BASE_URL, payload, callback);
          break;
        case "GETALL_INVOICES":
          return funGetAllInvoices(BASE_URL, payload, callback);
          break;
        case "EMAIL_INVOICE":
          return funEmailInvoice(BASE_URL, payload, callback);
          break;
        case "GET_INVOICE_PDF":
          return funGetPdfInvoice(BASE_URL, payload, callback);
          break;
        case "CREATE_PAYMENT":
          return funAddPayment(BASE_URL, payload, callback);
          break;
        case "EDIT_PAYMENT":
          return funEditPayment(BASE_URL, payload, callback);
          break;
        case "GET_PAYMENT":
          return funGetPayment(BASE_URL, payload, callback);
          break;
        case "DELETE_PAYMENT":
          return funDeletePayment(BASE_URL, payload, callback);
          break;
        case "GETALL_PAYMENTS":
          return funGetAllPayments(BASE_URL, payload, callback);
          break;
        case "CREATE_VENDOR":
          return funAddVendor(BASE_URL, payload, callback);
          break;
        case "EDIT_VENDOR":
          return funEditVendor(BASE_URL, payload, callback);
          break;
        case "GET_VENDOR":
          return funGetVendor(BASE_URL, payload, callback);
          break;
        case "DELETE_VENDOR":
          return funDeleteVendor(BASE_URL, payload, callback);
          break;
        case "GETALL_VENDORS":
          return funGetAllVendors(BASE_URL, payload, callback);
          break;
        default:
          var errorMessage = 'Please add BaseUrl.';
          return errorMessage;
          break;
      }
    } else {
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
var funAddAccount = function funAddAccount(BASE_URL, payload, callback) {
  var accountId = "";
  if (!isNull(payload["meta"]["accountId"])) {
    accountId = payload["meta"]["accountId"];
  }

  delete payload["meta"]["accountId"];

  var url = BASE_URL + 'QBAccounts/createAccount?accountId=' + accountId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funEditAccount = function funEditAccount(BASE_URL, payload, callback) {
  var accountId = "";
  if (isNull(payload["meta"]["accountId"])) {
    return callback(new HttpErrors.BadRequest('accountId is mandatory.', { expose: false }));
  } else {
    accountId = payload["meta"]["accountId"];
  }

  delete payload["meta"]["accountId"];

  var url = BASE_URL + 'QBAccounts/editAccount?accountId=' + accountId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetAccount = function funGetAccount(BASE_URL, payload, callback) {
  var accountId = "";
  if (isNull(payload["meta"]["accountId"])) {
    return callback(new HttpErrors.BadRequest('accountId is mandatory.', { expose: false }));
  } else {
    accountId = payload["meta"]["accountId"];
  }

  delete payload["meta"]["accountId"];

  var url = BASE_URL + 'QBAccounts/getAccount?accountId=' + accountId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funAddCustomer = function funAddCustomer(BASE_URL, payload, callback) {
  var customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["customerId"];

  var url = BASE_URL + 'QBCustomers/createCustomer?customerId=' + customerId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funEditCustomer = function funEditCustomer(BASE_URL, payload, callback) {
  var customerId = "";
  if (isNull(payload["meta"]["customerId"])) {
    return callback(new HttpErrors.BadRequest('customerId is mandatory.', { expose: false }));
  } else {
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["customerId"];

  var url = BASE_URL + 'QBCustomers/editCustomer?customerId=' + customerId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetCustomer = function funGetCustomer(BASE_URL, payload, callback) {
  var customerId = "";
  if (isNull(payload["meta"]["customerId"])) {
    return callback(new HttpErrors.BadRequest('customerId is mandatory.', { expose: false }));
  } else {
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["customerId"];

  var url = BASE_URL + 'QBCustomers/getCustomer?customerId=' + customerId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funDeleteCustomer = function funDeleteCustomer(BASE_URL, payload, callback) {
  var customerId = "";
  if (isNull(payload["meta"]["customerId"])) {
    return callback(new HttpErrors.BadRequest('customerId is mandatory.', { expose: false }));
  } else {
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["customerId"];

  var url = BASE_URL + 'QBCustomers/deleteCustomer?customerId=' + customerId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetAllCustomers = function funGetAllCustomers(BASE_URL, payload, callback) {
  var pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
    return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  } else {
    pageNo = payload["meta"]["pageNo"];
  }

  var url = BASE_URL + 'QBCustomers/getAllCustomers?pageNo=' + pageNo;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

////
var funAddEmployee = function funAddEmployee(BASE_URL, payload, callback) {
  var employeeId = "";
  if (!isNull(payload["meta"]["employeeId"])) {
    employeeId = payload["meta"]["employeeId"];
  }

  delete payload["meta"]["employeeId"];

  var url = BASE_URL + 'QBEmployees/createEmployee?employeeId=' + employeeId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funEditEmployee = function funEditEmployee(BASE_URL, payload, callback) {
  var employeeId = "";
  if (isNull(payload["meta"]["employeeId"])) {
    return callback(new HttpErrors.BadRequest('employeeId is mandatory.', { expose: false }));
  } else {
    employeeId = payload["meta"]["employeeId"];
  }

  delete payload["meta"]["employeeId"];

  var url = BASE_URL + 'QBEmployees/editEmployee?employeeId=' + employeeId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetEmployee = function funGetEmployee(BASE_URL, payload, callback) {
  var employeeId = "";
  if (isNull(payload["meta"]["employeeId"])) {
    return callback(new HttpErrors.BadRequest('employeeId is mandatory.', { expose: false }));
  } else {
    employeeId = payload["meta"]["employeeId"];
  }

  delete payload["meta"]["employeeId"];

  var url = BASE_URL + 'QBEmployees/getEmployee?employeeId=' + employeeId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funDeleteEmployee = function funDeleteEmployee(BASE_URL, payload, callback) {
  var employeeId = "";
  if (isNull(payload["meta"]["employeeId"])) {
    return callback(new HttpErrors.BadRequest('employeeId is mandatory.', { expose: false }));
  } else {
    employeeId = payload["meta"]["employeeId"];
  }

  delete payload["meta"]["employeeId"];

  var url = BASE_URL + 'QBEmployees/deleteEmployee?employeeId=' + employeeId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetAllEmployees = function funGetAllEmployees(BASE_URL, payload, callback) {
  var pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
    return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  } else {
    pageNo = payload["meta"]["pageNo"];
  }

  var url = BASE_URL + 'QBEmployees/getAllEmployees?pageNo=' + pageNo;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funCreateInvoice = function funCreateInvoice(BASE_URL, payload, callback) {
  var paymentInvoiceId = "";
  if (!isNull(payload["meta"]["paymentInvoiceId"])) {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }
  var customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["paymentInvoiceId"];
  delete payload["meta"]["customerId"];

  var url = BASE_URL + 'QBInvoices/createInvoice?paymentInvoiceId=' + paymentInvoiceId + '&customerId=' + customerId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funEditInvoice = function funEditInvoice(BASE_URL, payload, callback) {
  var paymentInvoiceId = "";
  if (!isNull(payload["meta"]["paymentInvoiceId"])) {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }
  var customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  delete payload["meta"]["paymentInvoiceId"];
  delete payload["meta"]["customerId"];

  var url = BASE_URL + 'QBInvoices/editInvoice?paymentInvoiceId=' + paymentInvoiceId + '&customerId=' + customerId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funDeleteInvoice = function funDeleteInvoice(BASE_URL, payload, callback) {
  var paymentInvoiceId = "";
  if (isNull(payload["meta"]["paymentInvoiceId"])) {
    return callback(new HttpErrors.BadRequest('paymentInvoiceId is mandatory.', { expose: false }));
  } else {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentInvoiceId"];

  var url = BASE_URL + 'QBInvoices/deleteInvoice?paymentInvoiceId=' + paymentInvoiceId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funVoidInvoice = function funVoidInvoice(BASE_URL, payload, callback) {
  var paymentInvoiceId = "";
  if (isNull(payload["meta"]["paymentInvoiceId"])) {
    return callback(new HttpErrors.BadRequest('paymentInvoiceId is mandatory.', { expose: false }));
  } else {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentInvoiceId"];

  var url = BASE_URL + 'QBInvoices/voidInvoice?paymentInvoiceId=' + paymentInvoiceId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetAllInvoices = function funGetAllInvoices(BASE_URL, payload, callback) {
  var pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
    return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  } else {
    pageNo = payload["meta"]["pageNo"];
  }

  var url = BASE_URL + 'QBInvoices/getAllInvoices?pageNo=' + pageNo;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funEmailInvoice = function funEmailInvoice(BASE_URL, payload, callback) {
  var paymentInvoiceId = "";
  if (isNull(payload["meta"]["paymentInvoiceId"])) {
    return callback(new HttpErrors.BadRequest('paymentInvoiceId is mandatory.', { expose: false }));
  } else {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  var emailId = "";
  if (isNull(payload["meta"]["emailId"])) {
    return callback(new HttpErrors.BadRequest('emailId is mandatory.', { expose: false }));
  } else {
    emailId = payload["meta"]["emailId"];
  }

  delete payload["meta"]["paymentInvoiceId"];

  var url = BASE_URL + 'QBInvoices/emailInvoice?paymentInvoiceId=' + paymentInvoiceId + '&emailId=' + emailId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetPdfInvoice = function funGetPdfInvoice(BASE_URL, payload, callback) {
  var paymentInvoiceId = "";
  if (isNull(payload["meta"]["paymentInvoiceId"])) {
    return callback(new HttpErrors.BadRequest('paymentInvoiceId is mandatory.', { expose: false }));
  } else {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentInvoiceId"];

  var url = BASE_URL + 'QBInvoices/getPDFInvoice?paymentInvoiceId=' + paymentInvoiceId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funAddPayment = function funAddPayment(BASE_URL, payload, callback) {
  var paymentId = "";
  if (!isNull(payload["meta"]["paymentId"])) {
    paymentId = payload["meta"]["paymentId"];
  }

  var customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  var paymentInvoiceId = "";
  if (!isNull(payload["meta"]["paymentInvoiceId"])) {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentId"];
  delete payload["meta"]["customerId"];
  delete payload["meta"]["paymentInvoiceId"];

  var url = BASE_URL + 'QBPayments/createPayment?paymentId=' + paymentId + '&customerId=' + customerId + '&paymentInvoiceId=' + paymentInvoiceId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funEditPayment = function funEditPayment(BASE_URL, payload, callback) {
  var paymentId = "";
  if (!isNull(payload["meta"]["paymentId"])) {
    paymentId = payload["meta"]["paymentId"];
  }

  var customerId = "";
  if (!isNull(payload["meta"]["customerId"])) {
    customerId = payload["meta"]["customerId"];
  }

  var paymentInvoiceId = "";
  if (!isNull(payload["meta"]["paymentInvoiceId"])) {
    paymentInvoiceId = payload["meta"]["paymentInvoiceId"];
  }

  delete payload["meta"]["paymentId"];
  delete payload["meta"]["customerId"];
  delete payload["meta"]["paymentInvoiceId"];

  var url = BASE_URL + 'QBPayments/editPayment?paymentId=' + paymentId + '&customerId=' + customerId + '&paymentInvoiceId=' + paymentInvoiceId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetPayment = function funGetPayment(BASE_URL, payload, callback) {
  var paymentId = "";
  if (isNull(payload["meta"]["paymentId"])) {
    return callback(new HttpErrors.BadRequest('paymentId is mandatory.', { expose: false }));
  } else {
    paymentId = payload["meta"]["paymentId"];
  }

  delete payload["meta"]["paymentId"];

  var url = BASE_URL + 'QBPayments/getPayment?paymentId=' + paymentId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funDeletePayment = function funDeletePayment(BASE_URL, payload, callback) {
  var paymentId = "";
  if (isNull(payload["meta"]["paymentId"])) {
    return callback(new HttpErrors.BadRequest('paymentId is mandatory.', { expose: false }));
  } else {
    paymentId = payload["meta"]["paymentId"];
  }

  delete payload["meta"]["paymentId"];

  var url = BASE_URL + 'QBPayments/deletePayment?paymentId=' + paymentId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetAllPayments = function funGetAllPayments(BASE_URL, payload, callback) {
  var pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
    return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  } else {
    pageNo = payload["meta"]["pageNo"];
  }

  var url = BASE_URL + 'QBPayments/getAllPayments?pageNo=' + pageNo;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

//------------- VENDOR ------------------
var funAddVendor = function funAddVendor(BASE_URL, payload, callback) {
  var vendorId = "";
  if (!isNull(payload["meta"]["vendorId"])) {
    vendorId = payload["meta"]["vendorId"];
  }

  delete payload["meta"]["vendorId"];

  var url = BASE_URL + 'QBVendors/createVendor?vendorId=' + vendorId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funEditVendor = function funEditVendor(BASE_URL, payload, callback) {
  var vendorId = "";
  if (isNull(payload["meta"]["vendorId"])) {
    return callback(new HttpErrors.BadRequest('vendorId is mandatory.', { expose: false }));
  } else {
    vendorId = payload["meta"]["vendorId"];
  }

  delete payload["meta"]["vendorId"];

  var url = BASE_URL + 'QBVendors/editVendor?vendorId=' + vendorId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetVendor = function funGetVendor(BASE_URL, payload, callback) {
  var vendorId = "";
  if (isNull(payload["meta"]["vendorId"])) {
    return callback(new HttpErrors.BadRequest('vendorId is mandatory.', { expose: false }));
  } else {
    vendorId = payload["meta"]["vendorId"];
  }

  delete payload["meta"]["vendorId"];

  var url = BASE_URL + 'QBVendors/getVendor?vendorId=' + vendorId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funDeleteVendor = function funDeleteVendor(BASE_URL, payload, callback) {
  var vendorId = "";
  if (isNull(payload["meta"]["vendorId"])) {
    return callback(new HttpErrors.BadRequest('vendorId is mandatory.', { expose: false }));
  } else {
    vendorId = payload["meta"]["vendorId"];
  }

  delete payload["meta"]["vendorId"];

  var url = BASE_URL + 'QBVendors/deleteVendor?vendorId=' + vendorId;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetAllVendors = function funGetAllVendors(BASE_URL, payload, callback) {
  var pageNo = "";
  if (isNull(payload["meta"]["pageNo"])) {
    return callback(new HttpErrors.BadRequest('pageNo is mandatory.', { expose: false }));
  } else {
    pageNo = payload["meta"]["pageNo"];
  }

  var url = BASE_URL + 'QBVendors/getAllVendors?pageNo=' + pageNo;
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

module.exports = quickBookServices;