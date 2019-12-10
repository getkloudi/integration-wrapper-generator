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

/**
 * The Group model module.
 * @module model/Group
 * @version 1.0.0
 */
class Group {
    /**
     * Constructs a new <code>Group</code>.
     * Update a group. Available only for users who can administrate groups.
     * @alias module:model/Group
     */
    constructor() { 
        
        Group.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Group();

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
            if (data.hasOwnProperty('request_access_enabled')) {
                obj['request_access_enabled'] = ApiClient.convertToType(data['request_access_enabled'], 'String');
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
Group.prototype['avatar_url'] = undefined;

/**
 * @member {String} description
 */
Group.prototype['description'] = undefined;

/**
 * @member {String} id
 */
Group.prototype['id'] = undefined;

/**
 * @member {String} lfs_enabled
 */
Group.prototype['lfs_enabled'] = undefined;

/**
 * @member {String} name
 */
Group.prototype['name'] = undefined;

/**
 * @member {String} path
 */
Group.prototype['path'] = undefined;

/**
 * @member {String} request_access_enabled
 */
Group.prototype['request_access_enabled'] = undefined;

/**
 * @member {String} statistics
 */
Group.prototype['statistics'] = undefined;

/**
 * @member {String} visibility_level
 */
Group.prototype['visibility_level'] = undefined;

/**
 * @member {String} web_url
 */
Group.prototype['web_url'] = undefined;






export default Group;
