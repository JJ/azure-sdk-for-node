// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain7792\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain7792\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '538',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '76a89e0f-2d2f-4f48-a18a-15ce3c3fdad1',
  'x-ms-client-request-id': 'aa4a834a-77ec-4357-9ac0-be426d0adb36',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '9b06118c-9dac-461c-bcf9-6c7bb096fa33',
  'x-ms-routing-request-id': 'WESTUS:20160302T224823Z:9b06118c-9dac-461c-bcf9-6c7bb096fa33',
  date: 'Wed, 02 Mar 2016 22:48:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain7792\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup8531/providers/Microsoft.Cdn/profiles/cdnTestProfile6538/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain7792\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '538',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '76a89e0f-2d2f-4f48-a18a-15ce3c3fdad1',
  'x-ms-client-request-id': 'aa4a834a-77ec-4357-9ac0-be426d0adb36',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '9b06118c-9dac-461c-bcf9-6c7bb096fa33',
  'x-ms-routing-request-id': 'WESTUS:20160302T224823Z:9b06118c-9dac-461c-bcf9-6c7bb096fa33',
  date: 'Wed, 02 Mar 2016 22:48:22 GMT',
  connection: 'close' });
 return result; }]];