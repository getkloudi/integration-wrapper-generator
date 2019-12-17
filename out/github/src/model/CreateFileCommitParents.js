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
 * The CreateFileCommitParents model module.
 * @module model/CreateFileCommitParents
 * @version 1.3.0
 */
class CreateFileCommitParents {
    /**
     * Constructs a new <code>CreateFileCommitParents</code>.
     * @alias module:model/CreateFileCommitParents
     */
    constructor() { 
        
        CreateFileCommitParents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateFileCommitParents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFileCommitParents} obj Optional instance to populate.
     * @return {module:model/CreateFileCommitParents} The populated <code>CreateFileCommitParents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFileCommitParents();

            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
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
 * @member {String} html_url
 */
CreateFileCommitParents.prototype['html_url'] = undefined;

/**
 * @member {String} sha
 */
CreateFileCommitParents.prototype['sha'] = undefined;

/**
 * @member {String} url
 */
CreateFileCommitParents.prototype['url'] = undefined;






export default CreateFileCommitParents;

