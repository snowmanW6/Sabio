entityService = {
  endpoint: "https://api.remotebootcamp.dev/api/entities"
};


entityService.addEntity = (entityName, payload, flowControl) => { // POST
  // console.log("... addEntity is executing ...", payload);

  const entityPath = `/${entityName}`;

  const config = {
    method: "POST",
    url: entityService.endpoint + entityPath,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
    .then(function (data) {

      return { data, entityName, payload, flowControl };
    });
};

entityService.getAllByName = (entityName, flowControl) => { // GET
  // console.log("... getAllByName is executing ... ");

  const entityPath = `/${entityName}`;

  const config = {
    method: "GET",
    url: entityService.endpoint + entityPath,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
    .then(function (data) {

      return { data, entityName, flowControl };
    });
};

entityService.getSpecificRecord = (entityName, id, flowControl) => { // GET
  // console.log("... getSpecificRecord is executing ... ");

  const entityPath = `/${entityName}/${id}`;
  // console.log(usersService.endpoint + pageGrab);

  const config = {
    method: "GET",
    url: entityService.endpoint + entityPath,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
    .then(function (data) {

      return { data, entityName, flowControl };
    });
};

entityService.replaceContents = (entityName, id, payload) => { // PUT
  // console.log("... replaceContents is executing ... ");

  const entityPath = `/${entityName}/${id}`;
  // console.log(usersService.endpoint + pageGrab);

  const config = {
    method: "PUT",
    url: entityService.endpoint + entityPath,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
    .then(function (data) {
      // console.log(data);
      return { data, id, entityName, payload };

    });
  // .catch(function (data) {
  //   // console.warn(data);
  //   return data;
  // });
};

entityService.addToOrUpdateProps = (entityName, id, payload) => { // PATCH
  // console.log("... addToOrUpdateProp is executing ... ");

  const entityPath = `/${entityName}/${id}`;
  // console.log(usersService.endpoint + pageGrab);

  const config = {
    method: "PATCH",
    url: entityService.endpoint + entityPath,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
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

entityService.delete = (entityName, id, flowControl) => {  // DELETE
  // console.log("... entity-delete is executing ...", entityName, id);

  const entityPath = `/${entityName}/${id}`;

  const config = {
    method: "DELETE",
    url: entityService.endpoint + entityPath,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
    .then(function (data) {
      // console.log("DELETE SUCCESS", data);
      return { data, entityName, id, flowControl };
    })
    .catch(function (data) {

      throw ({ data, entityName, id });

    });
};


/*  ============ ITEM REPOSITORY - what has been tested ===============

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
curl -X PATCH "https://api.remotebootcamp.dev/api/entities/aircraft/1444455836" -H "accept: */ /*" -H "Content-Type: application/json-patch+json" -d "{ \"engine\": \"pratt-whitney combustion\", \"numEngines\": 2, \"model\": \"Cessna Skymaster\", }"
https://api.remotebootcamp.dev/api/entities/aircraft/1444455836

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
curl -X DELETE "https://api.remotebootcamp.dev/api/entities/aircraft/1307507002" -H "accept: *//*"
https://api.remotebootcamp.dev/api/entities/aircraft/1307507002
*/
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