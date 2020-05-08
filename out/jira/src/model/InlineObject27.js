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

/**
 * The InlineObject27 model module.
 * @module model/InlineObject27
 * @version 1.2.0
 */
class InlineObject27 {
    /**
     * Constructs a new <code>InlineObject27</code>.
     * @alias module:model/InlineObject27
     */
    constructor() { 
        
        InlineObject27.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject27</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject27} obj Optional instance to populate.
     * @return {module:model/InlineObject27} The populated <code>InlineObject27</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject27();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], Object);
            }
            if (data.hasOwnProperty('historyMetadata')) {
                obj['historyMetadata'] = ApiClient.convertToType(data['historyMetadata'], Object);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [Object]);
            }
            if (data.hasOwnProperty('transition')) {
                obj['transition'] = ApiClient.convertToType(data['transition'], Object);
            }
            if (data.hasOwnProperty('update')) {
                obj['update'] = ApiClient.convertToType(data['update'], Object);
            }
        }
        return obj;
    }


}

/**
 * List of issue screen field to update, specifying the sub-field to update and its value. This field provides a straightforward option when setting a single sub-field. When multiple sub-fields or other operations are required, use update. Fields included in here cannot be included in update.
 * @member {Object} fields
 */
InlineObject27.prototype['fields'] = undefined;

/**
 * Details of issue history metadata. Deprecated.
 * @member {Object} historyMetadata
 */
InlineObject27.prototype['historyMetadata'] = undefined;

/**
 * Details of issue properties to be add or update.
 * @member {Array.<Object>} properties
 */
InlineObject27.prototype['properties'] = undefined;

/**
 * Details of an issue transition.
 * @member {Object} transition
 */
InlineObject27.prototype['transition'] = undefined;

/**
 * List of operations to perform on issue screen fields. Note that fields included in here cannot be included in fields.
 * @member {Object} update
 */
InlineObject27.prototype['update'] = undefined;






export default InlineObject27;

