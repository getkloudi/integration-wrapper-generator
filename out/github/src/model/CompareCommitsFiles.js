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
 * The CompareCommitsFiles model module.
 * @module model/CompareCommitsFiles
 * @version 1.0.0
 */
class CompareCommitsFiles {
    /**
     * Constructs a new <code>CompareCommitsFiles</code>.
     * @alias module:model/CompareCommitsFiles
     */
    constructor() { 
        
        CompareCommitsFiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompareCommitsFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompareCommitsFiles} obj Optional instance to populate.
     * @return {module:model/CompareCommitsFiles} The populated <code>CompareCommitsFiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompareCommitsFiles();

            if (data.hasOwnProperty('additions')) {
                obj['additions'] = ApiClient.convertToType(data['additions'], 'Number');
            }
            if (data.hasOwnProperty('blob_url')) {
                obj['blob_url'] = ApiClient.convertToType(data['blob_url'], 'String');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = ApiClient.convertToType(data['changes'], 'Number');
            }
            if (data.hasOwnProperty('contents_url')) {
                obj['contents_url'] = ApiClient.convertToType(data['contents_url'], 'String');
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
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
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
CompareCommitsFiles.prototype['additions'] = undefined;

/**
 * @member {String} blob_url
 */
CompareCommitsFiles.prototype['blob_url'] = undefined;

/**
 * @member {Number} changes
 */
CompareCommitsFiles.prototype['changes'] = undefined;

/**
 * @member {String} contents_url
 */
CompareCommitsFiles.prototype['contents_url'] = undefined;

/**
 * @member {Number} deletions
 */
CompareCommitsFiles.prototype['deletions'] = undefined;

/**
 * @member {String} filename
 */
CompareCommitsFiles.prototype['filename'] = undefined;

/**
 * @member {String} patch
 */
CompareCommitsFiles.prototype['patch'] = undefined;

/**
 * @member {String} raw_url
 */
CompareCommitsFiles.prototype['raw_url'] = undefined;

/**
 * @member {String} sha
 */
CompareCommitsFiles.prototype['sha'] = undefined;

/**
 * @member {String} status
 */
CompareCommitsFiles.prototype['status'] = undefined;






export default CompareCommitsFiles;

