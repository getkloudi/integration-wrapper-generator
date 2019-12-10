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
import CommitStats from './CommitStats';
import User from './User';

/**
 * The GistHistory model module.
 * @module model/GistHistory
 * @version 1.2.0
 */
class GistHistory {
    /**
     * Constructs a new <code>GistHistory</code>.
     * @alias module:model/GistHistory
     */
    constructor() { 
        
        GistHistory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GistHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistHistory} obj Optional instance to populate.
     * @return {module:model/GistHistory} The populated <code>GistHistory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GistHistory();

            if (data.hasOwnProperty('change_status')) {
                obj['change_status'] = CommitStats.constructFromObject(data['change_status']);
            }
            if (data.hasOwnProperty('committed_at')) {
                obj['committed_at'] = ApiClient.convertToType(data['committed_at'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CommitStats} change_status
 */
GistHistory.prototype['change_status'] = undefined;

/**
 * Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @member {String} committed_at
 */
GistHistory.prototype['committed_at'] = undefined;

/**
 * @member {String} url
 */
GistHistory.prototype['url'] = undefined;

/**
 * @member {module:model/User} user
 */
GistHistory.prototype['user'] = undefined;

/**
 * @member {String} version
 */
GistHistory.prototype['version'] = undefined;






export default GistHistory;

