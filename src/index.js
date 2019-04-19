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

module.exports = quickBookServices;
