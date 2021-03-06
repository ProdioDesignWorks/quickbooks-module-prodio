# quickbooks-module-prodio

`quickbooks-module-prodio` is NodeJS client for the `quickbooks-services-prodio API`. 


# Prerequisite (Things to do before installing this module):
 * Clone its dependency repository first on your server git clone https://github.com/ProdioDesignWorks/quickbooks-services-prodio.git
 * Navigate to your repo cd quickbooks-services-prodio
 * Install dependencies npm install
 * Start service node . or npm start or node server/server.js
 * Open http://localhost:3040/explorer/ in your browser
 * If you've pm2 installed then use this pm2 start server/server.js --name="QB_SERVICE"
 * When you install `quickbooks-module-prodio`, it will ask question for the BASE_URL of this `QB_SERVICE` - eventually.



# Features!
  
### Functions

* Add/Edit/Get Account

* Add/Edit/Get/Delete Client

* Add/Edit/Get/Delete Employees

* Add/Edit/Get/Delete Invoices

* Add/Edit/Get/Delete Payments

* Add/Edit/Get/Delete Vendors


# Installation

$ npm install quickbooks-module-prodio@latest --save


# FIRST STEP

The QBO has Oauth2.0 Authentication process. So it requires to verify our app FOR THE VERY FIRST TIME MANUALLY, with the QB App created to get app access token, then from next time the code will auto create the refresh token, before the expiration of the current token.

1. You will need to login into QuickBooks developer account.

2. You will have to create a app ( sometimes there is already default app created ).

3. You will have to insert your API Callback URL in the app settings page.

4. You will have to copy `clientId` and `clientSecret` keys from the app settings, and put inside the `QBConfig.json` file.

5. You can make different different apps for diff diff environments.

6. After you the APIs on the host and its running -- use this URL to verify once.

http://{DOMAIN}:3040/api/Oauth2Data/connectQuickBooks

7. Note that, this is One Time Process, which has to be done prior using the APIs.

8. After successful connection, you will see a JSON displayed on the browser. You will have to ignore that.

  
# Initialization 
Require the quickbooks-module-prodio module and initialize the quickbooks npm module client.
```JSX

 const qbClass = require('quickbooks-module-prodio');
 const qbObj = new qbClass(BASE_URL); //BASE_URL => is the url where its loopback apis are running. eg. (http://localhost:3040/api/)
 ``` 


### Method

`1. ADD BUSINESS ACCOUNT:`

 	This will create new business account.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `CREATE_ACCOUNT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_account.json) | Json having business details. | YES |


#### Example

```JSX
	const payload = {
	    "action": "CREATE_ACCOUNT",
	    "meta": SAMPLE_META_INFO
	};
	//create business in appointment module
	qbObj.execute(payload, function(response) {
	    if (typeof response == "string" || typeof response === "string") {
	        response = JSON.parse(response);
	    }

	    if (!isNull(response.data)) {
	        let serverResponse = response["data"];
	        if (typeof serverResponse == "string" || typeof serverResponse === "string") {
	            serverResponse = JSON.parse(response["data"]);
	        }

	        if (!isNull(serverResponse.error)) {
	            //Error Response
	            return cb(new HttpErrors.InternalServerError(response.data.error.message, {
	                expose: false
	            }));
	        } else {
	            // HTTP : 200 , Success Response , Merchant Successfully Created!!
	            return cb(null, response.data);
	        }
	    } else {
	        if (!isNull(response["response"])) {
	            let serverResponse = response["response"]["data"];
	            if (typeof serverResponse == "string" || typeof serverResponse === "string") {
	                serverResponse = JSON.parse(response["response"]["data"]);
	            }

	            let serverResponseError = serverResponse["error"];
	            if (typeof serverResponseError == "string" || typeof serverResponseError === "string") {
	                serverResponseError = JSON.parse(serverResponseError["error"]);
	            }

	            let _msg = isNull(serverResponseError["message"]) ? 'Internal Server Error' : serverResponseError["message"];

	            //Error Response
	            return cb(new HttpErrors.InternalServerError(_msg, {
	                expose: false
	            }));
	        } else {
	            let _msg = isNull(response["data"]["message"]) ? 'Internal Server Error' : response["data"]["message"];

	            //Error Response
	            return cb(new HttpErrors.InternalServerError(_msg, {
	                expose: false
	            }));
	        }
	    }
	});
