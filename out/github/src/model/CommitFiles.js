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
 * The CommitFiles model module.
 * @module model/CommitFiles
 * @version 1.3.2
 */
class CommitFiles {
    /**
     * Constructs a new <code>CommitFiles</code>.
     * @alias module:model/CommitFiles
     */
    constructor() { 
        
        CommitFiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommitFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitFiles} obj Optional instance to populate.
     * @return {module:model/CommitFiles} The populated <code>CommitFiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitFiles();

            if (data.hasOwnProperty('additions')) {
                obj['additions'] = ApiClient.convertToType(data['additions'], 'Number');
            }
            if (data.hasOwnProperty('blob_url')) {
                obj['blob_url'] = ApiClient.convertToType(data['blob_url'], 'String');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = ApiClient.convertToType(data['changes'], 'Number');
            }
            if (data.hasOwnProperty('deletions')) {
                obj['deletions'] = ApiClient.convertToType(data['deletions'], 'Number');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('patch')) {
                obj['patch'] = ApiClient.convertToType(data['patch'], 'String');
            }
            if (data.hasOwnProperty('raw_url')) {
                obj['raw_url'] = ApiClient.convertToType(data['raw_url'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} additions
 */
CommitFiles.prototype['additions'] = undefined;

/**
 * @member {String} blob_url
 */
CommitFiles.prototype['blob_url'] = undefined;

/**
 * @member {Number} changes
 */
CommitFiles.prototype['changes'] = undefined;

/**
 * @member {Number} deletions
 */
CommitFiles.prototype['deletions'] = undefined;

/**
 * @member {String} filename
 */
CommitFiles.prototype['filename'] = undefined;

/**
 * @member {String} patch
 */
CommitFiles.prototype['patch'] = undefined;

/**
 * @member {String} raw_url
 */
CommitFiles.prototype['raw_url'] = undefined;

/**
 * @member {String} status
 */
CommitFiles.prototype['status'] = undefined;






export default CommitFiles;

