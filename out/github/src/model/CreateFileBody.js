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
 * The CreateFileBody model module.
 * @module model/CreateFileBody
 * @version 1.4.6
 */
class CreateFileBody {
    /**
     * Constructs a new <code>CreateFileBody</code>.
     * @alias module:model/CreateFileBody
     */
    constructor() { 
        
        CreateFileBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateFileBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFileBody} obj Optional instance to populate.
     * @return {module:model/CreateFileBody} The populated <code>CreateFileBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFileBody();

            if (data.hasOwnProperty('committer')) {
                obj['committer'] = CreateFileBodyCommitter.constructFromObject(data['committer']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreateFileBodyCommitter} committer
 */
CreateFileBody.prototype['committer'] = undefined;

/**
 * @member {String} content
 */
CreateFileBody.prototype['content'] = undefined;

/**
 * @member {String} message
 */
CreateFileBody.prototype['message'] = undefined;






export default CreateFileBody;

