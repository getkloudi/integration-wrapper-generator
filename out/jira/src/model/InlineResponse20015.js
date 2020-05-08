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
 * The InlineResponse20015 model module.
 * @module model/InlineResponse20015
 * @version 1.1.0
 */
class InlineResponse20015 {
    /**
     * Constructs a new <code>InlineResponse20015</code>.
     * @alias module:model/InlineResponse20015
     * @param key {String} 
     * @param name {String} 
     * @param url {String} 
     */
    constructor(key, name, url) { 
        
        InlineResponse20015.initialize(this, key, name, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, name, url) { 
        obj['key'] = key;
        obj['name'] = name;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>InlineResponse20015</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20015} obj Optional instance to populate.
     * @return {module:model/InlineResponse20015} The populated <code>InlineResponse20015</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20015();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
InlineResponse20015.prototype['key'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20015.prototype['name'] = undefined;

/**
 * @member {String} url
 */
InlineResponse20015.prototype['url'] = undefined;






export default InlineResponse20015;

