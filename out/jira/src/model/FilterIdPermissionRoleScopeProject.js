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

/**
 * The FilterIdPermissionRoleScopeProject model module.
 * @module model/FilterIdPermissionRoleScopeProject
 * @version 1.0.0
 */
class FilterIdPermissionRoleScopeProject {
    /**
     * Constructs a new <code>FilterIdPermissionRoleScopeProject</code>.
     * @alias module:model/FilterIdPermissionRoleScopeProject
     * @param id {String} 
     */
    constructor(id) { 
        
        FilterIdPermissionRoleScopeProject.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>FilterIdPermissionRoleScopeProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterIdPermissionRoleScopeProject} obj Optional instance to populate.
     * @return {module:model/FilterIdPermissionRoleScopeProject} The populated <code>FilterIdPermissionRoleScopeProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterIdPermissionRoleScopeProject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
FilterIdPermissionRoleScopeProject.prototype['id'] = undefined;






export default FilterIdPermissionRoleScopeProject;

