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
 * The InlineResponse20020MetaComplexityBeans model module.
 * @module model/InlineResponse20020MetaComplexityBeans
 * @version 1.1.0
 */
class InlineResponse20020MetaComplexityBeans {
    /**
     * Constructs a new <code>InlineResponse20020MetaComplexityBeans</code>.
     * @alias module:model/InlineResponse20020MetaComplexityBeans
     * @param limit {Number} 
     * @param value {Number} 
     */
    constructor(limit, value) { 
        
        InlineResponse20020MetaComplexityBeans.initialize(this, limit, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit, value) { 
        obj['limit'] = limit;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>InlineResponse20020MetaComplexityBeans</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020MetaComplexityBeans} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020MetaComplexityBeans} The populated <code>InlineResponse20020MetaComplexityBeans</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20020MetaComplexityBeans();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} limit
 */
InlineResponse20020MetaComplexityBeans.prototype['limit'] = undefined;

/**
 * @member {Number} value
 */
InlineResponse20020MetaComplexityBeans.prototype['value'] = undefined;






export default InlineResponse20020MetaComplexityBeans;
