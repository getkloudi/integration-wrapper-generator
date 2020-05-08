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
import CloudidRestApi3FilterIdPermissionRoleActors from './CloudidRestApi3FilterIdPermissionRoleActors';
import CloudidRestApi3FilterIdPermissionRoleScope from './CloudidRestApi3FilterIdPermissionRoleScope';

/**
 * The InlineResponse20076 model module.
 * @module model/InlineResponse20076
 * @version 1.1.0
 */
class InlineResponse20076 {
    /**
     * Constructs a new <code>InlineResponse20076</code>.
     * 
     * @alias module:model/InlineResponse20076
     * @param actors {Array.<module:model/CloudidRestApi3FilterIdPermissionRoleActors>} 
     * @param description {String} 
     * @param id {Number} 
     * @param name {String} 
     * @param scope {module:model/CloudidRestApi3FilterIdPermissionRoleScope} 
     * @param self {String} 
     */
    constructor(actors, description, id, name, scope, self) { 
        
        InlineResponse20076.initialize(this, actors, description, id, name, scope, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, actors, description, id, name, scope, self) { 
        obj['actors'] = actors;
        obj['description'] = description;
        obj['id'] = id;
        obj['name'] = name;
        obj['scope'] = scope;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20076</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20076} obj Optional instance to populate.
     * @return {module:model/InlineResponse20076} The populated <code>InlineResponse20076</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20076();

            if (data.hasOwnProperty('actors')) {
                obj['actors'] = ApiClient.convertToType(data['actors'], [CloudidRestApi3FilterIdPermissionRoleActors]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = CloudidRestApi3FilterIdPermissionRoleScope.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CloudidRestApi3FilterIdPermissionRoleActors>} actors
 */
InlineResponse20076.prototype['actors'] = undefined;

/**
 * @member {String} description
 */
InlineResponse20076.prototype['description'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20076.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20076.prototype['name'] = undefined;

/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionRoleScope} scope
 */
InlineResponse20076.prototype['scope'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20076.prototype['self'] = undefined;






export default InlineResponse20076;

