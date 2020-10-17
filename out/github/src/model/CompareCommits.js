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
import CompareCommitsBaseCommit from './CompareCommitsBaseCommit';
import CompareCommitsFiles from './CompareCommitsFiles';

/**
 * The CompareCommits model module.
 * @module model/CompareCommits
 * @version 1.4.4
 */
class CompareCommits {
    /**
     * Constructs a new <code>CompareCommits</code>.
     * @alias module:model/CompareCommits
     */
    constructor() { 
        
        CompareCommits.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompareCommits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompareCommits} obj Optional instance to populate.
     * @return {module:model/CompareCommits} The populated <code>CompareCommits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompareCommits();

            if (data.hasOwnProperty('ahead_by')) {
                obj['ahead_by'] = ApiClient.convertToType(data['ahead_by'], 'Number');
            }
            if (data.hasOwnProperty('base_commit')) {
                obj['base_commit'] = CompareCommitsBaseCommit.constructFromObject(data['base_commit']);
            }
            if (data.hasOwnProperty('behind_by')) {
                obj['behind_by'] = ApiClient.convertToType(data['behind_by'], 'Number');
            }
            if (data.hasOwnProperty('commits')) {
                obj['commits'] = ApiClient.convertToType(data['commits'], [CompareCommitsBaseCommit]);
            }
            if (data.hasOwnProperty('diff_url')) {
                obj['diff_url'] = ApiClient.convertToType(data['diff_url'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [CompareCommitsFiles]);
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('patch_url')) {
                obj['patch_url'] = ApiClient.convertToType(data['patch_url'], 'String');
            }
            if (data.hasOwnProperty('permalink_url')) {
                obj['permalink_url'] = ApiClient.convertToType(data['permalink_url'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('total_commits')) {
                obj['total_commits'] = ApiClient.convertToType(data['total_commits'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} ahead_by
 */
CompareCommits.prototype['ahead_by'] = undefined;

/**
 * @member {module:model/CompareCommitsBaseCommit} base_commit
 */
CompareCommits.prototype['base_commit'] = undefined;

/**
 * @member {Number} behind_by
 */
CompareCommits.prototype['behind_by'] = undefined;

/**
 * @member {Array.<module:model/CompareCommitsBaseCommit>} commits
 */
CompareCommits.prototype['commits'] = undefined;

/**
 * @member {String} diff_url
 */
CompareCommits.prototype['diff_url'] = undefined;

/**
 * @member {Array.<module:model/CompareCommitsFiles>} files
 */
CompareCommits.prototype['files'] = undefined;

/**
 * @member {String} html_url
 */
CompareCommits.prototype['html_url'] = undefined;

/**
 * @member {String} patch_url
 */
CompareCommits.prototype['patch_url'] = undefined;

/**
 * @member {String} permalink_url
 */
CompareCommits.prototype['permalink_url'] = undefined;

/**
 * @member {String} status
 */
CompareCommits.prototype['status'] = undefined;

/**
 * @member {Number} total_commits
 */
CompareCommits.prototype['total_commits'] = undefined;

/**
 * @member {String} url
 */
CompareCommits.prototype['url'] = undefined;






export default CompareCommits;

