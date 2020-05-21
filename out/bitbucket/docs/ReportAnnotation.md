# Bitbucket.ReportAnnotation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **String** | ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an alternative to it&#39;s generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or deleting this specific annotation. Needs to be unique. | [optional] 
**uuid** | **String** | The UUID that can be used to identify the annotation. | [optional] 
**annotationType** | **String** | The type of the report. | [optional] 
**path** | **String** | The path of the file on which this annotation should be placed. This is the path of the file relative to the git repository. If no path is provided, then it will appear in the overview modal on all pull requests where the tip of the branch is the given commit, regardless of which files were modified. | [optional] 
**line** | **Number** | The line number that the annotation should belong to. If no line number is provided, then it will default to 0 and in a pull request it will appear at the top of the file specified by the path field. | [optional] 
**summary** | **String** | The message to display to users. | [optional] 
**details** | **String** | The details to show to users when clicking on the annotation. | [optional] 
**result** | **String** | The state of the report. May be set to PENDING and later updated. | [optional] 
**severity** | **String** | The severity of the annotation. | [optional] 
**link** | **String** | A URL linking to the annotation in an external tool. | [optional] 
**createdOn** | **Date** | The timestamp when the report was created. | [optional] 
**updatedOn** | **Date** | The timestamp when the report was updated. | [optional] 



## Enum: AnnotationTypeEnum


* `VULNERABILITY` (value: `"VULNERABILITY"`)

* `CODE_SMELL` (value: `"CODE_SMELL"`)

* `BUG` (value: `"BUG"`)





## Enum: ResultEnum


* `PASSED` (value: `"PASSED"`)

* `FAILED` (value: `"FAILED"`)

* `SKIPPED` (value: `"SKIPPED"`)

* `IGNORED` (value: `"IGNORED"`)





## Enum: SeverityEnum


* `CRITICAL` (value: `"CRITICAL"`)

* `HIGH` (value: `"HIGH"`)

* `MEDIUM` (value: `"MEDIUM"`)

* `LOW` (value: `"LOW"`)




