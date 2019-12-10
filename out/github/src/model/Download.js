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
 * The Download model module.
 * @module model/Download
 * @version 1.2.0
 */
class Download {
    /**
     * Constructs a new <code>Download</code>.
     * @alias module:model/Download
     */
    constructor() { 
        
        Download.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Download</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Download} obj Optional instance to populate.
     * @return {module:model/Download} The populated <code>Download</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Download();

            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('download_count')) {
                obj['download_count'] = ApiClient.convertToType(data['download_count'], 'Number');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
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
Download.prototype['content_type'] = undefined;

/**
 * @member {String} description
 */
Download.prototype['description'] = undefined;

/**
 * @member {Number} download_count
 */
Download.prototype['download_count'] = undefined;

/**
 * @member {String} html_url
 */
Download.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
Download.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Download.prototype['name'] = undefined;

/**
 * @member {Number} size
 */
Download.prototype['size'] = undefined;

/**
 * @member {String} url
 */
Download.prototype['url'] = undefined;






export default Download;

