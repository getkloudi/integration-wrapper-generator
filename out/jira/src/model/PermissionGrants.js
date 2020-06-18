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
import PermissionGrant from './PermissionGrant';

/**
 * The PermissionGrants model module.
 * @module model/PermissionGrants
 * @version 1.4.0
 */
class PermissionGrants {
    /**
     * Constructs a new <code>PermissionGrants</code>.
     * List of permission grants.
     * @alias module:model/PermissionGrants
     */
    constructor() { 
        
        PermissionGrants.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionGrants</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionGrants} obj Optional instance to populate.
     * @return {module:model/PermissionGrants} The populated <code>PermissionGrants</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionGrants();

            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [PermissionGrant]);
            }
        }
        return obj;
    }


}

/**
 * Expand options that include additional permission grant details in the response.
 * @member {String} expand
 */
PermissionGrants.prototype['expand'] = undefined;

/**
 * Permission grants list.
 * @member {Array.<module:model/PermissionGrant>} permissions
 */
PermissionGrants.prototype['permissions'] = undefined;






export default PermissionGrants;
