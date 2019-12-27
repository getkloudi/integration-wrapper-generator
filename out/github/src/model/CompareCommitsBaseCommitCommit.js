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
 * The CompareCommitsBaseCommitCommit model module.
 * @module model/CompareCommitsBaseCommitCommit
 * @version 1.4.3
 */
class CompareCommitsBaseCommitCommit {
    /**
     * Constructs a new <code>CompareCommitsBaseCommitCommit</code>.
     * @alias module:model/CompareCommitsBaseCommitCommit
     */
    constructor() { 
        
        CompareCommitsBaseCommitCommit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompareCommitsBaseCommitCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompareCommitsBaseCommitCommit} obj Optional instance to populate.
     * @return {module:model/CompareCommitsBaseCommitCommit} The populated <code>CompareCommitsBaseCommitCommit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompareCommitsBaseCommitCommit();

            if (data.hasOwnProperty('author')) {
                obj['author'] = CompareCommitsBaseCommitCommitAuthor.constructFromObject(data['author']);
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
CompareCommitsBaseCommitCommit.prototype['author'] = undefined;

/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} committer
 */
CompareCommitsBaseCommitCommit.prototype['committer'] = undefined;

/**
 * @member {String} message
 */
CompareCommitsBaseCommitCommit.prototype['message'] = undefined;

/**
 * @member {module:model/BranchCommitCommitTree} tree
 */
CompareCommitsBaseCommitCommit.prototype['tree'] = undefined;

/**
 * @member {String} url
 */
CompareCommitsBaseCommitCommit.prototype['url'] = undefined;






export default CompareCommitsBaseCommitCommit;

