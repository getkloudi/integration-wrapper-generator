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
import InlineResponse20050InwardIssueFieldsIssuetype from './InlineResponse20050InwardIssueFieldsIssuetype';
import InlineResponse20050InwardIssueFieldsPriority from './InlineResponse20050InwardIssueFieldsPriority';
import InlineResponse20050InwardIssueFieldsStatus from './InlineResponse20050InwardIssueFieldsStatus';

/**
 * The InlineResponse20050InwardIssueFields model module.
 * @module model/InlineResponse20050InwardIssueFields
 * @version 1.1.0
 */
class InlineResponse20050InwardIssueFields {
    /**
     * Constructs a new <code>InlineResponse20050InwardIssueFields</code>.
     * @alias module:model/InlineResponse20050InwardIssueFields
     * @param issuetype {module:model/InlineResponse20050InwardIssueFieldsIssuetype} 
     * @param priority {module:model/InlineResponse20050InwardIssueFieldsPriority} 
     * @param status {module:model/InlineResponse20050InwardIssueFieldsStatus} 
     */
    constructor(issuetype, priority, status) { 
        
        InlineResponse20050InwardIssueFields.initialize(this, issuetype, priority, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issuetype, priority, status) { 
        obj['issuetype'] = issuetype;
        obj['priority'] = priority;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>InlineResponse20050InwardIssueFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050InwardIssueFields} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050InwardIssueFields} The populated <code>InlineResponse20050InwardIssueFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050InwardIssueFields();

            if (data.hasOwnProperty('issuetype')) {
                obj['issuetype'] = InlineResponse20050InwardIssueFieldsIssuetype.constructFromObject(data['issuetype']);
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = InlineResponse20050InwardIssueFieldsPriority.constructFromObject(data['priority']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InlineResponse20050InwardIssueFieldsStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20050InwardIssueFieldsIssuetype} issuetype
 */
InlineResponse20050InwardIssueFields.prototype['issuetype'] = undefined;

/**
 * @member {module:model/InlineResponse20050InwardIssueFieldsPriority} priority
 */
InlineResponse20050InwardIssueFields.prototype['priority'] = undefined;

/**
 * @member {module:model/InlineResponse20050InwardIssueFieldsStatus} status
 */
InlineResponse20050InwardIssueFields.prototype['status'] = undefined;






export default InlineResponse20050InwardIssueFields;
