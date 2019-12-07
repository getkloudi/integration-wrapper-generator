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
import CreateFileBodyCommitter from './CreateFileBodyCommitter';

/**
 * The DeleteFileBody model module.
 * @module model/DeleteFileBody
 * @version v3
 */
class DeleteFileBody {
    /**
     * Constructs a new <code>DeleteFileBody</code>.
     * @alias module:model/DeleteFileBody
     */
    constructor() { 
        
        DeleteFileBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFileBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFileBody} obj Optional instance to populate.
     * @return {module:model/DeleteFileBody} The populated <code>DeleteFileBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFileBody();

            if (data.hasOwnProperty('committer')) {
                obj['committer'] = CreateFileBodyCommitter.constructFromObject(data['committer']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreateFileBodyCommitter} committer
 */
DeleteFileBody.prototype['committer'] = undefined;

/**
 * @member {String} message
 */
DeleteFileBody.prototype['message'] = undefined;

/**
 * @member {String} sha
 */
DeleteFileBody.prototype['sha'] = undefined;






export default DeleteFileBody;
