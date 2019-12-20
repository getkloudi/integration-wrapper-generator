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
 * The IssuesComment model module.
 * @module model/IssuesComment
 * @version 1.3.1
 */
class IssuesComment {
    /**
     * Constructs a new <code>IssuesComment</code>.
     * @alias module:model/IssuesComment
     */
    constructor() { 
        
        IssuesComment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuesComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuesComment} obj Optional instance to populate.
     * @return {module:model/IssuesComment} The populated <code>IssuesComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuesComment();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
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
IssuesComment.prototype['body'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */
IssuesComment.prototype['created_at'] = undefined;

/**
 * @member {String} html_url
 */
IssuesComment.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
IssuesComment.prototype['id'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */
IssuesComment.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
IssuesComment.prototype['url'] = undefined;

/**
 * @member {module:model/User} user
 */
IssuesComment.prototype['user'] = undefined;






export default IssuesComment;

