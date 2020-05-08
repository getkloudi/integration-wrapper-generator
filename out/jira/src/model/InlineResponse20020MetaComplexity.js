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
import InlineResponse20020MetaComplexityBeans from './InlineResponse20020MetaComplexityBeans';

/**
 * The InlineResponse20020MetaComplexity model module.
 * @module model/InlineResponse20020MetaComplexity
 * @version 1.3.1
 */
class InlineResponse20020MetaComplexity {
    /**
     * Constructs a new <code>InlineResponse20020MetaComplexity</code>.
     * @alias module:model/InlineResponse20020MetaComplexity
     * @param beans {module:model/InlineResponse20020MetaComplexityBeans} 
     * @param expensiveOperations {module:model/InlineResponse20020MetaComplexityBeans} 
     * @param primitiveValues {module:model/InlineResponse20020MetaComplexityBeans} 
     * @param steps {module:model/InlineResponse20020MetaComplexityBeans} 
     */
    constructor(beans, expensiveOperations, primitiveValues, steps) { 
        
        InlineResponse20020MetaComplexity.initialize(this, beans, expensiveOperations, primitiveValues, steps);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, beans, expensiveOperations, primitiveValues, steps) { 
        obj['beans'] = beans;
        obj['expensiveOperations'] = expensiveOperations;
        obj['primitiveValues'] = primitiveValues;
        obj['steps'] = steps;
    }

    /**
     * Constructs a <code>InlineResponse20020MetaComplexity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020MetaComplexity} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020MetaComplexity} The populated <code>InlineResponse20020MetaComplexity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20020MetaComplexity();

            if (data.hasOwnProperty('beans')) {
                obj['beans'] = InlineResponse20020MetaComplexityBeans.constructFromObject(data['beans']);
            }
            if (data.hasOwnProperty('expensiveOperations')) {
                obj['expensiveOperations'] = InlineResponse20020MetaComplexityBeans.constructFromObject(data['expensiveOperations']);
            }
            if (data.hasOwnProperty('primitiveValues')) {
                obj['primitiveValues'] = InlineResponse20020MetaComplexityBeans.constructFromObject(data['primitiveValues']);
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = InlineResponse20020MetaComplexityBeans.constructFromObject(data['steps']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20020MetaComplexityBeans} beans
 */
InlineResponse20020MetaComplexity.prototype['beans'] = undefined;

/**
 * @member {module:model/InlineResponse20020MetaComplexityBeans} expensiveOperations
 */
InlineResponse20020MetaComplexity.prototype['expensiveOperations'] = undefined;

/**
 * @member {module:model/InlineResponse20020MetaComplexityBeans} primitiveValues
 */
InlineResponse20020MetaComplexity.prototype['primitiveValues'] = undefined;

/**
 * @member {module:model/InlineResponse20020MetaComplexityBeans} steps
 */
InlineResponse20020MetaComplexity.prototype['steps'] = undefined;






export default InlineResponse20020MetaComplexity;

