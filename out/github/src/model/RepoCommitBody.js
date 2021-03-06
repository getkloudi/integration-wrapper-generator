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
import CompareCommitsBaseCommitCommitAuthor from './CompareCommitsBaseCommitCommitAuthor';

/**
 * The RepoCommitBody model module.
 * @module model/RepoCommitBody
 * @version 1.4.6
 */
class RepoCommitBody {
    /**
     * Constructs a new <code>RepoCommitBody</code>.
     * @alias module:model/RepoCommitBody
     * @param message {String} 
     * @param parents {Array.<String>} 
     * @param tree {String} 
     */
    constructor(message, parents, tree) { 
        
        RepoCommitBody.initialize(this, message, parents, tree);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, parents, tree) { 
        obj['message'] = message;
        obj['parents'] = parents;
        obj['tree'] = tree;
    }

    /**
     * Constructs a <code>RepoCommitBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoCommitBody} obj Optional instance to populate.
     * @return {module:model/RepoCommitBody} The populated <code>RepoCommitBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepoCommitBody();

            if (data.hasOwnProperty('author')) {
                obj['author'] = CompareCommitsBaseCommitCommitAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('parents')) {
                obj['parents'] = ApiClient.convertToType(data['parents'], ['String']);
            }
            if (data.hasOwnProperty('tree')) {
                obj['tree'] = ApiClient.convertToType(data['tree'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} author
 */
RepoCommitBody.prototype['author'] = undefined;

/**
 * @member {String} message
 */
RepoCommitBody.prototype['message'] = undefined;

/**
 * @member {Array.<String>} parents
 */
RepoCommitBody.prototype['parents'] = undefined;

/**
 * @member {String} tree
 */
RepoCommitBody.prototype['tree'] = undefined;






export default RepoCommitBody;

