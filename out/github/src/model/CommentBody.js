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
 * The CommentBody model module.
 * @module model/CommentBody
 * @version 1.3.0
 */
class CommentBody {
    /**
     * Constructs a new <code>CommentBody</code>.
     * @alias module:model/CommentBody
     * @param body {String} 
     */
    constructor(body) { 
        
        CommentBody.initialize(this, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body) { 
        obj['body'] = body;
    }

    /**
     * Constructs a <code>CommentBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentBody} obj Optional instance to populate.
     * @return {module:model/CommentBody} The populated <code>CommentBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentBody();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} body
 */
CommentBody.prototype['body'] = undefined;






export default CommentBody;

