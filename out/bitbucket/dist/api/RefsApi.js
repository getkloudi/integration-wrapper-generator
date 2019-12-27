"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Branch = _interopRequireDefault(require("../model/Branch"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedBranches = _interopRequireDefault(require("../model/PaginatedBranches"));

var _PaginatedRefs = _interopRequireDefault(require("../model/PaginatedRefs"));

var _PaginatedTags = _interopRequireDefault(require("../model/PaginatedTags"));

var _Tag = _interopRequireDefault(require("../model/Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Refs service.
* @module api/RefsApi
* @version 1.1.2
*/
var RefsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new RefsApi. 
  * @alias module:api/RefsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RefsApi(apiClient) {
    _classCallCheck(this, RefsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesWorkspaceRepoSlugRefsBranchesGet operation.
   * @callback module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsBranchesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedBranches} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of all open branches within the specified repository. Results will be in the order the source control manager returns them.  ``` $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches | jq . {   \"pagelen\": 10,   \"values\": [     {       \"heads\": [         {           \"hash\": \"f1a0933ce59e809f190602655e22ae6ec107c397\",           \"type\": \"commit\",           \"links\": {             \"self\": {               \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397\"             },             \"html\": {               \"href\": \"https://bitbucket.org/seanfarley/mercurial/commits/f1a0933ce59e809f190602655e22ae6ec107c397\"             }           }         }       ],       \"type\": \"named_branch\",       \"name\": \"default\",       \"links\": {         \"commits\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commits/default\"         },         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches/default\"         },         \"html\": {           \"href\": \"https://bitbucket.org/seanfarley/mercurial/branch/default\"         }       },       \"target\": {         \"hash\": \"f1a0933ce59e809f190602655e22ae6ec107c397\",         \"repository\": {           \"links\": {             \"self\": {               \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial\"             },             \"html\": {               \"href\": \"https://bitbucket.org/seanfarley/mercurial\"             },             \"avatar\": {               \"href\": \"https://bitbucket.org/seanfarley/mercurial/avatar/32/\"             }           },           \"type\": \"repository\",           \"name\": \"mercurial\",           \"full_name\": \"seanfarley/mercurial\",           \"uuid\": \"{73dcbd61-e506-4fc1-9ecd-31be2b6d6031}\"         },         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397\"           },           \"comments\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/comments\"           },           \"patch\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/patch/f1a0933ce59e809f190602655e22ae6ec107c397\"           },           \"html\": {             \"href\": \"https://bitbucket.org/seanfarley/mercurial/commits/f1a0933ce59e809f190602655e22ae6ec107c397\"           },           \"diff\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/diff/f1a0933ce59e809f190602655e22ae6ec107c397\"           },           \"approve\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/approve\"           },           \"statuses\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/statuses\"           }         },         \"author\": {           \"raw\": \"Martin von Zweigbergk <martinvonz@google.com>\",           \"type\": \"author\",           \"user\": {             \"username\": \"martinvonz\",             \"nickname\": \"martinvonz\",             \"display_name\": \"Martin von Zweigbergk\",             \"type\": \"user\",             \"uuid\": \"{fdb0e657-3ade-4fad-a136-95f1ffe4a5ac}\",             \"links\": {               \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/users/martinvonz\"               },               \"html\": {                 \"href\": \"https://bitbucket.org/martinvonz/\"               },               \"avatar\": {                 \"href\": \"https://bitbucket.org/account/martinvonz/avatar/32/\"               }             }           }         },         \"parents\": [           {             \"hash\": \"5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\",             \"type\": \"commit\",             \"links\": {               \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\"               },               \"html\": {                 \"href\": \"https://bitbucket.org/seanfarley/mercurial/commits/5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\"               }             }           }         ],         \"date\": \"2018-02-01T18:44:49+00:00\",         \"message\": \"config: replace a for-else by any()\",         \"type\": \"commit\"       }     },     {       \"heads\": [         {           \"hash\": \"1d60ad093792706e1dc7a52b20942593f2c19655\",           \"type\": \"commit\",           \"links\": {             \"self\": {               \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655\"             },             \"html\": {               \"href\": \"https://bitbucket.org/seanfarley/mercurial/commits/1d60ad093792706e1dc7a52b20942593f2c19655\"             }           }         }       ],       \"type\": \"named_branch\",       \"name\": \"stable\",       \"links\": {         \"commits\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commits/stable\"         },         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches/stable\"         },         \"html\": {           \"href\": \"https://bitbucket.org/seanfarley/mercurial/branch/stable\"         }       },       \"target\": {         \"hash\": \"1d60ad093792706e1dc7a52b20942593f2c19655\",         \"repository\": {           \"links\": {             \"self\": {               \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial\"             },             \"html\": {               \"href\": \"https://bitbucket.org/seanfarley/mercurial\"             },             \"avatar\": {               \"href\": \"https://bitbucket.org/seanfarley/mercurial/avatar/32/\"             }           },           \"type\": \"repository\",           \"name\": \"mercurial\",           \"full_name\": \"seanfarley/mercurial\",           \"uuid\": \"{73dcbd61-e506-4fc1-9ecd-31be2b6d6031}\"         },         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655\"           },           \"comments\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655/comments\"           },           \"patch\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/patch/1d60ad093792706e1dc7a52b20942593f2c19655\"           },           \"html\": {             \"href\": \"https://bitbucket.org/seanfarley/mercurial/commits/1d60ad093792706e1dc7a52b20942593f2c19655\"           },           \"diff\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/diff/1d60ad093792706e1dc7a52b20942593f2c19655\"           },           \"approve\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655/approve\"           },           \"statuses\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/1d60ad093792706e1dc7a52b20942593f2c19655/statuses\"           }         },         \"author\": {           \"raw\": \"Augie Fackler <raf@durin42.com>\",           \"type\": \"author\",           \"user\": {             \"username\": \"durin42\",             \"nickname\": \"durin42\",             \"display_name\": \"Augie Fackler\",             \"type\": \"user\",             \"uuid\": \"{e07dc61f-bb05-4218-b43a-d991f26be65a}\",             \"links\": {               \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/users/durin42\"               },               \"html\": {                 \"href\": \"https://bitbucket.org/durin42/\"               },               \"avatar\": {                 \"href\": \"https://bitbucket.org/account/durin42/avatar/32/\"               }             }           }         },         \"parents\": [           {             \"hash\": \"56a0da11bde519d79168e890df4bcf0da62f0a7b\",             \"type\": \"commit\",             \"links\": {               \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/56a0da11bde519d79168e890df4bcf0da62f0a7b\"               },               \"html\": {                 \"href\": \"https://bitbucket.org/seanfarley/mercurial/commits/56a0da11bde519d79168e890df4bcf0da62f0a7b\"               }             }           }         ],         \"date\": \"2018-02-01T19:13:41+00:00\",         \"message\": \"Added signature for changeset d334afc585e2\",         \"type\": \"commit\"       }     }   ],   \"page\": 1,   \"size\": 2 } ```  Branches support [filtering and sorting](../../../../../meta/filtering) that can be used to search for specific branches. For instance, to find all branches that have \"stab\" in their name:  ``` curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches -G --data-urlencode 'q=name ~ \"stab\"' ```  By default, results will be in the order the underlying source control system returns them and identical to the ordering one sees when running \"$ hg branches\" or \"$ git branch --list\". Note that this follows simple lexical ordering of the ref names.  This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are sorted [\"v10\", \"v11\", \"v9\"] instead of [\"v9\", \"v10\", \"v11\"].  Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name, Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
   * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
   * @param {String} username  This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
   * @param {String} repoSlug  This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
   * @param {Object} opts Optional parameters
   * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../../../meta/filtering).
   * @param {String} opts.sort  Field by which the results should be sorted as per [filtering and sorting](../../../../../meta/filtering). The `name` field is handled specially for branches in that, if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort order. For example, it will return ['branch1', 'branch2', 'branch10'] instead of ['branch1', 'branch10', 'branch2'].
   * @param {module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsBranchesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedBranches}
   */


  _createClass(RefsApi, [{
    key: "repositoriesWorkspaceRepoSlugRefsBranchesGet",
    value: function repositoriesWorkspaceRepoSlugRefsBranchesGet(workspace, username, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugRefsBranchesGet");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesWorkspaceRepoSlugRefsBranchesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugRefsBranchesGet");
      }

      var pathParams = {
        'workspace': workspace,
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedBranches["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/refs/branches', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugRefsBranchesNameDelete operation.
     * @callback module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsBranchesNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a branch in the specified repository.  The main branch is not allowed to be deleted and will return a 400 response.  For Git, the branch name should not include any prefixes (e.g. refs/heads). For Mercurial, this closes all open heads on the branch, sets the author of the commit to the authenticated caller, and changes the date to the datetime of the call.
     * @param {String} name The name of the branch.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsBranchesNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugRefsBranchesNameDelete",
    value: function repositoriesWorkspaceRepoSlugRefsBranchesNameDelete(name, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new _Error["default"]("Missing the required parameter 'name' when calling repositoriesWorkspaceRepoSlugRefsBranchesNameDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugRefsBranchesNameDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugRefsBranchesNameDelete");
      }

      var pathParams = {
        'name': name,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/refs/branches/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugRefsBranchesNameGet operation.
     * @callback module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsBranchesNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Branch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a branch object within the specified repository.  ``` $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches/default | jq . {   \"heads\": [     {       \"hash\": \"f1a0933ce59e809f190602655e22ae6ec107c397\",       \"type\": \"commit\",       \"links\": {         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397\"         },         \"html\": {           \"href\": \"https://bitbucket.org/seanfarley/mercurial/commits/f1a0933ce59e809f190602655e22ae6ec107c397\"         }       }     }   ],   \"type\": \"named_branch\",   \"name\": \"default\",   \"links\": {     \"commits\": {       \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commits/default\"     },     \"self\": {       \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/refs/branches/default\"     },     \"html\": {       \"href\": \"https://bitbucket.org/seanfarley/mercurial/branch/default\"     }   },   \"target\": {     \"hash\": \"f1a0933ce59e809f190602655e22ae6ec107c397\",     \"repository\": {       \"links\": {         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial\"         },         \"html\": {           \"href\": \"https://bitbucket.org/seanfarley/mercurial\"         },         \"avatar\": {           \"href\": \"https://bitbucket.org/seanfarley/mercurial/avatar/32/\"         }       },       \"type\": \"repository\",       \"name\": \"mercurial\",       \"full_name\": \"seanfarley/mercurial\",       \"uuid\": \"{73dcbd61-e506-4fc1-9ecd-31be2b6d6031}\"     },     \"links\": {       \"self\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397\"       },       \"comments\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/comments\"       },       \"patch\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/patch/f1a0933ce59e809f190602655e22ae6ec107c397\"       },       \"html\": {         \"href\": \"https://bitbucket.org/seanfarley/mercurial/commits/f1a0933ce59e809f190602655e22ae6ec107c397\"       },       \"diff\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/diff/f1a0933ce59e809f190602655e22ae6ec107c397\"       },       \"approve\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/approve\"       },       \"statuses\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/f1a0933ce59e809f190602655e22ae6ec107c397/statuses\"       }     },     \"author\": {       \"raw\": \"Martin von Zweigbergk <martinvonz@google.com>\",       \"type\": \"author\",       \"user\": {         \"username\": \"martinvonz\",         \"nickname\": \"martinvonz\",         \"display_name\": \"Martin von Zweigbergk\",         \"type\": \"user\",         \"uuid\": \"{fdb0e657-3ade-4fad-a136-95f1ffe4a5ac}\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/users/martinvonz\"           },           \"html\": {             \"href\": \"https://bitbucket.org/martinvonz/\"           },           \"avatar\": {             \"href\": \"https://bitbucket.org/account/martinvonz/avatar/32/\"           }         }       }     },     \"parents\": [       {         \"hash\": \"5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\",         \"type\": \"commit\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/mercurial/commit/5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\"           },           \"html\": {             \"href\": \"https://bitbucket.org/seanfarley/mercurial/commits/5523aabb85c30ebc2b8e29aadcaf5e13fa92b375\"           }         }       }     ],     \"date\": \"2018-02-01T18:44:49+00:00\",     \"message\": \"config: replace a for-else by any()\",     \"type\": \"commit\"   } } ```  This call requires authentication. Private repositories require the caller to authenticate with an account that has appropriate authorization.  For Git, the branch name should not include any prefixes (e.g. refs/heads).  For Mercurial, the response will include an additional field that lists the open heads.
     * @param {String} name The name of the branch.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsBranchesNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Branch}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugRefsBranchesNameGet",
    value: function repositoriesWorkspaceRepoSlugRefsBranchesNameGet(name, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new _Error["default"]("Missing the required parameter 'name' when calling repositoriesWorkspaceRepoSlugRefsBranchesNameGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugRefsBranchesNameGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugRefsBranchesNameGet");
      }

      var pathParams = {
        'name': name,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Branch["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/refs/branches/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugRefsBranchesPost operation.
     * @callback module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsBranchesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Branch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new branch in the specified repository.  The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.  ``` curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \\ -s -u seanfarley -X POST -H \"Content-Type: application/json\" \\ -d '{     \"name\" : \"smf/create-feature\",     \"target\" : {         \"hash\" : \"default\",     } }' ```  This call requires authentication. Private repositories require the caller to authenticate with an account that has appropriate authorization.  For Git, the branch name should not include any prefixes (e.g. refs/heads). This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach.  For Mercurial, the authenticated user making this call is the author of the new branch commit and the date is current datetime of the call.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsBranchesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Branch}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugRefsBranchesPost",
    value: function repositoriesWorkspaceRepoSlugRefsBranchesPost(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugRefsBranchesPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugRefsBranchesPost");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Branch["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/refs/branches', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugRefsGet operation.
     * @callback module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedRefs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the branches and tags in the repository.  By default, results will be in the order the underlying source control system returns them and identical to the ordering one sees when running \"$ git show-ref\". Note that this follows simple lexical ordering of the ref names.  This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are sorted [\"branch1\", \"branch10\", \"branch2\", \"v10\", \"v11\", \"v9\"] instead of [\"branch1\", \"branch2\", \"branch10\", \"v9\", \"v10\", \"v11\"].  Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name, Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} username  This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug  This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../../meta/filtering).
     * @param {String} opts.sort  Field by which the results should be sorted as per [filtering and sorting](../../../../meta/filtering). The `name` field is handled specially for refs in that, if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
     * @param {module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedRefs}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugRefsGet",
    value: function repositoriesWorkspaceRepoSlugRefsGet(workspace, username, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugRefsGet");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesWorkspaceRepoSlugRefsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugRefsGet");
      }

      var pathParams = {
        'workspace': workspace,
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedRefs["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/refs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugRefsTagsGet operation.
     * @callback module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsTagsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTags} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the tags in the repository.  By default, results will be in the order the underlying source control system returns them and identical to the ordering one sees when running \"$ hg tags\" or \"$ git tag --list\". Note that this follows simple lexical ordering of the ref names.  This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are sorted [\"v10\", \"v11\", \"v9\"] instead of [\"v9\", \"v10\", \"v11\"].  Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name, Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} username  This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug  This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../../../meta/filtering).
     * @param {String} opts.sort  Field by which the results should be sorted as per [filtering and sorting](../../../../../meta/filtering). The `name` field is handled specially for tags in that, if specified as the sort field, it uses a natural sort order instead of the default lexicographical sort order. For example, it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
     * @param {module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsTagsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTags}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugRefsTagsGet",
    value: function repositoriesWorkspaceRepoSlugRefsTagsGet(workspace, username, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugRefsTagsGet");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesWorkspaceRepoSlugRefsTagsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugRefsTagsGet");
      }

      var pathParams = {
        'workspace': workspace,
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedTags["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/refs/tags', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugRefsTagsNameDelete operation.
     * @callback module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsTagsNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag in the specified repository.  For Git, the tag name should not include any prefixes (e.g. refs/tags). For Mercurial, this adds a commit to the main branch that removes the specified tag.
     * @param {String} name The name of the tag.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsTagsNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugRefsTagsNameDelete",
    value: function repositoriesWorkspaceRepoSlugRefsTagsNameDelete(name, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new _Error["default"]("Missing the required parameter 'name' when calling repositoriesWorkspaceRepoSlugRefsTagsNameDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugRefsTagsNameDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugRefsTagsNameDelete");
      }

      var pathParams = {
        'name': name,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/refs/tags/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugRefsTagsNameGet operation.
     * @callback module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsTagsNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified tag.  ``` $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq . {   \"name\": \"3.8\",   \"links\": {     \"commits\": {       \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8\"     },     \"self\": {       \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8\"     },     \"html\": {       \"href\": \"https://bitbucket.org/seanfarley/hg/commits/tag/3.8\"     }   },   \"tagger\": {     \"raw\": \"Matt Mackall <mpm@selenic.com>\",     \"type\": \"author\",     \"user\": {       \"username\": \"mpmselenic\",       \"nickname\": \"mpmselenic\",       \"display_name\": \"Matt Mackall\",       \"type\": \"user\",       \"uuid\": \"{a4934530-db4c-419c-a478-9ab4964c2ee7}\",       \"links\": {         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/users/mpmselenic\"         },         \"html\": {           \"href\": \"https://bitbucket.org/mpmselenic/\"         },         \"avatar\": {           \"href\": \"https://bitbucket.org/account/mpmselenic/avatar/32/\"         }       }     }   },   \"date\": \"2016-05-01T18:52:25+00:00\",   \"message\": \"Added tag 3.8 for changeset f85de28eae32\",   \"type\": \"tag\",   \"target\": {     \"hash\": \"f85de28eae32e7d3064b1a1321309071bbaaa069\",     \"repository\": {       \"links\": {         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg\"         },         \"html\": {           \"href\": \"https://bitbucket.org/seanfarley/hg\"         },         \"avatar\": {           \"href\": \"https://bitbucket.org/seanfarley/hg/avatar/32/\"         }       },       \"type\": \"repository\",       \"name\": \"hg\",       \"full_name\": \"seanfarley/hg\",       \"uuid\": \"{c75687fb-e99d-4579-9087-190dbd406d30}\"     },     \"links\": {       \"self\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069\"       },       \"comments\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments\"       },       \"patch\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069\"       },       \"html\": {         \"href\": \"https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069\"       },       \"diff\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069\"       },       \"approve\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve\"       },       \"statuses\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses\"       }     },     \"author\": {       \"raw\": \"Sean Farley <sean@farley.io>\",       \"type\": \"author\",       \"user\": {         \"username\": \"seanfarley\",         \"nickname\": \"seanfarley\",         \"display_name\": \"Sean Farley\",         \"type\": \"user\",         \"uuid\": \"{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/users/seanfarley\"           },           \"html\": {             \"href\": \"https://bitbucket.org/seanfarley/\"           },           \"avatar\": {             \"href\": \"https://bitbucket.org/account/seanfarley/avatar/32/\"           }         }       }     },     \"parents\": [       {         \"hash\": \"9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2\",         \"type\": \"commit\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2\"           },           \"html\": {             \"href\": \"https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2\"           }         }       }     ],     \"date\": \"2016-05-01T04:21:17+00:00\",     \"message\": \"debian: alphabetize build deps\",     \"type\": \"commit\"   } } ```
     * @param {String} name The name of the tag.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsTagsNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugRefsTagsNameGet",
    value: function repositoriesWorkspaceRepoSlugRefsTagsNameGet(name, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new _Error["default"]("Missing the required parameter 'name' when calling repositoriesWorkspaceRepoSlugRefsTagsNameGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugRefsTagsNameGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugRefsTagsNameGet");
      }

      var pathParams = {
        'name': name,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Tag["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/refs/tags/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugRefsTagsPost operation.
     * @callback module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsTagsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new tag in the specified repository.  The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.  ``` curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \\ -s -u jdoe -X POST -H \"Content-Type: application/json\" \\ -d '{     \"name\" : \"new-tag-name\",     \"target\" : {         \"hash\" : \"a1b2c3d4e5f6\",     } }' ```  This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:model/Tag} body 
     * @param {module:api/RefsApi~repositoriesWorkspaceRepoSlugRefsTagsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugRefsTagsPost",
    value: function repositoriesWorkspaceRepoSlugRefsTagsPost(workspace, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugRefsTagsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugRefsTagsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugRefsTagsPost");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Tag["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/refs/tags', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RefsApi;
}();

exports["default"] = RefsApi;