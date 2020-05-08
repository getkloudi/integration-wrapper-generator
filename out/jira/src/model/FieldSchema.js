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
 * The FieldSchema model module.
 * @module model/FieldSchema
 * @version 1.3.1
 */
class FieldSchema {
    /**
     * Constructs a new <code>FieldSchema</code>.
     * @alias module:model/FieldSchema
     * @param system {String} 
     * @param type {String} 
     */
    constructor(system, type) { 
        
        FieldSchema.initialize(this, system, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, system, type) { 
        obj['system'] = system;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>FieldSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldSchema} obj Optional instance to populate.
     * @return {module:model/FieldSchema} The populated <code>FieldSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldSchema();

            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} system
 */
FieldSchema.prototype['system'] = undefined;

/**
 * @member {String} type
 */
FieldSchema.prototype['type'] = undefined;






export default FieldSchema;

