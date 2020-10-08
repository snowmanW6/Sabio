entityService = {
  endpoint: "https://api.remotebootcamp.dev/api/entities",
};

entityService.addEntity = (entityName, payload) => {
  // POST
  // console.log("... addEntity is executing ...", payload);

  const entityPath = `/${entityName}`;

  const config = {
    method: "POST",
    url: entityService.endpoint + entityPath,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(function (data) {
    return { data, entityName, payload };
  });
};

entityService.add = (entityName, payload) => {
  console.log("... add is executing ...", payload);

  const entityPath = `/${entityName}`;
  const urlPath = entityService.endpoint + entityPath;

  const settings = {
    data: JSON.stringify(payload),

    type: "POST", //POST, PUT, DELETE
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    xhrFields: {
      withCredentials: true
    },
    contentType: "application/json; charset=utf-8"
  };
  return $.ajax(urlPath, settings);
  // let response = $.ajax(urlPath, settings);
  // .then(result1 => {
  //   result1.entityName = entityName;
  // });

  // response.entityName = entityName;
  // response.payload = payload;

  // response.responseJSON.entityName = entityName;
  // response.responseJSON.transactionId = payload;
  // console.log(response);
  // return response;//{ response, entityName, payload };
};

// =============================================================

entityService.getAllByName = (entityName) => {
  // GET
  // console.log("... getAllByName is executing ... ");

  const entityPath = `/${entityName}`;

  const config = {
    method: "GET",
    url: entityService.endpoint + entityPath,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(function (data) {
    return { data, entityName };
  });
};

// -------------------------------

entityService.getAll = (entityName) => {
  // GET
  console.log("... getAll is executing ... ");

  const entityPath = `/${entityName}`;
  const fullPath = entityService.endpoint + entityPath;

  const settings = {
    type: "GET", //POST, PUT, DELETE
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    xhrFields: {
      withCredentials: true
    },
    contentType: "application/json; charset=utf-8"
    // STEP 2: remove references to callback function parameters
  };

  return $.ajax(fullPath, settings);
};

// =============================================================


// entityService.getSpecificRecordV0 = (entityName, id) => {
//   // GET
//   // console.log("... getSpecificRecord is executing ... ");

//   const entityPath = `/${entityName}/${id}`;

//   const config = {
//     method: "GET",
//     url: entityService.endpoint + entityPath,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config).then(function (data) {
//     return { data, entityName };
//   });
// };

// -----------------------

entityService.getSpecificRecord = (entityName, id) => {
  // GET
  console.log("... getSpecificRecord is executing ... ");

  const entityPath = `/${entityName}/${id}`;
  const fullPath = entityService.endpoint + entityPath;
  // console.log(usersService.endpoint + pageGrab);

  const settings = {
    type: "GET", //POST, PUT, DELETE
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    xhrFields: {
      withCredentials: true
    },
    contentType: "application/json; charset=utf-8"
    // STEP 2: remove references to callback function parameters
  };

  return $.ajax(fullPath, settings)
    .then(function (data) {

      // console.log("Updating in-between then's ")
      return { entityName, id, data };
    })
};

// =========================================== UPDATE ==================

// entityService.replaceContents = (entityName, id, payload) => {
//   // PUT
//   // console.log("... replaceContents is executing ... ");

//   const entityPath = `/${entityName}/${id}`;
//   // console.log(usersService.endpoint + pageGrab);

//   const config = {
//     method: "PUT",
//     url: entityService.endpoint + entityPath,
//     data: payload,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config).then(function (data) {
//     // console.log(data);
//     return { data, id, entityName, payload };
//   });
//   // .catch(function (data) {
//   //   // console.warn(data);
//   //   return data;
//   // });
// };

// ----------------------------

entityService.update = (entityName, id, payload, list) => { // UPDATE (PUT) via Promise
  // PUT
  console.log("... update is executing ... ");

  const entityPath = `/${entityName}/${id}`;
  const fullPath = entityService.endpoint + entityPath;

  const settings = {
    data: JSON.stringify(payload),

    type: "PUT",
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    xhrFields: {
      withCredentials: true
    },
    contentType: "application/json; charset=utf-8"
  };

  return $.ajax(fullPath, settings)

    .then(function (data) {
      let isSuccessful = data.isSuccessful;
      // console.log("Updating in-between then's ")
      return { isSuccessful, entityName, id, payload };
    })

    .fail(function (xhrObj, state, message) {
      let status = xhrObj.status;
      let compositeError = `ALERT: < ${state} > ${status}: ${message}`;
      let isSuccessful = false;
      if (list) {
        list.push({ isSuccessful, compositeError, entityName, entityId, payload });
      }
    });
};

// =========================================== PATCH ==================


entityService.addToOrUpdateProps = (entityName, id, payload) => {
  // PATCH
  // console.log("... addToOrUpdateProp is executing ... ");

  const entityPath = `/${entityName}/${id}`;
  // console.log(usersService.endpoint + pageGrab);

  const config = {
    method: "PATCH",
    url: entityService.endpoint + entityPath,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(function (data) {
      // console.log(data);
      return data;
      // return{ data, pageIndex}
    })
    .catch(function (data) {
      // console.warn(data);
      return data;
    });
};

// ================================= DELETE ===========================

entityService.deleteVaxios = (entityName, entityId) => {
  // DELETE
  // console.log("... entity-delete is executing ...", entityName, id);
  const breakingId = 181818181818;

  const entityPath = `/${entityName}/${breakingId}`;

  const config = {
    method: "DELETE",
    url: entityService.endpoint + entityPath,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(function (data) {
      // console.log("DELETE SUCCESS", data);
      return { data, entityName, entityId };
    })
    .catch(function (data) {
      console.log("ERROR", data);

      let isSuccessful = false;
      const compositeError = "Error: " + data.response.status
        + " : " + data.response.statusText;

      // NEW MOST WORKING CASE SO FAR
      throw ({ isSuccessful, compositeError, entityName, entityId });
      // 5. next fires .catch (with expected object), usable and program continues as expected
      // why:  error is handled, so if I want to use the follow-on catch and not co-mingle successful
      //       and unsuccessful paths, I must throw an exception using the generic error mechanism
      //      with one argument.

      // throw new Error({ isSuccessful, compositeError, entityName, entityId });
      // 4. next fires .catch ( with Error: [object Object] ...) unusable, manageError can't
      // why: ??  expexting Error object to be created, but I gave it an object and not constructor arguments

      // MOST WORKING CASE SO FAR from bottom up
      // return { isSuccessful, compositeError, entityName, entityId };
      // 3. next fires .then( with expected object) program proceeds normally; .catch does not fire
      // why: error is now "handled", proceeding as if no error through promise chain
      //      unfortunately, now you have the success handler managing both success and fail: not desired

      // Promise.reject({ isSuccessful, compositeError, entityName, entityId });
      // 2. next fires .then(no data), which tiggers entityName undefined and next .catch,  but this reject is Uncaught
      // also data.isSuccessful check later breaks
      // why:  sames as #1 plus improper syntax

      // return Promise.reject({ isSuccessful, compositeError, entityName, entityId });
      // 1. next fires entities .then  but no data, so data.isSuccessful check later breaks
      // why:   deferred object state not changeable from outside its creation framework

      //-------- reference framework to match from .delete below
      // let compositeError = `ALERT: < ${state} > ${status}: ${message}`;
      // return Promise.reject({ isSuccessful, compositeError, entityName, entityId });
    });
};

// -------------------------

entityService.delete = (entityName, entityId, list) => {  // DELETE - via Promise
  // const breakingId = 181818181818;

  console.log("... entityService-delete is executing ...", entityName, entityId);
  const entityPath = `/${entityName}/${entityId}`;
  const fullPath = entityService.endpoint + entityPath;

  const settings = {
    // data: JSON.stringify(data),

    type: "DELETE",
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    xhrFields: {
      withCredentials: true
    },
    contentType: "application/json; charset=utf-8"
  };

  return $.ajax(fullPath, settings)
    .then(function (data) {
      // console.log(" << entityService.delete.then >> ");
      let isSuccessful = data.isSuccessful;
      return { entityName, entityId, isSuccessful };
    })

    .fail(function (xhrObj, state, message) {
      // console.log(" << entityService.delete.fail >> ");
      // console.log(arguments);

      let status = xhrObj.status;
      let compositeError = `ALERT: < ${state} > ${status}: ${message}`;
      let isSuccessful = false;
      if (list) {
        list.push({ isSuccessful, compositeError, entityName, entityId });
      } // list pushing works, but not truly concurrent safe

      // return { isSuccessful, compositeError, entityName, entityId };

      // throw new Error({ isSuccessful, compositeError, entityName, entityId });

      // return Promise.resolve();

      // return Promise.reject();

      // return Promise.resolve({ isSuccessful, compositeError, entityName, entityId });

      // return Promise.reject({ isSuccessful, compositeError, entityName, entityId });

    });
  // .always(function () {
  //   console.log(" << entityService.delete.always >> ");
  //   console.log(arguments);

  //   return;
  // });

};

entityService.deleteVwrapped = (entityName, entityId) => {
  let deferedObject = $.Deferred();

  // const breakingId = 181818181818;  // XXX TEST component
  console.log("... entityService-delete is executing ...", entityName, entityId);
  // console.log("... entityService-delete is executing  FORCE BREAKING ID ...", entityName, breakingId);

  const entityPath = `/${entityName}/${entityId}`;
  const fullPath = entityService.endpoint + entityPath;

  const settings = {
    type: "DELETE",
    headers: {
      "sabio-auth": "SA-1391-AAA"
    },
    xhrFields: {
      withCredentials: true
    },
    contentType: "application/json; charset=utf-8"
  };

  $.ajax(fullPath, settings)

    .then(function (data) {
      // console.log(" << entityService.delete.then >> ");

      let isSuccessful = data.isSuccessful;

      deferedObject.resolve({ entityName, entityId, isSuccessful });
    })

    .fail(function (xhrObj, state, message) {
      // console.log(" << entityService.delete.fail >> ", arguments);

      let status = xhrObj.status;
      let compositeError = `ALERT: < ${state} > ${status}: ${message}`;
      let isSuccessful = false;

      deferedObject.reject({ isSuccessful, compositeError, entityName, entityId });
    });

  return deferedObject.promise();
  // Does NOT allow the user of the function to modify the state of the deferred object
}
/*" -H "Content-Type: application/json-patch+json" -d "{ \"engine\": \"pratt-whitney combustion\", \"numEngines\": 2, \"model\": \"Cessna Skymaster\", }"
https://api.remotebootcamp.dev/api/entities/aircraft/1444455836
*/ /*"
https://api.remotebootcamp.dev/api/entities/aircraft/1307507002
*/

/*  ============ ITEM REPOSITORY - analysis run on the API helper ===============

POST - VIA Api Help Docs
aircraft
{
  "additionalProp1": [
    null
  ],
  "additionalProp2": [
    null
  ],
  "additionalProp3": [
    null
  ]
}
https://api.remotebootcamp.dev/api/entities/aircraft
{
  "item": "1444455836",
  "isSuccessful": true,
  "transactionId": "7b2f5283-66ea-43b2-89ed-a182baad5a81"
}
 access-control-allow-credentials: true
 access-control-allow-origin: https://api.remotebootcamp.dev
 content-length: 96
 content-type: application/json; charset=utf-8
 date: Sat, 19 Sep 2020 20:44:36 GMT
 location: /api/entities/aircraft/1444455836
 request-context: appId=cid-v1:13ac8f1d-b3e6-4709-900f-c2d801e8bf1c
 server: Microsoft-IIS/10.0
 x-powered-by: ASP.NET

=====================================================================

POST - VIA Api Help Docs
aircraft
{
  "engine": "pratt-whitney combustion",
  "numEngines": 2,
  "model": "Cessna Skymaster"
}
https://api.remotebootcamp.dev/api/entities/aircraft
{
  "item": "1307507002",
  "isSuccessful": true,
  "transactionId": "292d12c8-ce98-4727-8eda-10c8d5ccea91"
}
access-control-allow-credentials: true
 access-control-allow-origin: https://api.remotebootcamp.dev
 content-length: 96
 content-type: application/json; charset=utf-8
 date: Sat, 19 Sep 2020 20:55:39 GMT
 location: /api/entities/aircraft/1307507002
 request-context: appId=cid-v1:13ac8f1d-b3e6-4709-900f-c2d801e8bf1c
 server: Microsoft-IIS/10.0
 x-powered-by: ASP.NET

 ========================================================

 GET aircraft
 https://api.remotebootcamp.dev/api/entities/aircraft
 {
  "items": [
    {
      "engine": "pratt-whitney combustion",
      "numEngines": 2,
      "model": "Cessna Skymaster",
      "id": 1307507002,
      "dateModified": "2020-09-19T20:55:40.1393051+00:00",
      "dateAdded": "2020-09-19T20:55:40.1393094+00:00"
    },
    {
      "additionalProp1": [
        null
      ],
      "additionalProp2": [
        null
      ],
      "additionalProp3": [
        null
      ],
      "id": 1444455836,
      "dateModified": "2020-09-19T20:44:36.9149307+00:00",
      "dateAdded": "2020-09-19T20:44:36.9149326+00:00"
    }
  ],
  "isSuccessful": true,
  "transactionId": "8f78100f-c5ac-409d-b63a-67a4a0fd7a27"
}
content-encoding: gzip
 content-type: application/json; charset=utf-8
 date: Sat, 19 Sep 2020 20:57:27 GMT
 request-context: appId=cid-v1:13ac8f1d-b3e6-4709-900f-c2d801e8bf1c
 server: Microsoft-IIS/10.0
 transfer-encoding: chunked
 vary: Accept-Encoding
 x-powered-by: ASP.NET

 ===================================================

 GET name and ID
 aircraft
 1307507002
 https://api.remotebootcamp.dev/api/entities/aircraft/1307507002
 {
  "item": {
    "engine": "pratt-whitney combustion",
    "numEngines": 2,
    "model": "Cessna Skymaster",
    "id": 1307507002,
    "dateModified": "2020-09-19T20:55:40.1393051+00:00",
    "dateAdded": "2020-09-19T20:55:40.1393094+00:00"
  },
  "isSuccessful": true,
  "transactionId": "64ace1c3-1174-4661-808b-be6d5362f833"
}
=================================================

PUT
 /api​/entities​/{entityName}​/{id}
aircraft
1307507002
{
  "additionalProp1": [
    "400", 4, "trace"
  ],
  "additionalProp2": [
    null
  ],
  "additionalProp3": [
    null
  ]
}
https://api.remotebootcamp.dev/api/entities/aircraft/1307507002
{
  "isSuccessful": true,
  "transactionId": "1e9412db-2a81-4e91-9eaf-e5938adf7474"
}
access-control-allow-credentials: true
 access-control-allow-origin: https://api.remotebootcamp.dev
 content-encoding: gzip
 content-type: application/json; charset=utf-8
 date: Sat, 19 Sep 2020 21:08:24 GMT
 request-context: appId=cid-v1:13ac8f1d-b3e6-4709-900f-c2d801e8bf1c
 server: Microsoft-IIS/10.0
 transfer-encoding: chunked
 vary: Accept-Encoding
 x-powered-by: ASP.NET

 =======================================================
GET
/api/entities/{entityName}
aircraft
https://api.remotebootcamp.dev/api/entities/aircraft
{
  "items": [
    {
      "additionalProp1": [
        "400",
        4,
        "trace"
      ],
      "additionalProp2": [
        null
      ],
      "additionalProp3": [
        null
      ],
      "id": "1307507002",
      "dateModified": "2020-09-19T21:08:25.7484376+00:00",
      "dateAdded": "2020-09-19T20:55:40.1393094+00:00"
    },
    {
      "additionalProp1": [
        null
      ],
      "additionalProp2": [
        null
      ],
      "additionalProp3": [
        null
      ],
      "id": 1444455836,
      "dateModified": "2020-09-19T20:44:36.9149307+00:00",
      "dateAdded": "2020-09-19T20:44:36.9149326+00:00"
    }
  ],
  "isSuccessful": true,
  "transactionId": "9b432eb2-7677-499b-b1b5-b69c82e9c4a0"
}
Response headers
 content-encoding: gzip
 content-type: application/json; charset=utf-8
 date: Sat, 19 Sep 2020 21:10:11 GMT
 request-context: appId=cid-v1:13ac8f1d-b3e6-4709-900f-c2d801e8bf1c
 server: Microsoft-IIS/10.0
 transfer-encoding: chunked
 vary: Accept-Encoding
 x-powered-by: ASP.NET


 ================================================
PATCH
 /api​/entities​/{entityName}​/{id}
aircraft
1444455836
{
    "engine": "pratt-whitney combustion",
    "numEngines": 2,
    "model": "Cessna Skymaster",
  }
curl -X PATCH "https://api.remotebootcamp.dev/api/entities/aircraft/1444455836" -H "accept: */
/*
{
  "isSuccessful": true,
  "transactionId": "8ff3cba3-b1f3-4bfd-b312-8acee5d5d884"
}
access-control-allow-credentials: true
 access-control-allow-origin: https://api.remotebootcamp.dev
 content-encoding: gzip
 content-length: 192
 content-type: application/json; charset=utf-8
 date: Sat, 19 Sep 2020 21:13:46 GMT
 request-context: appId=cid-v1:13ac8f1d-b3e6-4709-900f-c2d801e8bf1c
 server: Microsoft-IIS/10.0
 vary: Accept-Encoding
 x-powered-by: ASP.NET

===============================================
*/
/*
GET    aircraft
https://api.remotebootcamp.dev/api/entities/aircraft
{
  "items": [
    {
      "additionalProp1": [
        "400",
        4,
        "trace"
      ],
      "additionalProp2": [
        null
      ],
      "additionalProp3": [
        null
      ],
      "id": "1307507002",
      "dateModified": "2020-09-19T21:08:25.7484376+00:00",
      "dateAdded": "2020-09-19T20:55:40.1393094+00:00"
    },
    {
      "additionalProp1": [
        null
      ],
      "additionalProp2": [
        null
      ],
      "additionalProp3": [
        null
      ],
      "id": "1444455836",
      "dateModified": "2020-09-19T21:13:47.1655251+00:00",
      "dateAdded": "2020-09-19T20:44:36.9149326+00:00",
      "engine": "pratt-whitney combustion",
      "numEngines": 2,
      "model": "Cessna Skymaster"
    }
  ],
  "isSuccessful": true,
  "transactionId": "283cec84-e312-4f34-a595-4183a84046c9"
}
Response headers
 content-encoding: gzip
content-type: application/json; charset=utf-8
 date: Sat, 19 Sep 2020 21:15:34 GMT
 request-context: appId=cid-v1:13ac8f1d-b3e6-4709-900f-c2d801e8bf1c
 server: Microsoft-IIS/10.0
 transfer-encoding: chunked
 vary: Accept-Encoding
 x-powered-by: ASP.NET

 */
/*
 =================================================
 DELETE

 /api​/entities​/{entityName}​/{id}
aircraft
1307507002
curl -X DELETE "https://api.remotebootcamp.dev/api/entities/aircraft/1307507002" -H "accept: */
/*
{
  "isSuccessful": true,
  "transactionId": "fbdfe548-91ab-41ff-9d97-5789be508817"
}
access-control-allow-credentials: true
 access-control-allow-origin: https://api.remotebootcamp.dev
 content-encoding: gzip
 content-length: 193
 content-type: application/json; charset=utf-8
 date: Sat, 19 Sep 2020 21:20:14 GMT
 request-context: appId=cid-v1:13ac8f1d-b3e6-4709-900f-c2d801e8bf1c
 server: Microsoft-IIS/10.0
 vary: Accept-Encoding
 x-powered-by: ASP.NET
 ===================================================
 GET
 {
  "items": [
    {
      "additionalProp1": [
        null
      ],
      "additionalProp2": [
        null
      ],
      "additionalProp3": [
        null
      ],
      "id": "1444455836",
      "dateModified": "2020-09-19T21:13:47.1655251+00:00",
      "dateAdded": "2020-09-19T20:44:36.9149326+00:00",
      "engine": "pratt-whitney combustion",
      "numEngines": 2,
      "model": "Cessna Skymaster"
    }
  ],
  "isSuccessful": true,
  "transactionId": "0d5b712c-0280-489d-adeb-36949e4ee33f"
}
=====================================
PATCH
aircraft 1444455836
{
      "additionalProp1": [
        "mig tail", "talon nose", "osprey wing"
      ],
}
https://api.remotebootcamp.dev/api/entities/aircraft/1444455836
{
  "isSuccessful": true,
  "transactionId": "e40c855b-4d77-4801-81fd-b392883a16e6"
}
========================================
GET
{
  "items": [
    {
      "additionalProp1": [
        null,
        "mig tail",
        "talon nose",
        "osprey wing"
      ],
      "additionalProp2": [
        null
      ],
      "additionalProp3": [
        null
      ],
      "id": "1444455836",
      "dateModified": "2020-09-19T21:25:10.3732764+00:00",
      "dateAdded": "2020-09-19T20:44:36.9149326+00:00",
      "engine": "pratt-whitney combustion",
      "numEngines": 2,
      "model": "Cessna Skymaster"
    }
  ],
  "isSuccessful": true,
  "transactionId": "d30a3ffb-66ce-4191-bc71-9e8f6d44301b"
}
*/
