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
import InlineResponse20022Properties from './InlineResponse20022Properties';

/**
 * The InlineResponse20024Values model module.
 * @module model/InlineResponse20024Values
 * @version 1.3.0
 */
class InlineResponse20024Values {
    /**
     * Constructs a new <code>InlineResponse20024Values</code>.
     * @alias module:model/InlineResponse20024Values
     * @param id {Number} 
     * @param value {String} 
     */
    constructor(id, value) { 
        
        InlineResponse20024Values.initialize(this, id, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, value) { 
        obj['id'] = id;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>InlineResponse20024Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20024Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20024Values} The populated <code>InlineResponse20024Values</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20024Values();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = InlineResponse20022Properties.constructFromObject(data['properties']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
InlineResponse20024Values.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse20022Properties} properties
 */
InlineResponse20024Values.prototype['properties'] = undefined;

/**
 * @member {String} value
 */
InlineResponse20024Values.prototype['value'] = undefined;






export default InlineResponse20024Values;

