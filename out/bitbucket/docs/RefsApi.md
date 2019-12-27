# Bitbucket.RefsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesWorkspaceRepoSlugRefsBranchesGet**](RefsApi.md#repositoriesWorkspaceRepoSlugRefsBranchesGet) | **GET** /repositories/{workspace}/{repo_slug}/refs/branches | 
[**repositoriesWorkspaceRepoSlugRefsBranchesNameDelete**](RefsApi.md#repositoriesWorkspaceRepoSlugRefsBranchesNameDelete) | **DELETE** /repositories/{workspace}/{repo_slug}/refs/branches/{name} | 
[**repositoriesWorkspaceRepoSlugRefsBranchesNameGet**](RefsApi.md#repositoriesWorkspaceRepoSlugRefsBranchesNameGet) | **GET** /repositories/{workspace}/{repo_slug}/refs/branches/{name} | 
[**repositoriesWorkspaceRepoSlugRefsBranchesPost**](RefsApi.md#repositoriesWorkspaceRepoSlugRefsBranchesPost) | **POST** /repositories/{workspace}/{repo_slug}/refs/branches | 
[**repositoriesWorkspaceRepoSlugRefsGet**](RefsApi.md#repositoriesWorkspaceRepoSlugRefsGet) | **GET** /repositories/{workspace}/{repo_slug}/refs | 
[**repositoriesWorkspaceRepoSlugRefsTagsGet**](RefsApi.md#repositoriesWorkspaceRepoSlugRefsTagsGet) | **GET** /repositories/{workspace}/{repo_slug}/refs/tags | 
[**repositoriesWorkspaceRepoSlugRefsTagsNameDelete**](RefsApi.md#repositoriesWorkspaceRepoSlugRefsTagsNameDelete) | **DELETE** /repositories/{workspace}/{repo_slug}/refs/tags/{name} | 
[**repositoriesWorkspaceRepoSlugRefsTagsNameGet**](RefsApi.md#repositoriesWorkspaceRepoSlugRefsTagsNameGet) | **GET** /repositories/{workspace}/{repo_slug}/refs/tags/{name} | 
[**repositoriesWorkspaceRepoSlugRefsTagsPost**](RefsApi.md#repositoriesWorkspaceRepoSlugRefsTagsPost) | **POST** /repositories/{workspace}/{repo_slug}/refs/tags | 



## repositoriesWorkspaceRepoSlugRefsBranchesGet

> PaginatedBranches repositoriesWorkspaceRepoSlugRefsBranchesGet(workspace, username, repoSlug, opts)



Returns a list of all open branches within the specified repository. Results will be in the order the source control manager returns them.  &#x60;&#x60;&#x60; $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches | jq . {   \&quot;pagelen\&quot;: 10,   \&quot;values\&quot;: [     {       \&quot;heads\&quot;: [         {           \&quot;hash\&quot;: \&quot;f1a0933ce59e809f190602655e22ae6ec107c397\&quot;,           \&quot;type\&quot;: \&quot;commit\&quot;,           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/commits/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;             }           }         }       ],       \&quot;type\&quot;: \&quot;named_branch\&quot;,       \&quot;name\&quot;: \&quot;default\&quot;,       \&quot;links\&quot;: {         \&quot;commits\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commits/default\&quot;         },         \&quot;self\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches/default\&quot;         },         \&quot;html\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/branch/default\&quot;         }       },       \&quot;target\&quot;: {         \&quot;hash\&quot;: \&quot;f1a0933ce59e809f190602655e22ae6ec107c397\&quot;,         \&quot;repository\&quot;: {           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial\&quot;             },             \&quot;avatar\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/avatar/32/\&quot;             }           },           \&quot;type\&quot;: \&quot;repository\&quot;,           \&quot;name\&quot;: \&quot;mercurial\&quot;,           \&quot;full_name\&quot;: \&quot;seanfarley/mercurial\&quot;,           \&quot;uuid\&quot;: \&quot;{73dcbd61-e506-4fc1-9ecd-31be2b6d6031}\&quot;         },         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;           },           \&quot;comments\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/comments\&quot;           },           \&quot;patch\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/patch/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/commits/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;           },           \&quot;diff\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/diff/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;           },           \&quot;approve\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/approve\&quot;           },           \&quot;statuses\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/statuses\&quot;           }         },         \&quot;author\&quot;: {           \&quot;raw\&quot;: \&quot;Martin von Zweigbergk &lt;martinvonz@google.com&gt;\&quot;,           \&quot;type\&quot;: \&quot;author\&quot;,           \&quot;user\&quot;: {             \&quot;username\&quot;: \&quot;martinvonz\&quot;,             \&quot;nickname\&quot;: \&quot;martinvonz\&quot;,             \&quot;display_name\&quot;: \&quot;Martin von Zweigbergk\&quot;,             \&quot;type\&quot;: \&quot;user\&quot;,             \&quot;uuid\&quot;: \&quot;{fdb0e657-3ade-4fad-a136-95f1ffe4a5ac}\&quot;,             \&quot;links\&quot;: {               \&quot;self\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/martinvonz\&quot;               },               \&quot;html\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/martinvonz/\&quot;               },               \&quot;avatar\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/account/martinvonz/avatar/32/\&quot;               }             }           }         },         \&quot;parents\&quot;: [           {             \&quot;hash\&quot;: \&quot;5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\&quot;,             \&quot;type\&quot;: \&quot;commit\&quot;,             \&quot;links\&quot;: {               \&quot;self\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\&quot;               },               \&quot;html\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/commits/5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\&quot;               }             }           }         ],         \&quot;date\&quot;: \&quot;2018-02-01T18:44:49+00:00\&quot;,         \&quot;message\&quot;: \&quot;config: replace a for-else by any()\&quot;,         \&quot;type\&quot;: \&quot;commit\&quot;       }     },     {       \&quot;heads\&quot;: [         {           \&quot;hash\&quot;: \&quot;1d60ad093792706e1dc7a52b20942593f2c19655\&quot;,           \&quot;type\&quot;: \&quot;commit\&quot;,           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/commits/1d60ad093792706e1dc7a52b20942593f2c19655\&quot;             }           }         }       ],       \&quot;type\&quot;: \&quot;named_branch\&quot;,       \&quot;name\&quot;: \&quot;stable\&quot;,       \&quot;links\&quot;: {         \&quot;commits\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commits/stable\&quot;         },         \&quot;self\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches/stable\&quot;         },         \&quot;html\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/branch/stable\&quot;         }       },       \&quot;target\&quot;: {         \&quot;hash\&quot;: \&quot;1d60ad093792706e1dc7a52b20942593f2c19655\&quot;,         \&quot;repository\&quot;: {           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial\&quot;             },             \&quot;avatar\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/avatar/32/\&quot;             }           },           \&quot;type\&quot;: \&quot;repository\&quot;,           \&quot;name\&quot;: \&quot;mercurial\&quot;,           \&quot;full_name\&quot;: \&quot;seanfarley/mercurial\&quot;,           \&quot;uuid\&quot;: \&quot;{73dcbd61-e506-4fc1-9ecd-31be2b6d6031}\&quot;         },         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655\&quot;           },           \&quot;comments\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655/comments\&quot;           },           \&quot;patch\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/patch/1d60ad093792706e1dc7a52b20942593f2c19655\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/commits/1d60ad093792706e1dc7a52b20942593f2c19655\&quot;           },           \&quot;diff\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/diff/1d60ad093792706e1dc7a52b20942593f2c19655\&quot;           },           \&quot;approve\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655/approve\&quot;           },           \&quot;statuses\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655/statuses\&quot;           }         },         \&quot;author\&quot;: {           \&quot;raw\&quot;: \&quot;Augie Fackler &lt;raf@durin42.com&gt;\&quot;,           \&quot;type\&quot;: \&quot;author\&quot;,           \&quot;user\&quot;: {             \&quot;username\&quot;: \&quot;durin42\&quot;,             \&quot;nickname\&quot;: \&quot;durin42\&quot;,             \&quot;display_name\&quot;: \&quot;Augie Fackler\&quot;,             \&quot;type\&quot;: \&quot;user\&quot;,             \&quot;uuid\&quot;: \&quot;{e07dc61f-bb05-4218-b43a-d991f26be65a}\&quot;,             \&quot;links\&quot;: {               \&quot;self\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/durin42\&quot;               },               \&quot;html\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/durin42/\&quot;               },               \&quot;avatar\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/account/durin42/avatar/32/\&quot;               }             }           }         },         \&quot;parents\&quot;: [           {             \&quot;hash\&quot;: \&quot;56a0da11bde519d79168e890df4bcf0da62f0a7b\&quot;,             \&quot;type\&quot;: \&quot;commit\&quot;,             \&quot;links\&quot;: {               \&quot;self\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/56a0da11bde519d79168e890df4bcf0da62f0a7b\&quot;               },               \&quot;html\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/commits/56a0da11bde519d79168e890df4bcf0da62f0a7b\&quot;               }             }           }         ],         \&quot;date\&quot;: \&quot;2018-02-01T19:13:41+00:00\&quot;,         \&quot;message\&quot;: \&quot;Added signature for changeset d334afc585e2\&quot;,         \&quot;type\&quot;: \&quot;commit\&quot;       }     }   ],   \&quot;page\&quot;: 1,   \&quot;size\&quot;: 2 } &#x60;&#x60;&#x60;  Branches support [filtering and sorting](../../../../../meta/filtering) that can be used to search for specific branches. For instance, to find all branches that have \&quot;stab\&quot; in their name:  &#x60;&#x60;&#x60; curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches -G --data-urlencode &#39;q&#x3D;name ~ \&quot;stab\&quot;&#39; &#x60;&#x60;&#x60;  By default, results will be in the order the underlying source control system returns them and identical to the ordering one sees when running \&quot;$ hg branches\&quot; or \&quot;$ git branch --list\&quot;. Note that this follows simple lexical ordering of the ref names.  This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are sorted [\&quot;v10\&quot;, \&quot;v11\&quot;, \&quot;v9\&quot;] instead of [\&quot;v9\&quot;, \&quot;v10\&quot;, \&quot;v11\&quot;].  Sorting can be changed using the ?q&#x3D; query parameter. When using ?q&#x3D;name to explicitly sort on ref name, Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.RefsApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let username = "username_example"; // String |  This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String |  This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'q': "q_example", // String |  Query string to narrow down the response as per [filtering and sorting](../../../../../meta/filtering).
  'sort': "sort_example" // String |  Field by which the results should be sorted as per [filtering and sorting](../../../../../meta/filtering). The `name` field is handled specially for branches in that, if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort order. For example, it will return ['branch1', 'branch2', 'branch10'] instead of ['branch1', 'branch10', 'branch2'].
};
apiInstance.repositoriesWorkspaceRepoSlugRefsBranchesGet(workspace, username, repoSlug, opts, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **username** | **String**|  This can either be the username or the UUID of the user, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**|  This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **q** | **String**|  Query string to narrow down the response as per [filtering and sorting](../../../../../meta/filtering). | [optional] 
 **sort** | **String**|  Field by which the results should be sorted as per [filtering and sorting](../../../../../meta/filtering). The &#x60;name&#x60; field is handled specially for branches in that, if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort order. For example, it will return [&#39;branch1&#39;, &#39;branch2&#39;, &#39;branch10&#39;] instead of [&#39;branch1&#39;, &#39;branch10&#39;, &#39;branch2&#39;]. | [optional] 

### Return type

[**PaginatedBranches**](PaginatedBranches.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugRefsBranchesNameDelete

> repositoriesWorkspaceRepoSlugRefsBranchesNameDelete(name, workspace, repoSlug)



Delete a branch in the specified repository.  The main branch is not allowed to be deleted and will return a 400 response.  For Git, the branch name should not include any prefixes (e.g. refs/heads). For Mercurial, this closes all open heads on the branch, sets the author of the commit to the authenticated caller, and changes the date to the datetime of the call.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.RefsApi();
let name = "name_example"; // String | The name of the branch.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugRefsBranchesNameDelete(name, workspace, repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the branch. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugRefsBranchesNameGet

> Branch repositoriesWorkspaceRepoSlugRefsBranchesNameGet(name, workspace, repoSlug)



Returns a branch object within the specified repository.  &#x60;&#x60;&#x60; $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches/default | jq . {   \&quot;heads\&quot;: [     {       \&quot;hash\&quot;: \&quot;f1a0933ce59e809f190602655e22ae6ec107c397\&quot;,       \&quot;type\&quot;: \&quot;commit\&quot;,       \&quot;links\&quot;: {         \&quot;self\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;         },         \&quot;html\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/commits/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;         }       }     }   ],   \&quot;type\&quot;: \&quot;named_branch\&quot;,   \&quot;name\&quot;: \&quot;default\&quot;,   \&quot;links\&quot;: {     \&quot;commits\&quot;: {       \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commits/default\&quot;     },     \&quot;self\&quot;: {       \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches/default\&quot;     },     \&quot;html\&quot;: {       \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/branch/default\&quot;     }   },   \&quot;target\&quot;: {     \&quot;hash\&quot;: \&quot;f1a0933ce59e809f190602655e22ae6ec107c397\&quot;,     \&quot;repository\&quot;: {       \&quot;links\&quot;: {         \&quot;self\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial\&quot;         },         \&quot;html\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial\&quot;         },         \&quot;avatar\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/avatar/32/\&quot;         }       },       \&quot;type\&quot;: \&quot;repository\&quot;,       \&quot;name\&quot;: \&quot;mercurial\&quot;,       \&quot;full_name\&quot;: \&quot;seanfarley/mercurial\&quot;,       \&quot;uuid\&quot;: \&quot;{73dcbd61-e506-4fc1-9ecd-31be2b6d6031}\&quot;     },     \&quot;links\&quot;: {       \&quot;self\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;       },       \&quot;comments\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/comments\&quot;       },       \&quot;patch\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/patch/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;       },       \&quot;html\&quot;: {         \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/commits/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;       },       \&quot;diff\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/diff/f1a0933ce59e809f190602655e22ae6ec107c397\&quot;       },       \&quot;approve\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/approve\&quot;       },       \&quot;statuses\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/statuses\&quot;       }     },     \&quot;author\&quot;: {       \&quot;raw\&quot;: \&quot;Martin von Zweigbergk &lt;martinvonz@google.com&gt;\&quot;,       \&quot;type\&quot;: \&quot;author\&quot;,       \&quot;user\&quot;: {         \&quot;username\&quot;: \&quot;martinvonz\&quot;,         \&quot;nickname\&quot;: \&quot;martinvonz\&quot;,         \&quot;display_name\&quot;: \&quot;Martin von Zweigbergk\&quot;,         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;uuid\&quot;: \&quot;{fdb0e657-3ade-4fad-a136-95f1ffe4a5ac}\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/martinvonz\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/martinvonz/\&quot;           },           \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/account/martinvonz/avatar/32/\&quot;           }         }       }     },     \&quot;parents\&quot;: [       {         \&quot;hash\&quot;: \&quot;5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\&quot;,         \&quot;type\&quot;: \&quot;commit\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/mercurial/commits/5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\&quot;           }         }       }     ],     \&quot;date\&quot;: \&quot;2018-02-01T18:44:49+00:00\&quot;,     \&quot;message\&quot;: \&quot;config: replace a for-else by any()\&quot;,     \&quot;type\&quot;: \&quot;commit\&quot;   } } &#x60;&#x60;&#x60;  This call requires authentication. Private repositories require the caller to authenticate with an account that has appropriate authorization.  For Git, the branch name should not include any prefixes (e.g. refs/heads).  For Mercurial, the response will include an additional field that lists the open heads.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.RefsApi();
let name = "name_example"; // String | The name of the branch.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugRefsBranchesNameGet(name, workspace, repoSlug, (error, data, response) => {
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
 **name** | **String**| The name of the branch. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Branch**](Branch.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugRefsBranchesPost

> Branch repositoriesWorkspaceRepoSlugRefsBranchesPost(workspace, repoSlug)



Creates a new branch in the specified repository.  The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.  &#x60;&#x60;&#x60; curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \\ -s -u seanfarley -X POST -H \&quot;Content-Type: application/json\&quot; \\ -d &#39;{     \&quot;name\&quot; : \&quot;smf/create-feature\&quot;,     \&quot;target\&quot; : {         \&quot;hash\&quot; : \&quot;default\&quot;,     } }&#39; &#x60;&#x60;&#x60;  This call requires authentication. Private repositories require the caller to authenticate with an account that has appropriate authorization.  For Git, the branch name should not include any prefixes (e.g. refs/heads). This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach.  For Mercurial, the authenticated user making this call is the author of the new branch commit and the date is current datetime of the call.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.RefsApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugRefsBranchesPost(workspace, repoSlug, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Branch**](Branch.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugRefsGet

> PaginatedRefs repositoriesWorkspaceRepoSlugRefsGet(workspace, username, repoSlug, opts)



Returns the branches and tags in the repository.  By default, results will be in the order the underlying source control system returns them and identical to the ordering one sees when running \&quot;$ git show-ref\&quot;. Note that this follows simple lexical ordering of the ref names.  This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are sorted [\&quot;branch1\&quot;, \&quot;branch10\&quot;, \&quot;branch2\&quot;, \&quot;v10\&quot;, \&quot;v11\&quot;, \&quot;v9\&quot;] instead of [\&quot;branch1\&quot;, \&quot;branch2\&quot;, \&quot;branch10\&quot;, \&quot;v9\&quot;, \&quot;v10\&quot;, \&quot;v11\&quot;].  Sorting can be changed using the ?sort&#x3D; query parameter. When using ?sort&#x3D;name to explicitly sort on ref name, Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.RefsApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let username = "username_example"; // String |  This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String |  This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'q': "q_example", // String |  Query string to narrow down the response as per [filtering and sorting](../../../../meta/filtering).
  'sort': "sort_example" // String |  Field by which the results should be sorted as per [filtering and sorting](../../../../meta/filtering). The `name` field is handled specially for refs in that, if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
};
apiInstance.repositoriesWorkspaceRepoSlugRefsGet(workspace, username, repoSlug, opts, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **username** | **String**|  This can either be the username or the UUID of the user, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**|  This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **q** | **String**|  Query string to narrow down the response as per [filtering and sorting](../../../../meta/filtering). | [optional] 
 **sort** | **String**|  Field by which the results should be sorted as per [filtering and sorting](../../../../meta/filtering). The &#x60;name&#x60; field is handled specially for refs in that, if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort order. For example, it will return [&#39;1.1&#39;, &#39;1.2&#39;, &#39;1.10&#39;] instead of [&#39;1.1&#39;, &#39;1.10&#39;, &#39;1.2&#39;]. | [optional] 

### Return type

[**PaginatedRefs**](PaginatedRefs.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugRefsTagsGet

> PaginatedTags repositoriesWorkspaceRepoSlugRefsTagsGet(workspace, username, repoSlug, opts)



Returns the tags in the repository.  By default, results will be in the order the underlying source control system returns them and identical to the ordering one sees when running \&quot;$ hg tags\&quot; or \&quot;$ git tag --list\&quot;. Note that this follows simple lexical ordering of the ref names.  This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are sorted [\&quot;v10\&quot;, \&quot;v11\&quot;, \&quot;v9\&quot;] instead of [\&quot;v9\&quot;, \&quot;v10\&quot;, \&quot;v11\&quot;].  Sorting can be changed using the ?sort&#x3D; query parameter. When using ?sort&#x3D;name to explicitly sort on ref name, Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.RefsApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let username = "username_example"; // String |  This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String |  This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'q': "q_example", // String |  Query string to narrow down the response as per [filtering and sorting](../../../../../meta/filtering).
  'sort': "sort_example" // String |  Field by which the results should be sorted as per [filtering and sorting](../../../../../meta/filtering). The `name` field is handled specially for tags in that, if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
};
apiInstance.repositoriesWorkspaceRepoSlugRefsTagsGet(workspace, username, repoSlug, opts, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **username** | **String**|  This can either be the username or the UUID of the user, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**|  This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **q** | **String**|  Query string to narrow down the response as per [filtering and sorting](../../../../../meta/filtering). | [optional] 
 **sort** | **String**|  Field by which the results should be sorted as per [filtering and sorting](../../../../../meta/filtering). The &#x60;name&#x60; field is handled specially for tags in that, if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort order. For example, it will return [&#39;1.1&#39;, &#39;1.2&#39;, &#39;1.10&#39;] instead of [&#39;1.1&#39;, &#39;1.10&#39;, &#39;1.2&#39;]. | [optional] 

### Return type

[**PaginatedTags**](PaginatedTags.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugRefsTagsNameDelete

> repositoriesWorkspaceRepoSlugRefsTagsNameDelete(name, workspace, repoSlug)



Delete a tag in the specified repository.  For Git, the tag name should not include any prefixes (e.g. refs/tags). For Mercurial, this adds a commit to the main branch that removes the specified tag.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.RefsApi();
let name = "name_example"; // String | The name of the tag.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugRefsTagsNameDelete(name, workspace, repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the tag. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugRefsTagsNameGet

> Tag repositoriesWorkspaceRepoSlugRefsTagsNameGet(name, workspace, repoSlug)



Returns the specified tag.  &#x60;&#x60;&#x60; $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq . {   \&quot;name\&quot;: \&quot;3.8\&quot;,   \&quot;links\&quot;: {     \&quot;commits\&quot;: {       \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8\&quot;     },     \&quot;self\&quot;: {       \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8\&quot;     },     \&quot;html\&quot;: {       \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/hg/commits/tag/3.8\&quot;     }   },   \&quot;tagger\&quot;: {     \&quot;raw\&quot;: \&quot;Matt Mackall &lt;mpm@selenic.com&gt;\&quot;,     \&quot;type\&quot;: \&quot;author\&quot;,     \&quot;user\&quot;: {       \&quot;username\&quot;: \&quot;mpmselenic\&quot;,       \&quot;nickname\&quot;: \&quot;mpmselenic\&quot;,       \&quot;display_name\&quot;: \&quot;Matt Mackall\&quot;,       \&quot;type\&quot;: \&quot;user\&quot;,       \&quot;uuid\&quot;: \&quot;{a4934530-db4c-419c-a478-9ab4964c2ee7}\&quot;,       \&quot;links\&quot;: {         \&quot;self\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/mpmselenic\&quot;         },         \&quot;html\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/mpmselenic/\&quot;         },         \&quot;avatar\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/account/mpmselenic/avatar/32/\&quot;         }       }     }   },   \&quot;date\&quot;: \&quot;2016-05-01T18:52:25+00:00\&quot;,   \&quot;message\&quot;: \&quot;Added tag 3.8 for changeset f85de28eae32\&quot;,   \&quot;type\&quot;: \&quot;tag\&quot;,   \&quot;target\&quot;: {     \&quot;hash\&quot;: \&quot;f85de28eae32e7d3064b1a1321309071bbaaa069\&quot;,     \&quot;repository\&quot;: {       \&quot;links\&quot;: {         \&quot;self\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg\&quot;         },         \&quot;html\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/hg\&quot;         },         \&quot;avatar\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/hg/avatar/32/\&quot;         }       },       \&quot;type\&quot;: \&quot;repository\&quot;,       \&quot;name\&quot;: \&quot;hg\&quot;,       \&quot;full_name\&quot;: \&quot;seanfarley/hg\&quot;,       \&quot;uuid\&quot;: \&quot;{c75687fb-e99d-4579-9087-190dbd406d30}\&quot;     },     \&quot;links\&quot;: {       \&quot;self\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069\&quot;       },       \&quot;comments\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments\&quot;       },       \&quot;patch\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069\&quot;       },       \&quot;html\&quot;: {         \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069\&quot;       },       \&quot;diff\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069\&quot;       },       \&quot;approve\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve\&quot;       },       \&quot;statuses\&quot;: {         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses\&quot;       }     },     \&quot;author\&quot;: {       \&quot;raw\&quot;: \&quot;Sean Farley &lt;sean@farley.io&gt;\&quot;,       \&quot;type\&quot;: \&quot;author\&quot;,       \&quot;user\&quot;: {         \&quot;username\&quot;: \&quot;seanfarley\&quot;,         \&quot;nickname\&quot;: \&quot;seanfarley\&quot;,         \&quot;display_name\&quot;: \&quot;Sean Farley\&quot;,         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;uuid\&quot;: \&quot;{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/seanfarley\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/\&quot;           },           \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/account/seanfarley/avatar/32/\&quot;           }         }       }     },     \&quot;parents\&quot;: [       {         \&quot;hash\&quot;: \&quot;9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2\&quot;,         \&quot;type\&quot;: \&quot;commit\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2\&quot;           }         }       }     ],     \&quot;date\&quot;: \&quot;2016-05-01T04:21:17+00:00\&quot;,     \&quot;message\&quot;: \&quot;debian: alphabetize build deps\&quot;,     \&quot;type\&quot;: \&quot;commit\&quot;   } } &#x60;&#x60;&#x60;

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.RefsApi();
let name = "name_example"; // String | The name of the tag.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugRefsTagsNameGet(name, workspace, repoSlug, (error, data, response) => {
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
 **name** | **String**| The name of the tag. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Tag**](Tag.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugRefsTagsPost

> Tag repositoriesWorkspaceRepoSlugRefsTagsPost(workspace, repoSlug, body)



Creates a new tag in the specified repository.  The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.  &#x60;&#x60;&#x60; curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \\ -s -u jdoe -X POST -H \&quot;Content-Type: application/json\&quot; \\ -d &#39;{     \&quot;name\&quot; : \&quot;new-tag-name\&quot;,     \&quot;target\&quot; : {         \&quot;hash\&quot; : \&quot;a1b2c3d4e5f6\&quot;,     } }&#39; &#x60;&#x60;&#x60;  This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.RefsApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let body = new Bitbucket.Tag(); // Tag | 
apiInstance.repositoriesWorkspaceRepoSlugRefsTagsPost(workspace, repoSlug, body, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **body** | [**Tag**](Tag.md)|  | 

### Return type

[**Tag**](Tag.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

