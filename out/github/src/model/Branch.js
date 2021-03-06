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
import BranchCommit from './BranchCommit';
import BranchLinks from './BranchLinks';

/**
 * The Branch model module.
 * @module model/Branch
 * @version 1.4.6
 */
class Branch {
    /**
     * Constructs a new <code>Branch</code>.
     * @alias module:model/Branch
     */
    constructor() { 
        
        Branch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Branch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Branch} obj Optional instance to populate.
     * @return {module:model/Branch} The populated <code>Branch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Branch();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = BranchLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = BranchCommit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BranchLinks} _links
 */
Branch.prototype['_links'] = undefined;

/**
 * @member {module:model/BranchCommit} commit
 */
Branch.prototype['commit'] = undefined;

/**
 * @member {String} name
 */
Branch.prototype['name'] = undefined;






export default Branch;

