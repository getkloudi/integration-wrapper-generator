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
 * The CommitNote model module.
 * @module model/CommitNote
 * @version 1.0.0
 */
class CommitNote {
    /**
     * Constructs a new <code>CommitNote</code>.
     * Post comment to commit
     * @alias module:model/CommitNote
     */
    constructor() { 
        
        CommitNote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommitNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitNote} obj Optional instance to populate.
     * @return {module:model/CommitNote} The populated <code>CommitNote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitNote();

            if (data.hasOwnProperty('author')) {
                obj['author'] = UserBasic.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = ApiClient.convertToType(data['line'], 'String');
            }
            if (data.hasOwnProperty('line_type')) {
                obj['line_type'] = ApiClient.convertToType(data['line_type'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserBasic} author
 */
CommitNote.prototype['author'] = undefined;

/**
 * @member {String} created_at
 */
CommitNote.prototype['created_at'] = undefined;

/**
 * @member {String} line
 */
CommitNote.prototype['line'] = undefined;

/**
 * @member {String} line_type
 */
CommitNote.prototype['line_type'] = undefined;

/**
 * @member {String} note
 */
CommitNote.prototype['note'] = undefined;

/**
 * @member {String} path
 */
CommitNote.prototype['path'] = undefined;






export default CommitNote;
