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
import PostGistFiles from './PostGistFiles';

/**
 * The PostGist model module.
 * @module model/PostGist
 * @version 1.4.4
 */
class PostGist {
    /**
     * Constructs a new <code>PostGist</code>.
     * @alias module:model/PostGist
     */
    constructor() { 
        
        PostGist.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGist} obj Optional instance to populate.
     * @return {module:model/PostGist} The populated <code>PostGist</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGist();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = PostGistFiles.constructFromObject(data['files']);
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PostGist.prototype['description'] = undefined;

/**
 * @member {module:model/PostGistFiles} files
 */
PostGist.prototype['files'] = undefined;

/**
 * @member {Boolean} public
 */
PostGist.prototype['public'] = undefined;






export default PostGist;

