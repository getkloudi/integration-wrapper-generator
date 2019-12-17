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
 * The RepoEdit model module.
 * @module model/RepoEdit
 * @version 1.3.0
 */
class RepoEdit {
    /**
     * Constructs a new <code>RepoEdit</code>.
     * @alias module:model/RepoEdit
     */
    constructor() { 
        
        RepoEdit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RepoEdit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoEdit} obj Optional instance to populate.
     * @return {module:model/RepoEdit} The populated <code>RepoEdit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepoEdit();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('has_downloads')) {
                obj['has_downloads'] = ApiClient.convertToType(data['has_downloads'], 'Boolean');
            }
            if (data.hasOwnProperty('has_issues')) {
                obj['has_issues'] = ApiClient.convertToType(data['has_issues'], 'Boolean');
            }
            if (data.hasOwnProperty('has_wiki')) {
                obj['has_wiki'] = ApiClient.convertToType(data['has_wiki'], 'Boolean');
            }
            if (data.hasOwnProperty('homepage')) {
                obj['homepage'] = ApiClient.convertToType(data['homepage'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
RepoEdit.prototype['description'] = undefined;

/**
 * @member {Boolean} has_downloads
 */
RepoEdit.prototype['has_downloads'] = undefined;

/**
 * @member {Boolean} has_issues
 */
RepoEdit.prototype['has_issues'] = undefined;

/**
 * @member {Boolean} has_wiki
 */
RepoEdit.prototype['has_wiki'] = undefined;

/**
 * @member {String} homepage
 */
RepoEdit.prototype['homepage'] = undefined;

/**
 * @member {String} name
 */
RepoEdit.prototype['name'] = undefined;

/**
 * @member {Boolean} private
 */
RepoEdit.prototype['private'] = undefined;






export default RepoEdit;

