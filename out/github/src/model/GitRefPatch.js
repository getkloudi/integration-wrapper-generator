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
 * The GitRefPatch model module.
 * @module model/GitRefPatch
 * @version v3
 */
class GitRefPatch {
    /**
     * Constructs a new <code>GitRefPatch</code>.
     * @alias module:model/GitRefPatch
     */
    constructor() { 
        
        GitRefPatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GitRefPatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitRefPatch} obj Optional instance to populate.
     * @return {module:model/GitRefPatch} The populated <code>GitRefPatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitRefPatch();

            if (data.hasOwnProperty('force')) {
                obj['force'] = ApiClient.convertToType(data['force'], 'Boolean');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} force
 */
GitRefPatch.prototype['force'] = undefined;

/**
 * @member {String} sha
 */
GitRefPatch.prototype['sha'] = undefined;






export default GitRefPatch;
