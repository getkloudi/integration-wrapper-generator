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
import InlineResponse20020MetaComplexity from './InlineResponse20020MetaComplexity';

/**
 * The InlineResponse20020Meta model module.
 * @module model/InlineResponse20020Meta
 * @version 1.2.0
 */
class InlineResponse20020Meta {
    /**
     * Constructs a new <code>InlineResponse20020Meta</code>.
     * @alias module:model/InlineResponse20020Meta
     * @param complexity {module:model/InlineResponse20020MetaComplexity} 
     */
    constructor(complexity) { 
        
        InlineResponse20020Meta.initialize(this, complexity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, complexity) { 
        obj['complexity'] = complexity;
    }

    /**
     * Constructs a <code>InlineResponse20020Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020Meta} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020Meta} The populated <code>InlineResponse20020Meta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20020Meta();

            if (data.hasOwnProperty('complexity')) {
                obj['complexity'] = InlineResponse20020MetaComplexity.constructFromObject(data['complexity']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20020MetaComplexity} complexity
 */
InlineResponse20020Meta.prototype['complexity'] = undefined;






export default InlineResponse20020Meta;

