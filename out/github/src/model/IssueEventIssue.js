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
import IssueEventIssueLabels from './IssueEventIssueLabels';
import IssueEventIssueMilestone from './IssueEventIssueMilestone';
import IssueEventIssuePullRequest from './IssueEventIssuePullRequest';
import User from './User';

/**
 * The IssueEventIssue model module.
 * @module model/IssueEventIssue
 * @version 1.4.1
 */
class IssueEventIssue {
    /**
     * Constructs a new <code>IssueEventIssue</code>.
     * @alias module:model/IssueEventIssue
     */
    constructor() { 
        
        IssueEventIssue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueEventIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventIssue} obj Optional instance to populate.
     * @return {module:model/IssueEventIssue} The populated <code>IssueEventIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueEventIssue();

            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = User.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('closed_at')) {
                obj['closed_at'] = ApiClient.convertToType(data['closed_at'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], [IssueEventIssueLabels]);
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = IssueEventIssueMilestone.constructFromObject(data['milestone']);
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('pull_request')) {
                obj['pull_request'] = IssueEventIssuePullRequest.constructFromObject(data['pull_request']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], Object);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/User} assignee
 */
IssueEventIssue.prototype['assignee'] = undefined;

/**
 * @member {String} body
 */
IssueEventIssue.prototype['body'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} closed_at
 */
IssueEventIssue.prototype['closed_at'] = undefined;

/**
 * @member {Number} comments
 */
IssueEventIssue.prototype['comments'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */
IssueEventIssue.prototype['created_at'] = undefined;

/**
 * @member {String} html_url
 */
IssueEventIssue.prototype['html_url'] = undefined;

/**
 * @member {Array.<module:model/IssueEventIssueLabels>} labels
 */
IssueEventIssue.prototype['labels'] = undefined;

/**
 * @member {module:model/IssueEventIssueMilestone} milestone
 */
IssueEventIssue.prototype['milestone'] = undefined;

/**
 * @member {Number} number
 */
IssueEventIssue.prototype['number'] = undefined;

/**
 * @member {module:model/IssueEventIssuePullRequest} pull_request
 */
IssueEventIssue.prototype['pull_request'] = undefined;

/**
 * @member {Object} state
 */
IssueEventIssue.prototype['state'] = undefined;

/**
 * @member {String} title
 */
IssueEventIssue.prototype['title'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */
IssueEventIssue.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
IssueEventIssue.prototype['url'] = undefined;

/**
 * @member {module:model/User} user
 */
IssueEventIssue.prototype['user'] = undefined;






export default IssueEventIssue;

