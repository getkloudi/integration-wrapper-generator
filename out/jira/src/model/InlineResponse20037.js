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
import InlineResponse20037Fields from './InlineResponse20037Fields';

/**
 * The InlineResponse20037 model module.
 * @module model/InlineResponse20037
 * @version 1.3.1
 */
class InlineResponse20037 {
    /**
     * Constructs a new <code>InlineResponse20037</code>.
     * 
     * @alias module:model/InlineResponse20037
     * @param fields {module:model/InlineResponse20037Fields} 
     * @param id {String} 
     * @param key {String} 
     * @param self {String} 
     */
    constructor(fields, id, key, self) { 
        
        InlineResponse20037.initialize(this, fields, id, key, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fields, id, key, self) { 
        obj['fields'] = fields;
        obj['id'] = id;
        obj['key'] = key;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20037</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037} The populated <code>InlineResponse20037</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20037();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = InlineResponse20037Fields.constructFromObject(data['fields']);
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
 * @member {module:model/InlineResponse20037Fields} fields
 */
InlineResponse20037.prototype['fields'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20037.prototype['id'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20037.prototype['key'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20037.prototype['self'] = undefined;






export default InlineResponse20037;

