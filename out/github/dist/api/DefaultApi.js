"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _ApiClient=_interopRequireDefault(require("../ApiClient"));var _Asset=_interopRequireDefault(require("../model/Asset"));var _AssetPatch=_interopRequireDefault(require("../model/AssetPatch"));var _Blobs=_interopRequireDefault(require("../model/Blobs"));var _Branch=_interopRequireDefault(require("../model/Branch"));var _Comment=_interopRequireDefault(require("../model/Comment"));var _CommentBody=_interopRequireDefault(require("../model/CommentBody"));var _Commit=_interopRequireDefault(require("../model/Commit"));var _CommitComment=_interopRequireDefault(require("../model/CommitComment"));var _CommitCommentBody=_interopRequireDefault(require("../model/CommitCommentBody"));var _CompareCommits=_interopRequireDefault(require("../model/CompareCommits"));var _ContentsPath=_interopRequireDefault(require("../model/ContentsPath"));var _CreateFile=_interopRequireDefault(require("../model/CreateFile"));var _CreateFileBody=_interopRequireDefault(require("../model/CreateFileBody"));var _DeleteFile=_interopRequireDefault(require("../model/DeleteFile"));var _DeleteFileBody=_interopRequireDefault(require("../model/DeleteFileBody"));var _Deployment=_interopRequireDefault(require("../model/Deployment"));var _DeploymentResp=_interopRequireDefault(require("../model/DeploymentResp"));var _DeploymentStatusesCreate=_interopRequireDefault(require("../model/DeploymentStatusesCreate"));var _Download=_interopRequireDefault(require("../model/Download"));var _EditTeam=_interopRequireDefault(require("../model/EditTeam"));var _Event=_interopRequireDefault(require("../model/Event"));var _Feeds=_interopRequireDefault(require("../model/Feeds"));var _ForkBody=_interopRequireDefault(require("../model/ForkBody"));var _Gist=_interopRequireDefault(require("../model/Gist"));var _GitCommit=_interopRequireDefault(require("../model/GitCommit"));var _GitRefPatch=_interopRequireDefault(require("../model/GitRefPatch"));var _GitignoreLang=_interopRequireDefault(require("../model/GitignoreLang"));var _HeadBranch=_interopRequireDefault(require("../model/HeadBranch"));var _HookBody=_interopRequireDefault(require("../model/HookBody"));var _Issue=_interopRequireDefault(require("../model/Issue"));var _IssueEvent=_interopRequireDefault(require("../model/IssueEvent"));var _IssuesComment=_interopRequireDefault(require("../model/IssuesComment"));var _Label=_interopRequireDefault(require("../model/Label"));var _Markdown=_interopRequireDefault(require("../model/Markdown"));var _Merge=_interopRequireDefault(require("../model/Merge"));var _MergePullBody=_interopRequireDefault(require("../model/MergePullBody"));var _MergesBody=_interopRequireDefault(require("../model/MergesBody"));var _MergesConflict=_interopRequireDefault(require("../model/MergesConflict"));var _MergesSuccessful=_interopRequireDefault(require("../model/MergesSuccessful"));var _Meta=_interopRequireDefault(require("../model/Meta"));var _Milestone=_interopRequireDefault(require("../model/Milestone"));var _MilestoneUpdate=_interopRequireDefault(require("../model/MilestoneUpdate"));var _NotificationMarkRead=_interopRequireDefault(require("../model/NotificationMarkRead"));var _Notifications=_interopRequireDefault(require("../model/Notifications"));var _OrgTeamsPost=_interopRequireDefault(require("../model/OrgTeamsPost"));var _Organization=_interopRequireDefault(require("../model/Organization"));var _OrganizationAsTeamMember=_interopRequireDefault(require("../model/OrganizationAsTeamMember"));var _ParticipationStats=_interopRequireDefault(require("../model/ParticipationStats"));var _PatchGist=_interopRequireDefault(require("../model/PatchGist"));var _PatchOrg=_interopRequireDefault(require("../model/PatchOrg"));var _PostGist=_interopRequireDefault(require("../model/PostGist"));var _PostRepo=_interopRequireDefault(require("../model/PostRepo"));var _PullRequest=_interopRequireDefault(require("../model/PullRequest"));var _PullUpdate=_interopRequireDefault(require("../model/PullUpdate"));var _PullsComment=_interopRequireDefault(require("../model/PullsComment"));var _PullsCommentPost=_interopRequireDefault(require("../model/PullsCommentPost"));var _PullsPost=_interopRequireDefault(require("../model/PullsPost"));var _PutSubscription=_interopRequireDefault(require("../model/PutSubscription"));var _RateLimit=_interopRequireDefault(require("../model/RateLimit"));var _RefsBody=_interopRequireDefault(require("../model/RefsBody"));var _Release=_interopRequireDefault(require("../model/Release"));var _ReleaseCreate=_interopRequireDefault(require("../model/ReleaseCreate"));var _Repo=_interopRequireDefault(require("../model/Repo"));var _RepoCommit=_interopRequireDefault(require("../model/RepoCommit"));var _RepoCommitBody=_interopRequireDefault(require("../model/RepoCommitBody"));var _RepoEdit=_interopRequireDefault(require("../model/RepoEdit"));var _SearchCode=_interopRequireDefault(require("../model/SearchCode"));var _SearchIssues=_interopRequireDefault(require("../model/SearchIssues"));var _SearchIssuesByKeyword=_interopRequireDefault(require("../model/SearchIssuesByKeyword"));var _SearchRepositories=_interopRequireDefault(require("../model/SearchRepositories"));var _SearchRepositoriesByKeyword=_interopRequireDefault(require("../model/SearchRepositoriesByKeyword"));var _SearchUserByEmail=_interopRequireDefault(require("../model/SearchUserByEmail"));var _SearchUsers=_interopRequireDefault(require("../model/SearchUsers"));var _SearchUsersByKeyword=_interopRequireDefault(require("../model/SearchUsersByKeyword"));var _Subscription=_interopRequireDefault(require("../model/Subscription"));var _SubscriptionBody=_interopRequireDefault(require("../model/SubscriptionBody"));var _Tag=_interopRequireDefault(require("../model/Tag"));var _TagBody=_interopRequireDefault(require("../model/TagBody"));var _Team=_interopRequireDefault(require("../model/Team"));var _TeamMembership=_interopRequireDefault(require("../model/TeamMembership"));var _Tree=_interopRequireDefault(require("../model/Tree"));var _Trees=_interopRequireDefault(require("../model/Trees"));var _User=_interopRequireDefault(require("../model/User"));var _UserKeysKeyId=_interopRequireDefault(require("../model/UserKeysKeyId"));var _UserKeysPost=_interopRequireDefault(require("../model/UserKeysPost"));var _UserUpdate=_interopRequireDefault(require("../model/UserUpdate"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * Default service.
 * @module api/DefaultApi
 * @version 1.4.6
 */var DefaultApi=/*#__PURE__*/function(){/**
     * Constructs a new DefaultApi.
     * @alias module:api/DefaultApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */function DefaultApi(apiClient){_classCallCheck(this,DefaultApi);this.apiClient=apiClient||_ApiClient["default"].instance;}/**
     * Callback function to receive the result of the emojisGet operation.
     * @callback module:api/DefaultApi~emojisGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: String}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Lists all the emojis available to use on GitHub.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~emojisGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: String}>}
     */_createClass(DefaultApi,[{key:"emojisGet",value:function emojisGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType={String:'String'};return this.apiClient.callApi('/emojis','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the eventsGet operation.
     * @callback module:api/DefaultApi~eventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List public events.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~eventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */},{key:"eventsGet",value:function eventsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Event["default"]];return this.apiClient.callApi('/events','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the feedsGet operation.
     * @callback module:api/DefaultApi~feedsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Feeds} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List Feeds. GitHub provides several timeline resources in Atom format. The Feeds API  lists all the feeds available to the authenticating user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~feedsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Feeds}
     */},{key:"feedsGet",value:function feedsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Feeds["default"];return this.apiClient.callApi('/feeds','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsGet operation.
     * @callback module:api/DefaultApi~gistsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List the authenticated user's gists or if called anonymously, this will return all public gists.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {String} opts.since Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * @param {module:api/DefaultApi~gistsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"gistsGet",value:function gistsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/gists','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdCommentsCommentIdDelete operation.
     * @callback module:api/DefaultApi~gistsIdCommentsCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a comment.
     * @param {Number} id Id of gist.
     * @param {Number} commentId Id of comment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdCommentsCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"gistsIdCommentsCommentIdDelete",value:function gistsIdCommentsCommentIdDelete(id,commentId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdCommentsCommentIdDelete");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling gistsIdCommentsCommentIdDelete");}var pathParams={id:id,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/gists/{id}/comments/{commentId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdCommentsCommentIdGet operation.
     * @callback module:api/DefaultApi~gistsIdCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single comment.
     * @param {Number} id Id of gist.
     * @param {Number} commentId Id of comment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Comment}
     */},{key:"gistsIdCommentsCommentIdGet",value:function gistsIdCommentsCommentIdGet(id,commentId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdCommentsCommentIdGet");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling gistsIdCommentsCommentIdGet");}var pathParams={id:id,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Comment["default"];return this.apiClient.callApi('/gists/{id}/comments/{commentId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdCommentsCommentIdPatch operation.
     * @callback module:api/DefaultApi~gistsIdCommentsCommentIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit a comment.
     * @param {Number} id Id of gist.
     * @param {Number} commentId Id of comment.
     * @param {module:model/Comment} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdCommentsCommentIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Comment}
     */},{key:"gistsIdCommentsCommentIdPatch",value:function gistsIdCommentsCommentIdPatch(id,commentId,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdCommentsCommentIdPatch");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling gistsIdCommentsCommentIdPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling gistsIdCommentsCommentIdPatch");}var pathParams={id:id,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Comment["default"];return this.apiClient.callApi('/gists/{id}/comments/{commentId}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdCommentsGet operation.
     * @callback module:api/DefaultApi~gistsIdCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List comments on a gist.
     * @param {Number} id Id of gist.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~gistsIdCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"gistsIdCommentsGet",value:function gistsIdCommentsGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdCommentsGet");}var pathParams={id:id};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/gists/{id}/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdCommentsPost operation.
     * @callback module:api/DefaultApi~gistsIdCommentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a commen
     * @param {Number} id Id of gist.
     * @param {module:model/CommentBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdCommentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Comment}
     */},{key:"gistsIdCommentsPost",value:function gistsIdCommentsPost(id,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdCommentsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling gistsIdCommentsPost");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Comment["default"];return this.apiClient.callApi('/gists/{id}/comments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdDelete operation.
     * @callback module:api/DefaultApi~gistsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a gist.
     * @param {Number} id Id of gist.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"gistsIdDelete",value:function gistsIdDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdDelete");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/gists/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdForksPost operation.
     * @callback module:api/DefaultApi~gistsIdForksPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Fork a gist.
     * @param {Number} id Id of gist.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdForksPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"gistsIdForksPost",value:function gistsIdForksPost(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdForksPost");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/gists/{id}/forks','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdGet operation.
     * @callback module:api/DefaultApi~gistsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Gist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single gist.
     * @param {Number} id Id of gist.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Gist}
     */},{key:"gistsIdGet",value:function gistsIdGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdGet");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Gist["default"];return this.apiClient.callApi('/gists/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdPatch operation.
     * @callback module:api/DefaultApi~gistsIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Gist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit a gist.
     * @param {Number} id Id of gist.
     * @param {module:model/PatchGist} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Gist}
     */},{key:"gistsIdPatch",value:function gistsIdPatch(id,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling gistsIdPatch");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Gist["default"];return this.apiClient.callApi('/gists/{id}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdStarDelete operation.
     * @callback module:api/DefaultApi~gistsIdStarDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unstar a gist.
     * @param {Number} id Id of gist.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdStarDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"gistsIdStarDelete",value:function gistsIdStarDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdStarDelete");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/gists/{id}/star','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdStarGet operation.
     * @callback module:api/DefaultApi~gistsIdStarGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check if a gist is starred.
     * @param {Number} id Id of gist.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~gistsIdStarGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"gistsIdStarGet",value:function gistsIdStarGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdStarGet");}var pathParams={id:id};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/gists/{id}/star','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsIdStarPut operation.
     * @callback module:api/DefaultApi~gistsIdStarPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Star a gist.
     * @param {Number} id Id of gist.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsIdStarPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"gistsIdStarPut",value:function gistsIdStarPut(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling gistsIdStarPut");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/gists/{id}/star','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsPost operation.
     * @callback module:api/DefaultApi~gistsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Gist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a gist.
     * @param {module:model/PostGist} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~gistsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Gist}
     */},{key:"gistsPost",value:function gistsPost(body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling gistsPost");}var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Gist["default"];return this.apiClient.callApi('/gists','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsPublicGet operation.
     * @callback module:api/DefaultApi~gistsPublicGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List all public gists.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {String} opts.since Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * @param {module:api/DefaultApi~gistsPublicGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"gistsPublicGet",value:function gistsPublicGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/gists/public','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gistsStarredGet operation.
     * @callback module:api/DefaultApi~gistsStarredGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List the authenticated user's starred gists.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {String} opts.since Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * @param {module:api/DefaultApi~gistsStarredGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"gistsStarredGet",value:function gistsStarredGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/gists/starred','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gitignoreTemplatesGet operation.
     * @callback module:api/DefaultApi~gitignoreTemplatesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Listing available templates. List all templates available to pass as an option when creating a repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~gitignoreTemplatesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"gitignoreTemplatesGet",value:function gitignoreTemplatesGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/gitignore/templates','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the gitignoreTemplatesLanguageGet operation.
     * @callback module:api/DefaultApi~gitignoreTemplatesLanguageGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitignoreLang} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single template.
     * @param {String} language
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~gitignoreTemplatesLanguageGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitignoreLang}
     */},{key:"gitignoreTemplatesLanguageGet",value:function gitignoreTemplatesLanguageGet(language,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'language' is set
if(language===undefined||language===null){throw new Error("Missing the required parameter 'language' when calling gitignoreTemplatesLanguageGet");}var pathParams={language:language};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_GitignoreLang["default"];return this.apiClient.callApi('/gitignore/templates/{language}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuesGet operation.
     * @callback module:api/DefaultApi~issuesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List issues. List all issues across all the authenticated user's visible repositories.
     * @param {module:model/String} filter Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see
     * @param {module:model/String} state
     * @param {String} labels String list of comma separated Label names. Example - bug,ui,@high.
     * @param {module:model/String} sort
     * @param {module:model/String} direction
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {String} opts.since Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * @param {module:api/DefaultApi~issuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"issuesGet",value:function issuesGet(filter,state,labels,sort,direction,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'filter' is set
if(filter===undefined||filter===null){throw new Error("Missing the required parameter 'filter' when calling issuesGet");}// verify the required parameter 'state' is set
if(state===undefined||state===null){throw new Error("Missing the required parameter 'state' when calling issuesGet");}// verify the required parameter 'labels' is set
if(labels===undefined||labels===null){throw new Error("Missing the required parameter 'labels' when calling issuesGet");}// verify the required parameter 'sort' is set
if(sort===undefined||sort===null){throw new Error("Missing the required parameter 'sort' when calling issuesGet");}// verify the required parameter 'direction' is set
if(direction===undefined||direction===null){throw new Error("Missing the required parameter 'direction' when calling issuesGet");}var pathParams={};var queryParams={filter:filter,state:state,labels:labels,sort:sort,direction:direction,per_page:opts['perPage'],page:opts['page'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/issues','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the legacyIssuesSearchOwnerRepositoryStateKeywordGet operation.
     * @callback module:api/DefaultApi~legacyIssuesSearchOwnerRepositoryStateKeywordGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchIssuesByKeyword} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Find issues by state and keyword.
     * @param {String} keyword The search term.
     * @param {module:model/String} state Indicates the state of the issues to return. Can be either open or closed.
     * @param {String} owner
     * @param {String} repository
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~legacyIssuesSearchOwnerRepositoryStateKeywordGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchIssuesByKeyword}
     */},{key:"legacyIssuesSearchOwnerRepositoryStateKeywordGet",value:function legacyIssuesSearchOwnerRepositoryStateKeywordGet(keyword,state,owner,repository,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'keyword' is set
if(keyword===undefined||keyword===null){throw new Error("Missing the required parameter 'keyword' when calling legacyIssuesSearchOwnerRepositoryStateKeywordGet");}// verify the required parameter 'state' is set
if(state===undefined||state===null){throw new Error("Missing the required parameter 'state' when calling legacyIssuesSearchOwnerRepositoryStateKeywordGet");}// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling legacyIssuesSearchOwnerRepositoryStateKeywordGet");}// verify the required parameter 'repository' is set
if(repository===undefined||repository===null){throw new Error("Missing the required parameter 'repository' when calling legacyIssuesSearchOwnerRepositoryStateKeywordGet");}var pathParams={keyword:keyword,state:state,owner:owner,repository:repository};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_SearchIssuesByKeyword["default"];return this.apiClient.callApi('/legacy/issues/search/{owner}/{repository}/{state}/{keyword}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the legacyReposSearchKeywordGet operation.
     * @callback module:api/DefaultApi~legacyReposSearchKeywordGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchRepositoriesByKeyword} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.
     * @param {String} keyword The search term
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.order The sort field. if sort param is provided. Can be either asc or desc. (default to 'desc')
     * @param {String} opts.language Filter results by language
     * @param {String} opts.startPage The page number to fetch
     * @param {module:model/String} opts.sort The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~legacyReposSearchKeywordGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchRepositoriesByKeyword}
     */},{key:"legacyReposSearchKeywordGet",value:function legacyReposSearchKeywordGet(keyword,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'keyword' is set
if(keyword===undefined||keyword===null){throw new Error("Missing the required parameter 'keyword' when calling legacyReposSearchKeywordGet");}var pathParams={keyword:keyword};var queryParams={order:opts['order'],language:opts['language'],start_page:opts['startPage'],sort:opts['sort']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_SearchRepositoriesByKeyword["default"];return this.apiClient.callApi('/legacy/repos/search/{keyword}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the legacyUserEmailEmailGet operation.
     * @callback module:api/DefaultApi~legacyUserEmailEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchUserByEmail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * This API call is added for compatibility reasons only.
     * @param {String} email The email address
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~legacyUserEmailEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchUserByEmail}
     */},{key:"legacyUserEmailEmailGet",value:function legacyUserEmailEmailGet(email,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'email' is set
if(email===undefined||email===null){throw new Error("Missing the required parameter 'email' when calling legacyUserEmailEmailGet");}var pathParams={email:email};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_SearchUserByEmail["default"];return this.apiClient.callApi('/legacy/user/email/{email}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the legacyUserSearchKeywordGet operation.
     * @callback module:api/DefaultApi~legacyUserSearchKeywordGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchUsersByKeyword} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Find users by keyword.
     * @param {String} keyword The search term
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.order The sort field. if sort param is provided. Can be either asc or desc. (default to 'desc')
     * @param {String} opts.startPage The page number to fetch
     * @param {module:model/String} opts.sort The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~legacyUserSearchKeywordGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchUsersByKeyword}
     */},{key:"legacyUserSearchKeywordGet",value:function legacyUserSearchKeywordGet(keyword,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'keyword' is set
if(keyword===undefined||keyword===null){throw new Error("Missing the required parameter 'keyword' when calling legacyUserSearchKeywordGet");}var pathParams={keyword:keyword};var queryParams={order:opts['order'],start_page:opts['startPage'],sort:opts['sort']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_SearchUsersByKeyword["default"];return this.apiClient.callApi('/legacy/user/search/{keyword}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the markdownPost operation.
     * @callback module:api/DefaultApi~markdownPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Render an arbitrary Markdown document
     * @param {module:model/Markdown} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~markdownPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"markdownPost",value:function markdownPost(body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling markdownPost");}var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/markdown','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the markdownRawPost operation.
     * @callback module:api/DefaultApi~markdownRawPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Render a Markdown document in raw mode
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~markdownRawPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"markdownRawPost",value:function markdownRawPost(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/markdown/raw','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the metaGet operation.
     * @callback module:api/DefaultApi~metaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * This gives some information about GitHub.com, the service.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~metaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meta}
     */},{key:"metaGet",value:function metaGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Meta["default"];return this.apiClient.callApi('/meta','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the networksOwnerRepoEventsGet operation.
     * @callback module:api/DefaultApi~networksOwnerRepoEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List public events for a network of repositories.
     * @param {String} owner Name of the owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~networksOwnerRepoEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */},{key:"networksOwnerRepoEventsGet",value:function networksOwnerRepoEventsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling networksOwnerRepoEventsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling networksOwnerRepoEventsGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Event["default"]];return this.apiClient.callApi('/networks/{owner}/{repo}/events','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationsGet operation.
     * @callback module:api/DefaultApi~notificationsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notifications} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List your notifications. List all notifications for the current user, grouped by repository.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.all True to show notifications marked as read.
     * @param {Boolean} opts.participating True to show only notifications in which the user is directly participating or mentioned.
     * @param {String} opts.since The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~notificationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notifications}
     */},{key:"notificationsGet",value:function notificationsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={all:opts['all'],participating:opts['participating'],since:opts['since'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Notifications["default"];return this.apiClient.callApi('/notifications','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationsPut operation.
     * @callback module:api/DefaultApi~notificationsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Mark as read. Marking a notification as \"read\" removes it from the default view on GitHub.com.
     * @param {module:model/NotificationMarkRead} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~notificationsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"notificationsPut",value:function notificationsPut(body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling notificationsPut");}var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/notifications','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationsThreadsIdGet operation.
     * @callback module:api/DefaultApi~notificationsThreadsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notifications} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * View a single thread.
     * @param {Number} id Id of thread.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~notificationsThreadsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notifications}
     */},{key:"notificationsThreadsIdGet",value:function notificationsThreadsIdGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling notificationsThreadsIdGet");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Notifications["default"];return this.apiClient.callApi('/notifications/threads/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationsThreadsIdPatch operation.
     * @callback module:api/DefaultApi~notificationsThreadsIdPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Mark a thread as read
     * @param {Number} id Id of thread.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~notificationsThreadsIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"notificationsThreadsIdPatch",value:function notificationsThreadsIdPatch(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling notificationsThreadsIdPatch");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/notifications/threads/{id}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationsThreadsIdSubscriptionDelete operation.
     * @callback module:api/DefaultApi~notificationsThreadsIdSubscriptionDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Thread Subscription.
     * @param {Number} id Id of thread.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~notificationsThreadsIdSubscriptionDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"notificationsThreadsIdSubscriptionDelete",value:function notificationsThreadsIdSubscriptionDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling notificationsThreadsIdSubscriptionDelete");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/notifications/threads/{id}/subscription','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationsThreadsIdSubscriptionGet operation.
     * @callback module:api/DefaultApi~notificationsThreadsIdSubscriptionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Thread Subscription.
     * @param {Number} id Id of thread.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~notificationsThreadsIdSubscriptionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */},{key:"notificationsThreadsIdSubscriptionGet",value:function notificationsThreadsIdSubscriptionGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling notificationsThreadsIdSubscriptionGet");}var pathParams={id:id};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Subscription["default"];return this.apiClient.callApi('/notifications/threads/{id}/subscription','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationsThreadsIdSubscriptionPut operation.
     * @callback module:api/DefaultApi~notificationsThreadsIdSubscriptionPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set a Thread Subscription. This lets you subscribe to a thread, or ignore it. Subscribing to a thread is unnecessary if the user is already subscribed to the repository. Ignoring a thread will mute all future notifications (until you comment or get @mentioned).
     * @param {Number} id Id of thread.
     * @param {module:model/PutSubscription} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~notificationsThreadsIdSubscriptionPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */},{key:"notificationsThreadsIdSubscriptionPut",value:function notificationsThreadsIdSubscriptionPut(id,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling notificationsThreadsIdSubscriptionPut");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling notificationsThreadsIdSubscriptionPut");}var pathParams={id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Subscription["default"];return this.apiClient.callApi('/notifications/threads/{id}/subscription','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgEventsGet operation.
     * @callback module:api/DefaultApi~orgsOrgEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List public events for an organization.
     * @param {String} org Name of organisation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~orgsOrgEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */},{key:"orgsOrgEventsGet",value:function orgsOrgEventsGet(org,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgEventsGet");}var pathParams={org:org};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Event["default"]];return this.apiClient.callApi('/orgs/{org}/events','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgGet operation.
     * @callback module:api/DefaultApi~orgsOrgGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get an Organization.
     * @param {String} org Name of organisation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~orgsOrgGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */},{key:"orgsOrgGet",value:function orgsOrgGet(org,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgGet");}var pathParams={org:org};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Organization["default"];return this.apiClient.callApi('/orgs/{org}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgIssuesGet operation.
     * @callback module:api/DefaultApi~orgsOrgIssuesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List issues. List all issues for a given organization for the authenticated user.
     * @param {String} org Name of organisation.
     * @param {module:model/String} filter Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see
     * @param {module:model/String} state
     * @param {String} labels String list of comma separated Label names. Example - bug,ui,@high.
     * @param {module:model/String} sort
     * @param {module:model/String} direction
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {String} opts.since Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * @param {module:api/DefaultApi~orgsOrgIssuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"orgsOrgIssuesGet",value:function orgsOrgIssuesGet(org,filter,state,labels,sort,direction,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgIssuesGet");}// verify the required parameter 'filter' is set
if(filter===undefined||filter===null){throw new Error("Missing the required parameter 'filter' when calling orgsOrgIssuesGet");}// verify the required parameter 'state' is set
if(state===undefined||state===null){throw new Error("Missing the required parameter 'state' when calling orgsOrgIssuesGet");}// verify the required parameter 'labels' is set
if(labels===undefined||labels===null){throw new Error("Missing the required parameter 'labels' when calling orgsOrgIssuesGet");}// verify the required parameter 'sort' is set
if(sort===undefined||sort===null){throw new Error("Missing the required parameter 'sort' when calling orgsOrgIssuesGet");}// verify the required parameter 'direction' is set
if(direction===undefined||direction===null){throw new Error("Missing the required parameter 'direction' when calling orgsOrgIssuesGet");}var pathParams={org:org};var queryParams={filter:filter,state:state,labels:labels,sort:sort,direction:direction,per_page:opts['perPage'],page:opts['page'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/orgs/{org}/issues','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgMembersGet operation.
     * @callback module:api/DefaultApi~orgsOrgMembersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Members list. List all users who are members of an organization. A member is a user tha belongs to at least 1 team in the organization. If the authenticated user is also an owner of this organization then both concealed and public members will be returned. If the requester is not an owner of the organization the query will be redirected to the public members list.
     * @param {String} org Name of organisation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~orgsOrgMembersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"orgsOrgMembersGet",value:function orgsOrgMembersGet(org,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgMembersGet");}var pathParams={org:org};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/orgs/{org}/members','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgMembersUsernameDelete operation.
     * @callback module:api/DefaultApi~orgsOrgMembersUsernameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a member. Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     * @param {String} org Name of organisation.
     * @param {String} username Name of the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~orgsOrgMembersUsernameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"orgsOrgMembersUsernameDelete",value:function orgsOrgMembersUsernameDelete(org,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgMembersUsernameDelete");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling orgsOrgMembersUsernameDelete");}var pathParams={org:org,username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/orgs/{org}/members/{username}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgMembersUsernameGet operation.
     * @callback module:api/DefaultApi~orgsOrgMembersUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check if a user is, publicly or privately, a member of the organization.
     * @param {String} org Name of organisation.
     * @param {String} username Name of the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~orgsOrgMembersUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"orgsOrgMembersUsernameGet",value:function orgsOrgMembersUsernameGet(org,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgMembersUsernameGet");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling orgsOrgMembersUsernameGet");}var pathParams={org:org,username:username};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/orgs/{org}/members/{username}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgPatch operation.
     * @callback module:api/DefaultApi~orgsOrgPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit an Organization.
     * @param {String} org Name of organisation.
     * @param {module:model/PatchOrg} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~orgsOrgPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organization}
     */},{key:"orgsOrgPatch",value:function orgsOrgPatch(org,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling orgsOrgPatch");}var pathParams={org:org};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Organization["default"];return this.apiClient.callApi('/orgs/{org}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgPublicMembersGet operation.
     * @callback module:api/DefaultApi~orgsOrgPublicMembersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Public members list. Members of an organization can choose to have their membership publicized or not.
     * @param {String} org Name of organisation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~orgsOrgPublicMembersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"orgsOrgPublicMembersGet",value:function orgsOrgPublicMembersGet(org,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgPublicMembersGet");}var pathParams={org:org};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/orgs/{org}/public_members','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgPublicMembersUsernameDelete operation.
     * @callback module:api/DefaultApi~orgsOrgPublicMembersUsernameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Conceal a user's membership.
     * @param {String} org Name of organisation.
     * @param {String} username Name of the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~orgsOrgPublicMembersUsernameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"orgsOrgPublicMembersUsernameDelete",value:function orgsOrgPublicMembersUsernameDelete(org,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgPublicMembersUsernameDelete");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling orgsOrgPublicMembersUsernameDelete");}var pathParams={org:org,username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/orgs/{org}/public_members/{username}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgPublicMembersUsernameGet operation.
     * @callback module:api/DefaultApi~orgsOrgPublicMembersUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check public membership.
     * @param {String} org Name of organisation.
     * @param {String} username Name of the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~orgsOrgPublicMembersUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"orgsOrgPublicMembersUsernameGet",value:function orgsOrgPublicMembersUsernameGet(org,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgPublicMembersUsernameGet");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling orgsOrgPublicMembersUsernameGet");}var pathParams={org:org,username:username};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/orgs/{org}/public_members/{username}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgPublicMembersUsernamePut operation.
     * @callback module:api/DefaultApi~orgsOrgPublicMembersUsernamePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Publicize a user's membership.
     * @param {String} org Name of organisation.
     * @param {String} username Name of the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~orgsOrgPublicMembersUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"orgsOrgPublicMembersUsernamePut",value:function orgsOrgPublicMembersUsernamePut(org,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgPublicMembersUsernamePut");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling orgsOrgPublicMembersUsernamePut");}var pathParams={org:org,username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/orgs/{org}/public_members/{username}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgReposGet operation.
     * @callback module:api/DefaultApi~orgsOrgReposGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List repositories for the specified org.
     * @param {String} org Name of organisation.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type  (default to 'all')
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~orgsOrgReposGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repo>}
     */},{key:"orgsOrgReposGet",value:function orgsOrgReposGet(org,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgReposGet");}var pathParams={org:org};var queryParams={type:opts['type'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Repo["default"]];return this.apiClient.callApi('/orgs/{org}/repos','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgReposPost operation.
     * @callback module:api/DefaultApi~orgsOrgReposPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new repository for the authenticated user. OAuth users must supply repo scope.
     * @param {String} org Name of organisation.
     * @param {module:model/PostRepo} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~orgsOrgReposPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repo>}
     */},{key:"orgsOrgReposPost",value:function orgsOrgReposPost(org,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgReposPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling orgsOrgReposPost");}var pathParams={org:org};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=[_Repo["default"]];return this.apiClient.callApi('/orgs/{org}/repos','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgTeamsGet operation.
     * @callback module:api/DefaultApi~orgsOrgTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List teams.
     * @param {String} org Name of organisation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~orgsOrgTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"orgsOrgTeamsGet",value:function orgsOrgTeamsGet(org,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgTeamsGet");}var pathParams={org:org};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/orgs/{org}/teams','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the orgsOrgTeamsPost operation.
     * @callback module:api/DefaultApi~orgsOrgTeamsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create team. In order to create a team, the authenticated user must be an owner of organization.
     * @param {String} org Name of organisation.
     * @param {module:model/OrgTeamsPost} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~orgsOrgTeamsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */},{key:"orgsOrgTeamsPost",value:function orgsOrgTeamsPost(org,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling orgsOrgTeamsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling orgsOrgTeamsPost");}var pathParams={org:org};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Team["default"];return this.apiClient.callApi('/orgs/{org}/teams','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the rateLimitGet operation.
     * @callback module:api/DefaultApi~rateLimitGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RateLimit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get your current rate limit status Note: Accessing this endpoint does not count against your rate limit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~rateLimitGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RateLimit}
     */},{key:"rateLimitGet",value:function rateLimitGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_RateLimit["default"];return this.apiClient.callApi('/rate_limit','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoArchiveFormatPathGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoArchiveFormatPathGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get archive link. This method will return a 302 to a URL to download a tarball or zipball archive for a repository. Please make sure your HTTP framework is configured to follow redirects or you will need to use the Location header to make a second GET request. Note: For private repositories, these links are temporary and expire quickly.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/String} archiveFormat
     * @param {String} path Valid Git reference, defaults to 'master'.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoArchiveFormatPathGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoArchiveFormatPathGet",value:function reposOwnerRepoArchiveFormatPathGet(owner,repo,archiveFormat,path,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoArchiveFormatPathGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoArchiveFormatPathGet");}// verify the required parameter 'archiveFormat' is set
if(archiveFormat===undefined||archiveFormat===null){throw new Error("Missing the required parameter 'archiveFormat' when calling reposOwnerRepoArchiveFormatPathGet");}// verify the required parameter 'path' is set
if(path===undefined||path===null){throw new Error("Missing the required parameter 'path' when calling reposOwnerRepoArchiveFormatPathGet");}var pathParams={owner:owner,repo:repo,archive_format:archiveFormat,path:path};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/{archive_format}/{path}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoAssigneesAssigneeGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoAssigneesAssigneeGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check assignee. You may also check to see if a particular user is an assignee for a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} assignee Login of the assignee.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoAssigneesAssigneeGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoAssigneesAssigneeGet",value:function reposOwnerRepoAssigneesAssigneeGet(owner,repo,assignee,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoAssigneesAssigneeGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoAssigneesAssigneeGet");}// verify the required parameter 'assignee' is set
if(assignee===undefined||assignee===null){throw new Error("Missing the required parameter 'assignee' when calling reposOwnerRepoAssigneesAssigneeGet");}var pathParams={owner:owner,repo:repo,assignee:assignee};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/assignees/{assignee}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoAssigneesGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoAssigneesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoAssigneesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"reposOwnerRepoAssigneesGet",value:function reposOwnerRepoAssigneesGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoAssigneesGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoAssigneesGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/assignees','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoBranchesBranchGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoBranchesBranchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Branch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get Branch
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} branch Name of the branch.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoBranchesBranchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Branch}
     */},{key:"reposOwnerRepoBranchesBranchGet",value:function reposOwnerRepoBranchesBranchGet(owner,repo,branch,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoBranchesBranchGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoBranchesBranchGet");}// verify the required parameter 'branch' is set
if(branch===undefined||branch===null){throw new Error("Missing the required parameter 'branch' when calling reposOwnerRepoBranchesBranchGet");}var pathParams={owner:owner,repo:repo,branch:branch};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Branch["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/branches/{branch}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoBranchesGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoBranchesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get list of branches
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoBranchesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoBranchesGet",value:function reposOwnerRepoBranchesGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoBranchesGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoBranchesGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/branches','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCollaboratorsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCollaboratorsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List. When authenticating as an organization owner of an organization-owned repository, all organization owners are included in the list of collaborators. Otherwise, only users with access to the repository are returned in the collaborators list.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoCollaboratorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"reposOwnerRepoCollaboratorsGet",value:function reposOwnerRepoCollaboratorsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCollaboratorsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCollaboratorsGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/collaborators','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCollaboratorsUserDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCollaboratorsUserDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove collaborator.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} user Login of the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoCollaboratorsUserDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoCollaboratorsUserDelete",value:function reposOwnerRepoCollaboratorsUserDelete(owner,repo,user,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCollaboratorsUserDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCollaboratorsUserDelete");}// verify the required parameter 'user' is set
if(user===undefined||user===null){throw new Error("Missing the required parameter 'user' when calling reposOwnerRepoCollaboratorsUserDelete");}var pathParams={owner:owner,repo:repo,user:user};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/collaborators/{user}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCollaboratorsUserGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCollaboratorsUserGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check if user is a collaborator
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} user Login of the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoCollaboratorsUserGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoCollaboratorsUserGet",value:function reposOwnerRepoCollaboratorsUserGet(owner,repo,user,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCollaboratorsUserGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCollaboratorsUserGet");}// verify the required parameter 'user' is set
if(user===undefined||user===null){throw new Error("Missing the required parameter 'user' when calling reposOwnerRepoCollaboratorsUserGet");}var pathParams={owner:owner,repo:repo,user:user};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/collaborators/{user}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCollaboratorsUserPut operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCollaboratorsUserPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add collaborator.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} user Login of the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoCollaboratorsUserPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoCollaboratorsUserPut",value:function reposOwnerRepoCollaboratorsUserPut(owner,repo,user,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCollaboratorsUserPut");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCollaboratorsUserPut");}// verify the required parameter 'user' is set
if(user===undefined||user===null){throw new Error("Missing the required parameter 'user' when calling reposOwnerRepoCollaboratorsUserPut");}var pathParams={owner:owner,repo:repo,user:user};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/collaborators/{user}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCommentsCommentIdDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCommentsCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a commit comment
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} commentId Id of comment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoCommentsCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoCommentsCommentIdDelete",value:function reposOwnerRepoCommentsCommentIdDelete(owner,repo,commentId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCommentsCommentIdDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCommentsCommentIdDelete");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling reposOwnerRepoCommentsCommentIdDelete");}var pathParams={owner:owner,repo:repo,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/comments/{commentId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCommentsCommentIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single commit comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} commentId Id of comment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitComment}
     */},{key:"reposOwnerRepoCommentsCommentIdGet",value:function reposOwnerRepoCommentsCommentIdGet(owner,repo,commentId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCommentsCommentIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCommentsCommentIdGet");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling reposOwnerRepoCommentsCommentIdGet");}var pathParams={owner:owner,repo:repo,commentId:commentId};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_CommitComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/comments/{commentId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCommentsCommentIdPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCommentsCommentIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a commit comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} commentId Id of comment.
     * @param {module:model/CommentBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoCommentsCommentIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitComment}
     */},{key:"reposOwnerRepoCommentsCommentIdPatch",value:function reposOwnerRepoCommentsCommentIdPatch(owner,repo,commentId,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCommentsCommentIdPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCommentsCommentIdPatch");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling reposOwnerRepoCommentsCommentIdPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoCommentsCommentIdPatch");}var pathParams={owner:owner,repo:repo,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_CommitComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/comments/{commentId}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCommentsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List commit comments for a repository. Comments are ordered by ascending ID.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoCommentsGet",value:function reposOwnerRepoCommentsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCommentsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCommentsGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCommitsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCommitsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List commits on a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.since The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
     * @param {String} opts.sha Sha or branch to start listing commits from.
     * @param {String} opts.path Only commits containing this file path will be returned.
     * @param {String} opts.author GitHub login, name, or email by which to filter by commit author.
     * @param {String} opts.until ISO 8601 Date - Only commits before this date will be returned.
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoCommitsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoCommitsGet",value:function reposOwnerRepoCommitsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCommitsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCommitsGet");}var pathParams={owner:owner,repo:repo};var queryParams={since:opts['since'],sha:opts['sha'],path:opts['path'],author:opts['author'],until:opts['until'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/commits','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCommitsRefStatusGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCommitsRefStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the combined Status for a specific Ref The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details. To access this endpoint during the preview period, you must provide a custom media type in the Accept header: application/vnd.github.she-hulk-preview+json
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} ref
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoCommitsRefStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoCommitsRefStatusGet",value:function reposOwnerRepoCommitsRefStatusGet(owner,repo,ref,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCommitsRefStatusGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCommitsRefStatusGet");}// verify the required parameter 'ref' is set
if(ref===undefined||ref===null){throw new Error("Missing the required parameter 'ref' when calling reposOwnerRepoCommitsRefStatusGet");}var pathParams={owner:owner,repo:repo,ref:ref};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{ref}/status','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCommitsShaCodeCommentsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCommitsShaCodeCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List comments for a single commitList comments for a single commit.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} shaCode SHA-1 code of the commit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoCommitsShaCodeCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoCommitsShaCodeCommentsGet",value:function reposOwnerRepoCommitsShaCodeCommentsGet(owner,repo,shaCode,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCommitsShaCodeCommentsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCommitsShaCodeCommentsGet");}// verify the required parameter 'shaCode' is set
if(shaCode===undefined||shaCode===null){throw new Error("Missing the required parameter 'shaCode' when calling reposOwnerRepoCommitsShaCodeCommentsGet");}var pathParams={owner:owner,repo:repo,shaCode:shaCode};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{shaCode}/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCommitsShaCodeCommentsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCommitsShaCodeCommentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a commit comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} shaCode SHA-1 code of the commit.
     * @param {module:model/CommitCommentBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoCommitsShaCodeCommentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitComment}
     */},{key:"reposOwnerRepoCommitsShaCodeCommentsPost",value:function reposOwnerRepoCommitsShaCodeCommentsPost(owner,repo,shaCode,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCommitsShaCodeCommentsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCommitsShaCodeCommentsPost");}// verify the required parameter 'shaCode' is set
if(shaCode===undefined||shaCode===null){throw new Error("Missing the required parameter 'shaCode' when calling reposOwnerRepoCommitsShaCodeCommentsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoCommitsShaCodeCommentsPost");}var pathParams={owner:owner,repo:repo,shaCode:shaCode};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_CommitComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{shaCode}/comments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCommitsShaCodeGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCommitsShaCodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single commit.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} shaCode SHA-1 code of the commit.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoCommitsShaCodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commit}
     */},{key:"reposOwnerRepoCommitsShaCodeGet",value:function reposOwnerRepoCommitsShaCodeGet(owner,repo,shaCode,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCommitsShaCodeGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCommitsShaCodeGet");}// verify the required parameter 'shaCode' is set
if(shaCode===undefined||shaCode===null){throw new Error("Missing the required parameter 'shaCode' when calling reposOwnerRepoCommitsShaCodeGet");}var pathParams={owner:owner,repo:repo,shaCode:shaCode};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Commit["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/commits/{shaCode}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoCompareBaseIdHeadIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoCompareBaseIdHeadIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompareCommits} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Compare two commits
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} baseId
     * @param {String} headId
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoCompareBaseIdHeadIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompareCommits}
     */},{key:"reposOwnerRepoCompareBaseIdHeadIdGet",value:function reposOwnerRepoCompareBaseIdHeadIdGet(owner,repo,baseId,headId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoCompareBaseIdHeadIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoCompareBaseIdHeadIdGet");}// verify the required parameter 'baseId' is set
if(baseId===undefined||baseId===null){throw new Error("Missing the required parameter 'baseId' when calling reposOwnerRepoCompareBaseIdHeadIdGet");}// verify the required parameter 'headId' is set
if(headId===undefined||headId===null){throw new Error("Missing the required parameter 'headId' when calling reposOwnerRepoCompareBaseIdHeadIdGet");}var pathParams={owner:owner,repo:repo,baseId:baseId,headId:headId};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_CompareCommits["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/compare/{baseId}...{headId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoContentsPathDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoContentsPathDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a file. This method deletes a file in a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} path
     * @param {module:model/DeleteFileBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoContentsPathDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteFile}
     */},{key:"reposOwnerRepoContentsPathDelete",value:function reposOwnerRepoContentsPathDelete(owner,repo,path,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoContentsPathDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoContentsPathDelete");}// verify the required parameter 'path' is set
if(path===undefined||path===null){throw new Error("Missing the required parameter 'path' when calling reposOwnerRepoContentsPathDelete");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoContentsPathDelete");}var pathParams={owner:owner,repo:repo,path:path};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_DeleteFile["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/contents/{path}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoContentsPathGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoContentsPathGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentsPath} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get contents. This method returns the contents of a file or directory in a repository. Files and symlinks support a custom media type for getting the raw content. Directories and submodules do not support custom media types. Note: This API supports files up to 1 megabyte in size. Here can be many outcomes. For details see \"http://developer.github.com/v3/repos/contents/\"
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} path
     * @param {Object} opts Optional parameters
     * @param {String} opts.path2 The content path.
     * @param {String} opts.ref The String name of the Commit/Branch/Tag. Defaults to 'master'.
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoContentsPathGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentsPath}
     */},{key:"reposOwnerRepoContentsPathGet",value:function reposOwnerRepoContentsPathGet(owner,repo,path,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoContentsPathGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoContentsPathGet");}// verify the required parameter 'path' is set
if(path===undefined||path===null){throw new Error("Missing the required parameter 'path' when calling reposOwnerRepoContentsPathGet");}var pathParams={owner:owner,repo:repo,path:path};var queryParams={path:opts['path2'],ref:opts['ref'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_ContentsPath["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/contents/{path}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoContentsPathPut operation.
     * @callback module:api/DefaultApi~reposOwnerRepoContentsPathPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a file.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} path
     * @param {module:model/CreateFileBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoContentsPathPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateFile}
     */},{key:"reposOwnerRepoContentsPathPut",value:function reposOwnerRepoContentsPathPut(owner,repo,path,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoContentsPathPut");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoContentsPathPut");}// verify the required parameter 'path' is set
if(path===undefined||path===null){throw new Error("Missing the required parameter 'path' when calling reposOwnerRepoContentsPathPut");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoContentsPathPut");}var pathParams={owner:owner,repo:repo,path:path};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_CreateFile["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/contents/{path}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoContributorsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoContributorsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get list of contributors.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} anon Set to 1 or true to include anonymous contributors in results.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoContributorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"reposOwnerRepoContributorsGet",value:function reposOwnerRepoContributorsGet(owner,repo,anon,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoContributorsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoContributorsGet");}// verify the required parameter 'anon' is set
if(anon===undefined||anon===null){throw new Error("Missing the required parameter 'anon' when calling reposOwnerRepoContributorsGet");}var pathParams={owner:owner,repo:repo};var queryParams={anon:anon,per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/contributors','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Repository. Deleting a repository requires admin access. If OAuth is used, the delete_repo scope is required.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoDelete",value:function reposOwnerRepoDelete(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoDelete");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoDeploymentsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoDeploymentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Users with pull access can view deployments for a repository
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoDeploymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoDeploymentsGet",value:function reposOwnerRepoDeploymentsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoDeploymentsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoDeploymentsGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/deployments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoDeploymentsIdStatusesGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoDeploymentsIdStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Users with pull access can view deployment statuses for a deployment
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} id The Deployment ID to list the statuses from.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoDeploymentsIdStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoDeploymentsIdStatusesGet",value:function reposOwnerRepoDeploymentsIdStatusesGet(owner,repo,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoDeploymentsIdStatusesGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoDeploymentsIdStatusesGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling reposOwnerRepoDeploymentsIdStatusesGet");}var pathParams={owner:owner,repo:repo,id:id};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/deployments/{id}/statuses','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoDeploymentsIdStatusesPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoDeploymentsIdStatusesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Deployment Status Users with push access can create deployment statuses for a given deployment:
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} id The Deployment ID to list the statuses from.
     * @param {module:model/DeploymentStatusesCreate} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoDeploymentsIdStatusesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoDeploymentsIdStatusesPost",value:function reposOwnerRepoDeploymentsIdStatusesPost(owner,repo,id,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoDeploymentsIdStatusesPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoDeploymentsIdStatusesPost");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling reposOwnerRepoDeploymentsIdStatusesPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoDeploymentsIdStatusesPost");}var pathParams={owner:owner,repo:repo,id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/deployments/{id}/statuses','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoDeploymentsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoDeploymentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeploymentResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Users with push access can create a deployment for a given ref
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/Deployment} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoDeploymentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeploymentResp}
     */},{key:"reposOwnerRepoDeploymentsPost",value:function reposOwnerRepoDeploymentsPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoDeploymentsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoDeploymentsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoDeploymentsPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_DeploymentResp["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/deployments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoDownloadsDownloadIdDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoDownloadsDownloadIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deprecated. Delete a download.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} downloadId Id of download.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoDownloadsDownloadIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoDownloadsDownloadIdDelete",value:function reposOwnerRepoDownloadsDownloadIdDelete(owner,repo,downloadId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoDownloadsDownloadIdDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoDownloadsDownloadIdDelete");}// verify the required parameter 'downloadId' is set
if(downloadId===undefined||downloadId===null){throw new Error("Missing the required parameter 'downloadId' when calling reposOwnerRepoDownloadsDownloadIdDelete");}var pathParams={owner:owner,repo:repo,downloadId:downloadId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/downloads/{downloadId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoDownloadsDownloadIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoDownloadsDownloadIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Download} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deprecated. Get a single download.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} downloadId Id of download.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoDownloadsDownloadIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Download}
     */},{key:"reposOwnerRepoDownloadsDownloadIdGet",value:function reposOwnerRepoDownloadsDownloadIdGet(owner,repo,downloadId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoDownloadsDownloadIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoDownloadsDownloadIdGet");}// verify the required parameter 'downloadId' is set
if(downloadId===undefined||downloadId===null){throw new Error("Missing the required parameter 'downloadId' when calling reposOwnerRepoDownloadsDownloadIdGet");}var pathParams={owner:owner,repo:repo,downloadId:downloadId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Download["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/downloads/{downloadId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoDownloadsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoDownloadsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Download>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deprecated. List downloads for a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoDownloadsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Download>}
     */},{key:"reposOwnerRepoDownloadsGet",value:function reposOwnerRepoDownloadsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoDownloadsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoDownloadsGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Download["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/downloads','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoEventsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get list of repository events.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */},{key:"reposOwnerRepoEventsGet",value:function reposOwnerRepoEventsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoEventsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoEventsGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Event["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/events','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoForksGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoForksGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List forks.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort  (default to 'newes')
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoForksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repo>}
     */},{key:"reposOwnerRepoForksGet",value:function reposOwnerRepoForksGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoForksGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoForksGet");}var pathParams={owner:owner,repo:repo};var queryParams={sort:opts['sort'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Repo["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/forks','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoForksPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoForksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a fork. Forking a Repository happens asynchronously. Therefore, you may have to wai a short period before accessing the git objects. If this takes longer than 5 minutes, be sure to contact Support.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/ForkBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoForksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repo}
     */},{key:"reposOwnerRepoForksPost",value:function reposOwnerRepoForksPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoForksPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoForksPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoForksPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Repo["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/forks','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repo}
     */},{key:"reposOwnerRepoGet",value:function reposOwnerRepoGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Repo["default"];return this.apiClient.callApi('/repos/{owner}/{repo}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitBlobsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitBlobsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Blobs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Blob.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Blob} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoGitBlobsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Blobs}
     */},{key:"reposOwnerRepoGitBlobsPost",value:function reposOwnerRepoGitBlobsPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitBlobsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitBlobsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoGitBlobsPost");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Blobs["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/blobs','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitBlobsShaCodeGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitBlobsShaCodeGetCallback
     * @param {String} error Error message, if any.
     * @param {Blob} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Blob. Since blobs can be any arbitrary binary data, the input and responses for the blob API takes an encoding parameter that can be either utf-8 or base64. If your data cannot be losslessly sent as a UTF-8 string, you can base64 encode it.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} shaCode SHA-1 code.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoGitBlobsShaCodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Blob}
     */},{key:"reposOwnerRepoGitBlobsShaCodeGet",value:function reposOwnerRepoGitBlobsShaCodeGet(owner,repo,shaCode,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitBlobsShaCodeGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitBlobsShaCodeGet");}// verify the required parameter 'shaCode' is set
if(shaCode===undefined||shaCode===null){throw new Error("Missing the required parameter 'shaCode' when calling reposOwnerRepoGitBlobsShaCodeGet");}var pathParams={owner:owner,repo:repo,shaCode:shaCode};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType='Blob';return this.apiClient.callApi('/repos/{owner}/{repo}/git/blobs/{shaCode}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitCommitsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitCommitsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GitCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Commit.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/RepoCommitBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoGitCommitsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GitCommit}
     */},{key:"reposOwnerRepoGitCommitsPost",value:function reposOwnerRepoGitCommitsPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitCommitsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitCommitsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoGitCommitsPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_GitCommit["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/commits','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitCommitsShaCodeGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitCommitsShaCodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Commit.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} shaCode SHA-1 code.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoGitCommitsShaCodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoCommit}
     */},{key:"reposOwnerRepoGitCommitsShaCodeGet",value:function reposOwnerRepoGitCommitsShaCodeGet(owner,repo,shaCode,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitCommitsShaCodeGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitCommitsShaCodeGet");}// verify the required parameter 'shaCode' is set
if(shaCode===undefined||shaCode===null){throw new Error("Missing the required parameter 'shaCode' when calling reposOwnerRepoGitCommitsShaCodeGet");}var pathParams={owner:owner,repo:repo,shaCode:shaCode};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoCommit["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/commits/{shaCode}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitRefsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitRefsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all References
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoGitRefsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoGitRefsGet",value:function reposOwnerRepoGitRefsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitRefsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitRefsGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/git/refs','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitRefsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitRefsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HeadBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Reference
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/RefsBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoGitRefsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HeadBranch}
     */},{key:"reposOwnerRepoGitRefsPost",value:function reposOwnerRepoGitRefsPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitRefsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitRefsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoGitRefsPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_HeadBranch["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/refs','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitRefsRefDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitRefsRefDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Reference Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a  Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} ref
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoGitRefsRefDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoGitRefsRefDelete",value:function reposOwnerRepoGitRefsRefDelete(owner,repo,ref,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitRefsRefDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitRefsRefDelete");}// verify the required parameter 'ref' is set
if(ref===undefined||ref===null){throw new Error("Missing the required parameter 'ref' when calling reposOwnerRepoGitRefsRefDelete");}var pathParams={owner:owner,repo:repo,ref:ref};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/git/refs/{ref}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitRefsRefGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitRefsRefGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HeadBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Reference
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} ref
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoGitRefsRefGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HeadBranch}
     */},{key:"reposOwnerRepoGitRefsRefGet",value:function reposOwnerRepoGitRefsRefGet(owner,repo,ref,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitRefsRefGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitRefsRefGet");}// verify the required parameter 'ref' is set
if(ref===undefined||ref===null){throw new Error("Missing the required parameter 'ref' when calling reposOwnerRepoGitRefsRefGet");}var pathParams={owner:owner,repo:repo,ref:ref};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_HeadBranch["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/refs/{ref}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitRefsRefPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitRefsRefPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HeadBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a Reference
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} ref
     * @param {module:model/GitRefPatch} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoGitRefsRefPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HeadBranch}
     */},{key:"reposOwnerRepoGitRefsRefPatch",value:function reposOwnerRepoGitRefsRefPatch(owner,repo,ref,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitRefsRefPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitRefsRefPatch");}// verify the required parameter 'ref' is set
if(ref===undefined||ref===null){throw new Error("Missing the required parameter 'ref' when calling reposOwnerRepoGitRefsRefPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoGitRefsRefPatch");}var pathParams={owner:owner,repo:repo,ref:ref};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_HeadBranch["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/refs/{ref}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitTagsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitTagsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Tag Object. Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then create the refs/tags/[tag] reference. If you want to create a lightweight tag, you only have to create the tag reference - this call would be unnecessary.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/TagBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoGitTagsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */},{key:"reposOwnerRepoGitTagsPost",value:function reposOwnerRepoGitTagsPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitTagsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitTagsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoGitTagsPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Tag["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/tags','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitTagsShaCodeGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitTagsShaCodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Tag.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} shaCode
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoGitTagsShaCodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */},{key:"reposOwnerRepoGitTagsShaCodeGet",value:function reposOwnerRepoGitTagsShaCodeGet(owner,repo,shaCode,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitTagsShaCodeGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitTagsShaCodeGet");}// verify the required parameter 'shaCode' is set
if(shaCode===undefined||shaCode===null){throw new Error("Missing the required parameter 'shaCode' when calling reposOwnerRepoGitTagsShaCodeGet");}var pathParams={owner:owner,repo:repo,shaCode:shaCode};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Tag["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/tags/{shaCode}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitTreesPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitTreesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trees} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Tree. The tree creation API will take nested entries as well. If both a tree and a nested path modifying that tree are specified, it will overwrite the contents of that tree with the new path contents and write a new tree out.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/Tree} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoGitTreesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trees}
     */},{key:"reposOwnerRepoGitTreesPost",value:function reposOwnerRepoGitTreesPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitTreesPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitTreesPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoGitTreesPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Trees["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/trees','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoGitTreesShaCodeGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoGitTreesShaCodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tree} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Tree.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} shaCode Tree SHA.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.recursive Get a Tree Recursively. (0 or 1)
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoGitTreesShaCodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tree}
     */},{key:"reposOwnerRepoGitTreesShaCodeGet",value:function reposOwnerRepoGitTreesShaCodeGet(owner,repo,shaCode,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoGitTreesShaCodeGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoGitTreesShaCodeGet");}// verify the required parameter 'shaCode' is set
if(shaCode===undefined||shaCode===null){throw new Error("Missing the required parameter 'shaCode' when calling reposOwnerRepoGitTreesShaCodeGet");}var pathParams={owner:owner,repo:repo,shaCode:shaCode};var queryParams={recursive:opts['recursive']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Tree["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/git/trees/{shaCode}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoHooksGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get list of hooks.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~reposOwnerRepoHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoHooksGet",value:function reposOwnerRepoHooksGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoHooksGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoHooksGet");}var pathParams={owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/hooks','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoHooksHookIdDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoHooksHookIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a hook.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} hookId Id of hook.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoHooksHookIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoHooksHookIdDelete",value:function reposOwnerRepoHooksHookIdDelete(owner,repo,hookId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoHooksHookIdDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoHooksHookIdDelete");}// verify the required parameter 'hookId' is set
if(hookId===undefined||hookId===null){throw new Error("Missing the required parameter 'hookId' when calling reposOwnerRepoHooksHookIdDelete");}var pathParams={owner:owner,repo:repo,hookId:hookId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/hooks/{hookId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoHooksHookIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoHooksHookIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get single hook.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} hookId Id of hook.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoHooksHookIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoHooksHookIdGet",value:function reposOwnerRepoHooksHookIdGet(owner,repo,hookId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoHooksHookIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoHooksHookIdGet");}// verify the required parameter 'hookId' is set
if(hookId===undefined||hookId===null){throw new Error("Missing the required parameter 'hookId' when calling reposOwnerRepoHooksHookIdGet");}var pathParams={owner:owner,repo:repo,hookId:hookId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/hooks/{hookId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoHooksHookIdPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoHooksHookIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit a hook.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} hookId Id of hook.
     * @param {module:model/HookBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoHooksHookIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoHooksHookIdPatch",value:function reposOwnerRepoHooksHookIdPatch(owner,repo,hookId,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoHooksHookIdPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoHooksHookIdPatch");}// verify the required parameter 'hookId' is set
if(hookId===undefined||hookId===null){throw new Error("Missing the required parameter 'hookId' when calling reposOwnerRepoHooksHookIdPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoHooksHookIdPatch");}var pathParams={owner:owner,repo:repo,hookId:hookId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/hooks/{hookId}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoHooksHookIdTestsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoHooksHookIdTestsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Test a push hook. This will trigger the hook with the latest push to the current repository if the hook is subscribed to push events. If the hook is not subscribed to push events, the server will respond with 204 but no test POST will be generated. Note: Previously /repos/:owner/:repo/hooks/:id/tes
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} hookId Id of hook.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoHooksHookIdTestsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoHooksHookIdTestsPost",value:function reposOwnerRepoHooksHookIdTestsPost(owner,repo,hookId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoHooksHookIdTestsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoHooksHookIdTestsPost");}// verify the required parameter 'hookId' is set
if(hookId===undefined||hookId===null){throw new Error("Missing the required parameter 'hookId' when calling reposOwnerRepoHooksHookIdTestsPost");}var pathParams={owner:owner,repo:repo,hookId:hookId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/hooks/{hookId}/tests','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoHooksPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a hook.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/HookBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoHooksPost",value:function reposOwnerRepoHooksPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoHooksPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoHooksPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoHooksPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/hooks','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesCommentsCommentIdDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesCommentsCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} commentId ID of comment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesCommentsCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoIssuesCommentsCommentIdDelete",value:function reposOwnerRepoIssuesCommentsCommentIdDelete(owner,repo,commentId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesCommentsCommentIdDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesCommentsCommentIdDelete");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling reposOwnerRepoIssuesCommentsCommentIdDelete");}var pathParams={owner:owner,repo:repo,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments/{commentId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesCommentsCommentIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssuesComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} commentId ID of comment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssuesComment}
     */},{key:"reposOwnerRepoIssuesCommentsCommentIdGet",value:function reposOwnerRepoIssuesCommentsCommentIdGet(owner,repo,commentId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesCommentsCommentIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesCommentsCommentIdGet");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling reposOwnerRepoIssuesCommentsCommentIdGet");}var pathParams={owner:owner,repo:repo,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_IssuesComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments/{commentId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesCommentsCommentIdPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesCommentsCommentIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssuesComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit a comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} commentId ID of comment.
     * @param {module:model/CommentBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesCommentsCommentIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssuesComment}
     */},{key:"reposOwnerRepoIssuesCommentsCommentIdPatch",value:function reposOwnerRepoIssuesCommentsCommentIdPatch(owner,repo,commentId,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesCommentsCommentIdPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesCommentsCommentIdPatch");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling reposOwnerRepoIssuesCommentsCommentIdPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoIssuesCommentsCommentIdPatch");}var pathParams={owner:owner,repo:repo,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_IssuesComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments/{commentId}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesCommentsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List comments in a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.direction Ignored without 'sort' parameter.
     * @param {module:model/String} opts.sort
     * @param {String} opts.since The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoIssuesCommentsGet",value:function reposOwnerRepoIssuesCommentsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesCommentsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesCommentsGet");}var pathParams={owner:owner,repo:repo};var queryParams={direction:opts['direction'],sort:opts['sort'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesEventsEventIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesEventsEventIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single event.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} eventId Id of the event.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesEventsEventIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueEvent}
     */},{key:"reposOwnerRepoIssuesEventsEventIdGet",value:function reposOwnerRepoIssuesEventsEventIdGet(owner,repo,eventId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesEventsEventIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesEventsEventIdGet");}// verify the required parameter 'eventId' is set
if(eventId===undefined||eventId===null){throw new Error("Missing the required parameter 'eventId' when calling reposOwnerRepoIssuesEventsEventIdGet");}var pathParams={owner:owner,repo:repo,eventId:eventId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_IssueEvent["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/events/{eventId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesEventsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List issue events for a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueEvent>}
     */},{key:"reposOwnerRepoIssuesEventsGet",value:function reposOwnerRepoIssuesEventsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesEventsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesEventsGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_IssueEvent["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/events','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List issues for a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/String} filter Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see
     * @param {module:model/String} state
     * @param {String} labels String list of comma separated Label names. Example - bug,ui,@high.
     * @param {module:model/String} sort
     * @param {module:model/String} direction
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {String} opts.since Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoIssuesGet",value:function reposOwnerRepoIssuesGet(owner,repo,filter,state,labels,sort,direction,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesGet");}// verify the required parameter 'filter' is set
if(filter===undefined||filter===null){throw new Error("Missing the required parameter 'filter' when calling reposOwnerRepoIssuesGet");}// verify the required parameter 'state' is set
if(state===undefined||state===null){throw new Error("Missing the required parameter 'state' when calling reposOwnerRepoIssuesGet");}// verify the required parameter 'labels' is set
if(labels===undefined||labels===null){throw new Error("Missing the required parameter 'labels' when calling reposOwnerRepoIssuesGet");}// verify the required parameter 'sort' is set
if(sort===undefined||sort===null){throw new Error("Missing the required parameter 'sort' when calling reposOwnerRepoIssuesGet");}// verify the required parameter 'direction' is set
if(direction===undefined||direction===null){throw new Error("Missing the required parameter 'direction' when calling reposOwnerRepoIssuesGet");}var pathParams={owner:owner,repo:repo};var queryParams={filter:filter,state:state,labels:labels,sort:sort,direction:direction,per_page:opts['perPage'],page:opts['page'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/issues','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberCommentsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List comments on an issue.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoIssuesNumberCommentsGet",value:function reposOwnerRepoIssuesNumberCommentsGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberCommentsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberCommentsGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberCommentsGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberCommentsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberCommentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssuesComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {module:model/CommentBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberCommentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssuesComment}
     */},{key:"reposOwnerRepoIssuesNumberCommentsPost",value:function reposOwnerRepoIssuesNumberCommentsPost(owner,repo,_number,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberCommentsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberCommentsPost");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberCommentsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoIssuesNumberCommentsPost");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_IssuesComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}/comments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberEventsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List events for an issue.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueEvent>}
     */},{key:"reposOwnerRepoIssuesNumberEventsGet",value:function reposOwnerRepoIssuesNumberEventsGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberEventsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberEventsGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberEventsGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_IssueEvent["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}/events','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single issue
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"reposOwnerRepoIssuesNumberGet",value:function reposOwnerRepoIssuesNumberGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberLabelsDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove all labels from an issue.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoIssuesNumberLabelsDelete",value:function reposOwnerRepoIssuesNumberLabelsDelete(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberLabelsDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberLabelsDelete");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberLabelsDelete");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}/labels','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberLabelsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List labels on an issue.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoIssuesNumberLabelsGet",value:function reposOwnerRepoIssuesNumberLabelsGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberLabelsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberLabelsGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberLabelsGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}/labels','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberLabelsNameDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a label from an issue.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {String} name Name of the label.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoIssuesNumberLabelsNameDelete",value:function reposOwnerRepoIssuesNumberLabelsNameDelete(owner,repo,_number,name,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberLabelsNameDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberLabelsNameDelete");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberLabelsNameDelete");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new Error("Missing the required parameter 'name' when calling reposOwnerRepoIssuesNumberLabelsNameDelete");}var pathParams={owner:owner,repo:repo,number:_number,name:name};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}/labels/{name}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberLabelsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add labels to an issue.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {Array.<String>} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"reposOwnerRepoIssuesNumberLabelsPost",value:function reposOwnerRepoIssuesNumberLabelsPost(owner,repo,_number,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberLabelsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberLabelsPost");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberLabelsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoIssuesNumberLabelsPost");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}/labels','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberLabelsPut operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Replace all labels for an issue. Sending an empty array ([]) will remove all Labels from the Issue.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {Array.<String>} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberLabelsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"reposOwnerRepoIssuesNumberLabelsPut",value:function reposOwnerRepoIssuesNumberLabelsPut(owner,repo,_number,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberLabelsPut");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberLabelsPut");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberLabelsPut");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoIssuesNumberLabelsPut");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}/labels','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesNumberPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesNumberPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit an issue. Issue owners and users with push access can edit an issue.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of issue.
     * @param {module:model/Issue} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesNumberPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"reposOwnerRepoIssuesNumberPatch",value:function reposOwnerRepoIssuesNumberPatch(owner,repo,_number,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesNumberPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesNumberPatch");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoIssuesNumberPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoIssuesNumberPatch");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/issues/{number}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoIssuesPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoIssuesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create an issue. Any user with pull access to a repository can create an issue.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/Issue} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoIssuesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"reposOwnerRepoIssuesPost",value:function reposOwnerRepoIssuesPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoIssuesPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoIssuesPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoIssuesPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/issues','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoKeysGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoKeysGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get list of keys.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoKeysGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoKeysGet",value:function reposOwnerRepoKeysGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoKeysGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoKeysGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/keys','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoKeysKeyIdDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoKeysKeyIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a key.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} keyId Id of key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoKeysKeyIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoKeysKeyIdDelete",value:function reposOwnerRepoKeysKeyIdDelete(owner,repo,keyId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoKeysKeyIdDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoKeysKeyIdDelete");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling reposOwnerRepoKeysKeyIdDelete");}var pathParams={owner:owner,repo:repo,keyId:keyId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/keys/{keyId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoKeysKeyIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoKeysKeyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserKeysKeyId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a key
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} keyId Id of key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoKeysKeyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserKeysKeyId}
     */},{key:"reposOwnerRepoKeysKeyIdGet",value:function reposOwnerRepoKeysKeyIdGet(owner,repo,keyId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoKeysKeyIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoKeysKeyIdGet");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling reposOwnerRepoKeysKeyIdGet");}var pathParams={owner:owner,repo:repo,keyId:keyId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_UserKeysKeyId["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/keys/{keyId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoKeysPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoKeysPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserKeysKeyId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a key.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/UserKeysPost} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoKeysPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserKeysKeyId}
     */},{key:"reposOwnerRepoKeysPost",value:function reposOwnerRepoKeysPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoKeysPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoKeysPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoKeysPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_UserKeysKeyId["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/keys','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoLabelsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoLabelsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List all labels for this repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoLabelsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoLabelsGet",value:function reposOwnerRepoLabelsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoLabelsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoLabelsGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/labels','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoLabelsNameDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoLabelsNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a label.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} name Name of the label.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoLabelsNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoLabelsNameDelete",value:function reposOwnerRepoLabelsNameDelete(owner,repo,name,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoLabelsNameDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoLabelsNameDelete");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new Error("Missing the required parameter 'name' when calling reposOwnerRepoLabelsNameDelete");}var pathParams={owner:owner,repo:repo,name:name};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/labels/{name}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoLabelsNameGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoLabelsNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single label.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} name Name of the label.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoLabelsNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"reposOwnerRepoLabelsNameGet",value:function reposOwnerRepoLabelsNameGet(owner,repo,name,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoLabelsNameGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoLabelsNameGet");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new Error("Missing the required parameter 'name' when calling reposOwnerRepoLabelsNameGet");}var pathParams={owner:owner,repo:repo,name:name};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/labels/{name}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoLabelsNamePatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoLabelsNamePatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a label.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} name Name of the label.
     * @param {Array.<String>} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoLabelsNamePatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"reposOwnerRepoLabelsNamePatch",value:function reposOwnerRepoLabelsNamePatch(owner,repo,name,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoLabelsNamePatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoLabelsNamePatch");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new Error("Missing the required parameter 'name' when calling reposOwnerRepoLabelsNamePatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoLabelsNamePatch");}var pathParams={owner:owner,repo:repo,name:name};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/labels/{name}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoLabelsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoLabelsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a label.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Array.<String>} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoLabelsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"reposOwnerRepoLabelsPost",value:function reposOwnerRepoLabelsPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoLabelsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoLabelsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoLabelsPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/labels','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoLanguagesGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoLanguagesGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Number}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List languages. List languages for the specified repository. The value on the right of a language is the number of bytes of code written in that language.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoLanguagesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Number}>}
     */},{key:"reposOwnerRepoLanguagesGet",value:function reposOwnerRepoLanguagesGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoLanguagesGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoLanguagesGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType={String:'Number'};return this.apiClient.callApi('/repos/{owner}/{repo}/languages','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoMergesPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoMergesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergesSuccessful} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Perform a merge.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/MergesBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoMergesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergesSuccessful}
     */},{key:"reposOwnerRepoMergesPost",value:function reposOwnerRepoMergesPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoMergesPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoMergesPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoMergesPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_MergesSuccessful["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/merges','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoMilestonesGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoMilestonesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List milestones for a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state String to filter by state. (default to 'open')
     * @param {String} opts.direction Ignored without 'sort' parameter.
     * @param {module:model/String} opts.sort  (default to 'due_date')
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoMilestonesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */},{key:"reposOwnerRepoMilestonesGet",value:function reposOwnerRepoMilestonesGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoMilestonesGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoMilestonesGet");}var pathParams={owner:owner,repo:repo};var queryParams={state:opts['state'],direction:opts['direction'],sort:opts['sort']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Milestone["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/milestones','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoMilestonesNumberDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoMilestonesNumberDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a milestone.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of milestone.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoMilestonesNumberDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoMilestonesNumberDelete",value:function reposOwnerRepoMilestonesNumberDelete(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoMilestonesNumberDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoMilestonesNumberDelete");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoMilestonesNumberDelete");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/milestones/{number}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoMilestonesNumberGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoMilestonesNumberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single milestone.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of milestone.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoMilestonesNumberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */},{key:"reposOwnerRepoMilestonesNumberGet",value:function reposOwnerRepoMilestonesNumberGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoMilestonesNumberGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoMilestonesNumberGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoMilestonesNumberGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Milestone["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/milestones/{number}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoMilestonesNumberLabelsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoMilestonesNumberLabelsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get labels for every issue in a milestone.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of milestone.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoMilestonesNumberLabelsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoMilestonesNumberLabelsGet",value:function reposOwnerRepoMilestonesNumberLabelsGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoMilestonesNumberLabelsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoMilestonesNumberLabelsGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoMilestonesNumberLabelsGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/milestones/{number}/labels','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoMilestonesNumberPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoMilestonesNumberPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a milestone.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Number of milestone.
     * @param {module:model/MilestoneUpdate} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoMilestonesNumberPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */},{key:"reposOwnerRepoMilestonesNumberPatch",value:function reposOwnerRepoMilestonesNumberPatch(owner,repo,_number,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoMilestonesNumberPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoMilestonesNumberPatch");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoMilestonesNumberPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoMilestonesNumberPatch");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Milestone["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/milestones/{number}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoMilestonesPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoMilestonesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a milestone.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/MilestoneUpdate} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoMilestonesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */},{key:"reposOwnerRepoMilestonesPost",value:function reposOwnerRepoMilestonesPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoMilestonesPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoMilestonesPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoMilestonesPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Milestone["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/milestones','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoNotificationsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoNotificationsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notifications} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List your notifications in a repository List all notifications for the current user.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.all True to show notifications marked as read.
     * @param {Boolean} opts.participating True to show only notifications in which the user is directly participating or mentioned.
     * @param {String} opts.since The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoNotificationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notifications}
     */},{key:"reposOwnerRepoNotificationsGet",value:function reposOwnerRepoNotificationsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoNotificationsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoNotificationsGet");}var pathParams={owner:owner,repo:repo};var queryParams={all:opts['all'],participating:opts['participating'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Notifications["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/notifications','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoNotificationsPut operation.
     * @callback module:api/DefaultApi~reposOwnerRepoNotificationsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Mark notifications as read in a repository. Marking all notifications in a repository as \"read\" removes them from the default view on GitHub.com.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/NotificationMarkRead} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoNotificationsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoNotificationsPut",value:function reposOwnerRepoNotificationsPut(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoNotificationsPut");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoNotificationsPut");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoNotificationsPut");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/notifications','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/RepoEdit} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repo}
     */},{key:"reposOwnerRepoPatch",value:function reposOwnerRepoPatch(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoPatch");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Repo["default"];return this.apiClient.callApi('/repos/{owner}/{repo}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsCommentsCommentIdDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsCommentsCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} commentId Id of comment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsCommentsCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoPullsCommentsCommentIdDelete",value:function reposOwnerRepoPullsCommentsCommentIdDelete(owner,repo,commentId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsCommentsCommentIdDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsCommentsCommentIdDelete");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling reposOwnerRepoPullsCommentsCommentIdDelete");}var pathParams={owner:owner,repo:repo,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments/{commentId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsCommentsCommentIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullsComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} commentId Id of comment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullsComment}
     */},{key:"reposOwnerRepoPullsCommentsCommentIdGet",value:function reposOwnerRepoPullsCommentsCommentIdGet(owner,repo,commentId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsCommentsCommentIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsCommentsCommentIdGet");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling reposOwnerRepoPullsCommentsCommentIdGet");}var pathParams={owner:owner,repo:repo,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_PullsComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments/{commentId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsCommentsCommentIdPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsCommentsCommentIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullsComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit a comment.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} commentId Id of comment.
     * @param {module:model/CommentBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsCommentsCommentIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullsComment}
     */},{key:"reposOwnerRepoPullsCommentsCommentIdPatch",value:function reposOwnerRepoPullsCommentsCommentIdPatch(owner,repo,commentId,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsCommentsCommentIdPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsCommentsCommentIdPatch");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling reposOwnerRepoPullsCommentsCommentIdPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoPullsCommentsCommentIdPatch");}var pathParams={owner:owner,repo:repo,commentId:commentId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_PullsComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments/{commentId}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsCommentsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List comments in a repository. By default, Review Comments are ordered by ascending ID.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.direction Ignored without 'sort' parameter.
     * @param {module:model/String} opts.sort
     * @param {String} opts.since The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoPullsCommentsGet",value:function reposOwnerRepoPullsCommentsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsCommentsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsCommentsGet");}var pathParams={owner:owner,repo:repo};var queryParams={direction:opts['direction'],sort:opts['sort'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List pull requests.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state String to filter by state. (default to 'open')
     * @param {String} opts.head Filter pulls by head user and branch name in the format of 'user:ref-name'. Example: github:new-script-format.
     * @param {String} opts.base Filter pulls by base branch name. Example - gh-pages.
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoPullsGet",value:function reposOwnerRepoPullsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsGet");}var pathParams={owner:owner,repo:repo};var queryParams={state:opts['state'],head:opts['head'],base:opts['base']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberCommentsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullsComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List comments on a pull request.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullsComment}
     */},{key:"reposOwnerRepoPullsNumberCommentsGet",value:function reposOwnerRepoPullsNumberCommentsGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberCommentsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberCommentsGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberCommentsGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_PullsComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberCommentsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberCommentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullsComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a comment.   #TODO Alternative input ( http://developer.github.com/v3/pulls/comments/ )   description: |     Alternative Input.     Instead of passing commit_id, path, and position you can reply to an     existing Pull Request Comment like this:          body            Required string         in_reply_to            Required number - Comment id to reply to.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {module:model/PullsCommentPost} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberCommentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullsComment}
     */},{key:"reposOwnerRepoPullsNumberCommentsPost",value:function reposOwnerRepoPullsNumberCommentsPost(owner,repo,_number,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberCommentsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberCommentsPost");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberCommentsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoPullsNumberCommentsPost");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_PullsComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}/comments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberCommitsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberCommitsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List commits on a pull request.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberCommitsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoPullsNumberCommitsGet",value:function reposOwnerRepoPullsNumberCommitsGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberCommitsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberCommitsGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberCommitsGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}/commits','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberFilesGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberFilesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List pull requests files.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberFilesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoPullsNumberFilesGet",value:function reposOwnerRepoPullsNumberFilesGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberFilesGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberFilesGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberFilesGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}/files','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single pull request.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullRequest}
     */},{key:"reposOwnerRepoPullsNumberGet",value:function reposOwnerRepoPullsNumberGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_PullRequest["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberMergeGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberMergeGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get if a pull request has been merged.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberMergeGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoPullsNumberMergeGet",value:function reposOwnerRepoPullsNumberMergeGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberMergeGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberMergeGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberMergeGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}/merge','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberMergePut operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberMergePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Merge} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Merge a pull request (Merge Button's)
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {module:model/MergePullBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberMergePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Merge}
     */},{key:"reposOwnerRepoPullsNumberMergePut",value:function reposOwnerRepoPullsNumberMergePut(owner,repo,_number,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberMergePut");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberMergePut");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberMergePut");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoPullsNumberMergePut");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Merge["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}/merge','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a pull request.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {module:model/PullUpdate} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repo}
     */},{key:"reposOwnerRepoPullsNumberPatch",value:function reposOwnerRepoPullsNumberPatch(owner,repo,_number,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberPatch");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoPullsNumberPatch");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Repo["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberReviewsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberReviewsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullsComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List reviews on a pull request.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberReviewsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullsComment}
     */},{key:"reposOwnerRepoPullsNumberReviewsGet",value:function reposOwnerRepoPullsNumberReviewsGet(owner,repo,_number,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberReviewsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberReviewsGet");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberReviewsGet");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_PullsComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}/reviews','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsNumberReviewsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsNumberReviewsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullsComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a comment.   #TODO Alternative input ( http://developer.github.com/v3/pulls/reviews/ )   description: |     Alternative Input.     Instead of passing commit_id, path, and position you can reply to an     existing Pull Request Comment like this:          body            Required string         in_reply_to            Required number - Comment id to reply to.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Number} _number Id of pull.
     * @param {module:model/PullsCommentPost} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsNumberReviewsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullsComment}
     */},{key:"reposOwnerRepoPullsNumberReviewsPost",value:function reposOwnerRepoPullsNumberReviewsPost(owner,repo,_number,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsNumberReviewsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsNumberReviewsPost");}// verify the required parameter '_number' is set
if(_number===undefined||_number===null){throw new Error("Missing the required parameter '_number' when calling reposOwnerRepoPullsNumberReviewsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoPullsNumberReviewsPost");}var pathParams={owner:owner,repo:repo,number:_number};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_PullsComment["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls/{number}/reviews','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoPullsPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoPullsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a pull request.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/PullsPost} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoPullsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoPullsPost",value:function reposOwnerRepoPullsPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoPullsPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoPullsPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoPullsPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/pulls','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReadmeGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReadmeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContentsPath} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the README. This method returns the preferred README for a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.ref The String name of the Commit/Branch/Tag. Defaults to master.
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReadmeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContentsPath}
     */},{key:"reposOwnerRepoReadmeGet",value:function reposOwnerRepoReadmeGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReadmeGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReadmeGet");}var pathParams={owner:owner,repo:repo};var queryParams={ref:opts['ref']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_ContentsPath["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/readme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReleasesAssetsIdDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReleasesAssetsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a release asset
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReleasesAssetsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoReleasesAssetsIdDelete",value:function reposOwnerRepoReleasesAssetsIdDelete(owner,repo,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReleasesAssetsIdDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReleasesAssetsIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling reposOwnerRepoReleasesAssetsIdDelete");}var pathParams={owner:owner,repo:repo,id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/releases/assets/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReleasesAssetsIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReleasesAssetsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single release asset
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReleasesAssetsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Asset}
     */},{key:"reposOwnerRepoReleasesAssetsIdGet",value:function reposOwnerRepoReleasesAssetsIdGet(owner,repo,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReleasesAssetsIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReleasesAssetsIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling reposOwnerRepoReleasesAssetsIdGet");}var pathParams={owner:owner,repo:repo,id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Asset["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/releases/assets/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReleasesAssetsIdPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReleasesAssetsIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Asset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit a release asset Users with push access to the repository can edit a release asset.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} id
     * @param {module:model/AssetPatch} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReleasesAssetsIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Asset}
     */},{key:"reposOwnerRepoReleasesAssetsIdPatch",value:function reposOwnerRepoReleasesAssetsIdPatch(owner,repo,id,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReleasesAssetsIdPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReleasesAssetsIdPatch");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling reposOwnerRepoReleasesAssetsIdPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoReleasesAssetsIdPatch");}var pathParams={owner:owner,repo:repo,id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Asset["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/releases/assets/{id}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReleasesGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReleasesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReleasesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoReleasesGet",value:function reposOwnerRepoReleasesGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReleasesGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReleasesGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/releases','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReleasesIdAssetsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReleasesIdAssetsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Asset>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List assets for a release
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReleasesIdAssetsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Asset>}
     */},{key:"reposOwnerRepoReleasesIdAssetsGet",value:function reposOwnerRepoReleasesIdAssetsGet(owner,repo,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReleasesIdAssetsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReleasesIdAssetsGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling reposOwnerRepoReleasesIdAssetsGet");}var pathParams={owner:owner,repo:repo,id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Asset["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/releases/{id}/assets','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReleasesIdDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReleasesIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Users with push access to the repository can delete a release.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReleasesIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoReleasesIdDelete",value:function reposOwnerRepoReleasesIdDelete(owner,repo,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReleasesIdDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReleasesIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling reposOwnerRepoReleasesIdDelete");}var pathParams={owner:owner,repo:repo,id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/releases/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReleasesIdGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReleasesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single release
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReleasesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */},{key:"reposOwnerRepoReleasesIdGet",value:function reposOwnerRepoReleasesIdGet(owner,repo,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReleasesIdGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReleasesIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling reposOwnerRepoReleasesIdGet");}var pathParams={owner:owner,repo:repo,id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Release["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/releases/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReleasesIdPatch operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReleasesIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Users with push access to the repository can edit a release
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} id
     * @param {module:model/ReleaseCreate} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReleasesIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */},{key:"reposOwnerRepoReleasesIdPatch",value:function reposOwnerRepoReleasesIdPatch(owner,repo,id,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReleasesIdPatch");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReleasesIdPatch");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling reposOwnerRepoReleasesIdPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoReleasesIdPatch");}var pathParams={owner:owner,repo:repo,id:id};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Release["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/releases/{id}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoReleasesPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoReleasesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a release Users with push access to the repository can create a release.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/ReleaseCreate} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoReleasesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */},{key:"reposOwnerRepoReleasesPost",value:function reposOwnerRepoReleasesPost(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoReleasesPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoReleasesPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoReleasesPost");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Release["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/releases','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoStargazersGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoStargazersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List Stargazers.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoStargazersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"reposOwnerRepoStargazersGet",value:function reposOwnerRepoStargazersGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoStargazersGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoStargazersGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/stargazers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoStatsCodeFrequencyGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoStatsCodeFrequencyGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Number>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the number of additions and deletions per week. Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoStatsCodeFrequencyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Number>}
     */},{key:"reposOwnerRepoStatsCodeFrequencyGet",value:function reposOwnerRepoStatsCodeFrequencyGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoStatsCodeFrequencyGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoStatsCodeFrequencyGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=['Number'];return this.apiClient.callApi('/repos/{owner}/{repo}/stats/code_frequency','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoStatsCommitActivityGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoStatsCommitActivityGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the last year of commit activity data. Returns the last year of commit activity grouped by week. The days array is a group of commits per day, starting on Sunday.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoStatsCommitActivityGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoStatsCommitActivityGet",value:function reposOwnerRepoStatsCommitActivityGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoStatsCommitActivityGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoStatsCommitActivityGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/stats/commit_activity','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoStatsContributorsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoStatsContributorsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get contributors list with additions, deletions, and commit counts.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoStatsContributorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoStatsContributorsGet",value:function reposOwnerRepoStatsContributorsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoStatsContributorsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoStatsContributorsGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/stats/contributors','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoStatsParticipationGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoStatsParticipationGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParticipationStats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the weekly commit count for the repo owner and everyone else.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoStatsParticipationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParticipationStats}
     */},{key:"reposOwnerRepoStatsParticipationGet",value:function reposOwnerRepoStatsParticipationGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoStatsParticipationGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoStatsParticipationGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_ParticipationStats["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/stats/participation','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoStatsPunchCardGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoStatsPunchCardGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Number>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the number of commits per hour in each day. Each array contains the day number, hour number, and number of commits 0-6 Sunday - Saturday 0-23 Hour of day Number of commits  For example, [2, 14, 25] indicates that there were 25 total commits, during the 2.00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoStatsPunchCardGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Number>}
     */},{key:"reposOwnerRepoStatsPunchCardGet",value:function reposOwnerRepoStatsPunchCardGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoStatsPunchCardGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoStatsPunchCardGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=['Number'];return this.apiClient.callApi('/repos/{owner}/{repo}/stats/punch_card','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoStatusesRefGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoStatusesRefGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List Statuses for a specific Ref.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} ref Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoStatusesRefGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoStatusesRefGet",value:function reposOwnerRepoStatusesRefGet(owner,repo,ref,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoStatusesRefGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoStatusesRefGet");}// verify the required parameter 'ref' is set
if(ref===undefined||ref===null){throw new Error("Missing the required parameter 'ref' when calling reposOwnerRepoStatusesRefGet");}var pathParams={owner:owner,repo:repo,ref:ref};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/statuses/{ref}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoStatusesRefPost operation.
     * @callback module:api/DefaultApi~reposOwnerRepoStatusesRefPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a Status.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {String} ref Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
     * @param {module:model/HeadBranch} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoStatusesRefPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoStatusesRefPost",value:function reposOwnerRepoStatusesRefPost(owner,repo,ref,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoStatusesRefPost");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoStatusesRefPost");}// verify the required parameter 'ref' is set
if(ref===undefined||ref===null){throw new Error("Missing the required parameter 'ref' when calling reposOwnerRepoStatusesRefPost");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoStatusesRefPost");}var pathParams={owner:owner,repo:repo,ref:ref};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/statuses/{ref}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoSubscribersGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoSubscribersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List watchers.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoSubscribersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"reposOwnerRepoSubscribersGet",value:function reposOwnerRepoSubscribersGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoSubscribersGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoSubscribersGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/subscribers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoSubscriptionDelete operation.
     * @callback module:api/DefaultApi~reposOwnerRepoSubscriptionDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a Repository Subscription.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoSubscriptionDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"reposOwnerRepoSubscriptionDelete",value:function reposOwnerRepoSubscriptionDelete(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoSubscriptionDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoSubscriptionDelete");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/repos/{owner}/{repo}/subscription','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoSubscriptionGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoSubscriptionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a Repository Subscription.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoSubscriptionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */},{key:"reposOwnerRepoSubscriptionGet",value:function reposOwnerRepoSubscriptionGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoSubscriptionGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoSubscriptionGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Subscription["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/subscription','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoSubscriptionPut operation.
     * @callback module:api/DefaultApi~reposOwnerRepoSubscriptionPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set a Repository Subscription
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {module:model/SubscriptionBody} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoSubscriptionPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */},{key:"reposOwnerRepoSubscriptionPut",value:function reposOwnerRepoSubscriptionPut(owner,repo,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoSubscriptionPut");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoSubscriptionPut");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling reposOwnerRepoSubscriptionPut");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Subscription["default"];return this.apiClient.callApi('/repos/{owner}/{repo}/subscription','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoTagsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoTagsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Tag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get list of tags.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoTagsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Tag>}
     */},{key:"reposOwnerRepoTagsGet",value:function reposOwnerRepoTagsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoTagsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoTagsGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Tag["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/tags','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoTeamsGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get list of teams
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"reposOwnerRepoTeamsGet",value:function reposOwnerRepoTeamsGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoTeamsGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoTeamsGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/repos/{owner}/{repo}/teams','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the reposOwnerRepoWatchersGet operation.
     * @callback module:api/DefaultApi~reposOwnerRepoWatchersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List Stargazers. New implementation.
     * @param {String} owner Name of repository owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~reposOwnerRepoWatchersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"reposOwnerRepoWatchersGet",value:function reposOwnerRepoWatchersGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling reposOwnerRepoWatchersGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling reposOwnerRepoWatchersGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/repos/{owner}/{repo}/watchers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the repositoriesGet operation.
     * @callback module:api/DefaultApi~repositoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List all public repositories. This provides a dump of every public repository, in the order that they were created. Note: Pagination is powered exclusively by the since parameter. is the Link header to get the URL for the next page of repositories.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {String} opts.since Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * @param {module:api/DefaultApi~repositoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repo>}
     */},{key:"repositoriesGet",value:function repositoriesGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Repo["default"]];return this.apiClient.callApi('/repositories','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the searchCodeGet operation.
     * @callback module:api/DefaultApi~searchCodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Search code.
     * @param {String} q The search terms. This can be any combination of the supported code search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the file contents, the file path, or both. 'Languages' Searches code based on the language it's written in. 'Forks' Filters repositories based on the number of forks, and/or whether code from forked repositories should be included in the results at all. 'Size' Finds files that match a certain size (in bytes). 'Path' Specifies the path that the resulting file must be at. 'Extension' Matches files with a certain extension. 'Users' or 'Repositories' Limits searches to a specific user or repository.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.order The sort field. if sort param is provided. Can be either asc or desc. (default to 'desc')
     * @param {module:model/String} opts.sort Can only be 'indexed', which indicates how recently a file has been indexed by the GitHub search infrastructure. If not provided, results are sorted by best match.
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~searchCodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchCode}
     */},{key:"searchCodeGet",value:function searchCodeGet(q,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'q' is set
if(q===undefined||q===null){throw new Error("Missing the required parameter 'q' when calling searchCodeGet");}var pathParams={};var queryParams={order:opts['order'],q:q,sort:opts['sort'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_SearchCode["default"];return this.apiClient.callApi('/search/code','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the searchIssuesGet operation.
     * @callback module:api/DefaultApi~searchIssuesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchIssues} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Find issues by state and keyword. (This method returns up to 100 results per page.)
     * @param {String} q The q search term can also contain any combination of the supported issue search qualifiers:
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.order The sort field. if sort param is provided. Can be either asc or desc. (default to 'desc')
     * @param {module:model/String} opts.sort The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~searchIssuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchIssues}
     */},{key:"searchIssuesGet",value:function searchIssuesGet(q,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'q' is set
if(q===undefined||q===null){throw new Error("Missing the required parameter 'q' when calling searchIssuesGet");}var pathParams={};var queryParams={order:opts['order'],q:q,sort:opts['sort'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_SearchIssues["default"];return this.apiClient.callApi('/search/issues','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the searchRepositoriesGet operation.
     * @callback module:api/DefaultApi~searchRepositoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchRepositories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Search repositories.
     * @param {String} q The search terms. This can be any combination of the supported repository search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the repository name, description, readme, or any combination of these. 'Size' Finds repositories that match a certain size (in kilobytes). 'Forks' Filters repositories based on the number of forks, and/or whether forked repositories should be included in the results at all. 'Created' and 'Last Updated' Filters repositories based on times of creation, or when they were last updated. 'Users or Repositories' Limits searches to a specific user or repository. 'Languages' Searches repositories based on the language they are written in. 'Stars' Searches repositories based on the number of stars.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.order The sort field. if sort param is provided. Can be either asc or desc. (default to 'desc')
     * @param {module:model/String} opts.sort If not provided, results are sorted by best match.
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~searchRepositoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchRepositories}
     */},{key:"searchRepositoriesGet",value:function searchRepositoriesGet(q,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'q' is set
if(q===undefined||q===null){throw new Error("Missing the required parameter 'q' when calling searchRepositoriesGet");}var pathParams={};var queryParams={order:opts['order'],q:q,sort:opts['sort'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_SearchRepositories["default"];return this.apiClient.callApi('/search/repositories','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the searchUsersGet operation.
     * @callback module:api/DefaultApi~searchUsersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Search users.
     * @param {String} q The search terms. This can be any combination of the supported user search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the username, public email, full name, location, or any combination of these. 'Repository count' Filters users based on the number of repositories they have. 'Location' Filter users by the location indicated in their profile. 'Language' Search for users that have repositories that match a certain language. 'Created' Filter users based on when they joined. 'Followers' Filter users based on the number of followers they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.order The sort field. if sort param is provided. Can be either asc or desc. (default to 'desc')
     * @param {module:model/String} opts.sort If not provided, results are sorted by best match.
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~searchUsersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchUsers}
     */},{key:"searchUsersGet",value:function searchUsersGet(q,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'q' is set
if(q===undefined||q===null){throw new Error("Missing the required parameter 'q' when calling searchUsersGet");}var pathParams={};var queryParams={order:opts['order'],q:q,sort:opts['sort'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_SearchUsers["default"];return this.apiClient.callApi('/search/users','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdDelete operation.
     * @callback module:api/DefaultApi~teamsTeamIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete team. In order to delete a team, the authenticated user must be an owner of the org that the team is associated with.
     * @param {Number} teamId Id of team.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~teamsTeamIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"teamsTeamIdDelete",value:function teamsTeamIdDelete(teamId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdDelete");}var pathParams={teamId:teamId};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/teams/{teamId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdGet operation.
     * @callback module:api/DefaultApi~teamsTeamIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get team.
     * @param {Number} teamId Id of team.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~teamsTeamIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */},{key:"teamsTeamIdGet",value:function teamsTeamIdGet(teamId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdGet");}var pathParams={teamId:teamId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_Team["default"];return this.apiClient.callApi('/teams/{teamId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdMembersGet operation.
     * @callback module:api/DefaultApi~teamsTeamIdMembersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List team members. In order to list members in a team, the authenticated user must be a member of the team.
     * @param {Number} teamId Id of team.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~teamsTeamIdMembersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"teamsTeamIdMembersGet",value:function teamsTeamIdMembersGet(teamId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdMembersGet");}var pathParams={teamId:teamId};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/teams/{teamId}/members','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdMembersUsernameDelete operation.
     * @callback module:api/DefaultApi~teamsTeamIdMembersUsernameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * The \"Remove team member\" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.  Remove team member. In order to remove a user from a team, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. NOTE This does not delete the user, it just remove them from the team.
     * @param {Number} teamId Id of team.
     * @param {String} username Name of a member.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~teamsTeamIdMembersUsernameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"teamsTeamIdMembersUsernameDelete",value:function teamsTeamIdMembersUsernameDelete(teamId,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdMembersUsernameDelete");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling teamsTeamIdMembersUsernameDelete");}var pathParams={teamId:teamId,username:username};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/teams/{teamId}/members/{username}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdMembersUsernameGet operation.
     * @callback module:api/DefaultApi~teamsTeamIdMembersUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * The \"Get team member\" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.  Get team member. In order to get if a user is a member of a team, the authenticated user mus be a member of the team.
     * @param {Number} teamId Id of team.
     * @param {String} username Name of a member.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~teamsTeamIdMembersUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"teamsTeamIdMembersUsernameGet",value:function teamsTeamIdMembersUsernameGet(teamId,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdMembersUsernameGet");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling teamsTeamIdMembersUsernameGet");}var pathParams={teamId:teamId,username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/teams/{teamId}/members/{username}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdMembersUsernamePut operation.
     * @callback module:api/DefaultApi~teamsTeamIdMembersUsernamePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.  Add team member. In order to add a user to a team, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with.
     * @param {Number} teamId Id of team.
     * @param {String} username Name of a member.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~teamsTeamIdMembersUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"teamsTeamIdMembersUsernamePut",value:function teamsTeamIdMembersUsernamePut(teamId,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdMembersUsernamePut");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling teamsTeamIdMembersUsernamePut");}var pathParams={teamId:teamId,username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=null;return this.apiClient.callApi('/teams/{teamId}/members/{username}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdMembershipsUsernameDelete operation.
     * @callback module:api/DefaultApi~teamsTeamIdMembershipsUsernameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove team membership. In order to remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.
     * @param {Number} teamId Id of team.
     * @param {String} username Name of a member.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~teamsTeamIdMembershipsUsernameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"teamsTeamIdMembershipsUsernameDelete",value:function teamsTeamIdMembershipsUsernameDelete(teamId,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdMembershipsUsernameDelete");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling teamsTeamIdMembershipsUsernameDelete");}var pathParams={teamId:teamId,username:username};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/teams/{teamId}/memberships/{username}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdMembershipsUsernameGet operation.
     * @callback module:api/DefaultApi~teamsTeamIdMembershipsUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get team membership. In order to get a user's membership with a team, the authenticated user must be a member of the team or an owner of the team's organization.
     * @param {Number} teamId Id of team.
     * @param {String} username Name of a member.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~teamsTeamIdMembershipsUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamMembership}
     */},{key:"teamsTeamIdMembershipsUsernameGet",value:function teamsTeamIdMembershipsUsernameGet(teamId,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdMembershipsUsernameGet");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling teamsTeamIdMembershipsUsernameGet");}var pathParams={teamId:teamId,username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_TeamMembership["default"];return this.apiClient.callApi('/teams/{teamId}/memberships/{username}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdMembershipsUsernamePut operation.
     * @callback module:api/DefaultApi~teamsTeamIdMembershipsUsernamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add team membership. In order to add a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with.  If the user is already a part of the team's organization (meaning they're on at least one other team in the organization), this endpoint will add the user to the team.  If the user is completely unaffiliated with the team's organization (meaning they're on none of the organization's teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the 'pending' state until the user accepts the invitation, at which point the membership will transition to the 'active' state and the user will be added as a member of the team.
     * @param {Number} teamId Id of team.
     * @param {String} username Name of a member.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~teamsTeamIdMembershipsUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TeamMembership}
     */},{key:"teamsTeamIdMembershipsUsernamePut",value:function teamsTeamIdMembershipsUsernamePut(teamId,username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdMembershipsUsernamePut");}// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling teamsTeamIdMembershipsUsernamePut");}var pathParams={teamId:teamId,username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_TeamMembership["default"];return this.apiClient.callApi('/teams/{teamId}/memberships/{username}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdPatch operation.
     * @callback module:api/DefaultApi~teamsTeamIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edit team. In order to edit a team, the authenticated user must be an owner of the org that the team is associated with.
     * @param {Number} teamId Id of team.
     * @param {module:model/EditTeam} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~teamsTeamIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */},{key:"teamsTeamIdPatch",value:function teamsTeamIdPatch(teamId,body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdPatch");}// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling teamsTeamIdPatch");}var pathParams={teamId:teamId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Team["default"];return this.apiClient.callApi('/teams/{teamId}','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdReposGet operation.
     * @callback module:api/DefaultApi~teamsTeamIdReposGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List team repos
     * @param {Number} teamId Id of team.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~teamsTeamIdReposGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repo>}
     */},{key:"teamsTeamIdReposGet",value:function teamsTeamIdReposGet(teamId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdReposGet");}var pathParams={teamId:teamId};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Repo["default"]];return this.apiClient.callApi('/teams/{teamId}/repos','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdReposOwnerRepoDelete operation.
     * @callback module:api/DefaultApi~teamsTeamIdReposOwnerRepoDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.
     * @param {Number} teamId Id of team.
     * @param {String} owner Name of a repository owner.
     * @param {String} repo Name of a repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~teamsTeamIdReposOwnerRepoDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"teamsTeamIdReposOwnerRepoDelete",value:function teamsTeamIdReposOwnerRepoDelete(teamId,owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdReposOwnerRepoDelete");}// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling teamsTeamIdReposOwnerRepoDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling teamsTeamIdReposOwnerRepoDelete");}var pathParams={teamId:teamId,owner:owner,repo:repo};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/teams/{teamId}/repos/{owner}/{repo}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdReposOwnerRepoGet operation.
     * @callback module:api/DefaultApi~teamsTeamIdReposOwnerRepoGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check if a team manages a repository
     * @param {Number} teamId Id of team.
     * @param {String} owner Name of a repository owner.
     * @param {String} repo Name of a repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~teamsTeamIdReposOwnerRepoGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"teamsTeamIdReposOwnerRepoGet",value:function teamsTeamIdReposOwnerRepoGet(teamId,owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdReposOwnerRepoGet");}// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling teamsTeamIdReposOwnerRepoGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling teamsTeamIdReposOwnerRepoGet");}var pathParams={teamId:teamId,owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/teams/{teamId}/repos/{owner}/{repo}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the teamsTeamIdReposOwnerRepoPut operation.
     * @callback module:api/DefaultApi~teamsTeamIdReposOwnerRepoPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.
     * @param {Number} teamId Id of team.
     * @param {String} owner Name of a organization.
     * @param {String} repo Name of a repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~teamsTeamIdReposOwnerRepoPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"teamsTeamIdReposOwnerRepoPut",value:function teamsTeamIdReposOwnerRepoPut(teamId,owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'teamId' is set
if(teamId===undefined||teamId===null){throw new Error("Missing the required parameter 'teamId' when calling teamsTeamIdReposOwnerRepoPut");}// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling teamsTeamIdReposOwnerRepoPut");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling teamsTeamIdReposOwnerRepoPut");}var pathParams={teamId:teamId,owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/teams/{teamId}/repos/{owner}/{repo}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userEmailsDelete operation.
     * @callback module:api/DefaultApi~userEmailsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete email address(es). You can include a single email address or an array of addresses.
     * @param {Array.<String>} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~userEmailsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userEmailsDelete",value:function userEmailsDelete(body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling userEmailsDelete");}var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/emails','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userEmailsGet operation.
     * @callback module:api/DefaultApi~userEmailsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List email addresses for a user. In the final version of the API, this method will return an array of hashes with extended information for each email address indicating if the address has been verified and if it's primary email address for GitHub. Until API v3 is finalized, use the application/vnd.github.v3 media type to get other response format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userEmailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */},{key:"userEmailsGet",value:function userEmailsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/vnd.github.v3'];var returnType=['String'];return this.apiClient.callApi('/user/emails','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userEmailsPost operation.
     * @callback module:api/DefaultApi~userEmailsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add email address(es). You can post a single email address or an array of addresses.
     * @param {Array.<String>} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userEmailsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userEmailsPost",value:function userEmailsPost(body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling userEmailsPost");}var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/emails','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userFollowersGet operation.
     * @callback module:api/DefaultApi~userFollowersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List the authenticated user's followers
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~userFollowersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"userFollowersGet",value:function userFollowersGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/user/followers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userFollowingGet operation.
     * @callback module:api/DefaultApi~userFollowingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List who the authenticated user is following.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~userFollowingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"userFollowingGet",value:function userFollowingGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/user/following','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userFollowingUsernameDelete operation.
     * @callback module:api/DefaultApi~userFollowingUsernameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unfollow a user. Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~userFollowingUsernameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userFollowingUsernameDelete",value:function userFollowingUsernameDelete(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling userFollowingUsernameDelete");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/following/{username}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userFollowingUsernameGet operation.
     * @callback module:api/DefaultApi~userFollowingUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check if you are following a user.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userFollowingUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userFollowingUsernameGet",value:function userFollowingUsernameGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling userFollowingUsernameGet");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/following/{username}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userFollowingUsernamePut operation.
     * @callback module:api/DefaultApi~userFollowingUsernamePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Follow a user. Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userFollowingUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userFollowingUsernamePut",value:function userFollowingUsernamePut(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling userFollowingUsernamePut");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/following/{username}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userGet operation.
     * @callback module:api/DefaultApi~userGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~userGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */},{key:"userGet",value:function userGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_User["default"];return this.apiClient.callApi('/user','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userIssuesGet operation.
     * @callback module:api/DefaultApi~userIssuesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List issues. List all issues across owned and member repositories for the authenticated user.
     * @param {module:model/String} filter Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see
     * @param {module:model/String} state
     * @param {String} labels String list of comma separated Label names. Example - bug,ui,@high.
     * @param {module:model/String} sort
     * @param {module:model/String} direction
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {String} opts.since Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * @param {module:api/DefaultApi~userIssuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"userIssuesGet",value:function userIssuesGet(filter,state,labels,sort,direction,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'filter' is set
if(filter===undefined||filter===null){throw new Error("Missing the required parameter 'filter' when calling userIssuesGet");}// verify the required parameter 'state' is set
if(state===undefined||state===null){throw new Error("Missing the required parameter 'state' when calling userIssuesGet");}// verify the required parameter 'labels' is set
if(labels===undefined||labels===null){throw new Error("Missing the required parameter 'labels' when calling userIssuesGet");}// verify the required parameter 'sort' is set
if(sort===undefined||sort===null){throw new Error("Missing the required parameter 'sort' when calling userIssuesGet");}// verify the required parameter 'direction' is set
if(direction===undefined||direction===null){throw new Error("Missing the required parameter 'direction' when calling userIssuesGet");}var pathParams={};var queryParams={filter:filter,state:state,labels:labels,sort:sort,direction:direction,per_page:opts['perPage'],page:opts['page'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/user/issues','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userKeysGet operation.
     * @callback module:api/DefaultApi~userKeysGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List your public keys. Lists the current user's keys. Management of public keys via the API requires that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~userKeysGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"userKeysGet",value:function userKeysGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/user/keys','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userKeysKeyIdDelete operation.
     * @callback module:api/DefaultApi~userKeysKeyIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
     * @param {Number} keyId ID of key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~userKeysKeyIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userKeysKeyIdDelete",value:function userKeysKeyIdDelete(keyId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling userKeysKeyIdDelete");}var pathParams={keyId:keyId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/keys/{keyId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userKeysKeyIdGet operation.
     * @callback module:api/DefaultApi~userKeysKeyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserKeysKeyId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single public key.
     * @param {Number} keyId ID of key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userKeysKeyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserKeysKeyId}
     */},{key:"userKeysKeyIdGet",value:function userKeysKeyIdGet(keyId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling userKeysKeyIdGet");}var pathParams={keyId:keyId};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_UserKeysKeyId["default"];return this.apiClient.callApi('/user/keys/{keyId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userKeysPost operation.
     * @callback module:api/DefaultApi~userKeysPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserKeysKeyId} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a public key.
     * @param {module:model/UserKeysPost} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userKeysPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserKeysKeyId}
     */},{key:"userKeysPost",value:function userKeysPost(body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling userKeysPost");}var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_UserKeysKeyId["default"];return this.apiClient.callApi('/user/keys','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userOrgsGet operation.
     * @callback module:api/DefaultApi~userOrgsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List public and private organizations for the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~userOrgsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"userOrgsGet",value:function userOrgsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/user/orgs','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userPatch operation.
     * @callback module:api/DefaultApi~userPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update the authenticated user.
     * @param {module:model/UserUpdate} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */},{key:"userPatch",value:function userPatch(body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling userPatch");}var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_User["default"];return this.apiClient.callApi('/user','PATCH',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userReposGet operation.
     * @callback module:api/DefaultApi~userReposGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List repositories for the authenticated user. Note that this does not include repositories owned by organizations which the user can access. You can lis user organizations and list organization repositories separately.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type  (default to 'all')
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~userReposGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repo>}
     */},{key:"userReposGet",value:function userReposGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={type:opts['type'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Repo["default"]];return this.apiClient.callApi('/user/repos','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userReposPost operation.
     * @callback module:api/DefaultApi~userReposPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new repository for the authenticated user. OAuth users must supply repo scope.
     * @param {module:model/PostRepo} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userReposPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repo>}
     */},{key:"userReposPost",value:function userReposPost(body,opts,callback){opts=opts||{};var postBody=body;// verify the required parameter 'body' is set
if(body===undefined||body===null){throw new Error("Missing the required parameter 'body' when calling userReposPost");}var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=[_Repo["default"]];return this.apiClient.callApi('/user/repos','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userStarredGet operation.
     * @callback module:api/DefaultApi~userStarredGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List repositories being starred by the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.direction Ignored without 'sort' parameter.
     * @param {module:model/String} opts.sort  (default to 'created')
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userStarredGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"userStarredGet",value:function userStarredGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={direction:opts['direction'],sort:opts['sort']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/user/starred','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userStarredOwnerRepoDelete operation.
     * @callback module:api/DefaultApi~userStarredOwnerRepoDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unstar a repository
     * @param {String} owner Name of a repository owner.
     * @param {String} repo Name of a repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userStarredOwnerRepoDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userStarredOwnerRepoDelete",value:function userStarredOwnerRepoDelete(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling userStarredOwnerRepoDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling userStarredOwnerRepoDelete");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/starred/{owner}/{repo}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userStarredOwnerRepoGet operation.
     * @callback module:api/DefaultApi~userStarredOwnerRepoGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check if you are starring a repository.
     * @param {String} owner Name of a repository owner.
     * @param {String} repo Name of a repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userStarredOwnerRepoGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userStarredOwnerRepoGet",value:function userStarredOwnerRepoGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling userStarredOwnerRepoGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling userStarredOwnerRepoGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/starred/{owner}/{repo}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userStarredOwnerRepoPut operation.
     * @callback module:api/DefaultApi~userStarredOwnerRepoPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Star a repository.
     * @param {String} owner Name of a repository owner.
     * @param {String} repo Name of a repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userStarredOwnerRepoPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userStarredOwnerRepoPut",value:function userStarredOwnerRepoPut(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling userStarredOwnerRepoPut");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling userStarredOwnerRepoPut");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/starred/{owner}/{repo}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userSubscriptionsGet operation.
     * @callback module:api/DefaultApi~userSubscriptionsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List repositories being watched by the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userSubscriptionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repo>}
     */},{key:"userSubscriptionsGet",value:function userSubscriptionsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Repo["default"]];return this.apiClient.callApi('/user/subscriptions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userSubscriptionsOwnerRepoDelete operation.
     * @callback module:api/DefaultApi~userSubscriptionsOwnerRepoDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Stop watching a repository
     * @param {String} owner Name of the owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userSubscriptionsOwnerRepoDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userSubscriptionsOwnerRepoDelete",value:function userSubscriptionsOwnerRepoDelete(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling userSubscriptionsOwnerRepoDelete");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling userSubscriptionsOwnerRepoDelete");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/subscriptions/{owner}/{repo}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userSubscriptionsOwnerRepoGet operation.
     * @callback module:api/DefaultApi~userSubscriptionsOwnerRepoGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check if you are watching a repository.
     * @param {String} owner Name of the owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userSubscriptionsOwnerRepoGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userSubscriptionsOwnerRepoGet",value:function userSubscriptionsOwnerRepoGet(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling userSubscriptionsOwnerRepoGet");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling userSubscriptionsOwnerRepoGet");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/subscriptions/{owner}/{repo}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userSubscriptionsOwnerRepoPut operation.
     * @callback module:api/DefaultApi~userSubscriptionsOwnerRepoPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Watch a repository.
     * @param {String} owner Name of the owner.
     * @param {String} repo Name of repository.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type.
     * @param {module:api/DefaultApi~userSubscriptionsOwnerRepoPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userSubscriptionsOwnerRepoPut",value:function userSubscriptionsOwnerRepoPut(owner,repo,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'owner' is set
if(owner===undefined||owner===null){throw new Error("Missing the required parameter 'owner' when calling userSubscriptionsOwnerRepoPut");}// verify the required parameter 'repo' is set
if(repo===undefined||repo===null){throw new Error("Missing the required parameter 'repo' when calling userSubscriptionsOwnerRepoPut");}var pathParams={owner:owner,repo:repo};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/subscriptions/{owner}/{repo}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userTeamsGet operation.
     * @callback module:api/DefaultApi~userTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~userTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"userTeamsGet",value:function userTeamsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/user/teams','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersGet operation.
     * @callback module:api/DefaultApi~usersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all users. This provides a dump of every user, in the order that they signed up for GitHub. Note: Pagination is powered exclusively by the since parameter. Use the Link header to get the URL for the next page of users.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.since The integer ID of the last user that you've seen.
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"usersGet",value:function usersGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={since:opts['since'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/users','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameEventsGet operation.
     * @callback module:api/DefaultApi~usersUsernameEventsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~usersUsernameEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"usersUsernameEventsGet",value:function usersUsernameEventsGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameEventsGet");}var pathParams={username:username};var queryParams={per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/users/{username}/events','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameEventsOrgsOrgGet operation.
     * @callback module:api/DefaultApi~usersUsernameEventsOrgsOrgGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * This is the user's organization dashboard. You must be authenticated as the user to view this.
     * @param {String} username Name of user.
     * @param {String} org
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameEventsOrgsOrgGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"usersUsernameEventsOrgsOrgGet",value:function usersUsernameEventsOrgsOrgGet(username,org,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameEventsOrgsOrgGet");}// verify the required parameter 'org' is set
if(org===undefined||org===null){throw new Error("Missing the required parameter 'org' when calling usersUsernameEventsOrgsOrgGet");}var pathParams={username:username,org:org};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/users/{username}/events/orgs/{org}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameFollowersGet operation.
     * @callback module:api/DefaultApi~usersUsernameFollowersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List a user's followers
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameFollowersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */},{key:"usersUsernameFollowersGet",value:function usersUsernameFollowersGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameFollowersGet");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_User["default"]];return this.apiClient.callApi('/users/{username}/followers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameFollowingTargetUserGet operation.
     * @callback module:api/DefaultApi~usersUsernameFollowingTargetUserGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Check if one user follows another.
     * @param {String} username Name of user.
     * @param {String} targetUser Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameFollowingTargetUserGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"usersUsernameFollowingTargetUserGet",value:function usersUsernameFollowingTargetUserGet(username,targetUser,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameFollowingTargetUserGet");}// verify the required parameter 'targetUser' is set
if(targetUser===undefined||targetUser===null){throw new Error("Missing the required parameter 'targetUser' when calling usersUsernameFollowingTargetUserGet");}var pathParams={username:username,targetUser:targetUser};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/users/{username}/following/{targetUser}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameGet operation.
     * @callback module:api/DefaultApi~usersUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single user.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */},{key:"usersUsernameGet",value:function usersUsernameGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameGet");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=_User["default"];return this.apiClient.callApi('/users/{username}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameGistsGet operation.
     * @callback module:api/DefaultApi~usersUsernameGistsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List a users gists.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {String} opts.since Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
     * @param {module:api/DefaultApi~usersUsernameGistsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"usersUsernameGistsGet",value:function usersUsernameGistsGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameGistsGet");}var pathParams={username:username};var queryParams={per_page:opts['perPage'],page:opts['page'],since:opts['since']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/users/{username}/gists','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameKeysGet operation.
     * @callback module:api/DefaultApi~usersUsernameKeysGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List public keys for a user. Lists the verified public keys for a user. This is accessible by anyone.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameKeysGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"usersUsernameKeysGet",value:function usersUsernameKeysGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameKeysGet");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/users/{username}/keys','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameOrgsGet operation.
     * @callback module:api/DefaultApi~usersUsernameOrgsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List all public organizations for a user.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameOrgsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */},{key:"usersUsernameOrgsGet",value:function usersUsernameOrgsGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameOrgsGet");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[Object];return this.apiClient.callApi('/users/{username}/orgs','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameReceivedEventsGet operation.
     * @callback module:api/DefaultApi~usersUsernameReceivedEventsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * These are events that you'll only see public events.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameReceivedEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"usersUsernameReceivedEventsGet",value:function usersUsernameReceivedEventsGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameReceivedEventsGet");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/users/{username}/received_events','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameReceivedEventsPublicGet operation.
     * @callback module:api/DefaultApi~usersUsernameReceivedEventsPublicGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * List public events that a user has received
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameReceivedEventsPublicGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"usersUsernameReceivedEventsPublicGet",value:function usersUsernameReceivedEventsPublicGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameReceivedEventsPublicGet");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/users/{username}/received_events/public','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameReposGet operation.
     * @callback module:api/DefaultApi~usersUsernameReposGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Repo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List public repositories for the specified user.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type  (default to 'all')
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {Number} opts.perPage No of result showed per request. (default to 30)
     * @param {Number} opts.page Page number at which you want the search result to come from. (default to 1)
     * @param {module:api/DefaultApi~usersUsernameReposGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Repo>}
     */},{key:"usersUsernameReposGet",value:function usersUsernameReposGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameReposGet");}var pathParams={username:username};var queryParams={type:opts['type'],per_page:opts['perPage'],page:opts['page']};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=['application/json'];var returnType=[_Repo["default"]];return this.apiClient.callApi('/users/{username}/repos','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameStarredGet operation.
     * @callback module:api/DefaultApi~usersUsernameStarredGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * List repositories being starred by a user.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameStarredGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"usersUsernameStarredGet",value:function usersUsernameStarredGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameStarredGet");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/users/{username}/starred','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the usersUsernameSubscriptionsGet operation.
     * @callback module:api/DefaultApi~usersUsernameSubscriptionsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * List repositories being watched by a user.
     * @param {String} username Name of user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accept Is used to set specified media type (default to 'application/vnd.github.v3+json')
     * @param {module:api/DefaultApi~usersUsernameSubscriptionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"usersUsernameSubscriptionsGet",value:function usersUsernameSubscriptionsGet(username,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'username' is set
if(username===undefined||username===null){throw new Error("Missing the required parameter 'username' when calling usersUsernameSubscriptionsGet");}var pathParams={username:username};var queryParams={};var headerParams={Accept:opts['accept']};var formParams={};var authNames=['api_key'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/users/{username}/subscriptions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}}]);return DefaultApi;}();exports["default"]=DefaultApi;