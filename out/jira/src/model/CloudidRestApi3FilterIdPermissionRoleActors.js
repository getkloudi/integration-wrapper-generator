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
import CloudidRestApi3FilterIdPermissionRoleActorGroup from './CloudidRestApi3FilterIdPermissionRoleActorGroup';

/**
 * The CloudidRestApi3FilterIdPermissionRoleActors model module.
 * @module model/CloudidRestApi3FilterIdPermissionRoleActors
 * @version 1.1.0
 */
class CloudidRestApi3FilterIdPermissionRoleActors {
    /**
     * Constructs a new <code>CloudidRestApi3FilterIdPermissionRoleActors</code>.
     * @alias module:model/CloudidRestApi3FilterIdPermissionRoleActors
     * @param displayName {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param type {String} 
     */
    constructor(displayName, id, name, type) { 
        
        CloudidRestApi3FilterIdPermissionRoleActors.initialize(this, displayName, id, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayName, id, name, type) { 
        obj['displayName'] = displayName;
        obj['id'] = id;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CloudidRestApi3FilterIdPermissionRoleActors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3FilterIdPermissionRoleActors} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3FilterIdPermissionRoleActors} The populated <code>CloudidRestApi3FilterIdPermissionRoleActors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloudidRestApi3FilterIdPermissionRoleActors();

            if (data.hasOwnProperty('actorGroup')) {
                obj['actorGroup'] = CloudidRestApi3FilterIdPermissionRoleActorGroup.constructFromObject(data['actorGroup']);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionRoleActorGroup} actorGroup
 */
CloudidRestApi3FilterIdPermissionRoleActors.prototype['actorGroup'] = undefined;

/**
 * @member {String} displayName
 */
CloudidRestApi3FilterIdPermissionRoleActors.prototype['displayName'] = undefined;

/**
 * @member {Number} id
 */
CloudidRestApi3FilterIdPermissionRoleActors.prototype['id'] = undefined;

/**
 * @member {String} name
 */
CloudidRestApi3FilterIdPermissionRoleActors.prototype['name'] = undefined;

/**
 * @member {String} type
 */
CloudidRestApi3FilterIdPermissionRoleActors.prototype['type'] = undefined;






export default CloudidRestApi3FilterIdPermissionRoleActors;
