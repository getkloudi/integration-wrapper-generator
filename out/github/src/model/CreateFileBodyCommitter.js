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
 * The CreateFileBodyCommitter model module.
 * @module model/CreateFileBodyCommitter
 * @version 1.4.2
 */
class CreateFileBodyCommitter {
    /**
     * Constructs a new <code>CreateFileBodyCommitter</code>.
     * @alias module:model/CreateFileBodyCommitter
     */
    constructor() { 
        
        CreateFileBodyCommitter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateFileBodyCommitter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFileBodyCommitter} obj Optional instance to populate.
     * @return {module:model/CreateFileBodyCommitter} The populated <code>CreateFileBodyCommitter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFileBodyCommitter();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
CreateFileBodyCommitter.prototype['email'] = undefined;

/**
 * @member {String} name
 */
CreateFileBodyCommitter.prototype['name'] = undefined;






export default CreateFileBodyCommitter;

