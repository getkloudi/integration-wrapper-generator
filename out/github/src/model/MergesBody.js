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
 * The MergesBody model module.
 * @module model/MergesBody
 * @version 1.4.2
 */
class MergesBody {
    /**
     * Constructs a new <code>MergesBody</code>.
     * @alias module:model/MergesBody
     */
    constructor() { 
        
        MergesBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MergesBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergesBody} obj Optional instance to populate.
     * @return {module:model/MergesBody} The populated <code>MergesBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MergesBody();

            if (data.hasOwnProperty('base')) {
                obj['base'] = ApiClient.convertToType(data['base'], 'String');
            }
            if (data.hasOwnProperty('commit_message')) {
                obj['commit_message'] = ApiClient.convertToType(data['commit_message'], 'String');
            }
            if (data.hasOwnProperty('head')) {
                obj['head'] = ApiClient.convertToType(data['head'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} base
 */
MergesBody.prototype['base'] = undefined;

/**
 * @member {String} commit_message
 */
MergesBody.prototype['commit_message'] = undefined;

/**
 * @member {String} head
 */
MergesBody.prototype['head'] = undefined;






export default MergesBody;

