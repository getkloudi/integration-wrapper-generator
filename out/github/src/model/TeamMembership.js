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
 * The TeamMembership model module.
 * @module model/TeamMembership
 * @version 1.4.3
 */
class TeamMembership {
    /**
     * Constructs a new <code>TeamMembership</code>.
     * @alias module:model/TeamMembership
     */
    constructor() { 
        
        TeamMembership.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamMembership} obj Optional instance to populate.
     * @return {module:model/TeamMembership} The populated <code>TeamMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamMembership();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} state
 */
TeamMembership.prototype['state'] = undefined;

/**
 * @member {String} url
 */
TeamMembership.prototype['url'] = undefined;






export default TeamMembership;

