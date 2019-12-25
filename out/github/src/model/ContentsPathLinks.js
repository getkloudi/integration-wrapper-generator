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
 * The ContentsPathLinks model module.
 * @module model/ContentsPathLinks
 * @version 1.4.0
 */
class ContentsPathLinks {
    /**
     * Constructs a new <code>ContentsPathLinks</code>.
     * @alias module:model/ContentsPathLinks
     */
    constructor() { 
        
        ContentsPathLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentsPathLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentsPathLinks} obj Optional instance to populate.
     * @return {module:model/ContentsPathLinks} The populated <code>ContentsPathLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentsPathLinks();

            if (data.hasOwnProperty('git')) {
                obj['git'] = ApiClient.convertToType(data['git'], 'String');
            }
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
 * @member {String} git
 */
ContentsPathLinks.prototype['git'] = undefined;

/**
 * @member {String} html
 */
ContentsPathLinks.prototype['html'] = undefined;

/**
 * @member {String} self
 */
ContentsPathLinks.prototype['self'] = undefined;






export default ContentsPathLinks;

