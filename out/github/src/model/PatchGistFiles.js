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
import PatchGistFilesOldNameTxt from './PatchGistFilesOldNameTxt';

/**
 * The PatchGistFiles model module.
 * @module model/PatchGistFiles
 * @version 1.4.1
 */
class PatchGistFiles {
    /**
     * Constructs a new <code>PatchGistFiles</code>.
     * @alias module:model/PatchGistFiles
     */
    constructor() { 
        
        PatchGistFiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchGistFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchGistFiles} obj Optional instance to populate.
     * @return {module:model/PatchGistFiles} The populated <code>PatchGistFiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchGistFiles();

            if (data.hasOwnProperty('delete_this_file.txt')) {
                obj['delete_this_file.txt'] = ApiClient.convertToType(data['delete_this_file.txt'], 'String');
            }
            if (data.hasOwnProperty('file1.txt')) {
                obj['file1.txt'] = PatchGistFilesFile1Txt.constructFromObject(data['file1.txt']);
            }
            if (data.hasOwnProperty('new_file.txt')) {
                obj['new_file.txt'] = PatchGistFilesFile1Txt.constructFromObject(data['new_file.txt']);
            }
            if (data.hasOwnProperty('old_name.txt')) {
                obj['old_name.txt'] = PatchGistFilesOldNameTxt.constructFromObject(data['old_name.txt']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} delete_this_file.txt
 */
PatchGistFiles.prototype['delete_this_file.txt'] = undefined;

/**
 * @member {module:model/PatchGistFilesFile1Txt} file1.txt
 */
PatchGistFiles.prototype['file1.txt'] = undefined;

/**
 * @member {module:model/PatchGistFilesFile1Txt} new_file.txt
 */
PatchGistFiles.prototype['new_file.txt'] = undefined;

/**
 * @member {module:model/PatchGistFilesOldNameTxt} old_name.txt
 */
PatchGistFiles.prototype['old_name.txt'] = undefined;






export default PatchGistFiles;

