"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _ApiClient=_interopRequireDefault(require("../ApiClient"));var _CloudidRestApi3FilterIdPermissionProject=_interopRequireDefault(require("../model/CloudidRestApi3FilterIdPermissionProject"));var _CloudidRestApi3FilterIdPermissionProjectProjectCategory=_interopRequireDefault(require("../model/CloudidRestApi3FilterIdPermissionProjectProjectCategory"));var _CloudidRestApi3FilterIdPermissionRole=_interopRequireDefault(require("../model/CloudidRestApi3FilterIdPermissionRole"));var _InlineObject=_interopRequireDefault(require("../model/InlineObject"));var _InlineObject2=_interopRequireDefault(require("../model/InlineObject1"));var _InlineObject3=_interopRequireDefault(require("../model/InlineObject10"));var _InlineObject4=_interopRequireDefault(require("../model/InlineObject11"));var _InlineObject5=_interopRequireDefault(require("../model/InlineObject12"));var _InlineObject6=_interopRequireDefault(require("../model/InlineObject13"));var _InlineObject7=_interopRequireDefault(require("../model/InlineObject14"));var _InlineObject8=_interopRequireDefault(require("../model/InlineObject15"));var _InlineObject9=_interopRequireDefault(require("../model/InlineObject16"));var _InlineObject10=_interopRequireDefault(require("../model/InlineObject17"));var _InlineObject11=_interopRequireDefault(require("../model/InlineObject18"));var _InlineObject12=_interopRequireDefault(require("../model/InlineObject19"));var _InlineObject13=_interopRequireDefault(require("../model/InlineObject2"));var _InlineObject14=_interopRequireDefault(require("../model/InlineObject20"));var _InlineObject15=_interopRequireDefault(require("../model/InlineObject21"));var _InlineObject16=_interopRequireDefault(require("../model/InlineObject22"));var _InlineObject17=_interopRequireDefault(require("../model/InlineObject23"));var _InlineObject18=_interopRequireDefault(require("../model/InlineObject24"));var _InlineObject19=_interopRequireDefault(require("../model/InlineObject25"));var _InlineObject20=_interopRequireDefault(require("../model/InlineObject26"));var _InlineObject21=_interopRequireDefault(require("../model/InlineObject27"));var _InlineObject22=_interopRequireDefault(require("../model/InlineObject28"));var _InlineObject23=_interopRequireDefault(require("../model/InlineObject29"));var _InlineObject24=_interopRequireDefault(require("../model/InlineObject3"));var _InlineObject25=_interopRequireDefault(require("../model/InlineObject30"));var _InlineObject26=_interopRequireDefault(require("../model/InlineObject31"));var _InlineObject27=_interopRequireDefault(require("../model/InlineObject32"));var _InlineObject28=_interopRequireDefault(require("../model/InlineObject33"));var _InlineObject29=_interopRequireDefault(require("../model/InlineObject34"));var _InlineObject30=_interopRequireDefault(require("../model/InlineObject35"));var _InlineObject31=_interopRequireDefault(require("../model/InlineObject36"));var _InlineObject32=_interopRequireDefault(require("../model/InlineObject37"));var _InlineObject33=_interopRequireDefault(require("../model/InlineObject38"));var _InlineObject34=_interopRequireDefault(require("../model/InlineObject39"));var _InlineObject35=_interopRequireDefault(require("../model/InlineObject4"));var _InlineObject36=_interopRequireDefault(require("../model/InlineObject40"));var _InlineObject37=_interopRequireDefault(require("../model/InlineObject41"));var _InlineObject38=_interopRequireDefault(require("../model/InlineObject42"));var _InlineObject39=_interopRequireDefault(require("../model/InlineObject43"));var _InlineObject40=_interopRequireDefault(require("../model/InlineObject44"));var _InlineObject41=_interopRequireDefault(require("../model/InlineObject45"));var _InlineObject42=_interopRequireDefault(require("../model/InlineObject46"));var _InlineObject43=_interopRequireDefault(require("../model/InlineObject47"));var _InlineObject44=_interopRequireDefault(require("../model/InlineObject48"));var _InlineObject45=_interopRequireDefault(require("../model/InlineObject49"));var _InlineObject46=_interopRequireDefault(require("../model/InlineObject5"));var _InlineObject47=_interopRequireDefault(require("../model/InlineObject50"));var _InlineObject48=_interopRequireDefault(require("../model/InlineObject51"));var _InlineObject49=_interopRequireDefault(require("../model/InlineObject52"));var _InlineObject50=_interopRequireDefault(require("../model/InlineObject53"));var _InlineObject51=_interopRequireDefault(require("../model/InlineObject54"));var _InlineObject52=_interopRequireDefault(require("../model/InlineObject55"));var _InlineObject53=_interopRequireDefault(require("../model/InlineObject56"));var _InlineObject54=_interopRequireDefault(require("../model/InlineObject57"));var _InlineObject55=_interopRequireDefault(require("../model/InlineObject58"));var _InlineObject56=_interopRequireDefault(require("../model/InlineObject59"));var _InlineObject57=_interopRequireDefault(require("../model/InlineObject6"));var _InlineObject58=_interopRequireDefault(require("../model/InlineObject60"));var _InlineObject59=_interopRequireDefault(require("../model/InlineObject61"));var _InlineObject60=_interopRequireDefault(require("../model/InlineObject62"));var _InlineObject61=_interopRequireDefault(require("../model/InlineObject63"));var _InlineObject62=_interopRequireDefault(require("../model/InlineObject64"));var _InlineObject63=_interopRequireDefault(require("../model/InlineObject65"));var _InlineObject64=_interopRequireDefault(require("../model/InlineObject66"));var _InlineObject65=_interopRequireDefault(require("../model/InlineObject67"));var _InlineObject66=_interopRequireDefault(require("../model/InlineObject68"));var _InlineObject67=_interopRequireDefault(require("../model/InlineObject69"));var _InlineObject68=_interopRequireDefault(require("../model/InlineObject7"));var _InlineObject69=_interopRequireDefault(require("../model/InlineObject70"));var _InlineObject70=_interopRequireDefault(require("../model/InlineObject71"));var _InlineObject71=_interopRequireDefault(require("../model/InlineObject72"));var _InlineObject72=_interopRequireDefault(require("../model/InlineObject73"));var _InlineObject73=_interopRequireDefault(require("../model/InlineObject74"));var _InlineObject74=_interopRequireDefault(require("../model/InlineObject8"));var _InlineObject75=_interopRequireDefault(require("../model/InlineObject9"));var _InlineResponse=_interopRequireDefault(require("../model/InlineResponse200"));var _InlineResponse2=_interopRequireDefault(require("../model/InlineResponse2001"));var _InlineResponse3=_interopRequireDefault(require("../model/InlineResponse20010"));var _InlineResponse4=_interopRequireDefault(require("../model/InlineResponse200100"));var _InlineResponse5=_interopRequireDefault(require("../model/InlineResponse200101"));var _InlineResponse6=_interopRequireDefault(require("../model/InlineResponse200102"));var _InlineResponse7=_interopRequireDefault(require("../model/InlineResponse200103"));var _InlineResponse8=_interopRequireDefault(require("../model/InlineResponse200104"));var _InlineResponse9=_interopRequireDefault(require("../model/InlineResponse200105"));var _InlineResponse10=_interopRequireDefault(require("../model/InlineResponse200106"));var _InlineResponse11=_interopRequireDefault(require("../model/InlineResponse200107"));var _InlineResponse12=_interopRequireDefault(require("../model/InlineResponse20011"));var _InlineResponse13=_interopRequireDefault(require("../model/InlineResponse20012"));var _InlineResponse14=_interopRequireDefault(require("../model/InlineResponse20013"));var _InlineResponse15=_interopRequireDefault(require("../model/InlineResponse20014"));var _InlineResponse16=_interopRequireDefault(require("../model/InlineResponse20015"));var _InlineResponse17=_interopRequireDefault(require("../model/InlineResponse20016"));var _InlineResponse18=_interopRequireDefault(require("../model/InlineResponse20017"));var _InlineResponse19=_interopRequireDefault(require("../model/InlineResponse20018"));var _InlineResponse20=_interopRequireDefault(require("../model/InlineResponse20019"));var _InlineResponse21=_interopRequireDefault(require("../model/InlineResponse2002"));var _InlineResponse22=_interopRequireDefault(require("../model/InlineResponse20020"));var _InlineResponse23=_interopRequireDefault(require("../model/InlineResponse20021"));var _InlineResponse24=_interopRequireDefault(require("../model/InlineResponse20022"));var _InlineResponse25=_interopRequireDefault(require("../model/InlineResponse20023"));var _InlineResponse26=_interopRequireDefault(require("../model/InlineResponse20024"));var _InlineResponse27=_interopRequireDefault(require("../model/InlineResponse20025"));var _InlineResponse28=_interopRequireDefault(require("../model/InlineResponse20026"));var _InlineResponse29=_interopRequireDefault(require("../model/InlineResponse20027"));var _InlineResponse30=_interopRequireDefault(require("../model/InlineResponse20028"));var _InlineResponse31=_interopRequireDefault(require("../model/InlineResponse20029"));var _InlineResponse32=_interopRequireDefault(require("../model/InlineResponse2003"));var _InlineResponse33=_interopRequireDefault(require("../model/InlineResponse20030"));var _InlineResponse34=_interopRequireDefault(require("../model/InlineResponse20031"));var _InlineResponse35=_interopRequireDefault(require("../model/InlineResponse20032"));var _InlineResponse36=_interopRequireDefault(require("../model/InlineResponse20033"));var _InlineResponse37=_interopRequireDefault(require("../model/InlineResponse20034"));var _InlineResponse38=_interopRequireDefault(require("../model/InlineResponse20035"));var _InlineResponse39=_interopRequireDefault(require("../model/InlineResponse20036"));var _InlineResponse40=_interopRequireDefault(require("../model/InlineResponse20037"));var _InlineResponse41=_interopRequireDefault(require("../model/InlineResponse20038"));var _InlineResponse42=_interopRequireDefault(require("../model/InlineResponse20039"));var _InlineResponse43=_interopRequireDefault(require("../model/InlineResponse2004"));var _InlineResponse44=_interopRequireDefault(require("../model/InlineResponse20040"));var _InlineResponse45=_interopRequireDefault(require("../model/InlineResponse20041"));var _InlineResponse46=_interopRequireDefault(require("../model/InlineResponse20042"));var _InlineResponse47=_interopRequireDefault(require("../model/InlineResponse20043"));var _InlineResponse48=_interopRequireDefault(require("../model/InlineResponse20044"));var _InlineResponse49=_interopRequireDefault(require("../model/InlineResponse20045"));var _InlineResponse20045To=_interopRequireDefault(require("../model/InlineResponse20045To"));var _InlineResponse20045ToStatusCategory=_interopRequireDefault(require("../model/InlineResponse20045ToStatusCategory"));var _InlineResponse50=_interopRequireDefault(require("../model/InlineResponse20046"));var _InlineResponse51=_interopRequireDefault(require("../model/InlineResponse20047"));var _InlineResponse52=_interopRequireDefault(require("../model/InlineResponse20048"));var _InlineResponse53=_interopRequireDefault(require("../model/InlineResponse20049"));var _InlineResponse2004Author=_interopRequireDefault(require("../model/InlineResponse2004Author"));var _InlineResponse54=_interopRequireDefault(require("../model/InlineResponse2005"));var _InlineResponse55=_interopRequireDefault(require("../model/InlineResponse20050"));var _InlineResponse20050InwardIssueFieldsIssuetype=_interopRequireDefault(require("../model/InlineResponse20050InwardIssueFieldsIssuetype"));var _InlineResponse20050InwardIssueFieldsPriority=_interopRequireDefault(require("../model/InlineResponse20050InwardIssueFieldsPriority"));var _InlineResponse56=_interopRequireDefault(require("../model/InlineResponse20051"));var _InlineResponse57=_interopRequireDefault(require("../model/InlineResponse20052"));var _InlineResponse58=_interopRequireDefault(require("../model/InlineResponse20053"));var _InlineResponse59=_interopRequireDefault(require("../model/InlineResponse20054"));var _InlineResponse60=_interopRequireDefault(require("../model/InlineResponse20055"));var _InlineResponse61=_interopRequireDefault(require("../model/InlineResponse20056"));var _InlineResponse62=_interopRequireDefault(require("../model/InlineResponse20057"));var _InlineResponse63=_interopRequireDefault(require("../model/InlineResponse20058"));var _InlineResponse64=_interopRequireDefault(require("../model/InlineResponse20059"));var _InlineResponse65=_interopRequireDefault(require("../model/InlineResponse2006"));var _InlineResponse66=_interopRequireDefault(require("../model/InlineResponse20060"));var _InlineResponse67=_interopRequireDefault(require("../model/InlineResponse20061"));var _InlineResponse68=_interopRequireDefault(require("../model/InlineResponse20062"));var _InlineResponse69=_interopRequireDefault(require("../model/InlineResponse20063"));var _InlineResponse70=_interopRequireDefault(require("../model/InlineResponse20064"));var _InlineResponse71=_interopRequireDefault(require("../model/InlineResponse20065"));var _InlineResponse72=_interopRequireDefault(require("../model/InlineResponse20066"));var _InlineResponse73=_interopRequireDefault(require("../model/InlineResponse20067"));var _InlineResponse74=_interopRequireDefault(require("../model/InlineResponse20068"));var _InlineResponse75=_interopRequireDefault(require("../model/InlineResponse20069"));var _InlineResponse76=_interopRequireDefault(require("../model/InlineResponse2007"));var _InlineResponse77=_interopRequireDefault(require("../model/InlineResponse20070"));var _InlineResponse78=_interopRequireDefault(require("../model/InlineResponse20071"));var _InlineResponse79=_interopRequireDefault(require("../model/InlineResponse20072"));var _InlineResponse80=_interopRequireDefault(require("../model/InlineResponse20073"));var _InlineResponse81=_interopRequireDefault(require("../model/InlineResponse20074"));var _InlineResponse82=_interopRequireDefault(require("../model/InlineResponse20075"));var _InlineResponse83=_interopRequireDefault(require("../model/InlineResponse20076"));var _InlineResponse84=_interopRequireDefault(require("../model/InlineResponse20077"));var _InlineResponse85=_interopRequireDefault(require("../model/InlineResponse20078"));var _InlineResponse20078Values=_interopRequireDefault(require("../model/InlineResponse20078Values"));var _InlineResponse86=_interopRequireDefault(require("../model/InlineResponse20079"));var _InlineResponse87=_interopRequireDefault(require("../model/InlineResponse2008"));var _InlineResponse88=_interopRequireDefault(require("../model/InlineResponse20080"));var _InlineResponse89=_interopRequireDefault(require("../model/InlineResponse20081"));var _InlineResponse90=_interopRequireDefault(require("../model/InlineResponse20082"));var _InlineResponse91=_interopRequireDefault(require("../model/InlineResponse20083"));var _InlineResponse92=_interopRequireDefault(require("../model/InlineResponse20084"));var _InlineResponse93=_interopRequireDefault(require("../model/InlineResponse20085"));var _InlineResponse94=_interopRequireDefault(require("../model/InlineResponse20086"));var _InlineResponse95=_interopRequireDefault(require("../model/InlineResponse20087"));var _InlineResponse96=_interopRequireDefault(require("../model/InlineResponse20088"));var _InlineResponse97=_interopRequireDefault(require("../model/InlineResponse20089"));var _InlineResponse98=_interopRequireDefault(require("../model/InlineResponse2009"));var _InlineResponse99=_interopRequireDefault(require("../model/InlineResponse20090"));var _InlineResponse100=_interopRequireDefault(require("../model/InlineResponse20091"));var _InlineResponse101=_interopRequireDefault(require("../model/InlineResponse20092"));var _InlineResponse102=_interopRequireDefault(require("../model/InlineResponse20093"));var _InlineResponse103=_interopRequireDefault(require("../model/InlineResponse20094"));var _InlineResponse104=_interopRequireDefault(require("../model/InlineResponse20095"));var _InlineResponse105=_interopRequireDefault(require("../model/InlineResponse20096"));var _InlineResponse106=_interopRequireDefault(require("../model/InlineResponse20097"));var _InlineResponse107=_interopRequireDefault(require("../model/InlineResponse20098"));var _InlineResponse108=_interopRequireDefault(require("../model/InlineResponse20099"));var _InlineResponse109=_interopRequireDefault(require("../model/InlineResponse201"));var _InlineResponse110=_interopRequireDefault(require("../model/InlineResponse2011"));var _InlineResponse111=_interopRequireDefault(require("../model/InlineResponse20110"));var _InlineResponse112=_interopRequireDefault(require("../model/InlineResponse20111"));var _InlineResponse113=_interopRequireDefault(require("../model/InlineResponse20112"));var _InlineResponse114=_interopRequireDefault(require("../model/InlineResponse20113"));var _InlineResponse115=_interopRequireDefault(require("../model/InlineResponse20114"));var _InlineResponse116=_interopRequireDefault(require("../model/InlineResponse20115"));var _InlineResponse117=_interopRequireDefault(require("../model/InlineResponse2012"));var _InlineResponse118=_interopRequireDefault(require("../model/InlineResponse2013"));var _InlineResponse119=_interopRequireDefault(require("../model/InlineResponse2014"));var _InlineResponse120=_interopRequireDefault(require("../model/InlineResponse2015"));var _InlineResponse121=_interopRequireDefault(require("../model/InlineResponse2016"));var _InlineResponse122=_interopRequireDefault(require("../model/InlineResponse2017"));var _InlineResponse123=_interopRequireDefault(require("../model/InlineResponse2018"));var _InlineResponse124=_interopRequireDefault(require("../model/InlineResponse2019"));var _InlineResponse125=_interopRequireDefault(require("../model/InlineResponse303"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
* Default service.
* @module api/DefaultApi
* @version 1.1.0
*/var DefaultApi=/*#__PURE__*/function(){/**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */function DefaultApi(apiClient){_classCallCheck(this,DefaultApi);this.apiClient=apiClient||_ApiClient["default"].instance;}/**
     * Callback function to receive the result of the cloudidRestApi3ApplicationPropertiesAdvancedSettingsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ApplicationPropertiesAdvancedSettingsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the application properties that are accessible on the Advanced Settings page. To navigate to the Advanced Settings page in Jira, choose the Jira icon > Jira settings > System, General Configuration and then click Advanced Settings (in the upper right).
     * @param {module:api/DefaultApi~cloudidRestApi3ApplicationPropertiesAdvancedSettingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200>}
     */_createClass(DefaultApi,[{key:"cloudidRestApi3ApplicationPropertiesAdvancedSettingsGet",value:function cloudidRestApi3ApplicationPropertiesAdvancedSettingsGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/application-properties/advanced-settings','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ApplicationPropertiesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ApplicationPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all application properties or a single application property.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the application property.
     * @param {String} opts.keyFilter When a key isn't provided, this filters the list of results by the application property key using a regular expression. For example, using jira.lf.* will return all application properties with keys that start with jira.lf..
     * @param {String} opts.permissionLevel The permission level of all items being returned in the list.
     * @param {module:api/DefaultApi~cloudidRestApi3ApplicationPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200>}
     */},{key:"cloudidRestApi3ApplicationPropertiesGet",value:function cloudidRestApi3ApplicationPropertiesGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'key':opts['key'],'keyFilter':opts['keyFilter'],'permissionLevel':opts['permissionLevel']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/application-properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ApplicationPropertiesIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ApplicationPropertiesIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Changes the value of an application property. For example, you can change the value of the jira.clone.prefix from its default value of CLONE - to Clone - if you prefer sentence case capitalization. Editable properties are described below along with their default values.
     * @param {String} id The key of the application property to update.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ApplicationPropertiesIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ApplicationPropertiesIdPut",value:function cloudidRestApi3ApplicationPropertiesIdPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ApplicationPropertiesIdPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/application-properties/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ApplicationroleGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ApplicationroleGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2001>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all application roles. In Jira, application roles are managed using the Application access configuration page.
     * @param {module:api/DefaultApi~cloudidRestApi3ApplicationroleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2001>}
     */},{key:"cloudidRestApi3ApplicationroleGet",value:function cloudidRestApi3ApplicationroleGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/applicationrole','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ApplicationroleKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ApplicationroleKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an application role.
     * @param {String} key The key of the application role. Use the Get all application roles method to get the key for each application role.
     * @param {module:api/DefaultApi~cloudidRestApi3ApplicationroleKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */},{key:"cloudidRestApi3ApplicationroleKeyGet",value:function cloudidRestApi3ApplicationroleKeyGet(key,callback){var postBody=null;// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new Error("Missing the required parameter 'key' when calling cloudidRestApi3ApplicationroleKeyGet");}var pathParams={'key':key};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse21["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/applicationrole/{key}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3AttachmentIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3AttachmentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an attachment from an issue.
     * @param {String} id The ID of the attachment.
     * @param {module:api/DefaultApi~cloudidRestApi3AttachmentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3AttachmentIdDelete",value:function cloudidRestApi3AttachmentIdDelete(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3AttachmentIdDelete");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/attachment/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3AttachmentIdExpandHumanGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3AttachmentIdExpandHumanGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.
     * @param {String} id The ID of the attachment.
     * @param {module:api/DefaultApi~cloudidRestApi3AttachmentIdExpandHumanGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */},{key:"cloudidRestApi3AttachmentIdExpandHumanGet",value:function cloudidRestApi3AttachmentIdExpandHumanGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3AttachmentIdExpandHumanGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse54["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/attachment/{id}/expand/human','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3AttachmentIdExpandRawGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3AttachmentIdExpandRawGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.
     * @param {String} id The ID of the attachment.
     * @param {module:api/DefaultApi~cloudidRestApi3AttachmentIdExpandRawGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */},{key:"cloudidRestApi3AttachmentIdExpandRawGet",value:function cloudidRestApi3AttachmentIdExpandRawGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3AttachmentIdExpandRawGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse65["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/attachment/{id}/expand/raw','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3AttachmentIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3AttachmentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the metadata for an attachment. Note that the attachment itself is not returned.
     * @param {String} id The ID of the attachment.
     * @param {module:api/DefaultApi~cloudidRestApi3AttachmentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */},{key:"cloudidRestApi3AttachmentIdGet",value:function cloudidRestApi3AttachmentIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3AttachmentIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse43["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/attachment/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3AttachmentMetaGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3AttachmentMetaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the global attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.
     * @param {module:api/DefaultApi~cloudidRestApi3AttachmentMetaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */},{key:"cloudidRestApi3AttachmentMetaGet",value:function cloudidRestApi3AttachmentMetaGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse32["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/attachment/meta','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3AuditingRecordGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3AuditingRecordGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of audit records. The list can be filtered to include items:
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter The query string.
     * @param {String} opts.from The date and time on or after which returned audit records must have been created. If to is provided from must be before to or the result set will be empty.
     * @param {Number} opts.limit The maximum number of results to return. The maximum is 1000.
     * @param {Number} opts.offset The number of records to skip before returning the first result.
     * @param {String} opts.to The date and time on or before which returned audit results must have been created. If from is provided to must be after from or the result set will be empty.
     * @param {module:api/DefaultApi~cloudidRestApi3AuditingRecordGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */},{key:"cloudidRestApi3AuditingRecordGet",value:function cloudidRestApi3AuditingRecordGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'filter':opts['filter'],'from':opts['from'],'limit':opts['limit'],'offset':opts['offset'],'to':opts['to']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse76["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/auditing/record','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3AvatarTypeSystemGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3AvatarTypeSystemGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.
     * @param {String} type The avatar type.
     * @param {module:api/DefaultApi~cloudidRestApi3AvatarTypeSystemGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */},{key:"cloudidRestApi3AvatarTypeSystemGet",value:function cloudidRestApi3AvatarTypeSystemGet(type,callback){var postBody=null;// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new Error("Missing the required parameter 'type' when calling cloudidRestApi3AvatarTypeSystemGet");}var pathParams={'type':type};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse87["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/avatar/{type}/system','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3CommentCommentIdPropertiesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3CommentCommentIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the keys of all the properties of a comment.
     * @param {String} commentId The ID of the comment.
     * @param {module:api/DefaultApi~cloudidRestApi3CommentCommentIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"cloudidRestApi3CommentCommentIdPropertiesGet",value:function cloudidRestApi3CommentCommentIdPropertiesGet(commentId,callback){var postBody=null;// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling cloudidRestApi3CommentCommentIdPropertiesGet");}var pathParams={'commentId':commentId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/comment/{commentId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a comment property.
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/DefaultApi~cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDelete",value:function cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDelete(commentId,propertyKey,callback){var postBody=null;// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDelete");}var pathParams={'commentId':commentId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/comment/{commentId}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of a comment property.
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/DefaultApi~cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGet",value:function cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGet(commentId,propertyKey,callback){var postBody=null;// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGet");}var pathParams={'commentId':commentId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/comment/{commentId}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property. The maximum length is 255 characters.
     * @param {module:api/DefaultApi~cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPut",value:function cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPut(commentId,propertyKey,callback){var postBody=null;// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPut");}var pathParams={'commentId':commentId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/comment/{commentId}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3CommentListPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3CommentListPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the comments for a list of comment IDs.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about comments in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:model/InlineObject1} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3CommentListPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */},{key:"cloudidRestApi3CommentListPost",value:function cloudidRestApi3CommentListPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse98["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/comment/list','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ComponentIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ComponentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a component. Permissions required: Any of the following:
     * @param {String} id The ID of the component.
     * @param {Object} opts Optional parameters
     * @param {String} opts.moveIssuesTo The ID of the component to replace the deleted component. If this value is null no replacement is made.
     * @param {module:api/DefaultApi~cloudidRestApi3ComponentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ComponentIdDelete",value:function cloudidRestApi3ComponentIdDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ComponentIdDelete");}var pathParams={'id':id};var queryParams={'moveIssuesTo':opts['moveIssuesTo']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/component/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ComponentIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ComponentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a component. Permissions required: Browse projects project permission.
     * @param {String} id The ID of the component.
     * @param {module:api/DefaultApi~cloudidRestApi3ComponentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */},{key:"cloudidRestApi3ComponentIdGet",value:function cloudidRestApi3ComponentIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ComponentIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse109["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/component/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ComponentIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ComponentIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Modifies a component. Any fields included in the request are overwritten. If leadUserName is an empty string (\"\") the component lead is removed. Permissions required: Any of the following:
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ComponentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ComponentIdPut",value:function cloudidRestApi3ComponentIdPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ComponentIdPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/component/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ComponentIdRelatedIssueCountsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ComponentIdRelatedIssueCountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the counts of issues assigned to the component. Permissions required: Permission to access Jira.
     * @param {String} id The ID of the component.
     * @param {module:api/DefaultApi~cloudidRestApi3ComponentIdRelatedIssueCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20012}
     */},{key:"cloudidRestApi3ComponentIdRelatedIssueCountsGet",value:function cloudidRestApi3ComponentIdRelatedIssueCountsGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ComponentIdRelatedIssueCountsGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse13["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/component/{id}/relatedIssueCounts','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ComponentPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ComponentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a component. Use components to provide containers for issues within a project. Permissions required: Any of the following:
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ComponentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */},{key:"cloudidRestApi3ComponentPost",value:function cloudidRestApi3ComponentPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse109["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/component','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ConfigurationGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ConfigurationGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the global settings in Jira. These settings determine whether optional features (for example, sub-tasks, time tracking, and others) are enabled. If time tracking is enabled, this method also returns the time tracking configuration.
     * @param {module:api/DefaultApi~cloudidRestApi3ConfigurationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20013}
     */},{key:"cloudidRestApi3ConfigurationGet",value:function cloudidRestApi3ConfigurationGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse14["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/configuration','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ConfigurationTimetrackingDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Disables time tracking.
     * @param {module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ConfigurationTimetrackingDelete",value:function cloudidRestApi3ConfigurationTimetrackingDelete(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/configuration/timetracking','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ConfigurationTimetrackingGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.
     * @param {module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20014}
     */},{key:"cloudidRestApi3ConfigurationTimetrackingGet",value:function cloudidRestApi3ConfigurationTimetrackingGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse15["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/configuration/timetracking','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ConfigurationTimetrackingListGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20015>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all time tracking providers. By default, Jira only has one time tracking provider: JIRA provided time tracking. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the Time Tracking Provider module.
     * @param {module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20015>}
     */},{key:"cloudidRestApi3ConfigurationTimetrackingListGet",value:function cloudidRestApi3ConfigurationTimetrackingListGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse16["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/configuration/timetracking/list','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ConfigurationTimetrackingOptionsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingOptionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see Configuring time tracking.
     * @param {module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingOptionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20016}
     */},{key:"cloudidRestApi3ConfigurationTimetrackingOptionsGet",value:function cloudidRestApi3ConfigurationTimetrackingOptionsGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse17["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/configuration/timetracking/options','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ConfigurationTimetrackingOptionsPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingOptionsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the time tracking settings.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject5} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingOptionsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20016}
     */},{key:"cloudidRestApi3ConfigurationTimetrackingOptionsPut",value:function cloudidRestApi3ConfigurationTimetrackingOptionsPut(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse17["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/configuration/timetracking/options','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ConfigurationTimetrackingPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Selects a time tracking provider.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ConfigurationTimetrackingPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ConfigurationTimetrackingPut",value:function cloudidRestApi3ConfigurationTimetrackingPut(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/configuration/timetracking','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3CustomFieldOptionIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3CustomFieldOptionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a custom field option. For example, an option in a cascading select list.
     * @param {String} id The ID of the custom field option. To find this ID, configure the custom field and edit its options in Jira. Click the option and its ID will show in the URL as the selectedParentOptionId parameter.
     * @param {module:api/DefaultApi~cloudidRestApi3CustomFieldOptionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20017}
     */},{key:"cloudidRestApi3CustomFieldOptionIdGet",value:function cloudidRestApi3CustomFieldOptionIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3CustomFieldOptionIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse18["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/customFieldOption/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the keys of all properties for a dashboard item.
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {module:api/DefaultApi~cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGet",value:function cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGet(dashboardId,itemId,callback){var postBody=null;// verify the required parameter 'dashboardId' is set
if(dashboardId===undefined||dashboardId===null){throw new Error("Missing the required parameter 'dashboardId' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGet");}// verify the required parameter 'itemId' is set
if(itemId===undefined||itemId===null){throw new Error("Missing the required parameter 'itemId' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGet");}var pathParams={'dashboardId':dashboardId,'itemId':itemId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a dashboard item property.
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {String} propertyKey The key of the dashboard item property.
     * @param {module:api/DefaultApi~cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete",value:function cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(dashboardId,itemId,propertyKey,callback){var postBody=null;// verify the required parameter 'dashboardId' is set
if(dashboardId===undefined||dashboardId===null){throw new Error("Missing the required parameter 'dashboardId' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");}// verify the required parameter 'itemId' is set
if(itemId===undefined||itemId===null){throw new Error("Missing the required parameter 'itemId' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");}var pathParams={'dashboardId':dashboardId,'itemId':itemId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the key and value of a dashboard item property.
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {String} propertyKey The key of the dashboard item property.
     * @param {module:api/DefaultApi~cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet",value:function cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(dashboardId,itemId,propertyKey,callback){var postBody=null;// verify the required parameter 'dashboardId' is set
if(dashboardId===undefined||dashboardId===null){throw new Error("Missing the required parameter 'dashboardId' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");}// verify the required parameter 'itemId' is set
if(itemId===undefined||itemId===null){throw new Error("Missing the required parameter 'itemId' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");}var pathParams={'dashboardId':dashboardId,'itemId':itemId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {String} propertyKey The key of the dashboard item property. The maximum length of the key is 255 bytes.
     * @param {module:api/DefaultApi~cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut",value:function cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(dashboardId,itemId,propertyKey,callback){var postBody=null;// verify the required parameter 'dashboardId' is set
if(dashboardId===undefined||dashboardId===null){throw new Error("Missing the required parameter 'dashboardId' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");}// verify the required parameter 'itemId' is set
if(itemId===undefined||itemId===null){throw new Error("Missing the required parameter 'itemId' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");}var pathParams={'dashboardId':dashboardId,'itemId':itemId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3DashboardGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3DashboardGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter The filter applied to the list of dashboards. Valid values are:
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~cloudidRestApi3DashboardGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20018}
     */},{key:"cloudidRestApi3DashboardGet",value:function cloudidRestApi3DashboardGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'filter':opts['filter'],'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse19["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/dashboard','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3DashboardIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3DashboardIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a dashboard.
     * @param {String} id The ID of the dashboard.
     * @param {module:api/DefaultApi~cloudidRestApi3DashboardIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20019}
     */},{key:"cloudidRestApi3DashboardIdGet",value:function cloudidRestApi3DashboardIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3DashboardIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse20["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/dashboard/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ExpressionEvalPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ExpressionEvalPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20020} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Evaluates a Jira expression and returns its value.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:model/InlineObject6} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ExpressionEvalPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20020}
     */},{key:"cloudidRestApi3ExpressionEvalPost",value:function cloudidRestApi3ExpressionEvalPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse22["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/expression/eval','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldFieldKeyOptionGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20022} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all options defined for a select list issue field. A select list issue field is a type of issue field that allows a user to select an value from a list of options.
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. For example, 20.
     * @param {Number} opts.startAt The starting index of the returned objects. For example, 1.
     * @param {module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20022}
     */},{key:"cloudidRestApi3FieldFieldKeyOptionGet",value:function cloudidRestApi3FieldFieldKeyOptionGet(fieldKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling cloudidRestApi3FieldFieldKeyOptionGet");}var pathParams={'fieldKey':fieldKey};var queryParams={'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse24["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/field/{fieldKey}/option','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldFieldKeyOptionOptionIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionOptionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an option from a select list issue field.
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Number} optionId The ID of the option to be deleted. For example, 3.
     * @param {module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionOptionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3FieldFieldKeyOptionOptionIdDelete",value:function cloudidRestApi3FieldFieldKeyOptionOptionIdDelete(fieldKey,optionId,callback){var postBody=null;// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling cloudidRestApi3FieldFieldKeyOptionOptionIdDelete");}// verify the required parameter 'optionId' is set
if(optionId===undefined||optionId===null){throw new Error("Missing the required parameter 'optionId' when calling cloudidRestApi3FieldFieldKeyOptionOptionIdDelete");}var pathParams={'fieldKey':fieldKey,'optionId':optionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/field/{fieldKey}/option/{optionId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldFieldKeyOptionOptionIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionOptionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20025} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an option from a select list issue field.
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Number} optionId The ID of the option to be returned. For example, 3.
     * @param {module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionOptionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20025}
     */},{key:"cloudidRestApi3FieldFieldKeyOptionOptionIdGet",value:function cloudidRestApi3FieldFieldKeyOptionOptionIdGet(fieldKey,optionId,callback){var postBody=null;// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling cloudidRestApi3FieldFieldKeyOptionOptionIdGet");}// verify the required parameter 'optionId' is set
if(optionId===undefined||optionId===null){throw new Error("Missing the required parameter 'optionId' when calling cloudidRestApi3FieldFieldKeyOptionOptionIdGet");}var pathParams={'fieldKey':fieldKey,'optionId':optionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse27["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/field/{fieldKey}/option/{optionId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deselects a select list issue field option in all issues that it has been selected in. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Number} optionId The ID of the option to be deselected. For example, 3.
     * @param {Object} opts Optional parameters
     * @param {String} opts.jql A JQL query that specifies the issues to be updated. For example, project=10000.
     * @param {Number} opts.replaceWith The ID of the option that will replace the currently selected option. For example, 2.
     * @param {module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDelete",value:function cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDelete(fieldKey,optionId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDelete");}// verify the required parameter 'optionId' is set
if(optionId===undefined||optionId===null){throw new Error("Missing the required parameter 'optionId' when calling cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDelete");}var pathParams={'fieldKey':fieldKey,'optionId':optionId};var queryParams={'jql':opts['jql'],'replaceWith':opts['replaceWith']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/field/{fieldKey}/option/{optionId}/issue','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldFieldKeyOptionOptionIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionOptionIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20025} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates an option for a select list issue field. If the option does not exist, a new option is created.
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Number} optionId The ID of the option to be updated. For example, 3.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject9} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionOptionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20025}
     */},{key:"cloudidRestApi3FieldFieldKeyOptionOptionIdPut",value:function cloudidRestApi3FieldFieldKeyOptionOptionIdPut(fieldKey,optionId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling cloudidRestApi3FieldFieldKeyOptionOptionIdPut");}// verify the required parameter 'optionId' is set
if(optionId===undefined||optionId===null){throw new Error("Missing the required parameter 'optionId' when calling cloudidRestApi3FieldFieldKeyOptionOptionIdPut");}var pathParams={'fieldKey':fieldKey,'optionId':optionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse27["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/field/{fieldKey}/option/{optionId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldFieldKeyOptionPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20023} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an option for a select list issue field.
     * @param {String} fieldKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject8} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20023}
     */},{key:"cloudidRestApi3FieldFieldKeyOptionPost",value:function cloudidRestApi3FieldFieldKeyOptionPost(fieldKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling cloudidRestApi3FieldFieldKeyOptionPost");}var pathParams={'fieldKey':fieldKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse25["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/field/{fieldKey}/option','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20024} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns options defined for a select list issue field that can be viewed and selected by the currently logged in user.
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. For example, 20.
     * @param {Number} opts.projectId Filters the results to options that are only available in the specified project. For example, 10000.
     * @param {Number} opts.startAt The starting index of the returned objects. For example, 1.
     * @param {module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20024}
     */},{key:"cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGet",value:function cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGet(fieldKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGet");}var pathParams={'fieldKey':fieldKey};var queryParams={'maxResults':opts['maxResults'],'projectId':opts['projectId'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse26["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/field/{fieldKey}/option/suggestions/edit','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20024} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns options defined for a select list issue field that can be viewed by the currently logged in user.
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. For example, 20.
     * @param {Number} opts.projectId Filters the results to options that are only available in the specified project. For example, 10000.
     * @param {Number} opts.startAt The starting index of the returned objects. For example, 1.
     * @param {module:api/DefaultApi~cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20024}
     */},{key:"cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGet",value:function cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGet(fieldKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGet");}var pathParams={'fieldKey':fieldKey};var queryParams={'maxResults':opts['maxResults'],'projectId':opts['projectId'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse26["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/field/{fieldKey}/option/suggestions/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20021>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all issue fields in Jira, both system and custom fields.
     * @param {module:api/DefaultApi~cloudidRestApi3FieldGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20021>}
     */},{key:"cloudidRestApi3FieldGet",value:function cloudidRestApi3FieldGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse23["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/field','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FieldPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FieldPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a custom field.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject7} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3FieldPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011}
     */},{key:"cloudidRestApi3FieldPost",value:function cloudidRestApi3FieldPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse110["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/field','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterDefaultShareScopeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterDefaultShareScopeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20027} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default sharing settings for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).
     * @param {module:api/DefaultApi~cloudidRestApi3FilterDefaultShareScopeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20027}
     */},{key:"cloudidRestApi3FilterDefaultShareScopeGet",value:function cloudidRestApi3FilterDefaultShareScopeGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse29["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/defaultShareScope','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterDefaultShareScopePut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterDefaultShareScopePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20027} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default sharing for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject11} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3FilterDefaultShareScopePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20027}
     */},{key:"cloudidRestApi3FilterDefaultShareScopePut",value:function cloudidRestApi3FilterDefaultShareScopePut(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse29["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/defaultShareScope','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterFavouriteGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterFavouriteGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20028>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the favorite filters of the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3FilterFavouriteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20028>}
     */},{key:"cloudidRestApi3FilterFavouriteGet",value:function cloudidRestApi3FilterFavouriteGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse30["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/favourite','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all filters. Deprecated, use Search for filters that supports search and pagination. Permissions required: None, however only the following filters are returned:
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3FilterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"cloudidRestApi3FilterGet",value:function cloudidRestApi3FilterGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdColumnsDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdColumnsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Reset the user's column configuration for the filter to the default. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
     * @param {Number} id The ID of the filter.
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdColumnsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3FilterIdColumnsDelete",value:function cloudidRestApi3FilterIdColumnsDelete(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdColumnsDelete");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}/columns','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdColumnsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdColumnsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20030>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the columns configured for a filter. The column configuration is used when the filter's results are viewed in List View with the Columns set to Filter. Permissions required: None, however the calling user must have permission to view the filter.
     * @param {Number} id The ID of the filter.
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdColumnsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20030>}
     */},{key:"cloudidRestApi3FilterIdColumnsGet",value:function cloudidRestApi3FilterIdColumnsGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdColumnsGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse33["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}/columns','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdColumnsPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdColumnsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the columns for a filter. Only navigable fields can be set as columns. Use Get fields to get the list fields in Jira. A navigable field has navigable set to true. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
     * @param {Number} id The ID of the filter.
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdColumnsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3FilterIdColumnsPut",value:function cloudidRestApi3FilterIdColumnsPut(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdColumnsPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}/columns','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a filter. Permissions required: Permission to log in to Jira, however the following rules govern what a user can delete:
     * @param {Number} id The ID of the filter to delete.
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3FilterIdDelete",value:function cloudidRestApi3FilterIdDelete(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdDelete");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdFavouriteDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdFavouriteDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
     * @param {Number} id The ID of the filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdFavouriteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"cloudidRestApi3FilterIdFavouriteDelete",value:function cloudidRestApi3FilterIdFavouriteDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdFavouriteDelete");}var pathParams={'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}/favourite','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdFavouritePut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdFavouritePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
     * @param {Number} id The ID of the filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdFavouritePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"cloudidRestApi3FilterIdFavouritePut",value:function cloudidRestApi3FilterIdFavouritePut(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdFavouritePut");}var pathParams={'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}/favourite','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a filter. Permissions required: None, however the calling user must have permission view the filter.
     * @param {Number} id The ID of the filter to return.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"cloudidRestApi3FilterIdGet",value:function cloudidRestApi3FilterIdGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdGet");}var pathParams={'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdPermissionGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdPermissionGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20031>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.
     * @param {Number} id The ID of the filter.
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdPermissionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20031>}
     */},{key:"cloudidRestApi3FilterIdPermissionGet",value:function cloudidRestApi3FilterIdPermissionGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdPermissionGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse34["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}/permission','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdPermissionPermissionIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdPermissionPermissionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a share permission from a filter. Permissions required: Permission to log in to Jira (i.e., member of the users group) and the calling user must own the filter.
     * @param {Number} id The ID of the filter.
     * @param {Number} permissionId The ID of the share permission.
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdPermissionPermissionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3FilterIdPermissionPermissionIdDelete",value:function cloudidRestApi3FilterIdPermissionPermissionIdDelete(id,permissionId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdPermissionPermissionIdDelete");}// verify the required parameter 'permissionId' is set
if(permissionId===undefined||permissionId===null){throw new Error("Missing the required parameter 'permissionId' when calling cloudidRestApi3FilterIdPermissionPermissionIdDelete");}var pathParams={'id':id,'permissionId':permissionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}/permission/{permissionId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdPermissionPermissionIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdPermissionPermissionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20032} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.
     * @param {Number} id The ID of the filter.
     * @param {Number} permissionId The ID of the share permission.
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdPermissionPermissionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20032}
     */},{key:"cloudidRestApi3FilterIdPermissionPermissionIdGet",value:function cloudidRestApi3FilterIdPermissionPermissionIdGet(id,permissionId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdPermissionPermissionIdGet");}// verify the required parameter 'permissionId' is set
if(permissionId===undefined||permissionId===null){throw new Error("Missing the required parameter 'permissionId' when calling cloudidRestApi3FilterIdPermissionPermissionIdGet");}var pathParams={'id':id,'permissionId':permissionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse35["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}/permission/{permissionId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdPermissionPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdPermissionPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20031>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a share permissions to a filter. If you add a global share permission (i.e., all logged-in users or the public) it will overwrite all share permissions for the filter.Be aware that this method uses different objects for updating share permissions compared to Update filter. Permissions required: Share dashboards and filters global permission and the calling user must own the filter.
     * @param {Number} id The ID of the filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject13} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdPermissionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20031>}
     */},{key:"cloudidRestApi3FilterIdPermissionPost",value:function cloudidRestApi3FilterIdPermissionPost(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdPermissionPost");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse34["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}/permission','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates an existing filter. Use this method to update a filter's name, description, JQL, or sharing. Permissions required: Permission to log in to Jira, however the following rules govern what a user can update:
     * @param {Number} id The ID of the filter to update.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:model/InlineObject12} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3FilterIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"cloudidRestApi3FilterIdPut",value:function cloudidRestApi3FilterIdPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3FilterIdPut");}var pathParams={'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterMyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterMyGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20028>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the filters owned by the calling user. If includeFavourites is true, the user's favorite filters are also returned. Permissions required: Permission to log in to Jira (i.e., member of the users group).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {Boolean} opts.includeFavourites Include the user's favorite filters in the response.
     * @param {module:api/DefaultApi~cloudidRestApi3FilterMyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20028>}
     */},{key:"cloudidRestApi3FilterMyGet",value:function cloudidRestApi3FilterMyGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand'],'includeFavourites':opts['includeFavourites']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse30["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/my','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new filter. The new filter is not shared and not selected as a favorite. Permissions required: Permission to log in to Jira.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:model/InlineObject10} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3FilterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"cloudidRestApi3FilterPost",value:function cloudidRestApi3FilterPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3FilterSearchGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3FilterSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Search for filters. This method is similar to Get filters except that you can refine the results to include filters that have specific attributes. For example, filters with a particular name. Permissions required: None, however only the following filters are returned (if no search parameters are set):
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId Returns filters with an owner that exactly matches accountId of the owner. This parameter cannot be used with the owner parameter.
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {String} opts.filterName Returns filters with a name that partially matches filterName.
     * @param {String} opts.groupname Returns filters that are shared with a group that has a name that exactly matches groupname.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Max is 50.
     * @param {module:model/String} opts.orderBy Orders the results by a property of the filter. For example, name.
     * @param {String} opts.owner Returns filters with an owner that exactly matches owner. This parameter cannot be used with the accountId parameter.
     * @param {Number} opts.projectId Returns filters that are shared with a project that has an ID that exactly matches projectId.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). The base index is 0.
     * @param {module:api/DefaultApi~cloudidRestApi3FilterSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20029}
     */},{key:"cloudidRestApi3FilterSearchGet",value:function cloudidRestApi3FilterSearchGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountId':opts['accountId'],'expand':opts['expand'],'filterName':opts['filterName'],'groupname':opts['groupname'],'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'owner':opts['owner'],'projectId':opts['projectId'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse31["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/filter/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3GroupDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3GroupDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.groupname The name of the group.
     * @param {String} opts.swapGroup The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs will be inaccessible after the deletion.
     * @param {module:api/DefaultApi~cloudidRestApi3GroupDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3GroupDelete",value:function cloudidRestApi3GroupDelete(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'groupname':opts['groupname'],'swapGroup':opts['swapGroup']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/group','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3GroupGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3GroupGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * This resource is deprecated, use group/member.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand List of fields to expand.
     * @param {String} opts.groupname The name of the group.
     * @param {module:api/DefaultApi~cloudidRestApi3GroupGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3GroupGet",value:function cloudidRestApi3GroupGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand'],'groupname':opts['groupname']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/group','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3GroupMemberGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3GroupMemberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20033} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all users in a group. Users are ordered by username.
     * @param {Object} opts Optional parameters
     * @param {String} opts.groupname The name of the group.
     * @param {Boolean} opts.includeInactiveUsers Include inactive users.
     * @param {Number} opts.maxResults The maximum number of users to return per page.
     * @param {Number} opts.startAt The index of the first user to return.
     * @param {module:api/DefaultApi~cloudidRestApi3GroupMemberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20033}
     */},{key:"cloudidRestApi3GroupMemberGet",value:function cloudidRestApi3GroupMemberGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'groupname':opts['groupname'],'includeInactiveUsers':opts['includeInactiveUsers'],'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse36["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/group/member','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3GroupPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3GroupPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a group.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject14} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3GroupPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2012}
     */},{key:"cloudidRestApi3GroupPost",value:function cloudidRestApi3GroupPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse117["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/group','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3GroupUserDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3GroupUserDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes a user from a group. Permissions required: Administer Jira global permission.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountid The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
     * @param {String} opts.groupname The name of the group.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3GroupUserDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3GroupUserDelete",value:function cloudidRestApi3GroupUserDelete(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountid':opts['accountid'],'groupname':opts['groupname'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/group/user','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3GroupUserPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3GroupUserPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a user to a group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.groupname The name of the group.
     * @param {module:model/InlineObject15} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3GroupUserPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3GroupUserPost",value:function cloudidRestApi3GroupUserPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={'groupname':opts['groupname']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/group/user','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3GroupsPickerGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3GroupsPickerGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20034} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId Parameter not in use.
     * @param {Array.<String>} opts.exclude A list of groups to exclude from the result.
     * @param {Number} opts.maxResults The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property jira.ajax.autocomplete.limit.
     * @param {String} opts.query The string to find in group names.
     * @param {String} opts.userName Parameter not in use.
     * @param {module:api/DefaultApi~cloudidRestApi3GroupsPickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20034}
     */},{key:"cloudidRestApi3GroupsPickerGet",value:function cloudidRestApi3GroupsPickerGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountId':opts['accountId'],'exclude':this.apiClient.buildCollectionParam(opts['exclude'],'csv'),'maxResults':opts['maxResults'],'query':opts['query'],'userName':opts['userName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse37["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/groups/picker','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3GroupuserpickerGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3GroupuserpickerGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20035} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users and groups matching a string. The string is used:
     * @param {Object} opts Optional parameters
     * @param {String} opts.avatarSize The size of the avatar to return. If an invalid value is provided, the default value is used.
     * @param {Boolean} opts.caseInsensitive Indicates whether the search for groups should be case insensitive.
     * @param {Boolean} opts.excludeConnectAddons Indicates whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.
     * @param {String} opts.fieldId The custom field ID of the field this request is for.
     * @param {Array.<String>} opts.issueTypeId The ID of an issue type that returned users and groups must have permission to view. To include multiple issue type IDs repeat this parameter, use of a comma separated list is not supported. Special values, such as -1 (all standard issue types) and -2 (all subtask issue types), are supported. This parameter is only used when fieldId is present.
     * @param {Number} opts.maxResults The maximum number of items to return in each list. The maximum is 1000.
     * @param {Array.<String>} opts.projectId The ID of a project that returned users and groups must have permission to view. To include multiple projects repeat this parameter, use of a comma separated list is not supported. This parameter is only used when fieldId is present.
     * @param {String} opts.query The search string.
     * @param {Boolean} opts.showAvatar Indicates whether the user avatar should be returned. If an invalid value is provided, the default value is used.
     * @param {module:api/DefaultApi~cloudidRestApi3GroupuserpickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20035}
     */},{key:"cloudidRestApi3GroupuserpickerGet",value:function cloudidRestApi3GroupuserpickerGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'avatarSize':opts['avatarSize'],'caseInsensitive':opts['caseInsensitive'],'excludeConnectAddons':opts['excludeConnectAddons'],'fieldId':opts['fieldId'],'issueTypeId':this.apiClient.buildCollectionParam(opts['issueTypeId'],'csv'),'maxResults':opts['maxResults'],'projectId':this.apiClient.buildCollectionParam(opts['projectId'],'csv'),'query':opts['query'],'showAvatar':opts['showAvatar']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse38["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/groupuserpicker','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueBulkPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueBulkPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates issues and, where the option to create sub-tasks is enabled in Jira, sub-tasks. Transitions may be applied, to move the issues or sub-tasks to a workflow step other than the default start step, and issue properties set.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject17} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueBulkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2014}
     */},{key:"cloudidRestApi3IssueBulkPost",value:function cloudidRestApi3IssueBulkPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse119["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/bulk','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueCreatemetaGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueCreatemetaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20036} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in Create issue and Create issues.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
     * @param {Array.<String>} opts.issuetypeIds Comma-separated list of issue type IDs. May be specified multiple times and with issuetypeNames.
     * @param {Array.<String>} opts.issuetypeNames Comma-separated list of issue type names. May be specified multiple times and with issuetypeIds.
     * @param {Array.<String>} opts.projectIds Comma-separated list of project IDs. May be specified multiple times and with projectKeys.
     * @param {Array.<String>} opts.projectKeys Comma-separated list of project keys. May be specified multiple times and with projectIds.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueCreatemetaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20036}
     */},{key:"cloudidRestApi3IssueCreatemetaGet",value:function cloudidRestApi3IssueCreatemetaGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand'],'issuetypeIds':this.apiClient.buildCollectionParam(opts['issuetypeIds'],'csv'),'issuetypeNames':this.apiClient.buildCollectionParam(opts['issuetypeNames'],'csv'),'projectIds':this.apiClient.buildCollectionParam(opts['projectIds'],'csv'),'projectKeys':this.apiClient.buildCollectionParam(opts['projectKeys'],'csv')};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse39["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/createmeta','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyAssigneePut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyAssigneePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Assigns an issue to a user. Use this operation when the calling user does not have the Edit Issues permission but has the Assign issue permission for the project that the issue is in.
     * @param {String} issueIdOrKey The ID or key of the issue to be assigned.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject21} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyAssigneePutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyAssigneePut",value:function cloudidRestApi3IssueIssueIdOrKeyAssigneePut(issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyAssigneePut");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/assignee','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyAttachmentsPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyAttachmentsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20038>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds one or more attachments to an issue. Attachments are posted as multipart/form-data (RFC 1867).
     * @param {String} issueIdOrKey The ID or key of the issue that attachments are added to.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyAttachmentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20038>}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyAttachmentsPost",value:function cloudidRestApi3IssueIssueIdOrKeyAttachmentsPost(issueIdOrKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyAttachmentsPost");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse41["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/attachments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyChangelogGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyChangelogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20039} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a paginated list of all updates of an issue, sorted by date, starting from the oldest.
     * @param {String} issueIdOrKey ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults Maximum number of items to return per page. See Pagination section for more details.
     * @param {Number} opts.startAt Page offset, ie. index of the first item returned in the page of results. Base index: 0.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyChangelogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20039}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyChangelogGet",value:function cloudidRestApi3IssueIssueIdOrKeyChangelogGet(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyChangelogGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse42["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/changelog','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyCommentGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20040} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * to get comments for
     * @param {String} issueIdOrKey to get comments for
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {Number} opts.maxResults how many results on the page should be included. Defaults to 50.
     * @param {String} opts.orderBy ordering of the results.
     * @param {Number} opts.startAt the page offset, if not specified then defaults to 0
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20040}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyCommentGet",value:function cloudidRestApi3IssueIssueIdOrKeyCommentGet(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyCommentGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand'],'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse44["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/comment','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyCommentIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * a string containing the issue id or key the comment belongs to
     * @param {String} id id of the comment to be deleted
     * @param {String} issueIdOrKey a string containing the issue id or key the comment belongs to
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyCommentIdDelete",value:function cloudidRestApi3IssueIssueIdOrKeyCommentIdDelete(id,issueIdOrKey,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssueIssueIdOrKeyCommentIdDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyCommentIdDelete");}var pathParams={'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/comment/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyCommentIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2015} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * of the issue the comment belongs to
     * @param {String} id the ID of the comment to request
     * @param {String} issueIdOrKey of the issue the comment belongs to
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2015}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyCommentIdGet",value:function cloudidRestApi3IssueIssueIdOrKeyCommentIdGet(id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssueIssueIdOrKeyCommentIdGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyCommentIdGet");}var pathParams={'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse120["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/comment/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyCommentIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2015} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * a string containing the issue id or key the comment belongs to
     * @param {String} id id of the comment to be updated
     * @param {String} issueIdOrKey a string containing the issue id or key the comment belongs to
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {module:model/InlineObject23} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2015}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyCommentIdPut",value:function cloudidRestApi3IssueIssueIdOrKeyCommentIdPut(id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssueIssueIdOrKeyCommentIdPut");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyCommentIdPut");}var pathParams={'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse120["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/comment/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyCommentPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2015} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * a string containing the issue id or key the comment will be added to
     * @param {String} issueIdOrKey a string containing the issue id or key the comment will be added to
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {module:model/InlineObject22} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyCommentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2015}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyCommentPost",value:function cloudidRestApi3IssueIssueIdOrKeyCommentPost(issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyCommentPost");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse120["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/comment','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.deleteSubtasks Indicates whether the issue's sub-tasks are deleted when the issue is deleted.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyDelete",value:function cloudidRestApi3IssueIssueIdOrKeyDelete(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyDelete");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'deleteSubtasks':opts['deleteSubtasks']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyEditmetaGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyEditmetaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20041} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in Edit issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrideEditableFlag Indicates whether non-editable fields should be returned. Available to connect app users with admin permissions.
     * @param {Boolean} opts.overrideScreenSecurity Indicates whether hidden fields should be returned. Available to connect app users with admin permissions.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyEditmetaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20041}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyEditmetaGet",value:function cloudidRestApi3IssueIssueIdOrKeyEditmetaGet(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyEditmetaGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'overrideEditableFlag':opts['overrideEditableFlag'],'overrideScreenSecurity':opts['overrideScreenSecurity']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse45["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/editmeta','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20037} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the details for an issue.
     * @param {String} issueIdOrKey The ID or key of the issue. For example, JRACLOUD-1549.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about the issues in the response. This parameter accepts multiple values separated by a comma:
     * @param {Array.<module:model/String>} opts.fields A comma-separated list of fields to return for the issue. Use it to retrieve a subset of fields. Allowed values:
     * @param {Boolean} opts.fieldsByKeys Indicates whether fields in fields are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
     * @param {Array.<module:model/String>} opts.properties A comma-separated list of issue properties to return for the issue. Allowed values:
     * @param {Boolean} opts.updateHistory Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira. This also populates the JQL issues search lastViewed field.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20037}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyGet",value:function cloudidRestApi3IssueIssueIdOrKeyGet(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand'],'fields':this.apiClient.buildCollectionParam(opts['fields'],'csv'),'fieldsByKeys':opts['fieldsByKeys'],'properties':this.apiClient.buildCollectionParam(opts['properties'],'csv'),'updateHistory':opts['updateHistory']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse40["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyNotifyPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyNotifyPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an email notification for an issue and adds it to the mail queue.
     * @param {String} issueIdOrKey ID or key of the issue that the notification is sent for.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject24} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyNotifyPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyNotifyPost",value:function cloudidRestApi3IssueIssueIdOrKeyNotifyPost(issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyNotifyPost");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/notify','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyPropertiesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the URIs and keys of an issue's properties.
     * @param {String} issueIdOrKey The key or ID of the issue.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyPropertiesGet",value:function cloudidRestApi3IssueIssueIdOrKeyPropertiesGet(issueIdOrKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyPropertiesGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an issue's property.
     * @param {String} issueIdOrKey The key or ID of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDelete",value:function cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDelete(issueIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDelete");}var pathParams={'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the key and value of an issue's property.
     * @param {String} issueIdOrKey The key or ID of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGet",value:function cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGet(issueIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGet");}var pathParams={'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of an issue's property. Use this resource to store custom data against an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} propertyKey The key of the issue property. The maximum length is 255 characters.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPut",value:function cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPut(issueIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPut");}var pathParams={'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edits an issue. A transition may be applied and issue properties updated as part of the edit.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.notifyUsers Indicates whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
     * @param {Boolean} opts.overrideEditableFlag Indicates whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions.
     * @param {Boolean} opts.overrideScreenSecurity Indicates whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions.
     * @param {module:model/InlineObject20} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyPut",value:function cloudidRestApi3IssueIssueIdOrKeyPut(issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyPut");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'notifyUsers':opts['notifyUsers'],'overrideEditableFlag':opts['overrideEditableFlag'],'overrideScreenSecurity':opts['overrideScreenSecurity']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyRemotelinkDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the remote issue link from the issue using the link's global ID.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.globalId The global ID of a remote issue link.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyRemotelinkDelete",value:function cloudidRestApi3IssueIssueIdOrKeyRemotelinkDelete(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyRemotelinkDelete");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'globalId':opts['globalId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/remotelink','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyRemotelinkGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20042>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.globalId The global ID of the remote issue link.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20042>}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyRemotelinkGet",value:function cloudidRestApi3IssueIssueIdOrKeyRemotelinkGet(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyRemotelinkGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'globalId':opts['globalId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse46["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/remotelink','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a remote issue link from an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} linkId The ID of a remote issue link.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDelete",value:function cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDelete(issueIdOrKey,linkId,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDelete");}// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDelete");}var pathParams={'issueIdOrKey':issueIdOrKey,'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20044} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a remote issue link for an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} linkId The ID of the remote issue link.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20044}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGet",value:function cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGet(issueIdOrKey,linkId,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGet");}// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGet");}var pathParams={'issueIdOrKey':issueIdOrKey,'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse48["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a remote issue link for an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} linkId The ID of the remote issue link.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject26} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPut",value:function cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPut(issueIdOrKey,linkId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPut");}// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPut");}var pathParams={'issueIdOrKey':issueIdOrKey,'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyRemotelinkPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20043} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates or updates a remote issue link for an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject25} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyRemotelinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20043}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyRemotelinkPost",value:function cloudidRestApi3IssueIssueIdOrKeyRemotelinkPost(issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyRemotelinkPost");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse47["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/remotelink','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyTransitionsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyTransitionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20045} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
     * @param {Boolean} opts.skipRemoteOnlyCondition Indicates whether transitions with the condition Hide From User Condition are included in the response.
     * @param {String} opts.transitionId The ID of the transition.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyTransitionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20045}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyTransitionsGet",value:function cloudidRestApi3IssueIssueIdOrKeyTransitionsGet(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyTransitionsGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand'],'skipRemoteOnlyCondition':opts['skipRemoteOnlyCondition'],'transitionId':opts['transitionId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse49["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/transitions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyTransitionsPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyTransitionsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. Optionally, issue properties can be set.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject27} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyTransitionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyTransitionsPost",value:function cloudidRestApi3IssueIssueIdOrKeyTransitionsPost(issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyTransitionsPost");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/transitions','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyVotesDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyVotesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a user's vote from an issue. This is the equivalent of the user clicking Unvote on an issue in Jira.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyVotesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyVotesDelete",value:function cloudidRestApi3IssueIssueIdOrKeyVotesDelete(issueIdOrKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyVotesDelete");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/votes','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyVotesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyVotesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20046} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details about the votes on an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyVotesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20046}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyVotesGet",value:function cloudidRestApi3IssueIssueIdOrKeyVotesGet(issueIdOrKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyVotesGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse50["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/votes','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyVotesPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyVotesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds the user's vote to an issue. This is the equivalent of the user clicking Vote on an issue in Jira.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyVotesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyVotesPost",value:function cloudidRestApi3IssueIssueIdOrKeyVotesPost(issueIdOrKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyVotesPost");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/votes','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWatchersDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWatchersDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a user as a watcher of an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The account ID of the user. Required if username is omitted, otherwise must be omitted.
     * @param {String} opts.username The name of the user. Required if accountId is omitted, otherwise must be omitted.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWatchersDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWatchersDelete",value:function cloudidRestApi3IssueIssueIdOrKeyWatchersDelete(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWatchersDelete");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'accountId':opts['accountId'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/watchers','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWatchersGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWatchersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20047} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the watchers for an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWatchersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20047}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWatchersGet",value:function cloudidRestApi3IssueIssueIdOrKeyWatchersGet(issueIdOrKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWatchersGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse51["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/watchers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWatchersPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWatchersPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a user as a watcher of an issue. If no user is specified the calling user is added.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWatchersPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWatchersPost",value:function cloudidRestApi3IssueIssueIdOrKeyWatchersPost(issueIdOrKey,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWatchersPost");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/watchers','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWorklogGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20048} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all worklogs for an issue.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1048576.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20048}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWorklogGet",value:function cloudidRestApi3IssueIssueIdOrKeyWorklogGet(issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogGet");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand'],'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse52["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/worklog','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWorklogIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a worklog from an issue.
     * @param {String} id The ID of the worklog.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.adjustEstimate Defines how to update the issue's time estimate, the options are:
     * @param {String} opts.increaseBy The amount to increase the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is manual.
     * @param {String} opts.newEstimate The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
     * @param {Boolean} opts.notifyUsers Indicates whether users watching the issue are notified by email.
     * @param {Boolean} opts.overrideEditableFlag Indicates whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWorklogIdDelete",value:function cloudidRestApi3IssueIssueIdOrKeyWorklogIdDelete(id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogIdDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogIdDelete");}var pathParams={'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'adjustEstimate':opts['adjustEstimate'],'increaseBy':opts['increaseBy'],'newEstimate':opts['newEstimate'],'notifyUsers':opts['notifyUsers'],'overrideEditableFlag':opts['overrideEditableFlag']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/worklog/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWorklogIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20049} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a worklog.
     * @param {String} id The ID of the worklog.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20049}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWorklogIdGet",value:function cloudidRestApi3IssueIssueIdOrKeyWorklogIdGet(id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogIdGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogIdGet");}var pathParams={'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse53["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/worklog/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWorklogIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20049} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a worklog.
     * @param {String} id The ID of the worklog.
     * @param {String} issueIdOrKey The ID or key the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.adjustEstimate Defines how to update the issue's time estimate, the options are:
     * @param {module:model/String} opts.expand Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
     * @param {String} opts.newEstimate The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
     * @param {Boolean} opts.notifyUsers Indicates whether users watching the issue are notified by email.
     * @param {Boolean} opts.overrideEditableFlag Indicates whether the worklog should be added to the issue even if the issue is not editable, for example, because the issue is closed. Only connect app users with admin permissions can use this flag.
     * @param {module:model/InlineObject29} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20049}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWorklogIdPut",value:function cloudidRestApi3IssueIssueIdOrKeyWorklogIdPut(id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogIdPut");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogIdPut");}var pathParams={'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'adjustEstimate':opts['adjustEstimate'],'expand':opts['expand'],'newEstimate':opts['newEstimate'],'notifyUsers':opts['notifyUsers'],'overrideEditableFlag':opts['overrideEditableFlag']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse53["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/worklog/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWorklogPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a worklog to an issue.
     * @param {String} issueIdOrKey The ID or key the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.adjustEstimate Defines how to update the issue's time estimate, the options are:
     * @param {module:model/String} opts.expand Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
     * @param {String} opts.newEstimate The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
     * @param {Boolean} opts.notifyUsers Indicates whether users watching the issue are notified by email.
     * @param {Boolean} opts.overrideEditableFlag Indicates whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag.
     * @param {String} opts.reduceBy The amount to reduce the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m). For example, 2d. Required when adjustEstimate is manual.
     * @param {module:model/InlineObject28} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWorklogPost",value:function cloudidRestApi3IssueIssueIdOrKeyWorklogPost(issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogPost");}var pathParams={'issueIdOrKey':issueIdOrKey};var queryParams={'adjustEstimate':opts['adjustEstimate'],'expand':opts['expand'],'newEstimate':opts['newEstimate'],'notifyUsers':opts['notifyUsers'],'overrideEditableFlag':opts['overrideEditableFlag'],'reduceBy':opts['reduceBy']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/worklog','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the keys of all properties for a worklog.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} worklogId The ID of the worklog.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGet",value:function cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGet(issueIdOrKey,worklogId,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGet");}// verify the required parameter 'worklogId' is set
if(worklogId===undefined||worklogId===null){throw new Error("Missing the required parameter 'worklogId' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGet");}var pathParams={'issueIdOrKey':issueIdOrKey,'worklogId':worklogId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a worklog property.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {String} worklogId The ID of the worklog.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete",value:function cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(issueIdOrKey,propertyKey,worklogId,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");}// verify the required parameter 'worklogId' is set
if(worklogId===undefined||worklogId===null){throw new Error("Missing the required parameter 'worklogId' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");}var pathParams={'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey,'worklogId':worklogId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of a worklog property.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {String} worklogId The ID of the worklog.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet",value:function cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(issueIdOrKey,propertyKey,worklogId,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");}// verify the required parameter 'worklogId' is set
if(worklogId===undefined||worklogId===null){throw new Error("Missing the required parameter 'worklogId' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");}var pathParams={'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey,'worklogId':worklogId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of a worklog property. Use this operation to store custom data against the worklog.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} propertyKey The key of the issue property. The maximum length is 255 characters.
     * @param {String} worklogId The ID of the worklog.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut",value:function cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(issueIdOrKey,propertyKey,worklogId,callback){var postBody=null;// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");}// verify the required parameter 'worklogId' is set
if(worklogId===undefined||worklogId===null){throw new Error("Missing the required parameter 'worklogId' when calling cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");}var pathParams={'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey,'worklogId':worklogId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueLinkLinkIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueLinkLinkIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an issue link.
     * @param {String} linkId The ID of the issue link.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueLinkLinkIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueLinkLinkIdDelete",value:function cloudidRestApi3IssueLinkLinkIdDelete(linkId,callback){var postBody=null;// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling cloudidRestApi3IssueLinkLinkIdDelete");}var pathParams={'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issueLink/{linkId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueLinkLinkIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueLinkLinkIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20050} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue link.
     * @param {String} linkId The ID of the issue link.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueLinkLinkIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20050}
     */},{key:"cloudidRestApi3IssueLinkLinkIdGet",value:function cloudidRestApi3IssueLinkLinkIdGet(linkId,callback){var postBody=null;// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling cloudidRestApi3IssueLinkLinkIdGet");}var pathParams={'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse55["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issueLink/{linkId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueLinkPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueLinkPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have Issue Linking enabled.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject30} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueLinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueLinkPost",value:function cloudidRestApi3IssueLinkPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issueLink','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueLinkTypeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueLinkTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20051} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of all issue link types.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueLinkTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20051}
     */},{key:"cloudidRestApi3IssueLinkTypeGet",value:function cloudidRestApi3IssueLinkTypeGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse56["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issueLinkType','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an issue link type.
     * @param {String} issueLinkTypeId The ID of the issue link type.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDelete",value:function cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDelete(issueLinkTypeId,callback){var postBody=null;// verify the required parameter 'issueLinkTypeId' is set
if(issueLinkTypeId===undefined||issueLinkTypeId===null){throw new Error("Missing the required parameter 'issueLinkTypeId' when calling cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDelete");}var pathParams={'issueLinkTypeId':issueLinkTypeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issueLinkType/{issueLinkTypeId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue link type.
     * @param {String} issueLinkTypeId The ID of the issue link type.
     * @param {module:api/DefaultApi~cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2016}
     */},{key:"cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGet",value:function cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGet(issueLinkTypeId,callback){var postBody=null;// verify the required parameter 'issueLinkTypeId' is set
if(issueLinkTypeId===undefined||issueLinkTypeId===null){throw new Error("Missing the required parameter 'issueLinkTypeId' when calling cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGet");}var pathParams={'issueLinkTypeId':issueLinkTypeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse121["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issueLinkType/{issueLinkTypeId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates an issue link type.
     * @param {String} issueLinkTypeId The ID of the issue link type.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject32} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2016}
     */},{key:"cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPut",value:function cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPut(issueLinkTypeId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'issueLinkTypeId' is set
if(issueLinkTypeId===undefined||issueLinkTypeId===null){throw new Error("Missing the required parameter 'issueLinkTypeId' when calling cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPut");}var pathParams={'issueLinkTypeId':issueLinkTypeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse121["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issueLinkType/{issueLinkTypeId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssueLinkTypePost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssueLinkTypePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link's inward and outward relationships.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject31} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssueLinkTypePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2016}
     */},{key:"cloudidRestApi3IssueLinkTypePost",value:function cloudidRestApi3IssueLinkTypePost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse121["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issueLinkType','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuePickerGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuePickerGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of suggested issues matching the auto-completion query for the user executing this request. This operation checks the user's history and browsing context to return issue suggestions.
     * @param {Object} opts Optional parameters
     * @param {String} opts.currentIssueKey Key of the issue defining search context. The issue defining a context is excluded from the search results.
     * @param {String} opts.currentJQL JQL that defines the search context. Only issues matching this JQL query are included in the results. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
     * @param {String} opts.currentProjectId ID of a project defining search context. Only issues belonging to a given project are suggested.
     * @param {String} opts.query Query used to filter issue search results.
     * @param {Boolean} opts.showSubTaskParent Set to false to exclude parent issue from the suggestions list if search is performed in the context of a sub-task.
     * @param {Boolean} opts.showSubTasks Set to false to exclude subtasks from the suggestions list.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuePickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssuePickerGet",value:function cloudidRestApi3IssuePickerGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'currentIssueKey':opts['currentIssueKey'],'currentJQL':opts['currentJQL'],'currentProjectId':opts['currentProjectId'],'query':opts['query'],'showSubTaskParent':opts['showSubTaskParent'],'showSubTasks':opts['showSubTasks']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/picker','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuePost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an issue or, where the option to create sub-tasks is enabled in Jira, a sub-task. A transition may be applied, to move the issue or sub-task to a workflow step other than the default start step, and issue properties set.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateHistory Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira.
     * @param {module:model/InlineObject16} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssuePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2013}
     */},{key:"cloudidRestApi3IssuePost",value:function cloudidRestApi3IssuePost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={'updateHistory':opts['updateHistory']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse118["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issue','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuePropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuePropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.
     * @param {String} propertyKey The key of the property.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject19} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssuePropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssuePropertiesPropertyKeyDelete",value:function cloudidRestApi3IssuePropertiesPropertyKeyDelete(propertyKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssuePropertiesPropertyKeyDelete");}var pathParams={'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuePropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuePropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets a property value on multiple issues. The issues to be updated can be specified by a filter.
     * @param {String} propertyKey The key of the property. The maximum length is 255 characters.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject18} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssuePropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssuePropertiesPropertyKeyPut",value:function cloudidRestApi3IssuePropertiesPropertyKeyPut(propertyKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssuePropertiesPropertyKeyPut");}var pathParams={'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issue/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuesecurityschemesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuesecurityschemesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20052} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all issue security schemes.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuesecurityschemesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20052}
     */},{key:"cloudidRestApi3IssuesecurityschemesGet",value:function cloudidRestApi3IssuesecurityschemesGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse57["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issuesecurityschemes','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuesecurityschemesIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuesecurityschemesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20053} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue security scheme along with its security levels.
     * @param {Number} id The ID of the issue security scheme. Use the Get issue security schemes operation to get a list of issue security scheme IDs.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuesecurityschemesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20053}
     */},{key:"cloudidRestApi3IssuesecurityschemesIdGet",value:function cloudidRestApi3IssuesecurityschemesIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssuesecurityschemesIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse58["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issuesecurityschemes/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20050InwardIssueFieldsIssuetype>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all issue types. Permissions required: Permission to access Jira, however, only issue types that are visible to the user are returned.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20050InwardIssueFieldsIssuetype>}
     */},{key:"cloudidRestApi3IssuetypeGet",value:function cloudidRestApi3IssuetypeGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20050InwardIssueFieldsIssuetype["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeIdAlternativesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeIdAlternativesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20050InwardIssueFieldsIssuetype>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme. Permissions required: Permission to access Jira.
     * @param {String} id The ID of the issue type.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeIdAlternativesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20050InwardIssueFieldsIssuetype>}
     */},{key:"cloudidRestApi3IssuetypeIdAlternativesGet",value:function cloudidRestApi3IssuetypeIdAlternativesGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssuetypeIdAlternativesGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20050InwardIssueFieldsIssuetype["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype/{id}/alternatives','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeIdAvatar2Post operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeIdAvatar2PostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Loads an avatar for the issue type.
     * @param {String} id The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The length of each side of the crop region.
     * @param {Number} opts.x The X coordinate of the top-left corner of the crop region.
     * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeIdAvatar2PostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2017}
     */},{key:"cloudidRestApi3IssuetypeIdAvatar2Post",value:function cloudidRestApi3IssuetypeIdAvatar2Post(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssuetypeIdAvatar2Post");}var pathParams={'id':id};var queryParams={'size':opts['size'],'x':opts['x'],'y':opts['y']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse122["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype/{id}/avatar2','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (alternativeIssueTypeId). A list of alternative issue types can be obtained from the Get alternative issue types resource. Permissions required: Administer Jira global permission.
     * @param {String} id The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {String} opts.alternativeIssueTypeId The ID of the replacement issue type.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssuetypeIdDelete",value:function cloudidRestApi3IssuetypeIdDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssuetypeIdDelete");}var pathParams={'id':id};var queryParams={'alternativeIssueTypeId':opts['alternativeIssueTypeId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20054} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue type. Permissions required:
     * @param {String} id The ID of the issue type.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20054}
     */},{key:"cloudidRestApi3IssuetypeIdGet",value:function cloudidRestApi3IssuetypeIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssuetypeIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse59["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates the issue type. Permissions required: Administer Jira global permission.
     * @param {String} id The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject34} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssuetypeIdPut",value:function cloudidRestApi3IssuetypeIdPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3IssuetypeIdPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeIssueTypeIdPropertiesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeIssueTypeIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all the issue type property keys of the issue type. Permissions required:
     * @param {String} issueTypeId The ID of the issue type.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeIssueTypeIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"cloudidRestApi3IssuetypeIssueTypeIdPropertiesGet",value:function cloudidRestApi3IssuetypeIssueTypeIdPropertiesGet(issueTypeId,callback){var postBody=null;// verify the required parameter 'issueTypeId' is set
if(issueTypeId===undefined||issueTypeId===null){throw new Error("Missing the required parameter 'issueTypeId' when calling cloudidRestApi3IssuetypeIssueTypeIdPropertiesGet");}var pathParams={'issueTypeId':issueTypeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype/{issueTypeId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the issue type property. Permissions required: Administer Jira global permission.
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDelete",value:function cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDelete(issueTypeId,propertyKey,callback){var postBody=null;// verify the required parameter 'issueTypeId' is set
if(issueTypeId===undefined||issueTypeId===null){throw new Error("Missing the required parameter 'issueTypeId' when calling cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDelete");}var pathParams={'issueTypeId':issueTypeId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the key and value of the issue type property. Permissions required:
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGet",value:function cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGet(issueTypeId,propertyKey,callback){var postBody=null;// verify the required parameter 'issueTypeId' is set
if(issueTypeId===undefined||issueTypeId===null){throw new Error("Missing the required parameter 'issueTypeId' when calling cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGet");}var pathParams={'issueTypeId':issueTypeId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates or updates the value of the issue type property. Use this resource to store and update data against an issue type. The value of the request body must be a valid, non-empty JSON blob. The maximum length of the property value is 32768 bytes. Permissions required: Administer Jira global permission.
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the issue type property. The maximum length of the key is 255 bytes.
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPut",value:function cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPut(issueTypeId,propertyKey,callback){var postBody=null;// verify the required parameter 'issueTypeId' is set
if(issueTypeId===undefined||issueTypeId===null){throw new Error("Missing the required parameter 'issueTypeId' when calling cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPut");}var pathParams={'issueTypeId':issueTypeId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3IssuetypePost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3IssuetypePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an issue type and adds it to the default issue type scheme. Permissions required: Administer Jira global permission.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject33} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3IssuetypePostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3IssuetypePost",value:function cloudidRestApi3IssuetypePost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/issuetype','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3JqlAutocompletedataGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3JqlAutocompletedataGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20055} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns reference data for JQL searches. This is a downloadable version of the documentation provided in Advanced searching - fields reference and Advanced searching - functions reference, along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.
     * @param {module:api/DefaultApi~cloudidRestApi3JqlAutocompletedataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20055}
     */},{key:"cloudidRestApi3JqlAutocompletedataGet",value:function cloudidRestApi3JqlAutocompletedataGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse60["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/jql/autocompletedata','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3JqlAutocompletedataSuggestionsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3JqlAutocompletedataSuggestionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20056} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the JQL search auto complete suggestions for a field.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fieldName The name of the field.
     * @param {String} opts.fieldValue The partial field item name entered by the user.
     * @param {String} opts.predicateName The name of the CHANGED operator predicate for which the suggestions are generated. The valid predicate operators are by, from, and to.
     * @param {String} opts.predicateValue The partial predicate item name entered by the user.
     * @param {module:api/DefaultApi~cloudidRestApi3JqlAutocompletedataSuggestionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20056}
     */},{key:"cloudidRestApi3JqlAutocompletedataSuggestionsGet",value:function cloudidRestApi3JqlAutocompletedataSuggestionsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'fieldName':opts['fieldName'],'fieldValue':opts['fieldValue'],'predicateName':opts['predicateName'],'predicateValue':opts['predicateValue']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse61["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/jql/autocompletedata/suggestions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3JqlPdcleanerPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3JqlPdcleanerPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20057} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * The query strings having personal data that need to be migrated. There should be at most 100 queries.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject35} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3JqlPdcleanerPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20057}
     */},{key:"cloudidRestApi3JqlPdcleanerPost",value:function cloudidRestApi3JqlPdcleanerPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse62["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/jql/pdcleaner','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3MypermissionsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3MypermissionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20058} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of permissions indicating which permissions the user has. Details of the user's permissions can be obtained in a global, project, or issue context.
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueId The ID of the issue.
     * @param {String} opts.issueKey The key of the issue. Ignored if issueId is provided.
     * @param {String} opts.permissions A comma separated list of permission keys. Omitting this parameter is deprecated. To get the list of available permissions, use Get all permissions. Note that deprecated keys cannot be used. Deprecated keys are not returned by Get all permissions but are returned by this operation if permissions is omitted.
     * @param {String} opts.projectId The ID of project.
     * @param {String} opts.projectKey The key of project. Ignored if projectId is provided.
     * @param {module:api/DefaultApi~cloudidRestApi3MypermissionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20058}
     */},{key:"cloudidRestApi3MypermissionsGet",value:function cloudidRestApi3MypermissionsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'issueId':opts['issueId'],'issueKey':opts['issueKey'],'permissions':opts['permissions'],'projectId':opts['projectId'],'projectKey':opts['projectKey']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse63["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/mypermissions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3MypreferencesDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3MypreferencesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a preference of the user, which restores the default value of system defined settings.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the preference.
     * @param {module:api/DefaultApi~cloudidRestApi3MypreferencesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3MypreferencesDelete",value:function cloudidRestApi3MypreferencesDelete(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/mypreferences','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3MypreferencesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3MypreferencesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of a preference of the user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the preference.
     * @param {module:api/DefaultApi~cloudidRestApi3MypreferencesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3MypreferencesGet",value:function cloudidRestApi3MypreferencesGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/mypreferences','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3MypreferencesLocaleDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3MypreferencesLocaleDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the locale of the current user, which restores the default setting.
     * @param {module:api/DefaultApi~cloudidRestApi3MypreferencesLocaleDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3MypreferencesLocaleDelete",value:function cloudidRestApi3MypreferencesLocaleDelete(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/mypreferences/locale','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3MypreferencesLocaleGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3MypreferencesLocaleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20059} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the locale for the current user.
     * @param {module:api/DefaultApi~cloudidRestApi3MypreferencesLocaleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20059}
     */},{key:"cloudidRestApi3MypreferencesLocaleGet",value:function cloudidRestApi3MypreferencesLocaleGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse64["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/mypreferences/locale','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3MypreferencesLocalePut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3MypreferencesLocalePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the locale of the current user. The requested locale must be one supported by the instance of Jira.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject36} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3MypreferencesLocalePutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3MypreferencesLocalePut",value:function cloudidRestApi3MypreferencesLocalePut(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/mypreferences/locale','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3MypreferencesPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3MypreferencesPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a preference for the user or updates its value. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the preference. Maximum length is 255 characters.
     * @param {module:api/DefaultApi~cloudidRestApi3MypreferencesPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3MypreferencesPut",value:function cloudidRestApi3MypreferencesPut(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/mypreferences','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3MyselfGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3MyselfGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20060} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details for the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about user in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3MyselfGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20060}
     */},{key:"cloudidRestApi3MyselfGet",value:function cloudidRestApi3MyselfGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse66["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/myself','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3NotificationschemeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3NotificationschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20061} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a paginated list of notification schemes in order by display name.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.maxResults The maximum number of items to return per page. Max is 50.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). The base index is 0.
     * @param {module:api/DefaultApi~cloudidRestApi3NotificationschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20061}
     */},{key:"cloudidRestApi3NotificationschemeGet",value:function cloudidRestApi3NotificationschemeGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand'],'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse67["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/notificationscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3NotificationschemeIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3NotificationschemeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20062} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a notification scheme, including the list of events and the recipients who will receive notifications for those events.
     * @param {Number} id The ID of the notification scheme. Use Get notification schemes paginated to get a list of notification scheme IDs.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3NotificationschemeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20062}
     */},{key:"cloudidRestApi3NotificationschemeIdGet",value:function cloudidRestApi3NotificationschemeIdGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3NotificationschemeIdGet");}var pathParams={'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse68["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/notificationscheme/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20063} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all permissions, including:
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20063}
     */},{key:"cloudidRestApi3PermissionsGet",value:function cloudidRestApi3PermissionsGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse69["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/permissions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionsProjectPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionsProjectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20064} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all the projects where the user is granted a list of project permissions.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject37} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionsProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20064}
     */},{key:"cloudidRestApi3PermissionsProjectPost",value:function cloudidRestApi3PermissionsProjectPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse70["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/permissions/project','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionschemeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20065} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all permission schemes.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20065}
     */},{key:"cloudidRestApi3PermissionschemeGet",value:function cloudidRestApi3PermissionschemeGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse71["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/permissionscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionschemePost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionschemePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants. Permissions required: Administer Jira global permission.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:model/InlineObject38} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionschemePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2018}
     */},{key:"cloudidRestApi3PermissionschemePost",value:function cloudidRestApi3PermissionschemePost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse123["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/permissionscheme','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionschemeSchemeIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a permission scheme. Permissions required: Administer Jira global permission.
     * @param {Number} schemeId The ID of the permission scheme being deleted (e.g., 10000).
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3PermissionschemeSchemeIdDelete",value:function cloudidRestApi3PermissionschemeSchemeIdDelete(schemeId,callback){var postBody=null;// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling cloudidRestApi3PermissionschemeSchemeIdDelete");}var pathParams={'schemeId':schemeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/permissionscheme/{schemeId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionschemeSchemeIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a permission scheme. Permissions required: Permission to log in to Jira.
     * @param {Number} schemeId The ID of the permission scheme to return (e.g., 10000).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2018}
     */},{key:"cloudidRestApi3PermissionschemeSchemeIdGet",value:function cloudidRestApi3PermissionschemeSchemeIdGet(schemeId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling cloudidRestApi3PermissionschemeSchemeIdGet");}var pathParams={'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse123["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/permissionscheme/{schemeId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionschemeSchemeIdPermissionGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPermissionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20066} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all permission grants for a permission scheme. Permissions required: Permission to log in to Jira.
     * @param {Number} schemeId The ID of the permission scheme (e.g., 10010).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPermissionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20066}
     */},{key:"cloudidRestApi3PermissionschemeSchemeIdPermissionGet",value:function cloudidRestApi3PermissionschemeSchemeIdPermissionGet(schemeId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling cloudidRestApi3PermissionschemeSchemeIdPermissionGet");}var pathParams={'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse72["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/permissionscheme/{schemeId}/permission','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a permission grant from a permission scheme. See About permission schemes and grants for more details. Permissions required: Administer Jira global permission.
     * @param {Number} permissionId The ID of the permission grant to delete (e.g., 10847).
     * @param {Number} schemeId The ID of the permission scheme to delete the permission grant from (e.g., 10000).
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDelete",value:function cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDelete(permissionId,schemeId,callback){var postBody=null;// verify the required parameter 'permissionId' is set
if(permissionId===undefined||permissionId===null){throw new Error("Missing the required parameter 'permissionId' when calling cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDelete");}// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDelete");}var pathParams={'permissionId':permissionId,'schemeId':schemeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2019} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a permission grant. Permissions required: Permission to log in to Jira.
     * @param {Number} permissionId The ID of the permission grant (e.g., 10000).
     * @param {Number} schemeId The ID of the permission scheme (e.g., 10010).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2019}
     */},{key:"cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGet",value:function cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGet(permissionId,schemeId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'permissionId' is set
if(permissionId===undefined||permissionId===null){throw new Error("Missing the required parameter 'permissionId' when calling cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGet");}// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGet");}var pathParams={'permissionId':permissionId,'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse124["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionschemeSchemeIdPermissionPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPermissionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2019} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new permission grant in the given permission scheme. Permissions required: Administer Jira global permission.
     * @param {Number} schemeId The ID of the permission scheme in which to create a new permission grant.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:model/InlineObject40} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPermissionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2019}
     */},{key:"cloudidRestApi3PermissionschemeSchemeIdPermissionPost",value:function cloudidRestApi3PermissionschemeSchemeIdPermissionPost(schemeId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling cloudidRestApi3PermissionschemeSchemeIdPermissionPost");}var pathParams={'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse124["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/permissionscheme/{schemeId}/permission','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PermissionschemeSchemeIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a permission scheme. Below are some important things to note when using this resource:
     * @param {Number} schemeId The ID of the permission scheme to update (e.g., 10000).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:model/InlineObject39} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3PermissionschemeSchemeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2018}
     */},{key:"cloudidRestApi3PermissionschemeSchemeIdPut",value:function cloudidRestApi3PermissionschemeSchemeIdPut(schemeId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling cloudidRestApi3PermissionschemeSchemeIdPut");}var pathParams={'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse123["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/permissionscheme/{schemeId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PriorityGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PriorityGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20050InwardIssueFieldsPriority>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the list of all issue priorities.
     * @param {module:api/DefaultApi~cloudidRestApi3PriorityGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20050InwardIssueFieldsPriority>}
     */},{key:"cloudidRestApi3PriorityGet",value:function cloudidRestApi3PriorityGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20050InwardIssueFieldsPriority["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/priority','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3PriorityIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3PriorityIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20067} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue priority.
     * @param {String} id The ID of the issue priority.
     * @param {module:api/DefaultApi~cloudidRestApi3PriorityIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20067}
     */},{key:"cloudidRestApi3PriorityIdGet",value:function cloudidRestApi3PriorityIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3PriorityIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse73["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/priority/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectCategoryGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectCategoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project categories.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectCategoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory>}
     */},{key:"cloudidRestApi3ProjectCategoryGet",value:function cloudidRestApi3ProjectCategoryGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_CloudidRestApi3FilterIdPermissionProjectProjectCategory["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/projectCategory','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectCategoryIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectCategoryIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a project category.
     * @param {Number} id ID of the project category to delete.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectCategoryIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ProjectCategoryIdDelete",value:function cloudidRestApi3ProjectCategoryIdDelete(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ProjectCategoryIdDelete");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/projectCategory/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectCategoryIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectCategoryIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a project category.
     * @param {Number} id The ID of the project category.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectCategoryIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"cloudidRestApi3ProjectCategoryIdGet",value:function cloudidRestApi3ProjectCategoryIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ProjectCategoryIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/projectCategory/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectCategoryIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectCategoryIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a project category.
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject48} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectCategoryIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"cloudidRestApi3ProjectCategoryIdPut",value:function cloudidRestApi3ProjectCategoryIdPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ProjectCategoryIdPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/projectCategory/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectCategoryPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectCategoryPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a project category.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject47} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectCategoryPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"cloudidRestApi3ProjectCategoryPost",value:function cloudidRestApi3ProjectCategoryPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/projectCategory','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CloudidRestApi3FilterIdPermissionProject>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all projects visible to the currently logged in user. Deprecated, use Get projects paginated that supports search and pagination. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, it returns all projects that are visible for anonymous users.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.recent Returns the most recently accessed projects for the current user. You may specify the number of results to return up to a maximum of 20. If no user is logged in, then the recently accessed projects will be returned based on the current HTTP session.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CloudidRestApi3FilterIdPermissionProject>}
     */},{key:"cloudidRestApi3ProjectGet",value:function cloudidRestApi3ProjectGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand'],'recent':opts['recent']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_CloudidRestApi3FilterIdPermissionProject["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/project','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20110} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new project.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject41} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20110}
     */},{key:"cloudidRestApi3ProjectPost",value:function cloudidRestApi3ProjectPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse111["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyAvatar2Post operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyAvatar2PostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20111} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Loads an avatar for a project.
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The length of each side of the crop region.
     * @param {Number} opts.x The X coordinate of the top-left corner of the crop region.
     * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyAvatar2PostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20111}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyAvatar2Post",value:function cloudidRestApi3ProjectProjectIdOrKeyAvatar2Post(projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyAvatar2Post");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={'size':opts['size'],'x':opts['x'],'y':opts['y']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse112["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/avatar2','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a custom avatar from a project. Note that system avatars cannot be deleted.
     * @param {Number} id The ID of the avatar.
     * @param {String} projectIdOrKey The project ID or (case-sensitive) key.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDelete",value:function cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDelete(id,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDelete");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDelete");}var pathParams={'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/avatar/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyAvatarPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyAvatarPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the avatar displayed for a project.
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject43} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyAvatarPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyAvatarPut",value:function cloudidRestApi3ProjectProjectIdOrKeyAvatarPut(projectIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyAvatarPut");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/avatar','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyAvatarsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyAvatarsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20072} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project avatars, grouped by system and custom avatars.
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyAvatarsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20072}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyAvatarsGet",value:function cloudidRestApi3ProjectProjectIdOrKeyAvatarsGet(projectIdOrKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyAvatarsGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse79["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/avatars','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyComponentGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyComponentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20073} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a paginated representation of all components existing in a single project. See the Get project components resource if you want to get a full list of versions without pagination.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of components to return per page. Max 50.
     * @param {module:model/String} opts.orderBy Order the results by a particular field:
     * @param {String} opts.query Filter the results using a literal string. Components with a matching name or description are returned (case insensitive).
     * @param {Number} opts.startAt The starting index of the returned list of components. The base index is 0.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyComponentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20073}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyComponentGet",value:function cloudidRestApi3ProjectProjectIdOrKeyComponentGet(projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyComponentGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'query':opts['query'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse80["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/component','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyComponentsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyComponentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20074>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all components existing in a single project. See the Get project components paginated resource if you want to get a full list of components with pagination.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyComponentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20074>}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyComponentsGet",value:function cloudidRestApi3ProjectProjectIdOrKeyComponentsGet(projectIdOrKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyComponentsGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse81["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/components','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an existing project.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyDelete",value:function cloudidRestApi3ProjectProjectIdOrKeyDelete(projectIdOrKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyDelete");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20071} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the project details for the specified project.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20071}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyGet",value:function cloudidRestApi3ProjectProjectIdOrKeyGet(projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse78["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyPropertiesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project property keys for the project.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyPropertiesGet",value:function cloudidRestApi3ProjectProjectIdOrKeyPropertiesGet(projectIdOrKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyPropertiesGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes the property from the project.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The project property key. Use Get project property keys to get a list of all project property keys.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDelete",value:function cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDelete(projectIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDelete");}var pathParams={'projectIdOrKey':projectIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of the project property.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The project property key. Use Get project property keys to get a list of all project property keys.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGet",value:function cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGet(projectIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGet");}var pathParams={'projectIdOrKey':projectIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of the project property. You can use project properties to store custom data against the project.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The key of the project property. The maximum length is 255 bytes.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPut",value:function cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPut(projectIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPut");}var pathParams={'projectIdOrKey':projectIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20071} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates the project details of an existing project.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
     * @param {module:model/InlineObject42} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20071}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyPut",value:function cloudidRestApi3ProjectProjectIdOrKeyPut(projectIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyPut");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse78["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyRoleGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20075} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of project roles for the project.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20075}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyRoleGet",value:function cloudidRestApi3ProjectProjectIdOrKeyRoleGet(projectIdOrKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyRoleGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse82["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/role','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyRoleIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes actors from a project role for the project.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {String} opts.group The name of the group to remove from the project role.
     * @param {String} opts.user The user account ID of the user to remove from the project role.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyRoleIdDelete",value:function cloudidRestApi3ProjectProjectIdOrKeyRoleIdDelete(id,projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ProjectProjectIdOrKeyRoleIdDelete");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyRoleIdDelete");}var pathParams={'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={'group':opts['group'],'user':opts['user']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/role/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyRoleIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the project role's details and actors associated with the project. The list of actors is sorted by display name.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyRoleIdGet",value:function cloudidRestApi3ProjectProjectIdOrKeyRoleIdGet(id,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ProjectProjectIdOrKeyRoleIdGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyRoleIdGet");}var pathParams={'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/role/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyRoleIdPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds additional actors to a project role for the project.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject45} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyRoleIdPost",value:function cloudidRestApi3ProjectProjectIdOrKeyRoleIdPost(id,projectIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ProjectProjectIdOrKeyRoleIdPost");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyRoleIdPost");}var pathParams={'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/role/{id}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyRoleIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Associates actors with the project role for the project, replacing all existing actors.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject44} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoleIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyRoleIdPut",value:function cloudidRestApi3ProjectProjectIdOrKeyRoleIdPut(id,projectIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ProjectProjectIdOrKeyRoleIdPut");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyRoleIdPut");}var pathParams={'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/role/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CloudidRestApi3FilterIdPermissionRole>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project roles and the details for each role. Note that the list of project roles is common to all projects.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CloudidRestApi3FilterIdPermissionRole>}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGet",value:function cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGet(projectIdOrKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_CloudidRestApi3FilterIdPermissionRole["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/roledetails','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyStatusesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20077>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20077>}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyStatusesGet",value:function cloudidRestApi3ProjectProjectIdOrKeyStatusesGet(projectIdOrKey,callback){var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyStatusesGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse84["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/statuses','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20071} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates the project type.
     * @param {String} newProjectTypeKey The key of the new project type.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20071}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPut",value:function cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPut(newProjectTypeKey,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'newProjectTypeKey' is set
if(newProjectTypeKey===undefined||newProjectTypeKey===null){throw new Error("Missing the required parameter 'newProjectTypeKey' when calling cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPut");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPut");}var pathParams={'newProjectTypeKey':newProjectTypeKey,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse78["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/type/{newProjectTypeKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyVersionGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyVersionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20078} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a paginated representation of all versions existing in a single project. See the Get project versions resource if you want to get a full list of versions without pagination.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.maxResults The maximum number of versions to return per page. Max 50.
     * @param {module:model/String} opts.orderBy Order the results by a particular field:
     * @param {String} opts.query Filter the results using a literal string. Versions with matching name or description are returned (case insensitive).
     * @param {Number} opts.startAt The starting index of the returned list of versions (page offset). The base index is 0.
     * @param {String} opts.status A comma separated string used to filter the results by version status.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyVersionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20078}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyVersionGet",value:function cloudidRestApi3ProjectProjectIdOrKeyVersionGet(projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyVersionGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={'expand':opts['expand'],'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'query':opts['query'],'startAt':opts['startAt'],'status':opts['status']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse85["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/version','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectIdOrKeyVersionsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyVersionsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20078Values>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all versions existing in a single project. The response is not paginated. Use Get project versions paginated if you want to get the versions in a project with pagination.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectIdOrKeyVersionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20078Values>}
     */},{key:"cloudidRestApi3ProjectProjectIdOrKeyVersionsGet",value:function cloudidRestApi3ProjectProjectIdOrKeyVersionsGet(projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling cloudidRestApi3ProjectProjectIdOrKeyVersionsGet");}var pathParams={'projectIdOrKey':projectIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20078Values["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectIdOrKey}/versions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20053} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the issue security scheme associated with the project.
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20053}
     */},{key:"cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGet",value:function cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGet(projectKeyOrId,callback){var postBody=null;// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGet");}var pathParams={'projectKeyOrId':projectKeyOrId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse58["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectKeyOrId}/issuesecuritylevelscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20062} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets a notification scheme associated with the project. See the Get notification scheme resource for more information about notification schemes.
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20062}
     */},{key:"cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGet",value:function cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGet(projectKeyOrId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGet");}var pathParams={'projectKeyOrId':projectKeyOrId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse68["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectKeyOrId}/notificationscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20079} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets the permission scheme associated with the project.
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20079}
     */},{key:"cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGet",value:function cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGet(projectKeyOrId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGet");}var pathParams={'projectKeyOrId':projectKeyOrId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse86["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectKeyOrId}/permissionscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20079} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Associates a permission scheme with a particular project. See Managing project permissions for more information about permission schemes.
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
     * @param {module:model/InlineObject46} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20079}
     */},{key:"cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePut",value:function cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePut(projectKeyOrId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePut");}var pathParams={'projectKeyOrId':projectKeyOrId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse86["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectKeyOrId}/permissionscheme','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20080} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all issue security levels for the project that the currently authenticated user has access to. If the user does not have permission to see an issue security level, then that level is not returned. If the user lacks the Set Issue Security permission, then an empty list is returned.
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20080}
     */},{key:"cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGet",value:function cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGet(projectKeyOrId,callback){var postBody=null;// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGet");}var pathParams={'projectKeyOrId':projectKeyOrId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse88["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/{projectKeyOrId}/securitylevel','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectSearchGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20068} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns projects visible to the currently logged in user. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, then all projects visible to anonymous users are returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.action Filter results by projects for which the calling user has permission to perform the given action. The view action corresponds with the Browse projects project permission, and the edit action corresponds with Administer project permissions.
     * @param {Number} opts.categoryId The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.maxResults The maximum number of items to return per page. Max 50.
     * @param {module:model/String} opts.orderBy Order the results by a particular field. If the orderBy field is not set, then projects are listed in ascending order by project key:
     * @param {String} opts.query Filter the results using a literal string. Projects with a matching key or name are returned (case insensitive).
     * @param {Number} opts.startAt The starting index of the first item returned in the page of results (page offset). The base index is 0.
     * @param {String} opts.typeKey Orders results by the project type. This parameter accepts multiple values separated by a comma. Valid values are business, service_desk, and software.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20068}
     */},{key:"cloudidRestApi3ProjectSearchGet",value:function cloudidRestApi3ProjectSearchGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'action':opts['action'],'categoryId':opts['categoryId'],'expand':opts['expand'],'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'query':opts['query'],'startAt':opts['startAt'],'typeKey':opts['typeKey']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse74["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectTypeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20069>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project types, whether or not the instance has a valid license for each type.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20069>}
     */},{key:"cloudidRestApi3ProjectTypeGet",value:function cloudidRestApi3ProjectTypeGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse75["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/type','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20070} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a project type if it is accessible to the logged in user.
     * @param {String} projectTypeKey The key of the project type.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20070}
     */},{key:"cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGet",value:function cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGet(projectTypeKey,callback){var postBody=null;// verify the required parameter 'projectTypeKey' is set
if(projectTypeKey===undefined||projectTypeKey===null){throw new Error("Missing the required parameter 'projectTypeKey' when calling cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGet");}var pathParams={'projectTypeKey':projectTypeKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse77["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/type/{projectTypeKey}/accessible','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectTypeProjectTypeKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectTypeProjectTypeKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20070} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a project type.
     * @param {String} projectTypeKey The key of the project type.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectTypeProjectTypeKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20070}
     */},{key:"cloudidRestApi3ProjectTypeProjectTypeKeyGet",value:function cloudidRestApi3ProjectTypeProjectTypeKeyGet(projectTypeKey,callback){var postBody=null;// verify the required parameter 'projectTypeKey' is set
if(projectTypeKey===undefined||projectTypeKey===null){throw new Error("Missing the required parameter 'projectTypeKey' when calling cloudidRestApi3ProjectTypeProjectTypeKeyGet");}var pathParams={'projectTypeKey':projectTypeKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse77["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/project/type/{projectTypeKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectvalidateKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectvalidateKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20081} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Validates a project key by confirming the key is a valid string and not in use.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The project key.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectvalidateKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20081}
     */},{key:"cloudidRestApi3ProjectvalidateKeyGet",value:function cloudidRestApi3ProjectvalidateKeyGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse89["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/projectvalidate/key','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectvalidateValidProjectKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectvalidateValidProjectKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20082} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The project key.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectvalidateValidProjectKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20082}
     */},{key:"cloudidRestApi3ProjectvalidateValidProjectKeyGet",value:function cloudidRestApi3ProjectvalidateValidProjectKeyGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse90["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/projectvalidate/validProjectKey','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ProjectvalidateValidProjectNameGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ProjectvalidateValidProjectNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20083} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The project name.
     * @param {module:api/DefaultApi~cloudidRestApi3ProjectvalidateValidProjectNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20083}
     */},{key:"cloudidRestApi3ProjectvalidateValidProjectNameGet",value:function cloudidRestApi3ProjectvalidateValidProjectNameGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'name':opts['name']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse91["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/projectvalidate/validProjectName','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ResolutionGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ResolutionGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of all issue resolution values.
     * @param {module:api/DefaultApi~cloudidRestApi3ResolutionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory>}
     */},{key:"cloudidRestApi3ResolutionGet",value:function cloudidRestApi3ResolutionGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_CloudidRestApi3FilterIdPermissionProjectProjectCategory["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/resolution','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ResolutionIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ResolutionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue resolution value.
     * @param {String} id The ID of the issue resolution value.
     * @param {module:api/DefaultApi~cloudidRestApi3ResolutionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"cloudidRestApi3ResolutionIdGet",value:function cloudidRestApi3ResolutionIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ResolutionIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/resolution/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3RoleGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3RoleGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CloudidRestApi3FilterIdPermissionRole>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets a list of all project roles, complete with project role details and default actors.
     * @param {module:api/DefaultApi~cloudidRestApi3RoleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CloudidRestApi3FilterIdPermissionRole>}
     */},{key:"cloudidRestApi3RoleGet",value:function cloudidRestApi3RoleGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_CloudidRestApi3FilterIdPermissionRole["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/role','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3RoleIdActorsDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3RoleIdActorsDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20084} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes default actors from the project role. You may remove either a group or user, but you cannot remove a group and a user in the same request.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.group The group name of the group to be removed as a default actor.
     * @param {String} opts.user The user account ID of the user to remove as a default actor.
     * @param {module:api/DefaultApi~cloudidRestApi3RoleIdActorsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20084}
     */},{key:"cloudidRestApi3RoleIdActorsDelete",value:function cloudidRestApi3RoleIdActorsDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3RoleIdActorsDelete");}var pathParams={'id':id};var queryParams={'group':opts['group'],'user':opts['user']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse92["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/role/{id}/actors','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3RoleIdActorsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3RoleIdActorsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20084} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default actors for the project role.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {module:api/DefaultApi~cloudidRestApi3RoleIdActorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20084}
     */},{key:"cloudidRestApi3RoleIdActorsGet",value:function cloudidRestApi3RoleIdActorsGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3RoleIdActorsGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse92["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/role/{id}/actors','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3RoleIdActorsPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3RoleIdActorsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20084} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds default actors to the given role. You may add either groups or users, but you cannot add groups and users in the same request.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject52} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3RoleIdActorsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20084}
     */},{key:"cloudidRestApi3RoleIdActorsPost",value:function cloudidRestApi3RoleIdActorsPost(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3RoleIdActorsPost");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse92["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/role/{id}/actors','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3RoleIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3RoleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.
     * @param {Number} id The ID of the project role to delete. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.swap The ID of the project role that will replace the one being deleted.
     * @param {module:api/DefaultApi~cloudidRestApi3RoleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3RoleIdDelete",value:function cloudidRestApi3RoleIdDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3RoleIdDelete");}var pathParams={'id':id};var queryParams={'swap':opts['swap']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/role/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3RoleIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3RoleIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {module:api/DefaultApi~cloudidRestApi3RoleIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"cloudidRestApi3RoleIdGet",value:function cloudidRestApi3RoleIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3RoleIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/role/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3RoleIdPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3RoleIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update either the project role's name or its description.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject51} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3RoleIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"cloudidRestApi3RoleIdPost",value:function cloudidRestApi3RoleIdPost(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3RoleIdPost");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/role/{id}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3RoleIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3RoleIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update the project role's name and description. You must include both a name and a description in the request.
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject50} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3RoleIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"cloudidRestApi3RoleIdPut",value:function cloudidRestApi3RoleIdPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3RoleIdPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/role/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3RolePost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3RolePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20079} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new project role with no default actors. You can use the Add default actors to project role the project method to add default actors to the project role after creating it.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject49} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3RolePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20079}
     */},{key:"cloudidRestApi3RolePost",value:function cloudidRestApi3RolePost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse86["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/role','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensAddToDefaultFieldIdPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensAddToDefaultFieldIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a field to the default tab of the default screen.
     * @param {String} fieldId The ID of the field.
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensAddToDefaultFieldIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ScreensAddToDefaultFieldIdPost",value:function cloudidRestApi3ScreensAddToDefaultFieldIdPost(fieldId,callback){var postBody=null;// verify the required parameter 'fieldId' is set
if(fieldId===undefined||fieldId===null){throw new Error("Missing the required parameter 'fieldId' when calling cloudidRestApi3ScreensAddToDefaultFieldIdPost");}var pathParams={'fieldId':fieldId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/addToDefault/{fieldId}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all screens.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 100.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ScreensGet",value:function cloudidRestApi3ScreensGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/screens','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdAvailableFieldsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdAvailableFieldsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the fields that can be added to a tab on a screen.
     * @param {Number} screenId The ID of the screen.
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdAvailableFieldsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ScreensScreenIdAvailableFieldsGet",value:function cloudidRestApi3ScreensScreenIdAvailableFieldsGet(screenId,callback){var postBody=null;// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdAvailableFieldsGet");}var pathParams={'screenId':screenId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/availableFields','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdTabsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the list of tabs for a screen.
     * @param {Number} screenId The ID of the screen.
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectKey The key of the project.
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ScreensScreenIdTabsGet",value:function cloudidRestApi3ScreensScreenIdTabsGet(screenId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdTabsGet");}var pathParams={'screenId':screenId};var queryParams={'projectKey':opts['projectKey']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/tabs','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdTabsPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20085} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a tab for a screen.
     * @param {Number} screenId The ID of the screen.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject53} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20085}
     */},{key:"cloudidRestApi3ScreensScreenIdTabsPost",value:function cloudidRestApi3ScreensScreenIdTabsPost(screenId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdTabsPost");}var pathParams={'screenId':screenId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse93["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/tabs','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdTabsTabIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a screen tab.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ScreensScreenIdTabsTabIdDelete",value:function cloudidRestApi3ScreensScreenIdTabsTabIdDelete(screenId,tabId,callback){var postBody=null;// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdDelete");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdDelete");}var pathParams={'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/tabs/{tabId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all fields for a screen tab.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectKey The key of the project.
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGet",value:function cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGet(screenId,tabId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGet");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGet");}var pathParams={'screenId':screenId,'tabId':tabId};var queryParams={'projectKey':opts['projectKey']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/tabs/{tabId}/fields','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes a field from a screen tab.
     * @param {String} id The ID of the field.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete",value:function cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete(id,screenId,tabId,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete");}var pathParams={'id':id,'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Moves a screen tab field.
     * @param {String} id The ID of the field.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject56} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost",value:function cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost(id,screenId,tabId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost");}var pathParams={'id':id,'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}/move','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20086} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a field to a screen tab.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject55} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20086}
     */},{key:"cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPost",value:function cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPost(screenId,tabId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPost");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPost");}var pathParams={'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse94["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/tabs/{tabId}/fields','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Moves a screen tab.
     * @param {Number} pos The position of tab. The base index is 0.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost",value:function cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost(pos,screenId,tabId,callback){var postBody=null;// verify the required parameter 'pos' is set
if(pos===undefined||pos===null){throw new Error("Missing the required parameter 'pos' when calling cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost");}var pathParams={'pos':pos,'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/tabs/{tabId}/move/{pos}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ScreensScreenIdTabsTabIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20085} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates the name of a screen tab.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject54} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3ScreensScreenIdTabsTabIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20085}
     */},{key:"cloudidRestApi3ScreensScreenIdTabsTabIdPut",value:function cloudidRestApi3ScreensScreenIdTabsTabIdPut(screenId,tabId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdPut");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling cloudidRestApi3ScreensScreenIdTabsTabIdPut");}var pathParams={'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse93["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/screens/{screenId}/tabs/{tabId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3SearchGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3SearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20087} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Searches for issues using JQL. Permissions required: Permission to access Jira.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma:
     * @param {Array.<module:model/String>} opts.fields A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values:
     * @param {Boolean} opts.fieldsByKeys Reference fields by their key (rather than ID).
     * @param {String} opts.jql The JQL that defines the search. If no JQL expression is provided, all issues are returned. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 100.
     * @param {Array.<String>} opts.properties A comma-separated list of up to 5 issue properties to include in the results.
     * @param {Number} opts.startAt The index of the first item to return in the page of results (page offset).
     * @param {module:model/String} opts.validateQuery Determines how to validate the JQL query and treat the validation results. Supported values are:
     * @param {module:api/DefaultApi~cloudidRestApi3SearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20087}
     */},{key:"cloudidRestApi3SearchGet",value:function cloudidRestApi3SearchGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand'],'fields':this.apiClient.buildCollectionParam(opts['fields'],'csv'),'fieldsByKeys':opts['fieldsByKeys'],'jql':opts['jql'],'maxResults':opts['maxResults'],'properties':this.apiClient.buildCollectionParam(opts['properties'],'csv'),'startAt':opts['startAt'],'validateQuery':opts['validateQuery']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse95["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3SearchPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3SearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20087} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Searches for issues using JQL. Permissions required: Permission to access Jira.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject57} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3SearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20087}
     */},{key:"cloudidRestApi3SearchPost",value:function cloudidRestApi3SearchPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse95["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/search','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3SecuritylevelIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3SecuritylevelIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details of an issue security level.
     * @param {String} id The ID of the issue security level.
     * @param {module:api/DefaultApi~cloudidRestApi3SecuritylevelIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"cloudidRestApi3SecuritylevelIdGet",value:function cloudidRestApi3SecuritylevelIdGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3SecuritylevelIdGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/securitylevel/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3ServerInfoGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3ServerInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20088} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns information about the Jira instance.
     * @param {module:api/DefaultApi~cloudidRestApi3ServerInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20088}
     */},{key:"cloudidRestApi3ServerInfoGet",value:function cloudidRestApi3ServerInfoGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse96["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/serverInfo','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3SettingsColumnsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3SettingsColumnsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20030>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default issue navigator columns.
     * @param {module:api/DefaultApi~cloudidRestApi3SettingsColumnsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20030>}
     */},{key:"cloudidRestApi3SettingsColumnsGet",value:function cloudidRestApi3SettingsColumnsGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse33["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/settings/columns','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3SettingsColumnsPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3SettingsColumnsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default issue navigator columns.
     * @param {module:api/DefaultApi~cloudidRestApi3SettingsColumnsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3SettingsColumnsPut",value:function cloudidRestApi3SettingsColumnsPut(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/settings/columns','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3StatusGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3StatusGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20045To>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of all statuses associated with workflows.
     * @param {module:api/DefaultApi~cloudidRestApi3StatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20045To>}
     */},{key:"cloudidRestApi3StatusGet",value:function cloudidRestApi3StatusGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20045To["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/status','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3StatusIdOrNameGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3StatusIdOrNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20089} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a status. The status must be associated with a workflow to be returned.
     * @param {String} idOrName The ID or name of the status.
     * @param {module:api/DefaultApi~cloudidRestApi3StatusIdOrNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20089}
     */},{key:"cloudidRestApi3StatusIdOrNameGet",value:function cloudidRestApi3StatusIdOrNameGet(idOrName,callback){var postBody=null;// verify the required parameter 'idOrName' is set
if(idOrName===undefined||idOrName===null){throw new Error("Missing the required parameter 'idOrName' when calling cloudidRestApi3StatusIdOrNameGet");}var pathParams={'idOrName':idOrName};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse97["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/status/{idOrName}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3StatuscategoryGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3StatuscategoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20045ToStatusCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of all status categories.
     * @param {module:api/DefaultApi~cloudidRestApi3StatuscategoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20045ToStatusCategory>}
     */},{key:"cloudidRestApi3StatuscategoryGet",value:function cloudidRestApi3StatuscategoryGet(callback){var postBody=null;var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20045ToStatusCategory["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/statuscategory','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3StatuscategoryIdOrKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3StatuscategoryIdOrKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20090} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a status category. Status categories provided a mechanism for categorizing statuses.
     * @param {String} idOrKey The ID or key of the status category.
     * @param {module:api/DefaultApi~cloudidRestApi3StatuscategoryIdOrKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20090}
     */},{key:"cloudidRestApi3StatuscategoryIdOrKeyGet",value:function cloudidRestApi3StatuscategoryIdOrKeyGet(idOrKey,callback){var postBody=null;// verify the required parameter 'idOrKey' is set
if(idOrKey===undefined||idOrKey===null){throw new Error("Missing the required parameter 'idOrKey' when calling cloudidRestApi3StatuscategoryIdOrKeyGet");}var pathParams={'idOrKey':idOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse99["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/statuscategory/{idOrKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3TaskTaskIdCancelPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3TaskTaskIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Cancels a task.
     * @param {String} taskId The ID of the task.
     * @param {module:api/DefaultApi~cloudidRestApi3TaskTaskIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3TaskTaskIdCancelPost",value:function cloudidRestApi3TaskTaskIdCancelPost(taskId,callback){var postBody=null;// verify the required parameter 'taskId' is set
if(taskId===undefined||taskId===null){throw new Error("Missing the required parameter 'taskId' when calling cloudidRestApi3TaskTaskIdCancelPost");}var pathParams={'taskId':taskId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/task/{taskId}/cancel','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3TaskTaskIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3TaskTaskIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20091} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the status of a long-running asynchronous task.
     * @param {String} taskId The ID of the task.
     * @param {module:api/DefaultApi~cloudidRestApi3TaskTaskIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20091}
     */},{key:"cloudidRestApi3TaskTaskIdGet",value:function cloudidRestApi3TaskTaskIdGet(taskId,callback){var postBody=null;// verify the required parameter 'taskId' is set
if(taskId===undefined||taskId===null){throw new Error("Missing the required parameter 'taskId' when calling cloudidRestApi3TaskTaskIdGet");}var pathParams={'taskId':taskId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse100["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/task/{taskId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20072} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the system and custom avatars for a project or issue type.
     * @param {String} entityId The ID of the entity item.
     * @param {String} type The type of the entity. Valid values are project and issuetype.
     * @param {module:api/DefaultApi~cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20072}
     */},{key:"cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGet",value:function cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGet(entityId,type,callback){var postBody=null;// verify the required parameter 'entityId' is set
if(entityId===undefined||entityId===null){throw new Error("Missing the required parameter 'entityId' when calling cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGet");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new Error("Missing the required parameter 'type' when calling cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGet");}var pathParams={'entityId':entityId,'type':type};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse79["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/universal_avatar/type/{type}/owner/{entityId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Loads a custom avatar for a project or issue type.
     * @param {String} entityId The ID of the entity item.
     * @param {String} type The type of the entity. Valid values are project and issuetype.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The length of each side of the crop region.
     * @param {Number} opts.x The X coordinate of the top-left corner of the crop region.
     * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region.
     * @param {module:api/DefaultApi~cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2017}
     */},{key:"cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPost",value:function cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPost(entityId,type,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'entityId' is set
if(entityId===undefined||entityId===null){throw new Error("Missing the required parameter 'entityId' when calling cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPost");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new Error("Missing the required parameter 'type' when calling cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPost");}var pathParams={'entityId':entityId,'type':type};var queryParams={'size':opts['size'],'x':opts['x'],'y':opts['y']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse122["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/universal_avatar/type/{type}/owner/{entityId}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an avatar from a project or issue type.
     * @param {Number} id The ID of the avatar.
     * @param {String} owningObjectId The ID of the entity item.
     * @param {String} type The type of the entity. Valid values are project and issuetype.
     * @param {module:api/DefaultApi~cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete",value:function cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(id,owningObjectId,type,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");}// verify the required parameter 'owningObjectId' is set
if(owningObjectId===undefined||owningObjectId===null){throw new Error("Missing the required parameter 'owningObjectId' when calling cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new Error("Missing the required parameter 'type' when calling cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");}var pathParams={'id':id,'owningObjectId':owningObjectId,'type':type};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserAssignableMultiProjectSearchGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserAssignableMultiProjectSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004Author>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users who fulfill both of these criteria:
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.projectKeys A comma-separated list of project keys (case sensitive).
     * @param {String} opts.query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
     * @param {module:api/DefaultApi~cloudidRestApi3UserAssignableMultiProjectSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004Author>}
     */},{key:"cloudidRestApi3UserAssignableMultiProjectSearchGet",value:function cloudidRestApi3UserAssignableMultiProjectSearchGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'maxResults':opts['maxResults'],'projectKeys':opts['projectKeys'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2004Author["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/assignable/multiProjectSearch','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserAssignableSearchGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserAssignableSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20060} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users that can be assigned to an issue. Use this method to find the list of users who can be assigned to:
     * @param {Object} opts Optional parameters
     * @param {Number} opts.actionDescriptorId The ID of the transition.
     * @param {String} opts.issueKey The key of the issue. Required, unless project is specified.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.project The project ID or project key (case sensitive). Required, unless issueKey is specified.
     * @param {String} opts.query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserAssignableSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20060}
     */},{key:"cloudidRestApi3UserAssignableSearchGet",value:function cloudidRestApi3UserAssignableSearchGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'actionDescriptorId':opts['actionDescriptorId'],'issueKey':opts['issueKey'],'maxResults':opts['maxResults'],'project':opts['project'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse66["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/assignable/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserBulkGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserBulkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20092} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details of users specified in a list of usernames or keys. Permissions required: Administer Jira global permission. Users with permission to access Jira can call this method, but empty search results are returned.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.key Comma-separated list of user keys. Required if username isn't provided.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 200.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {Array.<String>} opts.username Comma-separated list of usernames. Required if key isn't provided.
     * @param {module:api/DefaultApi~cloudidRestApi3UserBulkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20092}
     */},{key:"cloudidRestApi3UserBulkGet",value:function cloudidRestApi3UserBulkGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'key':this.apiClient.buildCollectionParam(opts['key'],'csv'),'maxResults':opts['maxResults'],'startAt':opts['startAt'],'username':this.apiClient.buildCollectionParam(opts['username'],'csv')};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse101["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/bulk','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserColumnsDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserColumnsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Resets the default issue table columns for the user to the system default. If a username is not passed, the calling user's default columns are reset. Permissions required:
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserColumnsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3UserColumnsDelete",value:function cloudidRestApi3UserColumnsDelete(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountId':opts['accountId'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/user/columns','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserColumnsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserColumnsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default issue table columns for the user. If a username is not passed in the request, the calling user's details are returned. Permissions required:
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserColumnsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3UserColumnsGet",value:function cloudidRestApi3UserColumnsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountId':opts['accountId'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/user/columns','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserColumnsPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserColumnsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default issue table columns for the user. If a username is not passed, the calling user's default columns are set. If no column details are sent, then all default columns are removed. The parameters for this resource are expressed as HTML form data. For example, in curl: curl -X PUT -d username=<username> -d columns=summary -d columns=description <url> Permissions required:
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserColumnsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3UserColumnsPut",value:function cloudidRestApi3UserColumnsPut(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountId':opts['accountId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/user/columns','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a user. Permissions required: Site administration (i.e., member of the site-admin group).
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.key This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3UserDelete",value:function cloudidRestApi3UserDelete(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountId':opts['accountId'],'key':opts['key'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/user','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20060} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a user. Permissions required: None.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {module:model/String} opts.expand Use expand to include additional information about users in the response. This parameter accepts multiple values separated by a comma:
     * @param {String} opts.key This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20060}
     */},{key:"cloudidRestApi3UserGet",value:function cloudidRestApi3UserGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountId':opts['accountId'],'expand':opts['expand'],'key':opts['key'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse66["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/user','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserGroupsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20093} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the groups to which a user belongs. Permissions required: Browse users and groups global permission.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The account ID of the user.
     * @param {String} opts.key The key of the user.
     * @param {String} opts.username The username of the user. Deprecated in favour of accountId.
     * @param {module:api/DefaultApi~cloudidRestApi3UserGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20093}
     */},{key:"cloudidRestApi3UserGroupsGet",value:function cloudidRestApi3UserGroupsGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountId':opts['accountId'],'key':opts['key'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse102["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/groups','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserPermissionSearchGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserPermissionSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004Author>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users who fulfill both of these criteria:
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueKey The issue key for the issue.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.permissions A comma-separated list of permissions. The valid permissions are:
     * @param {String} opts.projectKey The project key for the project (case sensitive).
     * @param {String} opts.query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
     * @param {module:api/DefaultApi~cloudidRestApi3UserPermissionSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004Author>}
     */},{key:"cloudidRestApi3UserPermissionSearchGet",value:function cloudidRestApi3UserPermissionSearchGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'issueKey':opts['issueKey'],'maxResults':opts['maxResults'],'permissions':opts['permissions'],'projectKey':opts['projectKey'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2004Author["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/permission/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserPickerGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserPickerGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20094} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users whose attributes match the query term. The returned object includes the html field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but will only get search results for an exact name match.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.exclude This parameter has been deprecated due to privacy changes. Use excludeAccountIds instead. See the migration guide for details. A comma-separated list of usernames to exclude from the search results.
     * @param {Array.<String>} opts.excludeAccountIds A comma-separated list of account IDs to exclude from the search results.
     * @param {Number} opts.maxResults The maximum number of items to return. Maximum is 1000. The total number of matched users is returned in total.
     * @param {String} opts.query A search input that is matched against appropriate user attributes to find relevant users.
     * @param {Boolean} opts.showAvatar Include the URI to the user's avatar.
     * @param {module:api/DefaultApi~cloudidRestApi3UserPickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20094}
     */},{key:"cloudidRestApi3UserPickerGet",value:function cloudidRestApi3UserPickerGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'exclude':this.apiClient.buildCollectionParam(opts['exclude'],'csv'),'excludeAccountIds':this.apiClient.buildCollectionParam(opts['excludeAccountIds'],'csv'),'maxResults':opts['maxResults'],'query':opts['query'],'showAvatar':opts['showAvatar']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse103["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/picker','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20060} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated. The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting password from the request, include \"notification\": \"true\" to ensure the user is sent an email advising them that their account has been created. This email includes a link for the user to set their password. If the notification isn't sent for a generated password, the user will need to be sent a reset password request from Jira. Permissions required: Administer Jira global permission
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject58} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3UserPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20060}
     */},{key:"cloudidRestApi3UserPost",value:function cloudidRestApi3UserPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse66["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/user','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserPropertiesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the keys of all properties for a user. Permissions required:
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"cloudidRestApi3UserPropertiesGet",value:function cloudidRestApi3UserPropertiesGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'accountId':opts['accountId'],'userKey':opts['userKey'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a property from a user. Permissions required:
     * @param {String} propertyKey The key of the user's property.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3UserPropertiesPropertyKeyDelete",value:function cloudidRestApi3UserPropertiesPropertyKeyDelete(propertyKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3UserPropertiesPropertyKeyDelete");}var pathParams={'propertyKey':propertyKey};var queryParams={'accountId':opts['accountId'],'userKey':opts['userKey'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/user/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of a user's property. If no property key is provided Get user property keys is called. Permissions required:
     * @param {String} propertyKey The key of the user's property.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"cloudidRestApi3UserPropertiesPropertyKeyGet",value:function cloudidRestApi3UserPropertiesPropertyKeyGet(propertyKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3UserPropertiesPropertyKeyGet");}var pathParams={'propertyKey':propertyKey};var queryParams={'accountId':opts['accountId'],'userKey':opts['userKey'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of a user's property. Use this resource to store custom data against a user. Permissions required:
     * @param {String} propertyKey The key of the user's property. The maximum length of the key is 255 bytes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3UserPropertiesPropertyKeyPut",value:function cloudidRestApi3UserPropertiesPropertyKeyPut(propertyKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling cloudidRestApi3UserPropertiesPropertyKeyPut");}var pathParams={'propertyKey':propertyKey};var queryParams={'accountId':opts['accountId'],'userKey':opts['userKey'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/user/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserSearchGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004Author>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users that match the search string and property. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but empty search results are returned.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeActive Include active users.
     * @param {Boolean} opts.includeInactive Include inactive users.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.property A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of nested from {\"something\":{\"nested\":1,\"other\":2}} use thepropertykey.something.nested=1.
     * @param {String} opts.query A query string that is matched against user attributes (key, name, displayName, and emailAddress) to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004Author>}
     */},{key:"cloudidRestApi3UserSearchGet",value:function cloudidRestApi3UserSearchGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'includeActive':opts['includeActive'],'includeInactive':opts['includeInactive'],'maxResults':opts['maxResults'],'property':opts['property'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2004Author["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserSearchQueryGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserSearchQueryGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Finds users using a structured query and returns user details. Permissions required: Browse users and groups global permission. The available queries statements are:
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeInactive Include inactive users in the results.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.query The search query.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~cloudidRestApi3UserSearchQueryGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3UserSearchQueryGet",value:function cloudidRestApi3UserSearchQueryGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'includeInactive':opts['includeInactive'],'maxResults':opts['maxResults'],'query':opts['query'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/user/search/query','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserSearchQueryKeyGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserSearchQueryKeyGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Finds users using a structured query and returns a list of user keys. Permissions required: Browse users and groups global permission. The available query statements are:
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeInactive Include inactive users in the results.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.query The search query.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~cloudidRestApi3UserSearchQueryKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3UserSearchQueryKeyGet",value:function cloudidRestApi3UserSearchQueryKeyGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'includeInactive':opts['includeInactive'],'maxResults':opts['maxResults'],'query':opts['query'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/user/search/query/key','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3UserViewissueSearchGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3UserViewissueSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004Author>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users who fulfill both of these criteria:
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueKey The issue key for the issue. Required, unless projectKey is specified.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.projectKey The project key for the project (case sensitive). Required, unless issueKey is specified.
     * @param {String} opts.query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~cloudidRestApi3UserViewissueSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004Author>}
     */},{key:"cloudidRestApi3UserViewissueSearchGet",value:function cloudidRestApi3UserViewissueSearchGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'issueKey':opts['issueKey'],'maxResults':opts['maxResults'],'projectKey':opts['projectKey'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2004Author["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/user/viewissue/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a project version. Deprecated, use Delete and replace version that supports swapping version values in custom fields, in addition to the swapping for fixVersion and affectedVersion provided in this resource. Alternative versions can be provided to update issues that use the deleted version in fixVersion or affectedVersion. If alternatives are not provided, occurrences of fixVersion and affectedVersion that contain the deleted version are cleared. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {String} opts.moveAffectedIssuesTo The ID of the version to update affectedVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @param {String} opts.moveFixIssuesTo The ID of the version to update fixVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @param {module:api/DefaultApi~cloudidRestApi3VersionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3VersionIdDelete",value:function cloudidRestApi3VersionIdDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3VersionIdDelete");}var pathParams={'id':id};var queryParams={'moveAffectedIssuesTo':opts['moveAffectedIssuesTo'],'moveFixIssuesTo':opts['moveFixIssuesTo']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20096} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a project version. Permissions required: Browse projects project permission
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about version in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~cloudidRestApi3VersionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20096}
     */},{key:"cloudidRestApi3VersionIdGet",value:function cloudidRestApi3VersionIdGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3VersionIdGet");}var pathParams={'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse105["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionIdMergetoMoveIssuesToPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionIdMergetoMoveIssuesToPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Merges two project versions. The merge is completed by deleting the version specified in id and replacing any occurrences of its ID in fixVersion with the version ID specified in moveIssuesTo. Consider using Delete and replace version instead. This resource supports swapping version values in fixVersion, affectedVersion, and custom fields. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {String} id The ID of the version to delete.
     * @param {String} moveIssuesTo The ID of the version to merge into.
     * @param {module:api/DefaultApi~cloudidRestApi3VersionIdMergetoMoveIssuesToPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3VersionIdMergetoMoveIssuesToPut",value:function cloudidRestApi3VersionIdMergetoMoveIssuesToPut(id,moveIssuesTo,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3VersionIdMergetoMoveIssuesToPut");}// verify the required parameter 'moveIssuesTo' is set
if(moveIssuesTo===undefined||moveIssuesTo===null){throw new Error("Missing the required parameter 'moveIssuesTo' when calling cloudidRestApi3VersionIdMergetoMoveIssuesToPut");}var pathParams={'id':id,'moveIssuesTo':moveIssuesTo};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{id}/mergeto/{moveIssuesTo}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionIdMovePost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionIdMovePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20096} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Modifies the version's sequence within the project, which affects the display order of the versions in Jira. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {String} id The ID of the version to be moved.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject61} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3VersionIdMovePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20096}
     */},{key:"cloudidRestApi3VersionIdMovePost",value:function cloudidRestApi3VersionIdMovePost(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3VersionIdMovePost");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse105["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{id}/move','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Modifies a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject60} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3VersionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3VersionIdPut",value:function cloudidRestApi3VersionIdPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3VersionIdPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionIdRelatedIssueCountsGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionIdRelatedIssueCountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20097} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the following counts for a version:
     * @param {String} id The ID of the version.
     * @param {module:api/DefaultApi~cloudidRestApi3VersionIdRelatedIssueCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20097}
     */},{key:"cloudidRestApi3VersionIdRelatedIssueCountsGet",value:function cloudidRestApi3VersionIdRelatedIssueCountsGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3VersionIdRelatedIssueCountsGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse106["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{id}/relatedIssueCounts','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionIdRemoveAndSwapPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionIdRemoveAndSwapPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a project version. Permissions required: Administer Jira global permission or Administer Projects project permission. Alternative versions can be provided to update issues that use the deleted version in fixVersion, affectedVersion, or any version picker custom fields. If alternatives are not provided, occurrences of fixVersion, affectedVersion, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject62} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3VersionIdRemoveAndSwapPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3VersionIdRemoveAndSwapPost",value:function cloudidRestApi3VersionIdRemoveAndSwapPost(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3VersionIdRemoveAndSwapPost");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{id}/removeAndSwap','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionIdUnresolvedIssueCountGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionIdUnresolvedIssueCountGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20098} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns counts of the issues and unresolved issues for the project version. Permissions required: Browse projects project permission
     * @param {String} id The ID of the version.
     * @param {module:api/DefaultApi~cloudidRestApi3VersionIdUnresolvedIssueCountGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20098}
     */},{key:"cloudidRestApi3VersionIdUnresolvedIssueCountGet",value:function cloudidRestApi3VersionIdUnresolvedIssueCountGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3VersionIdUnresolvedIssueCountGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse107["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{id}/unresolvedIssueCount','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20113} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject59} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3VersionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20113}
     */},{key:"cloudidRestApi3VersionPost",value:function cloudidRestApi3VersionPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse114["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/version','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionRemotelinkGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionRemotelinkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20095} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * the global ID of the remote resource that is linked to the versions
     * @param {Object} opts Optional parameters
     * @param {String} opts.globalId the global ID of the remote resource that is linked to the versions
     * @param {module:api/DefaultApi~cloudidRestApi3VersionRemotelinkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20095}
     */},{key:"cloudidRestApi3VersionRemotelinkGet",value:function cloudidRestApi3VersionRemotelinkGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'globalId':opts['globalId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse104["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/version/remotelink','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionVersionIdRemotelinkDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * The version for which to delete ALL existing remote version links
     * @param {String} versionId The version for which to delete ALL existing remote version links
     * @param {module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3VersionVersionIdRemotelinkDelete",value:function cloudidRestApi3VersionVersionIdRemotelinkDelete(versionId,callback){var postBody=null;// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling cloudidRestApi3VersionVersionIdRemotelinkDelete");}var pathParams={'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{versionId}/remotelink','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionVersionIdRemotelinkGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20095} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * a String containing the version ID
     * @param {String} versionId a String containing the version ID
     * @param {module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20095}
     */},{key:"cloudidRestApi3VersionVersionIdRemotelinkGet",value:function cloudidRestApi3VersionVersionIdRemotelinkGet(versionId,callback){var postBody=null;// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling cloudidRestApi3VersionVersionIdRemotelinkGet");}var pathParams={'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse104["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{versionId}/remotelink','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * The version ID of the remote link
     * @param {String} globalId The global ID of the remote link
     * @param {String} versionId The version ID of the remote link
     * @param {module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDelete",value:function cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDelete(globalId,versionId,callback){var postBody=null;// verify the required parameter 'globalId' is set
if(globalId===undefined||globalId===null){throw new Error("Missing the required parameter 'globalId' when calling cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDelete");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDelete");}var pathParams={'globalId':globalId,'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{versionId}/remotelink/{globalId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20099} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * A REST sub-resource representing a remote version link
     * @param {String} globalId The id of the remote issue link to be returned. If {@code null} (not provided) all remote links for the issue are returned.
     * @param {String} versionId a String containing the version id
     * @param {module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20099}
     */},{key:"cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGet",value:function cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGet(globalId,versionId,callback){var postBody=null;// verify the required parameter 'globalId' is set
if(globalId===undefined||globalId===null){throw new Error("Missing the required parameter 'globalId' when calling cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGet");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGet");}var pathParams={'globalId':globalId,'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse108["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{versionId}/remotelink/{globalId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * @param {String} globalId 
     * @param {String} versionId 
     * @param {module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPost",value:function cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPost(globalId,versionId,callback){var postBody=null;// verify the required parameter 'globalId' is set
if(globalId===undefined||globalId===null){throw new Error("Missing the required parameter 'globalId' when calling cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPost");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPost");}var pathParams={'globalId':globalId,'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{versionId}/remotelink/{globalId}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3VersionVersionIdRemotelinkPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a remote version link via POST. The link's global ID will be taken from the JSON payload if provided; otherwise, it will be generated.
     * @param {String} versionId 
     * @param {module:api/DefaultApi~cloudidRestApi3VersionVersionIdRemotelinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3VersionVersionIdRemotelinkPost",value:function cloudidRestApi3VersionVersionIdRemotelinkPost(versionId,callback){var postBody=null;// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling cloudidRestApi3VersionVersionIdRemotelinkPost");}var pathParams={'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/version/{versionId}/remotelink','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200100>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all workflows in Jira or a single workflow.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of the workflow to be returned. Only one workflow can be specified.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200100>}
     */},{key:"cloudidRestApi3WorkflowGet",value:function cloudidRestApi3WorkflowGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse4["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflow','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The name of the transition property to delete, also known as the name of the property.
     * @param {String} opts.workflowMode The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
     * @param {String} opts.workflowName The name of the workflow that the transition belongs to.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDelete",value:function cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDelete(transitionId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'transitionId' is set
if(transitionId===undefined||transitionId===null){throw new Error("Missing the required parameter 'transitionId' when calling cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDelete");}var pathParams={'transitionId':transitionId};var queryParams={'key':opts['key'],'workflowMode':opts['workflowMode'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/workflow/transitions/{transitionId}/properties','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200101>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeReservedKeys Some properties with keys that have the jira. prefix are reserved, i.e., not editable. To include these properties in the results, set this parameter to true.
     * @param {String} opts.key The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
     * @param {String} opts.workflowMode The workflow status. Set to live for active and inactive workflows, or draft for draft workflows.
     * @param {String} opts.workflowName The name of the workflow that the transition belongs to.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200101>}
     */},{key:"cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGet",value:function cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGet(transitionId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'transitionId' is set
if(transitionId===undefined||transitionId===null){throw new Error("Missing the required parameter 'transitionId' when calling cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGet");}var pathParams={'transitionId':transitionId};var queryParams={'includeReservedKeys':opts['includeReservedKeys'],'key':opts['key'],'workflowMode':opts['workflowMode'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse5["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflow/transitions/{transitionId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200102} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the property being added, also known as the name of the property. Set this to the same value as the key defined in the request body.
     * @param {String} opts.workflowMode The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
     * @param {String} opts.workflowName The name of the workflow that the transition belongs to.
     * @param {module:model/InlineObject64} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200102}
     */},{key:"cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPost",value:function cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPost(transitionId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'transitionId' is set
if(transitionId===undefined||transitionId===null){throw new Error("Missing the required parameter 'transitionId' when calling cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPost");}var pathParams={'transitionId':transitionId};var queryParams={'key':opts['key'],'workflowMode':opts['workflowMode'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse6["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflow/transitions/{transitionId}/properties','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200102} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the property being updated, also known as the name of the property. Set this to the same value as the key defined in the request body.
     * @param {String} opts.workflowMode The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
     * @param {String} opts.workflowName The name of the workflow that the transition belongs to.
     * @param {module:model/InlineObject63} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200102}
     */},{key:"cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPut",value:function cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPut(transitionId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'transitionId' is set
if(transitionId===undefined||transitionId===null){throw new Error("Missing the required parameter 'transitionId' when calling cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPut");}var pathParams={'transitionId':transitionId};var queryParams={'key':opts['key'],'workflowMode':opts['workflowMode'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse6["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflow/transitions/{transitionId}/properties','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdCreatedraftPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdCreatedraftPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme at any given time.
     * @param {Number} id The ID of the active workflow scheme that the draft is created from.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdCreatedraftPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"cloudidRestApi3WorkflowschemeIdCreatedraftPost",value:function cloudidRestApi3WorkflowschemeIdCreatedraftPost(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdCreatedraftPost");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/createdraft','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDefaultDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDefaultDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira's system workflow (the jira workflow).
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDefaultDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"cloudidRestApi3WorkflowschemeIdDefaultDelete",value:function cloudidRestApi3WorkflowschemeIdDefaultDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDefaultDelete");}var pathParams={'id':id};var queryParams={'updateDraftIfNeeded':opts['updateDraftIfNeeded']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/default','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDefaultGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDefaultGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200103} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Set to true to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDefaultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200103}
     */},{key:"cloudidRestApi3WorkflowschemeIdDefaultGet",value:function cloudidRestApi3WorkflowschemeIdDefaultGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDefaultGet");}var pathParams={'id':id};var queryParams={'returnDraftIfExists':opts['returnDraftIfExists']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse7["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/default','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDefaultPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDefaultPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default workflow for a workflow scheme.
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject67} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDefaultPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"cloudidRestApi3WorkflowschemeIdDefaultPut",value:function cloudidRestApi3WorkflowschemeIdDefaultPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDefaultPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/default','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).
     * @param {Number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3WorkflowschemeIdDelete",value:function cloudidRestApi3WorkflowschemeIdDelete(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDelete");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftDefaultDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftDefaultDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system workflow (the jira workflow).
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftDefaultDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftDefaultDelete",value:function cloudidRestApi3WorkflowschemeIdDraftDefaultDelete(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftDefaultDelete");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft/default','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftDefaultGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftDefaultGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200103} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftDefaultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200103}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftDefaultGet",value:function cloudidRestApi3WorkflowschemeIdDraftDefaultGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftDefaultGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse7["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft/default','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftDefaultPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftDefaultPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default workflow for a workflow scheme's draft.
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject69} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftDefaultPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftDefaultPut",value:function cloudidRestApi3WorkflowschemeIdDraftDefaultPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftDefaultPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft/default','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a draft workflow scheme.
     * @param {Number} id The ID of the active workflow scheme that the draft was originally created from.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftDelete",value:function cloudidRestApi3WorkflowschemeIdDraftDelete(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftDelete");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See Configuring workflow schemes for more information.Note that:
     * @param {Number} id The ID of the active workflow scheme that the draft was originally created from.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftGet",value:function cloudidRestApi3WorkflowschemeIdDraftGet(id,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftGet");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft.
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} issueType The ID of the issue type.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDelete",value:function cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDelete(id,issueType,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDelete");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDelete");}var pathParams={'id':id,'issueType':issueType};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200104} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft.
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} issueType The ID of the issue type.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200104}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGet",value:function cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGet(id,issueType,callback){var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGet");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGet");}var pathParams={'id':id,'issueType':issueType};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse8["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the workflow for an issue type in a workflow scheme's draft.
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject70} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePut",value:function cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePut(id,issueType,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePut");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePut");}var pathParams={'id':id,'issueType':issueType};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme at any given time.
     * @param {Number} id The ID of the active workflow scheme that the draft was originally created from.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject68} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftPut",value:function cloudidRestApi3WorkflowschemeIdDraftPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftWorkflowDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftWorkflowDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft.
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of the workflow.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftWorkflowDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftWorkflowDelete",value:function cloudidRestApi3WorkflowschemeIdDraftWorkflowDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftWorkflowDelete");}var pathParams={'id':id};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft/workflow','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftWorkflowGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftWorkflowGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200105} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the workflow-issue type mappings for a workflow scheme's draft.
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftWorkflowGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200105}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftWorkflowGet",value:function cloudidRestApi3WorkflowschemeIdDraftWorkflowGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftWorkflowGet");}var pathParams={'id':id};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse9["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft/workflow','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdDraftWorkflowPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftWorkflowPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of the workflow.
     * @param {module:model/InlineObject71} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdDraftWorkflowPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"cloudidRestApi3WorkflowschemeIdDraftWorkflowPut",value:function cloudidRestApi3WorkflowschemeIdDraftWorkflowPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdDraftWorkflowPut");}var pathParams={'id':id};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/draft/workflow','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a workflow scheme.
     * @param {Number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"cloudidRestApi3WorkflowschemeIdGet",value:function cloudidRestApi3WorkflowschemeIdGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdGet");}var pathParams={'id':id};var queryParams={'returnDraftIfExists':opts['returnDraftIfExists']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the issue type-workflow mapping for an issue type in a workflow scheme.
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDelete",value:function cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDelete(id,issueType,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDelete");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDelete");}var pathParams={'id':id,'issueType':issueType};var queryParams={'updateDraftIfNeeded':opts['updateDraftIfNeeded']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/issuetype/{issueType}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200104} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the issue type-workflow mapping for an issue type in a workflow scheme.
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200104}
     */},{key:"cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGet",value:function cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGet(id,issueType,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGet");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGet");}var pathParams={'id':id,'issueType':issueType};var queryParams={'returnDraftIfExists':opts['returnDraftIfExists']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse8["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/issuetype/{issueType}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the workflow for an issue type in a workflow scheme.
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject72} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePut",value:function cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePut(id,issueType,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePut");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePut");}var pathParams={'id':id,'issueType':issueType};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/issuetype/{issueType}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that updateDraftIfNeeded is set to true.
     * @param {Number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject66} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"cloudidRestApi3WorkflowschemeIdPut",value:function cloudidRestApi3WorkflowschemeIdPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdPut");}var pathParams={'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdWorkflowDelete operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdWorkflowDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the workflow-issue type mapping for a workflow in a workflow scheme.
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
     * @param {String} opts.workflowName The name of the workflow.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdWorkflowDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"cloudidRestApi3WorkflowschemeIdWorkflowDelete",value:function cloudidRestApi3WorkflowschemeIdWorkflowDelete(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdWorkflowDelete");}var pathParams={'id':id};var queryParams={'updateDraftIfNeeded':opts['updateDraftIfNeeded'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/workflow','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdWorkflowGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdWorkflowGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200105} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the workflow-issue type mappings for a workflow scheme.
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
     * @param {String} opts.workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdWorkflowGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200105}
     */},{key:"cloudidRestApi3WorkflowschemeIdWorkflowGet",value:function cloudidRestApi3WorkflowschemeIdWorkflowGet(id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdWorkflowGet");}var pathParams={'id':id};var queryParams={'returnDraftIfExists':opts['returnDraftIfExists'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse9["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/workflow','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemeIdWorkflowPut operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdWorkflowPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of the workflow.
     * @param {module:model/InlineObject73} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemeIdWorkflowPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"cloudidRestApi3WorkflowschemeIdWorkflowPut",value:function cloudidRestApi3WorkflowschemeIdWorkflowPut(id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling cloudidRestApi3WorkflowschemeIdWorkflowPut");}var pathParams={'id':id};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme/{id}/workflow','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorkflowschemePost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorkflowschemePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject65} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorkflowschemePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"cloudidRestApi3WorkflowschemePost",value:function cloudidRestApi3WorkflowschemePost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/workflowscheme','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorklogDeletedGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorklogDeletedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200106} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.since The date and time, in UNIX timestamp format, after which deleted worklogs are returned.
     * @param {module:api/DefaultApi~cloudidRestApi3WorklogDeletedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200106}
     */},{key:"cloudidRestApi3WorklogDeletedGet",value:function cloudidRestApi3WorklogDeletedGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'since':opts['since']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse10["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/worklog/deleted','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorklogListPost operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorklogListPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200107>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns worklog details for a list of worklog IDs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
     * @param {module:model/InlineObject74} opts.body 
     * @param {module:api/DefaultApi~cloudidRestApi3WorklogListPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200107>}
     */},{key:"cloudidRestApi3WorklogListPost",value:function cloudidRestApi3WorklogListPost(opts,callback){opts=opts||{};var postBody=opts['body'];var pathParams={};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse11["default"]];return this.apiClient.callApi('/{cloudid}/rest/api/3/worklog/list','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the cloudidRestApi3WorklogUpdatedGet operation.
     * @callback module:api/DefaultApi~cloudidRestApi3WorklogUpdatedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200106} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of IDs and update timestamps for worklogs updated after a date and time.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
     * @param {Number} opts.since The date and time, in UNIX timestamp format, after which updated worklogs are returned.
     * @param {module:api/DefaultApi~cloudidRestApi3WorklogUpdatedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200106}
     */},{key:"cloudidRestApi3WorklogUpdatedGet",value:function cloudidRestApi3WorklogUpdatedGet(opts,callback){opts=opts||{};var postBody=null;var pathParams={};var queryParams={'expand':opts['expand'],'since':opts['since']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse10["default"];return this.apiClient.callApi('/{cloudid}/rest/api/3/worklog/updated','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}}]);return DefaultApi;}();exports["default"]=DefaultApi;