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
import MergesSuccessfulCommit from './MergesSuccessfulCommit';
import User from './User';

/**
 * The MergesSuccessful model module.
 * @module model/MergesSuccessful
 * @version 1.4.6
 */
class MergesSuccessful {
    /**
     * Constructs a new <code>MergesSuccessful</code>.
     * @alias module:model/MergesSuccessful
     */
    constructor() { 
        
        MergesSuccessful.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MergesSuccessful</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergesSuccessful} obj Optional instance to populate.
     * @return {module:model/MergesSuccessful} The populated <code>MergesSuccessful</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MergesSuccessful();

            if (data.hasOwnProperty('author')) {
                obj['author'] = User.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('comments_url')) {
                obj['comments_url'] = ApiClient.convertToType(data['comments_url'], 'String');
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = MergesSuccessfulCommit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('committer')) {
                obj['committer'] = User.constructFromObject(data['committer']);
            }
            if (data.hasOwnProperty('merged')) {
                obj['merged'] = ApiClient.convertToType(data['merged'], 'Boolean');
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
MergesSuccessful.prototype['author'] = undefined;

/**
 * @member {String} comments_url
 */
MergesSuccessful.prototype['comments_url'] = undefined;

/**
 * @member {module:model/MergesSuccessfulCommit} commit
 */
MergesSuccessful.prototype['commit'] = undefined;

/**
 * @member {module:model/User} committer
 */
MergesSuccessful.prototype['committer'] = undefined;

/**
 * @member {Boolean} merged
 */
MergesSuccessful.prototype['merged'] = undefined;

/**
 * @member {String} message
 */
MergesSuccessful.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/BranchCommitCommitTree>} parents
 */
MergesSuccessful.prototype['parents'] = undefined;

/**
 * @member {String} sha
 */
MergesSuccessful.prototype['sha'] = undefined;

/**
 * @member {String} url
 */
MergesSuccessful.prototype['url'] = undefined;






export default MergesSuccessful;

