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
import CreateFileCommitParents from './CreateFileCommitParents';

/**
 * The DeleteFileCommit model module.
 * @module model/DeleteFileCommit
 * @version 1.4.4
 */
class DeleteFileCommit {
    /**
     * Constructs a new <code>DeleteFileCommit</code>.
     * @alias module:model/DeleteFileCommit
     */
    constructor() { 
        
        DeleteFileCommit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFileCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFileCommit} obj Optional instance to populate.
     * @return {module:model/DeleteFileCommit} The populated <code>DeleteFileCommit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFileCommit();

            if (data.hasOwnProperty('author')) {
                obj['author'] = CompareCommitsBaseCommitCommitAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('committer')) {
                obj['committer'] = CompareCommitsBaseCommitCommitAuthor.constructFromObject(data['committer']);
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('parents')) {
                obj['parents'] = CreateFileCommitParents.constructFromObject(data['parents']);
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
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} author
 */
DeleteFileCommit.prototype['author'] = undefined;

/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} committer
 */
DeleteFileCommit.prototype['committer'] = undefined;

/**
 * @member {String} html_url
 */
DeleteFileCommit.prototype['html_url'] = undefined;

/**
 * @member {String} message
 */
DeleteFileCommit.prototype['message'] = undefined;

/**
 * @member {module:model/CreateFileCommitParents} parents
 */
DeleteFileCommit.prototype['parents'] = undefined;

/**
 * @member {String} sha
 */
DeleteFileCommit.prototype['sha'] = undefined;

/**
 * @member {module:model/BranchCommitCommitTree} tree
 */
DeleteFileCommit.prototype['tree'] = undefined;

/**
 * @member {String} url
 */
DeleteFileCommit.prototype['url'] = undefined;






export default DeleteFileCommit;

