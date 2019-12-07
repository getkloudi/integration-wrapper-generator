# Github.TreeTree

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | One of 100644 for file (blob), 100755 for executable (blob), 040000 for subdirectory (tree), 160000 for submodule (commit) or 120000 for a blob that specifies the path of a symlink. | [optional] 
**path** | **String** |  | [optional] 
**sha** | **String** | SHA1 checksum ID of the object in the tree. | [optional] 
**size** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 
**url** | **String** |  | [optional] 



## Enum: ModeEnum


* `100644` (value: `"100644"`)

* `100755` (value: `"100755"`)

* `040000` (value: `"040000"`)

* `160000` (value: `"160000"`)

* `120000` (value: `"120000"`)





## Enum: TypeEnum


* `blob` (value: `"blob"`)

* `tree` (value: `"tree"`)

* `commit` (value: `"commit"`)




