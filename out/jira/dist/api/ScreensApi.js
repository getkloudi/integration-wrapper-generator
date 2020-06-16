"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddFieldBean = _interopRequireDefault(require("../model/AddFieldBean"));

var _MoveFieldBean = _interopRequireDefault(require("../model/MoveFieldBean"));

var _PageBeanScreen = _interopRequireDefault(require("../model/PageBeanScreen"));

var _PageBeanScreenScheme = _interopRequireDefault(require("../model/PageBeanScreenScheme"));

var _ScreenableField = _interopRequireDefault(require("../model/ScreenableField"));

var _ScreenableTab = _interopRequireDefault(require("../model/ScreenableTab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Screens service.
* @module api/ScreensApi
* @version 1.4.0
*/
var ScreensApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScreensApi. 
  * @alias module:api/ScreensApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScreensApi(apiClient) {
    _classCallCheck(this, ScreensApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the fieldFieldIdScreensGet operation.
   * @callback module:api/ScreensApi~fieldFieldIdScreensGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanScreen} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get screens for a field
   * @param {Object} cloudid Cloudi of the project
   * @param {String} fieldId The ID of the field to return screens for.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 100)
   * @param {module:api/ScreensApi~fieldFieldIdScreensGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanScreen}
   */


  _createClass(ScreensApi, [{
    key: "fieldFieldIdScreensGet",
    value: function fieldFieldIdScreensGet(cloudid, fieldId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldIdScreensGet");
      } // verify the required parameter 'fieldId' is set


      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling fieldFieldIdScreensGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldId': fieldId
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanScreen["default"];
      return this.apiClient.callApi('/field/{fieldId}/screens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensAddToDefaultFieldIdPost operation.
     * @callback module:api/ScreensApi~screensAddToDefaultFieldIdPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add field to default screen
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldId The ID of the field.
     * @param {module:api/ScreensApi~screensAddToDefaultFieldIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "screensAddToDefaultFieldIdPost",
    value: function screensAddToDefaultFieldIdPost(cloudid, fieldId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensAddToDefaultFieldIdPost");
      } // verify the required parameter 'fieldId' is set


      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling screensAddToDefaultFieldIdPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldId': fieldId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/screens/addToDefault/{fieldId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensGet operation.
     * @callback module:api/ScreensApi~screensGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanScreen} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all screens
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 100)
     * @param {module:api/ScreensApi~screensGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanScreen}
     */

  }, {
    key: "screensGet",
    value: function screensGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanScreen["default"];
      return this.apiClient.callApi('/screens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdAvailableFieldsGet operation.
     * @callback module:api/ScreensApi~screensScreenIdAvailableFieldsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScreenableField>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get available screen fields
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {module:api/ScreensApi~screensScreenIdAvailableFieldsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScreenableField>}
     */

  }, {
    key: "screensScreenIdAvailableFieldsGet",
    value: function screensScreenIdAvailableFieldsGet(cloudid, screenId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdAvailableFieldsGet");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdAvailableFieldsGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ScreenableField["default"]];
      return this.apiClient.callApi('/screens/{screenId}/availableFields', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdTabsGet operation.
     * @callback module:api/ScreensApi~screensScreenIdTabsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScreenableTab>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all screen tabs
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectKey The key of the project.
     * @param {module:api/ScreensApi~screensScreenIdTabsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScreenableTab>}
     */

  }, {
    key: "screensScreenIdTabsGet",
    value: function screensScreenIdTabsGet(cloudid, screenId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsGet");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId
      };
      var queryParams = {
        'projectKey': opts['projectKey']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ScreenableTab["default"]];
      return this.apiClient.callApi('/screens/{screenId}/tabs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdTabsPost operation.
     * @callback module:api/ScreensApi~screensScreenIdTabsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScreenableTab} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create screen tab
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {module:model/ScreenableTab} body 
     * @param {module:api/ScreensApi~screensScreenIdTabsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScreenableTab}
     */

  }, {
    key: "screensScreenIdTabsPost",
    value: function screensScreenIdTabsPost(cloudid, screenId, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsPost");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling screensScreenIdTabsPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenableTab["default"];
      return this.apiClient.callApi('/screens/{screenId}/tabs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdTabsTabIdDelete operation.
     * @callback module:api/ScreensApi~screensScreenIdTabsTabIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete screen tab
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {module:api/ScreensApi~screensScreenIdTabsTabIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "screensScreenIdTabsTabIdDelete",
    value: function screensScreenIdTabsTabIdDelete(cloudid, screenId, tabId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdDelete");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdDelete");
      } // verify the required parameter 'tabId' is set


      if (tabId === undefined || tabId === null) {
        throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId,
        'tabId': tabId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdTabsTabIdFieldsGet operation.
     * @callback module:api/ScreensApi~screensScreenIdTabsTabIdFieldsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ScreenableField>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all screen tab fields
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectKey The key of the project.
     * @param {module:api/ScreensApi~screensScreenIdTabsTabIdFieldsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ScreenableField>}
     */

  }, {
    key: "screensScreenIdTabsTabIdFieldsGet",
    value: function screensScreenIdTabsTabIdFieldsGet(cloudid, screenId, tabId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdFieldsGet");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdFieldsGet");
      } // verify the required parameter 'tabId' is set


      if (tabId === undefined || tabId === null) {
        throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdFieldsGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId,
        'tabId': tabId
      };
      var queryParams = {
        'projectKey': opts['projectKey']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ScreenableField["default"]];
      return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/fields', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdTabsTabIdFieldsIdDelete operation.
     * @callback module:api/ScreensApi~screensScreenIdTabsTabIdFieldsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove screen tab field
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {String} id The ID of the field.
     * @param {module:api/ScreensApi~screensScreenIdTabsTabIdFieldsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "screensScreenIdTabsTabIdFieldsIdDelete",
    value: function screensScreenIdTabsTabIdFieldsIdDelete(cloudid, screenId, tabId, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdFieldsIdDelete");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdFieldsIdDelete");
      } // verify the required parameter 'tabId' is set


      if (tabId === undefined || tabId === null) {
        throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdFieldsIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling screensScreenIdTabsTabIdFieldsIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId,
        'tabId': tabId,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/fields/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdTabsTabIdFieldsIdMovePost operation.
     * @callback module:api/ScreensApi~screensScreenIdTabsTabIdFieldsIdMovePostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move screen tab field
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {String} id The ID of the field.
     * @param {module:model/MoveFieldBean} body 
     * @param {module:api/ScreensApi~screensScreenIdTabsTabIdFieldsIdMovePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "screensScreenIdTabsTabIdFieldsIdMovePost",
    value: function screensScreenIdTabsTabIdFieldsIdMovePost(cloudid, screenId, tabId, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdFieldsIdMovePost");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdFieldsIdMovePost");
      } // verify the required parameter 'tabId' is set


      if (tabId === undefined || tabId === null) {
        throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdFieldsIdMovePost");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling screensScreenIdTabsTabIdFieldsIdMovePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling screensScreenIdTabsTabIdFieldsIdMovePost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId,
        'tabId': tabId,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/fields/{id}/move', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdTabsTabIdFieldsPost operation.
     * @callback module:api/ScreensApi~screensScreenIdTabsTabIdFieldsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScreenableField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add screen tab field
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {module:model/AddFieldBean} body 
     * @param {module:api/ScreensApi~screensScreenIdTabsTabIdFieldsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScreenableField}
     */

  }, {
    key: "screensScreenIdTabsTabIdFieldsPost",
    value: function screensScreenIdTabsTabIdFieldsPost(cloudid, screenId, tabId, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdFieldsPost");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdFieldsPost");
      } // verify the required parameter 'tabId' is set


      if (tabId === undefined || tabId === null) {
        throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdFieldsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling screensScreenIdTabsTabIdFieldsPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId,
        'tabId': tabId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenableField["default"];
      return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/fields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdTabsTabIdMovePosPost operation.
     * @callback module:api/ScreensApi~screensScreenIdTabsTabIdMovePosPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move screen tab
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {Number} pos The position of tab. The base index is 0.
     * @param {module:api/ScreensApi~screensScreenIdTabsTabIdMovePosPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "screensScreenIdTabsTabIdMovePosPost",
    value: function screensScreenIdTabsTabIdMovePosPost(cloudid, screenId, tabId, pos, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdMovePosPost");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdMovePosPost");
      } // verify the required parameter 'tabId' is set


      if (tabId === undefined || tabId === null) {
        throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdMovePosPost");
      } // verify the required parameter 'pos' is set


      if (pos === undefined || pos === null) {
        throw new Error("Missing the required parameter 'pos' when calling screensScreenIdTabsTabIdMovePosPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId,
        'tabId': tabId,
        'pos': pos
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}/move/{pos}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screensScreenIdTabsTabIdPut operation.
     * @callback module:api/ScreensApi~screensScreenIdTabsTabIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScreenableTab} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update screen tab
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} screenId The ID of the screen.
     * @param {Number} tabId The ID of the screen tab.
     * @param {module:model/ScreenableTab} body 
     * @param {module:api/ScreensApi~screensScreenIdTabsTabIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScreenableTab}
     */

  }, {
    key: "screensScreenIdTabsTabIdPut",
    value: function screensScreenIdTabsTabIdPut(cloudid, screenId, tabId, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screensScreenIdTabsTabIdPut");
      } // verify the required parameter 'screenId' is set


      if (screenId === undefined || screenId === null) {
        throw new Error("Missing the required parameter 'screenId' when calling screensScreenIdTabsTabIdPut");
      } // verify the required parameter 'tabId' is set


      if (tabId === undefined || tabId === null) {
        throw new Error("Missing the required parameter 'tabId' when calling screensScreenIdTabsTabIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling screensScreenIdTabsTabIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'screenId': screenId,
        'tabId': tabId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenableTab["default"];
      return this.apiClient.callApi('/screens/{screenId}/tabs/{tabId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the screenschemeGet operation.
     * @callback module:api/ScreensApi~screenschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanScreenScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get screen schemes
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 25)
     * @param {Array.<Number>} opts.id The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
     * @param {module:api/ScreensApi~screenschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanScreenScheme}
     */

  }, {
    key: "screenschemeGet",
    value: function screenschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling screenschemeGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanScreenScheme["default"];
      return this.apiClient.callApi('/screenscheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ScreensApi;
}();

exports["default"] = ScreensApi;