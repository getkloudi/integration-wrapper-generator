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
 * The AssetPatch model module.
 * @module model/AssetPatch
 * @version 1.4.6
 */
class AssetPatch {
    /**
     * Constructs a new <code>AssetPatch</code>.
     * @alias module:model/AssetPatch
     * @param name {String} 
     */
    constructor(name) { 
        
        AssetPatch.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AssetPatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetPatch} obj Optional instance to populate.
     * @return {module:model/AssetPatch} The populated <code>AssetPatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetPatch();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} label
 */
AssetPatch.prototype['label'] = undefined;

/**
 * @member {String} name
 */
AssetPatch.prototype['name'] = undefined;






export default AssetPatch;

