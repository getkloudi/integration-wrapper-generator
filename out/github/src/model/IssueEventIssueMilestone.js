/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
import User from './User';

/**
 * The IssueEventIssueMilestone model module.
 * @module model/IssueEventIssueMilestone
 * @version v3
 */
class IssueEventIssueMilestone {
    /**
     * Constructs a new <code>IssueEventIssueMilestone</code>.
     * @alias module:model/IssueEventIssueMilestone
     */
    constructor() { 
        
        IssueEventIssueMilestone.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueEventIssueMilestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventIssueMilestone} obj Optional instance to populate.
     * @return {module:model/IssueEventIssueMilestone} The populated <code>IssueEventIssueMilestone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueEventIssueMilestone();

            if (data.hasOwnProperty('closed_issues')) {
                obj['closed_issues'] = ApiClient.convertToType(data['closed_issues'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = User.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('open_issues')) {
                obj['open_issues'] = ApiClient.convertToType(data['open_issues'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], Object);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} closed_issues
 */
IssueEventIssueMilestone.prototype['closed_issues'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */
IssueEventIssueMilestone.prototype['created_at'] = undefined;

/**
 * @member {module:model/User} creator
 */
IssueEventIssueMilestone.prototype['creator'] = undefined;

/**
 * @member {String} description
 */
IssueEventIssueMilestone.prototype['description'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} due_on
 */
IssueEventIssueMilestone.prototype['due_on'] = undefined;

/**
 * @member {Number} number
 */
IssueEventIssueMilestone.prototype['number'] = undefined;

/**
 * @member {Number} open_issues
 */
IssueEventIssueMilestone.prototype['open_issues'] = undefined;

/**
 * @member {Object} state
 */
IssueEventIssueMilestone.prototype['state'] = undefined;

/**
 * @member {String} title
 */
IssueEventIssueMilestone.prototype['title'] = undefined;

/**
 * @member {String} url
 */
IssueEventIssueMilestone.prototype['url'] = undefined;






export default IssueEventIssueMilestone;
