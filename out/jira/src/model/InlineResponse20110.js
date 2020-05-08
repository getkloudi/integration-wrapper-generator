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
 * The InlineResponse20110 model module.
 * @module model/InlineResponse20110
 * @version 1.3.0
 */
class InlineResponse20110 {
    /**
     * Constructs a new <code>InlineResponse20110</code>.
     * 
     * @alias module:model/InlineResponse20110
     * @param id {Number} 
     * @param key {String} 
     * @param self {String} 
     */
    constructor(id, key, self) { 
        
        InlineResponse20110.initialize(this, id, key, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, key, self) { 
        obj['id'] = id;
        obj['key'] = key;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20110</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20110} obj Optional instance to populate.
     * @return {module:model/InlineResponse20110} The populated <code>InlineResponse20110</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20110();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
 * @member {Number} id
 */
InlineResponse20110.prototype['id'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20110.prototype['key'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20110.prototype['self'] = undefined;






export default InlineResponse20110;

