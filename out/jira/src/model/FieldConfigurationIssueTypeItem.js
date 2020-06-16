/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FieldConfigurationIssueTypeItem model module.
 * @module model/FieldConfigurationIssueTypeItem
 * @version 1.4.0
 */
class FieldConfigurationIssueTypeItem {
    /**
     * Constructs a new <code>FieldConfigurationIssueTypeItem</code>.
     * The field configuration for an issue type.
     * @alias module:model/FieldConfigurationIssueTypeItem
     * @param fieldConfigurationId {String} The ID of the field configuration.
     * @param fieldConfigurationSchemeId {String} The ID of the field configuration scheme.
     * @param issueTypeId {String} The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration.
     */
    constructor(fieldConfigurationId, fieldConfigurationSchemeId, issueTypeId) { 
        
        FieldConfigurationIssueTypeItem.initialize(this, fieldConfigurationId, fieldConfigurationSchemeId, issueTypeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fieldConfigurationId, fieldConfigurationSchemeId, issueTypeId) { 
        obj['fieldConfigurationId'] = fieldConfigurationId;
        obj['fieldConfigurationSchemeId'] = fieldConfigurationSchemeId;
        obj['issueTypeId'] = issueTypeId;
    }

    /**
     * Constructs a <code>FieldConfigurationIssueTypeItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldConfigurationIssueTypeItem} obj Optional instance to populate.
     * @return {module:model/FieldConfigurationIssueTypeItem} The populated <code>FieldConfigurationIssueTypeItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldConfigurationIssueTypeItem();

            if (data.hasOwnProperty('fieldConfigurationId')) {
                obj['fieldConfigurationId'] = ApiClient.convertToType(data['fieldConfigurationId'], 'String');
            }
            if (data.hasOwnProperty('fieldConfigurationSchemeId')) {
                obj['fieldConfigurationSchemeId'] = ApiClient.convertToType(data['fieldConfigurationSchemeId'], 'String');
            }
            if (data.hasOwnProperty('issueTypeId')) {
                obj['issueTypeId'] = ApiClient.convertToType(data['issueTypeId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the field configuration.
 * @member {String} fieldConfigurationId
 */
FieldConfigurationIssueTypeItem.prototype['fieldConfigurationId'] = undefined;

/**
 * The ID of the field configuration scheme.
 * @member {String} fieldConfigurationSchemeId
 */
FieldConfigurationIssueTypeItem.prototype['fieldConfigurationSchemeId'] = undefined;

/**
 * The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration.
 * @member {String} issueTypeId
 */
FieldConfigurationIssueTypeItem.prototype['issueTypeId'] = undefined;






export default FieldConfigurationIssueTypeItem;

