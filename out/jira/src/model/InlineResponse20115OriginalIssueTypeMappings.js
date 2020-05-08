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
 * The InlineResponse20115OriginalIssueTypeMappings model module.
 * @module model/InlineResponse20115OriginalIssueTypeMappings
 * @version 1.1.0
 */
class InlineResponse20115OriginalIssueTypeMappings {
    /**
     * Constructs a new <code>InlineResponse20115OriginalIssueTypeMappings</code>.
     * @alias module:model/InlineResponse20115OriginalIssueTypeMappings
     * @param _10001 {String} 
     */
    constructor(_10001) { 
        
        InlineResponse20115OriginalIssueTypeMappings.initialize(this, _10001);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _10001) { 
        obj['10001'] = _10001;
    }

    /**
     * Constructs a <code>InlineResponse20115OriginalIssueTypeMappings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20115OriginalIssueTypeMappings} obj Optional instance to populate.
     * @return {module:model/InlineResponse20115OriginalIssueTypeMappings} The populated <code>InlineResponse20115OriginalIssueTypeMappings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20115OriginalIssueTypeMappings();

            if (data.hasOwnProperty('10001')) {
                obj['10001'] = ApiClient.convertToType(data['10001'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} 10001
 */
InlineResponse20115OriginalIssueTypeMappings.prototype['10001'] = undefined;






export default InlineResponse20115OriginalIssueTypeMappings;

