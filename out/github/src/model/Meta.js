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
 * The Meta model module.
 * @module model/Meta
 * @version 1.4.0
 */
class Meta {
    /**
     * Constructs a new <code>Meta</code>.
     * @alias module:model/Meta
     */
    constructor() { 
        
        Meta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Meta} obj Optional instance to populate.
     * @return {module:model/Meta} The populated <code>Meta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Meta();

            if (data.hasOwnProperty('git')) {
                obj['git'] = ApiClient.convertToType(data['git'], ['String']);
            }
            if (data.hasOwnProperty('hooks')) {
                obj['hooks'] = ApiClient.convertToType(data['hooks'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} git
 */
Meta.prototype['git'] = undefined;

/**
 * @member {Array.<String>} hooks
 */
Meta.prototype['hooks'] = undefined;






export default Meta;

