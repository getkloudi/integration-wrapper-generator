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
 * The InlineResponse20097CustomFieldUsage model module.
 * @module model/InlineResponse20097CustomFieldUsage
 * @version 1.1.0
 */
class InlineResponse20097CustomFieldUsage {
    /**
     * Constructs a new <code>InlineResponse20097CustomFieldUsage</code>.
     * @alias module:model/InlineResponse20097CustomFieldUsage
     * @param customFieldId {Number} 
     * @param fieldName {String} 
     * @param issueCountWithVersionInCustomField {Number} 
     */
    constructor(customFieldId, fieldName, issueCountWithVersionInCustomField) { 
        
        InlineResponse20097CustomFieldUsage.initialize(this, customFieldId, fieldName, issueCountWithVersionInCustomField);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, customFieldId, fieldName, issueCountWithVersionInCustomField) { 
        obj['customFieldId'] = customFieldId;
        obj['fieldName'] = fieldName;
        obj['issueCountWithVersionInCustomField'] = issueCountWithVersionInCustomField;
    }

    /**
     * Constructs a <code>InlineResponse20097CustomFieldUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20097CustomFieldUsage} obj Optional instance to populate.
     * @return {module:model/InlineResponse20097CustomFieldUsage} The populated <code>InlineResponse20097CustomFieldUsage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20097CustomFieldUsage();

            if (data.hasOwnProperty('customFieldId')) {
                obj['customFieldId'] = ApiClient.convertToType(data['customFieldId'], 'Number');
            }
            if (data.hasOwnProperty('fieldName')) {
                obj['fieldName'] = ApiClient.convertToType(data['fieldName'], 'String');
            }
            if (data.hasOwnProperty('issueCountWithVersionInCustomField')) {
                obj['issueCountWithVersionInCustomField'] = ApiClient.convertToType(data['issueCountWithVersionInCustomField'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} customFieldId
 */
InlineResponse20097CustomFieldUsage.prototype['customFieldId'] = undefined;

/**
 * @member {String} fieldName
 */
InlineResponse20097CustomFieldUsage.prototype['fieldName'] = undefined;

/**
 * @member {Number} issueCountWithVersionInCustomField
 */
InlineResponse20097CustomFieldUsage.prototype['issueCountWithVersionInCustomField'] = undefined;






export default InlineResponse20097CustomFieldUsage;
