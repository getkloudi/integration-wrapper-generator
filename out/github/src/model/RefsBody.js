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
 * The RefsBody model module.
 * @module model/RefsBody
 * @version 1.4.0
 */
class RefsBody {
    /**
     * Constructs a new <code>RefsBody</code>.
     * @alias module:model/RefsBody
     */
    constructor() { 
        
        RefsBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RefsBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RefsBody} obj Optional instance to populate.
     * @return {module:model/RefsBody} The populated <code>RefsBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RefsBody();

            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ref
 */
RefsBody.prototype['ref'] = undefined;

/**
 * @member {String} sha
 */
RefsBody.prototype['sha'] = undefined;






export default RefsBody;

