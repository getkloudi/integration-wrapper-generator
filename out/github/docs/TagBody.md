# Github.TagBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **String** | String of the tag message. | 
**_object** | **String** | String of the SHA of the git object this is tagging. | 
**tag** | **String** | The tag&#39;s name. This is typically a version (e.g., \&quot;v0.0.1\&quot;). | 
**tagger** | [**TagTagger**](TagTagger.md) |  | 
**type** | **String** | String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob. | 



## Enum: TypeEnum


* `commit` (value: `"commit"`)

* `tree` (value: `"tree"`)

* `blob` (value: `"blob"`)




