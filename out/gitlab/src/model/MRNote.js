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
 * The MRNote model module.
 * @module model/MRNote
 * @version 1.0.0
 */
class MRNote {
    /**
     * Constructs a new <code>MRNote</code>.
     * List issues that will be closed on merge
     * @alias module:model/MRNote
     */
    constructor() { 
        
        MRNote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MRNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MRNote} obj Optional instance to populate.
     * @return {module:model/MRNote} The populated <code>MRNote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MRNote();

            if (data.hasOwnProperty('author')) {
                obj['author'] = UserBasic.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserBasic} author
 */
MRNote.prototype['author'] = undefined;

/**
 * @member {String} note
 */
MRNote.prototype['note'] = undefined;






export default MRNote;

