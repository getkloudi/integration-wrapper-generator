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
 * The InlineResponse20057 model module.
 * @module model/InlineResponse20057
 * @version 1.2.0
 */
class InlineResponse20057 {
    /**
     * Constructs a new <code>InlineResponse20057</code>.
     * 
     * @alias module:model/InlineResponse20057
     * @param queryStrings {Array.<Object>} 
     */
    constructor(queryStrings) { 
        
        InlineResponse20057.initialize(this, queryStrings);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, queryStrings) { 
        obj['queryStrings'] = queryStrings;
    }

    /**
     * Constructs a <code>InlineResponse20057</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20057} obj Optional instance to populate.
     * @return {module:model/InlineResponse20057} The populated <code>InlineResponse20057</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20057();

            if (data.hasOwnProperty('queryStrings')) {
                obj['queryStrings'] = ApiClient.convertToType(data['queryStrings'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} queryStrings
 */
InlineResponse20057.prototype['queryStrings'] = undefined;






export default InlineResponse20057;

