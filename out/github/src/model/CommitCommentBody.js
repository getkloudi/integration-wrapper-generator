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
 * The CommitCommentBody model module.
 * @module model/CommitCommentBody
 * @version 1.3.2
 */
class CommitCommentBody {
    /**
     * Constructs a new <code>CommitCommentBody</code>.
     * @alias module:model/CommitCommentBody
     * @param body {String} 
     * @param sha {String} SHA of the commit to comment on.
     */
    constructor(body, sha) { 
        
        CommitCommentBody.initialize(this, body, sha);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body, sha) { 
        obj['body'] = body;
        obj['sha'] = sha;
    }

    /**
     * Constructs a <code>CommitCommentBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitCommentBody} obj Optional instance to populate.
     * @return {module:model/CommitCommentBody} The populated <code>CommitCommentBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitCommentBody();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} body
 */
CommitCommentBody.prototype['body'] = undefined;

/**
 * Deprecated - Use position parameter instead.
 * @member {String} line
 */
CommitCommentBody.prototype['line'] = undefined;

/**
 * Line number in the file to comment on. Defaults to null.
 * @member {String} number
 */
CommitCommentBody.prototype['number'] = undefined;

/**
 * Relative path of the file to comment on.
 * @member {String} path
 */
CommitCommentBody.prototype['path'] = undefined;

/**
 * Line index in the diff to comment on.
 * @member {Number} position
 */
CommitCommentBody.prototype['position'] = undefined;

/**
 * SHA of the commit to comment on.
 * @member {String} sha
 */
CommitCommentBody.prototype['sha'] = undefined;






export default CommitCommentBody;

