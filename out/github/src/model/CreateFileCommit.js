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
 * The CreateFileCommit model module.
 * @module model/CreateFileCommit
 * @version v3
 */
class CreateFileCommit {
    /**
     * Constructs a new <code>CreateFileCommit</code>.
     * @alias module:model/CreateFileCommit
     */
    constructor() { 
        
        CreateFileCommit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateFileCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFileCommit} obj Optional instance to populate.
     * @return {module:model/CreateFileCommit} The populated <code>CreateFileCommit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFileCommit();

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
                obj['parents'] = ApiClient.convertToType(data['parents'], [CreateFileCommitParents]);
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
CreateFileCommit.prototype['author'] = undefined;

/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} committer
 */
CreateFileCommit.prototype['committer'] = undefined;

/**
 * @member {String} html_url
 */
CreateFileCommit.prototype['html_url'] = undefined;

/**
 * @member {String} message
 */
CreateFileCommit.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/CreateFileCommitParents>} parents
 */
CreateFileCommit.prototype['parents'] = undefined;

/**
 * @member {String} sha
 */
CreateFileCommit.prototype['sha'] = undefined;

/**
 * @member {module:model/BranchCommitCommitTree} tree
 */
CreateFileCommit.prototype['tree'] = undefined;

/**
 * @member {String} url
 */
CreateFileCommit.prototype['url'] = undefined;






export default CreateFileCommit;
