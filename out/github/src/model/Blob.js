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
 * The Blob model module.
 * @module model/Blob
 * @version 1.4.1
 */
class Blob {
    /**
     * Constructs a new <code>Blob</code>.
     * @alias module:model/Blob
     */
    constructor() { 
        
        Blob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Blob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Blob} obj Optional instance to populate.
     * @return {module:model/Blob} The populated <code>Blob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Blob();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('encoding')) {
                obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} content
 */
Blob.prototype['content'] = undefined;

/**
 * @member {module:model/Blob.EncodingEnum} encoding
 */
Blob.prototype['encoding'] = undefined;

/**
 * @member {String} sha
 */
Blob.prototype['sha'] = undefined;

/**
 * @member {Number} size
 */
Blob.prototype['size'] = undefined;





/**
 * Allowed values for the <code>encoding</code> property.
 * @enum {String}
 * @readonly
 */
Blob['EncodingEnum'] = {

    /**
     * value: "utf-8"
     * @const
     */
    "utf-8": "utf-8",

    /**
     * value: "base64"
     * @const
     */
    "base64": "base64"
};



export default Blob;

