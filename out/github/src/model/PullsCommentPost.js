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
 * The PullsCommentPost model module.
 * @module model/PullsCommentPost
 * @version 1.4.6
 */
class PullsCommentPost {
    /**
     * Constructs a new <code>PullsCommentPost</code>.
     * @alias module:model/PullsCommentPost
     */
    constructor() { 
        
        PullsCommentPost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PullsCommentPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullsCommentPost} obj Optional instance to populate.
     * @return {module:model/PullsCommentPost} The populated <code>PullsCommentPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullsCommentPost();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('commit_id')) {
                obj['commit_id'] = ApiClient.convertToType(data['commit_id'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} body
 */
PullsCommentPost.prototype['body'] = undefined;

/**
 * @member {String} commit_id
 */
PullsCommentPost.prototype['commit_id'] = undefined;

/**
 * @member {String} path
 */
PullsCommentPost.prototype['path'] = undefined;

/**
 * @member {Number} position
 */
PullsCommentPost.prototype['position'] = undefined;






export default PullsCommentPost;

