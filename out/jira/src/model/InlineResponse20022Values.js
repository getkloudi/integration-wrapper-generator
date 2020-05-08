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
import InlineResponse20022Config from './InlineResponse20022Config';
import InlineResponse20022Properties from './InlineResponse20022Properties';

/**
 * The InlineResponse20022Values model module.
 * @module model/InlineResponse20022Values
 * @version 1.3.1
 */
class InlineResponse20022Values {
    /**
     * Constructs a new <code>InlineResponse20022Values</code>.
     * @alias module:model/InlineResponse20022Values
     * @param id {Number} 
     * @param value {String} 
     */
    constructor(id, value) { 
        
        InlineResponse20022Values.initialize(this, id, value);
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
     * Constructs a <code>InlineResponse20022Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022Values} The populated <code>InlineResponse20022Values</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20022Values();

            if (data.hasOwnProperty('config')) {
                obj['config'] = InlineResponse20022Config.constructFromObject(data['config']);
            }
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
 * @member {module:model/InlineResponse20022Config} config
 */
InlineResponse20022Values.prototype['config'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20022Values.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse20022Properties} properties
 */
InlineResponse20022Values.prototype['properties'] = undefined;

/**
 * @member {String} value
 */
InlineResponse20022Values.prototype['value'] = undefined;






export default InlineResponse20022Values;