```

`2. EDIT BUSINESS ACCOUNT:`

 	This will edit the business account.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_ACCOUNT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_account.json) | Json having business details. | YES |


`3. GET BUSINESS ACCOUNT:`

 	This will get account information from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GET_ACCOUNT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/get_business_account.json) | Json having business details. | YES |


`4. CREATE CUSTOMER :`

 	This will create customer account in QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `CREATE_CUSTOMER` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_customer.json) | Json having business details. | YES |


`5. EDIT CUSTOMER :`

 	This will edit customer account in QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_CUSTOMER` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_customer.json) | Json having business details. | YES |


`6. GET CUSTOMER :`

 	This will get customer account from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GET_CUSTOMER` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/get_business_customer.json) | Json having business details. | YES |


`7. DELETE CUSTOMER :`

 	This will delete customer account from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `DELETE_CUSTOMER` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/delete_business_customer.json) | Json having business details. | YES |


`7. GET ALL CUSTOMERS :`

 	This will list all customers account from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GETALL_CUSTOMERS` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/getall_business_customers.json) | Json having business details. | YES |


`8. CREATE EMPLOYEE :`

 	This will create EMPLOYEE account in QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `CREATE_EMPLOYEE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_employee.json) | Json having business details. | YES |


`5. EDIT EMPLOYEE :`

 	This will edit EMPLOYEE account in QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_EMPLOYEE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_employee.json) | Json having business details. | YES |


`6. GET EMPLOYEE :`

 	This will get EMPLOYEE account from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GET_EMPLOYEE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/get_business_employee.json) | Json having business details. | YES |


`7. DELETE EMPLOYEE :`

 	This will delete EMPLOYEE account from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `DELETE_EMPLOYEE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/delete_business_employee.json) | Json having business details. | YES |


`8. GET ALL EMPLOYEEs :`

 	This will list all EMPLOYEEs account from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GETALL_EMPLOYEES` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/getall_business_employees.json) | Json having business details. | YES |


`9. CREATE INVOICE :`

 	This will create invoice.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `CREATE_INVOICE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_invoice.json) | Json having business details. | YES |


`10. EDIT INVOICE :`

 	This will edit given invoice.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_INVOICE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_invoice.json) | Json having business details. | YES |


`11. DELETE INVOICE :`

 	This will delete INVOICE  from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `DELETE_INVOICE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/delete_business_invoice.json) | Json having business details. | YES |


`12. GET ALL INVOICES :`

 	This will list all INVOICES  from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GETALL_INVOICES` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/getall_business_invoices.json) | Json having business details. | YES |


`13. VOID INVOICE :`

 	This will VOID INVOICE  from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `VOID_INVOICE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/void_business_invoice.json) | Json having business details. | YES |


`14. EMAIL INVOICE :`

 	This will send invoice to given email id.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EMAIL_INVOICE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/email_business_invoice.json) | Json having business details. | YES |


`15. GET INVOICE PDF :`

 	This will get invoice as pdf.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GET_INVOICE_PDF` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/getpdf_business_invoice.json) | Json having business details. | YES |


`16. CREATE PAYMENT TRANSACTION :`

 	This will create PAYMENT TRANSACTION in QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `CREATE_PAYMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_payment.json) | Json having business details. | YES |


`17. EDIT PAYMENT TRANSACTION :`

 	This will edit PAYMENT TRANSACTION in QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_PAYMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_payment.json) | Json having business details. | YES |


`18. GET PAYMENT TRANSACTION :`

 	This will get PAYMENT TRANSACTION from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GET_PAYMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/get_business_payment.json) | Json having business details. | YES |


`19. DELETE PAYMENT TRANSACTION :`

 	This will delete PAYMENT TRANSACTION from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `DELETE_PAYMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/delete_business_payment.json) | Json having business details. | YES |


`20. GET ALL PAYMENT TRANSACTION :`

 	This will list all PAYMENT TRANSACTION from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GETALL_PAYMENTS` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/getall_business_payments.json) | Json having business details. | YES |


`21. CREATE VENDOR :`

 	This will create VENDOR account in QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `CREATE_VENDOR` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_vendor.json) | Json having business details. | YES |


`22. EDIT VENDOR :`

 	This will edit VENDOR account in QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_VENDOR` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_vendor.json) | Json having business details. | YES |


`23. GET VENDOR :`

 	This will get VENDOR account from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GET_VENDOR` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/get_business_vendor.json) | Json having business details. | YES |


`24. DELETE VENDOR :`

 	This will delete VENDOR account from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `DELETE_VENDOR` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/delete_business_vendor.json) | Json having business details. | YES |


`25. GET ALL VENDORS :`

 	This will list all VENDORS account from QBO.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GETALL_VENDORS` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/getall_business_vendors.json) | Json having business details. | YES |
