/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
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
import Project from './Project';

/**
 * The GroupDetail model module.
 * @module model/GroupDetail
 * @version 1.0.0
 */
class GroupDetail {
    /**
     * Constructs a new <code>GroupDetail</code>.
     * Transfer a project to the group namespace. Available only for admin.
     * @alias module:model/GroupDetail
     */
    constructor() { 
        
        GroupDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupDetail} obj Optional instance to populate.
     * @return {module:model/GroupDetail} The populated <code>GroupDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupDetail();

            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('lfs_enabled')) {
                obj['lfs_enabled'] = ApiClient.convertToType(data['lfs_enabled'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('projects')) {
                obj['projects'] = Project.constructFromObject(data['projects']);
            }
            if (data.hasOwnProperty('request_access_enabled')) {
                obj['request_access_enabled'] = ApiClient.convertToType(data['request_access_enabled'], 'String');
            }
            if (data.hasOwnProperty('shared_projects')) {
                obj['shared_projects'] = Project.constructFromObject(data['shared_projects']);
            }
            if (data.hasOwnProperty('statistics')) {
                obj['statistics'] = ApiClient.convertToType(data['statistics'], 'String');
            }
            if (data.hasOwnProperty('visibility_level')) {
                obj['visibility_level'] = ApiClient.convertToType(data['visibility_level'], 'String');
            }
            if (data.hasOwnProperty('web_url')) {
                obj['web_url'] = ApiClient.convertToType(data['web_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} avatar_url
 */
GroupDetail.prototype['avatar_url'] = undefined;

/**
 * @member {String} description
 */
GroupDetail.prototype['description'] = undefined;

/**
 * @member {String} id
 */
GroupDetail.prototype['id'] = undefined;

/**
 * @member {String} lfs_enabled
 */
GroupDetail.prototype['lfs_enabled'] = undefined;

/**
 * @member {String} name
 */
GroupDetail.prototype['name'] = undefined;

/**
 * @member {String} path
 */
GroupDetail.prototype['path'] = undefined;

/**
 * @member {module:model/Project} projects
 */
GroupDetail.prototype['projects'] = undefined;

/**
 * @member {String} request_access_enabled
 */
GroupDetail.prototype['request_access_enabled'] = undefined;

/**
 * @member {module:model/Project} shared_projects
 */
GroupDetail.prototype['shared_projects'] = undefined;

/**
 * @member {String} statistics
 */
GroupDetail.prototype['statistics'] = undefined;

/**
 * @member {String} visibility_level
 */
GroupDetail.prototype['visibility_level'] = undefined;

/**
 * @member {String} web_url
 */
GroupDetail.prototype['web_url'] = undefined;






export default GroupDetail;
