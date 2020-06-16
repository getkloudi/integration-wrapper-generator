# Jira.JQLApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jqlAutocompletedataGet**](JQLApi.md#jqlAutocompletedataGet) | **GET** /jql/autocompletedata | Get field reference data
[**jqlAutocompletedataSuggestionsGet**](JQLApi.md#jqlAutocompletedataSuggestionsGet) | **GET** /jql/autocompletedata/suggestions | Get field auto complete suggestions
[**jqlParsePost**](JQLApi.md#jqlParsePost) | **POST** /jql/parse | Parse JQL query
[**jqlPdcleanerPost**](JQLApi.md#jqlPdcleanerPost) | **POST** /jql/pdcleaner | Convert user identifiers to account IDs in JQL queries



## jqlAutocompletedataGet

> JQLReferenceData jqlAutocompletedataGet(cloudid)

Get field reference data

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.JQLApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.jqlAutocompletedataGet(cloudid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudid** | [**Object**](.md)| Cloudi of the project | 

### Return type

[**JQLReferenceData**](JQLReferenceData.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## jqlAutocompletedataSuggestionsGet

> AutoCompleteSuggestions jqlAutocompletedataSuggestionsGet(cloudid, opts)

Get field auto complete suggestions

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.JQLApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'fieldName': "fieldName_example", // String | The name of the field.
  'fieldValue': "fieldValue_example", // String | The partial field item name entered by the user.
  'predicateName': "predicateName_example", // String | The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*.
  'predicateValue': "predicateValue_example" // String | The partial predicate item name entered by the user.
};
apiInstance.jqlAutocompletedataSuggestionsGet(cloudid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudid** | [**Object**](.md)| Cloudi of the project | 
 **fieldName** | **String**| The name of the field. | [optional] 
 **fieldValue** | **String**| The partial field item name entered by the user. | [optional] 
 **predicateName** | **String**| The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*. | [optional] 
 **predicateValue** | **String**| The partial predicate item name entered by the user. | [optional] 

### Return type

[**AutoCompleteSuggestions**](AutoCompleteSuggestions.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## jqlParsePost

> ParsedJqlQueries jqlParsePost(cloudid, body)

Parse JQL query

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.JQLApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.JqlQueriesToParse(); // JqlQueriesToParse | 
apiInstance.jqlParsePost(cloudid, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudid** | [**Object**](.md)| Cloudi of the project | 
 **body** | [**JqlQueriesToParse**](JqlQueriesToParse.md)|  | 

### Return type

[**ParsedJqlQueries**](ParsedJqlQueries.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## jqlPdcleanerPost

> ConvertedJQLQueries jqlPdcleanerPost(cloudid, body)

Convert user identifiers to account IDs in JQL queries

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.JQLApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.JQLPersonalDataMigrationRequest(); // JQLPersonalDataMigrationRequest | 
apiInstance.jqlPdcleanerPost(cloudid, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cloudid** | [**Object**](.md)| Cloudi of the project | 
 **body** | [**JQLPersonalDataMigrationRequest**](JQLPersonalDataMigrationRequest.md)|  | 

### Return type

[**ConvertedJQLQueries**](ConvertedJQLQueries.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

