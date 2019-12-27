/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Team from './Team';
import User from './User';

/**
 * The TeamPermission model module.
 * @module model/TeamPermission
 * @version 1.1.0
 */
class TeamPermission {
    /**
     * Constructs a new <code>TeamPermission</code>.
     * A user&#39;s permission for a given team.
     * @alias module:model/TeamPermission
     * @param type {String} 
     */
    constructor(type) { 
        
        TeamPermission.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>TeamPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamPermission} obj Optional instance to populate.
     * @return {module:model/TeamPermission} The populated <code>TeamPermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamPermission();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = Team.constructFromObject(data['team']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
TeamPermission.prototype['type'] = undefined;

/**
 * @member {module:model/TeamPermission.PermissionEnum} permission
 */
TeamPermission.prototype['permission'] = undefined;

/**
 * @member {module:model/User} user
 */
TeamPermission.prototype['user'] = undefined;

/**
 * @member {module:model/Team} team
 */
TeamPermission.prototype['team'] = undefined;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
TeamPermission['PermissionEnum'] = {

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",

    /**
     * value: "collaborator"
     * @const
     */
    "collaborator": "collaborator"
};



export default TeamPermission;
