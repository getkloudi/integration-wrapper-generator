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

/**
 * The PermissionsKeysBean model module.
 * @module model/PermissionsKeysBean
 * @version 1.4.0
 */
class PermissionsKeysBean {
    /**
     * Constructs a new <code>PermissionsKeysBean</code>.
     * @alias module:model/PermissionsKeysBean
     * @param permissions {Array.<String>} A list of permission keys.
     */
    constructor(permissions) { 
        
        PermissionsKeysBean.initialize(this, permissions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, permissions) { 
        obj['permissions'] = permissions;
    }

    /**
     * Constructs a <code>PermissionsKeysBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionsKeysBean} obj Optional instance to populate.
     * @return {module:model/PermissionsKeysBean} The populated <code>PermissionsKeysBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionsKeysBean();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A list of permission keys.
 * @member {Array.<String>} permissions
 */
PermissionsKeysBean.prototype['permissions'] = undefined;






export default PermissionsKeysBean;

