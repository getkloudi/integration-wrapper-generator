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
 * The BranchCommitCommitTree model module.
 * @module model/BranchCommitCommitTree
 * @version 1.3.3
 */
class BranchCommitCommitTree {
    /**
     * Constructs a new <code>BranchCommitCommitTree</code>.
     * @alias module:model/BranchCommitCommitTree
     */
    constructor() { 
        
        BranchCommitCommitTree.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchCommitCommitTree</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchCommitCommitTree} obj Optional instance to populate.
     * @return {module:model/BranchCommitCommitTree} The populated <code>BranchCommitCommitTree</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchCommitCommitTree();

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
 * @member {String} sha
 */
BranchCommitCommitTree.prototype['sha'] = undefined;

/**
 * @member {String} url
 */
BranchCommitCommitTree.prototype['url'] = undefined;






export default BranchCommitCommitTree;

