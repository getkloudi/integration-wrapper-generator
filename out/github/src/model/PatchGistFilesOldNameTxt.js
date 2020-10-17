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
 * The PatchGistFilesOldNameTxt model module.
 * @module model/PatchGistFilesOldNameTxt
 * @version 1.4.5
 */
class PatchGistFilesOldNameTxt {
    /**
     * Constructs a new <code>PatchGistFilesOldNameTxt</code>.
     * @alias module:model/PatchGistFilesOldNameTxt
     */
    constructor() { 
        
        PatchGistFilesOldNameTxt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchGistFilesOldNameTxt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchGistFilesOldNameTxt} obj Optional instance to populate.
     * @return {module:model/PatchGistFilesOldNameTxt} The populated <code>PatchGistFilesOldNameTxt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchGistFilesOldNameTxt();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} content
 */
PatchGistFilesOldNameTxt.prototype['content'] = undefined;

/**
 * @member {String} filename
 */
PatchGistFilesOldNameTxt.prototype['filename'] = undefined;






export default PatchGistFilesOldNameTxt;

