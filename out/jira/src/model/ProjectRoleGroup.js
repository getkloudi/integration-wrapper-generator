/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProjectRoleGroup model module.
 * @module model/ProjectRoleGroup
 * @version 1.4.0
 */
class ProjectRoleGroup {
    /**
     * Constructs a new <code>ProjectRoleGroup</code>.
     * Details of the group associated with the role.
     * @alias module:model/ProjectRoleGroup
     */
    constructor() { 
        
        ProjectRoleGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectRoleGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectRoleGroup} obj Optional instance to populate.
     * @return {module:model/ProjectRoleGroup} The populated <code>ProjectRoleGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectRoleGroup();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The display name of the group.
 * @member {String} displayName
 */
ProjectRoleGroup.prototype['displayName'] = undefined;

/**
 * The name of the group
 * @member {String} name
 */
ProjectRoleGroup.prototype['name'] = undefined;






export default ProjectRoleGroup;
