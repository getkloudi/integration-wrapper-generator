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
 * The InlineResponse20087Issues model module.
 * @module model/InlineResponse20087Issues
 * @version 1.2.0
 */
class InlineResponse20087Issues {
    /**
     * Constructs a new <code>InlineResponse20087Issues</code>.
     * @alias module:model/InlineResponse20087Issues
     * @param expand {String} 
     * @param id {String} 
     * @param key {String} 
     * @param self {String} 
     */
    constructor(expand, id, key, self) { 
        
        InlineResponse20087Issues.initialize(this, expand, id, key, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expand, id, key, self) { 
        obj['expand'] = expand;
        obj['id'] = id;
        obj['key'] = key;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20087Issues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20087Issues} obj Optional instance to populate.
     * @return {module:model/InlineResponse20087Issues} The populated <code>InlineResponse20087Issues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20087Issues();

            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
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
 * @member {String} expand
 */
InlineResponse20087Issues.prototype['expand'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20087Issues.prototype['id'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20087Issues.prototype['key'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20087Issues.prototype['self'] = undefined;






export default InlineResponse20087Issues;

