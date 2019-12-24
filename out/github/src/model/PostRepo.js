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
 * The PostRepo model module.
 * @module model/PostRepo
 * @version 1.3.3
 */
class PostRepo {
    /**
     * Constructs a new <code>PostRepo</code>.
     * @alias module:model/PostRepo
     * @param name {String} 
     */
    constructor(name) { 
        
        PostRepo.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>PostRepo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRepo} obj Optional instance to populate.
     * @return {module:model/PostRepo} The populated <code>PostRepo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRepo();

            if (data.hasOwnProperty('auto_init')) {
                obj['auto_init'] = ApiClient.convertToType(data['auto_init'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gitignore_template')) {
                obj['gitignore_template'] = ApiClient.convertToType(data['gitignore_template'], 'String');
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
            if (data.hasOwnProperty('team_id')) {
                obj['team_id'] = ApiClient.convertToType(data['team_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * True to create an initial commit with empty README. Default is false.
 * @member {Boolean} auto_init
 */
PostRepo.prototype['auto_init'] = undefined;

/**
 * @member {String} description
 */
PostRepo.prototype['description'] = undefined;

/**
 * Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, \"Haskell\" Ignored if auto_init parameter is not provided. 
 * @member {String} gitignore_template
 */
PostRepo.prototype['gitignore_template'] = undefined;

/**
 * True to enable downloads for this repository, false to disable them. Default is true.
 * @member {Boolean} has_downloads
 */
PostRepo.prototype['has_downloads'] = undefined;

/**
 * True to enable issues for this repository, false to disable them. Default is true.
 * @member {Boolean} has_issues
 */
PostRepo.prototype['has_issues'] = undefined;

/**
 * True to enable the wiki for this repository, false to disable it. Default is true.
 * @member {Boolean} has_wiki
 */
PostRepo.prototype['has_wiki'] = undefined;

/**
 * @member {String} homepage
 */
PostRepo.prototype['homepage'] = undefined;

/**
 * @member {String} name
 */
PostRepo.prototype['name'] = undefined;

/**
 * True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account.
 * @member {Boolean} private
 */
PostRepo.prototype['private'] = undefined;

/**
 * The id of the team that will be granted access to this repository. This is only valid when creating a repo in an organization.
 * @member {Number} team_id
 */
PostRepo.prototype['team_id'] = undefined;






export default PostRepo;

