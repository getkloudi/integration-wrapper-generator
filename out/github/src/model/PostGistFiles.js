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
import PatchGistFilesFile1Txt from './PatchGistFilesFile1Txt';

/**
 * The PostGistFiles model module.
 * @module model/PostGistFiles
 * @version 1.4.6
 */
class PostGistFiles {
    /**
     * Constructs a new <code>PostGistFiles</code>.
     * @alias module:model/PostGistFiles
     */
    constructor() { 
        
        PostGistFiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGistFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGistFiles} obj Optional instance to populate.
     * @return {module:model/PostGistFiles} The populated <code>PostGistFiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGistFiles();

            if (data.hasOwnProperty('file1.txt')) {
                obj['file1.txt'] = PatchGistFilesFile1Txt.constructFromObject(data['file1.txt']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PatchGistFilesFile1Txt} file1.txt
 */
PostGistFiles.prototype['file1.txt'] = undefined;






export default PostGistFiles;

