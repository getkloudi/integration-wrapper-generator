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
import AvatarUrlsBean from './AvatarUrlsBean';

/**
 * The UserDetails model module.
 * @module model/UserDetails
 * @version 1.4.0
 */
class UserDetails {
    /**
     * Constructs a new <code>UserDetails</code>.
     * User details permitted by the user&#39;s Atlassian Account privacy settings. However, be aware of these exceptions:   *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, &#x60;displayName&#x60; provides an indication and other parameters have default values or are blank (for example, email is blank).  *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, &#x60;accountId&#x60; returns *unknown* and all other parameters have fallback values.  *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.
     * @alias module:model/UserDetails
     */
    constructor() { 
        
        UserDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDetails} obj Optional instance to populate.
     * @return {module:model/UserDetails} The populated <code>UserDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserDetails();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('avatarUrls')) {
                obj['avatarUrls'] = ApiClient.convertToType(data['avatarUrls'], AvatarUrlsBean);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
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
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
 * @member {String} accountId
 */
UserDetails.prototype['accountId'] = undefined;

/**
 * The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user)
 * @member {String} accountType
 */
UserDetails.prototype['accountType'] = undefined;

/**
 * Whether the user is active.
 * @member {Boolean} active
 */
UserDetails.prototype['active'] = undefined;

/**
 * The avatars of the user.
 * @member {module:model/AvatarUrlsBean} avatarUrls
 */
UserDetails.prototype['avatarUrls'] = undefined;

/**
 * The display name of the user. Depending on the user’s privacy settings, this may return an alternative value.
 * @member {String} displayName
 */
UserDetails.prototype['displayName'] = undefined;

/**
 * The email address of the user. Depending on the user’s privacy settings, this may be returned as null.
 * @member {String} emailAddress
 */
UserDetails.prototype['emailAddress'] = undefined;

/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} key
 */
UserDetails.prototype['key'] = undefined;

/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} name
 */
UserDetails.prototype['name'] = undefined;

/**
 * The URL of the user.
 * @member {String} self
 */
UserDetails.prototype['self'] = undefined;

/**
 * The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null.
 * @member {String} timeZone
 */
UserDetails.prototype['timeZone'] = undefined;






export default UserDetails;

