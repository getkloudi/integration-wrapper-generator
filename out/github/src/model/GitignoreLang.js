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
 * The GitignoreLang model module.
 * @module model/GitignoreLang
 * @version 1.4.2
 */
class GitignoreLang {
    /**
     * Constructs a new <code>GitignoreLang</code>.
     * @alias module:model/GitignoreLang
     */
    constructor() { 
        
        GitignoreLang.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GitignoreLang</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitignoreLang} obj Optional instance to populate.
     * @return {module:model/GitignoreLang} The populated <code>GitignoreLang</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GitignoreLang();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
GitignoreLang.prototype['name'] = undefined;

/**
 * @member {String} source
 */
GitignoreLang.prototype['source'] = undefined;






export default GitignoreLang;

