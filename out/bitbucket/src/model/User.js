/**
 * Bitbucket
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Account from './Account';
import AccountAllOfLinks from './AccountAllOfLinks';
import UserAllOf from './UserAllOf';

/**
 * The User model module.
 * @module model/User
 * @version 1.1.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     * @implements module:model/Account
     * @implements module:model/UserAllOf
     * @param type {String} 
     */
    constructor(type) { 
        Account.initialize(this, type);UserAllOf.initialize(this);
        User.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();
            Account.constructFromObject(data, obj);
            UserAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = AccountAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('is_staff')) {
                obj['is_staff'] = ApiClient.convertToType(data['is_staff'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
User.prototype['type'] = undefined;

/**
 * @member {Date} created_on
 */
User.prototype['created_on'] = undefined;

/**
 * @member {String} display_name
 */
User.prototype['display_name'] = undefined;

/**
 * @member {module:model/AccountAllOfLinks} links
 */
User.prototype['links'] = undefined;

/**
 * @member {String} username
 */
User.prototype['username'] = undefined;

/**
 * @member {String} uuid
 */
User.prototype['uuid'] = undefined;

/**
 * @member {String} website
 */
User.prototype['website'] = undefined;

/**
 * The user's Atlassian account ID.
 * @member {String} account_id
 */
User.prototype['account_id'] = undefined;

/**
 * @member {Boolean} is_staff
 */
User.prototype['is_staff'] = undefined;


// Implement Account interface:
/**
 * @member {String} type
 */
Account.prototype['type'] = undefined;
/**
 * @member {Date} created_on
 */
Account.prototype['created_on'] = undefined;
/**
 * @member {String} display_name
 */
Account.prototype['display_name'] = undefined;
/**
 * @member {module:model/AccountAllOfLinks} links
 */
Account.prototype['links'] = undefined;
/**
 * @member {String} username
 */
Account.prototype['username'] = undefined;
/**
 * @member {String} uuid
 */
Account.prototype['uuid'] = undefined;
/**
 * @member {String} website
 */
Account.prototype['website'] = undefined;
// Implement UserAllOf interface:
/**
 * The user's Atlassian account ID.
 * @member {String} account_id
 */
UserAllOf.prototype['account_id'] = undefined;
/**
 * @member {Boolean} is_staff
 */
UserAllOf.prototype['is_staff'] = undefined;




export default User;

