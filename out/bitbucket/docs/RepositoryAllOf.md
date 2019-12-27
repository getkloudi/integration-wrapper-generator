# Bitbucket.RepositoryAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**RepositoryAllOfLinks**](RepositoryAllOfLinks.md) |  | [optional] 
**uuid** | **String** | The repository&#39;s immutable id. This can be used as a substitute for the slug segment in URLs. Doing this guarantees your URLs will survive renaming of the repository by its owner, or even transfer of the repository to a different user. | [optional] 
**fullName** | **String** | The concatenation of the repository owner&#39;s username and the slugified name, e.g. \&quot;evzijst/interruptingcow\&quot;. This is the same string used in Bitbucket URLs. | [optional] 
**isPrivate** | **Boolean** |  | [optional] 
**parent** | [**Repository**](Repository.md) |  | [optional] 
**scm** | **String** |  | [optional] 
**owner** | [**Account**](Account.md) |  | [optional] 
**name** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**createdOn** | **Date** |  | [optional] 
**updatedOn** | **Date** |  | [optional] 
**size** | **Number** |  | [optional] 
**language** | **String** |  | [optional] 
**hasIssues** | **Boolean** |  | [optional] 
**hasWiki** | **Boolean** |  | [optional] 
**forkPolicy** | **String** |  Controls the rules for forking this repository.  * **allow_forks**: unrestricted forking * **no_public_forks**: restrict forking to private forks (forks cannot   be made public later) * **no_forks**: deny all forking  | [optional] 
**project** | [**Project**](Project.md) |  | [optional] 
**mainbranch** | [**Branch**](Branch.md) |  | [optional] 



## Enum: ScmEnum


* `hg` (value: `"hg"`)

* `git` (value: `"git"`)





## Enum: ForkPolicyEnum


* `allow_forks` (value: `"allow_forks"`)

* `no_public_forks` (value: `"no_public_forks"`)

* `no_forks` (value: `"no_forks"`)




