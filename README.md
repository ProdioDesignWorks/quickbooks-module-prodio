# quickbooks-module-prodio

`quickbooks-module-prodio` is an  node js client for the  `quickbooks-services-prodio API`. 


# Prerequisite (Things to do before installing this module):
 * Clone its dependency repository first on your server git clone https://github.com/ProdioDesignWorks/quickbooks-services-prodio.git
 * Navigate to your repo cd quickbooks-services-prodio
 * Install dependencies npm install
 * Start service node . or npm start or node server/server.js
 * Open http://localhost:7000/explorer/ in your browser
 * If you've pm2 installed then use this pm2 start server/server.js --name="QB_SERVICE"
 * When you install `quickbooks-module-prodio`, it will ask question for the BASE_URL of this `QB_SERVICE` - eventually.



# Features!
  
### Functions

* Add/Edit/Get Account

* Add/Edit/Get Client

* Add/Edit/Get Bills


# Installation

$ npm install quickbooks-module-prodio@latest --save

  
# Initialization 
Require the quickbooks-module-prodio module and initialize the quickbooks npm module client.
```JSX

 const qbClass = require('quickbooks-module-prodio');
 const qbObj = new qbClass(BASE_URL); //BASE_URL => is the url where its loopback apis are running. eg.
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