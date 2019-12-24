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
import BranchCommitCommit from './BranchCommitCommit';
import BranchCommitCommitTree from './BranchCommitCommitTree';
import User from './User';

/**
 * The BranchCommit model module.
 * @module model/BranchCommit
 * @version 1.3.3
 */
class BranchCommit {
    /**
     * Constructs a new <code>BranchCommit</code>.
     * @alias module:model/BranchCommit
     */
    constructor() { 
        
        BranchCommit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchCommit} obj Optional instance to populate.
     * @return {module:model/BranchCommit} The populated <code>BranchCommit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchCommit();

            if (data.hasOwnProperty('author')) {
                obj['author'] = User.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = BranchCommitCommit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('committer')) {
                obj['committer'] = User.constructFromObject(data['committer']);
            }
            if (data.hasOwnProperty('parents')) {
                obj['parents'] = ApiClient.convertToType(data['parents'], [BranchCommitCommitTree]);
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/User} author
 */
BranchCommit.prototype['author'] = undefined;

/**
 * @member {module:model/BranchCommitCommit} commit
 */
BranchCommit.prototype['commit'] = undefined;

/**
 * @member {module:model/User} committer
 */
BranchCommit.prototype['committer'] = undefined;

/**
 * @member {Array.<module:model/BranchCommitCommitTree>} parents
 */
BranchCommit.prototype['parents'] = undefined;

/**
 * @member {String} sha
 */
BranchCommit.prototype['sha'] = undefined;

/**
 * @member {String} url
 */
BranchCommit.prototype['url'] = undefined;






export default BranchCommit;

