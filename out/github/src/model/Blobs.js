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
 * The Blobs model module.
 * @module model/Blobs
 * @version 1.3.2
 */
class Blobs {
    /**
     * Constructs a new <code>Blobs</code>.
     * @alias module:model/Blobs
     */
    constructor() { 
        
        Blobs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Blobs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Blobs} obj Optional instance to populate.
     * @return {module:model/Blobs} The populated <code>Blobs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Blobs();

            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} sha
 */
Blobs.prototype['sha'] = undefined;






export default Blobs;

