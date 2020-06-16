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
import IssueLinkType from './IssueLinkType';
import LinkedIssue from './LinkedIssue';

/**
 * The IssueLink model module.
 * @module model/IssueLink
 * @version 1.4.0
 */
class IssueLink {
    /**
     * Constructs a new <code>IssueLink</code>.
     * Details of a link between issues.
     * @alias module:model/IssueLink
     */
    constructor() { 
        
        IssueLink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueLink} obj Optional instance to populate.
     * @return {module:model/IssueLink} The populated <code>IssueLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueLink();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inwardIssue')) {
                obj['inwardIssue'] = ApiClient.convertToType(data['inwardIssue'], LinkedIssue);
            }
            if (data.hasOwnProperty('outwardIssue')) {
                obj['outwardIssue'] = ApiClient.convertToType(data['outwardIssue'], LinkedIssue);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], IssueLinkType);
            }
        }
        return obj;
    }


}

/**
 * The ID of the issue link.
 * @member {String} id
 */
IssueLink.prototype['id'] = undefined;

/**
 * The issue the link joins to.
 * @member {module:model/LinkedIssue} inwardIssue
 */
IssueLink.prototype['inwardIssue'] = undefined;

/**
 * The issue the link originates from.
 * @member {module:model/LinkedIssue} outwardIssue
 */
IssueLink.prototype['outwardIssue'] = undefined;

/**
 * The URL of the issue link.
 * @member {String} self
 */
IssueLink.prototype['self'] = undefined;

/**
 * The type of link between the issues.
 * @member {module:model/IssueLinkType} type
 */
IssueLink.prototype['type'] = undefined;






export default IssueLink;

