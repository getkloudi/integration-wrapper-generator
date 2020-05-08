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
 * The InlineObject18 model module.
 * @module model/InlineObject18
 * @version 1.1.0
 */
class InlineObject18 {
    /**
     * Constructs a new <code>InlineObject18</code>.
     * @alias module:model/InlineObject18
     */
    constructor() { 
        
        InlineObject18.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject18</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject18} obj Optional instance to populate.
     * @return {module:model/InlineObject18} The populated <code>InlineObject18</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject18();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], Object);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }


}

/**
 * Bulk operation filter details.
 * @member {Object} filter
 */
InlineObject18.prototype['filter'] = undefined;

/**
 * The value of the property. The value must be a valid, non-empty JSON blob. The maximum length is 32768 characters.
 * @member {Object} value
 */
InlineObject18.prototype['value'] = undefined;






export default InlineObject18;

