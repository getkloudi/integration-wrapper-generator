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
import PermissionScheme from './PermissionScheme';

/**
 * The PermissionSchemes model module.
 * @module model/PermissionSchemes
 * @version 1.4.0
 */
class PermissionSchemes {
    /**
     * Constructs a new <code>PermissionSchemes</code>.
     * List of all permission schemes.
     * @alias module:model/PermissionSchemes
     */
    constructor() { 
        
        PermissionSchemes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionSchemes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionSchemes} obj Optional instance to populate.
     * @return {module:model/PermissionSchemes} The populated <code>PermissionSchemes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionSchemes();

            if (data.hasOwnProperty('permissionSchemes')) {
                obj['permissionSchemes'] = ApiClient.convertToType(data['permissionSchemes'], [PermissionScheme]);
            }
        }
        return obj;
    }


}

/**
 * Permission schemes list.
 * @member {Array.<module:model/PermissionScheme>} permissionSchemes
 */
PermissionSchemes.prototype['permissionSchemes'] = undefined;






export default PermissionSchemes;
