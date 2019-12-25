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
 * The PatchGistFilesFile1Txt model module.
 * @module model/PatchGistFilesFile1Txt
 * @version 1.4.1
 */
class PatchGistFilesFile1Txt {
    /**
     * Constructs a new <code>PatchGistFilesFile1Txt</code>.
     * @alias module:model/PatchGistFilesFile1Txt
     */
    constructor() { 
        
        PatchGistFilesFile1Txt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchGistFilesFile1Txt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchGistFilesFile1Txt} obj Optional instance to populate.
     * @return {module:model/PatchGistFilesFile1Txt} The populated <code>PatchGistFilesFile1Txt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchGistFilesFile1Txt();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} content
 */
PatchGistFilesFile1Txt.prototype['content'] = undefined;






export default PatchGistFilesFile1Txt;

