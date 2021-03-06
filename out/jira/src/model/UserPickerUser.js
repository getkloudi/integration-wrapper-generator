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
 * The UserPickerUser model module.
 * @module model/UserPickerUser
 * @version 1.4.0
 */
class UserPickerUser {
    /**
     * Constructs a new <code>UserPickerUser</code>.
     * A user found in a search.
     * @alias module:model/UserPickerUser
     */
    constructor() { 
        
        UserPickerUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserPickerUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserPickerUser} obj Optional instance to populate.
     * @return {module:model/UserPickerUser} The populated <code>UserPickerUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserPickerUser();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('avatarUrl')) {
                obj['avatarUrl'] = ApiClient.convertToType(data['avatarUrl'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
 * @member {String} accountId
 */
UserPickerUser.prototype['accountId'] = undefined;

/**
 * The avatar URL of the user.
 * @member {String} avatarUrl
 */
UserPickerUser.prototype['avatarUrl'] = undefined;

/**
 * The display name of the user. Depending on the user???s privacy setting, this may be returned as null.
 * @member {String} displayName
 */
UserPickerUser.prototype['displayName'] = undefined;

/**
 * The display name, email address, and key of the user with the matched query string highlighted with the HTML bold tag.
 * @member {String} html
 */
UserPickerUser.prototype['html'] = undefined;

/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} key
 */
UserPickerUser.prototype['key'] = undefined;

/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} name
 */
UserPickerUser.prototype['name'] = undefined;






export default UserPickerUser;

