"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _ApiClient=_interopRequireDefault(require("../ApiClient"));var _AccessRequester=_interopRequireDefault(require("../model/AccessRequester"));var _AwardEmoji=_interopRequireDefault(require("../model/AwardEmoji"));var _BasicProjectDetails=_interopRequireDefault(require("../model/BasicProjectDetails"));var _Board=_interopRequireDefault(require("../model/Board"));var _Build=_interopRequireDefault(require("../model/Build"));var _CommitNote=_interopRequireDefault(require("../model/CommitNote"));var _CommitStatus=_interopRequireDefault(require("../model/CommitStatus"));var _Compare=_interopRequireDefault(require("../model/Compare"));var _Contributor=_interopRequireDefault(require("../model/Contributor"));var _Deployment=_interopRequireDefault(require("../model/Deployment"));var _Environment=_interopRequireDefault(require("../model/Environment"));var _Event=_interopRequireDefault(require("../model/Event"));var _Issue=_interopRequireDefault(require("../model/Issue"));var _Label=_interopRequireDefault(require("../model/Label"));var _MRNote=_interopRequireDefault(require("../model/MRNote"));var _Member=_interopRequireDefault(require("../model/Member"));var _MergeRequest=_interopRequireDefault(require("../model/MergeRequest"));var _MergeRequestChanges=_interopRequireDefault(require("../model/MergeRequestChanges"));var _MergeRequestDiff=_interopRequireDefault(require("../model/MergeRequestDiff"));var _MergeRequestDiffFull=_interopRequireDefault(require("../model/MergeRequestDiffFull"));var _Milestone=_interopRequireDefault(require("../model/Milestone"));var _Note=_interopRequireDefault(require("../model/Note"));var _NotificationSetting=_interopRequireDefault(require("../model/NotificationSetting"));var _Pipeline=_interopRequireDefault(require("../model/Pipeline"));var _Project=_interopRequireDefault(require("../model/Project"));var _ProjectGroupLink=_interopRequireDefault(require("../model/ProjectGroupLink"));var _ProjectHook=_interopRequireDefault(require("../model/ProjectHook"));var _ProjectService=_interopRequireDefault(require("../model/ProjectService"));var _ProjectSnippet=_interopRequireDefault(require("../model/ProjectSnippet"));var _ProjectWithAccess=_interopRequireDefault(require("../model/ProjectWithAccess"));var _Release=_interopRequireDefault(require("../model/Release"));var _RepoBranch=_interopRequireDefault(require("../model/RepoBranch"));var _RepoCommit=_interopRequireDefault(require("../model/RepoCommit"));var _RepoCommitDetail=_interopRequireDefault(require("../model/RepoCommitDetail"));var _RepoTag=_interopRequireDefault(require("../model/RepoTag"));var _RepoTreeObject=_interopRequireDefault(require("../model/RepoTreeObject"));var _Runner=_interopRequireDefault(require("../model/Runner"));var _SSHKey=_interopRequireDefault(require("../model/SSHKey"));var _Todo=_interopRequireDefault(require("../model/Todo"));var _Trigger=_interopRequireDefault(require("../model/Trigger"));var _TriggerRequest=_interopRequireDefault(require("../model/TriggerRequest"));var _UNKNOWN_BASE_TYPE=_interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));var _UserBasic=_interopRequireDefault(require("../model/UserBasic"));var _Variable=_interopRequireDefault(require("../model/Variable"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
* Projects service.
* @module api/ProjectsApi
* @version 1.0.0
*/var ProjectsApi=/*#__PURE__*/function(){/**
    * Constructs a new ProjectsApi. 
    * @alias module:api/ProjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */function ProjectsApi(apiClient){_classCallCheck(this,ProjectsApi);this.apiClient=apiClient||_ApiClient["default"].instance;}/**
     * Callback function to receive the result of the deleteV3ProjectsId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a project
     * Remove a project
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdCallback} callback The callback function, accepting three arguments: error, data, response
     */_createClass(ProjectsApi,[{key:"deleteV3ProjectsId",value:function deleteV3ProjectsId(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsId");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdAccessRequestsUserId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdAccessRequestsUserIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Denies an access request for the given user.
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Number} userId The user ID of the access requester
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdAccessRequestsUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdAccessRequestsUserId",value:function deleteV3ProjectsIdAccessRequestsUserId(id,userId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdAccessRequestsUserId");}// verify the required parameter 'userId' is set
if(userId===undefined||userId===null){throw new Error("Missing the required parameter 'userId' when calling deleteV3ProjectsIdAccessRequestsUserId");}var pathParams={'id':id,'user_id':userId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/access_requests/{user_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdBoardsBoardIdListsListId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdBoardsBoardIdListsListIdCallback
     * @param {String} error Error message, if any.
     * @param {Array} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a board list
     * This feature was introduced in 8.13
     * @param {String} id The ID of a project
     * @param {Number} boardId The ID of a board
     * @param {Number} listId The ID of a board list
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdBoardsBoardIdListsListIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array}
     */},{key:"deleteV3ProjectsIdBoardsBoardIdListsListId",value:function deleteV3ProjectsIdBoardsBoardIdListsListId(id,boardId,listId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdBoardsBoardIdListsListId");}// verify the required parameter 'boardId' is set
if(boardId===undefined||boardId===null){throw new Error("Missing the required parameter 'boardId' when calling deleteV3ProjectsIdBoardsBoardIdListsListId");}// verify the required parameter 'listId' is set
if(listId===undefined||listId===null){throw new Error("Missing the required parameter 'listId' when calling deleteV3ProjectsIdBoardsBoardIdListsListId");}var pathParams={'id':id,'board_id':boardId,'list_id':listId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=Array;return this.apiClient.callApi('/v3/projects/{id}/boards/{board_id}/lists/{list_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdDeployKeysKeyId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdDeployKeysKeyIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete deploy key for a project
     * Delete deploy key for a project
     * @param {String} id The ID of the project
     * @param {Number} keyId The ID of the deploy key
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdDeployKeysKeyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"deleteV3ProjectsIdDeployKeysKeyId",value:function deleteV3ProjectsIdDeployKeysKeyId(id,keyId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdDeployKeysKeyId");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling deleteV3ProjectsIdDeployKeysKeyId");}var pathParams={'id':id,'key_id':keyId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/deploy_keys/{key_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdDeployKeysKeyIdDisable operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdDeployKeysKeyIdDisableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Disable a deploy key for a project
     * This feature was added in GitLab 8.11
     * @param {String} id The ID of the project
     * @param {Number} keyId The ID of the deploy key
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdDeployKeysKeyIdDisableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"deleteV3ProjectsIdDeployKeysKeyIdDisable",value:function deleteV3ProjectsIdDeployKeysKeyIdDisable(id,keyId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdDeployKeysKeyIdDisable");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling deleteV3ProjectsIdDeployKeysKeyIdDisable");}var pathParams={'id':id,'key_id':keyId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/deploy_keys/{key_id}/disable','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdEnvironmentsEnvironmentId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdEnvironmentsEnvironmentIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an existing environment
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Number} environmentId The environment ID
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdEnvironmentsEnvironmentIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */},{key:"deleteV3ProjectsIdEnvironmentsEnvironmentId",value:function deleteV3ProjectsIdEnvironmentsEnvironmentId(id,environmentId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdEnvironmentsEnvironmentId");}// verify the required parameter 'environmentId' is set
if(environmentId===undefined||environmentId===null){throw new Error("Missing the required parameter 'environmentId' when calling deleteV3ProjectsIdEnvironmentsEnvironmentId");}var pathParams={'id':id,'environment_id':environmentId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Environment["default"];return this.apiClient.callApi('/v3/projects/{id}/environments/{environment_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdFork operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdForkCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Remove a forked_from relationship
     * Remove a forked_from relationship
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdForkCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdFork",value:function deleteV3ProjectsIdFork(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdFork");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/fork','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdHooksHookId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdHooksHookIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes project hook
     * Deletes project hook
     * @param {String} id The ID of a project
     * @param {Number} hookId The ID of the hook to delete
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdHooksHookIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectHook}
     */},{key:"deleteV3ProjectsIdHooksHookId",value:function deleteV3ProjectsIdHooksHookId(id,hookId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdHooksHookId");}// verify the required parameter 'hookId' is set
if(hookId===undefined||hookId===null){throw new Error("Missing the required parameter 'hookId' when calling deleteV3ProjectsIdHooksHookId");}var pathParams={'id':id,'hook_id':hookId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_ProjectHook["default"];return this.apiClient.callApi('/v3/projects/{id}/hooks/{hook_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdIssuesIssueId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdIssuesIssueIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a project issue
     * Delete a project issue
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of a project issue
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdIssuesIssueIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdIssuesIssueId",value:function deleteV3ProjectsIdIssuesIssueId(id,issueId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdIssuesIssueId");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling deleteV3ProjectsIdIssuesIssueId");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a +awardables+ award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of an award emoji
     * @param {Number} id 
     * @param {Number} issueId 
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId",value:function deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(awardId,id,issueId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/award_emoji/{award_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a +awardables+ award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of an award emoji
     * @param {Number} id 
     * @param {Number} issueId 
     * @param {Number} noteId 
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId",value:function deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(awardId,id,issueId,noteId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'issue_id':issueId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji/{award_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdIssuesNoteableIdNotesNoteId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdIssuesNoteableIdNotesNoteIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a +noteable+ note
     * Delete a +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {Number} noteId The ID of a note
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdIssuesNoteableIdNotesNoteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"deleteV3ProjectsIdIssuesNoteableIdNotesNoteId",value:function deleteV3ProjectsIdIssuesNoteableIdNotesNoteId(id,noteableId,noteId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdIssuesNoteableIdNotesNoteId");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling deleteV3ProjectsIdIssuesNoteableIdNotesNoteId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling deleteV3ProjectsIdIssuesNoteableIdNotesNoteId");}var pathParams={'id':id,'noteable_id':noteableId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{noteable_id}/notes/{note_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdIssuesSubscribableIdSubscription operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdIssuesSubscribableIdSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unsubscribe from a resource
     * Unsubscribe from a resource
     * @param {String} id The ID of a project
     * @param {String} subscribableId The ID of a resource
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdIssuesSubscribableIdSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"deleteV3ProjectsIdIssuesSubscribableIdSubscription",value:function deleteV3ProjectsIdIssuesSubscribableIdSubscription(id,subscribableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdIssuesSubscribableIdSubscription");}// verify the required parameter 'subscribableId' is set
if(subscribableId===undefined||subscribableId===null){throw new Error("Missing the required parameter 'subscribableId' when calling deleteV3ProjectsIdIssuesSubscribableIdSubscription");}var pathParams={'id':id,'subscribable_id':subscribableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{subscribable_id}/subscription','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdKeysKeyId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdKeysKeyIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete deploy key for a project
     * Delete deploy key for a project
     * @param {String} id The ID of the project
     * @param {Number} keyId The ID of the deploy key
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdKeysKeyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"deleteV3ProjectsIdKeysKeyId",value:function deleteV3ProjectsIdKeysKeyId(id,keyId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdKeysKeyId");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling deleteV3ProjectsIdKeysKeyId");}var pathParams={'id':id,'key_id':keyId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/keys/{key_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdKeysKeyIdDisable operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdKeysKeyIdDisableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Disable a deploy key for a project
     * This feature was added in GitLab 8.11
     * @param {String} id The ID of the project
     * @param {Number} keyId The ID of the deploy key
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdKeysKeyIdDisableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"deleteV3ProjectsIdKeysKeyIdDisable",value:function deleteV3ProjectsIdKeysKeyIdDisable(id,keyId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdKeysKeyIdDisable");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling deleteV3ProjectsIdKeysKeyIdDisable");}var pathParams={'id':id,'key_id':keyId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/keys/{key_id}/disable','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdLabels operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete an existing label
     * Delete an existing label
     * @param {String} id The ID of a project
     * @param {String} name The name of the label to be deleted
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"deleteV3ProjectsIdLabels",value:function deleteV3ProjectsIdLabels(id,name,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdLabels");}// verify the required parameter 'name' is set
if(name===undefined||name===null){throw new Error("Missing the required parameter 'name' when calling deleteV3ProjectsIdLabels");}var pathParams={'id':id};var queryParams={'name':name};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/v3/projects/{id}/labels','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdLabelsSubscribableIdSubscription operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdLabelsSubscribableIdSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unsubscribe from a resource
     * Unsubscribe from a resource
     * @param {String} id The ID of a project
     * @param {String} subscribableId The ID of a resource
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdLabelsSubscribableIdSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"deleteV3ProjectsIdLabelsSubscribableIdSubscription",value:function deleteV3ProjectsIdLabelsSubscribableIdSubscription(id,subscribableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdLabelsSubscribableIdSubscription");}// verify the required parameter 'subscribableId' is set
if(subscribableId===undefined||subscribableId===null){throw new Error("Missing the required parameter 'subscribableId' when calling deleteV3ProjectsIdLabelsSubscribableIdSubscription");}var pathParams={'id':id,'subscribable_id':subscribableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/v3/projects/{id}/labels/{subscribable_id}/subscription','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdMembersUserId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdMembersUserIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes a user from a group or project.
     * Removes a user from a group or project.
     * @param {String} id The project ID
     * @param {Number} userId The user ID of the member
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdMembersUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdMembersUserId",value:function deleteV3ProjectsIdMembersUserId(id,userId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdMembersUserId");}// verify the required parameter 'userId' is set
if(userId===undefined||userId===null){throw new Error("Missing the required parameter 'userId' when calling deleteV3ProjectsIdMembersUserId");}var pathParams={'id':id,'user_id':userId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/members/{user_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdMergeRequestSubscribableIdSubscription operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestSubscribableIdSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unsubscribe from a resource
     * Unsubscribe from a resource
     * @param {String} id The ID of a project
     * @param {String} subscribableId The ID of a resource
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestSubscribableIdSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"deleteV3ProjectsIdMergeRequestSubscribableIdSubscription",value:function deleteV3ProjectsIdMergeRequestSubscribableIdSubscription(id,subscribableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdMergeRequestSubscribableIdSubscription");}// verify the required parameter 'subscribableId' is set
if(subscribableId===undefined||subscribableId===null){throw new Error("Missing the required parameter 'subscribableId' when calling deleteV3ProjectsIdMergeRequestSubscribableIdSubscription");}var pathParams={'id':id,'subscribable_id':subscribableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{subscribable_id}/subscription','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdMergeRequestsMergeRequestId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsMergeRequestIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a merge request
     * Delete a merge request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of a merge request
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsMergeRequestIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdMergeRequestsMergeRequestId",value:function deleteV3ProjectsIdMergeRequestsMergeRequestId(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdMergeRequestsMergeRequestId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling deleteV3ProjectsIdMergeRequestsMergeRequestId");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a +awardables+ award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of an award emoji
     * @param {Number} id 
     * @param {Number} mergeRequestId 
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId",value:function deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(awardId,id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji/{award_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a +awardables+ award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of an award emoji
     * @param {Number} id 
     * @param {Number} mergeRequestId 
     * @param {Number} noteId 
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId",value:function deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(awardId,id,mergeRequestId,noteId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'merge_request_id':mergeRequestId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji/{award_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a +noteable+ note
     * Delete a +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {Number} noteId The ID of a note
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId",value:function deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(id,noteableId,noteId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}var pathParams={'id':id,'noteable_id':noteableId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{noteable_id}/notes/{note_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsSubscribableIdSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unsubscribe from a resource
     * Unsubscribe from a resource
     * @param {String} id The ID of a project
     * @param {String} subscribableId The ID of a resource
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdMergeRequestsSubscribableIdSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription",value:function deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription(id,subscribableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription");}// verify the required parameter 'subscribableId' is set
if(subscribableId===undefined||subscribableId===null){throw new Error("Missing the required parameter 'subscribableId' when calling deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription");}var pathParams={'id':id,'subscribable_id':subscribableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{subscribable_id}/subscription','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdRepositoryBranchesBranch operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdRepositoryBranchesBranchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a branch
     * Delete a branch
     * @param {String} id The ID of a project
     * @param {String} branch The name of the branch
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdRepositoryBranchesBranchCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdRepositoryBranchesBranch",value:function deleteV3ProjectsIdRepositoryBranchesBranch(id,branch,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdRepositoryBranchesBranch");}// verify the required parameter 'branch' is set
if(branch===undefined||branch===null){throw new Error("Missing the required parameter 'branch' when calling deleteV3ProjectsIdRepositoryBranchesBranch");}var pathParams={'id':id,'branch':branch};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/branches/{branch}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdRepositoryFiles operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdRepositoryFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete an existing file in repository
     * Delete an existing file in repository
     * @param {String} id The project ID
     * @param {String} filePath The path to new file. Ex. lib/class.rb
     * @param {String} branchName The name of branch
     * @param {String} commitMessage Commit Message
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorEmail The email of the author
     * @param {String} opts.authorName The name of the author
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdRepositoryFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdRepositoryFiles",value:function deleteV3ProjectsIdRepositoryFiles(id,filePath,branchName,commitMessage,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdRepositoryFiles");}// verify the required parameter 'filePath' is set
if(filePath===undefined||filePath===null){throw new Error("Missing the required parameter 'filePath' when calling deleteV3ProjectsIdRepositoryFiles");}// verify the required parameter 'branchName' is set
if(branchName===undefined||branchName===null){throw new Error("Missing the required parameter 'branchName' when calling deleteV3ProjectsIdRepositoryFiles");}// verify the required parameter 'commitMessage' is set
if(commitMessage===undefined||commitMessage===null){throw new Error("Missing the required parameter 'commitMessage' when calling deleteV3ProjectsIdRepositoryFiles");}var pathParams={'id':id};var queryParams={'file_path':filePath,'branch_name':branchName,'commit_message':commitMessage,'author_email':opts['authorEmail'],'author_name':opts['authorName']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/files','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdRepositoryMergedBranches operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdRepositoryMergedBranchesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdRepositoryMergedBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdRepositoryMergedBranches",value:function deleteV3ProjectsIdRepositoryMergedBranches(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdRepositoryMergedBranches");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/merged_branches','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdRepositoryTagsTagName operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdRepositoryTagsTagNameCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a repository tag
     * Delete a repository tag
     * @param {String} id The ID of a project
     * @param {String} tagName The name of the tag
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdRepositoryTagsTagNameCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdRepositoryTagsTagName",value:function deleteV3ProjectsIdRepositoryTagsTagName(id,tagName,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdRepositoryTagsTagName");}// verify the required parameter 'tagName' is set
if(tagName===undefined||tagName===null){throw new Error("Missing the required parameter 'tagName' when calling deleteV3ProjectsIdRepositoryTagsTagName");}var pathParams={'id':id,'tag_name':tagName};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/tags/{tag_name}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdRunnersRunnerId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdRunnersRunnerIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Runner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Disable project's runner
     * Disable project's runner
     * @param {String} id The ID of a project
     * @param {Number} runnerId The ID of the runner
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdRunnersRunnerIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Runner}
     */},{key:"deleteV3ProjectsIdRunnersRunnerId",value:function deleteV3ProjectsIdRunnersRunnerId(id,runnerId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdRunnersRunnerId");}// verify the required parameter 'runnerId' is set
if(runnerId===undefined||runnerId===null){throw new Error("Missing the required parameter 'runnerId' when calling deleteV3ProjectsIdRunnersRunnerId");}var pathParams={'id':id,'runner_id':runnerId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Runner["default"];return this.apiClient.callApi('/v3/projects/{id}/runners/{runner_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdServicesServiceSlug operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdServicesServiceSlugCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a service for project
     * Delete a service for project
     * @param {module:model/String} serviceSlug The name of the service
     * @param {Number} id 
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdServicesServiceSlugCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdServicesServiceSlug",value:function deleteV3ProjectsIdServicesServiceSlug(serviceSlug,id,callback){var postBody=null;// verify the required parameter 'serviceSlug' is set
if(serviceSlug===undefined||serviceSlug===null){throw new Error("Missing the required parameter 'serviceSlug' when calling deleteV3ProjectsIdServicesServiceSlug");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdServicesServiceSlug");}var pathParams={'service_slug':serviceSlug,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/{service_slug}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdShareGroupId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdShareGroupIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * @param {String} id The ID of a project
     * @param {Number} groupId The ID of the group
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdShareGroupIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdShareGroupId",value:function deleteV3ProjectsIdShareGroupId(id,groupId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdShareGroupId");}// verify the required parameter 'groupId' is set
if(groupId===undefined||groupId===null){throw new Error("Missing the required parameter 'groupId' when calling deleteV3ProjectsIdShareGroupId");}var pathParams={'id':id,'group_id':groupId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/share/{group_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdSnippetsNoteableIdNotesNoteIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a +noteable+ note
     * Delete a +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {Number} noteId The ID of a note
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdSnippetsNoteableIdNotesNoteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId",value:function deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId(id,noteableId,noteId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId");}var pathParams={'id':id,'noteable_id':noteableId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{noteable_id}/notes/{note_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdSnippetsSnippetId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdSnippetsSnippetIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a project snippet
     * Delete a project snippet
     * @param {String} id The ID of a project
     * @param {Number} snippetId The ID of a project snippet
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdSnippetsSnippetIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"deleteV3ProjectsIdSnippetsSnippetId",value:function deleteV3ProjectsIdSnippetsSnippetId(id,snippetId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdSnippetsSnippetId");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling deleteV3ProjectsIdSnippetsSnippetId");}var pathParams={'id':id,'snippet_id':snippetId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a +awardables+ award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of an award emoji
     * @param {Number} id 
     * @param {Number} snippetId 
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId",value:function deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(awardId,id,snippetId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'snippet_id':snippetId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a +awardables+ award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of an award emoji
     * @param {Number} id 
     * @param {Number} snippetId 
     * @param {Number} noteId 
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId",value:function deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(awardId,id,snippetId,noteId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'snippet_id':snippetId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdStar operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdStarCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unstar a project
     * Unstar a project
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdStarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */},{key:"deleteV3ProjectsIdStar",value:function deleteV3ProjectsIdStar(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdStar");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Project["default"];return this.apiClient.callApi('/v3/projects/{id}/star','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdTriggersToken operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdTriggersTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a trigger
     * Delete a trigger
     * @param {String} id The ID of a project
     * @param {String} token The unique token of trigger
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdTriggersTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trigger}
     */},{key:"deleteV3ProjectsIdTriggersToken",value:function deleteV3ProjectsIdTriggersToken(id,token,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdTriggersToken");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new Error("Missing the required parameter 'token' when calling deleteV3ProjectsIdTriggersToken");}var pathParams={'id':id,'token':token};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Trigger["default"];return this.apiClient.callApi('/v3/projects/{id}/triggers/{token}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the deleteV3ProjectsIdVariablesKey operation.
     * @callback module:api/ProjectsApi~deleteV3ProjectsIdVariablesKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Variable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete an existing variable from a project
     * Delete an existing variable from a project
     * @param {String} id The ID of a project
     * @param {String} key The key of the variable
     * @param {module:api/ProjectsApi~deleteV3ProjectsIdVariablesKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Variable}
     */},{key:"deleteV3ProjectsIdVariablesKey",value:function deleteV3ProjectsIdVariablesKey(id,key,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling deleteV3ProjectsIdVariablesKey");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new Error("Missing the required parameter 'key' when calling deleteV3ProjectsIdVariablesKey");}var pathParams={'id':id,'key':key};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Variable["default"];return this.apiClient.callApi('/v3/projects/{id}/variables/{key}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3Projects operation.
     * @callback module:api/ProjectsApi~getV3ProjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BasicProjectDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a projects list for authenticated user
     * Get a projects list for authenticated user
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.orderBy Return projects ordered by field (default to 'created_at')
     * @param {module:model/String} opts.sort Return projects sorted in ascending and descending order (default to 'desc')
     * @param {Boolean} opts.archived Limit by archived status
     * @param {module:model/String} opts.visibility Limit by visibility
     * @param {String} opts.search Return list of authorized projects matching the search criteria
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {Boolean} opts.simple Return only the ID, URL, name, and path of each project
     * @param {module:api/ProjectsApi~getV3ProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BasicProjectDetails}
     */},{key:"getV3Projects",value:function getV3Projects(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'order_by':opts['orderBy'],'sort':opts['sort'],'archived':opts['archived'],'visibility':opts['visibility'],'search':opts['search'],'page':opts['page'],'per_page':opts['perPage'],'simple':opts['simple']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_BasicProjectDetails["default"];return this.apiClient.callApi('/v3/projects','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsAll operation.
     * @callback module:api/ProjectsApi~getV3ProjectsAllCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BasicProjectDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all projects for admin user
     * Get all projects for admin user
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.orderBy Return projects ordered by field (default to 'created_at')
     * @param {module:model/String} opts.sort Return projects sorted in ascending and descending order (default to 'desc')
     * @param {Boolean} opts.archived Limit by archived status
     * @param {module:model/String} opts.visibility Limit by visibility
     * @param {String} opts.search Return list of authorized projects matching the search criteria
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {Boolean} opts.simple Return only the ID, URL, name, and path of each project
     * @param {Boolean} opts.statistics Include project statistics
     * @param {module:api/ProjectsApi~getV3ProjectsAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BasicProjectDetails}
     */},{key:"getV3ProjectsAll",value:function getV3ProjectsAll(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'order_by':opts['orderBy'],'sort':opts['sort'],'archived':opts['archived'],'visibility':opts['visibility'],'search':opts['search'],'page':opts['page'],'per_page':opts['perPage'],'simple':opts['simple'],'statistics':opts['statistics']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_BasicProjectDetails["default"];return this.apiClient.callApi('/v3/projects/all','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectWithAccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single project
     * Get a single project
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~getV3ProjectsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectWithAccess}
     */},{key:"getV3ProjectsId",value:function getV3ProjectsId(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsId");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_ProjectWithAccess["default"];return this.apiClient.callApi('/v3/projects/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdAccessRequests operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdAccessRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessRequester} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets a list of access requests for a project.
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdAccessRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessRequester}
     */},{key:"getV3ProjectsIdAccessRequests",value:function getV3ProjectsIdAccessRequests(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdAccessRequests");}var pathParams={'id':id};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AccessRequester["default"];return this.apiClient.callApi('/v3/projects/{id}/access_requests','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdBoards operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdBoardsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Board} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all project boards
     * This feature was introduced in 8.13
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~getV3ProjectsIdBoardsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Board}
     */},{key:"getV3ProjectsIdBoards",value:function getV3ProjectsIdBoards(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdBoards");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Board["default"];return this.apiClient.callApi('/v3/projects/{id}/boards','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdBoardsBoardIdLists operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdBoardsBoardIdListsCallback
     * @param {String} error Error message, if any.
     * @param {Array} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the lists of a project board
     * Does not include `backlog` and `done` lists. This feature was introduced in 8.13
     * @param {String} id The ID of a project
     * @param {Number} boardId The ID of a board
     * @param {module:api/ProjectsApi~getV3ProjectsIdBoardsBoardIdListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array}
     */},{key:"getV3ProjectsIdBoardsBoardIdLists",value:function getV3ProjectsIdBoardsBoardIdLists(id,boardId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdBoardsBoardIdLists");}// verify the required parameter 'boardId' is set
if(boardId===undefined||boardId===null){throw new Error("Missing the required parameter 'boardId' when calling getV3ProjectsIdBoardsBoardIdLists");}var pathParams={'id':id,'board_id':boardId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=Array;return this.apiClient.callApi('/v3/projects/{id}/boards/{board_id}/lists','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdBoardsBoardIdListsListId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdBoardsBoardIdListsListIdCallback
     * @param {String} error Error message, if any.
     * @param {Array} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of a project board
     * This feature was introduced in 8.13
     * @param {String} id The ID of a project
     * @param {Number} boardId The ID of a board
     * @param {Number} listId The ID of a list
     * @param {module:api/ProjectsApi~getV3ProjectsIdBoardsBoardIdListsListIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array}
     */},{key:"getV3ProjectsIdBoardsBoardIdListsListId",value:function getV3ProjectsIdBoardsBoardIdListsListId(id,boardId,listId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdBoardsBoardIdListsListId");}// verify the required parameter 'boardId' is set
if(boardId===undefined||boardId===null){throw new Error("Missing the required parameter 'boardId' when calling getV3ProjectsIdBoardsBoardIdListsListId");}// verify the required parameter 'listId' is set
if(listId===undefined||listId===null){throw new Error("Missing the required parameter 'listId' when calling getV3ProjectsIdBoardsBoardIdListsListId");}var pathParams={'id':id,'board_id':boardId,'list_id':listId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=Array;return this.apiClient.callApi('/v3/projects/{id}/boards/{board_id}/lists/{list_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdBuilds operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdBuildsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Build} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a project builds
     * Get a project builds
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.scope The scope of builds to show
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdBuildsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Build}
     */},{key:"getV3ProjectsIdBuilds",value:function getV3ProjectsIdBuilds(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdBuilds");}var pathParams={'id':id};var queryParams={'scope':opts['scope'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Build["default"];return this.apiClient.callApi('/v3/projects/{id}/builds','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdBuildsArtifactsRefNameDownload operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdBuildsArtifactsRefNameDownloadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Download the artifacts file from build
     * This feature was introduced in GitLab 8.10
     * @param {String} id The ID of a project
     * @param {String} refName The ref from repository
     * @param {String} job The name for the build
     * @param {module:api/ProjectsApi~getV3ProjectsIdBuildsArtifactsRefNameDownloadCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdBuildsArtifactsRefNameDownload",value:function getV3ProjectsIdBuildsArtifactsRefNameDownload(id,refName,job,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdBuildsArtifactsRefNameDownload");}// verify the required parameter 'refName' is set
if(refName===undefined||refName===null){throw new Error("Missing the required parameter 'refName' when calling getV3ProjectsIdBuildsArtifactsRefNameDownload");}// verify the required parameter 'job' is set
if(job===undefined||job===null){throw new Error("Missing the required parameter 'job' when calling getV3ProjectsIdBuildsArtifactsRefNameDownload");}var pathParams={'id':id,'ref_name':refName};var queryParams={'job':job};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/builds/artifacts/{ref_name}/download','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdBuildsBuildId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdBuildsBuildIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Build} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific build of a project
     * Get a specific build of a project
     * @param {String} id The ID of a project
     * @param {Number} buildId The ID of a build
     * @param {module:api/ProjectsApi~getV3ProjectsIdBuildsBuildIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Build}
     */},{key:"getV3ProjectsIdBuildsBuildId",value:function getV3ProjectsIdBuildsBuildId(id,buildId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdBuildsBuildId");}// verify the required parameter 'buildId' is set
if(buildId===undefined||buildId===null){throw new Error("Missing the required parameter 'buildId' when calling getV3ProjectsIdBuildsBuildId");}var pathParams={'id':id,'build_id':buildId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Build["default"];return this.apiClient.callApi('/v3/projects/{id}/builds/{build_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdBuildsBuildIdArtifacts operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdBuildsBuildIdArtifactsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Download the artifacts file from build
     * This feature was introduced in GitLab 8.5
     * @param {String} id The ID of a project
     * @param {Number} buildId The ID of a build
     * @param {module:api/ProjectsApi~getV3ProjectsIdBuildsBuildIdArtifactsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdBuildsBuildIdArtifacts",value:function getV3ProjectsIdBuildsBuildIdArtifacts(id,buildId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdBuildsBuildIdArtifacts");}// verify the required parameter 'buildId' is set
if(buildId===undefined||buildId===null){throw new Error("Missing the required parameter 'buildId' when calling getV3ProjectsIdBuildsBuildIdArtifacts");}var pathParams={'id':id,'build_id':buildId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/builds/{build_id}/artifacts','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdBuildsBuildIdTrace operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdBuildsBuildIdTraceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a trace of a specific build of a project
     * Get a trace of a specific build of a project
     * @param {String} id The ID of a project
     * @param {Number} buildId The ID of a build
     * @param {module:api/ProjectsApi~getV3ProjectsIdBuildsBuildIdTraceCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdBuildsBuildIdTrace",value:function getV3ProjectsIdBuildsBuildIdTrace(id,buildId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdBuildsBuildIdTrace");}// verify the required parameter 'buildId' is set
if(buildId===undefined||buildId===null){throw new Error("Missing the required parameter 'buildId' when calling getV3ProjectsIdBuildsBuildIdTrace");}var pathParams={'id':id,'build_id':buildId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/builds/{build_id}/trace','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdDeployKeys operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdDeployKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific project's deploy keys
     * Get a specific project's deploy keys
     * @param {String} id The ID of the project
     * @param {module:api/ProjectsApi~getV3ProjectsIdDeployKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"getV3ProjectsIdDeployKeys",value:function getV3ProjectsIdDeployKeys(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdDeployKeys");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/deploy_keys','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdDeployKeysKeyId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdDeployKeysKeyIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get single deploy key
     * Get single deploy key
     * @param {String} id The ID of the project
     * @param {Number} keyId The ID of the deploy key
     * @param {module:api/ProjectsApi~getV3ProjectsIdDeployKeysKeyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"getV3ProjectsIdDeployKeysKeyId",value:function getV3ProjectsIdDeployKeysKeyId(id,keyId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdDeployKeysKeyId");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling getV3ProjectsIdDeployKeysKeyId");}var pathParams={'id':id,'key_id':keyId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/deploy_keys/{key_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdDeployments operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdDeploymentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deployment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all deployments of the project
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdDeploymentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Deployment}
     */},{key:"getV3ProjectsIdDeployments",value:function getV3ProjectsIdDeployments(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdDeployments");}var pathParams={'id':id};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Deployment["default"];return this.apiClient.callApi('/v3/projects/{id}/deployments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdDeploymentsDeploymentId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdDeploymentsDeploymentIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deployment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets a specific deployment
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Number} deploymentId The deployment ID
     * @param {module:api/ProjectsApi~getV3ProjectsIdDeploymentsDeploymentIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Deployment}
     */},{key:"getV3ProjectsIdDeploymentsDeploymentId",value:function getV3ProjectsIdDeploymentsDeploymentId(id,deploymentId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdDeploymentsDeploymentId");}// verify the required parameter 'deploymentId' is set
if(deploymentId===undefined||deploymentId===null){throw new Error("Missing the required parameter 'deploymentId' when calling getV3ProjectsIdDeploymentsDeploymentId");}var pathParams={'id':id,'deployment_id':deploymentId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Deployment["default"];return this.apiClient.callApi('/v3/projects/{id}/deployments/{deployment_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdEnvironments operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdEnvironmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all environments of the project
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */},{key:"getV3ProjectsIdEnvironments",value:function getV3ProjectsIdEnvironments(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdEnvironments");}var pathParams={'id':id};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Environment["default"];return this.apiClient.callApi('/v3/projects/{id}/environments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdEvents operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Event} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get events for a single project
     * Get events for a single project
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Event}
     */},{key:"getV3ProjectsIdEvents",value:function getV3ProjectsIdEvents(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdEvents");}var pathParams={'id':id};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Event["default"];return this.apiClient.callApi('/v3/projects/{id}/events','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdHooks operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdHooksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get project hooks
     * Get project hooks
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdHooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectHook}
     */},{key:"getV3ProjectsIdHooks",value:function getV3ProjectsIdHooks(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdHooks");}var pathParams={'id':id};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_ProjectHook["default"];return this.apiClient.callApi('/v3/projects/{id}/hooks','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdHooksHookId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdHooksHookIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a project hook
     * Get a project hook
     * @param {String} id The ID of a project
     * @param {Number} hookId The ID of a project hook
     * @param {module:api/ProjectsApi~getV3ProjectsIdHooksHookIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectHook}
     */},{key:"getV3ProjectsIdHooksHookId",value:function getV3ProjectsIdHooksHookId(id,hookId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdHooksHookId");}// verify the required parameter 'hookId' is set
if(hookId===undefined||hookId===null){throw new Error("Missing the required parameter 'hookId' when calling getV3ProjectsIdHooksHookId");}var pathParams={'id':id,'hook_id':hookId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_ProjectHook["default"];return this.apiClient.callApi('/v3/projects/{id}/hooks/{hook_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdIssues operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdIssuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project issues
     * Get a list of project issues
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Return opened, closed, or all issues (default to 'all')
     * @param {Number} opts.iid Return the issue having the given `iid`
     * @param {String} opts.labels Comma-separated list of label names
     * @param {String} opts.milestone Return issues for a specific milestone
     * @param {module:model/String} opts.orderBy Return issues ordered by `created_at` or `updated_at` fields. (default to 'created_at')
     * @param {module:model/String} opts.sort Return issues sorted in `asc` or `desc` order. (default to 'desc')
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdIssuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"getV3ProjectsIdIssues",value:function getV3ProjectsIdIssues(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdIssues");}var pathParams={'id':id};var queryParams={'state':opts['state'],'iid':opts['iid'],'labels':opts['labels'],'milestone':opts['milestone'],'order_by':opts['orderBy'],'sort':opts['sort'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/v3/projects/{id}/issues','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdIssuesIssueId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single project issue
     * Get a single project issue
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of a project issue
     * @param {module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"getV3ProjectsIdIssuesIssueId",value:function getV3ProjectsIdIssuesIssueId(id,issueId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdIssuesIssueId");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling getV3ProjectsIdIssuesIssueId");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdIssuesIssueIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project +awardable+ award emoji
     * This feature was introduced in 8.9
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of an Issue, Merge Request or Snippet
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdIssuesIssueIdAwardEmoji",value:function getV3ProjectsIdIssuesIssueIdAwardEmoji(id,issueId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdIssuesIssueIdAwardEmoji");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling getV3ProjectsIdIssuesIssueIdAwardEmoji");}var pathParams={'id':id,'issue_id':issueId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/award_emoji','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of the award
     * @param {Number} id 
     * @param {Number} issueId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId",value:function getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(awardId,id,issueId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/award_emoji/{award_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project +awardable+ award emoji
     * This feature was introduced in 8.9
     * @param {Number} id 
     * @param {Number} issueId 
     * @param {Number} noteId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji",value:function getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(id,issueId,noteId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji");}var pathParams={'id':id,'issue_id':issueId,'note_id':noteId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of the award
     * @param {Number} id 
     * @param {Number} issueId 
     * @param {Number} noteId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId",value:function getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(awardId,id,issueId,noteId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'issue_id':issueId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji/{award_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdIssuesIssueIdTimeStats operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdTimeStatsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Show time stats for a project issue
     * Show time stats for a project issue
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of a project issue
     * @param {module:api/ProjectsApi~getV3ProjectsIdIssuesIssueIdTimeStatsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdIssuesIssueIdTimeStats",value:function getV3ProjectsIdIssuesIssueIdTimeStats(id,issueId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdIssuesIssueIdTimeStats");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling getV3ProjectsIdIssuesIssueIdTimeStats");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/time_stats','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdIssuesNoteableIdNotes operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdIssuesNoteableIdNotesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project +noteable+ notes
     * Get a list of project +noteable+ notes
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdIssuesNoteableIdNotesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"getV3ProjectsIdIssuesNoteableIdNotes",value:function getV3ProjectsIdIssuesNoteableIdNotes(id,noteableId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdIssuesNoteableIdNotes");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling getV3ProjectsIdIssuesNoteableIdNotes");}var pathParams={'id':id,'noteable_id':noteableId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{noteable_id}/notes','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdIssuesNoteableIdNotesNoteId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdIssuesNoteableIdNotesNoteIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single +noteable+ note
     * Get a single +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteId The ID of a note
     * @param {Number} noteableId The ID of the noteable
     * @param {module:api/ProjectsApi~getV3ProjectsIdIssuesNoteableIdNotesNoteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"getV3ProjectsIdIssuesNoteableIdNotesNoteId",value:function getV3ProjectsIdIssuesNoteableIdNotesNoteId(id,noteId,noteableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdIssuesNoteableIdNotesNoteId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling getV3ProjectsIdIssuesNoteableIdNotesNoteId");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling getV3ProjectsIdIssuesNoteableIdNotesNoteId");}var pathParams={'id':id,'note_id':noteId,'noteable_id':noteableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{noteable_id}/notes/{note_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdKeys operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific project's deploy keys
     * Get a specific project's deploy keys
     * @param {String} id The ID of the project
     * @param {module:api/ProjectsApi~getV3ProjectsIdKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"getV3ProjectsIdKeys",value:function getV3ProjectsIdKeys(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdKeys");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/keys','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdKeysKeyId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdKeysKeyIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get single deploy key
     * Get single deploy key
     * @param {String} id The ID of the project
     * @param {Number} keyId The ID of the deploy key
     * @param {module:api/ProjectsApi~getV3ProjectsIdKeysKeyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"getV3ProjectsIdKeysKeyId",value:function getV3ProjectsIdKeysKeyId(id,keyId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdKeysKeyId");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling getV3ProjectsIdKeysKeyId");}var pathParams={'id':id,'key_id':keyId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/keys/{key_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdLabels operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all labels of the project
     * Get all labels of the project
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~getV3ProjectsIdLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"getV3ProjectsIdLabels",value:function getV3ProjectsIdLabels(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdLabels");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/v3/projects/{id}/labels','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMembers operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets a list of group or project members viewable by the authenticated user.
     * Gets a list of group or project members viewable by the authenticated user.
     * @param {String} id The project ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.query A query string to search for members
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"getV3ProjectsIdMembers",value:function getV3ProjectsIdMembers(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMembers");}var pathParams={'id':id};var queryParams={'query':opts['query'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/v3/projects/{id}/members','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMembersUserId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMembersUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets a member of a group or project.
     * Gets a member of a group or project.
     * @param {String} id The project ID
     * @param {Number} userId The user ID of the member
     * @param {module:api/ProjectsApi~getV3ProjectsIdMembersUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"getV3ProjectsIdMembersUserId",value:function getV3ProjectsIdMembersUserId(id,userId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMembersUserId");}// verify the required parameter 'userId' is set
if(userId===undefined||userId===null){throw new Error("Missing the required parameter 'userId' when calling getV3ProjectsIdMembersUserId");}var pathParams={'id':id,'user_id':userId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/v3/projects/{id}/members/{user_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestMergeRequestId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single merge request
     * This endpoint is deprecated and will be removed in GitLab 9.0.
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of a merge request
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"getV3ProjectsIdMergeRequestMergeRequestId",value:function getV3ProjectsIdMergeRequestMergeRequestId(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestMergeRequestId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestMergeRequestId");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{merge_request_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestMergeRequestIdChanges operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdChangesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequestChanges} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Show the merge request changes
     * Show the merge request changes
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequestChanges}
     */},{key:"getV3ProjectsIdMergeRequestMergeRequestIdChanges",value:function getV3ProjectsIdMergeRequestMergeRequestIdChanges(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestMergeRequestIdChanges");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestMergeRequestIdChanges");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequestChanges["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{merge_request_id}/changes','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdClosesIssuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MRNote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List issues that will be closed on merge
     * List issues that will be closed on merge
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdClosesIssuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MRNote}
     */},{key:"getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues",value:function getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues(id,mergeRequestId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MRNote["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{merge_request_id}/closes_issues','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestMergeRequestIdComments operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdCommentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MRNote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the comments of a merge request
     * Duplicate. DEPRECATED and WILL BE REMOVED in 9.0
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MRNote}
     */},{key:"getV3ProjectsIdMergeRequestMergeRequestIdComments",value:function getV3ProjectsIdMergeRequestMergeRequestIdComments(id,mergeRequestId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestMergeRequestIdComments");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestMergeRequestIdComments");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MRNote["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{merge_request_id}/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestMergeRequestIdCommits operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdCommitsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the commits of a merge request
     * Get the commits of a merge request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestMergeRequestIdCommitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoCommit}
     */},{key:"getV3ProjectsIdMergeRequestMergeRequestIdCommits",value:function getV3ProjectsIdMergeRequestMergeRequestIdCommits(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestMergeRequestIdCommits");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestMergeRequestIdCommits");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoCommit["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{merge_request_id}/commits','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequests operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List merge requests
     * List merge requests
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Return opened, closed, merged, or all merge requests (default to 'all')
     * @param {module:model/String} opts.orderBy Return merge requests ordered by `created_at` or `updated_at` fields. (default to 'created_at')
     * @param {module:model/String} opts.sort Return merge requests sorted in `asc` or `desc` order. (default to 'desc')
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {Array.<Number>} opts.iid The IID of the merge requests
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"getV3ProjectsIdMergeRequests",value:function getV3ProjectsIdMergeRequests(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequests");}var pathParams={'id':id};var queryParams={'state':opts['state'],'order_by':opts['orderBy'],'sort':opts['sort'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={'iid':this.apiClient.buildCollectionParam(opts['iid'],'csv')};var authNames=['private_token_header','private_token_query'];var contentTypes=['multipart/form-data'];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single merge request
     * Get a single merge request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestId",value:function getV3ProjectsIdMergeRequestsMergeRequestId(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestId");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project +awardable+ award emoji
     * This feature was introduced in 8.9
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of an Issue, Merge Request or Snippet
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji",value:function getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(id,mergeRequestId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of the award
     * @param {Number} id 
     * @param {Number} mergeRequestId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId",value:function getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(awardId,id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji/{award_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdChanges operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdChangesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequestChanges} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Show the merge request changes
     * Show the merge request changes
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequestChanges}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdChanges",value:function getV3ProjectsIdMergeRequestsMergeRequestIdChanges(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdChanges");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdChanges");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequestChanges["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/changes','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MRNote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * List issues that will be closed on merge
     * List issues that will be closed on merge
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MRNote}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues",value:function getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues(id,mergeRequestId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MRNote["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/closes_issues','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdComments operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdCommentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MRNote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the comments of a merge request
     * Duplicate. DEPRECATED and WILL BE REMOVED in 9.0
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MRNote}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdComments",value:function getV3ProjectsIdMergeRequestsMergeRequestIdComments(id,mergeRequestId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdComments");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdComments");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MRNote["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdCommits operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdCommitsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the commits of a merge request
     * Get the commits of a merge request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdCommitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoCommit}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdCommits",value:function getV3ProjectsIdMergeRequestsMergeRequestIdCommits(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdCommits");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdCommits");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoCommit["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/commits','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project +awardable+ award emoji
     * This feature was introduced in 8.9
     * @param {Number} id 
     * @param {Number} mergeRequestId 
     * @param {Number} noteId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji",value:function getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(id,mergeRequestId,noteId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji");}var pathParams={'id':id,'merge_request_id':mergeRequestId,'note_id':noteId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of the award
     * @param {Number} id 
     * @param {Number} mergeRequestId 
     * @param {Number} noteId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId",value:function getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(awardId,id,mergeRequestId,noteId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'merge_request_id':mergeRequestId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji/{award_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdTimeStatsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Show time stats for a project merge_request
     * Show time stats for a project merge_request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of a project merge_request
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdTimeStatsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats",value:function getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/time_stats','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdVersions operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequestDiff} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of merge request diff versions
     * This feature was introduced in GitLab 8.12.
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of a merge request
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequestDiff}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdVersions",value:function getV3ProjectsIdMergeRequestsMergeRequestIdVersions(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdVersions");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdVersions");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequestDiff["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/versions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequestDiffFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single merge request diff version
     * This feature was introduced in GitLab 8.12.
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of a merge request
     * @param {Number} versionId The ID of a merge request diff version
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequestDiffFull}
     */},{key:"getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId",value:function getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId(id,mergeRequestId,versionId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId");}var pathParams={'id':id,'merge_request_id':mergeRequestId,'version_id':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequestDiffFull["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/versions/{version_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsNoteableIdNotes operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsNoteableIdNotesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project +noteable+ notes
     * Get a list of project +noteable+ notes
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsNoteableIdNotesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"getV3ProjectsIdMergeRequestsNoteableIdNotes",value:function getV3ProjectsIdMergeRequestsNoteableIdNotes(id,noteableId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsNoteableIdNotes");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling getV3ProjectsIdMergeRequestsNoteableIdNotes");}var pathParams={'id':id,'noteable_id':noteableId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{noteable_id}/notes','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMergeRequestsNoteableIdNotesNoteIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single +noteable+ note
     * Get a single +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteId The ID of a note
     * @param {Number} noteableId The ID of the noteable
     * @param {module:api/ProjectsApi~getV3ProjectsIdMergeRequestsNoteableIdNotesNoteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId",value:function getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(id,noteId,noteableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}var pathParams={'id':id,'note_id':noteId,'noteable_id':noteableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{noteable_id}/notes/{note_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMilestones operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMilestonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project milestones
     * Get a list of project milestones
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Return \"active\", \"closed\", or \"all\" milestones (default to 'all')
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {Array.<Number>} opts.iid The IID of the milestone
     * @param {module:api/ProjectsApi~getV3ProjectsIdMilestonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */},{key:"getV3ProjectsIdMilestones",value:function getV3ProjectsIdMilestones(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMilestones");}var pathParams={'id':id};var queryParams={'state':opts['state'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={'iid':this.apiClient.buildCollectionParam(opts['iid'],'csv')};var authNames=['private_token_header','private_token_query'];var contentTypes=['multipart/form-data'];var accepts=['application/json'];var returnType=_Milestone["default"];return this.apiClient.callApi('/v3/projects/{id}/milestones','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMilestonesMilestoneId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMilestonesMilestoneIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single project milestone
     * Get a single project milestone
     * @param {String} id The ID of a project
     * @param {Number} milestoneId The ID of a project milestone
     * @param {module:api/ProjectsApi~getV3ProjectsIdMilestonesMilestoneIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */},{key:"getV3ProjectsIdMilestonesMilestoneId",value:function getV3ProjectsIdMilestonesMilestoneId(id,milestoneId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMilestonesMilestoneId");}// verify the required parameter 'milestoneId' is set
if(milestoneId===undefined||milestoneId===null){throw new Error("Missing the required parameter 'milestoneId' when calling getV3ProjectsIdMilestonesMilestoneId");}var pathParams={'id':id,'milestone_id':milestoneId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Milestone["default"];return this.apiClient.callApi('/v3/projects/{id}/milestones/{milestone_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdMilestonesMilestoneIdIssues operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdMilestonesMilestoneIdIssuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all issues for a single project milestone
     * Get all issues for a single project milestone
     * @param {String} id The ID of a project
     * @param {Number} milestoneId The ID of a project milestone
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdMilestonesMilestoneIdIssuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"getV3ProjectsIdMilestonesMilestoneIdIssues",value:function getV3ProjectsIdMilestonesMilestoneIdIssues(id,milestoneId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdMilestonesMilestoneIdIssues");}// verify the required parameter 'milestoneId' is set
if(milestoneId===undefined||milestoneId===null){throw new Error("Missing the required parameter 'milestoneId' when calling getV3ProjectsIdMilestonesMilestoneIdIssues");}var pathParams={'id':id,'milestone_id':milestoneId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/v3/projects/{id}/milestones/{milestone_id}/issues','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdNotificationSettings operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get project level notification level settings, defaults to Global
     * This feature was introduced in GitLab 8.12
     * @param {String} id The group ID or project ID or project NAMESPACE/PROJECT_NAME
     * @param {module:api/ProjectsApi~getV3ProjectsIdNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationSetting}
     */},{key:"getV3ProjectsIdNotificationSettings",value:function getV3ProjectsIdNotificationSettings(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdNotificationSettings");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_NotificationSetting["default"];return this.apiClient.callApi('/v3/projects/{id}/notification_settings','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdPipelines operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdPipelinesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pipeline} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all Pipelines of the project
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:model/String} opts.scope Either running, branches, or tags
     * @param {module:api/ProjectsApi~getV3ProjectsIdPipelinesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pipeline}
     */},{key:"getV3ProjectsIdPipelines",value:function getV3ProjectsIdPipelines(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdPipelines");}var pathParams={'id':id};var queryParams={'page':opts['page'],'per_page':opts['perPage'],'scope':opts['scope']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Pipeline["default"];return this.apiClient.callApi('/v3/projects/{id}/pipelines','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdPipelinesPipelineId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdPipelinesPipelineIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pipeline} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets a specific pipeline for the project
     * This feature was introduced in GitLab 8.11
     * @param {String} id The project ID
     * @param {Number} pipelineId The pipeline ID
     * @param {module:api/ProjectsApi~getV3ProjectsIdPipelinesPipelineIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pipeline}
     */},{key:"getV3ProjectsIdPipelinesPipelineId",value:function getV3ProjectsIdPipelinesPipelineId(id,pipelineId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdPipelinesPipelineId");}// verify the required parameter 'pipelineId' is set
if(pipelineId===undefined||pipelineId===null){throw new Error("Missing the required parameter 'pipelineId' when calling getV3ProjectsIdPipelinesPipelineId");}var pathParams={'id':id,'pipeline_id':pipelineId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Pipeline["default"];return this.apiClient.callApi('/v3/projects/{id}/pipelines/{pipeline_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryArchive operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryArchiveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get an archive of the repository
     * Get an archive of the repository
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {String} opts.sha The commit sha of the archive to be downloaded
     * @param {String} opts.format The archive format
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryArchiveCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdRepositoryArchive",value:function getV3ProjectsIdRepositoryArchive(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryArchive");}var pathParams={'id':id};var queryParams={'sha':opts['sha'],'format':opts['format']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/archive','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryBlobsSha operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryBlobsShaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a raw file contents
     * Get a raw file contents
     * @param {String} id The ID of a project
     * @param {String} sha The commit, branch name, or tag name
     * @param {String} filepath The path to the file to display
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryBlobsShaCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdRepositoryBlobsSha",value:function getV3ProjectsIdRepositoryBlobsSha(id,sha,filepath,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryBlobsSha");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling getV3ProjectsIdRepositoryBlobsSha");}// verify the required parameter 'filepath' is set
if(filepath===undefined||filepath===null){throw new Error("Missing the required parameter 'filepath' when calling getV3ProjectsIdRepositoryBlobsSha");}var pathParams={'id':id,'sha':sha};var queryParams={'filepath':filepath};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/blobs/{sha}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryBranches operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryBranchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a project repository branches
     * Get a project repository branches
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoBranch}
     */},{key:"getV3ProjectsIdRepositoryBranches",value:function getV3ProjectsIdRepositoryBranches(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryBranches");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoBranch["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/branches','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryBranchesBranch operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryBranchesBranchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single branch
     * Get a single branch
     * @param {String} id The ID of a project
     * @param {String} branch The name of the branch
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryBranchesBranchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoBranch}
     */},{key:"getV3ProjectsIdRepositoryBranchesBranch",value:function getV3ProjectsIdRepositoryBranchesBranch(id,branch,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryBranchesBranch");}// verify the required parameter 'branch' is set
if(branch===undefined||branch===null){throw new Error("Missing the required parameter 'branch' when calling getV3ProjectsIdRepositoryBranchesBranch");}var pathParams={'id':id,'branch':branch};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoBranch["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/branches/{branch}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryCommits operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a project repository commits
     * Get a project repository commits
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {String} opts.refName The name of a repository branch or tag, if not given the default branch is used
     * @param {String} opts.since Only commits after or in this date will be returned
     * @param {String} opts.until Only commits before or in this date will be returned
     * @param {Number} opts.page The page for pagination (default to 0)
     * @param {Number} opts.perPage The number of results per page (default to 20)
     * @param {String} opts.path The file path
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoCommit}
     */},{key:"getV3ProjectsIdRepositoryCommits",value:function getV3ProjectsIdRepositoryCommits(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryCommits");}var pathParams={'id':id};var queryParams={'ref_name':opts['refName'],'since':opts['since'],'until':opts['until'],'page':opts['page'],'per_page':opts['perPage'],'path':opts['path']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoCommit["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/commits','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryCommitsSha operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoCommitDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific commit of a project
     * Get a specific commit of a project
     * @param {String} id The ID of a project
     * @param {String} sha A commit sha, or the name of a branch or tag
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoCommitDetail}
     */},{key:"getV3ProjectsIdRepositoryCommitsSha",value:function getV3ProjectsIdRepositoryCommitsSha(id,sha,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryCommitsSha");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling getV3ProjectsIdRepositoryCommitsSha");}var pathParams={'id':id,'sha':sha};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoCommitDetail["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/commits/{sha}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryCommitsShaBlob operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaBlobCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a raw file contents
     * Get a raw file contents
     * @param {String} id The ID of a project
     * @param {String} sha The commit, branch name, or tag name
     * @param {String} filepath The path to the file to display
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaBlobCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdRepositoryCommitsShaBlob",value:function getV3ProjectsIdRepositoryCommitsShaBlob(id,sha,filepath,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryCommitsShaBlob");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling getV3ProjectsIdRepositoryCommitsShaBlob");}// verify the required parameter 'filepath' is set
if(filepath===undefined||filepath===null){throw new Error("Missing the required parameter 'filepath' when calling getV3ProjectsIdRepositoryCommitsShaBlob");}var pathParams={'id':id,'sha':sha};var queryParams={'filepath':filepath};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/commits/{sha}/blob','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryCommitsShaBuilds operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaBuildsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Build} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get builds for a specific commit of a project
     * Get builds for a specific commit of a project
     * @param {String} id The ID of a project
     * @param {String} sha The SHA id of a commit
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.scope The scope of builds to show
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaBuildsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Build}
     */},{key:"getV3ProjectsIdRepositoryCommitsShaBuilds",value:function getV3ProjectsIdRepositoryCommitsShaBuilds(id,sha,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryCommitsShaBuilds");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling getV3ProjectsIdRepositoryCommitsShaBuilds");}var pathParams={'id':id,'sha':sha};var queryParams={'scope':opts['scope'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Build["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/commits/{sha}/builds','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryCommitsShaComments operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaCommentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitNote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a commit's comments
     * Get a commit's comments
     * @param {String} id The ID of a project
     * @param {String} sha A commit sha, or the name of a branch or tag
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitNote}
     */},{key:"getV3ProjectsIdRepositoryCommitsShaComments",value:function getV3ProjectsIdRepositoryCommitsShaComments(id,sha,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryCommitsShaComments");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling getV3ProjectsIdRepositoryCommitsShaComments");}var pathParams={'id':id,'sha':sha};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_CommitNote["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/commits/{sha}/comments','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryCommitsShaDiff operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaDiffCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the diff for a specific commit of a project
     * Get the diff for a specific commit of a project
     * @param {String} id The ID of a project
     * @param {String} sha A commit sha, or the name of a branch or tag
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaDiffCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdRepositoryCommitsShaDiff",value:function getV3ProjectsIdRepositoryCommitsShaDiff(id,sha,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryCommitsShaDiff");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling getV3ProjectsIdRepositoryCommitsShaDiff");}var pathParams={'id':id,'sha':sha};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/commits/{sha}/diff','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryCommitsShaStatuses operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaStatusesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a commit's statuses
     * Get a commit's statuses
     * @param {String} id The ID of a project
     * @param {String} sha The commit hash
     * @param {Object} opts Optional parameters
     * @param {String} opts.ref The ref
     * @param {String} opts.stage The stage
     * @param {String} opts.name The name
     * @param {String} opts.all Show all statuses, default: false
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryCommitsShaStatusesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitStatus}
     */},{key:"getV3ProjectsIdRepositoryCommitsShaStatuses",value:function getV3ProjectsIdRepositoryCommitsShaStatuses(id,sha,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryCommitsShaStatuses");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling getV3ProjectsIdRepositoryCommitsShaStatuses");}var pathParams={'id':id,'sha':sha};var queryParams={'ref':opts['ref'],'stage':opts['stage'],'name':opts['name'],'all':opts['all'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_CommitStatus["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/commits/{sha}/statuses','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryCompare operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryCompareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Compare} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Compare two branches, tags, or commits
     * Compare two branches, tags, or commits
     * @param {String} id The ID of a project
     * @param {String} from The commit, branch name, or tag name to start comparison
     * @param {String} to The commit, branch name, or tag name to stop comparison
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryCompareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Compare}
     */},{key:"getV3ProjectsIdRepositoryCompare",value:function getV3ProjectsIdRepositoryCompare(id,from,to,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryCompare");}// verify the required parameter 'from' is set
if(from===undefined||from===null){throw new Error("Missing the required parameter 'from' when calling getV3ProjectsIdRepositoryCompare");}// verify the required parameter 'to' is set
if(to===undefined||to===null){throw new Error("Missing the required parameter 'to' when calling getV3ProjectsIdRepositoryCompare");}var pathParams={'id':id};var queryParams={'from':from,'to':to};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Compare["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/compare','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryContributors operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryContributorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contributor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get repository contributors
     * Get repository contributors
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryContributorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contributor}
     */},{key:"getV3ProjectsIdRepositoryContributors",value:function getV3ProjectsIdRepositoryContributors(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryContributors");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Contributor["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/contributors','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryFiles operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a file from repository
     * Get a file from repository
     * @param {String} id The project ID
     * @param {String} filePath The path to the file. Ex. lib/class.rb
     * @param {String} ref The name of branch, tag, or commit
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdRepositoryFiles",value:function getV3ProjectsIdRepositoryFiles(id,filePath,ref,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryFiles");}// verify the required parameter 'filePath' is set
if(filePath===undefined||filePath===null){throw new Error("Missing the required parameter 'filePath' when calling getV3ProjectsIdRepositoryFiles");}// verify the required parameter 'ref' is set
if(ref===undefined||ref===null){throw new Error("Missing the required parameter 'ref' when calling getV3ProjectsIdRepositoryFiles");}var pathParams={'id':id};var queryParams={'file_path':filePath,'ref':ref};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/files','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryRawBlobsSha operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryRawBlobsShaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a raw blob contents by blob sha
     * Get a raw blob contents by blob sha
     * @param {String} id The ID of a project
     * @param {String} sha The commit, branch name, or tag name
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryRawBlobsShaCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdRepositoryRawBlobsSha",value:function getV3ProjectsIdRepositoryRawBlobsSha(id,sha,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryRawBlobsSha");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling getV3ProjectsIdRepositoryRawBlobsSha");}var pathParams={'id':id,'sha':sha};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/raw_blobs/{sha}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryTags operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoTag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a project repository tags
     * Get a project repository tags
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoTag}
     */},{key:"getV3ProjectsIdRepositoryTags",value:function getV3ProjectsIdRepositoryTags(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryTags");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoTag["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/tags','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryTagsTagName operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryTagsTagNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoTag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single repository tag
     * Get a single repository tag
     * @param {String} id The ID of a project
     * @param {String} tagName The name of the tag
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryTagsTagNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoTag}
     */},{key:"getV3ProjectsIdRepositoryTagsTagName",value:function getV3ProjectsIdRepositoryTagsTagName(id,tagName,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryTagsTagName");}// verify the required parameter 'tagName' is set
if(tagName===undefined||tagName===null){throw new Error("Missing the required parameter 'tagName' when calling getV3ProjectsIdRepositoryTagsTagName");}var pathParams={'id':id,'tag_name':tagName};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoTag["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/tags/{tag_name}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRepositoryTree operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRepositoryTreeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoTreeObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a project repository tree
     * Get a project repository tree
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {String} opts.refName The name of a repository branch or tag, if not given the default branch is used
     * @param {String} opts.path The path of the tree
     * @param {Boolean} opts.recursive Used to get a recursive tree
     * @param {module:api/ProjectsApi~getV3ProjectsIdRepositoryTreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoTreeObject}
     */},{key:"getV3ProjectsIdRepositoryTree",value:function getV3ProjectsIdRepositoryTree(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRepositoryTree");}var pathParams={'id':id};var queryParams={'ref_name':opts['refName'],'path':opts['path'],'recursive':opts['recursive']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoTreeObject["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/tree','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdRunners operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdRunnersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Runner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get runners available for project
     * Get runners available for project
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.scope The scope of specific runners to show
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdRunnersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Runner}
     */},{key:"getV3ProjectsIdRunners",value:function getV3ProjectsIdRunners(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdRunners");}var pathParams={'id':id};var queryParams={'scope':opts['scope'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Runner["default"];return this.apiClient.callApi('/v3/projects/{id}/runners','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdServicesServiceSlug operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdServicesServiceSlugCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectService} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the service settings for project
     * Get the service settings for project
     * @param {module:model/String} serviceSlug The name of the service
     * @param {Number} id 
     * @param {module:api/ProjectsApi~getV3ProjectsIdServicesServiceSlugCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectService}
     */},{key:"getV3ProjectsIdServicesServiceSlug",value:function getV3ProjectsIdServicesServiceSlug(serviceSlug,id,callback){var postBody=null;// verify the required parameter 'serviceSlug' is set
if(serviceSlug===undefined||serviceSlug===null){throw new Error("Missing the required parameter 'serviceSlug' when calling getV3ProjectsIdServicesServiceSlug");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdServicesServiceSlug");}var pathParams={'service_slug':serviceSlug,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_ProjectService["default"];return this.apiClient.callApi('/v3/projects/{id}/services/{service_slug}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdSnippets operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdSnippetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectSnippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get all project snippets
     * Get all project snippets
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdSnippetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectSnippet}
     */},{key:"getV3ProjectsIdSnippets",value:function getV3ProjectsIdSnippets(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdSnippets");}var pathParams={'id':id};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_ProjectSnippet["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdSnippetsNoteableIdNotes operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdSnippetsNoteableIdNotesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project +noteable+ notes
     * Get a list of project +noteable+ notes
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdSnippetsNoteableIdNotesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"getV3ProjectsIdSnippetsNoteableIdNotes",value:function getV3ProjectsIdSnippetsNoteableIdNotes(id,noteableId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdSnippetsNoteableIdNotes");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling getV3ProjectsIdSnippetsNoteableIdNotes");}var pathParams={'id':id,'noteable_id':noteableId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{noteable_id}/notes','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdSnippetsNoteableIdNotesNoteId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdSnippetsNoteableIdNotesNoteIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single +noteable+ note
     * Get a single +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteId The ID of a note
     * @param {Number} noteableId The ID of the noteable
     * @param {module:api/ProjectsApi~getV3ProjectsIdSnippetsNoteableIdNotesNoteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"getV3ProjectsIdSnippetsNoteableIdNotesNoteId",value:function getV3ProjectsIdSnippetsNoteableIdNotesNoteId(id,noteId,noteableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdSnippetsNoteableIdNotesNoteId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling getV3ProjectsIdSnippetsNoteableIdNotesNoteId");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling getV3ProjectsIdSnippetsNoteableIdNotesNoteId");}var pathParams={'id':id,'note_id':noteId,'noteable_id':noteableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{noteable_id}/notes/{note_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdSnippetsSnippetId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectSnippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a single project snippet
     * Get a single project snippet
     * @param {String} id The ID of a project
     * @param {Number} snippetId The ID of a project snippet
     * @param {module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectSnippet}
     */},{key:"getV3ProjectsIdSnippetsSnippetId",value:function getV3ProjectsIdSnippetsSnippetId(id,snippetId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdSnippetsSnippetId");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling getV3ProjectsIdSnippetsSnippetId");}var pathParams={'id':id,'snippet_id':snippetId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_ProjectSnippet["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdSnippetsSnippetIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project +awardable+ award emoji
     * This feature was introduced in 8.9
     * @param {String} id The ID of a project
     * @param {Number} snippetId The ID of an Issue, Merge Request or Snippet
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdSnippetsSnippetIdAwardEmoji",value:function getV3ProjectsIdSnippetsSnippetIdAwardEmoji(id,snippetId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdSnippetsSnippetIdAwardEmoji");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling getV3ProjectsIdSnippetsSnippetIdAwardEmoji");}var pathParams={'id':id,'snippet_id':snippetId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}/award_emoji','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of the award
     * @param {Number} id 
     * @param {Number} snippetId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId",value:function getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(awardId,id,snippetId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'snippet_id':snippetId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of project +awardable+ award emoji
     * This feature was introduced in 8.9
     * @param {Number} id 
     * @param {Number} snippetId 
     * @param {Number} noteId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji",value:function getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(id,snippetId,noteId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji");}var pathParams={'id':id,'snippet_id':snippetId,'note_id':noteId};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific award emoji
     * This feature was introduced in 8.9
     * @param {Number} awardId The ID of the award
     * @param {Number} id 
     * @param {Number} snippetId 
     * @param {Number} noteId 
     * @param {module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId",value:function getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(awardId,id,snippetId,noteId,callback){var postBody=null;// verify the required parameter 'awardId' is set
if(awardId===undefined||awardId===null){throw new Error("Missing the required parameter 'awardId' when calling getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId");}var pathParams={'award_id':awardId,'id':id,'snippet_id':snippetId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdSnippetsSnippetIdRaw operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdRawCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a raw project snippet
     * Get a raw project snippet
     * @param {String} id The ID of a project
     * @param {Number} snippetId The ID of a project snippet
     * @param {module:api/ProjectsApi~getV3ProjectsIdSnippetsSnippetIdRawCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"getV3ProjectsIdSnippetsSnippetIdRaw",value:function getV3ProjectsIdSnippetsSnippetIdRaw(id,snippetId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdSnippetsSnippetIdRaw");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling getV3ProjectsIdSnippetsSnippetIdRaw");}var pathParams={'id':id,'snippet_id':snippetId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}/raw','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdTriggers operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdTriggersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get triggers list
     * Get triggers list
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdTriggersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trigger}
     */},{key:"getV3ProjectsIdTriggers",value:function getV3ProjectsIdTriggers(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdTriggers");}var pathParams={'id':id};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Trigger["default"];return this.apiClient.callApi('/v3/projects/{id}/triggers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdTriggersToken operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdTriggersTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get specific trigger of a project
     * Get specific trigger of a project
     * @param {String} id The ID of a project
     * @param {String} token The unique token of trigger
     * @param {module:api/ProjectsApi~getV3ProjectsIdTriggersTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trigger}
     */},{key:"getV3ProjectsIdTriggersToken",value:function getV3ProjectsIdTriggersToken(id,token,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdTriggersToken");}// verify the required parameter 'token' is set
if(token===undefined||token===null){throw new Error("Missing the required parameter 'token' when calling getV3ProjectsIdTriggersToken");}var pathParams={'id':id,'token':token};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Trigger["default"];return this.apiClient.callApi('/v3/projects/{id}/triggers/{token}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdUsers operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserBasic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get the users list of a project
     * Get the users list of a project
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Return list of users matching the search criteria
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserBasic}
     */},{key:"getV3ProjectsIdUsers",value:function getV3ProjectsIdUsers(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdUsers");}var pathParams={'id':id};var queryParams={'search':opts['search'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_UserBasic["default"];return this.apiClient.callApi('/v3/projects/{id}/users','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdVariables operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdVariablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Variable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get project variables
     * Get project variables
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsIdVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Variable}
     */},{key:"getV3ProjectsIdVariables",value:function getV3ProjectsIdVariables(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdVariables");}var pathParams={'id':id};var queryParams={'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Variable["default"];return this.apiClient.callApi('/v3/projects/{id}/variables','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsIdVariablesKey operation.
     * @callback module:api/ProjectsApi~getV3ProjectsIdVariablesKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Variable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a specific variable from a project
     * Get a specific variable from a project
     * @param {String} id The ID of a project
     * @param {String} key The key of the variable
     * @param {module:api/ProjectsApi~getV3ProjectsIdVariablesKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Variable}
     */},{key:"getV3ProjectsIdVariablesKey",value:function getV3ProjectsIdVariablesKey(id,key,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling getV3ProjectsIdVariablesKey");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new Error("Missing the required parameter 'key' when calling getV3ProjectsIdVariablesKey");}var pathParams={'id':id,'key':key};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Variable["default"];return this.apiClient.callApi('/v3/projects/{id}/variables/{key}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsOwned operation.
     * @callback module:api/ProjectsApi~getV3ProjectsOwnedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BasicProjectDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get an owned projects list for authenticated user
     * Get an owned projects list for authenticated user
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.orderBy Return projects ordered by field (default to 'created_at')
     * @param {module:model/String} opts.sort Return projects sorted in ascending and descending order (default to 'desc')
     * @param {Boolean} opts.archived Limit by archived status
     * @param {module:model/String} opts.visibility Limit by visibility
     * @param {String} opts.search Return list of authorized projects matching the search criteria
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {Boolean} opts.simple Return only the ID, URL, name, and path of each project
     * @param {Boolean} opts.statistics Include project statistics
     * @param {module:api/ProjectsApi~getV3ProjectsOwnedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BasicProjectDetails}
     */},{key:"getV3ProjectsOwned",value:function getV3ProjectsOwned(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'order_by':opts['orderBy'],'sort':opts['sort'],'archived':opts['archived'],'visibility':opts['visibility'],'search':opts['search'],'page':opts['page'],'per_page':opts['perPage'],'simple':opts['simple'],'statistics':opts['statistics']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_BasicProjectDetails["default"];return this.apiClient.callApi('/v3/projects/owned','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsSearchQuery operation.
     * @callback module:api/ProjectsApi~getV3ProjectsSearchQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Search for projects the current user has access to
     * Search for projects the current user has access to
     * @param {String} query The project name to be searched
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.orderBy Return projects ordered by field (default to 'created_at')
     * @param {module:model/String} opts.sort Return projects sorted in ascending and descending order (default to 'desc')
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/ProjectsApi~getV3ProjectsSearchQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */},{key:"getV3ProjectsSearchQuery",value:function getV3ProjectsSearchQuery(query,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'query' is set
if(query===undefined||query===null){throw new Error("Missing the required parameter 'query' when calling getV3ProjectsSearchQuery");}var pathParams={'query':query};var queryParams={'order_by':opts['orderBy'],'sort':opts['sort'],'page':opts['page'],'per_page':opts['perPage']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Project["default"];return this.apiClient.callApi('/v3/projects/search/{query}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsStarred operation.
     * @callback module:api/ProjectsApi~getV3ProjectsStarredCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BasicProjectDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets starred project for the authenticated user
     * Gets starred project for the authenticated user
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.orderBy Return projects ordered by field (default to 'created_at')
     * @param {module:model/String} opts.sort Return projects sorted in ascending and descending order (default to 'desc')
     * @param {Boolean} opts.archived Limit by archived status
     * @param {module:model/String} opts.visibility Limit by visibility
     * @param {String} opts.search Return list of authorized projects matching the search criteria
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {Boolean} opts.simple Return only the ID, URL, name, and path of each project
     * @param {module:api/ProjectsApi~getV3ProjectsStarredCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BasicProjectDetails}
     */},{key:"getV3ProjectsStarred",value:function getV3ProjectsStarred(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'order_by':opts['orderBy'],'sort':opts['sort'],'archived':opts['archived'],'visibility':opts['visibility'],'search':opts['search'],'page':opts['page'],'per_page':opts['perPage'],'simple':opts['simple']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_BasicProjectDetails["default"];return this.apiClient.callApi('/v3/projects/starred','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the getV3ProjectsVisible operation.
     * @callback module:api/ProjectsApi~getV3ProjectsVisibleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BasicProjectDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Get a list of visible projects for authenticated user
     * Get a list of visible projects for authenticated user
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.orderBy Return projects ordered by field (default to 'created_at')
     * @param {module:model/String} opts.sort Return projects sorted in ascending and descending order (default to 'desc')
     * @param {Boolean} opts.archived Limit by archived status
     * @param {module:model/String} opts.visibility Limit by visibility
     * @param {String} opts.search Return list of authorized projects matching the search criteria
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {Boolean} opts.simple Return only the ID, URL, name, and path of each project
     * @param {module:api/ProjectsApi~getV3ProjectsVisibleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BasicProjectDetails}
     */},{key:"getV3ProjectsVisible",value:function getV3ProjectsVisible(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'order_by':opts['orderBy'],'sort':opts['sort'],'archived':opts['archived'],'visibility':opts['visibility'],'search':opts['search'],'page':opts['page'],'per_page':opts['perPage'],'simple':opts['simple']};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_BasicProjectDetails["default"];return this.apiClient.callApi('/v3/projects/visible','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3Projects operation.
     * @callback module:api/ProjectsApi~postV3ProjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create new project
     * Create new project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */},{key:"postV3Projects",value:function postV3Projects(UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3Projects");}var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Project["default"];return this.apiClient.callApi('/v3/projects','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsForkId operation.
     * @callback module:api/ProjectsApi~postV3ProjectsForkIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Fork new project for the current user or provided namespace.
     * Fork new project for the current user or provided namespace.
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsForkIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */},{key:"postV3ProjectsForkId",value:function postV3ProjectsForkId(id,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsForkId");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Project["default"];return this.apiClient.callApi('/v3/projects/fork/{id}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdAccessRequests operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdAccessRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessRequester} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Requests access for the authenticated user to a project.
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {module:api/ProjectsApi~postV3ProjectsIdAccessRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessRequester}
     */},{key:"postV3ProjectsIdAccessRequests",value:function postV3ProjectsIdAccessRequests(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdAccessRequests");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_AccessRequester["default"];return this.apiClient.callApi('/v3/projects/{id}/access_requests','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdArchive operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdArchiveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Archive a project
     * Archive a project
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~postV3ProjectsIdArchiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */},{key:"postV3ProjectsIdArchive",value:function postV3ProjectsIdArchive(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdArchive");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Project["default"];return this.apiClient.callApi('/v3/projects/{id}/archive','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdBoardsBoardIdLists operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdBoardsBoardIdListsCallback
     * @param {String} error Error message, if any.
     * @param {Array} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new board list
     * This feature was introduced in 8.13
     * @param {String} id The ID of a project
     * @param {Number} boardId The ID of a board
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdBoardsBoardIdListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array}
     */},{key:"postV3ProjectsIdBoardsBoardIdLists",value:function postV3ProjectsIdBoardsBoardIdLists(id,boardId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdBoardsBoardIdLists");}// verify the required parameter 'boardId' is set
if(boardId===undefined||boardId===null){throw new Error("Missing the required parameter 'boardId' when calling postV3ProjectsIdBoardsBoardIdLists");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdBoardsBoardIdLists");}var pathParams={'id':id,'board_id':boardId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=Array;return this.apiClient.callApi('/v3/projects/{id}/boards/{board_id}/lists','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdBuildsBuildIdArtifactsKeep operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdArtifactsKeepCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Build} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Keep the artifacts to prevent them from being deleted
     * Keep the artifacts to prevent them from being deleted
     * @param {String} id The ID of a project
     * @param {Number} buildId The ID of a build
     * @param {module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdArtifactsKeepCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Build}
     */},{key:"postV3ProjectsIdBuildsBuildIdArtifactsKeep",value:function postV3ProjectsIdBuildsBuildIdArtifactsKeep(id,buildId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdBuildsBuildIdArtifactsKeep");}// verify the required parameter 'buildId' is set
if(buildId===undefined||buildId===null){throw new Error("Missing the required parameter 'buildId' when calling postV3ProjectsIdBuildsBuildIdArtifactsKeep");}var pathParams={'id':id,'build_id':buildId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Build["default"];return this.apiClient.callApi('/v3/projects/{id}/builds/{build_id}/artifacts/keep','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdBuildsBuildIdCancel operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdCancelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Build} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Cancel a specific build of a project
     * Cancel a specific build of a project
     * @param {String} id The ID of a project
     * @param {Number} buildId The ID of a build
     * @param {module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdCancelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Build}
     */},{key:"postV3ProjectsIdBuildsBuildIdCancel",value:function postV3ProjectsIdBuildsBuildIdCancel(id,buildId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdBuildsBuildIdCancel");}// verify the required parameter 'buildId' is set
if(buildId===undefined||buildId===null){throw new Error("Missing the required parameter 'buildId' when calling postV3ProjectsIdBuildsBuildIdCancel");}var pathParams={'id':id,'build_id':buildId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Build["default"];return this.apiClient.callApi('/v3/projects/{id}/builds/{build_id}/cancel','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdBuildsBuildIdErase operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdEraseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Build} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Erase build (remove artifacts and build trace)
     * Erase build (remove artifacts and build trace)
     * @param {String} id The ID of a project
     * @param {Number} buildId The ID of a build
     * @param {module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdEraseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Build}
     */},{key:"postV3ProjectsIdBuildsBuildIdErase",value:function postV3ProjectsIdBuildsBuildIdErase(id,buildId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdBuildsBuildIdErase");}// verify the required parameter 'buildId' is set
if(buildId===undefined||buildId===null){throw new Error("Missing the required parameter 'buildId' when calling postV3ProjectsIdBuildsBuildIdErase");}var pathParams={'id':id,'build_id':buildId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Build["default"];return this.apiClient.callApi('/v3/projects/{id}/builds/{build_id}/erase','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdBuildsBuildIdPlay operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdPlayCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Build} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Trigger a manual build
     * This feature was added in GitLab 8.11
     * @param {String} id The ID of a project
     * @param {Number} buildId The ID of a Build
     * @param {module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdPlayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Build}
     */},{key:"postV3ProjectsIdBuildsBuildIdPlay",value:function postV3ProjectsIdBuildsBuildIdPlay(id,buildId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdBuildsBuildIdPlay");}// verify the required parameter 'buildId' is set
if(buildId===undefined||buildId===null){throw new Error("Missing the required parameter 'buildId' when calling postV3ProjectsIdBuildsBuildIdPlay");}var pathParams={'id':id,'build_id':buildId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Build["default"];return this.apiClient.callApi('/v3/projects/{id}/builds/{build_id}/play','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdBuildsBuildIdRetry operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdRetryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Build} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Retry a specific build of a project
     * Retry a specific build of a project
     * @param {String} id The ID of a project
     * @param {Number} buildId The ID of a build
     * @param {module:api/ProjectsApi~postV3ProjectsIdBuildsBuildIdRetryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Build}
     */},{key:"postV3ProjectsIdBuildsBuildIdRetry",value:function postV3ProjectsIdBuildsBuildIdRetry(id,buildId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdBuildsBuildIdRetry");}// verify the required parameter 'buildId' is set
if(buildId===undefined||buildId===null){throw new Error("Missing the required parameter 'buildId' when calling postV3ProjectsIdBuildsBuildIdRetry");}var pathParams={'id':id,'build_id':buildId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Build["default"];return this.apiClient.callApi('/v3/projects/{id}/builds/{build_id}/retry','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdDeployKeys operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdDeployKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add new deploy key to currently authenticated user
     * Add new deploy key to currently authenticated user
     * @param {String} id The ID of the project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdDeployKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"postV3ProjectsIdDeployKeys",value:function postV3ProjectsIdDeployKeys(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdDeployKeys");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdDeployKeys");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/deploy_keys','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdDeployKeysKeyIdEnable operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdDeployKeysKeyIdEnableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Enable a deploy key for a project
     * This feature was added in GitLab 8.11
     * @param {String} id The ID of the project
     * @param {Number} keyId The ID of the deploy key
     * @param {module:api/ProjectsApi~postV3ProjectsIdDeployKeysKeyIdEnableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"postV3ProjectsIdDeployKeysKeyIdEnable",value:function postV3ProjectsIdDeployKeysKeyIdEnable(id,keyId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdDeployKeysKeyIdEnable");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling postV3ProjectsIdDeployKeysKeyIdEnable");}var pathParams={'id':id,'key_id':keyId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/deploy_keys/{key_id}/enable','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdEnvironments operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdEnvironmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new environment
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */},{key:"postV3ProjectsIdEnvironments",value:function postV3ProjectsIdEnvironments(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdEnvironments");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdEnvironments");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Environment["default"];return this.apiClient.callApi('/v3/projects/{id}/environments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdForkForkedFromId operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdForkForkedFromIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Mark this project as forked from another
     * Mark this project as forked from another
     * @param {String} id The ID of a project
     * @param {String} forkedFromId The ID of the project it was forked from
     * @param {module:api/ProjectsApi~postV3ProjectsIdForkForkedFromIdCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdForkForkedFromId",value:function postV3ProjectsIdForkForkedFromId(id,forkedFromId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdForkForkedFromId");}// verify the required parameter 'forkedFromId' is set
if(forkedFromId===undefined||forkedFromId===null){throw new Error("Missing the required parameter 'forkedFromId' when calling postV3ProjectsIdForkForkedFromId");}var pathParams={'id':id,'forked_from_id':forkedFromId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/fork/{forked_from_id}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdHooks operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdHooksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add hook to project
     * Add hook to project
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdHooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectHook}
     */},{key:"postV3ProjectsIdHooks",value:function postV3ProjectsIdHooks(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdHooks");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdHooks");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_ProjectHook["default"];return this.apiClient.callApi('/v3/projects/{id}/hooks','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssues operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new project issue
     * Create a new project issue
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"postV3ProjectsIdIssues",value:function postV3ProjectsIdIssues(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssues");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdIssues");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/v3/projects/{id}/issues','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesIssueIdAddSpentTime operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdAddSpentTimeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add spent time for a project issue
     * Add spent time for a project issue
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of a project issue
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdAddSpentTimeCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdIssuesIssueIdAddSpentTime",value:function postV3ProjectsIdIssuesIssueIdAddSpentTime(id,issueId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesIssueIdAddSpentTime");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling postV3ProjectsIdIssuesIssueIdAddSpentTime");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdIssuesIssueIdAddSpentTime");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/add_spent_time','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesIssueIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Award a new Emoji
     * This feature was introduced in 8.9
     * @param {Number} id 
     * @param {Number} issueId 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"postV3ProjectsIdIssuesIssueIdAwardEmoji",value:function postV3ProjectsIdIssuesIssueIdAwardEmoji(id,issueId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesIssueIdAwardEmoji");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling postV3ProjectsIdIssuesIssueIdAwardEmoji");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdIssuesIssueIdAwardEmoji");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/award_emoji','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesIssueIdMove operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdMoveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Move an existing issue
     * Move an existing issue
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of a project issue
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdMoveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"postV3ProjectsIdIssuesIssueIdMove",value:function postV3ProjectsIdIssuesIssueIdMove(id,issueId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesIssueIdMove");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling postV3ProjectsIdIssuesIssueIdMove");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdIssuesIssueIdMove");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/move','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Award a new Emoji
     * This feature was introduced in 8.9
     * @param {Number} id 
     * @param {Number} issueId 
     * @param {Number} noteId 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji",value:function postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(id,issueId,noteId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji");}var pathParams={'id':id,'issue_id':issueId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesIssueIdResetSpentTime operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdResetSpentTimeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Reset spent time for a project issue
     * Reset spent time for a project issue
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of a project issue
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdResetSpentTimeCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdIssuesIssueIdResetSpentTime",value:function postV3ProjectsIdIssuesIssueIdResetSpentTime(id,issueId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesIssueIdResetSpentTime");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling postV3ProjectsIdIssuesIssueIdResetSpentTime");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/reset_spent_time','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesIssueIdResetTimeEstimate operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdResetTimeEstimateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Reset the time estimate for a project issue
     * Reset the time estimate for a project issue
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of a project issue
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdResetTimeEstimateCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdIssuesIssueIdResetTimeEstimate",value:function postV3ProjectsIdIssuesIssueIdResetTimeEstimate(id,issueId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesIssueIdResetTimeEstimate");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling postV3ProjectsIdIssuesIssueIdResetTimeEstimate");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/reset_time_estimate','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesIssueIdTimeEstimate operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdTimeEstimateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set a time estimate for a project issue
     * Set a time estimate for a project issue
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of a project issue
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdTimeEstimateCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdIssuesIssueIdTimeEstimate",value:function postV3ProjectsIdIssuesIssueIdTimeEstimate(id,issueId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesIssueIdTimeEstimate");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling postV3ProjectsIdIssuesIssueIdTimeEstimate");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdIssuesIssueIdTimeEstimate");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/time_estimate','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesIssueIdTodo operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdTodoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a todo on an issuable
     * Create a todo on an issuable
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of an issuable
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesIssueIdTodoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Todo}
     */},{key:"postV3ProjectsIdIssuesIssueIdTodo",value:function postV3ProjectsIdIssuesIssueIdTodo(id,issueId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesIssueIdTodo");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling postV3ProjectsIdIssuesIssueIdTodo");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Todo["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}/todo','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesNoteableIdNotes operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesNoteableIdNotesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new +noteable+ note
     * Create a new +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesNoteableIdNotesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"postV3ProjectsIdIssuesNoteableIdNotes",value:function postV3ProjectsIdIssuesNoteableIdNotes(id,noteableId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesNoteableIdNotes");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling postV3ProjectsIdIssuesNoteableIdNotes");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdIssuesNoteableIdNotes");}var pathParams={'id':id,'noteable_id':noteableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{noteable_id}/notes','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdIssuesSubscribableIdSubscription operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdIssuesSubscribableIdSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Subscribe to a resource
     * Subscribe to a resource
     * @param {String} id The ID of a project
     * @param {String} subscribableId The ID of a resource
     * @param {module:api/ProjectsApi~postV3ProjectsIdIssuesSubscribableIdSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"postV3ProjectsIdIssuesSubscribableIdSubscription",value:function postV3ProjectsIdIssuesSubscribableIdSubscription(id,subscribableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdIssuesSubscribableIdSubscription");}// verify the required parameter 'subscribableId' is set
if(subscribableId===undefined||subscribableId===null){throw new Error("Missing the required parameter 'subscribableId' when calling postV3ProjectsIdIssuesSubscribableIdSubscription");}var pathParams={'id':id,'subscribable_id':subscribableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{subscribable_id}/subscription','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdKeys operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add new deploy key to currently authenticated user
     * Add new deploy key to currently authenticated user
     * @param {String} id The ID of the project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"postV3ProjectsIdKeys",value:function postV3ProjectsIdKeys(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdKeys");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdKeys");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/keys','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdKeysKeyIdEnable operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdKeysKeyIdEnableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Enable a deploy key for a project
     * This feature was added in GitLab 8.11
     * @param {String} id The ID of the project
     * @param {Number} keyId The ID of the deploy key
     * @param {module:api/ProjectsApi~postV3ProjectsIdKeysKeyIdEnableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */},{key:"postV3ProjectsIdKeysKeyIdEnable",value:function postV3ProjectsIdKeysKeyIdEnable(id,keyId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdKeysKeyIdEnable");}// verify the required parameter 'keyId' is set
if(keyId===undefined||keyId===null){throw new Error("Missing the required parameter 'keyId' when calling postV3ProjectsIdKeysKeyIdEnable");}var pathParams={'id':id,'key_id':keyId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_SSHKey["default"];return this.apiClient.callApi('/v3/projects/{id}/keys/{key_id}/enable','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdLabels operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new label
     * Create a new label
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"postV3ProjectsIdLabels",value:function postV3ProjectsIdLabels(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdLabels");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdLabels");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/v3/projects/{id}/labels','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdLabelsSubscribableIdSubscription operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdLabelsSubscribableIdSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Subscribe to a resource
     * Subscribe to a resource
     * @param {String} id The ID of a project
     * @param {String} subscribableId The ID of a resource
     * @param {module:api/ProjectsApi~postV3ProjectsIdLabelsSubscribableIdSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"postV3ProjectsIdLabelsSubscribableIdSubscription",value:function postV3ProjectsIdLabelsSubscribableIdSubscription(id,subscribableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdLabelsSubscribableIdSubscription");}// verify the required parameter 'subscribableId' is set
if(subscribableId===undefined||subscribableId===null){throw new Error("Missing the required parameter 'subscribableId' when calling postV3ProjectsIdLabelsSubscribableIdSubscription");}var pathParams={'id':id,'subscribable_id':subscribableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/v3/projects/{id}/labels/{subscribable_id}/subscription','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMembers operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a member to a group or project.
     * Adds a member to a group or project.
     * @param {String} id The project ID
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"postV3ProjectsIdMembers",value:function postV3ProjectsIdMembers(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMembers");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMembers");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/v3/projects/{id}/members','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceedsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Cancel merge if \"Merge When Pipeline Succeeds\" is enabled
     * Cancel merge if \"Merge When Pipeline Succeeds\" is enabled
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceedsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds",value:function postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{merge_request_id}/cancel_merge_when_build_succeeds','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestMergeRequestIdComments operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestMergeRequestIdCommentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MRNote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Post a comment to a merge request
     * Duplicate. DEPRECATED and WILL BE REMOVED in 9.0
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestMergeRequestIdCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MRNote}
     */},{key:"postV3ProjectsIdMergeRequestMergeRequestIdComments",value:function postV3ProjectsIdMergeRequestMergeRequestIdComments(id,mergeRequestId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestMergeRequestIdComments");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestMergeRequestIdComments");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMergeRequestMergeRequestIdComments");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_MRNote["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{merge_request_id}/comments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestSubscribableIdSubscription operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestSubscribableIdSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Subscribe to a resource
     * Subscribe to a resource
     * @param {String} id The ID of a project
     * @param {String} subscribableId The ID of a resource
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestSubscribableIdSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"postV3ProjectsIdMergeRequestSubscribableIdSubscription",value:function postV3ProjectsIdMergeRequestSubscribableIdSubscription(id,subscribableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestSubscribableIdSubscription");}// verify the required parameter 'subscribableId' is set
if(subscribableId===undefined||subscribableId===null){throw new Error("Missing the required parameter 'subscribableId' when calling postV3ProjectsIdMergeRequestSubscribableIdSubscription");}var pathParams={'id':id,'subscribable_id':subscribableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{subscribable_id}/subscription','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequests operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a merge request
     * Create a merge request
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"postV3ProjectsIdMergeRequests",value:function postV3ProjectsIdMergeRequests(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequests");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMergeRequests");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTimeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add spent time for a project merge_request
     * Add spent time for a project merge_request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of a project merge_request
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTimeCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime",value:function postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime(id,mergeRequestId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/add_spent_time','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Award a new Emoji
     * This feature was introduced in 8.9
     * @param {Number} id 
     * @param {Number} mergeRequestId 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji",value:function postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(id,mergeRequestId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceedsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Cancel merge if \"Merge When Pipeline Succeeds\" is enabled
     * Cancel merge if \"Merge When Pipeline Succeeds\" is enabled
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceedsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds",value:function postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/cancel_merge_when_build_succeeds','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsMergeRequestIdComments operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdCommentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MRNote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Post a comment to a merge request
     * Duplicate. DEPRECATED and WILL BE REMOVED in 9.0
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MRNote}
     */},{key:"postV3ProjectsIdMergeRequestsMergeRequestIdComments",value:function postV3ProjectsIdMergeRequestsMergeRequestIdComments(id,mergeRequestId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsMergeRequestIdComments");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdComments");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMergeRequestsMergeRequestIdComments");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_MRNote["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/comments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Award a new Emoji
     * This feature was introduced in 8.9
     * @param {Number} id 
     * @param {Number} mergeRequestId 
     * @param {Number} noteId 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji",value:function postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(id,mergeRequestId,noteId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji");}var pathParams={'id':id,'merge_request_id':mergeRequestId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTimeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Reset spent time for a project merge_request
     * Reset spent time for a project merge_request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of a project merge_request
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTimeCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime",value:function postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/reset_spent_time','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Reset the time estimate for a project merge_request
     * Reset the time estimate for a project merge_request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of a project merge_request
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimateCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate",value:function postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/reset_time_estimate','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set a time estimate for a project merge_request
     * Set a time estimate for a project merge_request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of a project merge_request
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimateCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate",value:function postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate(id,mergeRequestId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/time_estimate','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsMergeRequestIdTodo operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdTodoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a todo on an issuable
     * Create a todo on an issuable
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId The ID of an issuable
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsMergeRequestIdTodoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Todo}
     */},{key:"postV3ProjectsIdMergeRequestsMergeRequestIdTodo",value:function postV3ProjectsIdMergeRequestsMergeRequestIdTodo(id,mergeRequestId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsMergeRequestIdTodo");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling postV3ProjectsIdMergeRequestsMergeRequestIdTodo");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Todo["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/todo','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsNoteableIdNotes operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsNoteableIdNotesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new +noteable+ note
     * Create a new +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsNoteableIdNotesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"postV3ProjectsIdMergeRequestsNoteableIdNotes",value:function postV3ProjectsIdMergeRequestsNoteableIdNotes(id,noteableId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsNoteableIdNotes");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling postV3ProjectsIdMergeRequestsNoteableIdNotes");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMergeRequestsNoteableIdNotes");}var pathParams={'id':id,'noteable_id':noteableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{noteable_id}/notes','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMergeRequestsSubscribableIdSubscription operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMergeRequestsSubscribableIdSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Subscribe to a resource
     * Subscribe to a resource
     * @param {String} id The ID of a project
     * @param {String} subscribableId The ID of a resource
     * @param {module:api/ProjectsApi~postV3ProjectsIdMergeRequestsSubscribableIdSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"postV3ProjectsIdMergeRequestsSubscribableIdSubscription",value:function postV3ProjectsIdMergeRequestsSubscribableIdSubscription(id,subscribableId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMergeRequestsSubscribableIdSubscription");}// verify the required parameter 'subscribableId' is set
if(subscribableId===undefined||subscribableId===null){throw new Error("Missing the required parameter 'subscribableId' when calling postV3ProjectsIdMergeRequestsSubscribableIdSubscription");}var pathParams={'id':id,'subscribable_id':subscribableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{subscribable_id}/subscription','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdMilestones operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdMilestonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new project milestone
     * Create a new project milestone
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdMilestonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */},{key:"postV3ProjectsIdMilestones",value:function postV3ProjectsIdMilestones(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdMilestones");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdMilestones");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Milestone["default"];return this.apiClient.callApi('/v3/projects/{id}/milestones','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdPipeline operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdPipelineCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pipeline} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new pipeline
     * This feature was introduced in GitLab 8.14
     * @param {String} id The project ID
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdPipelineCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pipeline}
     */},{key:"postV3ProjectsIdPipeline",value:function postV3ProjectsIdPipeline(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdPipeline");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdPipeline");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Pipeline["default"];return this.apiClient.callApi('/v3/projects/{id}/pipeline','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdPipelinesPipelineIdCancel operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdPipelinesPipelineIdCancelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pipeline} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Cancel all builds in the pipeline
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Number} pipelineId The pipeline ID
     * @param {module:api/ProjectsApi~postV3ProjectsIdPipelinesPipelineIdCancelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pipeline}
     */},{key:"postV3ProjectsIdPipelinesPipelineIdCancel",value:function postV3ProjectsIdPipelinesPipelineIdCancel(id,pipelineId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdPipelinesPipelineIdCancel");}// verify the required parameter 'pipelineId' is set
if(pipelineId===undefined||pipelineId===null){throw new Error("Missing the required parameter 'pipelineId' when calling postV3ProjectsIdPipelinesPipelineIdCancel");}var pathParams={'id':id,'pipeline_id':pipelineId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Pipeline["default"];return this.apiClient.callApi('/v3/projects/{id}/pipelines/{pipeline_id}/cancel','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdPipelinesPipelineIdRetry operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdPipelinesPipelineIdRetryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pipeline} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Retry failed builds in the pipeline
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Number} pipelineId The pipeline ID
     * @param {module:api/ProjectsApi~postV3ProjectsIdPipelinesPipelineIdRetryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pipeline}
     */},{key:"postV3ProjectsIdPipelinesPipelineIdRetry",value:function postV3ProjectsIdPipelinesPipelineIdRetry(id,pipelineId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdPipelinesPipelineIdRetry");}// verify the required parameter 'pipelineId' is set
if(pipelineId===undefined||pipelineId===null){throw new Error("Missing the required parameter 'pipelineId' when calling postV3ProjectsIdPipelinesPipelineIdRetry");}var pathParams={'id':id,'pipeline_id':pipelineId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Pipeline["default"];return this.apiClient.callApi('/v3/projects/{id}/pipelines/{pipeline_id}/retry','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdRefReftriggerBuilds operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdRefReftriggerBuildsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TriggerRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Trigger a GitLab project build
     * Trigger a GitLab project build
     * @param {String} id The ID of a project
     * @param {String} ref The commit sha or name of a branch or tag
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdRefReftriggerBuildsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TriggerRequest}
     */},{key:"postV3ProjectsIdRefReftriggerBuilds",value:function postV3ProjectsIdRefReftriggerBuilds(id,ref,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdRefReftriggerBuilds");}// verify the required parameter 'ref' is set
if(ref===undefined||ref===null){throw new Error("Missing the required parameter 'ref' when calling postV3ProjectsIdRefReftriggerBuilds");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdRefReftriggerBuilds");}var pathParams={'id':id,'ref':ref};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_TriggerRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/(ref/{ref}/)trigger/builds','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdRepositoryBranches operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdRepositoryBranchesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create branch
     * Create branch
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdRepositoryBranchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoBranch}
     */},{key:"postV3ProjectsIdRepositoryBranches",value:function postV3ProjectsIdRepositoryBranches(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdRepositoryBranches");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdRepositoryBranches");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_RepoBranch["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/branches','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdRepositoryCommits operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdRepositoryCommitsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoCommitDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Commit multiple file changes as one commit
     * This feature was introduced in GitLab 8.13
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdRepositoryCommitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoCommitDetail}
     */},{key:"postV3ProjectsIdRepositoryCommits",value:function postV3ProjectsIdRepositoryCommits(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdRepositoryCommits");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdRepositoryCommits");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_RepoCommitDetail["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/commits','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdRepositoryCommitsShaCherryPick operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdRepositoryCommitsShaCherryPickCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Cherry pick commit into a branch
     * This feature was introduced in GitLab 8.15
     * @param {String} id The ID of a project
     * @param {String} sha A commit sha to be cherry picked
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdRepositoryCommitsShaCherryPickCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoCommit}
     */},{key:"postV3ProjectsIdRepositoryCommitsShaCherryPick",value:function postV3ProjectsIdRepositoryCommitsShaCherryPick(id,sha,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdRepositoryCommitsShaCherryPick");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling postV3ProjectsIdRepositoryCommitsShaCherryPick");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdRepositoryCommitsShaCherryPick");}var pathParams={'id':id,'sha':sha};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_RepoCommit["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/commits/{sha}/cherry_pick','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdRepositoryCommitsShaComments operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdRepositoryCommitsShaCommentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitNote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Post comment to commit
     * Post comment to commit
     * @param {String} id The ID of a project
     * @param {String} sha The commit's SHA
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdRepositoryCommitsShaCommentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitNote}
     */},{key:"postV3ProjectsIdRepositoryCommitsShaComments",value:function postV3ProjectsIdRepositoryCommitsShaComments(id,sha,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdRepositoryCommitsShaComments");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling postV3ProjectsIdRepositoryCommitsShaComments");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdRepositoryCommitsShaComments");}var pathParams={'id':id,'sha':sha};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_CommitNote["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/commits/{sha}/comments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdRepositoryFiles operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdRepositoryFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create new file in repository
     * Create new file in repository
     * @param {String} id The project ID
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdRepositoryFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdRepositoryFiles",value:function postV3ProjectsIdRepositoryFiles(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdRepositoryFiles");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdRepositoryFiles");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/files','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdRepositoryTags operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdRepositoryTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoTag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new repository tag
     * Create a new repository tag
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdRepositoryTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoTag}
     */},{key:"postV3ProjectsIdRepositoryTags",value:function postV3ProjectsIdRepositoryTags(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdRepositoryTags");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdRepositoryTags");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_RepoTag["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/tags','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdRepositoryTagsTagNameRelease operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdRepositoryTagsTagNameReleaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a release note to a tag
     * Add a release note to a tag
     * @param {String} id The ID of a project
     * @param {String} tagName The name of the tag
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdRepositoryTagsTagNameReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */},{key:"postV3ProjectsIdRepositoryTagsTagNameRelease",value:function postV3ProjectsIdRepositoryTagsTagNameRelease(id,tagName,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdRepositoryTagsTagNameRelease");}// verify the required parameter 'tagName' is set
if(tagName===undefined||tagName===null){throw new Error("Missing the required parameter 'tagName' when calling postV3ProjectsIdRepositoryTagsTagNameRelease");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdRepositoryTagsTagNameRelease");}var pathParams={'id':id,'tag_name':tagName};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Release["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/tags/{tag_name}/release','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdRunners operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdRunnersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Runner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Enable a runner for a project
     * Enable a runner for a project
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdRunnersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Runner}
     */},{key:"postV3ProjectsIdRunners",value:function postV3ProjectsIdRunners(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdRunners");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdRunners");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Runner["default"];return this.apiClient.callApi('/v3/projects/{id}/runners','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdServicesMattermostSlashCommandsTrigger operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdServicesMattermostSlashCommandsTriggerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Trigger a slash command for mattermost-slash-commands
     * Added in GitLab 8.13
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdServicesMattermostSlashCommandsTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdServicesMattermostSlashCommandsTrigger",value:function postV3ProjectsIdServicesMattermostSlashCommandsTrigger(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdServicesMattermostSlashCommandsTrigger");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdServicesMattermostSlashCommandsTrigger");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/mattermost_slash_commands/trigger','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdServicesSlackSlashCommandsTrigger operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdServicesSlackSlashCommandsTriggerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Trigger a slash command for slack-slash-commands
     * Added in GitLab 8.13
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdServicesSlackSlashCommandsTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdServicesSlackSlashCommandsTrigger",value:function postV3ProjectsIdServicesSlackSlashCommandsTrigger(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdServicesSlackSlashCommandsTrigger");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdServicesSlackSlashCommandsTrigger");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/slack_slash_commands/trigger','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdShare operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdShareCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectGroupLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Share the project with a group
     * Share the project with a group
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdShareCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectGroupLink}
     */},{key:"postV3ProjectsIdShare",value:function postV3ProjectsIdShare(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdShare");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdShare");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_ProjectGroupLink["default"];return this.apiClient.callApi('/v3/projects/{id}/share','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdSnippets operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdSnippetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectSnippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new project snippet
     * Create a new project snippet
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdSnippetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectSnippet}
     */},{key:"postV3ProjectsIdSnippets",value:function postV3ProjectsIdSnippets(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdSnippets");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdSnippets");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_ProjectSnippet["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdSnippetsNoteableIdNotes operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdSnippetsNoteableIdNotesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new +noteable+ note
     * Create a new +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdSnippetsNoteableIdNotesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"postV3ProjectsIdSnippetsNoteableIdNotes",value:function postV3ProjectsIdSnippetsNoteableIdNotes(id,noteableId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdSnippetsNoteableIdNotes");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling postV3ProjectsIdSnippetsNoteableIdNotes");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdSnippetsNoteableIdNotes");}var pathParams={'id':id,'noteable_id':noteableId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{noteable_id}/notes','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdSnippetsSnippetIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdSnippetsSnippetIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Award a new Emoji
     * This feature was introduced in 8.9
     * @param {Number} id 
     * @param {Number} snippetId 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdSnippetsSnippetIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"postV3ProjectsIdSnippetsSnippetIdAwardEmoji",value:function postV3ProjectsIdSnippetsSnippetIdAwardEmoji(id,snippetId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdSnippetsSnippetIdAwardEmoji");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling postV3ProjectsIdSnippetsSnippetIdAwardEmoji");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdSnippetsSnippetIdAwardEmoji");}var pathParams={'id':id,'snippet_id':snippetId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}/award_emoji','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AwardEmoji} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Award a new Emoji
     * This feature was introduced in 8.9
     * @param {Number} id 
     * @param {Number} snippetId 
     * @param {Number} noteId 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AwardEmoji}
     */},{key:"postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji",value:function postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(id,snippetId,noteId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji");}var pathParams={'id':id,'snippet_id':snippetId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_AwardEmoji["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdStar operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdStarCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Star a project
     * Star a project
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~postV3ProjectsIdStarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */},{key:"postV3ProjectsIdStar",value:function postV3ProjectsIdStar(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdStar");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Project["default"];return this.apiClient.callApi('/v3/projects/{id}/star','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdStatusesSha operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdStatusesShaCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Post status to a commit
     * Post status to a commit
     * @param {String} id The ID of a project
     * @param {String} sha The commit hash
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdStatusesShaCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitStatus}
     */},{key:"postV3ProjectsIdStatusesSha",value:function postV3ProjectsIdStatusesSha(id,sha,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdStatusesSha");}// verify the required parameter 'sha' is set
if(sha===undefined||sha===null){throw new Error("Missing the required parameter 'sha' when calling postV3ProjectsIdStatusesSha");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdStatusesSha");}var pathParams={'id':id,'sha':sha};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_CommitStatus["default"];return this.apiClient.callApi('/v3/projects/{id}/statuses/{sha}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdTriggers operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdTriggersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Trigger} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a trigger
     * Create a trigger
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~postV3ProjectsIdTriggersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Trigger}
     */},{key:"postV3ProjectsIdTriggers",value:function postV3ProjectsIdTriggers(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdTriggers");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Trigger["default"];return this.apiClient.callApi('/v3/projects/{id}/triggers','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdUnarchive operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdUnarchiveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unarchive a project
     * Unarchive a project
     * @param {String} id The ID of a project
     * @param {module:api/ProjectsApi~postV3ProjectsIdUnarchiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */},{key:"postV3ProjectsIdUnarchive",value:function postV3ProjectsIdUnarchive(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdUnarchive");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_Project["default"];return this.apiClient.callApi('/v3/projects/{id}/unarchive','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdUploads operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdUploadsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Upload a file
     * Upload a file
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdUploadsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"postV3ProjectsIdUploads",value:function postV3ProjectsIdUploads(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdUploads");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdUploads");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json','multipart/form-data'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/uploads','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsIdVariables operation.
     * @callback module:api/ProjectsApi~postV3ProjectsIdVariablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Variable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a new variable in a project
     * Create a new variable in a project
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsIdVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Variable}
     */},{key:"postV3ProjectsIdVariables",value:function postV3ProjectsIdVariables(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling postV3ProjectsIdVariables");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsIdVariables");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Variable["default"];return this.apiClient.callApi('/v3/projects/{id}/variables','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the postV3ProjectsUserUserId operation.
     * @callback module:api/ProjectsApi~postV3ProjectsUserUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create new project for a specified user. Only available to admin users.
     * Create new project for a specified user. Only available to admin users.
     * @param {Number} userId The ID of a user
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~postV3ProjectsUserUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */},{key:"postV3ProjectsUserUserId",value:function postV3ProjectsUserUserId(userId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'userId' is set
if(userId===undefined||userId===null){throw new Error("Missing the required parameter 'userId' when calling postV3ProjectsUserUserId");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3ProjectsUserUserId");}var pathParams={'user_id':userId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Project["default"];return this.apiClient.callApi('/v3/projects/user/{user_id}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing project
     * Update an existing project
     * @param {String} id The ID of a project
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */},{key:"putV3ProjectsId",value:function putV3ProjectsId(id,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsId");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Project["default"];return this.apiClient.callApi('/v3/projects/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdAccessRequestsUserIdApprove operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdAccessRequestsUserIdApproveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Approves an access request for the given user.
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Number} userId The user ID of the access requester
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdAccessRequestsUserIdApproveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"putV3ProjectsIdAccessRequestsUserIdApprove",value:function putV3ProjectsIdAccessRequestsUserIdApprove(id,userId,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdAccessRequestsUserIdApprove");}// verify the required parameter 'userId' is set
if(userId===undefined||userId===null){throw new Error("Missing the required parameter 'userId' when calling putV3ProjectsIdAccessRequestsUserIdApprove");}var pathParams={'id':id,'user_id':userId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/v3/projects/{id}/access_requests/{user_id}/approve','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdBoardsBoardIdListsListId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdBoardsBoardIdListsListIdCallback
     * @param {String} error Error message, if any.
     * @param {Array} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Moves a board list to a new position
     * This feature was introduced in 8.13
     * @param {String} id The ID of a project
     * @param {Number} boardId The ID of a board
     * @param {Number} listId The ID of a list
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdBoardsBoardIdListsListIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array}
     */},{key:"putV3ProjectsIdBoardsBoardIdListsListId",value:function putV3ProjectsIdBoardsBoardIdListsListId(id,boardId,listId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdBoardsBoardIdListsListId");}// verify the required parameter 'boardId' is set
if(boardId===undefined||boardId===null){throw new Error("Missing the required parameter 'boardId' when calling putV3ProjectsIdBoardsBoardIdListsListId");}// verify the required parameter 'listId' is set
if(listId===undefined||listId===null){throw new Error("Missing the required parameter 'listId' when calling putV3ProjectsIdBoardsBoardIdListsListId");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdBoardsBoardIdListsListId");}var pathParams={'id':id,'board_id':boardId,'list_id':listId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=Array;return this.apiClient.callApi('/v3/projects/{id}/boards/{board_id}/lists/{list_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdEnvironmentsEnvironmentId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdEnvironmentsEnvironmentIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Environment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates an existing environment
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The project ID
     * @param {Number} environmentId The environment ID
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdEnvironmentsEnvironmentIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Environment}
     */},{key:"putV3ProjectsIdEnvironmentsEnvironmentId",value:function putV3ProjectsIdEnvironmentsEnvironmentId(id,environmentId,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdEnvironmentsEnvironmentId");}// verify the required parameter 'environmentId' is set
if(environmentId===undefined||environmentId===null){throw new Error("Missing the required parameter 'environmentId' when calling putV3ProjectsIdEnvironmentsEnvironmentId");}var pathParams={'id':id,'environment_id':environmentId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Environment["default"];return this.apiClient.callApi('/v3/projects/{id}/environments/{environment_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdHooksHookId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdHooksHookIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing project hook
     * Update an existing project hook
     * @param {String} id The ID of a project
     * @param {Number} hookId The ID of the hook to update
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdHooksHookIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectHook}
     */},{key:"putV3ProjectsIdHooksHookId",value:function putV3ProjectsIdHooksHookId(id,hookId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdHooksHookId");}// verify the required parameter 'hookId' is set
if(hookId===undefined||hookId===null){throw new Error("Missing the required parameter 'hookId' when calling putV3ProjectsIdHooksHookId");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdHooksHookId");}var pathParams={'id':id,'hook_id':hookId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_ProjectHook["default"];return this.apiClient.callApi('/v3/projects/{id}/hooks/{hook_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdIssuesIssueId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdIssuesIssueIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing issue
     * Update an existing issue
     * @param {String} id The ID of a project
     * @param {Number} issueId The ID of a project issue
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdIssuesIssueIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */},{key:"putV3ProjectsIdIssuesIssueId",value:function putV3ProjectsIdIssuesIssueId(id,issueId,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdIssuesIssueId");}// verify the required parameter 'issueId' is set
if(issueId===undefined||issueId===null){throw new Error("Missing the required parameter 'issueId' when calling putV3ProjectsIdIssuesIssueId");}var pathParams={'id':id,'issue_id':issueId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Issue["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{issue_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdIssuesNoteableIdNotesNoteId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdIssuesNoteableIdNotesNoteIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing +noteable+ note
     * Update an existing +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {Number} noteId The ID of a note
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdIssuesNoteableIdNotesNoteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"putV3ProjectsIdIssuesNoteableIdNotesNoteId",value:function putV3ProjectsIdIssuesNoteableIdNotesNoteId(id,noteableId,noteId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdIssuesNoteableIdNotesNoteId");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling putV3ProjectsIdIssuesNoteableIdNotesNoteId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling putV3ProjectsIdIssuesNoteableIdNotesNoteId");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdIssuesNoteableIdNotesNoteId");}var pathParams={'id':id,'noteable_id':noteableId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/issues/{noteable_id}/notes/{note_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdLabels operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Label} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing label. At least one optional parameter is required.
     * Update an existing label. At least one optional parameter is required.
     * @param {String} id The ID of a project
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Label}
     */},{key:"putV3ProjectsIdLabels",value:function putV3ProjectsIdLabels(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdLabels");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdLabels");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Label["default"];return this.apiClient.callApi('/v3/projects/{id}/labels','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdMembersUserId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdMembersUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a member of a group or project.
     * Updates a member of a group or project.
     * @param {String} id The project ID
     * @param {Number} userId The user ID of the new member
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdMembersUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */},{key:"putV3ProjectsIdMembersUserId",value:function putV3ProjectsIdMembersUserId(id,userId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdMembersUserId");}// verify the required parameter 'userId' is set
if(userId===undefined||userId===null){throw new Error("Missing the required parameter 'userId' when calling putV3ProjectsIdMembersUserId");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdMembersUserId");}var pathParams={'id':id,'user_id':userId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Member["default"];return this.apiClient.callApi('/v3/projects/{id}/members/{user_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdMergeRequestMergeRequestId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdMergeRequestMergeRequestIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a merge request
     * Update a merge request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdMergeRequestMergeRequestIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"putV3ProjectsIdMergeRequestMergeRequestId",value:function putV3ProjectsIdMergeRequestMergeRequestId(id,mergeRequestId,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdMergeRequestMergeRequestId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling putV3ProjectsIdMergeRequestMergeRequestId");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{merge_request_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdMergeRequestMergeRequestIdMerge operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdMergeRequestMergeRequestIdMergeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Merge a merge request
     * Merge a merge request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdMergeRequestMergeRequestIdMergeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"putV3ProjectsIdMergeRequestMergeRequestIdMerge",value:function putV3ProjectsIdMergeRequestMergeRequestIdMerge(id,mergeRequestId,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdMergeRequestMergeRequestIdMerge");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling putV3ProjectsIdMergeRequestMergeRequestIdMerge");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_request/{merge_request_id}/merge','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdMergeRequestsMergeRequestId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdMergeRequestsMergeRequestIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a merge request
     * Update a merge request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdMergeRequestsMergeRequestIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"putV3ProjectsIdMergeRequestsMergeRequestId",value:function putV3ProjectsIdMergeRequestsMergeRequestId(id,mergeRequestId,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdMergeRequestsMergeRequestId");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling putV3ProjectsIdMergeRequestsMergeRequestId");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdMergeRequestsMergeRequestIdMerge operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdMergeRequestsMergeRequestIdMergeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MergeRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Merge a merge request
     * Merge a merge request
     * @param {String} id The ID of a project
     * @param {Number} mergeRequestId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdMergeRequestsMergeRequestIdMergeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MergeRequest}
     */},{key:"putV3ProjectsIdMergeRequestsMergeRequestIdMerge",value:function putV3ProjectsIdMergeRequestsMergeRequestIdMerge(id,mergeRequestId,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdMergeRequestsMergeRequestIdMerge");}// verify the required parameter 'mergeRequestId' is set
if(mergeRequestId===undefined||mergeRequestId===null){throw new Error("Missing the required parameter 'mergeRequestId' when calling putV3ProjectsIdMergeRequestsMergeRequestIdMerge");}var pathParams={'id':id,'merge_request_id':mergeRequestId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_MergeRequest["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{merge_request_id}/merge','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdMergeRequestsNoteableIdNotesNoteIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing +noteable+ note
     * Update an existing +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {Number} noteId The ID of a note
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdMergeRequestsNoteableIdNotesNoteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId",value:function putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(id,noteableId,noteId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId");}var pathParams={'id':id,'noteable_id':noteableId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/merge_requests/{noteable_id}/notes/{note_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdMilestonesMilestoneId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdMilestonesMilestoneIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing project milestone
     * Update an existing project milestone
     * @param {String} id The ID of a project
     * @param {Number} milestoneId The ID of a project milestone
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdMilestonesMilestoneIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */},{key:"putV3ProjectsIdMilestonesMilestoneId",value:function putV3ProjectsIdMilestonesMilestoneId(id,milestoneId,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdMilestonesMilestoneId");}// verify the required parameter 'milestoneId' is set
if(milestoneId===undefined||milestoneId===null){throw new Error("Missing the required parameter 'milestoneId' when calling putV3ProjectsIdMilestonesMilestoneId");}var pathParams={'id':id,'milestone_id':milestoneId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Milestone["default"];return this.apiClient.callApi('/v3/projects/{id}/milestones/{milestone_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdNotificationSettings operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update project level notification level settings, defaults to Global
     * This feature was introduced in GitLab 8.12
     * @param {String} id The group ID or project ID or project NAMESPACE/PROJECT_NAME
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationSetting}
     */},{key:"putV3ProjectsIdNotificationSettings",value:function putV3ProjectsIdNotificationSettings(id,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdNotificationSettings");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_NotificationSetting["default"];return this.apiClient.callApi('/v3/projects/{id}/notification_settings','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdRepositoryBranchesBranchProtect operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdRepositoryBranchesBranchProtectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Protect a single branch
     * Protect a single branch
     * @param {String} id The ID of a project
     * @param {String} branch The name of the branch
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdRepositoryBranchesBranchProtectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoBranch}
     */},{key:"putV3ProjectsIdRepositoryBranchesBranchProtect",value:function putV3ProjectsIdRepositoryBranchesBranchProtect(id,branch,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdRepositoryBranchesBranchProtect");}// verify the required parameter 'branch' is set
if(branch===undefined||branch===null){throw new Error("Missing the required parameter 'branch' when calling putV3ProjectsIdRepositoryBranchesBranchProtect");}var pathParams={'id':id,'branch':branch};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_RepoBranch["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/branches/{branch}/protect','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdRepositoryBranchesBranchUnprotect operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdRepositoryBranchesBranchUnprotectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Unprotect a single branch
     * Unprotect a single branch
     * @param {String} id The ID of a project
     * @param {String} branch The name of the branch
     * @param {module:api/ProjectsApi~putV3ProjectsIdRepositoryBranchesBranchUnprotectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoBranch}
     */},{key:"putV3ProjectsIdRepositoryBranchesBranchUnprotect",value:function putV3ProjectsIdRepositoryBranchesBranchUnprotect(id,branch,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdRepositoryBranchesBranchUnprotect");}// verify the required parameter 'branch' is set
if(branch===undefined||branch===null){throw new Error("Missing the required parameter 'branch' when calling putV3ProjectsIdRepositoryBranchesBranchUnprotect");}var pathParams={'id':id,'branch':branch};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=[];var accepts=['application/json'];var returnType=_RepoBranch["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/branches/{branch}/unprotect','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdRepositoryFiles operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdRepositoryFilesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update existing file in repository
     * Update existing file in repository
     * @param {String} id The project ID
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdRepositoryFilesCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdRepositoryFiles",value:function putV3ProjectsIdRepositoryFiles(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdRepositoryFiles");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdRepositoryFiles");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/repository/files','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdRepositoryTagsTagNameRelease operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdRepositoryTagsTagNameReleaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Release} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update a tag's release note
     * Update a tag's release note
     * @param {String} id The ID of a project
     * @param {String} tagName The name of the tag
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdRepositoryTagsTagNameReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Release}
     */},{key:"putV3ProjectsIdRepositoryTagsTagNameRelease",value:function putV3ProjectsIdRepositoryTagsTagNameRelease(id,tagName,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdRepositoryTagsTagNameRelease");}// verify the required parameter 'tagName' is set
if(tagName===undefined||tagName===null){throw new Error("Missing the required parameter 'tagName' when calling putV3ProjectsIdRepositoryTagsTagNameRelease");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdRepositoryTagsTagNameRelease");}var pathParams={'id':id,'tag_name':tagName};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Release["default"];return this.apiClient.callApi('/v3/projects/{id}/repository/tags/{tag_name}/release','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesAsana operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesAsanaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set asana service for project
     * Set asana service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesAsanaCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesAsana",value:function putV3ProjectsIdServicesAsana(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesAsana");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesAsana");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/asana','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesAssembla operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesAssemblaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set assembla service for project
     * Set assembla service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesAssemblaCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesAssembla",value:function putV3ProjectsIdServicesAssembla(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesAssembla");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesAssembla");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/assembla','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesBamboo operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesBambooCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set bamboo service for project
     * Set bamboo service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesBambooCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesBamboo",value:function putV3ProjectsIdServicesBamboo(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesBamboo");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesBamboo");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/bamboo','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesBugzilla operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesBugzillaCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set bugzilla service for project
     * Set bugzilla service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesBugzillaCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesBugzilla",value:function putV3ProjectsIdServicesBugzilla(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesBugzilla");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesBugzilla");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/bugzilla','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesBuildkite operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesBuildkiteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set buildkite service for project
     * Set buildkite service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesBuildkiteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesBuildkite",value:function putV3ProjectsIdServicesBuildkite(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesBuildkite");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesBuildkite");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/buildkite','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesBuildsEmail operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesBuildsEmailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set builds-email service for project
     * Set builds-email service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesBuildsEmailCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesBuildsEmail",value:function putV3ProjectsIdServicesBuildsEmail(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesBuildsEmail");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesBuildsEmail");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/builds-email','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesCampfire operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesCampfireCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set campfire service for project
     * Set campfire service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesCampfireCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesCampfire",value:function putV3ProjectsIdServicesCampfire(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesCampfire");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesCampfire");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/campfire','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesCustomIssueTracker operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesCustomIssueTrackerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set custom-issue-tracker service for project
     * Set custom-issue-tracker service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesCustomIssueTrackerCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesCustomIssueTracker",value:function putV3ProjectsIdServicesCustomIssueTracker(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesCustomIssueTracker");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesCustomIssueTracker");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/custom-issue-tracker','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesDroneCi operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesDroneCiCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set drone-ci service for project
     * Set drone-ci service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesDroneCiCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesDroneCi",value:function putV3ProjectsIdServicesDroneCi(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesDroneCi");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesDroneCi");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/drone-ci','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesEmailsOnPush operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesEmailsOnPushCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set emails-on-push service for project
     * Set emails-on-push service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesEmailsOnPushCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesEmailsOnPush",value:function putV3ProjectsIdServicesEmailsOnPush(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesEmailsOnPush");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesEmailsOnPush");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/emails-on-push','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesExternalWiki operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesExternalWikiCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set external-wiki service for project
     * Set external-wiki service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesExternalWikiCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesExternalWiki",value:function putV3ProjectsIdServicesExternalWiki(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesExternalWiki");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesExternalWiki");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/external-wiki','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesFlowdock operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesFlowdockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set flowdock service for project
     * Set flowdock service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesFlowdockCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesFlowdock",value:function putV3ProjectsIdServicesFlowdock(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesFlowdock");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesFlowdock");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/flowdock','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesGemnasium operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesGemnasiumCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set gemnasium service for project
     * Set gemnasium service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesGemnasiumCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesGemnasium",value:function putV3ProjectsIdServicesGemnasium(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesGemnasium");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesGemnasium");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/gemnasium','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesHipchat operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesHipchatCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set hipchat service for project
     * Set hipchat service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesHipchatCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesHipchat",value:function putV3ProjectsIdServicesHipchat(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesHipchat");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesHipchat");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/hipchat','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesIrker operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesIrkerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set irker service for project
     * Set irker service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesIrkerCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesIrker",value:function putV3ProjectsIdServicesIrker(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesIrker");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesIrker");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/irker','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesJira operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesJiraCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set jira service for project
     * Set jira service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesJiraCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesJira",value:function putV3ProjectsIdServicesJira(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesJira");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesJira");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/jira','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesKubernetes operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesKubernetesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set kubernetes service for project
     * Set kubernetes service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesKubernetesCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesKubernetes",value:function putV3ProjectsIdServicesKubernetes(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesKubernetes");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesKubernetes");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/kubernetes','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesMattermost operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesMattermostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set mattermost service for project
     * Set mattermost service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesMattermostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesMattermost",value:function putV3ProjectsIdServicesMattermost(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesMattermost");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesMattermost");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/mattermost','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesMattermostSlashCommands operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesMattermostSlashCommandsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set mattermost-slash-commands service for project
     * Set mattermost-slash-commands service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesMattermostSlashCommandsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesMattermostSlashCommands",value:function putV3ProjectsIdServicesMattermostSlashCommands(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesMattermostSlashCommands");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesMattermostSlashCommands");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/mattermost-slash-commands','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesPipelinesEmail operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesPipelinesEmailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set pipelines-email service for project
     * Set pipelines-email service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesPipelinesEmailCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesPipelinesEmail",value:function putV3ProjectsIdServicesPipelinesEmail(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesPipelinesEmail");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesPipelinesEmail");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/pipelines-email','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesPivotaltracker operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesPivotaltrackerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set pivotaltracker service for project
     * Set pivotaltracker service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesPivotaltrackerCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesPivotaltracker",value:function putV3ProjectsIdServicesPivotaltracker(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesPivotaltracker");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesPivotaltracker");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/pivotaltracker','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesPushover operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesPushoverCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set pushover service for project
     * Set pushover service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesPushoverCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesPushover",value:function putV3ProjectsIdServicesPushover(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesPushover");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesPushover");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/pushover','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesRedmine operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesRedmineCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set redmine service for project
     * Set redmine service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesRedmineCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesRedmine",value:function putV3ProjectsIdServicesRedmine(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesRedmine");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesRedmine");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/redmine','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesSlack operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesSlackCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set slack service for project
     * Set slack service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesSlackCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesSlack",value:function putV3ProjectsIdServicesSlack(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesSlack");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesSlack");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/slack','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesSlackSlashCommands operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesSlackSlashCommandsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set slack-slash-commands service for project
     * Set slack-slash-commands service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesSlackSlashCommandsCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesSlackSlashCommands",value:function putV3ProjectsIdServicesSlackSlashCommands(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesSlackSlashCommands");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesSlackSlashCommands");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/slack-slash-commands','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdServicesTeamcity operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdServicesTeamcityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Set teamcity service for project
     * Set teamcity service for project
     * @param {Number} id 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdServicesTeamcityCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"putV3ProjectsIdServicesTeamcity",value:function putV3ProjectsIdServicesTeamcity(id,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdServicesTeamcity");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdServicesTeamcity");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=[];var returnType=null;return this.apiClient.callApi('/v3/projects/{id}/services/teamcity','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdSnippetsNoteableIdNotesNoteId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdSnippetsNoteableIdNotesNoteIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Note} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing +noteable+ note
     * Update an existing +noteable+ note
     * @param {String} id The ID of a project
     * @param {Number} noteableId The ID of the noteable
     * @param {Number} noteId The ID of a note
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdSnippetsNoteableIdNotesNoteIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Note}
     */},{key:"putV3ProjectsIdSnippetsNoteableIdNotesNoteId",value:function putV3ProjectsIdSnippetsNoteableIdNotesNoteId(id,noteableId,noteId,UNKNOWN_BASE_TYPE,callback){var postBody=UNKNOWN_BASE_TYPE;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdSnippetsNoteableIdNotesNoteId");}// verify the required parameter 'noteableId' is set
if(noteableId===undefined||noteableId===null){throw new Error("Missing the required parameter 'noteableId' when calling putV3ProjectsIdSnippetsNoteableIdNotesNoteId");}// verify the required parameter 'noteId' is set
if(noteId===undefined||noteId===null){throw new Error("Missing the required parameter 'noteId' when calling putV3ProjectsIdSnippetsNoteableIdNotesNoteId");}// verify the required parameter 'UNKNOWN_BASE_TYPE' is set
if(UNKNOWN_BASE_TYPE===undefined||UNKNOWN_BASE_TYPE===null){throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ProjectsIdSnippetsNoteableIdNotesNoteId");}var pathParams={'id':id,'noteable_id':noteableId,'note_id':noteId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Note["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{noteable_id}/notes/{note_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdSnippetsSnippetId operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdSnippetsSnippetIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectSnippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing project snippet
     * Update an existing project snippet
     * @param {String} id The ID of a project
     * @param {Number} snippetId The ID of a project snippet
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdSnippetsSnippetIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectSnippet}
     */},{key:"putV3ProjectsIdSnippetsSnippetId",value:function putV3ProjectsIdSnippetsSnippetId(id,snippetId,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdSnippetsSnippetId");}// verify the required parameter 'snippetId' is set
if(snippetId===undefined||snippetId===null){throw new Error("Missing the required parameter 'snippetId' when calling putV3ProjectsIdSnippetsSnippetId");}var pathParams={'id':id,'snippet_id':snippetId};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_ProjectSnippet["default"];return this.apiClient.callApi('/v3/projects/{id}/snippets/{snippet_id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the putV3ProjectsIdVariablesKey operation.
     * @callback module:api/ProjectsApi~putV3ProjectsIdVariablesKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Variable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update an existing variable from a project
     * Update an existing variable from a project
     * @param {String} id The ID of a project
     * @param {String} key The key of the variable
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/ProjectsApi~putV3ProjectsIdVariablesKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Variable}
     */},{key:"putV3ProjectsIdVariablesKey",value:function putV3ProjectsIdVariablesKey(id,key,opts,callback){opts=opts||{};var postBody=opts['UNKNOWN_BASE_TYPE'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling putV3ProjectsIdVariablesKey");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new Error("Missing the required parameter 'key' when calling putV3ProjectsIdVariablesKey");}var pathParams={'id':id,'key':key};var queryParams={};var headerParams={};var formParams={};var authNames=['private_token_header','private_token_query'];var contentTypes=['application/json'];var accepts=['application/json'];var returnType=_Variable["default"];return this.apiClient.callApi('/v3/projects/{id}/variables/{key}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}}]);return ProjectsApi;}();exports["default"]=ProjectsApi;