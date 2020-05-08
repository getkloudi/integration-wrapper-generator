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
import InlineResponse20041FieldsSummarySchema from './InlineResponse20041FieldsSummarySchema';

/**
 * The InlineResponse20041FieldsSummary model module.
 * @module model/InlineResponse20041FieldsSummary
 * @version 1.0.0
 */
class InlineResponse20041FieldsSummary {
    /**
     * Constructs a new <code>InlineResponse20041FieldsSummary</code>.
     * @alias module:model/InlineResponse20041FieldsSummary
     * @param allowedValues {Array.<Object>} 
     * @param defaultValue {String} 
     * @param hasDefaultValue {Boolean} 
     * @param key {String} 
     * @param name {String} 
     * @param operations {Array.<Object>} 
     * @param required {Boolean} 
     * @param schema {module:model/InlineResponse20041FieldsSummarySchema} 
     */
    constructor(allowedValues, defaultValue, hasDefaultValue, key, name, operations, required, schema) { 
        
        InlineResponse20041FieldsSummary.initialize(this, allowedValues, defaultValue, hasDefaultValue, key, name, operations, required, schema);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, allowedValues, defaultValue, hasDefaultValue, key, name, operations, required, schema) { 
        obj['allowedValues'] = allowedValues;
        obj['defaultValue'] = defaultValue;
        obj['hasDefaultValue'] = hasDefaultValue;
        obj['key'] = key;
        obj['name'] = name;
        obj['operations'] = operations;
        obj['required'] = required;
        obj['schema'] = schema;
    }

    /**
     * Constructs a <code>InlineResponse20041FieldsSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20041FieldsSummary} obj Optional instance to populate.
     * @return {module:model/InlineResponse20041FieldsSummary} The populated <code>InlineResponse20041FieldsSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20041FieldsSummary();

            if (data.hasOwnProperty('allowedValues')) {
                obj['allowedValues'] = ApiClient.convertToType(data['allowedValues'], [Object]);
            }
            if (data.hasOwnProperty('defaultValue')) {
                obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'String');
            }
            if (data.hasOwnProperty('hasDefaultValue')) {
                obj['hasDefaultValue'] = ApiClient.convertToType(data['hasDefaultValue'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [Object]);
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = InlineResponse20041FieldsSummarySchema.constructFromObject(data['schema']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} allowedValues
 */
InlineResponse20041FieldsSummary.prototype['allowedValues'] = undefined;

/**
 * @member {String} defaultValue
 */
InlineResponse20041FieldsSummary.prototype['defaultValue'] = undefined;

/**
 * @member {Boolean} hasDefaultValue
 */
InlineResponse20041FieldsSummary.prototype['hasDefaultValue'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20041FieldsSummary.prototype['key'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20041FieldsSummary.prototype['name'] = undefined;

/**
 * @member {Array.<Object>} operations
 */
InlineResponse20041FieldsSummary.prototype['operations'] = undefined;

/**
 * @member {Boolean} required
 */
InlineResponse20041FieldsSummary.prototype['required'] = undefined;

/**
 * @member {module:model/InlineResponse20041FieldsSummarySchema} schema
 */
InlineResponse20041FieldsSummary.prototype['schema'] = undefined;






export default InlineResponse20041FieldsSummary;

