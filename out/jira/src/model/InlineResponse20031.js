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
import CloudidRestApi3FilterIdPermissionProject from './CloudidRestApi3FilterIdPermissionProject';
import CloudidRestApi3FilterIdPermissionRole from './CloudidRestApi3FilterIdPermissionRole';

/**
 * The InlineResponse20031 model module.
 * @module model/InlineResponse20031
 * @version 1.2.0
 */
class InlineResponse20031 {
    /**
     * Constructs a new <code>InlineResponse20031</code>.
     * @alias module:model/InlineResponse20031
     * @param id {Number} 
     * @param project {module:model/CloudidRestApi3FilterIdPermissionProject} 
     * @param role {module:model/CloudidRestApi3FilterIdPermissionRole} 
     * @param type {String} 
     */
    constructor(id, project, role, type) { 
        
        InlineResponse20031.initialize(this, id, project, role, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, project, role, type) { 
        obj['id'] = id;
        obj['project'] = project;
        obj['role'] = role;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>InlineResponse20031</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20031} obj Optional instance to populate.
     * @return {module:model/InlineResponse20031} The populated <code>InlineResponse20031</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20031();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = CloudidRestApi3FilterIdPermissionProject.constructFromObject(data['project']);
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = CloudidRestApi3FilterIdPermissionRole.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
InlineResponse20031.prototype['id'] = undefined;

/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionProject} project
 */
InlineResponse20031.prototype['project'] = undefined;

/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionRole} role
 */
InlineResponse20031.prototype['role'] = undefined;

/**
 * @member {String} type
 */
InlineResponse20031.prototype['type'] = undefined;






export default InlineResponse20031;

