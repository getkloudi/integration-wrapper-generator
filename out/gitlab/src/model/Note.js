/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
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
import UserBasic from './UserBasic';

/**
 * The Note model module.
 * @module model/Note
 * @version 1.1.0
 */
class Note {
    /**
     * Constructs a new <code>Note</code>.
     * Delete a +noteable+ note
     * @alias module:model/Note
     */
    constructor() { 
        
        Note.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Note} obj Optional instance to populate.
     * @return {module:model/Note} The populated <code>Note</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Note();

            if (data.hasOwnProperty('attachment')) {
                obj['attachment'] = ApiClient.convertToType(data['attachment'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = UserBasic.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('downvote?')) {
                obj['downvote?'] = ApiClient.convertToType(data['downvote?'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('noteable_id')) {
                obj['noteable_id'] = ApiClient.convertToType(data['noteable_id'], 'String');
            }
            if (data.hasOwnProperty('noteable_type')) {
                obj['noteable_type'] = ApiClient.convertToType(data['noteable_type'], 'String');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('upvote?')) {
                obj['upvote?'] = ApiClient.convertToType(data['upvote?'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} attachment
 */
Note.prototype['attachment'] = undefined;

/**
 * @member {module:model/UserBasic} author
 */
Note.prototype['author'] = undefined;

/**
 * @member {String} body
 */
Note.prototype['body'] = undefined;

/**
 * @member {String} created_at
 */
Note.prototype['created_at'] = undefined;

/**
 * @member {String} downvote?
 */
Note.prototype['downvote?'] = undefined;

/**
 * @member {String} id
 */
Note.prototype['id'] = undefined;

/**
 * @member {String} noteable_id
 */
Note.prototype['noteable_id'] = undefined;

/**
 * @member {String} noteable_type
 */
Note.prototype['noteable_type'] = undefined;

/**
 * @member {String} system
 */
Note.prototype['system'] = undefined;

/**
 * @member {String} updated_at
 */
Note.prototype['updated_at'] = undefined;

/**
 * @member {String} upvote?
 */
Note.prototype['upvote?'] = undefined;






export default Note;

