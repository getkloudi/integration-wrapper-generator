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
 * The HeadBranchObject model module.
 * @module model/HeadBranchObject
 * @version 1.0.0
 */
class HeadBranchObject {
    /**
     * Constructs a new <code>HeadBranchObject</code>.
     * @alias module:model/HeadBranchObject
     */
    constructor() { 
        
        HeadBranchObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HeadBranchObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HeadBranchObject} obj Optional instance to populate.
     * @return {module:model/HeadBranchObject} The populated <code>HeadBranchObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HeadBranchObject();

            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
HeadBranchObject.prototype['sha'] = undefined;

/**
 * @member {String} type
 */
HeadBranchObject.prototype['type'] = undefined;

/**
 * @member {String} url
 */
HeadBranchObject.prototype['url'] = undefined;






export default HeadBranchObject;

