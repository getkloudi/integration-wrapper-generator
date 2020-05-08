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
 * The InlineResponse20037FieldsOutwardIssueFieldsStatus model module.
 * @module model/InlineResponse20037FieldsOutwardIssueFieldsStatus
 * @version 1.0.0
 */
class InlineResponse20037FieldsOutwardIssueFieldsStatus {
    /**
     * Constructs a new <code>InlineResponse20037FieldsOutwardIssueFieldsStatus</code>.
     * @alias module:model/InlineResponse20037FieldsOutwardIssueFieldsStatus
     * @param iconUrl {String} 
     * @param name {String} 
     */
    constructor(iconUrl, name) { 
        
        InlineResponse20037FieldsOutwardIssueFieldsStatus.initialize(this, iconUrl, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iconUrl, name) { 
        obj['iconUrl'] = iconUrl;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>InlineResponse20037FieldsOutwardIssueFieldsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsOutwardIssueFieldsStatus} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsOutwardIssueFieldsStatus} The populated <code>InlineResponse20037FieldsOutwardIssueFieldsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20037FieldsOutwardIssueFieldsStatus();

            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} iconUrl
 */
InlineResponse20037FieldsOutwardIssueFieldsStatus.prototype['iconUrl'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20037FieldsOutwardIssueFieldsStatus.prototype['name'] = undefined;






export default InlineResponse20037FieldsOutwardIssueFieldsStatus;

