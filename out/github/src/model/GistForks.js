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
 * The GistForks model module.
 * @module model/GistForks
 * @version 1.4.6
 */
class GistForks {
    /**
     * Constructs a new <code>GistForks</code>.
     * @alias module:model/GistForks
     */
    constructor() { 
        
        GistForks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GistForks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistForks} obj Optional instance to populate.
     * @return {module:model/GistForks} The populated <code>GistForks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GistForks();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @member {String} created_at
 */
GistForks.prototype['created_at'] = undefined;

/**
 * @member {String} url
 */
GistForks.prototype['url'] = undefined;

/**
 * @member {module:model/User} user
 */
GistForks.prototype['user'] = undefined;






export default GistForks;

