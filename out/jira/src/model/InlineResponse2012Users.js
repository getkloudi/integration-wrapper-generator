/**
 * Jira
 * The Jira Cloud Platform REST API
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2009Author from './InlineResponse2009Author';

/**
 * The InlineResponse2012Users model module.
 * @module model/InlineResponse2012Users
 * @version 1.0.0
 */
class InlineResponse2012Users {
    /**
     * Constructs a new <code>InlineResponse2012Users</code>.
     * @alias module:model/InlineResponse2012Users
     * @param endIndex {Number} 
     * @param items {Array.<module:model/InlineResponse2009Author>} 
     * @param maxResults {Number} 
     * @param size {Number} 
     * @param startIndex {Number} 
     */
    constructor(endIndex, items, maxResults, size, startIndex) { 
        
        InlineResponse2012Users.initialize(this, endIndex, items, maxResults, size, startIndex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, endIndex, items, maxResults, size, startIndex) { 
        obj['end-index'] = endIndex;
        obj['items'] = items;
        obj['max-results'] = maxResults;
        obj['size'] = size;
        obj['start-index'] = startIndex;
    }

    /**
     * Constructs a <code>InlineResponse2012Users</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2012Users} obj Optional instance to populate.
     * @return {module:model/InlineResponse2012Users} The populated <code>InlineResponse2012Users</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2012Users();

            if (data.hasOwnProperty('end-index')) {
                obj['end-index'] = ApiClient.convertToType(data['end-index'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [InlineResponse2009Author]);
            }
            if (data.hasOwnProperty('max-results')) {
                obj['max-results'] = ApiClient.convertToType(data['max-results'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('start-index')) {
                obj['start-index'] = ApiClient.convertToType(data['start-index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} end-index
 */
InlineResponse2012Users.prototype['end-index'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse2009Author>} items
 */
InlineResponse2012Users.prototype['items'] = undefined;

/**
 * @member {Number} max-results
 */
InlineResponse2012Users.prototype['max-results'] = undefined;

/**
 * @member {Number} size
 */
InlineResponse2012Users.prototype['size'] = undefined;

/**
 * @member {Number} start-index
 */
InlineResponse2012Users.prototype['start-index'] = undefined;






export default InlineResponse2012Users;

