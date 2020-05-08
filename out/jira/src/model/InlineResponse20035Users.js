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
import InlineResponse20035UsersUsers from './InlineResponse20035UsersUsers';

/**
 * The InlineResponse20035Users model module.
 * @module model/InlineResponse20035Users
 * @version 1.2.0
 */
class InlineResponse20035Users {
    /**
     * Constructs a new <code>InlineResponse20035Users</code>.
     * @alias module:model/InlineResponse20035Users
     * @param header {String} 
     * @param total {Number} 
     * @param users {Array.<module:model/InlineResponse20035UsersUsers>} 
     */
    constructor(header, total, users) { 
        
        InlineResponse20035Users.initialize(this, header, total, users);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, header, total, users) { 
        obj['header'] = header;
        obj['total'] = total;
        obj['users'] = users;
    }

    /**
     * Constructs a <code>InlineResponse20035Users</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20035Users} obj Optional instance to populate.
     * @return {module:model/InlineResponse20035Users} The populated <code>InlineResponse20035Users</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20035Users();

            if (data.hasOwnProperty('header')) {
                obj['header'] = ApiClient.convertToType(data['header'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [InlineResponse20035UsersUsers]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} header
 */
InlineResponse20035Users.prototype['header'] = undefined;

/**
 * @member {Number} total
 */
InlineResponse20035Users.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20035UsersUsers>} users
 */
InlineResponse20035Users.prototype['users'] = undefined;






export default InlineResponse20035Users;

