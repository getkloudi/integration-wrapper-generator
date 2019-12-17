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
import GistFilesRingErl from './GistFilesRingErl';

/**
 * The GistFiles model module.
 * @module model/GistFiles
 * @version 1.3.0
 */
class GistFiles {
    /**
     * Constructs a new <code>GistFiles</code>.
     * @alias module:model/GistFiles
     */
    constructor() { 
        
        GistFiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GistFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistFiles} obj Optional instance to populate.
     * @return {module:model/GistFiles} The populated <code>GistFiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GistFiles();

            if (data.hasOwnProperty('ring.erl')) {
                obj['ring.erl'] = GistFilesRingErl.constructFromObject(data['ring.erl']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GistFilesRingErl} ring.erl
 */
GistFiles.prototype['ring.erl'] = undefined;






export default GistFiles;

