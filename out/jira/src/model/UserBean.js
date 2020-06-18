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
import UserBeanAvatarUrls from './UserBeanAvatarUrls';

/**
 * The UserBean model module.
 * @module model/UserBean
 * @version 1.4.0
 */
class UserBean {
    /**
     * Constructs a new <code>UserBean</code>.
     * @alias module:model/UserBean
     */
    constructor() { 
        
        UserBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserBean} obj Optional instance to populate.
     * @return {module:model/UserBean} The populated <code>UserBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserBean();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('avatarUrls')) {
                obj['avatarUrls'] = ApiClient.convertToType(data['avatarUrls'], UserBeanAvatarUrls);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
 * @member {String} accountId
 */
UserBean.prototype['accountId'] = undefined;

/**
 * Whether the user is active.
 * @member {Boolean} active
 */
UserBean.prototype['active'] = undefined;

/**
 * The avatars of the user.
 * @member {module:model/UserBeanAvatarUrls} avatarUrls
 */
UserBean.prototype['avatarUrls'] = undefined;

/**
 * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
 * @member {String} displayName
 */
UserBean.prototype['displayName'] = undefined;

/**
 * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.   The key of the user.
 * @member {String} key
 */
UserBean.prototype['key'] = undefined;

/**
 * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.   The username of the user.
 * @member {String} name
 */
UserBean.prototype['name'] = undefined;

/**
 * The URL of the user.
 * @member {String} self
 */
UserBean.prototype['self'] = undefined;






export default UserBean;
