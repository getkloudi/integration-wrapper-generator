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
import ReleaseAssets from './ReleaseAssets';
import User from './User';

/**
 * The Release model module.
 * @module model/Release
 * @version 1.4.6
 */
class Release {
    /**
     * Constructs a new <code>Release</code>.
     * @alias module:model/Release
     */
    constructor() { 
        
        Release.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Release</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Release} obj Optional instance to populate.
     * @return {module:model/Release} The populated <code>Release</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Release();

            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [ReleaseAssets]);
            }
            if (data.hasOwnProperty('assets_url')) {
                obj['assets_url'] = ApiClient.convertToType(data['assets_url'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = User.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
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
            if (data.hasOwnProperty('prerelease')) {
                obj['prerelease'] = ApiClient.convertToType(data['prerelease'], 'Boolean');
            }
            if (data.hasOwnProperty('published_at')) {
                obj['published_at'] = ApiClient.convertToType(data['published_at'], 'String');
            }
            if (data.hasOwnProperty('tag_name')) {
                obj['tag_name'] = ApiClient.convertToType(data['tag_name'], 'String');
            }
            if (data.hasOwnProperty('tarball_url')) {
                obj['tarball_url'] = ApiClient.convertToType(data['tarball_url'], 'String');
            }
            if (data.hasOwnProperty('target_commitish')) {
                obj['target_commitish'] = ApiClient.convertToType(data['target_commitish'], 'String');
            }
            if (data.hasOwnProperty('upload_url')) {
                obj['upload_url'] = ApiClient.convertToType(data['upload_url'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('zipball_url')) {
                obj['zipball_url'] = ApiClient.convertToType(data['zipball_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ReleaseAssets>} assets
 */
Release.prototype['assets'] = undefined;

/**
 * @member {String} assets_url
 */
Release.prototype['assets_url'] = undefined;

/**
 * @member {module:model/User} author
 */
Release.prototype['author'] = undefined;

/**
 * @member {String} body
 */
Release.prototype['body'] = undefined;

/**
 * @member {String} created_at
 */
Release.prototype['created_at'] = undefined;

/**
 * @member {Boolean} draft
 */
Release.prototype['draft'] = undefined;

/**
 * @member {String} html_url
 */
Release.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
Release.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Release.prototype['name'] = undefined;

/**
 * @member {Boolean} prerelease
 */
Release.prototype['prerelease'] = undefined;

/**
 * @member {String} published_at
 */
Release.prototype['published_at'] = undefined;

/**
 * @member {String} tag_name
 */
Release.prototype['tag_name'] = undefined;

/**
 * @member {String} tarball_url
 */
Release.prototype['tarball_url'] = undefined;

/**
 * @member {String} target_commitish
 */
Release.prototype['target_commitish'] = undefined;

/**
 * @member {String} upload_url
 */
Release.prototype['upload_url'] = undefined;

/**
 * @member {String} url
 */
Release.prototype['url'] = undefined;

/**
 * @member {String} zipball_url
 */
Release.prototype['zipball_url'] = undefined;






export default Release;

