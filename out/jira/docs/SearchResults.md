# Jira.SearchResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **String** | Expand options that include additional search result details in the response. | [optional] [readonly] 
**issues** | [**[IssueBean]**](IssueBean.md) | The list of issues found by the search. | [optional] [readonly] 
**maxResults** | **Number** | The maximum number of results that could be on the page. | [optional] [readonly] 
**names** | **{String: String}** | The ID and name of each field in the search results. | [optional] [readonly] 
**schema** | [**{String: JsonTypeBean}**](JsonTypeBean.md) | The schema describing the field types in the search results. | [optional] [readonly] 
**startAt** | **Number** | The index of the first item returned on the page. | [optional] [readonly] 
**total** | **Number** | The number of results on the page. | [optional] [readonly] 
**warningMessages** | **[String]** | Any warnings related to the JQL query. | [optional] [readonly] 


