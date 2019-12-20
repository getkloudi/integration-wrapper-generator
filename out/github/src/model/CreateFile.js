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
import CreateFileCommit from './CreateFileCommit';
import CreateFileContent from './CreateFileContent';

/**
 * The CreateFile model module.
 * @module model/CreateFile
 * @version 1.3.1
 */
class CreateFile {
    /**
     * Constructs a new <code>CreateFile</code>.
     * @alias module:model/CreateFile
     */
    constructor() { 
        
        CreateFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFile} obj Optional instance to populate.
     * @return {module:model/CreateFile} The populated <code>CreateFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFile();

            if (data.hasOwnProperty('commit')) {
                obj['commit'] = CreateFileCommit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = CreateFileContent.constructFromObject(data['content']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreateFileCommit} commit
 */
CreateFile.prototype['commit'] = undefined;

/**
 * @member {module:model/CreateFileContent} content
 */
CreateFile.prototype['content'] = undefined;






export default CreateFile;

