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
import BranchCommitCommitAuthor from './BranchCommitCommitAuthor';
import BranchCommitCommitTree from './BranchCommitCommitTree';

/**
 * The RepoCommit model module.
 * @module model/RepoCommit
 * @version 1.4.3
 */
class RepoCommit {
    /**
     * Constructs a new <code>RepoCommit</code>.
     * @alias module:model/RepoCommit
     */
    constructor() { 
        
        RepoCommit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RepoCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoCommit} obj Optional instance to populate.
     * @return {module:model/RepoCommit} The populated <code>RepoCommit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepoCommit();

            if (data.hasOwnProperty('author')) {
                obj['author'] = BranchCommitCommitAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('committer')) {
                obj['committer'] = BranchCommitCommitAuthor.constructFromObject(data['committer']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('parents')) {
                obj['parents'] = ApiClient.convertToType(data['parents'], [BranchCommitCommitTree]);
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
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
 * @member {module:model/BranchCommitCommitAuthor} author
 */
RepoCommit.prototype['author'] = undefined;

/**
 * @member {module:model/BranchCommitCommitAuthor} committer
 */
RepoCommit.prototype['committer'] = undefined;

/**
 * @member {String} message
 */
RepoCommit.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BranchCommitCommitTree>} parents
 */
RepoCommit.prototype['parents'] = undefined;

/**
 * @member {String} sha
 */
RepoCommit.prototype['sha'] = undefined;

/**
 * @member {module:model/BranchCommitCommitTree} tree
 */
RepoCommit.prototype['tree'] = undefined;

/**
 * @member {String} url
 */
RepoCommit.prototype['url'] = undefined;






export default RepoCommit;

