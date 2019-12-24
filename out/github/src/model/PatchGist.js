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
import PatchGistFiles from './PatchGistFiles';

/**
 * The PatchGist model module.
 * @module model/PatchGist
 * @version 1.3.3
 */
class PatchGist {
    /**
     * Constructs a new <code>PatchGist</code>.
     * @alias module:model/PatchGist
     */
    constructor() { 
        
        PatchGist.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchGist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchGist} obj Optional instance to populate.
     * @return {module:model/PatchGist} The populated <code>PatchGist</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchGist();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = PatchGistFiles.constructFromObject(data['files']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PatchGist.prototype['description'] = undefined;

/**
 * @member {module:model/PatchGistFiles} files
 */
PatchGist.prototype['files'] = undefined;






export default PatchGist;

