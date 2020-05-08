"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _ApiClient=_interopRequireDefault(require("../ApiClient"));var _FilterIdPermissionProject=_interopRequireDefault(require("../model/FilterIdPermissionProject"));var _FilterIdPermissionProjectProjectCategory=_interopRequireDefault(require("../model/FilterIdPermissionProjectProjectCategory"));var _FilterIdPermissionRole=_interopRequireDefault(require("../model/FilterIdPermissionRole"));var _InlineObject=_interopRequireDefault(require("../model/InlineObject"));var _InlineObject2=_interopRequireDefault(require("../model/InlineObject1"));var _InlineObject3=_interopRequireDefault(require("../model/InlineObject10"));var _InlineObject4=_interopRequireDefault(require("../model/InlineObject11"));var _InlineObject5=_interopRequireDefault(require("../model/InlineObject12"));var _InlineObject6=_interopRequireDefault(require("../model/InlineObject13"));var _InlineObject7=_interopRequireDefault(require("../model/InlineObject14"));var _InlineObject8=_interopRequireDefault(require("../model/InlineObject15"));var _InlineObject9=_interopRequireDefault(require("../model/InlineObject16"));var _InlineObject10=_interopRequireDefault(require("../model/InlineObject17"));var _InlineObject11=_interopRequireDefault(require("../model/InlineObject18"));var _InlineObject12=_interopRequireDefault(require("../model/InlineObject19"));var _InlineObject13=_interopRequireDefault(require("../model/InlineObject2"));var _InlineObject14=_interopRequireDefault(require("../model/InlineObject20"));var _InlineObject15=_interopRequireDefault(require("../model/InlineObject21"));var _InlineObject16=_interopRequireDefault(require("../model/InlineObject22"));var _InlineObject17=_interopRequireDefault(require("../model/InlineObject23"));var _InlineObject18=_interopRequireDefault(require("../model/InlineObject24"));var _InlineObject19=_interopRequireDefault(require("../model/InlineObject25"));var _InlineObject20=_interopRequireDefault(require("../model/InlineObject26"));var _InlineObject21=_interopRequireDefault(require("../model/InlineObject27"));var _InlineObject22=_interopRequireDefault(require("../model/InlineObject28"));var _InlineObject23=_interopRequireDefault(require("../model/InlineObject29"));var _InlineObject24=_interopRequireDefault(require("../model/InlineObject3"));var _InlineObject25=_interopRequireDefault(require("../model/InlineObject30"));var _InlineObject26=_interopRequireDefault(require("../model/InlineObject31"));var _InlineObject27=_interopRequireDefault(require("../model/InlineObject32"));var _InlineObject28=_interopRequireDefault(require("../model/InlineObject33"));var _InlineObject29=_interopRequireDefault(require("../model/InlineObject34"));var _InlineObject30=_interopRequireDefault(require("../model/InlineObject35"));var _InlineObject31=_interopRequireDefault(require("../model/InlineObject36"));var _InlineObject32=_interopRequireDefault(require("../model/InlineObject37"));var _InlineObject33=_interopRequireDefault(require("../model/InlineObject38"));var _InlineObject34=_interopRequireDefault(require("../model/InlineObject39"));var _InlineObject35=_interopRequireDefault(require("../model/InlineObject4"));var _InlineObject36=_interopRequireDefault(require("../model/InlineObject40"));var _InlineObject37=_interopRequireDefault(require("../model/InlineObject41"));var _InlineObject38=_interopRequireDefault(require("../model/InlineObject42"));var _InlineObject39=_interopRequireDefault(require("../model/InlineObject43"));var _InlineObject40=_interopRequireDefault(require("../model/InlineObject44"));var _InlineObject41=_interopRequireDefault(require("../model/InlineObject45"));var _InlineObject42=_interopRequireDefault(require("../model/InlineObject46"));var _InlineObject43=_interopRequireDefault(require("../model/InlineObject47"));var _InlineObject44=_interopRequireDefault(require("../model/InlineObject48"));var _InlineObject45=_interopRequireDefault(require("../model/InlineObject49"));var _InlineObject46=_interopRequireDefault(require("../model/InlineObject5"));var _InlineObject47=_interopRequireDefault(require("../model/InlineObject50"));var _InlineObject48=_interopRequireDefault(require("../model/InlineObject51"));var _InlineObject49=_interopRequireDefault(require("../model/InlineObject52"));var _InlineObject50=_interopRequireDefault(require("../model/InlineObject53"));var _InlineObject51=_interopRequireDefault(require("../model/InlineObject54"));var _InlineObject52=_interopRequireDefault(require("../model/InlineObject55"));var _InlineObject53=_interopRequireDefault(require("../model/InlineObject56"));var _InlineObject54=_interopRequireDefault(require("../model/InlineObject57"));var _InlineObject55=_interopRequireDefault(require("../model/InlineObject58"));var _InlineObject56=_interopRequireDefault(require("../model/InlineObject59"));var _InlineObject57=_interopRequireDefault(require("../model/InlineObject6"));var _InlineObject58=_interopRequireDefault(require("../model/InlineObject60"));var _InlineObject59=_interopRequireDefault(require("../model/InlineObject61"));var _InlineObject60=_interopRequireDefault(require("../model/InlineObject62"));var _InlineObject61=_interopRequireDefault(require("../model/InlineObject63"));var _InlineObject62=_interopRequireDefault(require("../model/InlineObject64"));var _InlineObject63=_interopRequireDefault(require("../model/InlineObject65"));var _InlineObject64=_interopRequireDefault(require("../model/InlineObject66"));var _InlineObject65=_interopRequireDefault(require("../model/InlineObject67"));var _InlineObject66=_interopRequireDefault(require("../model/InlineObject68"));var _InlineObject67=_interopRequireDefault(require("../model/InlineObject69"));var _InlineObject68=_interopRequireDefault(require("../model/InlineObject7"));var _InlineObject69=_interopRequireDefault(require("../model/InlineObject70"));var _InlineObject70=_interopRequireDefault(require("../model/InlineObject71"));var _InlineObject71=_interopRequireDefault(require("../model/InlineObject72"));var _InlineObject72=_interopRequireDefault(require("../model/InlineObject73"));var _InlineObject73=_interopRequireDefault(require("../model/InlineObject74"));var _InlineObject74=_interopRequireDefault(require("../model/InlineObject8"));var _InlineObject75=_interopRequireDefault(require("../model/InlineObject9"));var _InlineResponse=_interopRequireDefault(require("../model/InlineResponse200"));var _InlineResponse2=_interopRequireDefault(require("../model/InlineResponse2001"));var _InlineResponse3=_interopRequireDefault(require("../model/InlineResponse20010"));var _InlineResponse4=_interopRequireDefault(require("../model/InlineResponse200100"));var _InlineResponse5=_interopRequireDefault(require("../model/InlineResponse200101"));var _InlineResponse6=_interopRequireDefault(require("../model/InlineResponse200102"));var _InlineResponse7=_interopRequireDefault(require("../model/InlineResponse200103"));var _InlineResponse8=_interopRequireDefault(require("../model/InlineResponse200104"));var _InlineResponse9=_interopRequireDefault(require("../model/InlineResponse200105"));var _InlineResponse10=_interopRequireDefault(require("../model/InlineResponse200106"));var _InlineResponse11=_interopRequireDefault(require("../model/InlineResponse200107"));var _InlineResponse12=_interopRequireDefault(require("../model/InlineResponse20011"));var _InlineResponse13=_interopRequireDefault(require("../model/InlineResponse20012"));var _InlineResponse14=_interopRequireDefault(require("../model/InlineResponse20013"));var _InlineResponse15=_interopRequireDefault(require("../model/InlineResponse20014"));var _InlineResponse16=_interopRequireDefault(require("../model/InlineResponse20015"));var _InlineResponse17=_interopRequireDefault(require("../model/InlineResponse20016"));var _InlineResponse18=_interopRequireDefault(require("../model/InlineResponse20017"));var _InlineResponse19=_interopRequireDefault(require("../model/InlineResponse20018"));var _InlineResponse20=_interopRequireDefault(require("../model/InlineResponse20019"));var _InlineResponse21=_interopRequireDefault(require("../model/InlineResponse2002"));var _InlineResponse22=_interopRequireDefault(require("../model/InlineResponse20020"));var _InlineResponse23=_interopRequireDefault(require("../model/InlineResponse20021"));var _InlineResponse24=_interopRequireDefault(require("../model/InlineResponse20022"));var _InlineResponse25=_interopRequireDefault(require("../model/InlineResponse20023"));var _InlineResponse26=_interopRequireDefault(require("../model/InlineResponse20024"));var _InlineResponse27=_interopRequireDefault(require("../model/InlineResponse20025"));var _InlineResponse28=_interopRequireDefault(require("../model/InlineResponse20026"));var _InlineResponse29=_interopRequireDefault(require("../model/InlineResponse20027"));var _InlineResponse30=_interopRequireDefault(require("../model/InlineResponse20028"));var _InlineResponse31=_interopRequireDefault(require("../model/InlineResponse20029"));var _InlineResponse32=_interopRequireDefault(require("../model/InlineResponse2003"));var _InlineResponse33=_interopRequireDefault(require("../model/InlineResponse20030"));var _InlineResponse34=_interopRequireDefault(require("../model/InlineResponse20031"));var _InlineResponse35=_interopRequireDefault(require("../model/InlineResponse20032"));var _InlineResponse36=_interopRequireDefault(require("../model/InlineResponse20033"));var _InlineResponse37=_interopRequireDefault(require("../model/InlineResponse20034"));var _InlineResponse38=_interopRequireDefault(require("../model/InlineResponse20035"));var _InlineResponse39=_interopRequireDefault(require("../model/InlineResponse20036"));var _InlineResponse40=_interopRequireDefault(require("../model/InlineResponse20037"));var _InlineResponse41=_interopRequireDefault(require("../model/InlineResponse20038"));var _InlineResponse42=_interopRequireDefault(require("../model/InlineResponse20039"));var _InlineResponse43=_interopRequireDefault(require("../model/InlineResponse2004"));var _InlineResponse44=_interopRequireDefault(require("../model/InlineResponse20040"));var _InlineResponse45=_interopRequireDefault(require("../model/InlineResponse20041"));var _InlineResponse46=_interopRequireDefault(require("../model/InlineResponse20042"));var _InlineResponse47=_interopRequireDefault(require("../model/InlineResponse20043"));var _InlineResponse48=_interopRequireDefault(require("../model/InlineResponse20044"));var _InlineResponse49=_interopRequireDefault(require("../model/InlineResponse20045"));var _InlineResponse20045To=_interopRequireDefault(require("../model/InlineResponse20045To"));var _InlineResponse20045ToStatusCategory=_interopRequireDefault(require("../model/InlineResponse20045ToStatusCategory"));var _InlineResponse50=_interopRequireDefault(require("../model/InlineResponse20046"));var _InlineResponse51=_interopRequireDefault(require("../model/InlineResponse20047"));var _InlineResponse52=_interopRequireDefault(require("../model/InlineResponse20048"));var _InlineResponse53=_interopRequireDefault(require("../model/InlineResponse20049"));var _InlineResponse2004Author=_interopRequireDefault(require("../model/InlineResponse2004Author"));var _InlineResponse54=_interopRequireDefault(require("../model/InlineResponse2005"));var _InlineResponse55=_interopRequireDefault(require("../model/InlineResponse20050"));var _InlineResponse20050InwardIssueFieldsIssuetype=_interopRequireDefault(require("../model/InlineResponse20050InwardIssueFieldsIssuetype"));var _InlineResponse20050InwardIssueFieldsPriority=_interopRequireDefault(require("../model/InlineResponse20050InwardIssueFieldsPriority"));var _InlineResponse56=_interopRequireDefault(require("../model/InlineResponse20051"));var _InlineResponse57=_interopRequireDefault(require("../model/InlineResponse20052"));var _InlineResponse58=_interopRequireDefault(require("../model/InlineResponse20053"));var _InlineResponse59=_interopRequireDefault(require("../model/InlineResponse20054"));var _InlineResponse60=_interopRequireDefault(require("../model/InlineResponse20055"));var _InlineResponse61=_interopRequireDefault(require("../model/InlineResponse20056"));var _InlineResponse62=_interopRequireDefault(require("../model/InlineResponse20057"));var _InlineResponse63=_interopRequireDefault(require("../model/InlineResponse20058"));var _InlineResponse64=_interopRequireDefault(require("../model/InlineResponse20059"));var _InlineResponse65=_interopRequireDefault(require("../model/InlineResponse2006"));var _InlineResponse66=_interopRequireDefault(require("../model/InlineResponse20060"));var _InlineResponse67=_interopRequireDefault(require("../model/InlineResponse20061"));var _InlineResponse68=_interopRequireDefault(require("../model/InlineResponse20062"));var _InlineResponse69=_interopRequireDefault(require("../model/InlineResponse20063"));var _InlineResponse70=_interopRequireDefault(require("../model/InlineResponse20064"));var _InlineResponse71=_interopRequireDefault(require("../model/InlineResponse20065"));var _InlineResponse72=_interopRequireDefault(require("../model/InlineResponse20066"));var _InlineResponse73=_interopRequireDefault(require("../model/InlineResponse20067"));var _InlineResponse74=_interopRequireDefault(require("../model/InlineResponse20068"));var _InlineResponse75=_interopRequireDefault(require("../model/InlineResponse20069"));var _InlineResponse76=_interopRequireDefault(require("../model/InlineResponse2007"));var _InlineResponse77=_interopRequireDefault(require("../model/InlineResponse20070"));var _InlineResponse78=_interopRequireDefault(require("../model/InlineResponse20071"));var _InlineResponse79=_interopRequireDefault(require("../model/InlineResponse20072"));var _InlineResponse80=_interopRequireDefault(require("../model/InlineResponse20073"));var _InlineResponse81=_interopRequireDefault(require("../model/InlineResponse20074"));var _InlineResponse82=_interopRequireDefault(require("../model/InlineResponse20075"));var _InlineResponse83=_interopRequireDefault(require("../model/InlineResponse20076"));var _InlineResponse84=_interopRequireDefault(require("../model/InlineResponse20077"));var _InlineResponse85=_interopRequireDefault(require("../model/InlineResponse20078"));var _InlineResponse20078Values=_interopRequireDefault(require("../model/InlineResponse20078Values"));var _InlineResponse86=_interopRequireDefault(require("../model/InlineResponse20079"));var _InlineResponse87=_interopRequireDefault(require("../model/InlineResponse2008"));var _InlineResponse88=_interopRequireDefault(require("../model/InlineResponse20080"));var _InlineResponse89=_interopRequireDefault(require("../model/InlineResponse20081"));var _InlineResponse90=_interopRequireDefault(require("../model/InlineResponse20082"));var _InlineResponse91=_interopRequireDefault(require("../model/InlineResponse20083"));var _InlineResponse92=_interopRequireDefault(require("../model/InlineResponse20084"));var _InlineResponse93=_interopRequireDefault(require("../model/InlineResponse20085"));var _InlineResponse94=_interopRequireDefault(require("../model/InlineResponse20086"));var _InlineResponse95=_interopRequireDefault(require("../model/InlineResponse20087"));var _InlineResponse96=_interopRequireDefault(require("../model/InlineResponse20088"));var _InlineResponse97=_interopRequireDefault(require("../model/InlineResponse20089"));var _InlineResponse98=_interopRequireDefault(require("../model/InlineResponse2009"));var _InlineResponse99=_interopRequireDefault(require("../model/InlineResponse20090"));var _InlineResponse100=_interopRequireDefault(require("../model/InlineResponse20091"));var _InlineResponse101=_interopRequireDefault(require("../model/InlineResponse20092"));var _InlineResponse102=_interopRequireDefault(require("../model/InlineResponse20093"));var _InlineResponse103=_interopRequireDefault(require("../model/InlineResponse20094"));var _InlineResponse104=_interopRequireDefault(require("../model/InlineResponse20095"));var _InlineResponse105=_interopRequireDefault(require("../model/InlineResponse20096"));var _InlineResponse106=_interopRequireDefault(require("../model/InlineResponse20097"));var _InlineResponse107=_interopRequireDefault(require("../model/InlineResponse20098"));var _InlineResponse108=_interopRequireDefault(require("../model/InlineResponse20099"));var _InlineResponse109=_interopRequireDefault(require("../model/InlineResponse201"));var _InlineResponse110=_interopRequireDefault(require("../model/InlineResponse2011"));var _InlineResponse111=_interopRequireDefault(require("../model/InlineResponse20110"));var _InlineResponse112=_interopRequireDefault(require("../model/InlineResponse20111"));var _InlineResponse113=_interopRequireDefault(require("../model/InlineResponse20112"));var _InlineResponse114=_interopRequireDefault(require("../model/InlineResponse20113"));var _InlineResponse115=_interopRequireDefault(require("../model/InlineResponse20114"));var _InlineResponse116=_interopRequireDefault(require("../model/InlineResponse20115"));var _InlineResponse117=_interopRequireDefault(require("../model/InlineResponse2012"));var _InlineResponse118=_interopRequireDefault(require("../model/InlineResponse2013"));var _InlineResponse119=_interopRequireDefault(require("../model/InlineResponse2014"));var _InlineResponse120=_interopRequireDefault(require("../model/InlineResponse2015"));var _InlineResponse121=_interopRequireDefault(require("../model/InlineResponse2016"));var _InlineResponse122=_interopRequireDefault(require("../model/InlineResponse2017"));var _InlineResponse123=_interopRequireDefault(require("../model/InlineResponse2018"));var _InlineResponse124=_interopRequireDefault(require("../model/InlineResponse2019"));var _InlineResponse125=_interopRequireDefault(require("../model/InlineResponse303"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
* Default service.
* @module api/DefaultApi
* @version 1.3.1
*/var DefaultApi=/*#__PURE__*/function(){/**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */function DefaultApi(apiClient){_classCallCheck(this,DefaultApi);this.apiClient=apiClient||_ApiClient["default"].instance;}/**
     * Callback function to receive the result of the applicationPropertiesAdvancedSettingsGet operation.
     * @callback module:api/DefaultApi~applicationPropertiesAdvancedSettingsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the application properties that are accessible on the Advanced Settings page. To navigate to the Advanced Settings page in Jira, choose the Jira icon > Jira settings > System, General Configuration and then click Advanced Settings (in the upper right).
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~applicationPropertiesAdvancedSettingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200>}
     */_createClass(DefaultApi,[{key:"applicationPropertiesAdvancedSettingsGet",value:function applicationPropertiesAdvancedSettingsGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling applicationPropertiesAdvancedSettingsGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse["default"]];return this.apiClient.callApi('/application-properties/advanced-settings','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the applicationPropertiesGet operation.
     * @callback module:api/DefaultApi~applicationPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all application properties or a single application property.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the application property.
     * @param {String} opts.keyFilter When a key isn't provided, this filters the list of results by the application property key using a regular expression. For example, using jira.lf.* will return all application properties with keys that start with jira.lf..
     * @param {String} opts.permissionLevel The permission level of all items being returned in the list.
     * @param {module:api/DefaultApi~applicationPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200>}
     */},{key:"applicationPropertiesGet",value:function applicationPropertiesGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling applicationPropertiesGet");}var pathParams={'cloudid':cloudid};var queryParams={'key':opts['key'],'keyFilter':opts['keyFilter'],'permissionLevel':opts['permissionLevel']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse["default"]];return this.apiClient.callApi('/application-properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the applicationPropertiesIdPut operation.
     * @callback module:api/DefaultApi~applicationPropertiesIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Changes the value of an application property. For example, you can change the value of the jira.clone.prefix from its default value of CLONE - to Clone - if you prefer sentence case capitalization. Editable properties are described below along with their default values.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The key of the application property to update.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.body 
     * @param {module:api/DefaultApi~applicationPropertiesIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"applicationPropertiesIdPut",value:function applicationPropertiesIdPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling applicationPropertiesIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling applicationPropertiesIdPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/application-properties/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the applicationroleGet operation.
     * @callback module:api/DefaultApi~applicationroleGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2001>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all application roles. In Jira, application roles are managed using the Application access configuration page.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~applicationroleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2001>}
     */},{key:"applicationroleGet",value:function applicationroleGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling applicationroleGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2["default"]];return this.apiClient.callApi('/applicationrole','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the applicationroleKeyGet operation.
     * @callback module:api/DefaultApi~applicationroleKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an application role.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} key The key of the application role. Use the Get all application roles method to get the key for each application role.
     * @param {module:api/DefaultApi~applicationroleKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */},{key:"applicationroleKeyGet",value:function applicationroleKeyGet(cloudid,key,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling applicationroleKeyGet");}// verify the required parameter 'key' is set
if(key===undefined||key===null){throw new Error("Missing the required parameter 'key' when calling applicationroleKeyGet");}var pathParams={'cloudid':cloudid,'key':key};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse21["default"];return this.apiClient.callApi('/applicationrole/{key}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the attachmentIdDelete operation.
     * @callback module:api/DefaultApi~attachmentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an attachment from an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the attachment.
     * @param {module:api/DefaultApi~attachmentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"attachmentIdDelete",value:function attachmentIdDelete(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling attachmentIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling attachmentIdDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/attachment/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the attachmentIdExpandHumanGet operation.
     * @callback module:api/DefaultApi~attachmentIdExpandHumanGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the attachment.
     * @param {module:api/DefaultApi~attachmentIdExpandHumanGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */},{key:"attachmentIdExpandHumanGet",value:function attachmentIdExpandHumanGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling attachmentIdExpandHumanGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling attachmentIdExpandHumanGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse54["default"];return this.apiClient.callApi('/attachment/{id}/expand/human','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the attachmentIdExpandRawGet operation.
     * @callback module:api/DefaultApi~attachmentIdExpandRawGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the attachment.
     * @param {module:api/DefaultApi~attachmentIdExpandRawGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */},{key:"attachmentIdExpandRawGet",value:function attachmentIdExpandRawGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling attachmentIdExpandRawGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling attachmentIdExpandRawGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse65["default"];return this.apiClient.callApi('/attachment/{id}/expand/raw','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the attachmentIdGet operation.
     * @callback module:api/DefaultApi~attachmentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the metadata for an attachment. Note that the attachment itself is not returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the attachment.
     * @param {module:api/DefaultApi~attachmentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */},{key:"attachmentIdGet",value:function attachmentIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling attachmentIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling attachmentIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse43["default"];return this.apiClient.callApi('/attachment/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the attachmentMetaGet operation.
     * @callback module:api/DefaultApi~attachmentMetaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the global attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~attachmentMetaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */},{key:"attachmentMetaGet",value:function attachmentMetaGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling attachmentMetaGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse32["default"];return this.apiClient.callApi('/attachment/meta','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the auditingRecordGet operation.
     * @callback module:api/DefaultApi~auditingRecordGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of audit records. The list can be filtered to include items:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter The query string.
     * @param {String} opts.from The date and time on or after which returned audit records must have been created. If to is provided from must be before to or the result set will be empty.
     * @param {Number} opts.limit The maximum number of results to return. The maximum is 1000.
     * @param {Number} opts.offset The number of records to skip before returning the first result.
     * @param {String} opts.to The date and time on or before which returned audit results must have been created. If from is provided to must be after from or the result set will be empty.
     * @param {module:api/DefaultApi~auditingRecordGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */},{key:"auditingRecordGet",value:function auditingRecordGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling auditingRecordGet");}var pathParams={'cloudid':cloudid};var queryParams={'filter':opts['filter'],'from':opts['from'],'limit':opts['limit'],'offset':opts['offset'],'to':opts['to']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse76["default"];return this.apiClient.callApi('/auditing/record','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the avatarTypeSystemGet operation.
     * @callback module:api/DefaultApi~avatarTypeSystemGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} type The avatar type.
     * @param {module:api/DefaultApi~avatarTypeSystemGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */},{key:"avatarTypeSystemGet",value:function avatarTypeSystemGet(cloudid,type,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling avatarTypeSystemGet");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new Error("Missing the required parameter 'type' when calling avatarTypeSystemGet");}var pathParams={'cloudid':cloudid,'type':type};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse87["default"];return this.apiClient.callApi('/avatar/{type}/system','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the commentCommentIdPropertiesGet operation.
     * @callback module:api/DefaultApi~commentCommentIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the keys of all the properties of a comment.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {module:api/DefaultApi~commentCommentIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"commentCommentIdPropertiesGet",value:function commentCommentIdPropertiesGet(cloudid,commentId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesGet");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesGet");}var pathParams={'cloudid':cloudid,'commentId':commentId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/comment/{commentId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the commentCommentIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~commentCommentIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a comment property.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/DefaultApi~commentCommentIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"commentCommentIdPropertiesPropertyKeyDelete",value:function commentCommentIdPropertiesPropertyKeyDelete(cloudid,commentId,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesPropertyKeyDelete");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling commentCommentIdPropertiesPropertyKeyDelete");}var pathParams={'cloudid':cloudid,'commentId':commentId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/comment/{commentId}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the commentCommentIdPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~commentCommentIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of a comment property.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/DefaultApi~commentCommentIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"commentCommentIdPropertiesPropertyKeyGet",value:function commentCommentIdPropertiesPropertyKeyGet(cloudid,commentId,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesPropertyKeyGet");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling commentCommentIdPropertiesPropertyKeyGet");}var pathParams={'cloudid':cloudid,'commentId':commentId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/comment/{commentId}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the commentCommentIdPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~commentCommentIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property. The maximum length is 255 characters.
     * @param {module:api/DefaultApi~commentCommentIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"commentCommentIdPropertiesPropertyKeyPut",value:function commentCommentIdPropertiesPropertyKeyPut(cloudid,commentId,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesPropertyKeyPut");}// verify the required parameter 'commentId' is set
if(commentId===undefined||commentId===null){throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling commentCommentIdPropertiesPropertyKeyPut");}var pathParams={'cloudid':cloudid,'commentId':commentId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/comment/{commentId}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the commentListPost operation.
     * @callback module:api/DefaultApi~commentListPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the comments for a list of comment IDs.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about comments in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:model/InlineObject1} opts.body 
     * @param {module:api/DefaultApi~commentListPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */},{key:"commentListPost",value:function commentListPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling commentListPost");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse98["default"];return this.apiClient.callApi('/comment/list','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the componentIdDelete operation.
     * @callback module:api/DefaultApi~componentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a component. Permissions required: Any of the following:
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the component.
     * @param {Object} opts Optional parameters
     * @param {String} opts.moveIssuesTo The ID of the component to replace the deleted component. If this value is null no replacement is made.
     * @param {module:api/DefaultApi~componentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"componentIdDelete",value:function componentIdDelete(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling componentIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling componentIdDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'moveIssuesTo':opts['moveIssuesTo']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/component/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the componentIdGet operation.
     * @callback module:api/DefaultApi~componentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a component. Permissions required: Browse projects project permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the component.
     * @param {module:api/DefaultApi~componentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */},{key:"componentIdGet",value:function componentIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling componentIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling componentIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse109["default"];return this.apiClient.callApi('/component/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the componentIdPut operation.
     * @callback module:api/DefaultApi~componentIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Modifies a component. Any fields included in the request are overwritten. If leadUserName is an empty string (\"\") the component lead is removed. Permissions required: Any of the following:
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.body 
     * @param {module:api/DefaultApi~componentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"componentIdPut",value:function componentIdPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling componentIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling componentIdPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/component/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the componentIdRelatedIssueCountsGet operation.
     * @callback module:api/DefaultApi~componentIdRelatedIssueCountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the counts of issues assigned to the component. Permissions required: Permission to access Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the component.
     * @param {module:api/DefaultApi~componentIdRelatedIssueCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20012}
     */},{key:"componentIdRelatedIssueCountsGet",value:function componentIdRelatedIssueCountsGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling componentIdRelatedIssueCountsGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling componentIdRelatedIssueCountsGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse13["default"];return this.apiClient.callApi('/component/{id}/relatedIssueCounts','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the componentPost operation.
     * @callback module:api/DefaultApi~componentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a component. Use components to provide containers for issues within a project. Permissions required: Any of the following:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.body 
     * @param {module:api/DefaultApi~componentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */},{key:"componentPost",value:function componentPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling componentPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse109["default"];return this.apiClient.callApi('/component','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the configurationGet operation.
     * @callback module:api/DefaultApi~configurationGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the global settings in Jira. These settings determine whether optional features (for example, sub-tasks, time tracking, and others) are enabled. If time tracking is enabled, this method also returns the time tracking configuration.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~configurationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20013}
     */},{key:"configurationGet",value:function configurationGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling configurationGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse14["default"];return this.apiClient.callApi('/configuration','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the configurationTimetrackingDelete operation.
     * @callback module:api/DefaultApi~configurationTimetrackingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Disables time tracking.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~configurationTimetrackingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"configurationTimetrackingDelete",value:function configurationTimetrackingDelete(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingDelete");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/configuration/timetracking','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the configurationTimetrackingGet operation.
     * @callback module:api/DefaultApi~configurationTimetrackingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~configurationTimetrackingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20014}
     */},{key:"configurationTimetrackingGet",value:function configurationTimetrackingGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse15["default"];return this.apiClient.callApi('/configuration/timetracking','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the configurationTimetrackingListGet operation.
     * @callback module:api/DefaultApi~configurationTimetrackingListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20015>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all time tracking providers. By default, Jira only has one time tracking provider: JIRA provided time tracking. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the Time Tracking Provider module.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~configurationTimetrackingListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20015>}
     */},{key:"configurationTimetrackingListGet",value:function configurationTimetrackingListGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingListGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse16["default"]];return this.apiClient.callApi('/configuration/timetracking/list','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the configurationTimetrackingOptionsGet operation.
     * @callback module:api/DefaultApi~configurationTimetrackingOptionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see Configuring time tracking.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~configurationTimetrackingOptionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20016}
     */},{key:"configurationTimetrackingOptionsGet",value:function configurationTimetrackingOptionsGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingOptionsGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse17["default"];return this.apiClient.callApi('/configuration/timetracking/options','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the configurationTimetrackingOptionsPut operation.
     * @callback module:api/DefaultApi~configurationTimetrackingOptionsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the time tracking settings.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject5} opts.body 
     * @param {module:api/DefaultApi~configurationTimetrackingOptionsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20016}
     */},{key:"configurationTimetrackingOptionsPut",value:function configurationTimetrackingOptionsPut(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingOptionsPut");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse17["default"];return this.apiClient.callApi('/configuration/timetracking/options','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the configurationTimetrackingPut operation.
     * @callback module:api/DefaultApi~configurationTimetrackingPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Selects a time tracking provider.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject4} opts.body 
     * @param {module:api/DefaultApi~configurationTimetrackingPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"configurationTimetrackingPut",value:function configurationTimetrackingPut(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingPut");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/configuration/timetracking','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the customFieldOptionIdGet operation.
     * @callback module:api/DefaultApi~customFieldOptionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a custom field option. For example, an option in a cascading select list.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the custom field option. To find this ID, configure the custom field and edit its options in Jira. Click the option and its ID will show in the URL as the selectedParentOptionId parameter.
     * @param {module:api/DefaultApi~customFieldOptionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20017}
     */},{key:"customFieldOptionIdGet",value:function customFieldOptionIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling customFieldOptionIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling customFieldOptionIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse18["default"];return this.apiClient.callApi('/customFieldOption/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the dashboardDashboardIdItemsItemIdPropertiesGet operation.
     * @callback module:api/DefaultApi~dashboardDashboardIdItemsItemIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the keys of all properties for a dashboard item.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {module:api/DefaultApi~dashboardDashboardIdItemsItemIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"dashboardDashboardIdItemsItemIdPropertiesGet",value:function dashboardDashboardIdItemsItemIdPropertiesGet(cloudid,dashboardId,itemId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling dashboardDashboardIdItemsItemIdPropertiesGet");}// verify the required parameter 'dashboardId' is set
if(dashboardId===undefined||dashboardId===null){throw new Error("Missing the required parameter 'dashboardId' when calling dashboardDashboardIdItemsItemIdPropertiesGet");}// verify the required parameter 'itemId' is set
if(itemId===undefined||itemId===null){throw new Error("Missing the required parameter 'itemId' when calling dashboardDashboardIdItemsItemIdPropertiesGet");}var pathParams={'cloudid':cloudid,'dashboardId':dashboardId,'itemId':itemId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/dashboard/{dashboardId}/items/{itemId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a dashboard item property.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {String} propertyKey The key of the dashboard item property.
     * @param {module:api/DefaultApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete",value:function dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(cloudid,dashboardId,itemId,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");}// verify the required parameter 'dashboardId' is set
if(dashboardId===undefined||dashboardId===null){throw new Error("Missing the required parameter 'dashboardId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");}// verify the required parameter 'itemId' is set
if(itemId===undefined||itemId===null){throw new Error("Missing the required parameter 'itemId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");}var pathParams={'cloudid':cloudid,'dashboardId':dashboardId,'itemId':itemId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the key and value of a dashboard item property.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {String} propertyKey The key of the dashboard item property.
     * @param {module:api/DefaultApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet",value:function dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(cloudid,dashboardId,itemId,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");}// verify the required parameter 'dashboardId' is set
if(dashboardId===undefined||dashboardId===null){throw new Error("Missing the required parameter 'dashboardId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");}// verify the required parameter 'itemId' is set
if(itemId===undefined||itemId===null){throw new Error("Missing the required parameter 'itemId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");}var pathParams={'cloudid':cloudid,'dashboardId':dashboardId,'itemId':itemId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {String} propertyKey The key of the dashboard item property. The maximum length of the key is 255 bytes.
     * @param {module:api/DefaultApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut",value:function dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(cloudid,dashboardId,itemId,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");}// verify the required parameter 'dashboardId' is set
if(dashboardId===undefined||dashboardId===null){throw new Error("Missing the required parameter 'dashboardId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");}// verify the required parameter 'itemId' is set
if(itemId===undefined||itemId===null){throw new Error("Missing the required parameter 'itemId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");}var pathParams={'cloudid':cloudid,'dashboardId':dashboardId,'itemId':itemId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the dashboardGet operation.
     * @callback module:api/DefaultApi~dashboardGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter The filter applied to the list of dashboards. Valid values are:
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~dashboardGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20018}
     */},{key:"dashboardGet",value:function dashboardGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling dashboardGet");}var pathParams={'cloudid':cloudid};var queryParams={'filter':opts['filter'],'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse19["default"];return this.apiClient.callApi('/dashboard','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the dashboardIdGet operation.
     * @callback module:api/DefaultApi~dashboardIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a dashboard.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the dashboard.
     * @param {module:api/DefaultApi~dashboardIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20019}
     */},{key:"dashboardIdGet",value:function dashboardIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling dashboardIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling dashboardIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse20["default"];return this.apiClient.callApi('/dashboard/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the expressionEvalPost operation.
     * @callback module:api/DefaultApi~expressionEvalPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20020} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Evaluates a Jira expression and returns its value.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:model/InlineObject6} opts.body 
     * @param {module:api/DefaultApi~expressionEvalPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20020}
     */},{key:"expressionEvalPost",value:function expressionEvalPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling expressionEvalPost");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse22["default"];return this.apiClient.callApi('/expression/eval','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldFieldKeyOptionGet operation.
     * @callback module:api/DefaultApi~fieldFieldKeyOptionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20022} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all options defined for a select list issue field. A select list issue field is a type of issue field that allows a user to select an value from a list of options.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. For example, 20.
     * @param {Number} opts.startAt The starting index of the returned objects. For example, 1.
     * @param {module:api/DefaultApi~fieldFieldKeyOptionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20022}
     */},{key:"fieldFieldKeyOptionGet",value:function fieldFieldKeyOptionGet(cloudid,fieldKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionGet");}// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionGet");}var pathParams={'cloudid':cloudid,'fieldKey':fieldKey};var queryParams={'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse24["default"];return this.apiClient.callApi('/field/{fieldKey}/option','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldFieldKeyOptionOptionIdDelete operation.
     * @callback module:api/DefaultApi~fieldFieldKeyOptionOptionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an option from a select list issue field.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Number} optionId The ID of the option to be deleted. For example, 3.
     * @param {module:api/DefaultApi~fieldFieldKeyOptionOptionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"fieldFieldKeyOptionOptionIdDelete",value:function fieldFieldKeyOptionOptionIdDelete(cloudid,fieldKey,optionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionOptionIdDelete");}// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionOptionIdDelete");}// verify the required parameter 'optionId' is set
if(optionId===undefined||optionId===null){throw new Error("Missing the required parameter 'optionId' when calling fieldFieldKeyOptionOptionIdDelete");}var pathParams={'cloudid':cloudid,'fieldKey':fieldKey,'optionId':optionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/field/{fieldKey}/option/{optionId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldFieldKeyOptionOptionIdGet operation.
     * @callback module:api/DefaultApi~fieldFieldKeyOptionOptionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20025} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an option from a select list issue field.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Number} optionId The ID of the option to be returned. For example, 3.
     * @param {module:api/DefaultApi~fieldFieldKeyOptionOptionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20025}
     */},{key:"fieldFieldKeyOptionOptionIdGet",value:function fieldFieldKeyOptionOptionIdGet(cloudid,fieldKey,optionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionOptionIdGet");}// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionOptionIdGet");}// verify the required parameter 'optionId' is set
if(optionId===undefined||optionId===null){throw new Error("Missing the required parameter 'optionId' when calling fieldFieldKeyOptionOptionIdGet");}var pathParams={'cloudid':cloudid,'fieldKey':fieldKey,'optionId':optionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse27["default"];return this.apiClient.callApi('/field/{fieldKey}/option/{optionId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldFieldKeyOptionOptionIdIssueDelete operation.
     * @callback module:api/DefaultApi~fieldFieldKeyOptionOptionIdIssueDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deselects a select list issue field option in all issues that it has been selected in. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Number} optionId The ID of the option to be deselected. For example, 3.
     * @param {Object} opts Optional parameters
     * @param {String} opts.jql A JQL query that specifies the issues to be updated. For example, project=10000.
     * @param {Number} opts.replaceWith The ID of the option that will replace the currently selected option. For example, 2.
     * @param {module:api/DefaultApi~fieldFieldKeyOptionOptionIdIssueDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"fieldFieldKeyOptionOptionIdIssueDelete",value:function fieldFieldKeyOptionOptionIdIssueDelete(cloudid,fieldKey,optionId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionOptionIdIssueDelete");}// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionOptionIdIssueDelete");}// verify the required parameter 'optionId' is set
if(optionId===undefined||optionId===null){throw new Error("Missing the required parameter 'optionId' when calling fieldFieldKeyOptionOptionIdIssueDelete");}var pathParams={'cloudid':cloudid,'fieldKey':fieldKey,'optionId':optionId};var queryParams={'jql':opts['jql'],'replaceWith':opts['replaceWith']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=null;return this.apiClient.callApi('/field/{fieldKey}/option/{optionId}/issue','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldFieldKeyOptionOptionIdPut operation.
     * @callback module:api/DefaultApi~fieldFieldKeyOptionOptionIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20025} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates an option for a select list issue field. If the option does not exist, a new option is created.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Number} optionId The ID of the option to be updated. For example, 3.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject9} opts.body 
     * @param {module:api/DefaultApi~fieldFieldKeyOptionOptionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20025}
     */},{key:"fieldFieldKeyOptionOptionIdPut",value:function fieldFieldKeyOptionOptionIdPut(cloudid,fieldKey,optionId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionOptionIdPut");}// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionOptionIdPut");}// verify the required parameter 'optionId' is set
if(optionId===undefined||optionId===null){throw new Error("Missing the required parameter 'optionId' when calling fieldFieldKeyOptionOptionIdPut");}var pathParams={'cloudid':cloudid,'fieldKey':fieldKey,'optionId':optionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse27["default"];return this.apiClient.callApi('/field/{fieldKey}/option/{optionId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldFieldKeyOptionPost operation.
     * @callback module:api/DefaultApi~fieldFieldKeyOptionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20023} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an option for a select list issue field.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject8} opts.body 
     * @param {module:api/DefaultApi~fieldFieldKeyOptionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20023}
     */},{key:"fieldFieldKeyOptionPost",value:function fieldFieldKeyOptionPost(cloudid,fieldKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionPost");}// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionPost");}var pathParams={'cloudid':cloudid,'fieldKey':fieldKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse25["default"];return this.apiClient.callApi('/field/{fieldKey}/option','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldFieldKeyOptionSuggestionsEditGet operation.
     * @callback module:api/DefaultApi~fieldFieldKeyOptionSuggestionsEditGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20024} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns options defined for a select list issue field that can be viewed and selected by the currently logged in user.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. For example, 20.
     * @param {Number} opts.projectId Filters the results to options that are only available in the specified project. For example, 10000.
     * @param {Number} opts.startAt The starting index of the returned objects. For example, 1.
     * @param {module:api/DefaultApi~fieldFieldKeyOptionSuggestionsEditGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20024}
     */},{key:"fieldFieldKeyOptionSuggestionsEditGet",value:function fieldFieldKeyOptionSuggestionsEditGet(cloudid,fieldKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionSuggestionsEditGet");}// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionSuggestionsEditGet");}var pathParams={'cloudid':cloudid,'fieldKey':fieldKey};var queryParams={'maxResults':opts['maxResults'],'projectId':opts['projectId'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse26["default"];return this.apiClient.callApi('/field/{fieldKey}/option/suggestions/edit','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldFieldKeyOptionSuggestionsSearchGet operation.
     * @callback module:api/DefaultApi~fieldFieldKeyOptionSuggestionsSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20024} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns options defined for a select list issue field that can be viewed by the currently logged in user.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. For example, 20.
     * @param {Number} opts.projectId Filters the results to options that are only available in the specified project. For example, 10000.
     * @param {Number} opts.startAt The starting index of the returned objects. For example, 1.
     * @param {module:api/DefaultApi~fieldFieldKeyOptionSuggestionsSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20024}
     */},{key:"fieldFieldKeyOptionSuggestionsSearchGet",value:function fieldFieldKeyOptionSuggestionsSearchGet(cloudid,fieldKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionSuggestionsSearchGet");}// verify the required parameter 'fieldKey' is set
if(fieldKey===undefined||fieldKey===null){throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionSuggestionsSearchGet");}var pathParams={'cloudid':cloudid,'fieldKey':fieldKey};var queryParams={'maxResults':opts['maxResults'],'projectId':opts['projectId'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse26["default"];return this.apiClient.callApi('/field/{fieldKey}/option/suggestions/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldGet operation.
     * @callback module:api/DefaultApi~fieldGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20021>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all issue fields in Jira, both system and custom fields.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~fieldGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20021>}
     */},{key:"fieldGet",value:function fieldGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse23["default"]];return this.apiClient.callApi('/field','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the fieldPost operation.
     * @callback module:api/DefaultApi~fieldPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a custom field.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject7} opts.body 
     * @param {module:api/DefaultApi~fieldPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2011}
     */},{key:"fieldPost",value:function fieldPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling fieldPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse110["default"];return this.apiClient.callApi('/field','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterDefaultShareScopeGet operation.
     * @callback module:api/DefaultApi~filterDefaultShareScopeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20027} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default sharing settings for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~filterDefaultShareScopeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20027}
     */},{key:"filterDefaultShareScopeGet",value:function filterDefaultShareScopeGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterDefaultShareScopeGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse29["default"];return this.apiClient.callApi('/filter/defaultShareScope','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterDefaultShareScopePut operation.
     * @callback module:api/DefaultApi~filterDefaultShareScopePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20027} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default sharing for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject11} opts.body 
     * @param {module:api/DefaultApi~filterDefaultShareScopePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20027}
     */},{key:"filterDefaultShareScopePut",value:function filterDefaultShareScopePut(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterDefaultShareScopePut");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse29["default"];return this.apiClient.callApi('/filter/defaultShareScope','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterFavouriteGet operation.
     * @callback module:api/DefaultApi~filterFavouriteGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20028>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the favorite filters of the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group).
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~filterFavouriteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20028>}
     */},{key:"filterFavouriteGet",value:function filterFavouriteGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterFavouriteGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse30["default"]];return this.apiClient.callApi('/filter/favourite','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterGet operation.
     * @callback module:api/DefaultApi~filterGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all filters. Deprecated, use Search for filters that supports search and pagination. Permissions required: None, however only the following filters are returned:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~filterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"filterGet",value:function filterGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/filter','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdColumnsDelete operation.
     * @callback module:api/DefaultApi~filterIdColumnsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Reset the user's column configuration for the filter to the default. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {module:api/DefaultApi~filterIdColumnsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"filterIdColumnsDelete",value:function filterIdColumnsDelete(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdColumnsDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdColumnsDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/filter/{id}/columns','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdColumnsGet operation.
     * @callback module:api/DefaultApi~filterIdColumnsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20030>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the columns configured for a filter. The column configuration is used when the filter's results are viewed in List View with the Columns set to Filter. Permissions required: None, however the calling user must have permission to view the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {module:api/DefaultApi~filterIdColumnsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20030>}
     */},{key:"filterIdColumnsGet",value:function filterIdColumnsGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdColumnsGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdColumnsGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse33["default"]];return this.apiClient.callApi('/filter/{id}/columns','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdColumnsPut operation.
     * @callback module:api/DefaultApi~filterIdColumnsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the columns for a filter. Only navigable fields can be set as columns. Use Get fields to get the list fields in Jira. A navigable field has navigable set to true. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {module:api/DefaultApi~filterIdColumnsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"filterIdColumnsPut",value:function filterIdColumnsPut(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdColumnsPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdColumnsPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/filter/{id}/columns','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdDelete operation.
     * @callback module:api/DefaultApi~filterIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Delete a filter. Permissions required: Permission to log in to Jira, however the following rules govern what a user can delete:
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter to delete.
     * @param {module:api/DefaultApi~filterIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"filterIdDelete",value:function filterIdDelete(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/filter/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdFavouriteDelete operation.
     * @callback module:api/DefaultApi~filterIdFavouriteDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~filterIdFavouriteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"filterIdFavouriteDelete",value:function filterIdFavouriteDelete(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdFavouriteDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdFavouriteDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/filter/{id}/favourite','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdFavouritePut operation.
     * @callback module:api/DefaultApi~filterIdFavouritePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~filterIdFavouritePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"filterIdFavouritePut",value:function filterIdFavouritePut(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdFavouritePut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdFavouritePut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/filter/{id}/favourite','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdGet operation.
     * @callback module:api/DefaultApi~filterIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a filter. Permissions required: None, however the calling user must have permission view the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter to return.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~filterIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"filterIdGet",value:function filterIdGet(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/filter/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdPermissionGet operation.
     * @callback module:api/DefaultApi~filterIdPermissionGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20031>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {module:api/DefaultApi~filterIdPermissionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20031>}
     */},{key:"filterIdPermissionGet",value:function filterIdPermissionGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdPermissionGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdPermissionGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse34["default"]];return this.apiClient.callApi('/filter/{id}/permission','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdPermissionPermissionIdDelete operation.
     * @callback module:api/DefaultApi~filterIdPermissionPermissionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a share permission from a filter. Permissions required: Permission to log in to Jira (i.e., member of the users group) and the calling user must own the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Number} permissionId The ID of the share permission.
     * @param {module:api/DefaultApi~filterIdPermissionPermissionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"filterIdPermissionPermissionIdDelete",value:function filterIdPermissionPermissionIdDelete(cloudid,id,permissionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdPermissionPermissionIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdPermissionPermissionIdDelete");}// verify the required parameter 'permissionId' is set
if(permissionId===undefined||permissionId===null){throw new Error("Missing the required parameter 'permissionId' when calling filterIdPermissionPermissionIdDelete");}var pathParams={'cloudid':cloudid,'id':id,'permissionId':permissionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/filter/{id}/permission/{permissionId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdPermissionPermissionIdGet operation.
     * @callback module:api/DefaultApi~filterIdPermissionPermissionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20032} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Number} permissionId The ID of the share permission.
     * @param {module:api/DefaultApi~filterIdPermissionPermissionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20032}
     */},{key:"filterIdPermissionPermissionIdGet",value:function filterIdPermissionPermissionIdGet(cloudid,id,permissionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdPermissionPermissionIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdPermissionPermissionIdGet");}// verify the required parameter 'permissionId' is set
if(permissionId===undefined||permissionId===null){throw new Error("Missing the required parameter 'permissionId' when calling filterIdPermissionPermissionIdGet");}var pathParams={'cloudid':cloudid,'id':id,'permissionId':permissionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse35["default"];return this.apiClient.callApi('/filter/{id}/permission/{permissionId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdPermissionPost operation.
     * @callback module:api/DefaultApi~filterIdPermissionPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20031>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Add a share permissions to a filter. If you add a global share permission (i.e., all logged-in users or the public) it will overwrite all share permissions for the filter.Be aware that this method uses different objects for updating share permissions compared to Update filter. Permissions required: Share dashboards and filters global permission and the calling user must own the filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject13} opts.body 
     * @param {module:api/DefaultApi~filterIdPermissionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20031>}
     */},{key:"filterIdPermissionPost",value:function filterIdPermissionPost(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdPermissionPost");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdPermissionPost");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse34["default"]];return this.apiClient.callApi('/filter/{id}/permission','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterIdPut operation.
     * @callback module:api/DefaultApi~filterIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates an existing filter. Use this method to update a filter's name, description, JQL, or sharing. Permissions required: Permission to log in to Jira, however the following rules govern what a user can update:
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter to update.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:model/InlineObject12} opts.body 
     * @param {module:api/DefaultApi~filterIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"filterIdPut",value:function filterIdPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling filterIdPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/filter/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterMyGet operation.
     * @callback module:api/DefaultApi~filterMyGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20028>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the filters owned by the calling user. If includeFavourites is true, the user's favorite filters are also returned. Permissions required: Permission to log in to Jira (i.e., member of the users group).
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {Boolean} opts.includeFavourites Include the user's favorite filters in the response.
     * @param {module:api/DefaultApi~filterMyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20028>}
     */},{key:"filterMyGet",value:function filterMyGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterMyGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand'],'includeFavourites':opts['includeFavourites']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse30["default"]];return this.apiClient.callApi('/filter/my','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterPost operation.
     * @callback module:api/DefaultApi~filterPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new filter. The new filter is not shared and not selected as a favorite. Permissions required: Permission to log in to Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:model/InlineObject10} opts.body 
     * @param {module:api/DefaultApi~filterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */},{key:"filterPost",value:function filterPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterPost");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse28["default"];return this.apiClient.callApi('/filter','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the filterSearchGet operation.
     * @callback module:api/DefaultApi~filterSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Search for filters. This method is similar to Get filters except that you can refine the results to include filters that have specific attributes. For example, filters with a particular name. Permissions required: None, however only the following filters are returned (if no search parameters are set):
     * @param {Object} cloudid Cloudi of the project
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
     * @param {module:api/DefaultApi~filterSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20029}
     */},{key:"filterSearchGet",value:function filterSearchGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling filterSearchGet");}var pathParams={'cloudid':cloudid};var queryParams={'accountId':opts['accountId'],'expand':opts['expand'],'filterName':opts['filterName'],'groupname':opts['groupname'],'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'owner':opts['owner'],'projectId':opts['projectId'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse31["default"];return this.apiClient.callApi('/filter/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the groupDelete operation.
     * @callback module:api/DefaultApi~groupDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a group.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.groupname The name of the group.
     * @param {String} opts.swapGroup The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs will be inaccessible after the deletion.
     * @param {module:api/DefaultApi~groupDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"groupDelete",value:function groupDelete(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling groupDelete");}var pathParams={'cloudid':cloudid};var queryParams={'groupname':opts['groupname'],'swapGroup':opts['swapGroup']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/group','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the groupGet operation.
     * @callback module:api/DefaultApi~groupGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * This resource is deprecated, use group/member.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand List of fields to expand.
     * @param {String} opts.groupname The name of the group.
     * @param {module:api/DefaultApi~groupGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"groupGet",value:function groupGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling groupGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand'],'groupname':opts['groupname']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/group','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the groupMemberGet operation.
     * @callback module:api/DefaultApi~groupMemberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20033} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all users in a group. Users are ordered by username.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.groupname The name of the group.
     * @param {Boolean} opts.includeInactiveUsers Include inactive users.
     * @param {Number} opts.maxResults The maximum number of users to return per page.
     * @param {Number} opts.startAt The index of the first user to return.
     * @param {module:api/DefaultApi~groupMemberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20033}
     */},{key:"groupMemberGet",value:function groupMemberGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling groupMemberGet");}var pathParams={'cloudid':cloudid};var queryParams={'groupname':opts['groupname'],'includeInactiveUsers':opts['includeInactiveUsers'],'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse36["default"];return this.apiClient.callApi('/group/member','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the groupPost operation.
     * @callback module:api/DefaultApi~groupPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a group.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject14} opts.body 
     * @param {module:api/DefaultApi~groupPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2012}
     */},{key:"groupPost",value:function groupPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling groupPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse117["default"];return this.apiClient.callApi('/group','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the groupUserDelete operation.
     * @callback module:api/DefaultApi~groupUserDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes a user from a group. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountid The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
     * @param {String} opts.groupname The name of the group.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~groupUserDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"groupUserDelete",value:function groupUserDelete(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling groupUserDelete");}var pathParams={'cloudid':cloudid};var queryParams={'accountid':opts['accountid'],'groupname':opts['groupname'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/group/user','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the groupUserPost operation.
     * @callback module:api/DefaultApi~groupUserPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a user to a group.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.groupname The name of the group.
     * @param {module:model/InlineObject15} opts.body 
     * @param {module:api/DefaultApi~groupUserPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"groupUserPost",value:function groupUserPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling groupUserPost");}var pathParams={'cloudid':cloudid};var queryParams={'groupname':opts['groupname']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/group/user','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the groupsPickerGet operation.
     * @callback module:api/DefaultApi~groupsPickerGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20034} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId Parameter not in use.
     * @param {Array.<String>} opts.exclude A list of groups to exclude from the result.
     * @param {Number} opts.maxResults The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property jira.ajax.autocomplete.limit.
     * @param {String} opts.query The string to find in group names.
     * @param {String} opts.userName Parameter not in use.
     * @param {module:api/DefaultApi~groupsPickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20034}
     */},{key:"groupsPickerGet",value:function groupsPickerGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling groupsPickerGet");}var pathParams={'cloudid':cloudid};var queryParams={'accountId':opts['accountId'],'exclude':this.apiClient.buildCollectionParam(opts['exclude'],'csv'),'maxResults':opts['maxResults'],'query':opts['query'],'userName':opts['userName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse37["default"];return this.apiClient.callApi('/groups/picker','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the groupuserpickerGet operation.
     * @callback module:api/DefaultApi~groupuserpickerGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20035} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users and groups matching a string. The string is used:
     * @param {Object} cloudid Cloudi of the project
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
     * @param {module:api/DefaultApi~groupuserpickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20035}
     */},{key:"groupuserpickerGet",value:function groupuserpickerGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling groupuserpickerGet");}var pathParams={'cloudid':cloudid};var queryParams={'avatarSize':opts['avatarSize'],'caseInsensitive':opts['caseInsensitive'],'excludeConnectAddons':opts['excludeConnectAddons'],'fieldId':opts['fieldId'],'issueTypeId':this.apiClient.buildCollectionParam(opts['issueTypeId'],'csv'),'maxResults':opts['maxResults'],'projectId':this.apiClient.buildCollectionParam(opts['projectId'],'csv'),'query':opts['query'],'showAvatar':opts['showAvatar']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse38["default"];return this.apiClient.callApi('/groupuserpicker','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueBulkPost operation.
     * @callback module:api/DefaultApi~issueBulkPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates issues and, where the option to create sub-tasks is enabled in Jira, sub-tasks. Transitions may be applied, to move the issues or sub-tasks to a workflow step other than the default start step, and issue properties set.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject17} opts.body 
     * @param {module:api/DefaultApi~issueBulkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2014}
     */},{key:"issueBulkPost",value:function issueBulkPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueBulkPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse119["default"];return this.apiClient.callApi('/issue/bulk','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueCreatemetaGet operation.
     * @callback module:api/DefaultApi~issueCreatemetaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20036} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in Create issue and Create issues.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
     * @param {Array.<String>} opts.issuetypeIds Comma-separated list of issue type IDs. May be specified multiple times and with issuetypeNames.
     * @param {Array.<String>} opts.issuetypeNames Comma-separated list of issue type names. May be specified multiple times and with issuetypeIds.
     * @param {Array.<String>} opts.projectIds Comma-separated list of project IDs. May be specified multiple times and with projectKeys.
     * @param {Array.<String>} opts.projectKeys Comma-separated list of project keys. May be specified multiple times and with projectIds.
     * @param {module:api/DefaultApi~issueCreatemetaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20036}
     */},{key:"issueCreatemetaGet",value:function issueCreatemetaGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueCreatemetaGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand'],'issuetypeIds':this.apiClient.buildCollectionParam(opts['issuetypeIds'],'csv'),'issuetypeNames':this.apiClient.buildCollectionParam(opts['issuetypeNames'],'csv'),'projectIds':this.apiClient.buildCollectionParam(opts['projectIds'],'csv'),'projectKeys':this.apiClient.buildCollectionParam(opts['projectKeys'],'csv')};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse39["default"];return this.apiClient.callApi('/issue/createmeta','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyAssigneePut operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyAssigneePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Assigns an issue to a user. Use this operation when the calling user does not have the Edit Issues permission but has the Assign issue permission for the project that the issue is in.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue to be assigned.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject21} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyAssigneePutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyAssigneePut",value:function issueIssueIdOrKeyAssigneePut(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyAssigneePut");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyAssigneePut");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/assignee','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyAttachmentsPost operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyAttachmentsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20038>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds one or more attachments to an issue. Attachments are posted as multipart/form-data (RFC 1867).
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue that attachments are added to.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyAttachmentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20038>}
     */},{key:"issueIssueIdOrKeyAttachmentsPost",value:function issueIssueIdOrKeyAttachmentsPost(cloudid,issueIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyAttachmentsPost");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyAttachmentsPost");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse41["default"]];return this.apiClient.callApi('/issue/{issueIdOrKey}/attachments','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyChangelogGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyChangelogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20039} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a paginated list of all updates of an issue, sorted by date, starting from the oldest.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults Maximum number of items to return per page. See Pagination section for more details.
     * @param {Number} opts.startAt Page offset, ie. index of the first item returned in the page of results. Base index: 0.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyChangelogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20039}
     */},{key:"issueIssueIdOrKeyChangelogGet",value:function issueIssueIdOrKeyChangelogGet(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyChangelogGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyChangelogGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse42["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/changelog','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyCommentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20040} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * to get comments for
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey to get comments for
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {Number} opts.maxResults how many results on the page should be included. Defaults to 50.
     * @param {String} opts.orderBy ordering of the results.
     * @param {Number} opts.startAt the page offset, if not specified then defaults to 0
     * @param {module:api/DefaultApi~issueIssueIdOrKeyCommentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20040}
     */},{key:"issueIssueIdOrKeyCommentGet",value:function issueIssueIdOrKeyCommentGet(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand'],'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse44["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/comment','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentIdDelete operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * a string containing the issue id or key the comment belongs to
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id id of the comment to be deleted
     * @param {String} issueIdOrKey a string containing the issue id or key the comment belongs to
     * @param {module:api/DefaultApi~issueIssueIdOrKeyCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyCommentIdDelete",value:function issueIssueIdOrKeyCommentIdDelete(cloudid,id,issueIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyCommentIdDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentIdDelete");}var pathParams={'cloudid':cloudid,'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/comment/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentIdGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2015} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * of the issue the comment belongs to
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id the ID of the comment to request
     * @param {String} issueIdOrKey of the issue the comment belongs to
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {module:api/DefaultApi~issueIssueIdOrKeyCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2015}
     */},{key:"issueIssueIdOrKeyCommentIdGet",value:function issueIssueIdOrKeyCommentIdGet(cloudid,id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyCommentIdGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentIdGet");}var pathParams={'cloudid':cloudid,'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse120["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/comment/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentIdPut operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyCommentIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2015} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * a string containing the issue id or key the comment belongs to
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id id of the comment to be updated
     * @param {String} issueIdOrKey a string containing the issue id or key the comment belongs to
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {module:model/InlineObject23} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyCommentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2015}
     */},{key:"issueIssueIdOrKeyCommentIdPut",value:function issueIssueIdOrKeyCommentIdPut(cloudid,id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyCommentIdPut");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentIdPut");}var pathParams={'cloudid':cloudid,'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse120["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/comment/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentPost operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyCommentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2015} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * a string containing the issue id or key the comment will be added to
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey a string containing the issue id or key the comment will be added to
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {module:model/InlineObject22} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyCommentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2015}
     */},{key:"issueIssueIdOrKeyCommentPost",value:function issueIssueIdOrKeyCommentPost(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentPost");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentPost");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse120["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/comment','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyDelete operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.deleteSubtasks Indicates whether the issue's sub-tasks are deleted when the issue is deleted.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyDelete",value:function issueIssueIdOrKeyDelete(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyDelete");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'deleteSubtasks':opts['deleteSubtasks']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyEditmetaGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyEditmetaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20041} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in Edit issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrideEditableFlag Indicates whether non-editable fields should be returned. Available to connect app users with admin permissions.
     * @param {Boolean} opts.overrideScreenSecurity Indicates whether hidden fields should be returned. Available to connect app users with admin permissions.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyEditmetaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20041}
     */},{key:"issueIssueIdOrKeyEditmetaGet",value:function issueIssueIdOrKeyEditmetaGet(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyEditmetaGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyEditmetaGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'overrideEditableFlag':opts['overrideEditableFlag'],'overrideScreenSecurity':opts['overrideScreenSecurity']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse45["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/editmeta','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20037} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the details for an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue. For example, JRACLOUD-1549.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about the issues in the response. This parameter accepts multiple values separated by a comma:
     * @param {Array.<module:model/String>} opts.fields A comma-separated list of fields to return for the issue. Use it to retrieve a subset of fields. Allowed values:
     * @param {Boolean} opts.fieldsByKeys Indicates whether fields in fields are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
     * @param {Array.<module:model/String>} opts.properties A comma-separated list of issue properties to return for the issue. Allowed values:
     * @param {Boolean} opts.updateHistory Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira. This also populates the JQL issues search lastViewed field.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20037}
     */},{key:"issueIssueIdOrKeyGet",value:function issueIssueIdOrKeyGet(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand'],'fields':this.apiClient.buildCollectionParam(opts['fields'],'csv'),'fieldsByKeys':opts['fieldsByKeys'],'properties':this.apiClient.buildCollectionParam(opts['properties'],'csv'),'updateHistory':opts['updateHistory']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse40["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyNotifyPost operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyNotifyPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an email notification for an issue and adds it to the mail queue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey ID or key of the issue that the notification is sent for.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject24} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyNotifyPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyNotifyPost",value:function issueIssueIdOrKeyNotifyPost(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyNotifyPost");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyNotifyPost");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/notify','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyPropertiesGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the URIs and keys of an issue's properties.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The key or ID of the issue.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"issueIssueIdOrKeyPropertiesGet",value:function issueIssueIdOrKeyPropertiesGet(cloudid,issueIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPropertiesGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPropertiesGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an issue's property.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The key or ID of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyPropertiesPropertyKeyDelete",value:function issueIssueIdOrKeyPropertiesPropertyKeyDelete(cloudid,issueIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPropertiesPropertyKeyDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyDelete");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the key and value of an issue's property.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The key or ID of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"issueIssueIdOrKeyPropertiesPropertyKeyGet",value:function issueIssueIdOrKeyPropertiesPropertyKeyGet(cloudid,issueIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPropertiesPropertyKeyGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of an issue's property. Use this resource to store custom data against an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} propertyKey The key of the issue property. The maximum length is 255 characters.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyPropertiesPropertyKeyPut",value:function issueIssueIdOrKeyPropertiesPropertyKeyPut(cloudid,issueIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPropertiesPropertyKeyPut");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyPut");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyPut operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Edits an issue. A transition may be applied and issue properties updated as part of the edit.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.notifyUsers Indicates whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
     * @param {Boolean} opts.overrideEditableFlag Indicates whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions.
     * @param {Boolean} opts.overrideScreenSecurity Indicates whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions.
     * @param {module:model/InlineObject20} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyPut",value:function issueIssueIdOrKeyPut(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPut");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPut");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'notifyUsers':opts['notifyUsers'],'overrideEditableFlag':opts['overrideEditableFlag'],'overrideScreenSecurity':opts['overrideScreenSecurity']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkDelete operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyRemotelinkDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the remote issue link from the issue using the link's global ID.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.globalId The global ID of a remote issue link.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyRemotelinkDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyRemotelinkDelete",value:function issueIssueIdOrKeyRemotelinkDelete(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkDelete");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'globalId':opts['globalId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyRemotelinkGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20042>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.globalId The global ID of the remote issue link.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyRemotelinkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20042>}
     */},{key:"issueIssueIdOrKeyRemotelinkGet",value:function issueIssueIdOrKeyRemotelinkGet(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'globalId':opts['globalId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse46["default"]];return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkLinkIdDelete operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyRemotelinkLinkIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a remote issue link from an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} linkId The ID of a remote issue link.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyRemotelinkLinkIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyRemotelinkLinkIdDelete",value:function issueIssueIdOrKeyRemotelinkLinkIdDelete(cloudid,issueIdOrKey,linkId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkLinkIdDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkLinkIdDelete");}// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling issueIssueIdOrKeyRemotelinkLinkIdDelete");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink/{linkId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkLinkIdGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyRemotelinkLinkIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20044} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a remote issue link for an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} linkId The ID of the remote issue link.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyRemotelinkLinkIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20044}
     */},{key:"issueIssueIdOrKeyRemotelinkLinkIdGet",value:function issueIssueIdOrKeyRemotelinkLinkIdGet(cloudid,issueIdOrKey,linkId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkLinkIdGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkLinkIdGet");}// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling issueIssueIdOrKeyRemotelinkLinkIdGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse48["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink/{linkId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkLinkIdPut operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyRemotelinkLinkIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a remote issue link for an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} linkId The ID of the remote issue link.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject26} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyRemotelinkLinkIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyRemotelinkLinkIdPut",value:function issueIssueIdOrKeyRemotelinkLinkIdPut(cloudid,issueIdOrKey,linkId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkLinkIdPut");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkLinkIdPut");}// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling issueIssueIdOrKeyRemotelinkLinkIdPut");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink/{linkId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkPost operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyRemotelinkPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20043} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates or updates a remote issue link for an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject25} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyRemotelinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20043}
     */},{key:"issueIssueIdOrKeyRemotelinkPost",value:function issueIssueIdOrKeyRemotelinkPost(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkPost");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkPost");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse47["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyTransitionsGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyTransitionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20045} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
     * @param {Boolean} opts.skipRemoteOnlyCondition Indicates whether transitions with the condition Hide From User Condition are included in the response.
     * @param {String} opts.transitionId The ID of the transition.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyTransitionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20045}
     */},{key:"issueIssueIdOrKeyTransitionsGet",value:function issueIssueIdOrKeyTransitionsGet(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyTransitionsGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyTransitionsGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand'],'skipRemoteOnlyCondition':opts['skipRemoteOnlyCondition'],'transitionId':opts['transitionId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse49["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/transitions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyTransitionsPost operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyTransitionsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. Optionally, issue properties can be set.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject27} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyTransitionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyTransitionsPost",value:function issueIssueIdOrKeyTransitionsPost(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyTransitionsPost");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyTransitionsPost");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/transitions','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyVotesDelete operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyVotesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a user's vote from an issue. This is the equivalent of the user clicking Unvote on an issue in Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyVotesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyVotesDelete",value:function issueIssueIdOrKeyVotesDelete(cloudid,issueIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyVotesDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyVotesDelete");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/votes','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyVotesGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyVotesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20046} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details about the votes on an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyVotesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20046}
     */},{key:"issueIssueIdOrKeyVotesGet",value:function issueIssueIdOrKeyVotesGet(cloudid,issueIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyVotesGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyVotesGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse50["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/votes','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyVotesPost operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyVotesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds the user's vote to an issue. This is the equivalent of the user clicking Vote on an issue in Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyVotesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyVotesPost",value:function issueIssueIdOrKeyVotesPost(cloudid,issueIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyVotesPost");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyVotesPost");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/votes','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWatchersDelete operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWatchersDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a user as a watcher of an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The account ID of the user. Required if username is omitted, otherwise must be omitted.
     * @param {String} opts.username The name of the user. Required if accountId is omitted, otherwise must be omitted.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWatchersDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyWatchersDelete",value:function issueIssueIdOrKeyWatchersDelete(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWatchersDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWatchersDelete");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'accountId':opts['accountId'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/watchers','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWatchersGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWatchersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20047} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the watchers for an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWatchersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20047}
     */},{key:"issueIssueIdOrKeyWatchersGet",value:function issueIssueIdOrKeyWatchersGet(cloudid,issueIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWatchersGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWatchersGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse51["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/watchers','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWatchersPost operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWatchersPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a user as a watcher of an issue. If no user is specified the calling user is added.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWatchersPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyWatchersPost",value:function issueIssueIdOrKeyWatchersPost(cloudid,issueIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWatchersPost");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWatchersPost");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/watchers','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWorklogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20048} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all worklogs for an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1048576.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWorklogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20048}
     */},{key:"issueIssueIdOrKeyWorklogGet",value:function issueIssueIdOrKeyWorklogGet(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand'],'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse52["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogIdDelete operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWorklogIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a worklog from an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the worklog.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.adjustEstimate Defines how to update the issue's time estimate, the options are:
     * @param {String} opts.increaseBy The amount to increase the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is manual.
     * @param {String} opts.newEstimate The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
     * @param {Boolean} opts.notifyUsers Indicates whether users watching the issue are notified by email.
     * @param {Boolean} opts.overrideEditableFlag Indicates whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWorklogIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyWorklogIdDelete",value:function issueIssueIdOrKeyWorklogIdDelete(cloudid,id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyWorklogIdDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogIdDelete");}var pathParams={'cloudid':cloudid,'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'adjustEstimate':opts['adjustEstimate'],'increaseBy':opts['increaseBy'],'newEstimate':opts['newEstimate'],'notifyUsers':opts['notifyUsers'],'overrideEditableFlag':opts['overrideEditableFlag']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogIdGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWorklogIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20049} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a worklog.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the worklog.
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWorklogIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20049}
     */},{key:"issueIssueIdOrKeyWorklogIdGet",value:function issueIssueIdOrKeyWorklogIdGet(cloudid,id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyWorklogIdGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogIdGet");}var pathParams={'cloudid':cloudid,'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse53["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogIdPut operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWorklogIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20049} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a worklog.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the worklog.
     * @param {String} issueIdOrKey The ID or key the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.adjustEstimate Defines how to update the issue's time estimate, the options are:
     * @param {module:model/String} opts.expand Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
     * @param {String} opts.newEstimate The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
     * @param {Boolean} opts.notifyUsers Indicates whether users watching the issue are notified by email.
     * @param {Boolean} opts.overrideEditableFlag Indicates whether the worklog should be added to the issue even if the issue is not editable, for example, because the issue is closed. Only connect app users with admin permissions can use this flag.
     * @param {module:model/InlineObject29} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWorklogIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20049}
     */},{key:"issueIssueIdOrKeyWorklogIdPut",value:function issueIssueIdOrKeyWorklogIdPut(cloudid,id,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyWorklogIdPut");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogIdPut");}var pathParams={'cloudid':cloudid,'id':id,'issueIdOrKey':issueIdOrKey};var queryParams={'adjustEstimate':opts['adjustEstimate'],'expand':opts['expand'],'newEstimate':opts['newEstimate'],'notifyUsers':opts['notifyUsers'],'overrideEditableFlag':opts['overrideEditableFlag']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse53["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogPost operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWorklogPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a worklog to an issue.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.adjustEstimate Defines how to update the issue's time estimate, the options are:
     * @param {module:model/String} opts.expand Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
     * @param {String} opts.newEstimate The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
     * @param {Boolean} opts.notifyUsers Indicates whether users watching the issue are notified by email.
     * @param {Boolean} opts.overrideEditableFlag Indicates whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag.
     * @param {String} opts.reduceBy The amount to reduce the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m). For example, 2d. Required when adjustEstimate is manual.
     * @param {module:model/InlineObject28} opts.body 
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWorklogPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyWorklogPost",value:function issueIssueIdOrKeyWorklogPost(cloudid,issueIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogPost");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogPost");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey};var queryParams={'adjustEstimate':opts['adjustEstimate'],'expand':opts['expand'],'newEstimate':opts['newEstimate'],'notifyUsers':opts['notifyUsers'],'overrideEditableFlag':opts['overrideEditableFlag'],'reduceBy':opts['reduceBy']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogWorklogIdPropertiesGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the keys of all properties for a worklog.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} worklogId The ID of the worklog.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"issueIssueIdOrKeyWorklogWorklogIdPropertiesGet",value:function issueIssueIdOrKeyWorklogWorklogIdPropertiesGet(cloudid,issueIdOrKey,worklogId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesGet");}// verify the required parameter 'worklogId' is set
if(worklogId===undefined||worklogId===null){throw new Error("Missing the required parameter 'worklogId' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'worklogId':worklogId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{worklogId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a worklog property.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {String} worklogId The ID of the worklog.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete",value:function issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(cloudid,issueIdOrKey,propertyKey,worklogId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");}// verify the required parameter 'worklogId' is set
if(worklogId===undefined||worklogId===null){throw new Error("Missing the required parameter 'worklogId' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey,'worklogId':worklogId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of a worklog property.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {String} worklogId The ID of the worklog.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet",value:function issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(cloudid,issueIdOrKey,propertyKey,worklogId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");}// verify the required parameter 'worklogId' is set
if(worklogId===undefined||worklogId===null){throw new Error("Missing the required parameter 'worklogId' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey,'worklogId':worklogId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of a worklog property. Use this operation to store custom data against the worklog.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} propertyKey The key of the issue property. The maximum length is 255 characters.
     * @param {String} worklogId The ID of the worklog.
     * @param {module:api/DefaultApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut",value:function issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(cloudid,issueIdOrKey,propertyKey,worklogId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");}// verify the required parameter 'issueIdOrKey' is set
if(issueIdOrKey===undefined||issueIdOrKey===null){throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");}// verify the required parameter 'worklogId' is set
if(worklogId===undefined||worklogId===null){throw new Error("Missing the required parameter 'worklogId' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");}var pathParams={'cloudid':cloudid,'issueIdOrKey':issueIdOrKey,'propertyKey':propertyKey,'worklogId':worklogId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueLinkLinkIdDelete operation.
     * @callback module:api/DefaultApi~issueLinkLinkIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an issue link.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} linkId The ID of the issue link.
     * @param {module:api/DefaultApi~issueLinkLinkIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueLinkLinkIdDelete",value:function issueLinkLinkIdDelete(cloudid,linkId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueLinkLinkIdDelete");}// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling issueLinkLinkIdDelete");}var pathParams={'cloudid':cloudid,'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issueLink/{linkId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueLinkLinkIdGet operation.
     * @callback module:api/DefaultApi~issueLinkLinkIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20050} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue link.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} linkId The ID of the issue link.
     * @param {module:api/DefaultApi~issueLinkLinkIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20050}
     */},{key:"issueLinkLinkIdGet",value:function issueLinkLinkIdGet(cloudid,linkId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueLinkLinkIdGet");}// verify the required parameter 'linkId' is set
if(linkId===undefined||linkId===null){throw new Error("Missing the required parameter 'linkId' when calling issueLinkLinkIdGet");}var pathParams={'cloudid':cloudid,'linkId':linkId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse55["default"];return this.apiClient.callApi('/issueLink/{linkId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueLinkPost operation.
     * @callback module:api/DefaultApi~issueLinkPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have Issue Linking enabled.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject30} opts.body 
     * @param {module:api/DefaultApi~issueLinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueLinkPost",value:function issueLinkPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueLinkPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issueLink','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueLinkTypeGet operation.
     * @callback module:api/DefaultApi~issueLinkTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20051} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of all issue link types.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~issueLinkTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20051}
     */},{key:"issueLinkTypeGet",value:function issueLinkTypeGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypeGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse56["default"];return this.apiClient.callApi('/issueLinkType','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueLinkTypeIssueLinkTypeIdDelete operation.
     * @callback module:api/DefaultApi~issueLinkTypeIssueLinkTypeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an issue link type.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueLinkTypeId The ID of the issue link type.
     * @param {module:api/DefaultApi~issueLinkTypeIssueLinkTypeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issueLinkTypeIssueLinkTypeIdDelete",value:function issueLinkTypeIssueLinkTypeIdDelete(cloudid,issueLinkTypeId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypeIssueLinkTypeIdDelete");}// verify the required parameter 'issueLinkTypeId' is set
if(issueLinkTypeId===undefined||issueLinkTypeId===null){throw new Error("Missing the required parameter 'issueLinkTypeId' when calling issueLinkTypeIssueLinkTypeIdDelete");}var pathParams={'cloudid':cloudid,'issueLinkTypeId':issueLinkTypeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issueLinkType/{issueLinkTypeId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueLinkTypeIssueLinkTypeIdGet operation.
     * @callback module:api/DefaultApi~issueLinkTypeIssueLinkTypeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue link type.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueLinkTypeId The ID of the issue link type.
     * @param {module:api/DefaultApi~issueLinkTypeIssueLinkTypeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2016}
     */},{key:"issueLinkTypeIssueLinkTypeIdGet",value:function issueLinkTypeIssueLinkTypeIdGet(cloudid,issueLinkTypeId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypeIssueLinkTypeIdGet");}// verify the required parameter 'issueLinkTypeId' is set
if(issueLinkTypeId===undefined||issueLinkTypeId===null){throw new Error("Missing the required parameter 'issueLinkTypeId' when calling issueLinkTypeIssueLinkTypeIdGet");}var pathParams={'cloudid':cloudid,'issueLinkTypeId':issueLinkTypeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse121["default"];return this.apiClient.callApi('/issueLinkType/{issueLinkTypeId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueLinkTypeIssueLinkTypeIdPut operation.
     * @callback module:api/DefaultApi~issueLinkTypeIssueLinkTypeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates an issue link type.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueLinkTypeId The ID of the issue link type.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject32} opts.body 
     * @param {module:api/DefaultApi~issueLinkTypeIssueLinkTypeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2016}
     */},{key:"issueLinkTypeIssueLinkTypeIdPut",value:function issueLinkTypeIssueLinkTypeIdPut(cloudid,issueLinkTypeId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypeIssueLinkTypeIdPut");}// verify the required parameter 'issueLinkTypeId' is set
if(issueLinkTypeId===undefined||issueLinkTypeId===null){throw new Error("Missing the required parameter 'issueLinkTypeId' when calling issueLinkTypeIssueLinkTypeIdPut");}var pathParams={'cloudid':cloudid,'issueLinkTypeId':issueLinkTypeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse121["default"];return this.apiClient.callApi('/issueLinkType/{issueLinkTypeId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issueLinkTypePost operation.
     * @callback module:api/DefaultApi~issueLinkTypePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link's inward and outward relationships.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject31} opts.body 
     * @param {module:api/DefaultApi~issueLinkTypePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2016}
     */},{key:"issueLinkTypePost",value:function issueLinkTypePost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypePost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse121["default"];return this.apiClient.callApi('/issueLinkType','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuePickerGet operation.
     * @callback module:api/DefaultApi~issuePickerGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of suggested issues matching the auto-completion query for the user executing this request. This operation checks the user's history and browsing context to return issue suggestions.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.currentIssueKey Key of the issue defining search context. The issue defining a context is excluded from the search results.
     * @param {String} opts.currentJQL JQL that defines the search context. Only issues matching this JQL query are included in the results. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
     * @param {String} opts.currentProjectId ID of a project defining search context. Only issues belonging to a given project are suggested.
     * @param {String} opts.query Query used to filter issue search results.
     * @param {Boolean} opts.showSubTaskParent Set to false to exclude parent issue from the suggestions list if search is performed in the context of a sub-task.
     * @param {Boolean} opts.showSubTasks Set to false to exclude subtasks from the suggestions list.
     * @param {module:api/DefaultApi~issuePickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issuePickerGet",value:function issuePickerGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuePickerGet");}var pathParams={'cloudid':cloudid};var queryParams={'currentIssueKey':opts['currentIssueKey'],'currentJQL':opts['currentJQL'],'currentProjectId':opts['currentProjectId'],'query':opts['query'],'showSubTaskParent':opts['showSubTaskParent'],'showSubTasks':opts['showSubTasks']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/picker','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuePost operation.
     * @callback module:api/DefaultApi~issuePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an issue or, where the option to create sub-tasks is enabled in Jira, a sub-task. A transition may be applied, to move the issue or sub-task to a workflow step other than the default start step, and issue properties set.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateHistory Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira.
     * @param {module:model/InlineObject16} opts.body 
     * @param {module:api/DefaultApi~issuePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2013}
     */},{key:"issuePost",value:function issuePost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuePost");}var pathParams={'cloudid':cloudid};var queryParams={'updateHistory':opts['updateHistory']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse118["default"];return this.apiClient.callApi('/issue','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuePropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~issuePropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} propertyKey The key of the property.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject19} opts.body 
     * @param {module:api/DefaultApi~issuePropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issuePropertiesPropertyKeyDelete",value:function issuePropertiesPropertyKeyDelete(cloudid,propertyKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuePropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issuePropertiesPropertyKeyDelete");}var pathParams={'cloudid':cloudid,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuePropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~issuePropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets a property value on multiple issues. The issues to be updated can be specified by a filter.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} propertyKey The key of the property. The maximum length is 255 characters.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject18} opts.body 
     * @param {module:api/DefaultApi~issuePropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issuePropertiesPropertyKeyPut",value:function issuePropertiesPropertyKeyPut(cloudid,propertyKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuePropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issuePropertiesPropertyKeyPut");}var pathParams={'cloudid':cloudid,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issue/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuesecurityschemesGet operation.
     * @callback module:api/DefaultApi~issuesecurityschemesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20052} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all issue security schemes.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~issuesecurityschemesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20052}
     */},{key:"issuesecurityschemesGet",value:function issuesecurityschemesGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuesecurityschemesGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse57["default"];return this.apiClient.callApi('/issuesecurityschemes','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuesecurityschemesIdGet operation.
     * @callback module:api/DefaultApi~issuesecurityschemesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20053} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue security scheme along with its security levels.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the issue security scheme. Use the Get issue security schemes operation to get a list of issue security scheme IDs.
     * @param {module:api/DefaultApi~issuesecurityschemesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20053}
     */},{key:"issuesecurityschemesIdGet",value:function issuesecurityschemesIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuesecurityschemesIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issuesecurityschemesIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse58["default"];return this.apiClient.callApi('/issuesecurityschemes/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeGet operation.
     * @callback module:api/DefaultApi~issuetypeGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20050InwardIssueFieldsIssuetype>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all issue types. Permissions required: Permission to access Jira, however, only issue types that are visible to the user are returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~issuetypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20050InwardIssueFieldsIssuetype>}
     */},{key:"issuetypeGet",value:function issuetypeGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20050InwardIssueFieldsIssuetype["default"]];return this.apiClient.callApi('/issuetype','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeIdAlternativesGet operation.
     * @callback module:api/DefaultApi~issuetypeIdAlternativesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20050InwardIssueFieldsIssuetype>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme. Permissions required: Permission to access Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {module:api/DefaultApi~issuetypeIdAlternativesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20050InwardIssueFieldsIssuetype>}
     */},{key:"issuetypeIdAlternativesGet",value:function issuetypeIdAlternativesGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdAlternativesGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issuetypeIdAlternativesGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20050InwardIssueFieldsIssuetype["default"]];return this.apiClient.callApi('/issuetype/{id}/alternatives','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeIdAvatar2Post operation.
     * @callback module:api/DefaultApi~issuetypeIdAvatar2PostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Loads an avatar for the issue type.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The length of each side of the crop region.
     * @param {Number} opts.x The X coordinate of the top-left corner of the crop region.
     * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region.
     * @param {module:api/DefaultApi~issuetypeIdAvatar2PostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2017}
     */},{key:"issuetypeIdAvatar2Post",value:function issuetypeIdAvatar2Post(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdAvatar2Post");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issuetypeIdAvatar2Post");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'size':opts['size'],'x':opts['x'],'y':opts['y']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse122["default"];return this.apiClient.callApi('/issuetype/{id}/avatar2','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeIdDelete operation.
     * @callback module:api/DefaultApi~issuetypeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (alternativeIssueTypeId). A list of alternative issue types can be obtained from the Get alternative issue types resource. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {String} opts.alternativeIssueTypeId The ID of the replacement issue type.
     * @param {module:api/DefaultApi~issuetypeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issuetypeIdDelete",value:function issuetypeIdDelete(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issuetypeIdDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'alternativeIssueTypeId':opts['alternativeIssueTypeId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issuetype/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeIdGet operation.
     * @callback module:api/DefaultApi~issuetypeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20054} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue type. Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {module:api/DefaultApi~issuetypeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20054}
     */},{key:"issuetypeIdGet",value:function issuetypeIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issuetypeIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse59["default"];return this.apiClient.callApi('/issuetype/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeIdPut operation.
     * @callback module:api/DefaultApi~issuetypeIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates the issue type. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject34} opts.body 
     * @param {module:api/DefaultApi~issuetypeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issuetypeIdPut",value:function issuetypeIdPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling issuetypeIdPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issuetype/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesGet operation.
     * @callback module:api/DefaultApi~issuetypeIssueTypeIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all the issue type property keys of the issue type. Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {module:api/DefaultApi~issuetypeIssueTypeIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"issuetypeIssueTypeIdPropertiesGet",value:function issuetypeIssueTypeIdPropertiesGet(cloudid,issueTypeId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesGet");}// verify the required parameter 'issueTypeId' is set
if(issueTypeId===undefined||issueTypeId===null){throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesGet");}var pathParams={'cloudid':cloudid,'issueTypeId':issueTypeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/issuetype/{issueTypeId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~issuetypeIssueTypeIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the issue type property. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
     * @param {module:api/DefaultApi~issuetypeIssueTypeIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issuetypeIssueTypeIdPropertiesPropertyKeyDelete",value:function issuetypeIssueTypeIdPropertiesPropertyKeyDelete(cloudid,issueTypeId,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesPropertyKeyDelete");}// verify the required parameter 'issueTypeId' is set
if(issueTypeId===undefined||issueTypeId===null){throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issuetypeIssueTypeIdPropertiesPropertyKeyDelete");}var pathParams={'cloudid':cloudid,'issueTypeId':issueTypeId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issuetype/{issueTypeId}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~issuetypeIssueTypeIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the key and value of the issue type property. Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
     * @param {module:api/DefaultApi~issuetypeIssueTypeIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"issuetypeIssueTypeIdPropertiesPropertyKeyGet",value:function issuetypeIssueTypeIdPropertiesPropertyKeyGet(cloudid,issueTypeId,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesPropertyKeyGet");}// verify the required parameter 'issueTypeId' is set
if(issueTypeId===undefined||issueTypeId===null){throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issuetypeIssueTypeIdPropertiesPropertyKeyGet");}var pathParams={'cloudid':cloudid,'issueTypeId':issueTypeId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/issuetype/{issueTypeId}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~issuetypeIssueTypeIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates or updates the value of the issue type property. Use this resource to store and update data against an issue type. The value of the request body must be a valid, non-empty JSON blob. The maximum length of the property value is 32768 bytes. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the issue type property. The maximum length of the key is 255 bytes.
     * @param {module:api/DefaultApi~issuetypeIssueTypeIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issuetypeIssueTypeIdPropertiesPropertyKeyPut",value:function issuetypeIssueTypeIdPropertiesPropertyKeyPut(cloudid,issueTypeId,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");}// verify the required parameter 'issueTypeId' is set
if(issueTypeId===undefined||issueTypeId===null){throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");}var pathParams={'cloudid':cloudid,'issueTypeId':issueTypeId,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issuetype/{issueTypeId}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the issuetypePost operation.
     * @callback module:api/DefaultApi~issuetypePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates an issue type and adds it to the default issue type scheme. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject33} opts.body 
     * @param {module:api/DefaultApi~issuetypePostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"issuetypePost",value:function issuetypePost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling issuetypePost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/issuetype','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the jqlAutocompletedataGet operation.
     * @callback module:api/DefaultApi~jqlAutocompletedataGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20055} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns reference data for JQL searches. This is a downloadable version of the documentation provided in Advanced searching - fields reference and Advanced searching - functions reference, along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~jqlAutocompletedataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20055}
     */},{key:"jqlAutocompletedataGet",value:function jqlAutocompletedataGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling jqlAutocompletedataGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse60["default"];return this.apiClient.callApi('/jql/autocompletedata','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the jqlAutocompletedataSuggestionsGet operation.
     * @callback module:api/DefaultApi~jqlAutocompletedataSuggestionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20056} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the JQL search auto complete suggestions for a field.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.fieldName The name of the field.
     * @param {String} opts.fieldValue The partial field item name entered by the user.
     * @param {String} opts.predicateName The name of the CHANGED operator predicate for which the suggestions are generated. The valid predicate operators are by, from, and to.
     * @param {String} opts.predicateValue The partial predicate item name entered by the user.
     * @param {module:api/DefaultApi~jqlAutocompletedataSuggestionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20056}
     */},{key:"jqlAutocompletedataSuggestionsGet",value:function jqlAutocompletedataSuggestionsGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling jqlAutocompletedataSuggestionsGet");}var pathParams={'cloudid':cloudid};var queryParams={'fieldName':opts['fieldName'],'fieldValue':opts['fieldValue'],'predicateName':opts['predicateName'],'predicateValue':opts['predicateValue']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse61["default"];return this.apiClient.callApi('/jql/autocompletedata/suggestions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the jqlPdcleanerPost operation.
     * @callback module:api/DefaultApi~jqlPdcleanerPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20057} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * The query strings having personal data that need to be migrated. There should be at most 100 queries.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject35} opts.body 
     * @param {module:api/DefaultApi~jqlPdcleanerPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20057}
     */},{key:"jqlPdcleanerPost",value:function jqlPdcleanerPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling jqlPdcleanerPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse62["default"];return this.apiClient.callApi('/jql/pdcleaner','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the mypermissionsGet operation.
     * @callback module:api/DefaultApi~mypermissionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20058} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of permissions indicating which permissions the user has. Details of the user's permissions can be obtained in a global, project, or issue context.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueId The ID of the issue.
     * @param {String} opts.issueKey The key of the issue. Ignored if issueId is provided.
     * @param {String} opts.permissions A comma separated list of permission keys. Omitting this parameter is deprecated. To get the list of available permissions, use Get all permissions. Note that deprecated keys cannot be used. Deprecated keys are not returned by Get all permissions but are returned by this operation if permissions is omitted.
     * @param {String} opts.projectId The ID of project.
     * @param {String} opts.projectKey The key of project. Ignored if projectId is provided.
     * @param {module:api/DefaultApi~mypermissionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20058}
     */},{key:"mypermissionsGet",value:function mypermissionsGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling mypermissionsGet");}var pathParams={'cloudid':cloudid};var queryParams={'issueId':opts['issueId'],'issueKey':opts['issueKey'],'permissions':opts['permissions'],'projectId':opts['projectId'],'projectKey':opts['projectKey']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse63["default"];return this.apiClient.callApi('/mypermissions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the mypreferencesDelete operation.
     * @callback module:api/DefaultApi~mypreferencesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a preference of the user, which restores the default value of system defined settings.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the preference.
     * @param {module:api/DefaultApi~mypreferencesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"mypreferencesDelete",value:function mypreferencesDelete(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesDelete");}var pathParams={'cloudid':cloudid};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/mypreferences','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the mypreferencesGet operation.
     * @callback module:api/DefaultApi~mypreferencesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of a preference of the user.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the preference.
     * @param {module:api/DefaultApi~mypreferencesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"mypreferencesGet",value:function mypreferencesGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesGet");}var pathParams={'cloudid':cloudid};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/mypreferences','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the mypreferencesLocaleDelete operation.
     * @callback module:api/DefaultApi~mypreferencesLocaleDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the locale of the current user, which restores the default setting.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~mypreferencesLocaleDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"mypreferencesLocaleDelete",value:function mypreferencesLocaleDelete(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesLocaleDelete");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/mypreferences/locale','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the mypreferencesLocaleGet operation.
     * @callback module:api/DefaultApi~mypreferencesLocaleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20059} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the locale for the current user.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~mypreferencesLocaleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20059}
     */},{key:"mypreferencesLocaleGet",value:function mypreferencesLocaleGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesLocaleGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse64["default"];return this.apiClient.callApi('/mypreferences/locale','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the mypreferencesLocalePut operation.
     * @callback module:api/DefaultApi~mypreferencesLocalePutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the locale of the current user. The requested locale must be one supported by the instance of Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject36} opts.body 
     * @param {module:api/DefaultApi~mypreferencesLocalePutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"mypreferencesLocalePut",value:function mypreferencesLocalePut(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesLocalePut");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/mypreferences/locale','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the mypreferencesPut operation.
     * @callback module:api/DefaultApi~mypreferencesPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a preference for the user or updates its value. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the preference. Maximum length is 255 characters.
     * @param {module:api/DefaultApi~mypreferencesPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"mypreferencesPut",value:function mypreferencesPut(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesPut");}var pathParams={'cloudid':cloudid};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/mypreferences','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the myselfGet operation.
     * @callback module:api/DefaultApi~myselfGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20060} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details for the authenticated user.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about user in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~myselfGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20060}
     */},{key:"myselfGet",value:function myselfGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling myselfGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse66["default"];return this.apiClient.callApi('/myself','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationschemeGet operation.
     * @callback module:api/DefaultApi~notificationschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20061} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a paginated list of notification schemes in order by display name.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.maxResults The maximum number of items to return per page. Max is 50.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). The base index is 0.
     * @param {module:api/DefaultApi~notificationschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20061}
     */},{key:"notificationschemeGet",value:function notificationschemeGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling notificationschemeGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand'],'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse67["default"];return this.apiClient.callApi('/notificationscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the notificationschemeIdGet operation.
     * @callback module:api/DefaultApi~notificationschemeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20062} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a notification scheme, including the list of events and the recipients who will receive notifications for those events.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the notification scheme. Use Get notification schemes paginated to get a list of notification scheme IDs.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~notificationschemeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20062}
     */},{key:"notificationschemeIdGet",value:function notificationschemeIdGet(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling notificationschemeIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling notificationschemeIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse68["default"];return this.apiClient.callApi('/notificationscheme/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionsGet operation.
     * @callback module:api/DefaultApi~permissionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20063} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all permissions, including:
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~permissionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20063}
     */},{key:"permissionsGet",value:function permissionsGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionsGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse69["default"];return this.apiClient.callApi('/permissions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionsProjectPost operation.
     * @callback module:api/DefaultApi~permissionsProjectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20064} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all the projects where the user is granted a list of project permissions.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject37} opts.body 
     * @param {module:api/DefaultApi~permissionsProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20064}
     */},{key:"permissionsProjectPost",value:function permissionsProjectPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionsProjectPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse70["default"];return this.apiClient.callApi('/permissions/project','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionschemeGet operation.
     * @callback module:api/DefaultApi~permissionschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20065} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all permission schemes.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
     * @param {module:api/DefaultApi~permissionschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20065}
     */},{key:"permissionschemeGet",value:function permissionschemeGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse71["default"];return this.apiClient.callApi('/permissionscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionschemePost operation.
     * @callback module:api/DefaultApi~permissionschemePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:model/InlineObject38} opts.body 
     * @param {module:api/DefaultApi~permissionschemePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2018}
     */},{key:"permissionschemePost",value:function permissionschemePost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionschemePost");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse123["default"];return this.apiClient.callApi('/permissionscheme','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionschemeSchemeIdDelete operation.
     * @callback module:api/DefaultApi~permissionschemeSchemeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a permission scheme. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme being deleted (e.g., 10000).
     * @param {module:api/DefaultApi~permissionschemeSchemeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"permissionschemeSchemeIdDelete",value:function permissionschemeSchemeIdDelete(cloudid,schemeId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdDelete");}// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdDelete");}var pathParams={'cloudid':cloudid,'schemeId':schemeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/permissionscheme/{schemeId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionschemeSchemeIdGet operation.
     * @callback module:api/DefaultApi~permissionschemeSchemeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a permission scheme. Permissions required: Permission to log in to Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme to return (e.g., 10000).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
     * @param {module:api/DefaultApi~permissionschemeSchemeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2018}
     */},{key:"permissionschemeSchemeIdGet",value:function permissionschemeSchemeIdGet(cloudid,schemeId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdGet");}// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdGet");}var pathParams={'cloudid':cloudid,'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse123["default"];return this.apiClient.callApi('/permissionscheme/{schemeId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionschemeSchemeIdPermissionGet operation.
     * @callback module:api/DefaultApi~permissionschemeSchemeIdPermissionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20066} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all permission grants for a permission scheme. Permissions required: Permission to log in to Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme (e.g., 10010).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:api/DefaultApi~permissionschemeSchemeIdPermissionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20066}
     */},{key:"permissionschemeSchemeIdPermissionGet",value:function permissionschemeSchemeIdPermissionGet(cloudid,schemeId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPermissionGet");}// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPermissionGet");}var pathParams={'cloudid':cloudid,'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse72["default"];return this.apiClient.callApi('/permissionscheme/{schemeId}/permission','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionschemeSchemeIdPermissionPermissionIdDelete operation.
     * @callback module:api/DefaultApi~permissionschemeSchemeIdPermissionPermissionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a permission grant from a permission scheme. See About permission schemes and grants for more details. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} permissionId The ID of the permission grant to delete (e.g., 10847).
     * @param {Number} schemeId The ID of the permission scheme to delete the permission grant from (e.g., 10000).
     * @param {module:api/DefaultApi~permissionschemeSchemeIdPermissionPermissionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"permissionschemeSchemeIdPermissionPermissionIdDelete",value:function permissionschemeSchemeIdPermissionPermissionIdDelete(cloudid,permissionId,schemeId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPermissionPermissionIdDelete");}// verify the required parameter 'permissionId' is set
if(permissionId===undefined||permissionId===null){throw new Error("Missing the required parameter 'permissionId' when calling permissionschemeSchemeIdPermissionPermissionIdDelete");}// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPermissionPermissionIdDelete");}var pathParams={'cloudid':cloudid,'permissionId':permissionId,'schemeId':schemeId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/permissionscheme/{schemeId}/permission/{permissionId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionschemeSchemeIdPermissionPermissionIdGet operation.
     * @callback module:api/DefaultApi~permissionschemeSchemeIdPermissionPermissionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2019} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a permission grant. Permissions required: Permission to log in to Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} permissionId The ID of the permission grant (e.g., 10000).
     * @param {Number} schemeId The ID of the permission scheme (e.g., 10010).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:api/DefaultApi~permissionschemeSchemeIdPermissionPermissionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2019}
     */},{key:"permissionschemeSchemeIdPermissionPermissionIdGet",value:function permissionschemeSchemeIdPermissionPermissionIdGet(cloudid,permissionId,schemeId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPermissionPermissionIdGet");}// verify the required parameter 'permissionId' is set
if(permissionId===undefined||permissionId===null){throw new Error("Missing the required parameter 'permissionId' when calling permissionschemeSchemeIdPermissionPermissionIdGet");}// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPermissionPermissionIdGet");}var pathParams={'cloudid':cloudid,'permissionId':permissionId,'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse124["default"];return this.apiClient.callApi('/permissionscheme/{schemeId}/permission/{permissionId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionschemeSchemeIdPermissionPost operation.
     * @callback module:api/DefaultApi~permissionschemeSchemeIdPermissionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2019} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new permission grant in the given permission scheme. Permissions required: Administer Jira global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme in which to create a new permission grant.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:model/InlineObject40} opts.body 
     * @param {module:api/DefaultApi~permissionschemeSchemeIdPermissionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2019}
     */},{key:"permissionschemeSchemeIdPermissionPost",value:function permissionschemeSchemeIdPermissionPost(cloudid,schemeId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPermissionPost");}// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPermissionPost");}var pathParams={'cloudid':cloudid,'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse124["default"];return this.apiClient.callApi('/permissionscheme/{schemeId}/permission','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the permissionschemeSchemeIdPut operation.
     * @callback module:api/DefaultApi~permissionschemeSchemeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a permission scheme. Below are some important things to note when using this resource:
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme to update (e.g., 10000).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
     * @param {module:model/InlineObject39} opts.body 
     * @param {module:api/DefaultApi~permissionschemeSchemeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2018}
     */},{key:"permissionschemeSchemeIdPut",value:function permissionschemeSchemeIdPut(cloudid,schemeId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPut");}// verify the required parameter 'schemeId' is set
if(schemeId===undefined||schemeId===null){throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPut");}var pathParams={'cloudid':cloudid,'schemeId':schemeId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse123["default"];return this.apiClient.callApi('/permissionscheme/{schemeId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the priorityGet operation.
     * @callback module:api/DefaultApi~priorityGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20050InwardIssueFieldsPriority>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the list of all issue priorities.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~priorityGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20050InwardIssueFieldsPriority>}
     */},{key:"priorityGet",value:function priorityGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling priorityGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20050InwardIssueFieldsPriority["default"]];return this.apiClient.callApi('/priority','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the priorityIdGet operation.
     * @callback module:api/DefaultApi~priorityIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20067} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue priority.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue priority.
     * @param {module:api/DefaultApi~priorityIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20067}
     */},{key:"priorityIdGet",value:function priorityIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling priorityIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling priorityIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse73["default"];return this.apiClient.callApi('/priority/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectCategoryGet operation.
     * @callback module:api/DefaultApi~projectCategoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FilterIdPermissionProjectProjectCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project categories.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~projectCategoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FilterIdPermissionProjectProjectCategory>}
     */},{key:"projectCategoryGet",value:function projectCategoryGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_FilterIdPermissionProjectProjectCategory["default"]];return this.apiClient.callApi('/projectCategory','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectCategoryIdDelete operation.
     * @callback module:api/DefaultApi~projectCategoryIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a project category.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id ID of the project category to delete.
     * @param {module:api/DefaultApi~projectCategoryIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"projectCategoryIdDelete",value:function projectCategoryIdDelete(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling projectCategoryIdDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/projectCategory/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectCategoryIdGet operation.
     * @callback module:api/DefaultApi~projectCategoryIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a project category.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project category.
     * @param {module:api/DefaultApi~projectCategoryIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"projectCategoryIdGet",value:function projectCategoryIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling projectCategoryIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/projectCategory/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectCategoryIdPut operation.
     * @callback module:api/DefaultApi~projectCategoryIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a project category.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject48} opts.body 
     * @param {module:api/DefaultApi~projectCategoryIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"projectCategoryIdPut",value:function projectCategoryIdPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling projectCategoryIdPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/projectCategory/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectCategoryPost operation.
     * @callback module:api/DefaultApi~projectCategoryPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a project category.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject47} opts.body 
     * @param {module:api/DefaultApi~projectCategoryPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"projectCategoryPost",value:function projectCategoryPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/projectCategory','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectGet operation.
     * @callback module:api/DefaultApi~projectGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FilterIdPermissionProject>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all projects visible to the currently logged in user. Deprecated, use Get projects paginated that supports search and pagination. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, it returns all projects that are visible for anonymous users.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.recent Returns the most recently accessed projects for the current user. You may specify the number of results to return up to a maximum of 20. If no user is logged in, then the recently accessed projects will be returned based on the current HTTP session.
     * @param {module:api/DefaultApi~projectGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FilterIdPermissionProject>}
     */},{key:"projectGet",value:function projectGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand'],'recent':opts['recent']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_FilterIdPermissionProject["default"]];return this.apiClient.callApi('/project','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectPost operation.
     * @callback module:api/DefaultApi~projectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20110} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new project.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject41} opts.body 
     * @param {module:api/DefaultApi~projectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20110}
     */},{key:"projectPost",value:function projectPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse111["default"];return this.apiClient.callApi('/project','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatar2Post operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyAvatar2PostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20111} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Loads an avatar for a project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The length of each side of the crop region.
     * @param {Number} opts.x The X coordinate of the top-left corner of the crop region.
     * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region.
     * @param {module:api/DefaultApi~projectProjectIdOrKeyAvatar2PostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20111}
     */},{key:"projectProjectIdOrKeyAvatar2Post",value:function projectProjectIdOrKeyAvatar2Post(cloudid,projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatar2Post");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatar2Post");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={'size':opts['size'],'x':opts['x'],'y':opts['y']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse112["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/avatar2','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatarIdDelete operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyAvatarIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a custom avatar from a project. Note that system avatars cannot be deleted.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the avatar.
     * @param {String} projectIdOrKey The project ID or (case-sensitive) key.
     * @param {module:api/DefaultApi~projectProjectIdOrKeyAvatarIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"projectProjectIdOrKeyAvatarIdDelete",value:function projectProjectIdOrKeyAvatarIdDelete(cloudid,id,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatarIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyAvatarIdDelete");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatarIdDelete");}var pathParams={'cloudid':cloudid,'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/project/{projectIdOrKey}/avatar/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatarPut operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyAvatarPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the avatar displayed for a project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject43} opts.body 
     * @param {module:api/DefaultApi~projectProjectIdOrKeyAvatarPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"projectProjectIdOrKeyAvatarPut",value:function projectProjectIdOrKeyAvatarPut(cloudid,projectIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatarPut");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatarPut");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/project/{projectIdOrKey}/avatar','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatarsGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyAvatarsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20072} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project avatars, grouped by system and custom avatars.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {module:api/DefaultApi~projectProjectIdOrKeyAvatarsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20072}
     */},{key:"projectProjectIdOrKeyAvatarsGet",value:function projectProjectIdOrKeyAvatarsGet(cloudid,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatarsGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatarsGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse79["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/avatars','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyComponentGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyComponentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20073} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a paginated representation of all components existing in a single project. See the Get project components resource if you want to get a full list of versions without pagination.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of components to return per page. Max 50.
     * @param {module:model/String} opts.orderBy Order the results by a particular field:
     * @param {String} opts.query Filter the results using a literal string. Components with a matching name or description are returned (case insensitive).
     * @param {Number} opts.startAt The starting index of the returned list of components. The base index is 0.
     * @param {module:api/DefaultApi~projectProjectIdOrKeyComponentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20073}
     */},{key:"projectProjectIdOrKeyComponentGet",value:function projectProjectIdOrKeyComponentGet(cloudid,projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyComponentGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyComponentGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'query':opts['query'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse80["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/component','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyComponentsGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyComponentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20074>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all components existing in a single project. See the Get project components paginated resource if you want to get a full list of components with pagination.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectIdOrKeyComponentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20074>}
     */},{key:"projectProjectIdOrKeyComponentsGet",value:function projectProjectIdOrKeyComponentsGet(cloudid,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyComponentsGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyComponentsGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse81["default"]];return this.apiClient.callApi('/project/{projectIdOrKey}/components','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyDelete operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an existing project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectIdOrKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"projectProjectIdOrKeyDelete",value:function projectProjectIdOrKeyDelete(cloudid,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyDelete");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyDelete");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/project/{projectIdOrKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20071} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the project details for the specified project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
     * @param {module:api/DefaultApi~projectProjectIdOrKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20071}
     */},{key:"projectProjectIdOrKeyGet",value:function projectProjectIdOrKeyGet(cloudid,projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse78["default"];return this.apiClient.callApi('/project/{projectIdOrKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project property keys for the project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectIdOrKeyPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"projectProjectIdOrKeyPropertiesGet",value:function projectProjectIdOrKeyPropertiesGet(cloudid,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes the property from the project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The project property key. Use Get project property keys to get a list of all project property keys.
     * @param {module:api/DefaultApi~projectProjectIdOrKeyPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"projectProjectIdOrKeyPropertiesPropertyKeyDelete",value:function projectProjectIdOrKeyPropertiesPropertyKeyDelete(cloudid,projectIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesPropertyKeyDelete");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyDelete");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/project/{projectIdOrKey}/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of the project property.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The project property key. Use Get project property keys to get a list of all project property keys.
     * @param {module:api/DefaultApi~projectProjectIdOrKeyPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"projectProjectIdOrKeyPropertiesPropertyKeyGet",value:function projectProjectIdOrKeyPropertiesPropertyKeyGet(cloudid,projectIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesPropertyKeyGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of the project property. You can use project properties to store custom data against the project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The key of the project property. The maximum length is 255 bytes.
     * @param {module:api/DefaultApi~projectProjectIdOrKeyPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"projectProjectIdOrKeyPropertiesPropertyKeyPut",value:function projectProjectIdOrKeyPropertiesPropertyKeyPut(cloudid,projectIdOrKey,propertyKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey,'propertyKey':propertyKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/project/{projectIdOrKey}/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyPut operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20071} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates the project details of an existing project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
     * @param {module:model/InlineObject42} opts.body 
     * @param {module:api/DefaultApi~projectProjectIdOrKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20071}
     */},{key:"projectProjectIdOrKeyPut",value:function projectProjectIdOrKeyPut(cloudid,projectIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPut");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPut");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse78["default"];return this.apiClient.callApi('/project/{projectIdOrKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyRoleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20075} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of project roles for the project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectIdOrKeyRoleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20075}
     */},{key:"projectProjectIdOrKeyRoleGet",value:function projectProjectIdOrKeyRoleGet(cloudid,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse82["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/role','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleIdDelete operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyRoleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes actors from a project role for the project.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {String} opts.group The name of the group to remove from the project role.
     * @param {String} opts.user The user account ID of the user to remove from the project role.
     * @param {module:api/DefaultApi~projectProjectIdOrKeyRoleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"projectProjectIdOrKeyRoleIdDelete",value:function projectProjectIdOrKeyRoleIdDelete(cloudid,id,projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyRoleIdDelete");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleIdDelete");}var pathParams={'cloudid':cloudid,'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={'group':opts['group'],'user':opts['user']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/project/{projectIdOrKey}/role/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleIdGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyRoleIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the project role's details and actors associated with the project. The list of actors is sorted by display name.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectIdOrKeyRoleIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"projectProjectIdOrKeyRoleIdGet",value:function projectProjectIdOrKeyRoleIdGet(cloudid,id,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyRoleIdGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleIdGet");}var pathParams={'cloudid':cloudid,'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/role/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleIdPost operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyRoleIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds additional actors to a project role for the project.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject45} opts.body 
     * @param {module:api/DefaultApi~projectProjectIdOrKeyRoleIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"projectProjectIdOrKeyRoleIdPost",value:function projectProjectIdOrKeyRoleIdPost(cloudid,id,projectIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleIdPost");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyRoleIdPost");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleIdPost");}var pathParams={'cloudid':cloudid,'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/project/{projectIdOrKey}/role/{id}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleIdPut operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyRoleIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Associates actors with the project role for the project, replacing all existing actors.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject44} opts.body 
     * @param {module:api/DefaultApi~projectProjectIdOrKeyRoleIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"projectProjectIdOrKeyRoleIdPut",value:function projectProjectIdOrKeyRoleIdPut(cloudid,id,projectIdOrKey,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyRoleIdPut");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleIdPut");}var pathParams={'cloudid':cloudid,'id':id,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/role/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyRoledetailsGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyRoledetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FilterIdPermissionRole>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project roles and the details for each role. Note that the list of project roles is common to all projects.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectIdOrKeyRoledetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FilterIdPermissionRole>}
     */},{key:"projectProjectIdOrKeyRoledetailsGet",value:function projectProjectIdOrKeyRoledetailsGet(cloudid,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoledetailsGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoledetailsGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_FilterIdPermissionRole["default"]];return this.apiClient.callApi('/project/{projectIdOrKey}/roledetails','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyStatusesGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20077>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectIdOrKeyStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20077>}
     */},{key:"projectProjectIdOrKeyStatusesGet",value:function projectProjectIdOrKeyStatusesGet(cloudid,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyStatusesGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyStatusesGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse84["default"]];return this.apiClient.callApi('/project/{projectIdOrKey}/statuses','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyTypeNewProjectTypeKeyPut operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyTypeNewProjectTypeKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20071} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates the project type.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} newProjectTypeKey The key of the new project type.
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectIdOrKeyTypeNewProjectTypeKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20071}
     */},{key:"projectProjectIdOrKeyTypeNewProjectTypeKeyPut",value:function projectProjectIdOrKeyTypeNewProjectTypeKeyPut(cloudid,newProjectTypeKey,projectIdOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyTypeNewProjectTypeKeyPut");}// verify the required parameter 'newProjectTypeKey' is set
if(newProjectTypeKey===undefined||newProjectTypeKey===null){throw new Error("Missing the required parameter 'newProjectTypeKey' when calling projectProjectIdOrKeyTypeNewProjectTypeKeyPut");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyTypeNewProjectTypeKeyPut");}var pathParams={'cloudid':cloudid,'newProjectTypeKey':newProjectTypeKey,'projectIdOrKey':projectIdOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse78["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/type/{newProjectTypeKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyVersionGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyVersionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20078} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a paginated representation of all versions existing in a single project. See the Get project versions resource if you want to get a full list of versions without pagination.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.maxResults The maximum number of versions to return per page. Max 50.
     * @param {module:model/String} opts.orderBy Order the results by a particular field:
     * @param {String} opts.query Filter the results using a literal string. Versions with matching name or description are returned (case insensitive).
     * @param {Number} opts.startAt The starting index of the returned list of versions (page offset). The base index is 0.
     * @param {String} opts.status A comma separated string used to filter the results by version status.
     * @param {module:api/DefaultApi~projectProjectIdOrKeyVersionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20078}
     */},{key:"projectProjectIdOrKeyVersionGet",value:function projectProjectIdOrKeyVersionGet(cloudid,projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyVersionGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyVersionGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={'expand':opts['expand'],'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'query':opts['query'],'startAt':opts['startAt'],'status':opts['status']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse85["default"];return this.apiClient.callApi('/project/{projectIdOrKey}/version','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectIdOrKeyVersionsGet operation.
     * @callback module:api/DefaultApi~projectProjectIdOrKeyVersionsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20078Values>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all versions existing in a single project. The response is not paginated. Use Get project versions paginated if you want to get the versions in a project with pagination.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~projectProjectIdOrKeyVersionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20078Values>}
     */},{key:"projectProjectIdOrKeyVersionsGet",value:function projectProjectIdOrKeyVersionsGet(cloudid,projectIdOrKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyVersionsGet");}// verify the required parameter 'projectIdOrKey' is set
if(projectIdOrKey===undefined||projectIdOrKey===null){throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyVersionsGet");}var pathParams={'cloudid':cloudid,'projectIdOrKey':projectIdOrKey};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20078Values["default"]];return this.apiClient.callApi('/project/{projectIdOrKey}/versions','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectKeyOrIdIssuesecuritylevelschemeGet operation.
     * @callback module:api/DefaultApi~projectProjectKeyOrIdIssuesecuritylevelschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20053} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the issue security scheme associated with the project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectKeyOrIdIssuesecuritylevelschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20053}
     */},{key:"projectProjectKeyOrIdIssuesecuritylevelschemeGet",value:function projectProjectKeyOrIdIssuesecuritylevelschemeGet(cloudid,projectKeyOrId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdIssuesecuritylevelschemeGet");}// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdIssuesecuritylevelschemeGet");}var pathParams={'cloudid':cloudid,'projectKeyOrId':projectKeyOrId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse58["default"];return this.apiClient.callApi('/project/{projectKeyOrId}/issuesecuritylevelscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectKeyOrIdNotificationschemeGet operation.
     * @callback module:api/DefaultApi~projectProjectKeyOrIdNotificationschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20062} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets a notification scheme associated with the project. See the Get notification scheme resource for more information about notification schemes.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~projectProjectKeyOrIdNotificationschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20062}
     */},{key:"projectProjectKeyOrIdNotificationschemeGet",value:function projectProjectKeyOrIdNotificationschemeGet(cloudid,projectKeyOrId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdNotificationschemeGet");}// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdNotificationschemeGet");}var pathParams={'cloudid':cloudid,'projectKeyOrId':projectKeyOrId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse68["default"];return this.apiClient.callApi('/project/{projectKeyOrId}/notificationscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectKeyOrIdPermissionschemeGet operation.
     * @callback module:api/DefaultApi~projectProjectKeyOrIdPermissionschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20079} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets the permission scheme associated with the project.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
     * @param {module:api/DefaultApi~projectProjectKeyOrIdPermissionschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20079}
     */},{key:"projectProjectKeyOrIdPermissionschemeGet",value:function projectProjectKeyOrIdPermissionschemeGet(cloudid,projectKeyOrId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdPermissionschemeGet");}// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdPermissionschemeGet");}var pathParams={'cloudid':cloudid,'projectKeyOrId':projectKeyOrId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse86["default"];return this.apiClient.callApi('/project/{projectKeyOrId}/permissionscheme','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectKeyOrIdPermissionschemePut operation.
     * @callback module:api/DefaultApi~projectProjectKeyOrIdPermissionschemePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20079} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Associates a permission scheme with a particular project. See Managing project permissions for more information about permission schemes.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
     * @param {module:model/InlineObject46} opts.body 
     * @param {module:api/DefaultApi~projectProjectKeyOrIdPermissionschemePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20079}
     */},{key:"projectProjectKeyOrIdPermissionschemePut",value:function projectProjectKeyOrIdPermissionschemePut(cloudid,projectKeyOrId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdPermissionschemePut");}// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdPermissionschemePut");}var pathParams={'cloudid':cloudid,'projectKeyOrId':projectKeyOrId};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse86["default"];return this.apiClient.callApi('/project/{projectKeyOrId}/permissionscheme','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectProjectKeyOrIdSecuritylevelGet operation.
     * @callback module:api/DefaultApi~projectProjectKeyOrIdSecuritylevelGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20080} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all issue security levels for the project that the currently authenticated user has access to. If the user does not have permission to see an issue security level, then that level is not returned. If the user lacks the Set Issue Security permission, then an empty list is returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {module:api/DefaultApi~projectProjectKeyOrIdSecuritylevelGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20080}
     */},{key:"projectProjectKeyOrIdSecuritylevelGet",value:function projectProjectKeyOrIdSecuritylevelGet(cloudid,projectKeyOrId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdSecuritylevelGet");}// verify the required parameter 'projectKeyOrId' is set
if(projectKeyOrId===undefined||projectKeyOrId===null){throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdSecuritylevelGet");}var pathParams={'cloudid':cloudid,'projectKeyOrId':projectKeyOrId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse88["default"];return this.apiClient.callApi('/project/{projectKeyOrId}/securitylevel','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectSearchGet operation.
     * @callback module:api/DefaultApi~projectSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20068} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns projects visible to the currently logged in user. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, then all projects visible to anonymous users are returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.action Filter results by projects for which the calling user has permission to perform the given action. The view action corresponds with the Browse projects project permission, and the edit action corresponds with Administer project permissions.
     * @param {Number} opts.categoryId The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
     * @param {module:model/String} opts.expand Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
     * @param {Number} opts.maxResults The maximum number of items to return per page. Max 50.
     * @param {module:model/String} opts.orderBy Order the results by a particular field. If the orderBy field is not set, then projects are listed in ascending order by project key:
     * @param {String} opts.query Filter the results using a literal string. Projects with a matching key or name are returned (case insensitive).
     * @param {Number} opts.startAt The starting index of the first item returned in the page of results (page offset). The base index is 0.
     * @param {String} opts.typeKey Orders results by the project type. This parameter accepts multiple values separated by a comma. Valid values are business, service_desk, and software.
     * @param {module:api/DefaultApi~projectSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20068}
     */},{key:"projectSearchGet",value:function projectSearchGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectSearchGet");}var pathParams={'cloudid':cloudid};var queryParams={'action':opts['action'],'categoryId':opts['categoryId'],'expand':opts['expand'],'maxResults':opts['maxResults'],'orderBy':opts['orderBy'],'query':opts['query'],'startAt':opts['startAt'],'typeKey':opts['typeKey']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse74["default"];return this.apiClient.callApi('/project/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectTypeGet operation.
     * @callback module:api/DefaultApi~projectTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20069>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all project types, whether or not the instance has a valid license for each type.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~projectTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20069>}
     */},{key:"projectTypeGet",value:function projectTypeGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectTypeGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse75["default"]];return this.apiClient.callApi('/project/type','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectTypeProjectTypeKeyAccessibleGet operation.
     * @callback module:api/DefaultApi~projectTypeProjectTypeKeyAccessibleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20070} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a project type if it is accessible to the logged in user.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectTypeKey The key of the project type.
     * @param {module:api/DefaultApi~projectTypeProjectTypeKeyAccessibleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20070}
     */},{key:"projectTypeProjectTypeKeyAccessibleGet",value:function projectTypeProjectTypeKeyAccessibleGet(cloudid,projectTypeKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectTypeProjectTypeKeyAccessibleGet");}// verify the required parameter 'projectTypeKey' is set
if(projectTypeKey===undefined||projectTypeKey===null){throw new Error("Missing the required parameter 'projectTypeKey' when calling projectTypeProjectTypeKeyAccessibleGet");}var pathParams={'cloudid':cloudid,'projectTypeKey':projectTypeKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse77["default"];return this.apiClient.callApi('/project/type/{projectTypeKey}/accessible','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectTypeProjectTypeKeyGet operation.
     * @callback module:api/DefaultApi~projectTypeProjectTypeKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20070} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a project type.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectTypeKey The key of the project type.
     * @param {module:api/DefaultApi~projectTypeProjectTypeKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20070}
     */},{key:"projectTypeProjectTypeKeyGet",value:function projectTypeProjectTypeKeyGet(cloudid,projectTypeKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectTypeProjectTypeKeyGet");}// verify the required parameter 'projectTypeKey' is set
if(projectTypeKey===undefined||projectTypeKey===null){throw new Error("Missing the required parameter 'projectTypeKey' when calling projectTypeProjectTypeKeyGet");}var pathParams={'cloudid':cloudid,'projectTypeKey':projectTypeKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse77["default"];return this.apiClient.callApi('/project/type/{projectTypeKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectvalidateKeyGet operation.
     * @callback module:api/DefaultApi~projectvalidateKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20081} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Validates a project key by confirming the key is a valid string and not in use.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The project key.
     * @param {module:api/DefaultApi~projectvalidateKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20081}
     */},{key:"projectvalidateKeyGet",value:function projectvalidateKeyGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectvalidateKeyGet");}var pathParams={'cloudid':cloudid};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse89["default"];return this.apiClient.callApi('/projectvalidate/key','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectvalidateValidProjectKeyGet operation.
     * @callback module:api/DefaultApi~projectvalidateValidProjectKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20082} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The project key.
     * @param {module:api/DefaultApi~projectvalidateValidProjectKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20082}
     */},{key:"projectvalidateValidProjectKeyGet",value:function projectvalidateValidProjectKeyGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectvalidateValidProjectKeyGet");}var pathParams={'cloudid':cloudid};var queryParams={'key':opts['key']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse90["default"];return this.apiClient.callApi('/projectvalidate/validProjectKey','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the projectvalidateValidProjectNameGet operation.
     * @callback module:api/DefaultApi~projectvalidateValidProjectNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20083} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The project name.
     * @param {module:api/DefaultApi~projectvalidateValidProjectNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20083}
     */},{key:"projectvalidateValidProjectNameGet",value:function projectvalidateValidProjectNameGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling projectvalidateValidProjectNameGet");}var pathParams={'cloudid':cloudid};var queryParams={'name':opts['name']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse91["default"];return this.apiClient.callApi('/projectvalidate/validProjectName','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the resolutionGet operation.
     * @callback module:api/DefaultApi~resolutionGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FilterIdPermissionProjectProjectCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of all issue resolution values.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~resolutionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FilterIdPermissionProjectProjectCategory>}
     */},{key:"resolutionGet",value:function resolutionGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling resolutionGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_FilterIdPermissionProjectProjectCategory["default"]];return this.apiClient.callApi('/resolution','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the resolutionIdGet operation.
     * @callback module:api/DefaultApi~resolutionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns an issue resolution value.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue resolution value.
     * @param {module:api/DefaultApi~resolutionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"resolutionIdGet",value:function resolutionIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling resolutionIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling resolutionIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/resolution/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the roleGet operation.
     * @callback module:api/DefaultApi~roleGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FilterIdPermissionRole>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets a list of all project roles, complete with project role details and default actors.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~roleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FilterIdPermissionRole>}
     */},{key:"roleGet",value:function roleGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling roleGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_FilterIdPermissionRole["default"]];return this.apiClient.callApi('/role','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the roleIdActorsDelete operation.
     * @callback module:api/DefaultApi~roleIdActorsDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20084} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes default actors from the project role. You may remove either a group or user, but you cannot remove a group and a user in the same request.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.group The group name of the group to be removed as a default actor.
     * @param {String} opts.user The user account ID of the user to remove as a default actor.
     * @param {module:api/DefaultApi~roleIdActorsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20084}
     */},{key:"roleIdActorsDelete",value:function roleIdActorsDelete(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling roleIdActorsDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling roleIdActorsDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'group':opts['group'],'user':opts['user']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse92["default"];return this.apiClient.callApi('/role/{id}/actors','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the roleIdActorsGet operation.
     * @callback module:api/DefaultApi~roleIdActorsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20084} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default actors for the project role.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {module:api/DefaultApi~roleIdActorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20084}
     */},{key:"roleIdActorsGet",value:function roleIdActorsGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling roleIdActorsGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling roleIdActorsGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse92["default"];return this.apiClient.callApi('/role/{id}/actors','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the roleIdActorsPost operation.
     * @callback module:api/DefaultApi~roleIdActorsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20084} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds default actors to the given role. You may add either groups or users, but you cannot add groups and users in the same request.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject52} opts.body 
     * @param {module:api/DefaultApi~roleIdActorsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20084}
     */},{key:"roleIdActorsPost",value:function roleIdActorsPost(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling roleIdActorsPost");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling roleIdActorsPost");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse92["default"];return this.apiClient.callApi('/role/{id}/actors','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the roleIdDelete operation.
     * @callback module:api/DefaultApi~roleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role to delete. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.swap The ID of the project role that will replace the one being deleted.
     * @param {module:api/DefaultApi~roleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"roleIdDelete",value:function roleIdDelete(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling roleIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling roleIdDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'swap':opts['swap']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/role/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the roleIdGet operation.
     * @callback module:api/DefaultApi~roleIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {module:api/DefaultApi~roleIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"roleIdGet",value:function roleIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling roleIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling roleIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/role/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the roleIdPost operation.
     * @callback module:api/DefaultApi~roleIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update either the project role's name or its description.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject51} opts.body 
     * @param {module:api/DefaultApi~roleIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"roleIdPost",value:function roleIdPost(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling roleIdPost");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling roleIdPost");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/role/{id}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the roleIdPut operation.
     * @callback module:api/DefaultApi~roleIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20076} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Update the project role's name and description. You must include both a name and a description in the request.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use Get all project roles to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject50} opts.body 
     * @param {module:api/DefaultApi~roleIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20076}
     */},{key:"roleIdPut",value:function roleIdPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling roleIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling roleIdPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse83["default"];return this.apiClient.callApi('/role/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the rolePost operation.
     * @callback module:api/DefaultApi~rolePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20079} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a new project role with no default actors. You can use the Add default actors to project role the project method to add default actors to the project role after creating it.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject49} opts.body 
     * @param {module:api/DefaultApi~rolePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20079}
     */},{key:"rolePost",value:function rolePost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling rolePost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse86["default"];return this.apiClient.callApi('/role','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensAddToDefaultFieldIdPost operation.
     * @callback module:api/DefaultApi~screensAddToDefaultFieldIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a field to the default tab of the default screen.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldId The ID of the field.
     * @param {module:api/DefaultApi~screensAddToDefaultFieldIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"screensAddToDefaultFieldIdPost",value:function screensAddToDefaultFieldIdPost(cloudid,fieldId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensAddToDefaultFieldIdPost");}// verify the required parameter 'fieldId' is set
if(fieldId===undefined||fieldId===null){throw new Error("Missing the required parameter 'fieldId' when calling screensAddToDefaultFieldIdPost");}var pathParams={'cloudid':cloudid,'fieldId':fieldId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/screens/addToDefault/{fieldId}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensGet operation.
     * @callback module:api/DefaultApi~screensGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all screens.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 100.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~screensGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"screensGet",value:function screensGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensGet");}var pathParams={'cloudid':cloudid};var queryParams={'maxResults':opts['maxResults'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/screens','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdAvailableFieldsGet operation.
     * @callback module:api/DefaultApi~screensScreenIdAvailableFieldsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the fields that can be added to a tab on a screen.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {module:api/DefaultApi~screensScreenIdAvailableFieldsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"screensScreenIdAvailableFieldsGet",value:function screensScreenIdAvailableFieldsGet(cloudid,screenId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdAvailableFieldsGet");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdAvailableFieldsGet");}var pathParams={'cloudid':cloudid,'screenId':screenId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/screens/{screenId}/availableFields','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdTabsGet operation.
     * @callback module:api/DefaultApi~screensScreenIdTabsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the list of tabs for a screen.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectKey The key of the project.
     * @param {module:api/DefaultApi~screensScreenIdTabsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"screensScreenIdTabsGet",value:function screensScreenIdTabsGet(cloudid,screenId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsGet");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsGet");}var pathParams={'cloudid':cloudid,'screenId':screenId};var queryParams={'projectKey':opts['projectKey']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/screens/{screenId}/tabs','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdTabsPost operation.
     * @callback module:api/DefaultApi~screensScreenIdTabsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20085} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a tab for a screen.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject53} opts.body 
     * @param {module:api/DefaultApi~screensScreenIdTabsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20085}
     */},{key:"screensScreenIdTabsPost",value:function screensScreenIdTabsPost(cloudid,screenId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsPost");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsPost");}var pathParams={'cloudid':cloudid,'screenId':screenId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse93["default"];return this.apiClient.callApi('/screens/{screenId}/tabs','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdTabsTabIdDelete operation.
     * @callback module:api/DefaultApi~screensScreenIdTabsTabIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a screen tab.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {module:api/DefaultApi~screensScreenIdTabsTabIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"screensScreenIdTabsTabIdDelete",value:function screensScreenIdTabsTabIdDelete(cloudid,screenId,tabId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdDelete");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdDelete");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdDelete");}var pathParams={'cloudid':cloudid,'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdTabsTabIdFieldsGet operation.
     * @callback module:api/DefaultApi~screensScreenIdTabsTabIdFieldsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all fields for a screen tab.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectKey The key of the project.
     * @param {module:api/DefaultApi~screensScreenIdTabsTabIdFieldsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"screensScreenIdTabsTabIdFieldsGet",value:function screensScreenIdTabsTabIdFieldsGet(cloudid,screenId,tabId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdFieldsGet");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdFieldsGet");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdFieldsGet");}var pathParams={'cloudid':cloudid,'screenId':screenId,'tabId':tabId};var queryParams={'projectKey':opts['projectKey']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/fields','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdTabsTabIdFieldsIdDelete operation.
     * @callback module:api/DefaultApi~screensScreenIdTabsTabIdFieldsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Removes a field from a screen tab.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the field.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {module:api/DefaultApi~screensScreenIdTabsTabIdFieldsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"screensScreenIdTabsTabIdFieldsIdDelete",value:function screensScreenIdTabsTabIdFieldsIdDelete(cloudid,id,screenId,tabId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdFieldsIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling screensScreenIdTabsTabIdFieldsIdDelete");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdFieldsIdDelete");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdFieldsIdDelete");}var pathParams={'cloudid':cloudid,'id':id,'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/fields/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdTabsTabIdFieldsIdMovePost operation.
     * @callback module:api/DefaultApi~screensScreenIdTabsTabIdFieldsIdMovePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Moves a screen tab field.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the field.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject56} opts.body 
     * @param {module:api/DefaultApi~screensScreenIdTabsTabIdFieldsIdMovePostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"screensScreenIdTabsTabIdFieldsIdMovePost",value:function screensScreenIdTabsTabIdFieldsIdMovePost(cloudid,id,screenId,tabId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdFieldsIdMovePost");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling screensScreenIdTabsTabIdFieldsIdMovePost");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdFieldsIdMovePost");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdFieldsIdMovePost");}var pathParams={'cloudid':cloudid,'id':id,'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/fields/{id}/move','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdTabsTabIdFieldsPost operation.
     * @callback module:api/DefaultApi~screensScreenIdTabsTabIdFieldsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20086} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a field to a screen tab.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject55} opts.body 
     * @param {module:api/DefaultApi~screensScreenIdTabsTabIdFieldsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20086}
     */},{key:"screensScreenIdTabsTabIdFieldsPost",value:function screensScreenIdTabsTabIdFieldsPost(cloudid,screenId,tabId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdFieldsPost");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdFieldsPost");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdFieldsPost");}var pathParams={'cloudid':cloudid,'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse94["default"];return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/fields','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdTabsTabIdMovePosPost operation.
     * @callback module:api/DefaultApi~screensScreenIdTabsTabIdMovePosPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Moves a screen tab.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} pos The position of tab. The base index is 0.
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {module:api/DefaultApi~screensScreenIdTabsTabIdMovePosPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"screensScreenIdTabsTabIdMovePosPost",value:function screensScreenIdTabsTabIdMovePosPost(cloudid,pos,screenId,tabId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdMovePosPost");}// verify the required parameter 'pos' is set
if(pos===undefined||pos===null){throw new Error("Missing the required parameter 'pos' when calling screensScreenIdTabsTabIdMovePosPost");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdMovePosPost");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdMovePosPost");}var pathParams={'cloudid':cloudid,'pos':pos,'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/move/{pos}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the screensScreenIdTabsTabIdPut operation.
     * @callback module:api/DefaultApi~screensScreenIdTabsTabIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20085} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates the name of a screen tab.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject54} opts.body 
     * @param {module:api/DefaultApi~screensScreenIdTabsTabIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20085}
     */},{key:"screensScreenIdTabsTabIdPut",value:function screensScreenIdTabsTabIdPut(cloudid,screenId,tabId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdPut");}// verify the required parameter 'screenId' is set
if(screenId===undefined||screenId===null){throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdPut");}// verify the required parameter 'tabId' is set
if(tabId===undefined||tabId===null){throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdPut");}var pathParams={'cloudid':cloudid,'screenId':screenId,'tabId':tabId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse93["default"];return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the searchGet operation.
     * @callback module:api/DefaultApi~searchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20087} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Searches for issues using JQL. Permissions required: Permission to access Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma:
     * @param {Array.<module:model/String>} opts.fields A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values:
     * @param {Boolean} opts.fieldsByKeys Reference fields by their key (rather than ID).
     * @param {String} opts.jql The JQL that defines the search. If no JQL expression is provided, all issues are returned. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 100.
     * @param {Array.<String>} opts.properties A comma-separated list of up to 5 issue properties to include in the results.
     * @param {Number} opts.startAt The index of the first item to return in the page of results (page offset).
     * @param {module:model/String} opts.validateQuery Determines how to validate the JQL query and treat the validation results. Supported values are:
     * @param {module:api/DefaultApi~searchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20087}
     */},{key:"searchGet",value:function searchGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling searchGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand'],'fields':this.apiClient.buildCollectionParam(opts['fields'],'csv'),'fieldsByKeys':opts['fieldsByKeys'],'jql':opts['jql'],'maxResults':opts['maxResults'],'properties':this.apiClient.buildCollectionParam(opts['properties'],'csv'),'startAt':opts['startAt'],'validateQuery':opts['validateQuery']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse95["default"];return this.apiClient.callApi('/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the searchPost operation.
     * @callback module:api/DefaultApi~searchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20087} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Searches for issues using JQL. Permissions required: Permission to access Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject57} opts.body 
     * @param {module:api/DefaultApi~searchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20087}
     */},{key:"searchPost",value:function searchPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling searchPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse95["default"];return this.apiClient.callApi('/search','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the securitylevelIdGet operation.
     * @callback module:api/DefaultApi~securitylevelIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20112} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details of an issue security level.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue security level.
     * @param {module:api/DefaultApi~securitylevelIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20112}
     */},{key:"securitylevelIdGet",value:function securitylevelIdGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling securitylevelIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling securitylevelIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse113["default"];return this.apiClient.callApi('/securitylevel/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the serverInfoGet operation.
     * @callback module:api/DefaultApi~serverInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20088} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns information about the Jira instance.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~serverInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20088}
     */},{key:"serverInfoGet",value:function serverInfoGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling serverInfoGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse96["default"];return this.apiClient.callApi('/serverInfo','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the settingsColumnsGet operation.
     * @callback module:api/DefaultApi~settingsColumnsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20030>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default issue navigator columns.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~settingsColumnsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20030>}
     */},{key:"settingsColumnsGet",value:function settingsColumnsGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling settingsColumnsGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse33["default"]];return this.apiClient.callApi('/settings/columns','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the settingsColumnsPut operation.
     * @callback module:api/DefaultApi~settingsColumnsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default issue navigator columns.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~settingsColumnsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"settingsColumnsPut",value:function settingsColumnsPut(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling settingsColumnsPut");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/settings/columns','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the statusGet operation.
     * @callback module:api/DefaultApi~statusGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20045To>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of all statuses associated with workflows.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~statusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20045To>}
     */},{key:"statusGet",value:function statusGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling statusGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20045To["default"]];return this.apiClient.callApi('/status','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the statusIdOrNameGet operation.
     * @callback module:api/DefaultApi~statusIdOrNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20089} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a status. The status must be associated with a workflow to be returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} idOrName The ID or name of the status.
     * @param {module:api/DefaultApi~statusIdOrNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20089}
     */},{key:"statusIdOrNameGet",value:function statusIdOrNameGet(cloudid,idOrName,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling statusIdOrNameGet");}// verify the required parameter 'idOrName' is set
if(idOrName===undefined||idOrName===null){throw new Error("Missing the required parameter 'idOrName' when calling statusIdOrNameGet");}var pathParams={'cloudid':cloudid,'idOrName':idOrName};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse97["default"];return this.apiClient.callApi('/status/{idOrName}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the statuscategoryGet operation.
     * @callback module:api/DefaultApi~statuscategoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20045ToStatusCategory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of all status categories.
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DefaultApi~statuscategoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20045ToStatusCategory>}
     */},{key:"statuscategoryGet",value:function statuscategoryGet(cloudid,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling statuscategoryGet");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse20045ToStatusCategory["default"]];return this.apiClient.callApi('/statuscategory','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the statuscategoryIdOrKeyGet operation.
     * @callback module:api/DefaultApi~statuscategoryIdOrKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20090} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a status category. Status categories provided a mechanism for categorizing statuses.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} idOrKey The ID or key of the status category.
     * @param {module:api/DefaultApi~statuscategoryIdOrKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20090}
     */},{key:"statuscategoryIdOrKeyGet",value:function statuscategoryIdOrKeyGet(cloudid,idOrKey,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling statuscategoryIdOrKeyGet");}// verify the required parameter 'idOrKey' is set
if(idOrKey===undefined||idOrKey===null){throw new Error("Missing the required parameter 'idOrKey' when calling statuscategoryIdOrKeyGet");}var pathParams={'cloudid':cloudid,'idOrKey':idOrKey};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse99["default"];return this.apiClient.callApi('/statuscategory/{idOrKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the taskTaskIdCancelPost operation.
     * @callback module:api/DefaultApi~taskTaskIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Cancels a task.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} taskId The ID of the task.
     * @param {module:api/DefaultApi~taskTaskIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"taskTaskIdCancelPost",value:function taskTaskIdCancelPost(cloudid,taskId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling taskTaskIdCancelPost");}// verify the required parameter 'taskId' is set
if(taskId===undefined||taskId===null){throw new Error("Missing the required parameter 'taskId' when calling taskTaskIdCancelPost");}var pathParams={'cloudid':cloudid,'taskId':taskId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/task/{taskId}/cancel','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the taskTaskIdGet operation.
     * @callback module:api/DefaultApi~taskTaskIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20091} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the status of a long-running asynchronous task.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} taskId The ID of the task.
     * @param {module:api/DefaultApi~taskTaskIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20091}
     */},{key:"taskTaskIdGet",value:function taskTaskIdGet(cloudid,taskId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling taskTaskIdGet");}// verify the required parameter 'taskId' is set
if(taskId===undefined||taskId===null){throw new Error("Missing the required parameter 'taskId' when calling taskTaskIdGet");}var pathParams={'cloudid':cloudid,'taskId':taskId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse100["default"];return this.apiClient.callApi('/task/{taskId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the universalAvatarTypeTypeOwnerEntityIdGet operation.
     * @callback module:api/DefaultApi~universalAvatarTypeTypeOwnerEntityIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20072} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the system and custom avatars for a project or issue type.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} entityId The ID of the entity item.
     * @param {String} type The type of the entity. Valid values are project and issuetype.
     * @param {module:api/DefaultApi~universalAvatarTypeTypeOwnerEntityIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20072}
     */},{key:"universalAvatarTypeTypeOwnerEntityIdGet",value:function universalAvatarTypeTypeOwnerEntityIdGet(cloudid,entityId,type,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling universalAvatarTypeTypeOwnerEntityIdGet");}// verify the required parameter 'entityId' is set
if(entityId===undefined||entityId===null){throw new Error("Missing the required parameter 'entityId' when calling universalAvatarTypeTypeOwnerEntityIdGet");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new Error("Missing the required parameter 'type' when calling universalAvatarTypeTypeOwnerEntityIdGet");}var pathParams={'cloudid':cloudid,'entityId':entityId,'type':type};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse79["default"];return this.apiClient.callApi('/universal_avatar/type/{type}/owner/{entityId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the universalAvatarTypeTypeOwnerEntityIdPost operation.
     * @callback module:api/DefaultApi~universalAvatarTypeTypeOwnerEntityIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Loads a custom avatar for a project or issue type.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} entityId The ID of the entity item.
     * @param {String} type The type of the entity. Valid values are project and issuetype.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The length of each side of the crop region.
     * @param {Number} opts.x The X coordinate of the top-left corner of the crop region.
     * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region.
     * @param {module:api/DefaultApi~universalAvatarTypeTypeOwnerEntityIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2017}
     */},{key:"universalAvatarTypeTypeOwnerEntityIdPost",value:function universalAvatarTypeTypeOwnerEntityIdPost(cloudid,entityId,type,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling universalAvatarTypeTypeOwnerEntityIdPost");}// verify the required parameter 'entityId' is set
if(entityId===undefined||entityId===null){throw new Error("Missing the required parameter 'entityId' when calling universalAvatarTypeTypeOwnerEntityIdPost");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new Error("Missing the required parameter 'type' when calling universalAvatarTypeTypeOwnerEntityIdPost");}var pathParams={'cloudid':cloudid,'entityId':entityId,'type':type};var queryParams={'size':opts['size'],'x':opts['x'],'y':opts['y']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse122["default"];return this.apiClient.callApi('/universal_avatar/type/{type}/owner/{entityId}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete operation.
     * @callback module:api/DefaultApi~universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes an avatar from a project or issue type.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the avatar.
     * @param {String} owningObjectId The ID of the entity item.
     * @param {String} type The type of the entity. Valid values are project and issuetype.
     * @param {module:api/DefaultApi~universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete",value:function universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(cloudid,id,owningObjectId,type,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");}// verify the required parameter 'owningObjectId' is set
if(owningObjectId===undefined||owningObjectId===null){throw new Error("Missing the required parameter 'owningObjectId' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");}// verify the required parameter 'type' is set
if(type===undefined||type===null){throw new Error("Missing the required parameter 'type' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");}var pathParams={'cloudid':cloudid,'id':id,'owningObjectId':owningObjectId,'type':type};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userAssignableMultiProjectSearchGet operation.
     * @callback module:api/DefaultApi~userAssignableMultiProjectSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004Author>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users who fulfill both of these criteria:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.projectKeys A comma-separated list of project keys (case sensitive).
     * @param {String} opts.query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
     * @param {module:api/DefaultApi~userAssignableMultiProjectSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004Author>}
     */},{key:"userAssignableMultiProjectSearchGet",value:function userAssignableMultiProjectSearchGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userAssignableMultiProjectSearchGet");}var pathParams={'cloudid':cloudid};var queryParams={'maxResults':opts['maxResults'],'projectKeys':opts['projectKeys'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2004Author["default"]];return this.apiClient.callApi('/user/assignable/multiProjectSearch','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userAssignableSearchGet operation.
     * @callback module:api/DefaultApi~userAssignableSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20060} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users that can be assigned to an issue. Use this method to find the list of users who can be assigned to:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.actionDescriptorId The ID of the transition.
     * @param {String} opts.issueKey The key of the issue. Required, unless project is specified.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.project The project ID or project key (case sensitive). Required, unless issueKey is specified.
     * @param {String} opts.query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~userAssignableSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20060}
     */},{key:"userAssignableSearchGet",value:function userAssignableSearchGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userAssignableSearchGet");}var pathParams={'cloudid':cloudid};var queryParams={'actionDescriptorId':opts['actionDescriptorId'],'issueKey':opts['issueKey'],'maxResults':opts['maxResults'],'project':opts['project'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse66["default"];return this.apiClient.callApi('/user/assignable/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userBulkGet operation.
     * @callback module:api/DefaultApi~userBulkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20092} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns details of users specified in a list of usernames or keys. Permissions required: Administer Jira global permission. Users with permission to access Jira can call this method, but empty search results are returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.key Comma-separated list of user keys. Required if username isn't provided.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 200.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {Array.<String>} opts.username Comma-separated list of usernames. Required if key isn't provided.
     * @param {module:api/DefaultApi~userBulkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20092}
     */},{key:"userBulkGet",value:function userBulkGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userBulkGet");}var pathParams={'cloudid':cloudid};var queryParams={'key':this.apiClient.buildCollectionParam(opts['key'],'csv'),'maxResults':opts['maxResults'],'startAt':opts['startAt'],'username':this.apiClient.buildCollectionParam(opts['username'],'csv')};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse101["default"];return this.apiClient.callApi('/user/bulk','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userColumnsDelete operation.
     * @callback module:api/DefaultApi~userColumnsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Resets the default issue table columns for the user to the system default. If a username is not passed, the calling user's default columns are reset. Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~userColumnsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userColumnsDelete",value:function userColumnsDelete(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userColumnsDelete");}var pathParams={'cloudid':cloudid};var queryParams={'accountId':opts['accountId'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/columns','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userColumnsGet operation.
     * @callback module:api/DefaultApi~userColumnsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default issue table columns for the user. If a username is not passed in the request, the calling user's details are returned. Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~userColumnsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userColumnsGet",value:function userColumnsGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userColumnsGet");}var pathParams={'cloudid':cloudid};var queryParams={'accountId':opts['accountId'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/columns','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userColumnsPut operation.
     * @callback module:api/DefaultApi~userColumnsPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default issue table columns for the user. If a username is not passed, the calling user's default columns are set. If no column details are sent, then all default columns are removed. The parameters for this resource are expressed as HTML form data. For example, in curl: curl -X PUT -d username=<username> -d columns=summary -d columns=description <url> Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
     * @param {module:api/DefaultApi~userColumnsPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userColumnsPut",value:function userColumnsPut(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userColumnsPut");}var pathParams={'cloudid':cloudid};var queryParams={'accountId':opts['accountId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/columns','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userDelete operation.
     * @callback module:api/DefaultApi~userDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a user. Permissions required: Site administration (i.e., member of the site-admin group).
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.key This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~userDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userDelete",value:function userDelete(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userDelete");}var pathParams={'cloudid':cloudid};var queryParams={'accountId':opts['accountId'],'key':opts['key'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userGet operation.
     * @callback module:api/DefaultApi~userGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20060} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a user. Permissions required: None.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {module:model/String} opts.expand Use expand to include additional information about users in the response. This parameter accepts multiple values separated by a comma:
     * @param {String} opts.key This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~userGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20060}
     */},{key:"userGet",value:function userGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userGet");}var pathParams={'cloudid':cloudid};var queryParams={'accountId':opts['accountId'],'expand':opts['expand'],'key':opts['key'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse66["default"];return this.apiClient.callApi('/user','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userGroupsGet operation.
     * @callback module:api/DefaultApi~userGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20093} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the groups to which a user belongs. Permissions required: Browse users and groups global permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The account ID of the user.
     * @param {String} opts.key The key of the user.
     * @param {String} opts.username The username of the user. Deprecated in favour of accountId.
     * @param {module:api/DefaultApi~userGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20093}
     */},{key:"userGroupsGet",value:function userGroupsGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userGroupsGet");}var pathParams={'cloudid':cloudid};var queryParams={'accountId':opts['accountId'],'key':opts['key'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse102["default"];return this.apiClient.callApi('/user/groups','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userPermissionSearchGet operation.
     * @callback module:api/DefaultApi~userPermissionSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004Author>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users who fulfill both of these criteria:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueKey The issue key for the issue.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.permissions A comma-separated list of permissions. The valid permissions are:
     * @param {String} opts.projectKey The project key for the project (case sensitive).
     * @param {String} opts.query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
     * @param {module:api/DefaultApi~userPermissionSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004Author>}
     */},{key:"userPermissionSearchGet",value:function userPermissionSearchGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userPermissionSearchGet");}var pathParams={'cloudid':cloudid};var queryParams={'issueKey':opts['issueKey'],'maxResults':opts['maxResults'],'permissions':opts['permissions'],'projectKey':opts['projectKey'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2004Author["default"]];return this.apiClient.callApi('/user/permission/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userPickerGet operation.
     * @callback module:api/DefaultApi~userPickerGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20094} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users whose attributes match the query term. The returned object includes the html field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but will only get search results for an exact name match.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.exclude This parameter has been deprecated due to privacy changes. Use excludeAccountIds instead. See the migration guide for details. A comma-separated list of usernames to exclude from the search results.
     * @param {Array.<String>} opts.excludeAccountIds A comma-separated list of account IDs to exclude from the search results.
     * @param {Number} opts.maxResults The maximum number of items to return. Maximum is 1000. The total number of matched users is returned in total.
     * @param {String} opts.query A search input that is matched against appropriate user attributes to find relevant users.
     * @param {Boolean} opts.showAvatar Include the URI to the user's avatar.
     * @param {module:api/DefaultApi~userPickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20094}
     */},{key:"userPickerGet",value:function userPickerGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userPickerGet");}var pathParams={'cloudid':cloudid};var queryParams={'exclude':this.apiClient.buildCollectionParam(opts['exclude'],'csv'),'excludeAccountIds':this.apiClient.buildCollectionParam(opts['excludeAccountIds'],'csv'),'maxResults':opts['maxResults'],'query':opts['query'],'showAvatar':opts['showAvatar']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse103["default"];return this.apiClient.callApi('/user/picker','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userPost operation.
     * @callback module:api/DefaultApi~userPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20060} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated. The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting password from the request, include \"notification\": \"true\" to ensure the user is sent an email advising them that their account has been created. This email includes a link for the user to set their password. If the notification isn't sent for a generated password, the user will need to be sent a reset password request from Jira. Permissions required: Administer Jira global permission
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject58} opts.body 
     * @param {module:api/DefaultApi~userPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20060}
     */},{key:"userPost",value:function userPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse66["default"];return this.apiClient.callApi('/user','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userPropertiesGet operation.
     * @callback module:api/DefaultApi~userPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the keys of all properties for a user. Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~userPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */},{key:"userPropertiesGet",value:function userPropertiesGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userPropertiesGet");}var pathParams={'cloudid':cloudid};var queryParams={'accountId':opts['accountId'],'userKey':opts['userKey'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse3["default"];return this.apiClient.callApi('/user/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userPropertiesPropertyKeyDelete operation.
     * @callback module:api/DefaultApi~userPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a property from a user. Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {String} propertyKey The key of the user's property.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~userPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userPropertiesPropertyKeyDelete",value:function userPropertiesPropertyKeyDelete(cloudid,propertyKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userPropertiesPropertyKeyDelete");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling userPropertiesPropertyKeyDelete");}var pathParams={'cloudid':cloudid,'propertyKey':propertyKey};var queryParams={'accountId':opts['accountId'],'userKey':opts['userKey'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/properties/{propertyKey}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userPropertiesPropertyKeyGet operation.
     * @callback module:api/DefaultApi~userPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the value of a user's property. If no property key is provided Get user property keys is called. Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {String} propertyKey The key of the user's property.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~userPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */},{key:"userPropertiesPropertyKeyGet",value:function userPropertiesPropertyKeyGet(cloudid,propertyKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userPropertiesPropertyKeyGet");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling userPropertiesPropertyKeyGet");}var pathParams={'cloudid':cloudid,'propertyKey':propertyKey};var queryParams={'accountId':opts['accountId'],'userKey':opts['userKey'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse12["default"];return this.apiClient.callApi('/user/properties/{propertyKey}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userPropertiesPropertyKeyPut operation.
     * @callback module:api/DefaultApi~userPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the value of a user's property. Use this resource to store custom data against a user. Permissions required:
     * @param {Object} cloudid Cloudi of the project
     * @param {String} propertyKey The key of the user's property. The maximum length of the key is 255 bytes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
     * @param {String} opts.userKey This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
     * @param {module:api/DefaultApi~userPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userPropertiesPropertyKeyPut",value:function userPropertiesPropertyKeyPut(cloudid,propertyKey,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userPropertiesPropertyKeyPut");}// verify the required parameter 'propertyKey' is set
if(propertyKey===undefined||propertyKey===null){throw new Error("Missing the required parameter 'propertyKey' when calling userPropertiesPropertyKeyPut");}var pathParams={'cloudid':cloudid,'propertyKey':propertyKey};var queryParams={'accountId':opts['accountId'],'userKey':opts['userKey'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/properties/{propertyKey}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userSearchGet operation.
     * @callback module:api/DefaultApi~userSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004Author>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users that match the search string and property. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but empty search results are returned.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeActive Include active users.
     * @param {Boolean} opts.includeInactive Include inactive users.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.property A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of nested from {\"something\":{\"nested\":1,\"other\":2}} use thepropertykey.something.nested=1.
     * @param {String} opts.query A query string that is matched against user attributes (key, name, displayName, and emailAddress) to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~userSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004Author>}
     */},{key:"userSearchGet",value:function userSearchGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userSearchGet");}var pathParams={'cloudid':cloudid};var queryParams={'includeActive':opts['includeActive'],'includeInactive':opts['includeInactive'],'maxResults':opts['maxResults'],'property':opts['property'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2004Author["default"]];return this.apiClient.callApi('/user/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userSearchQueryGet operation.
     * @callback module:api/DefaultApi~userSearchQueryGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Finds users using a structured query and returns user details. Permissions required: Browse users and groups global permission. The available queries statements are:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeInactive Include inactive users in the results.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.query The search query.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~userSearchQueryGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userSearchQueryGet",value:function userSearchQueryGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userSearchQueryGet");}var pathParams={'cloudid':cloudid};var queryParams={'includeInactive':opts['includeInactive'],'maxResults':opts['maxResults'],'query':opts['query'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/search/query','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userSearchQueryKeyGet operation.
     * @callback module:api/DefaultApi~userSearchQueryKeyGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Finds users using a structured query and returns a list of user keys. Permissions required: Browse users and groups global permission. The available query statements are:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeInactive Include inactive users in the results.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.query The search query.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {module:api/DefaultApi~userSearchQueryKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"userSearchQueryKeyGet",value:function userSearchQueryKeyGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userSearchQueryKeyGet");}var pathParams={'cloudid':cloudid};var queryParams={'includeInactive':opts['includeInactive'],'maxResults':opts['maxResults'],'query':opts['query'],'startAt':opts['startAt']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/user/search/query/key','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the userViewissueSearchGet operation.
     * @callback module:api/DefaultApi~userViewissueSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004Author>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of users who fulfill both of these criteria:
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueKey The issue key for the issue. Required, unless projectKey is specified.
     * @param {Number} opts.maxResults The maximum number of items to return per page. Maximum is 1000.
     * @param {String} opts.projectKey The project key for the project (case sensitive). Required, unless issueKey is specified.
     * @param {String} opts.query A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset).
     * @param {String} opts.username This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
     * @param {module:api/DefaultApi~userViewissueSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004Author>}
     */},{key:"userViewissueSearchGet",value:function userViewissueSearchGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling userViewissueSearchGet");}var pathParams={'cloudid':cloudid};var queryParams={'issueKey':opts['issueKey'],'maxResults':opts['maxResults'],'projectKey':opts['projectKey'],'query':opts['query'],'startAt':opts['startAt'],'username':opts['username']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse2004Author["default"]];return this.apiClient.callApi('/user/viewissue/search','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionIdDelete operation.
     * @callback module:api/DefaultApi~versionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a project version. Deprecated, use Delete and replace version that supports swapping version values in custom fields, in addition to the swapping for fixVersion and affectedVersion provided in this resource. Alternative versions can be provided to update issues that use the deleted version in fixVersion or affectedVersion. If alternatives are not provided, occurrences of fixVersion and affectedVersion that contain the deleted version are cleared. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {String} opts.moveAffectedIssuesTo The ID of the version to update affectedVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @param {String} opts.moveFixIssuesTo The ID of the version to update fixVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @param {module:api/DefaultApi~versionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"versionIdDelete",value:function versionIdDelete(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling versionIdDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'moveAffectedIssuesTo':opts['moveAffectedIssuesTo'],'moveFixIssuesTo':opts['moveFixIssuesTo']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/version/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionIdGet operation.
     * @callback module:api/DefaultApi~versionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20096} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a project version. Permissions required: Browse projects project permission
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Use expand to include additional information about version in the response. This parameter accepts multiple values separated by a comma:
     * @param {module:api/DefaultApi~versionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20096}
     */},{key:"versionIdGet",value:function versionIdGet(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling versionIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse105["default"];return this.apiClient.callApi('/version/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionIdMergetoMoveIssuesToPut operation.
     * @callback module:api/DefaultApi~versionIdMergetoMoveIssuesToPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Merges two project versions. The merge is completed by deleting the version specified in id and replacing any occurrences of its ID in fixVersion with the version ID specified in moveIssuesTo. Consider using Delete and replace version instead. This resource supports swapping version values in fixVersion, affectedVersion, and custom fields. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version to delete.
     * @param {String} moveIssuesTo The ID of the version to merge into.
     * @param {module:api/DefaultApi~versionIdMergetoMoveIssuesToPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"versionIdMergetoMoveIssuesToPut",value:function versionIdMergetoMoveIssuesToPut(cloudid,id,moveIssuesTo,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionIdMergetoMoveIssuesToPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling versionIdMergetoMoveIssuesToPut");}// verify the required parameter 'moveIssuesTo' is set
if(moveIssuesTo===undefined||moveIssuesTo===null){throw new Error("Missing the required parameter 'moveIssuesTo' when calling versionIdMergetoMoveIssuesToPut");}var pathParams={'cloudid':cloudid,'id':id,'moveIssuesTo':moveIssuesTo};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/version/{id}/mergeto/{moveIssuesTo}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionIdMovePost operation.
     * @callback module:api/DefaultApi~versionIdMovePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20096} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Modifies the version's sequence within the project, which affects the display order of the versions in Jira. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version to be moved.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject61} opts.body 
     * @param {module:api/DefaultApi~versionIdMovePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20096}
     */},{key:"versionIdMovePost",value:function versionIdMovePost(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionIdMovePost");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling versionIdMovePost");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse105["default"];return this.apiClient.callApi('/version/{id}/move','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionIdPut operation.
     * @callback module:api/DefaultApi~versionIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Modifies a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject60} opts.body 
     * @param {module:api/DefaultApi~versionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"versionIdPut",value:function versionIdPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling versionIdPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/version/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionIdRelatedIssueCountsGet operation.
     * @callback module:api/DefaultApi~versionIdRelatedIssueCountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20097} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the following counts for a version:
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {module:api/DefaultApi~versionIdRelatedIssueCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20097}
     */},{key:"versionIdRelatedIssueCountsGet",value:function versionIdRelatedIssueCountsGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionIdRelatedIssueCountsGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling versionIdRelatedIssueCountsGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse106["default"];return this.apiClient.callApi('/version/{id}/relatedIssueCounts','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionIdRemoveAndSwapPost operation.
     * @callback module:api/DefaultApi~versionIdRemoveAndSwapPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a project version. Permissions required: Administer Jira global permission or Administer Projects project permission. Alternative versions can be provided to update issues that use the deleted version in fixVersion, affectedVersion, or any version picker custom fields. If alternatives are not provided, occurrences of fixVersion, affectedVersion, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject62} opts.body 
     * @param {module:api/DefaultApi~versionIdRemoveAndSwapPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"versionIdRemoveAndSwapPost",value:function versionIdRemoveAndSwapPost(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionIdRemoveAndSwapPost");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling versionIdRemoveAndSwapPost");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/version/{id}/removeAndSwap','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionIdUnresolvedIssueCountGet operation.
     * @callback module:api/DefaultApi~versionIdUnresolvedIssueCountGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20098} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns counts of the issues and unresolved issues for the project version. Permissions required: Browse projects project permission
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {module:api/DefaultApi~versionIdUnresolvedIssueCountGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20098}
     */},{key:"versionIdUnresolvedIssueCountGet",value:function versionIdUnresolvedIssueCountGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionIdUnresolvedIssueCountGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling versionIdUnresolvedIssueCountGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse107["default"];return this.apiClient.callApi('/version/{id}/unresolvedIssueCount','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionPost operation.
     * @callback module:api/DefaultApi~versionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20113} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject59} opts.body 
     * @param {module:api/DefaultApi~versionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20113}
     */},{key:"versionPost",value:function versionPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionPost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse114["default"];return this.apiClient.callApi('/version','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionRemotelinkGet operation.
     * @callback module:api/DefaultApi~versionRemotelinkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20095} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * the global ID of the remote resource that is linked to the versions
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.globalId the global ID of the remote resource that is linked to the versions
     * @param {module:api/DefaultApi~versionRemotelinkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20095}
     */},{key:"versionRemotelinkGet",value:function versionRemotelinkGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionRemotelinkGet");}var pathParams={'cloudid':cloudid};var queryParams={'globalId':opts['globalId']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse104["default"];return this.apiClient.callApi('/version/remotelink','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionVersionIdRemotelinkDelete operation.
     * @callback module:api/DefaultApi~versionVersionIdRemotelinkDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * The version for which to delete ALL existing remote version links
     * @param {Object} cloudid Cloudi of the project
     * @param {String} versionId The version for which to delete ALL existing remote version links
     * @param {module:api/DefaultApi~versionVersionIdRemotelinkDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"versionVersionIdRemotelinkDelete",value:function versionVersionIdRemotelinkDelete(cloudid,versionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionVersionIdRemotelinkDelete");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling versionVersionIdRemotelinkDelete");}var pathParams={'cloudid':cloudid,'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/version/{versionId}/remotelink','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionVersionIdRemotelinkGet operation.
     * @callback module:api/DefaultApi~versionVersionIdRemotelinkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20095} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * a String containing the version ID
     * @param {Object} cloudid Cloudi of the project
     * @param {String} versionId a String containing the version ID
     * @param {module:api/DefaultApi~versionVersionIdRemotelinkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20095}
     */},{key:"versionVersionIdRemotelinkGet",value:function versionVersionIdRemotelinkGet(cloudid,versionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionVersionIdRemotelinkGet");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling versionVersionIdRemotelinkGet");}var pathParams={'cloudid':cloudid,'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse104["default"];return this.apiClient.callApi('/version/{versionId}/remotelink','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionVersionIdRemotelinkGlobalIdDelete operation.
     * @callback module:api/DefaultApi~versionVersionIdRemotelinkGlobalIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * The version ID of the remote link
     * @param {Object} cloudid Cloudi of the project
     * @param {String} globalId The global ID of the remote link
     * @param {String} versionId The version ID of the remote link
     * @param {module:api/DefaultApi~versionVersionIdRemotelinkGlobalIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"versionVersionIdRemotelinkGlobalIdDelete",value:function versionVersionIdRemotelinkGlobalIdDelete(cloudid,globalId,versionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionVersionIdRemotelinkGlobalIdDelete");}// verify the required parameter 'globalId' is set
if(globalId===undefined||globalId===null){throw new Error("Missing the required parameter 'globalId' when calling versionVersionIdRemotelinkGlobalIdDelete");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling versionVersionIdRemotelinkGlobalIdDelete");}var pathParams={'cloudid':cloudid,'globalId':globalId,'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/version/{versionId}/remotelink/{globalId}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionVersionIdRemotelinkGlobalIdGet operation.
     * @callback module:api/DefaultApi~versionVersionIdRemotelinkGlobalIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20099} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * A REST sub-resource representing a remote version link
     * @param {Object} cloudid Cloudi of the project
     * @param {String} globalId The id of the remote issue link to be returned. If {@code null} (not provided) all remote links for the issue are returned.
     * @param {String} versionId a String containing the version id
     * @param {module:api/DefaultApi~versionVersionIdRemotelinkGlobalIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20099}
     */},{key:"versionVersionIdRemotelinkGlobalIdGet",value:function versionVersionIdRemotelinkGlobalIdGet(cloudid,globalId,versionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionVersionIdRemotelinkGlobalIdGet");}// verify the required parameter 'globalId' is set
if(globalId===undefined||globalId===null){throw new Error("Missing the required parameter 'globalId' when calling versionVersionIdRemotelinkGlobalIdGet");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling versionVersionIdRemotelinkGlobalIdGet");}var pathParams={'cloudid':cloudid,'globalId':globalId,'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse108["default"];return this.apiClient.callApi('/version/{versionId}/remotelink/{globalId}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionVersionIdRemotelinkGlobalIdPost operation.
     * @callback module:api/DefaultApi~versionVersionIdRemotelinkGlobalIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * @param {Object} cloudid Cloudi of the project
     * @param {String} globalId 
     * @param {String} versionId 
     * @param {module:api/DefaultApi~versionVersionIdRemotelinkGlobalIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"versionVersionIdRemotelinkGlobalIdPost",value:function versionVersionIdRemotelinkGlobalIdPost(cloudid,globalId,versionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionVersionIdRemotelinkGlobalIdPost");}// verify the required parameter 'globalId' is set
if(globalId===undefined||globalId===null){throw new Error("Missing the required parameter 'globalId' when calling versionVersionIdRemotelinkGlobalIdPost");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling versionVersionIdRemotelinkGlobalIdPost");}var pathParams={'cloudid':cloudid,'globalId':globalId,'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/version/{versionId}/remotelink/{globalId}','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the versionVersionIdRemotelinkPost operation.
     * @callback module:api/DefaultApi~versionVersionIdRemotelinkPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a remote version link via POST. The link's global ID will be taken from the JSON payload if provided; otherwise, it will be generated.
     * @param {Object} cloudid Cloudi of the project
     * @param {String} versionId 
     * @param {module:api/DefaultApi~versionVersionIdRemotelinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"versionVersionIdRemotelinkPost",value:function versionVersionIdRemotelinkPost(cloudid,versionId,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling versionVersionIdRemotelinkPost");}// verify the required parameter 'versionId' is set
if(versionId===undefined||versionId===null){throw new Error("Missing the required parameter 'versionId' when calling versionVersionIdRemotelinkPost");}var pathParams={'cloudid':cloudid,'versionId':versionId};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/version/{versionId}/remotelink','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowGet operation.
     * @callback module:api/DefaultApi~workflowGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200100>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns all workflows in Jira or a single workflow.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of the workflow to be returned. Only one workflow can be specified.
     * @param {module:api/DefaultApi~workflowGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200100>}
     */},{key:"workflowGet",value:function workflowGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowGet");}var pathParams={'cloudid':cloudid};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse4["default"]];return this.apiClient.callApi('/workflow','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowTransitionsTransitionIdPropertiesDelete operation.
     * @callback module:api/DefaultApi~workflowTransitionsTransitionIdPropertiesDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The name of the transition property to delete, also known as the name of the property.
     * @param {String} opts.workflowMode The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
     * @param {String} opts.workflowName The name of the workflow that the transition belongs to.
     * @param {module:api/DefaultApi~workflowTransitionsTransitionIdPropertiesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"workflowTransitionsTransitionIdPropertiesDelete",value:function workflowTransitionsTransitionIdPropertiesDelete(cloudid,transitionId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowTransitionsTransitionIdPropertiesDelete");}// verify the required parameter 'transitionId' is set
if(transitionId===undefined||transitionId===null){throw new Error("Missing the required parameter 'transitionId' when calling workflowTransitionsTransitionIdPropertiesDelete");}var pathParams={'cloudid':cloudid,'transitionId':transitionId};var queryParams={'key':opts['key'],'workflowMode':opts['workflowMode'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/workflow/transitions/{transitionId}/properties','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowTransitionsTransitionIdPropertiesGet operation.
     * @callback module:api/DefaultApi~workflowTransitionsTransitionIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200101>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeReservedKeys Some properties with keys that have the jira. prefix are reserved, i.e., not editable. To include these properties in the results, set this parameter to true.
     * @param {String} opts.key The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
     * @param {String} opts.workflowMode The workflow status. Set to live for active and inactive workflows, or draft for draft workflows.
     * @param {String} opts.workflowName The name of the workflow that the transition belongs to.
     * @param {module:api/DefaultApi~workflowTransitionsTransitionIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200101>}
     */},{key:"workflowTransitionsTransitionIdPropertiesGet",value:function workflowTransitionsTransitionIdPropertiesGet(cloudid,transitionId,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowTransitionsTransitionIdPropertiesGet");}// verify the required parameter 'transitionId' is set
if(transitionId===undefined||transitionId===null){throw new Error("Missing the required parameter 'transitionId' when calling workflowTransitionsTransitionIdPropertiesGet");}var pathParams={'cloudid':cloudid,'transitionId':transitionId};var queryParams={'includeReservedKeys':opts['includeReservedKeys'],'key':opts['key'],'workflowMode':opts['workflowMode'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse5["default"]];return this.apiClient.callApi('/workflow/transitions/{transitionId}/properties','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowTransitionsTransitionIdPropertiesPost operation.
     * @callback module:api/DefaultApi~workflowTransitionsTransitionIdPropertiesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200102} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the property being added, also known as the name of the property. Set this to the same value as the key defined in the request body.
     * @param {String} opts.workflowMode The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
     * @param {String} opts.workflowName The name of the workflow that the transition belongs to.
     * @param {module:model/InlineObject64} opts.body 
     * @param {module:api/DefaultApi~workflowTransitionsTransitionIdPropertiesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200102}
     */},{key:"workflowTransitionsTransitionIdPropertiesPost",value:function workflowTransitionsTransitionIdPropertiesPost(cloudid,transitionId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowTransitionsTransitionIdPropertiesPost");}// verify the required parameter 'transitionId' is set
if(transitionId===undefined||transitionId===null){throw new Error("Missing the required parameter 'transitionId' when calling workflowTransitionsTransitionIdPropertiesPost");}var pathParams={'cloudid':cloudid,'transitionId':transitionId};var queryParams={'key':opts['key'],'workflowMode':opts['workflowMode'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse6["default"];return this.apiClient.callApi('/workflow/transitions/{transitionId}/properties','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowTransitionsTransitionIdPropertiesPut operation.
     * @callback module:api/DefaultApi~workflowTransitionsTransitionIdPropertiesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200102} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the property being updated, also known as the name of the property. Set this to the same value as the key defined in the request body.
     * @param {String} opts.workflowMode The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
     * @param {String} opts.workflowName The name of the workflow that the transition belongs to.
     * @param {module:model/InlineObject63} opts.body 
     * @param {module:api/DefaultApi~workflowTransitionsTransitionIdPropertiesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200102}
     */},{key:"workflowTransitionsTransitionIdPropertiesPut",value:function workflowTransitionsTransitionIdPropertiesPut(cloudid,transitionId,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowTransitionsTransitionIdPropertiesPut");}// verify the required parameter 'transitionId' is set
if(transitionId===undefined||transitionId===null){throw new Error("Missing the required parameter 'transitionId' when calling workflowTransitionsTransitionIdPropertiesPut");}var pathParams={'cloudid':cloudid,'transitionId':transitionId};var queryParams={'key':opts['key'],'workflowMode':opts['workflowMode'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse6["default"];return this.apiClient.callApi('/workflow/transitions/{transitionId}/properties','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdCreatedraftPost operation.
     * @callback module:api/DefaultApi~workflowschemeIdCreatedraftPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme at any given time.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the active workflow scheme that the draft is created from.
     * @param {module:api/DefaultApi~workflowschemeIdCreatedraftPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"workflowschemeIdCreatedraftPost",value:function workflowschemeIdCreatedraftPost(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdCreatedraftPost");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdCreatedraftPost");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/workflowscheme/{id}/createdraft','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDefaultDelete operation.
     * @callback module:api/DefaultApi~workflowschemeIdDefaultDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira's system workflow (the jira workflow).
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
     * @param {module:api/DefaultApi~workflowschemeIdDefaultDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"workflowschemeIdDefaultDelete",value:function workflowschemeIdDefaultDelete(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDefaultDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDefaultDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'updateDraftIfNeeded':opts['updateDraftIfNeeded']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/workflowscheme/{id}/default','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDefaultGet operation.
     * @callback module:api/DefaultApi~workflowschemeIdDefaultGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200103} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Set to true to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.
     * @param {module:api/DefaultApi~workflowschemeIdDefaultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200103}
     */},{key:"workflowschemeIdDefaultGet",value:function workflowschemeIdDefaultGet(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDefaultGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDefaultGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'returnDraftIfExists':opts['returnDraftIfExists']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse7["default"];return this.apiClient.callApi('/workflowscheme/{id}/default','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDefaultPut operation.
     * @callback module:api/DefaultApi~workflowschemeIdDefaultPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default workflow for a workflow scheme.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject67} opts.body 
     * @param {module:api/DefaultApi~workflowschemeIdDefaultPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"workflowschemeIdDefaultPut",value:function workflowschemeIdDefaultPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDefaultPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDefaultPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/workflowscheme/{id}/default','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDelete operation.
     * @callback module:api/DefaultApi~workflowschemeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
     * @param {module:api/DefaultApi~workflowschemeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"workflowschemeIdDelete",value:function workflowschemeIdDelete(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/workflowscheme/{id}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftDefaultDelete operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftDefaultDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system workflow (the jira workflow).
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {module:api/DefaultApi~workflowschemeIdDraftDefaultDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"workflowschemeIdDraftDefaultDelete",value:function workflowschemeIdDraftDefaultDelete(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftDefaultDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftDefaultDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft/default','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftDefaultGet operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftDefaultGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200103} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {module:api/DefaultApi~workflowschemeIdDraftDefaultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200103}
     */},{key:"workflowschemeIdDraftDefaultGet",value:function workflowschemeIdDraftDefaultGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftDefaultGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftDefaultGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse7["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft/default','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftDefaultPut operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftDefaultPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the default workflow for a workflow scheme's draft.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject69} opts.body 
     * @param {module:api/DefaultApi~workflowschemeIdDraftDefaultPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"workflowschemeIdDraftDefaultPut",value:function workflowschemeIdDraftDefaultPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftDefaultPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftDefaultPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft/default','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftDelete operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes a draft workflow scheme.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the active workflow scheme that the draft was originally created from.
     * @param {module:api/DefaultApi~workflowschemeIdDraftDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"workflowschemeIdDraftDelete",value:function workflowschemeIdDraftDelete(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/workflowscheme/{id}/draft','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftGet operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See Configuring workflow schemes for more information.Note that:
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the active workflow scheme that the draft was originally created from.
     * @param {module:api/DefaultApi~workflowschemeIdDraftGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"workflowschemeIdDraftGet",value:function workflowschemeIdDraftGet(cloudid,id,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftIssuetypeIssueTypeDelete operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftIssuetypeIssueTypeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} issueType The ID of the issue type.
     * @param {module:api/DefaultApi~workflowschemeIdDraftIssuetypeIssueTypeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"workflowschemeIdDraftIssuetypeIssueTypeDelete",value:function workflowschemeIdDraftIssuetypeIssueTypeDelete(cloudid,id,issueType,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftIssuetypeIssueTypeDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftIssuetypeIssueTypeDelete");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdDraftIssuetypeIssueTypeDelete");}var pathParams={'cloudid':cloudid,'id':id,'issueType':issueType};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft/issuetype/{issueType}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftIssuetypeIssueTypeGet operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftIssuetypeIssueTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200104} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} issueType The ID of the issue type.
     * @param {module:api/DefaultApi~workflowschemeIdDraftIssuetypeIssueTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200104}
     */},{key:"workflowschemeIdDraftIssuetypeIssueTypeGet",value:function workflowschemeIdDraftIssuetypeIssueTypeGet(cloudid,id,issueType,callback){var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftIssuetypeIssueTypeGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftIssuetypeIssueTypeGet");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdDraftIssuetypeIssueTypeGet");}var pathParams={'cloudid':cloudid,'id':id,'issueType':issueType};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse8["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft/issuetype/{issueType}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftIssuetypeIssueTypePut operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftIssuetypeIssueTypePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the workflow for an issue type in a workflow scheme's draft.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject70} opts.body 
     * @param {module:api/DefaultApi~workflowschemeIdDraftIssuetypeIssueTypePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"workflowschemeIdDraftIssuetypeIssueTypePut",value:function workflowschemeIdDraftIssuetypeIssueTypePut(cloudid,id,issueType,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftIssuetypeIssueTypePut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftIssuetypeIssueTypePut");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdDraftIssuetypeIssueTypePut");}var pathParams={'cloudid':cloudid,'id':id,'issueType':issueType};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft/issuetype/{issueType}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftPut operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20115} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme at any given time.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the active workflow scheme that the draft was originally created from.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject68} opts.body 
     * @param {module:api/DefaultApi~workflowschemeIdDraftPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20115}
     */},{key:"workflowschemeIdDraftPut",value:function workflowschemeIdDraftPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse116["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftWorkflowDelete operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftWorkflowDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of the workflow.
     * @param {module:api/DefaultApi~workflowschemeIdDraftWorkflowDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"workflowschemeIdDraftWorkflowDelete",value:function workflowschemeIdDraftWorkflowDelete(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftWorkflowDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftWorkflowDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/workflowscheme/{id}/draft/workflow','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftWorkflowGet operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftWorkflowGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200105} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the workflow-issue type mappings for a workflow scheme's draft.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
     * @param {module:api/DefaultApi~workflowschemeIdDraftWorkflowGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200105}
     */},{key:"workflowschemeIdDraftWorkflowGet",value:function workflowschemeIdDraftWorkflowGet(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftWorkflowGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftWorkflowGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse9["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft/workflow','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdDraftWorkflowPut operation.
     * @callback module:api/DefaultApi~workflowschemeIdDraftWorkflowPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of the workflow.
     * @param {module:model/InlineObject71} opts.body 
     * @param {module:api/DefaultApi~workflowschemeIdDraftWorkflowPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"workflowschemeIdDraftWorkflowPut",value:function workflowschemeIdDraftWorkflowPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftWorkflowPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftWorkflowPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/workflowscheme/{id}/draft/workflow','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdGet operation.
     * @callback module:api/DefaultApi~workflowschemeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a workflow scheme.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.
     * @param {module:api/DefaultApi~workflowschemeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"workflowschemeIdGet",value:function workflowschemeIdGet(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'returnDraftIfExists':opts['returnDraftIfExists']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/workflowscheme/{id}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdIssuetypeIssueTypeDelete operation.
     * @callback module:api/DefaultApi~workflowschemeIdIssuetypeIssueTypeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the issue type-workflow mapping for an issue type in a workflow scheme.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false.
     * @param {module:api/DefaultApi~workflowschemeIdIssuetypeIssueTypeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"workflowschemeIdIssuetypeIssueTypeDelete",value:function workflowschemeIdIssuetypeIssueTypeDelete(cloudid,id,issueType,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdIssuetypeIssueTypeDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdIssuetypeIssueTypeDelete");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdIssuetypeIssueTypeDelete");}var pathParams={'cloudid':cloudid,'id':id,'issueType':issueType};var queryParams={'updateDraftIfNeeded':opts['updateDraftIfNeeded']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/workflowscheme/{id}/issuetype/{issueType}','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdIssuetypeIssueTypeGet operation.
     * @callback module:api/DefaultApi~workflowschemeIdIssuetypeIssueTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200104} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the issue type-workflow mapping for an issue type in a workflow scheme.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
     * @param {module:api/DefaultApi~workflowschemeIdIssuetypeIssueTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200104}
     */},{key:"workflowschemeIdIssuetypeIssueTypeGet",value:function workflowschemeIdIssuetypeIssueTypeGet(cloudid,id,issueType,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdIssuetypeIssueTypeGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdIssuetypeIssueTypeGet");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdIssuetypeIssueTypeGet");}var pathParams={'cloudid':cloudid,'id':id,'issueType':issueType};var queryParams={'returnDraftIfExists':opts['returnDraftIfExists']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse8["default"];return this.apiClient.callApi('/workflowscheme/{id}/issuetype/{issueType}','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdIssuetypeIssueTypePut operation.
     * @callback module:api/DefaultApi~workflowschemeIdIssuetypeIssueTypePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the workflow for an issue type in a workflow scheme.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject72} opts.body 
     * @param {module:api/DefaultApi~workflowschemeIdIssuetypeIssueTypePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"workflowschemeIdIssuetypeIssueTypePut",value:function workflowschemeIdIssuetypeIssueTypePut(cloudid,id,issueType,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdIssuetypeIssueTypePut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdIssuetypeIssueTypePut");}// verify the required parameter 'issueType' is set
if(issueType===undefined||issueType===null){throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdIssuetypeIssueTypePut");}var pathParams={'cloudid':cloudid,'id':id,'issueType':issueType};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/workflowscheme/{id}/issuetype/{issueType}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdPut operation.
     * @callback module:api/DefaultApi~workflowschemeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that updateDraftIfNeeded is set to true.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject66} opts.body 
     * @param {module:api/DefaultApi~workflowschemeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"workflowschemeIdPut",value:function workflowschemeIdPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/workflowscheme/{id}','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdWorkflowDelete operation.
     * @callback module:api/DefaultApi~workflowschemeIdWorkflowDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */ /**
     * Deletes the workflow-issue type mapping for a workflow in a workflow scheme.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
     * @param {String} opts.workflowName The name of the workflow.
     * @param {module:api/DefaultApi~workflowschemeIdWorkflowDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */},{key:"workflowschemeIdWorkflowDelete",value:function workflowschemeIdWorkflowDelete(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdWorkflowDelete");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdWorkflowDelete");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'updateDraftIfNeeded':opts['updateDraftIfNeeded'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=[];var returnType=null;return this.apiClient.callApi('/workflowscheme/{id}/workflow','DELETE',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdWorkflowGet operation.
     * @callback module:api/DefaultApi~workflowschemeIdWorkflowGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200105} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns the workflow-issue type mappings for a workflow scheme.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
     * @param {String} opts.workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
     * @param {module:api/DefaultApi~workflowschemeIdWorkflowGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200105}
     */},{key:"workflowschemeIdWorkflowGet",value:function workflowschemeIdWorkflowGet(cloudid,id,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdWorkflowGet");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdWorkflowGet");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'returnDraftIfExists':opts['returnDraftIfExists'],'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse9["default"];return this.apiClient.callApi('/workflowscheme/{id}/workflow','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemeIdWorkflowPut operation.
     * @callback module:api/DefaultApi~workflowschemeIdWorkflowPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of the workflow.
     * @param {module:model/InlineObject73} opts.body 
     * @param {module:api/DefaultApi~workflowschemeIdWorkflowPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"workflowschemeIdWorkflowPut",value:function workflowschemeIdWorkflowPut(cloudid,id,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdWorkflowPut");}// verify the required parameter 'id' is set
if(id===undefined||id===null){throw new Error("Missing the required parameter 'id' when calling workflowschemeIdWorkflowPut");}var pathParams={'cloudid':cloudid,'id':id};var queryParams={'workflowName':opts['workflowName']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/workflowscheme/{id}/workflow','PUT',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the workflowschemePost operation.
     * @callback module:api/DefaultApi~workflowschemePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20114} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Creates a workflow scheme.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject65} opts.body 
     * @param {module:api/DefaultApi~workflowschemePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20114}
     */},{key:"workflowschemePost",value:function workflowschemePost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling workflowschemePost");}var pathParams={'cloudid':cloudid};var queryParams={};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse115["default"];return this.apiClient.callApi('/workflowscheme','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the worklogDeletedGet operation.
     * @callback module:api/DefaultApi~worklogDeletedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200106} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.since The date and time, in UNIX timestamp format, after which deleted worklogs are returned.
     * @param {module:api/DefaultApi~worklogDeletedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200106}
     */},{key:"worklogDeletedGet",value:function worklogDeletedGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling worklogDeletedGet");}var pathParams={'cloudid':cloudid};var queryParams={'since':opts['since']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse10["default"];return this.apiClient.callApi('/worklog/deleted','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the worklogListPost operation.
     * @callback module:api/DefaultApi~worklogListPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200107>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns worklog details for a list of worklog IDs.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
     * @param {module:model/InlineObject74} opts.body 
     * @param {module:api/DefaultApi~worklogListPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse200107>}
     */},{key:"worklogListPost",value:function worklogListPost(cloudid,opts,callback){opts=opts||{};var postBody=opts['body'];// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling worklogListPost");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=[_InlineResponse11["default"]];return this.apiClient.callApi('/worklog/list','POST',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}/**
     * Callback function to receive the result of the worklogUpdatedGet operation.
     * @callback module:api/DefaultApi~worklogUpdatedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200106} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */ /**
     * Returns a list of IDs and update timestamps for worklogs updated after a date and time.
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
     * @param {Number} opts.since The date and time, in UNIX timestamp format, after which updated worklogs are returned.
     * @param {module:api/DefaultApi~worklogUpdatedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200106}
     */},{key:"worklogUpdatedGet",value:function worklogUpdatedGet(cloudid,opts,callback){opts=opts||{};var postBody=null;// verify the required parameter 'cloudid' is set
if(cloudid===undefined||cloudid===null){throw new Error("Missing the required parameter 'cloudid' when calling worklogUpdatedGet");}var pathParams={'cloudid':cloudid};var queryParams={'expand':opts['expand'],'since':opts['since']};var headerParams={};var formParams={};var authNames=['OAuth'];var contentTypes=[];var accepts=['*/*'];var returnType=_InlineResponse10["default"];return this.apiClient.callApi('/worklog/updated','GET',pathParams,queryParams,headerParams,formParams,postBody,authNames,contentTypes,accepts,returnType,null,callback);}}]);return DefaultApi;}();exports["default"]=DefaultApi;