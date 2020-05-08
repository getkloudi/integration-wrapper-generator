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
import InlineResponse20037FieldsOutwardIssueFieldsStatus from './InlineResponse20037FieldsOutwardIssueFieldsStatus';

/**
 * The InlineResponse20037FieldsOutwardIssueFields model module.
 * @module model/InlineResponse20037FieldsOutwardIssueFields
 * @version 1.1.0
 */
class InlineResponse20037FieldsOutwardIssueFields {
    /**
     * Constructs a new <code>InlineResponse20037FieldsOutwardIssueFields</code>.
     * @alias module:model/InlineResponse20037FieldsOutwardIssueFields
     * @param status {module:model/InlineResponse20037FieldsOutwardIssueFieldsStatus} 
     */
    constructor(status) { 
        
        InlineResponse20037FieldsOutwardIssueFields.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>InlineResponse20037FieldsOutwardIssueFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsOutwardIssueFields} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsOutwardIssueFields} The populated <code>InlineResponse20037FieldsOutwardIssueFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20037FieldsOutwardIssueFields();

            if (data.hasOwnProperty('status')) {
                obj['status'] = InlineResponse20037FieldsOutwardIssueFieldsStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20037FieldsOutwardIssueFieldsStatus} status
 */
InlineResponse20037FieldsOutwardIssueFields.prototype['status'] = undefined;






export default InlineResponse20037FieldsOutwardIssueFields;
