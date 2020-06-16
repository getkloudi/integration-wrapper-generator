# Jira.CustomFieldDefinitionJsonBean

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The description of the custom field, which is displayed in Jira. | [optional] 
**name** | **String** | The name of the custom field, which is displayed in Jira. This is not the unique identifier. | 
**searcherKey** | **String** | The searcher defines the way the field is searched in Jira. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher*.   The search UI (basic search and JQL search) will display different operations and values for the field, based on the field searcher. You must specify a searcher that is valid for the field type, as listed below (abbreviated values shown):   *  &#x60;cascadingselect&#x60;: &#x60;cascadingselectsearcher&#x60;  *  &#x60;datepicker&#x60;: &#x60;daterange&#x60;  *  &#x60;datetime&#x60;: &#x60;datetimerange&#x60;  *  &#x60;float&#x60;: &#x60;exactnumber&#x60; or &#x60;numberrange&#x60;  *  &#x60;grouppicker&#x60;: &#x60;grouppickersearcher&#x60;  *  &#x60;importid&#x60;: &#x60;exactnumber&#x60; or &#x60;numberrange&#x60;  *  &#x60;labels&#x60;: &#x60;labelsearcher&#x60;  *  &#x60;multicheckboxes&#x60;: &#x60;multiselectsearcher&#x60;  *  &#x60;multigrouppicker&#x60;: &#x60;multiselectsearcher&#x60;  *  &#x60;multiselect&#x60;: &#x60;multiselectsearcher&#x60;  *  &#x60;multiuserpicker&#x60;: &#x60;userpickergroupsearcher&#x60;  *  &#x60;multiversion&#x60;: &#x60;versionsearcher&#x60;  *  &#x60;project&#x60;: &#x60;projectsearcher&#x60;  *  &#x60;radiobuttons&#x60;: &#x60;multiselectsearcher&#x60;  *  &#x60;readonlyfield&#x60;: &#x60;textsearcher&#x60;  *  &#x60;select&#x60;: &#x60;multiselectsearcher&#x60;  *  &#x60;textarea&#x60;: &#x60;textsearcher&#x60;  *  &#x60;textfield&#x60;: &#x60;textsearcher&#x60;  *  &#x60;url&#x60;: &#x60;exacttextsearcher&#x60;  *  &#x60;userpicker&#x60;: &#x60;userpickergroupsearcher&#x60;  *  &#x60;version&#x60;: &#x60;versionsearcher&#x60; | 
**type** | **String** | The type of the custom field. For example, *com.atlassian.jira.plugin.system.customfieldtypes:grouppicker*.   *  &#x60;cascadingselect&#x60;: Allows multiple values to be selected using two select lists  *  &#x60;datepicker&#x60;: Stores a date using a picker control  *  &#x60;datetime&#x60;: Stores a date with a time component  *  &#x60;float&#x60;: Stores and validates a numeric (floating point) input  *  &#x60;grouppicker&#x60;: Stores a user group using a picker control  *  &#x60;importid&#x60;: A read-only field that stores the previous ID of the issue from the system that it was imported from  *  &#x60;labels&#x60;: Stores labels  *  &#x60;multicheckboxes&#x60;: Stores multiple values using checkboxes  *  &#x60;multigrouppicker&#x60;: Stores multiple user groups using a picker control  *  &#x60;multiselect&#x60;: Stores multiple values using a select list  *  &#x60;multiuserpicker&#x60;: Stores multiple users using a picker control  *  &#x60;multiversion&#x60;: Stores multiple versions from the versions available in a project using a picker control  *  &#x60;project&#x60;: Stores a project from a list of projects that the user is permitted to view  *  &#x60;radiobuttons&#x60;: Stores a value using radio buttons  *  &#x60;readonlyfield&#x60;: Stores a read-only text value, which can only be populated via the API  *  &#x60;select&#x60;: Stores a value from a configurable list of options  *  &#x60;textarea&#x60;: Stores a long text string using a multiline text area  *  &#x60;textfield&#x60;: Stores a text string using a single-line text box  *  &#x60;url&#x60;: Stores a URL  *  &#x60;userpicker&#x60;: Stores a user using a picker control  *  &#x60;version&#x60;: Stores a version using a picker control | 



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

* `textsearcher` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:textsearcher"`)

* `userpickergroupsearcher` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:userpickergroupsearcher"`)

* `versionsearcher` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:versionsearcher"`)





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

* `multiuserpicker` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker"`)

* `multiversion` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:multiversion"`)

* `project` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:project"`)

* `radiobuttons` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons"`)

* `readonlyfield` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:readonlyfield"`)

* `select` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:select"`)

* `textarea` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:textarea"`)

* `textfield` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:textfield"`)

* `url` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:url"`)

* `userpicker` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:userpicker"`)

* `version` (value: `"com.atlassian.jira.plugin.system.customfieldtypes:version"`)




