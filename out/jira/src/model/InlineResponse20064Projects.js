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
 * The InlineResponse20064Projects model module.
 * @module model/InlineResponse20064Projects
 * @version 1.3.0
 */
class InlineResponse20064Projects {
    /**
     * Constructs a new <code>InlineResponse20064Projects</code>.
     * @alias module:model/InlineResponse20064Projects
     * @param id {Number} 
     * @param key {String} 
     */
    constructor(id, key) { 
        
        InlineResponse20064Projects.initialize(this, id, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, key) { 
        obj['id'] = id;
        obj['key'] = key;
    }

    /**
     * Constructs a <code>InlineResponse20064Projects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20064Projects} obj Optional instance to populate.
     * @return {module:model/InlineResponse20064Projects} The populated <code>InlineResponse20064Projects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20064Projects();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
InlineResponse20064Projects.prototype['id'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20064Projects.prototype['key'] = undefined;






export default InlineResponse20064Projects;

