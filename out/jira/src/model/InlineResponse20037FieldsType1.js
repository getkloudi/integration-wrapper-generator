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
 * The InlineResponse20037FieldsType1 model module.
 * @module model/InlineResponse20037FieldsType1
 * @version 1.0.0
 */
class InlineResponse20037FieldsType1 {
    /**
     * Constructs a new <code>InlineResponse20037FieldsType1</code>.
     * @alias module:model/InlineResponse20037FieldsType1
     * @param id {String} 
     * @param inward {String} 
     * @param name {String} 
     * @param outward {String} 
     */
    constructor(id, inward, name, outward) { 
        
        InlineResponse20037FieldsType1.initialize(this, id, inward, name, outward);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, inward, name, outward) { 
        obj['id'] = id;
        obj['inward'] = inward;
        obj['name'] = name;
        obj['outward'] = outward;
    }

    /**
     * Constructs a <code>InlineResponse20037FieldsType1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsType1} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsType1} The populated <code>InlineResponse20037FieldsType1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20037FieldsType1();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inward')) {
                obj['inward'] = ApiClient.convertToType(data['inward'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('outward')) {
                obj['outward'] = ApiClient.convertToType(data['outward'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse20037FieldsType1.prototype['id'] = undefined;

/**
 * @member {String} inward
 */
InlineResponse20037FieldsType1.prototype['inward'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20037FieldsType1.prototype['name'] = undefined;

/**
 * @member {String} outward
 */
InlineResponse20037FieldsType1.prototype['outward'] = undefined;






export default InlineResponse20037FieldsType1;

