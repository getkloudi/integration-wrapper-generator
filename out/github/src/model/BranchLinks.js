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
 * The BranchLinks model module.
 * @module model/BranchLinks
 * @version 1.4.5
 */
class BranchLinks {
    /**
     * Constructs a new <code>BranchLinks</code>.
     * @alias module:model/BranchLinks
     */
    constructor() { 
        
        BranchLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchLinks} obj Optional instance to populate.
     * @return {module:model/BranchLinks} The populated <code>BranchLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchLinks();

            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} html
 */
BranchLinks.prototype['html'] = undefined;

/**
 * @member {String} self
 */
BranchLinks.prototype['self'] = undefined;






export default BranchLinks;

