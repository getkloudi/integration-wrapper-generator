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
import FilterIdPermissionProjectProjectCategory from './FilterIdPermissionProjectProjectCategory';
import InlineResponse2004AuthorAvatarUrls from './InlineResponse2004AuthorAvatarUrls';

/**
 * The FilterIdPermissionProject model module.
 * @module model/FilterIdPermissionProject
 * @version 1.3.1
 */
class FilterIdPermissionProject {
    /**
     * Constructs a new <code>FilterIdPermissionProject</code>.
     * @alias module:model/FilterIdPermissionProject
     * @param avatarUrls {module:model/InlineResponse2004AuthorAvatarUrls} 
     * @param id {String} 
     * @param key {String} 
     * @param name {String} 
     * @param projectCategory {module:model/FilterIdPermissionProjectProjectCategory} 
     * @param self {String} 
     * @param simplified {Boolean} 
     * @param style {String} 
     */
    constructor(avatarUrls, id, key, name, projectCategory, self, simplified, style) { 
        
        FilterIdPermissionProject.initialize(this, avatarUrls, id, key, name, projectCategory, self, simplified, style);
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
     * Constructs a <code>FilterIdPermissionProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterIdPermissionProject} obj Optional instance to populate.
     * @return {module:model/FilterIdPermissionProject} The populated <code>FilterIdPermissionProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterIdPermissionProject();

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
                obj['projectCategory'] = FilterIdPermissionProjectProjectCategory.constructFromObject(data['projectCategory']);
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
FilterIdPermissionProject.prototype['avatarUrls'] = undefined;

/**
 * @member {String} id
 */
FilterIdPermissionProject.prototype['id'] = undefined;

/**
 * @member {String} key
 */
FilterIdPermissionProject.prototype['key'] = undefined;

/**
 * @member {String} name
 */
FilterIdPermissionProject.prototype['name'] = undefined;

/**
 * @member {module:model/FilterIdPermissionProjectProjectCategory} projectCategory
 */
FilterIdPermissionProject.prototype['projectCategory'] = undefined;

/**
 * @member {String} self
 */
FilterIdPermissionProject.prototype['self'] = undefined;

/**
 * @member {Boolean} simplified
 */
FilterIdPermissionProject.prototype['simplified'] = undefined;

/**
 * @member {String} style
 */
FilterIdPermissionProject.prototype['style'] = undefined;






export default FilterIdPermissionProject;

