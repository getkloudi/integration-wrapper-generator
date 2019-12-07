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

/**
 * The IssueEventIssuePullRequest model module.
 * @module model/IssueEventIssuePullRequest
 * @version 1.0.0
 */
class IssueEventIssuePullRequest {
    /**
     * Constructs a new <code>IssueEventIssuePullRequest</code>.
     * @alias module:model/IssueEventIssuePullRequest
     */
    constructor() { 
        
        IssueEventIssuePullRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueEventIssuePullRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventIssuePullRequest} obj Optional instance to populate.
     * @return {module:model/IssueEventIssuePullRequest} The populated <code>IssueEventIssuePullRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueEventIssuePullRequest();

            if (data.hasOwnProperty('diff_url')) {
                obj['diff_url'] = ApiClient.convertToType(data['diff_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('patch_url')) {
                obj['patch_url'] = ApiClient.convertToType(data['patch_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} diff_url
 */
IssueEventIssuePullRequest.prototype['diff_url'] = undefined;

/**
 * @member {String} html_url
 */
IssueEventIssuePullRequest.prototype['html_url'] = undefined;

/**
 * @member {String} patch_url
 */
IssueEventIssuePullRequest.prototype['patch_url'] = undefined;






export default IssueEventIssuePullRequest;

