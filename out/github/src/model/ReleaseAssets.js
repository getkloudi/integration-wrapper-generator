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
import User from './User';

/**
 * The ReleaseAssets model module.
 * @module model/ReleaseAssets
 * @version 1.2.0
 */
class ReleaseAssets {
    /**
     * Constructs a new <code>ReleaseAssets</code>.
     * @alias module:model/ReleaseAssets
     */
    constructor() { 
        
        ReleaseAssets.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReleaseAssets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReleaseAssets} obj Optional instance to populate.
     * @return {module:model/ReleaseAssets} The populated <code>ReleaseAssets</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReleaseAssets();

            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('download_count')) {
                obj['download_count'] = ApiClient.convertToType(data['download_count'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('uploader')) {
                obj['uploader'] = User.constructFromObject(data['uploader']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} content_type
 */
ReleaseAssets.prototype['content_type'] = undefined;

/**
 * @member {String} created_at
 */
ReleaseAssets.prototype['created_at'] = undefined;

/**
 * @member {Number} download_count
 */
ReleaseAssets.prototype['download_count'] = undefined;

/**
 * @member {Number} id
 */
ReleaseAssets.prototype['id'] = undefined;

/**
 * @member {String} label
 */
ReleaseAssets.prototype['label'] = undefined;

/**
 * @member {String} name
 */
ReleaseAssets.prototype['name'] = undefined;

/**
 * @member {Number} size
 */
ReleaseAssets.prototype['size'] = undefined;

/**
 * @member {String} state
 */
ReleaseAssets.prototype['state'] = undefined;

/**
 * @member {String} updated_at
 */
ReleaseAssets.prototype['updated_at'] = undefined;

/**
 * @member {module:model/User} uploader
 */
ReleaseAssets.prototype['uploader'] = undefined;

/**
 * @member {String} url
 */
ReleaseAssets.prototype['url'] = undefined;






export default ReleaseAssets;

