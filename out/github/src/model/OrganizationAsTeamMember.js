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
import OrganizationAsTeamMemberErrors from './OrganizationAsTeamMemberErrors';

/**
 * The OrganizationAsTeamMember model module.
 * @module model/OrganizationAsTeamMember
 * @version 1.4.3
 */
class OrganizationAsTeamMember {
    /**
     * Constructs a new <code>OrganizationAsTeamMember</code>.
     * @alias module:model/OrganizationAsTeamMember
     */
    constructor() { 
        
        OrganizationAsTeamMember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationAsTeamMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationAsTeamMember} obj Optional instance to populate.
     * @return {module:model/OrganizationAsTeamMember} The populated <code>OrganizationAsTeamMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationAsTeamMember();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [OrganizationAsTeamMemberErrors]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/OrganizationAsTeamMemberErrors>} errors
 */
OrganizationAsTeamMember.prototype['errors'] = undefined;

/**
 * @member {String} message
 */
OrganizationAsTeamMember.prototype['message'] = undefined;






export default OrganizationAsTeamMember;

