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
 * The InlineResponse2013 model module.
 * @module model/InlineResponse2013
 * @version 1.3.1
 */
class InlineResponse2013 {
    /**
     * Constructs a new <code>InlineResponse2013</code>.
     * 
     * @alias module:model/InlineResponse2013
     * @param id {String} 
     * @param key {String} 
     * @param self {String} 
     */
    constructor(id, key, self) { 
        
        InlineResponse2013.initialize(this, id, key, self);
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
     * Constructs a <code>InlineResponse2013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2013} obj Optional instance to populate.
     * @return {module:model/InlineResponse2013} The populated <code>InlineResponse2013</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2013();

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
 * @member {String} id
 */
InlineResponse2013.prototype['id'] = undefined;

/**
 * @member {String} key
 */
InlineResponse2013.prototype['key'] = undefined;

/**
 * @member {String} self
 */
InlineResponse2013.prototype['self'] = undefined;






export default InlineResponse2013;

