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
import InlineResponse20011Value from './InlineResponse20011Value';

/**
 * The InlineResponse20011 model module.
 * @module model/InlineResponse20011
 * @version 1.0.0
 */
class InlineResponse20011 {
    /**
     * Constructs a new <code>InlineResponse20011</code>.
     * 
     * @alias module:model/InlineResponse20011
     * @param key {String} 
     * @param value {module:model/InlineResponse20011Value} 
     */
    constructor(key, value) { 
        
        InlineResponse20011.initialize(this, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value) { 
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>InlineResponse20011</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20011} obj Optional instance to populate.
     * @return {module:model/InlineResponse20011} The populated <code>InlineResponse20011</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20011();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = InlineResponse20011Value.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
InlineResponse20011.prototype['key'] = undefined;

/**
 * @member {module:model/InlineResponse20011Value} value
 */
InlineResponse20011.prototype['value'] = undefined;






export default InlineResponse20011;

