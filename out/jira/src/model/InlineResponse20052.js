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
import InlineResponse20052IssueSecuritySchemes from './InlineResponse20052IssueSecuritySchemes';

/**
 * The InlineResponse20052 model module.
 * @module model/InlineResponse20052
 * @version 1.3.0
 */
class InlineResponse20052 {
    /**
     * Constructs a new <code>InlineResponse20052</code>.
     * 
     * @alias module:model/InlineResponse20052
     * @param issueSecuritySchemes {Array.<module:model/InlineResponse20052IssueSecuritySchemes>} 
     */
    constructor(issueSecuritySchemes) { 
        
        InlineResponse20052.initialize(this, issueSecuritySchemes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueSecuritySchemes) { 
        obj['issueSecuritySchemes'] = issueSecuritySchemes;
    }

    /**
     * Constructs a <code>InlineResponse20052</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20052} obj Optional instance to populate.
     * @return {module:model/InlineResponse20052} The populated <code>InlineResponse20052</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20052();

            if (data.hasOwnProperty('issueSecuritySchemes')) {
                obj['issueSecuritySchemes'] = ApiClient.convertToType(data['issueSecuritySchemes'], [InlineResponse20052IssueSecuritySchemes]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InlineResponse20052IssueSecuritySchemes>} issueSecuritySchemes
 */
InlineResponse20052.prototype['issueSecuritySchemes'] = undefined;






export default InlineResponse20052;

