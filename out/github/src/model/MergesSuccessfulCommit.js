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
import BranchCommitCommitTree from './BranchCommitCommitTree';
import CompareCommitsBaseCommitCommitAuthor from './CompareCommitsBaseCommitCommitAuthor';

/**
 * The MergesSuccessfulCommit model module.
 * @module model/MergesSuccessfulCommit
 * @version 1.4.2
 */
class MergesSuccessfulCommit {
    /**
     * Constructs a new <code>MergesSuccessfulCommit</code>.
     * @alias module:model/MergesSuccessfulCommit
     */
    constructor() { 
        
        MergesSuccessfulCommit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MergesSuccessfulCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergesSuccessfulCommit} obj Optional instance to populate.
     * @return {module:model/MergesSuccessfulCommit} The populated <code>MergesSuccessfulCommit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MergesSuccessfulCommit();

            if (data.hasOwnProperty('author')) {
                obj['author'] = CompareCommitsBaseCommitCommitAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('comment_count')) {
                obj['comment_count'] = ApiClient.convertToType(data['comment_count'], 'Number');
            }
            if (data.hasOwnProperty('committer')) {
                obj['committer'] = CompareCommitsBaseCommitCommitAuthor.constructFromObject(data['committer']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('tree')) {
                obj['tree'] = BranchCommitCommitTree.constructFromObject(data['tree']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} author
 */
MergesSuccessfulCommit.prototype['author'] = undefined;

/**
 * @member {Number} comment_count
 */
MergesSuccessfulCommit.prototype['comment_count'] = undefined;

/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} committer
 */
MergesSuccessfulCommit.prototype['committer'] = undefined;

/**
 * @member {String} message
 */
MergesSuccessfulCommit.prototype['message'] = undefined;

/**
 * @member {module:model/BranchCommitCommitTree} tree
 */
MergesSuccessfulCommit.prototype['tree'] = undefined;

/**
 * @member {String} url
 */
MergesSuccessfulCommit.prototype['url'] = undefined;






export default MergesSuccessfulCommit;

