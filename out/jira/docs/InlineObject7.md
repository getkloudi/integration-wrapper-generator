# Jira.InlineObject7

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The description of the custom field, which is displayed in the UI. | [optional] 
**name** | **String** | The name of the custom field, which is displayed in the UI. This is not the unique identifier. | [optional] 
**searcherKey** | **String** | The searcher defines the way the field is searched in Jira. For example, com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher.The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown): | [optional] 
**type** | **String** | The type of the custom field. For example, com.atlassian.jira.plugin.system.customfieldtypes:grouppicker. | [optional] 



## Enum: SearcherKeyEnum


* `cascadingselectsearcher` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher"`)

* `daterange` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:daterange"`)

* `datetimerange` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:datetimerange"`)

* `exactnumber` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:exactnumber"`)

* `exacttextsearcher` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:exacttextsearcher"`)

* `grouppickersearcher` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher"`)

* `labelsearcher` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:labelsearcher"`)

* `multiselectsearcher` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:multiselectsearcher"`)

* `numberrange` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:numberrange"`)

* `projectsearcher` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:projectsearcher"`)





## Enum: TypeEnum


* `cascadingselect` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:cascadingselect"`)

* `datepicker` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:datepicker"`)

* `datetime` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:datetime"`)

* `float` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:float"`)

* `grouppicker` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:grouppicker"`)

* `importid` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:importid"`)

* `labels` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:labels"`)

* `multicheckboxes` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes"`)

* `multigrouppicker` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker"`)

* `multiselect` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:multiselect"`)




