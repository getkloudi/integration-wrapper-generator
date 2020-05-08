/**
 * Jira
 * The Jira Cloud Platform REST API
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
import CloudidRestApi3FilterIdPermissionProjectProjectCategory from './CloudidRestApi3FilterIdPermissionProjectProjectCategory';
import InlineResponse2004AuthorAvatarUrls from './InlineResponse2004AuthorAvatarUrls';

/**
 * The CloudidRestApi3FilterIdPermissionProject model module.
 * @module model/CloudidRestApi3FilterIdPermissionProject
 * @version 1.2.0
 */
class CloudidRestApi3FilterIdPermissionProject {
    /**
     * Constructs a new <code>CloudidRestApi3FilterIdPermissionProject</code>.
     * @alias module:model/CloudidRestApi3FilterIdPermissionProject
     * @param avatarUrls {module:model/InlineResponse2004AuthorAvatarUrls} 
     * @param id {String} 
     * @param key {String} 
     * @param name {String} 
     * @param projectCategory {module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory} 
     * @param self {String} 
     * @param simplified {Boolean} 
     * @param style {String} 
     */
    constructor(avatarUrls, id, key, name, projectCategory, self, simplified, style) { 
        
        CloudidRestApi3FilterIdPermissionProject.initialize(this, avatarUrls, id, key, name, projectCategory, self, simplified, style);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, avatarUrls, id, key, name, projectCategory, self, simplified, style) { 
        obj['avatarUrls'] = avatarUrls;
        obj['id'] = id;
        obj['key'] = key;
        obj['name'] = name;
        obj['projectCategory'] = projectCategory;
        obj['self'] = self;
        obj['simplified'] = simplified;
        obj['style'] = style;
    }

    /**
     * Constructs a <code>CloudidRestApi3FilterIdPermissionProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3FilterIdPermissionProject} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3FilterIdPermissionProject} The populated <code>CloudidRestApi3FilterIdPermissionProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloudidRestApi3FilterIdPermissionProject();

            if (data.hasOwnProperty('avatarUrls')) {
                obj['avatarUrls'] = InlineResponse2004AuthorAvatarUrls.constructFromObject(data['avatarUrls']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('projectCategory')) {
                obj['projectCategory'] = CloudidRestApi3FilterIdPermissionProjectProjectCategory.constructFromObject(data['projectCategory']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('simplified')) {
                obj['simplified'] = ApiClient.convertToType(data['simplified'], 'Boolean');
            }
            if (data.hasOwnProperty('style')) {
                obj['style'] = ApiClient.convertToType(data['style'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */
CloudidRestApi3FilterIdPermissionProject.prototype['avatarUrls'] = undefined;

/**
 * @member {String} id
 */
CloudidRestApi3FilterIdPermissionProject.prototype['id'] = undefined;

/**
 * @member {String} key
 */
CloudidRestApi3FilterIdPermissionProject.prototype['key'] = undefined;

/**
 * @member {String} name
 */
CloudidRestApi3FilterIdPermissionProject.prototype['name'] = undefined;

/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory} projectCategory
 */
CloudidRestApi3FilterIdPermissionProject.prototype['projectCategory'] = undefined;

/**
 * @member {String} self
 */
CloudidRestApi3FilterIdPermissionProject.prototype['self'] = undefined;

/**
 * @member {Boolean} simplified
 */
CloudidRestApi3FilterIdPermissionProject.prototype['simplified'] = undefined;

/**
 * @member {String} style
 */
CloudidRestApi3FilterIdPermissionProject.prototype['style'] = undefined;






export default CloudidRestApi3FilterIdPermissionProject;

