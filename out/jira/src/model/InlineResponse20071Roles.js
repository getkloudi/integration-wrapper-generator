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

/**
 * The InlineResponse20071Roles model module.
 * @module model/InlineResponse20071Roles
 * @version 1.1.0
 */
class InlineResponse20071Roles {
    /**
     * Constructs a new <code>InlineResponse20071Roles</code>.
     * @alias module:model/InlineResponse20071Roles
     * @param developers {String} 
     */
    constructor(developers) { 
        
        InlineResponse20071Roles.initialize(this, developers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, developers) { 
        obj['Developers'] = developers;
    }

    /**
     * Constructs a <code>InlineResponse20071Roles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20071Roles} obj Optional instance to populate.
     * @return {module:model/InlineResponse20071Roles} The populated <code>InlineResponse20071Roles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20071Roles();

            if (data.hasOwnProperty('Developers')) {
                obj['Developers'] = ApiClient.convertToType(data['Developers'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Developers
 */
InlineResponse20071Roles.prototype['Developers'] = undefined;






export default InlineResponse20071Roles;
