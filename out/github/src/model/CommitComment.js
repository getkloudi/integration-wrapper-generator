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
 * The CommitComment model module.
 * @module model/CommitComment
 * @version 1.4.1
 */
class CommitComment {
    /**
     * Constructs a new <code>CommitComment</code>.
     * @alias module:model/CommitComment
     */
    constructor() { 
        
        CommitComment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommitComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitComment} obj Optional instance to populate.
     * @return {module:model/CommitComment} The populated <code>CommitComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitComment();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('commit_id')) {
                obj['commit_id'] = ApiClient.convertToType(data['commit_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
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
 * @member {String} body
 */
CommitComment.prototype['body'] = undefined;

/**
 * @member {String} commit_id
 */
CommitComment.prototype['commit_id'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */
CommitComment.prototype['created_at'] = undefined;

/**
 * @member {String} html_url
 */
CommitComment.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
CommitComment.prototype['id'] = undefined;

/**
 * @member {Number} line
 */
CommitComment.prototype['line'] = undefined;

/**
 * @member {String} path
 */
CommitComment.prototype['path'] = undefined;

/**
 * @member {Number} position
 */
CommitComment.prototype['position'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */
CommitComment.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
CommitComment.prototype['url'] = undefined;

/**
 * @member {module:model/User} user
 */
CommitComment.prototype['user'] = undefined;






export default CommitComment;

