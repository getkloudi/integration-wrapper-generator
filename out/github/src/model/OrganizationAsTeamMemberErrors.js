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
 * The OrganizationAsTeamMemberErrors model module.
 * @module model/OrganizationAsTeamMemberErrors
 * @version 1.4.1
 */
class OrganizationAsTeamMemberErrors {
    /**
     * Constructs a new <code>OrganizationAsTeamMemberErrors</code>.
     * @alias module:model/OrganizationAsTeamMemberErrors
     */
    constructor() { 
        
        OrganizationAsTeamMemberErrors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationAsTeamMemberErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationAsTeamMemberErrors} obj Optional instance to populate.
     * @return {module:model/OrganizationAsTeamMemberErrors} The populated <code>OrganizationAsTeamMemberErrors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationAsTeamMemberErrors();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
OrganizationAsTeamMemberErrors.prototype['code'] = undefined;

/**
 * @member {String} field
 */
OrganizationAsTeamMemberErrors.prototype['field'] = undefined;

/**
 * @member {String} resource
 */
OrganizationAsTeamMemberErrors.prototype['resource'] = undefined;






export default OrganizationAsTeamMemberErrors;

