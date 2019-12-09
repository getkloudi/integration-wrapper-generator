# Bitbucket.Repository

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdOn** | **Date** |  | [optional] 
**description** | **String** |  | [optional] 
**forkPolicy** | **String** |  Controls the rules for forking this repository.  * **allow_forks**: unrestricted forking * **no_public_forks**: restrict forking to private forks (forks cannot   be made public later) * **no_forks**: deny all forking  | [optional] 
**fullName** | **String** | The concatenation of the repository owner&#39;s username and the slugified name, e.g. \&quot;evzijst/interruptingcow\&quot;. This is the same string used in Bitbucket URLs. | [optional] 
**hasIssues** | **Boolean** |  | [optional] 
**hasWiki** | **Boolean** |  | [optional] 
**isPrivate** | **Boolean** |  | [optional] 
**language** | **String** |  | [optional] 
**links** | [**RepositoryAllOfLinks**](RepositoryAllOfLinks.md) |  | [optional] 
**name** | **String** |  | [optional] 
**owner** | [**Account**](Account.md) |  | [optional] 
**parent** | [**Repository**](Repository.md) |  | [optional] 
**project** | [**Project**](Project.md) |  | [optional] 
**scm** | **String** |  | [optional] 
**size** | **Number** |  | [optional] 
**updatedOn** | **Date** |  | [optional] 
**uuid** | **String** | The repository&#39;s immutable id. This can be used as a substitute for the slug segment in URLs. Doing this guarantees your URLs will survive renaming of the repository by its owner, or even transfer of the repository to a different user. | [optional] 



## Enum: ForkPolicyEnum


* `allow_forks` (value: `"allow_forks"`)

* `no_public_forks` (value: `"no_public_forks"`)

* `no_forks` (value: `"no_forks"`)





## Enum: ScmEnum


* `hg` (value: `"hg"`)

* `git` (value: `"git"`)




