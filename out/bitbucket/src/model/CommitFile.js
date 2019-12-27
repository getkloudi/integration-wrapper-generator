/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Commit from './Commit';

/**
 * The CommitFile model module.
 * @module model/CommitFile
 * @version 1.1.0
 */
class CommitFile {
    /**
     * Constructs a new <code>CommitFile</code>.
     * A file object, representing a file at a commit in a repository
     * @alias module:model/CommitFile
     * @param type {String} 
     */
    constructor(type) { 
        
        CommitFile.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CommitFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitFile} obj Optional instance to populate.
     * @return {module:model/CommitFile} The populated <code>CommitFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitFile();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('commit')) {
                obj['commit'] = Commit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
CommitFile.prototype['type'] = undefined;

/**
 * The path in the repository
 * @member {String} path
 */
CommitFile.prototype['path'] = undefined;

/**
 * @member {module:model/Commit} commit
 */
CommitFile.prototype['commit'] = undefined;

/**
 * @member {module:model/CommitFile.AttributesEnum} attributes
 */
CommitFile.prototype['attributes'] = undefined;





/**
 * Allowed values for the <code>attributes</code> property.
 * @enum {String}
 * @readonly
 */
CommitFile['AttributesEnum'] = {

    /**
     * value: "link"
     * @const
     */
    "link": "link",

    /**
     * value: "executable"
     * @const
     */
    "executable": "executable",

    /**
     * value: "subrepository"
     * @const
     */
    "subrepository": "subrepository",

    /**
     * value: "binary"
     * @const
     */
    "binary": "binary",

    /**
     * value: "lfs"
     * @const
     */
    "lfs": "lfs"
};



export default CommitFile;

