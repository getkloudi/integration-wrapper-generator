/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
 * The Team model module.
 * @module model/Team
 * @version 1.4.3
 */
class Team {
    /**
     * Constructs a new <code>Team</code>.
     * @alias module:model/Team
     */
    constructor() { 
        
        Team.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Team} obj Optional instance to populate.
     * @return {module:model/Team} The populated <code>Team</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Team();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('members_count')) {
                obj['members_count'] = ApiClient.convertToType(data['members_count'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('repos_count')) {
                obj['repos_count'] = ApiClient.convertToType(data['repos_count'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Team.prototype['id'] = undefined;

/**
 * @member {Number} members_count
 */
Team.prototype['members_count'] = undefined;

/**
 * @member {String} name
 */
Team.prototype['name'] = undefined;

/**
 * @member {String} permission
 */
Team.prototype['permission'] = undefined;

/**
 * @member {Number} repos_count
 */
Team.prototype['repos_count'] = undefined;

/**
 * @member {String} url
 */
Team.prototype['url'] = undefined;






export default Team;

