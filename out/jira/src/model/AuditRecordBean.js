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
import AssociatedItemBean from './AssociatedItemBean';
import ChangedValueBean from './ChangedValueBean';

/**
 * The AuditRecordBean model module.
 * @module model/AuditRecordBean
 * @version 1.4.0
 */
class AuditRecordBean {
    /**
     * Constructs a new <code>AuditRecordBean</code>.
     * An audit record.
     * @alias module:model/AuditRecordBean
     */
    constructor() { 
        
        AuditRecordBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuditRecordBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuditRecordBean} obj Optional instance to populate.
     * @return {module:model/AuditRecordBean} The populated <code>AuditRecordBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuditRecordBean();

            if (data.hasOwnProperty('associatedItems')) {
                obj['associatedItems'] = ApiClient.convertToType(data['associatedItems'], [AssociatedItemBean]);
            }
            if (data.hasOwnProperty('authorKey')) {
                obj['authorKey'] = ApiClient.convertToType(data['authorKey'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('changedValues')) {
                obj['changedValues'] = ApiClient.convertToType(data['changedValues'], [ChangedValueBean]);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('eventSource')) {
                obj['eventSource'] = ApiClient.convertToType(data['eventSource'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('objectItem')) {
                obj['objectItem'] = AssociatedItemBean.constructFromObject(data['objectItem']);
            }
            if (data.hasOwnProperty('remoteAddress')) {
                obj['remoteAddress'] = ApiClient.convertToType(data['remoteAddress'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The list of items associated with the changed record.
 * @member {Array.<module:model/AssociatedItemBean>} associatedItems
 */
AuditRecordBean.prototype['associatedItems'] = undefined;

/**
 * Deprecated, use `authorAccountId` instead. The key of the user who created the audit record.
 * @member {String} authorKey
 */
AuditRecordBean.prototype['authorKey'] = undefined;

/**
 * The category of the audit record. For a list of these categories, see the help article [Auditing in Jira applications](https://confluence.atlassian.com/x/noXKM).
 * @member {String} category
 */
AuditRecordBean.prototype['category'] = undefined;

/**
 * The list of values changed in the record event.
 * @member {Array.<module:model/ChangedValueBean>} changedValues
 */
AuditRecordBean.prototype['changedValues'] = undefined;

/**
 * The date and time on which the audit record was created.
 * @member {Date} created
 */
AuditRecordBean.prototype['created'] = undefined;

/**
 * The description of the audit record.
 * @member {String} description
 */
AuditRecordBean.prototype['description'] = undefined;

/**
 * The event the audit record originated from.
 * @member {String} eventSource
 */
AuditRecordBean.prototype['eventSource'] = undefined;

/**
 * The ID of the audit record.
 * @member {Number} id
 */
AuditRecordBean.prototype['id'] = undefined;

/**
 * @member {module:model/AssociatedItemBean} objectItem
 */
AuditRecordBean.prototype['objectItem'] = undefined;

/**
 * The URL of the computer where the creation of the audit record was initiated.
 * @member {String} remoteAddress
 */
AuditRecordBean.prototype['remoteAddress'] = undefined;

/**
 * The summary of the audit record.
 * @member {String} summary
 */
AuditRecordBean.prototype['summary'] = undefined;






export default AuditRecordBean;

