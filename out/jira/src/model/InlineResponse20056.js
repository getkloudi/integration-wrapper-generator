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
import InlineResponse20056Results from './InlineResponse20056Results';

/**
 * The InlineResponse20056 model module.
 * @module model/InlineResponse20056
 * @version 1.3.1
 */
class InlineResponse20056 {
    /**
     * Constructs a new <code>InlineResponse20056</code>.
     * 
     * @alias module:model/InlineResponse20056
     * @param results {Array.<module:model/InlineResponse20056Results>} 
     */
    constructor(results) { 
        
        InlineResponse20056.initialize(this, results);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, results) { 
        obj['results'] = results;
    }

    /**
     * Constructs a <code>InlineResponse20056</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20056} obj Optional instance to populate.
     * @return {module:model/InlineResponse20056} The populated <code>InlineResponse20056</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20056();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [InlineResponse20056Results]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InlineResponse20056Results>} results
 */
InlineResponse20056.prototype['results'] = undefined;






export default InlineResponse20056;

