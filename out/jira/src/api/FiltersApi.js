/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ColumnItem from '../model/ColumnItem';
import ErrorCollection from '../model/ErrorCollection';
import Filter from '../model/Filter';
import PageBeanFoundFilter from '../model/PageBeanFoundFilter';

/**
* Filters service.
* @module api/FiltersApi
* @version 1.4.0
*/
export default class FiltersApi {

    /**
    * Constructs a new FiltersApi. 
    * @alias module:api/FiltersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the filterFavouriteGet operation.
     * @callback module:api/FiltersApi~filterFavouriteGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Filter>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get favorite filters
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
     * @param {module:api/FiltersApi~filterFavouriteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Filter>}
     */
    filterFavouriteGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterFavouriteGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Filter];
      return this.apiClient.callApi(
        '/filter/favourite', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterGet operation.
     * @callback module:api/FiltersApi~filterGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Filter>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get filters
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
     * @param {module:api/FiltersApi~filterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Filter>}
     */
    filterGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Filter];
      return this.apiClient.callApi(
        '/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterIdColumnsDelete operation.
     * @callback module:api/FiltersApi~filterIdColumnsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset columns
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {module:api/FiltersApi~filterIdColumnsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    filterIdColumnsDelete(cloudid, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdColumnsDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdColumnsDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/filter/{id}/columns', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterIdColumnsGet operation.
     * @callback module:api/FiltersApi~filterIdColumnsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ColumnItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get columns
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {module:api/FiltersApi~filterIdColumnsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ColumnItem>}
     */
    filterIdColumnsGet(cloudid, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdColumnsGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdColumnsGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ColumnItem];
      return this.apiClient.callApi(
        '/filter/{id}/columns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterIdColumnsPut operation.
     * @callback module:api/FiltersApi~filterIdColumnsPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set columns
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.body The IDs of the fields to set as columns. In the form data, specify each field as `columns=id`, where `id` is the *id* of a field (as seen in the response for [Get fields](#api-rest-api-<ver>-field-get)). For example, `columns=summary`.
     * @param {module:api/FiltersApi~filterIdColumnsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    filterIdColumnsPut(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdColumnsPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdColumnsPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'body': this.apiClient.buildCollectionParam(opts['body'], 'csv')
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/filter/{id}/columns', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterIdDelete operation.
     * @callback module:api/FiltersApi~filterIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete filter
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter to delete.
     * @param {module:api/FiltersApi~filterIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    filterIdDelete(cloudid, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/filter/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterIdFavouriteDelete operation.
     * @callback module:api/FiltersApi~filterIdFavouriteDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Filter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove filter as favorite
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
     * @param {module:api/FiltersApi~filterIdFavouriteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Filter}
     */
    filterIdFavouriteDelete(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdFavouriteDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdFavouriteDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Filter;
      return this.apiClient.callApi(
        '/filter/{id}/favourite', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterIdFavouritePut operation.
     * @callback module:api/FiltersApi~filterIdFavouritePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Filter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add filter as favorite
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
     * @param {module:api/FiltersApi~filterIdFavouritePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Filter}
     */
    filterIdFavouritePut(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdFavouritePut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdFavouritePut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Filter;
      return this.apiClient.callApi(
        '/filter/{id}/favourite', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterIdGet operation.
     * @callback module:api/FiltersApi~filterIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Filter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get filter
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter to return.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
     * @param {module:api/FiltersApi~filterIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Filter}
     */
    filterIdGet(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Filter;
      return this.apiClient.callApi(
        '/filter/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterIdPut operation.
     * @callback module:api/FiltersApi~filterIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Filter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update filter
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter to update.
     * @param {module:model/Filter} body The filter to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
     * @param {module:api/FiltersApi~filterIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Filter}
     */
    filterIdPut(cloudid, id, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling filterIdPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Filter;
      return this.apiClient.callApi(
        '/filter/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterMyGet operation.
     * @callback module:api/FiltersApi~filterMyGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Filter>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my filters
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
     * @param {Boolean} opts.includeFavourites Include the user's favorite filters in the response. (default to false)
     * @param {module:api/FiltersApi~filterMyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Filter>}
     */
    filterMyGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterMyGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'expand': opts['expand'],
        'includeFavourites': opts['includeFavourites']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Filter];
      return this.apiClient.callApi(
        '/filter/my', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterPost operation.
     * @callback module:api/FiltersApi~filterPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Filter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create filter
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/Filter} body The filter to create.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
     * @param {module:api/FiltersApi~filterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Filter}
     */
    filterPost(cloudid, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling filterPost");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Filter;
      return this.apiClient.callApi(
        '/filter', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the filterSearchGet operation.
     * @callback module:api/FiltersApi~filterSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFoundFilter} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for filters
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName String used to perform a case-insensitive partial match with `name`.
     * @param {String} opts.accountId User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`.
     * @param {String} opts.owner This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`.
     * @param {String} opts.groupname Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`.
     * @param {Number} opts.projectId Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`.
     * @param {module:model/String} opts.orderBy [Order](#ordering) the results by a field:   *  `description` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by the count of how many users have this filter as a favorite.  *  `is_favourite` Sorts by whether the filter is marked as a favorite.  *  `id` Sorts by filter ID.  *  `name` Sorts by filter name.  *  `owner` Sorts by the ID of the filter owner. (default to 'name')
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the filter.  *  `favourite` Returns an indicator of whether the user has set the filter as a favorite.  *  `favouritedCount` Returns a count of how many users have set this filter as a favorite.  *  `jql` Returns the JQL query that the filter uses.  *  `owner` Returns the owner of the filter.  *  `searchUrl` Returns a URL to perform the filter's JQL query.  *  `sharePermissions` Returns the share permissions defined for the filter.  *  `subscriptions` Returns the users that are subscribed to the filter.  *  `viewUrl` Returns a URL to view the filter.
     * @param {module:api/FiltersApi~filterSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFoundFilter}
     */
    filterSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterSearchGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'filterName': opts['filterName'],
        'accountId': opts['accountId'],
        'owner': opts['owner'],
        'groupname': opts['groupname'],
        'projectId': opts['projectId'],
        'orderBy': opts['orderBy'],
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanFoundFilter;
      return this.apiClient.callApi(
        '/filter/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
