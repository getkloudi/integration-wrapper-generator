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
import InlineResponse20063PermissionsBULKCHANGE from './InlineResponse20063PermissionsBULKCHANGE';

/**
 * The InlineResponse20063Permissions model module.
 * @module model/InlineResponse20063Permissions
 * @version 1.2.0
 */
class InlineResponse20063Permissions {
    /**
     * Constructs a new <code>InlineResponse20063Permissions</code>.
     * @alias module:model/InlineResponse20063Permissions
     * @param BULK_CHANGE {module:model/InlineResponse20063PermissionsBULKCHANGE} 
     */
    constructor(BULK_CHANGE) { 
        
        InlineResponse20063Permissions.initialize(this, BULK_CHANGE);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, BULK_CHANGE) { 
        obj['BULK_CHANGE'] = BULK_CHANGE;
    }

    /**
     * Constructs a <code>InlineResponse20063Permissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20063Permissions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20063Permissions} The populated <code>InlineResponse20063Permissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20063Permissions();

            if (data.hasOwnProperty('BULK_CHANGE')) {
                obj['BULK_CHANGE'] = InlineResponse20063PermissionsBULKCHANGE.constructFromObject(data['BULK_CHANGE']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20063PermissionsBULKCHANGE} BULK_CHANGE
 */
InlineResponse20063Permissions.prototype['BULK_CHANGE'] = undefined;






export default InlineResponse20063Permissions;

