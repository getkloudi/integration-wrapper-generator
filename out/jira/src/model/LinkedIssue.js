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

import ApiClient from '../ApiClient';
import Fields from './Fields';

/**
 * The LinkedIssue model module.
 * @module model/LinkedIssue
 * @version 1.4.0
 */
class LinkedIssue {
    /**
     * Constructs a new <code>LinkedIssue</code>.
     * The ID or key of a linked issue.
     * @alias module:model/LinkedIssue
     */
    constructor() { 
        
        LinkedIssue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkedIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedIssue} obj Optional instance to populate.
     * @return {module:model/LinkedIssue} The populated <code>LinkedIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedIssue();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], Fields);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The fields associated with the issue.
 * @member {module:model/Fields} fields
 */
LinkedIssue.prototype['fields'] = undefined;

/**
 * The ID of an issue. Required if `key` isn't provided.
 * @member {String} id
 */
LinkedIssue.prototype['id'] = undefined;

/**
 * The key of an issue. Required if `id` isn't provided.
 * @member {String} key
 */
LinkedIssue.prototype['key'] = undefined;

/**
 * The URL of the issue.
 * @member {String} self
 */
LinkedIssue.prototype['self'] = undefined;






export default LinkedIssue;

