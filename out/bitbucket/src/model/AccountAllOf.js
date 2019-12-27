/**
 * Bitbucket API
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
import AccountAllOfLinks from './AccountAllOfLinks';

/**
 * The AccountAllOf model module.
 * @module model/AccountAllOf
 * @version 1.1.0
 */
class AccountAllOf {
    /**
     * Constructs a new <code>AccountAllOf</code>.
     * An account object.
     * @alias module:model/AccountAllOf
     */
    constructor() { 
        
        AccountAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAllOf} obj Optional instance to populate.
     * @return {module:model/AccountAllOf} The populated <code>AccountAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountAllOf();

            if (data.hasOwnProperty('links')) {
                obj['links'] = AccountAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('account_status')) {
                obj['account_status'] = ApiClient.convertToType(data['account_status'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('has_2fa_enabled')) {
                obj['has_2fa_enabled'] = ApiClient.convertToType(data['has_2fa_enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AccountAllOfLinks} links
 */
AccountAllOf.prototype['links'] = undefined;

/**
 * @member {String} username
 */
AccountAllOf.prototype['username'] = undefined;

/**
 * Account name defined by the owner. Should be used instead of the \"username\" field. Note that \"nickname\" cannot be used in place of \"username\" in URLs and queries, as \"nickname\" is not guaranteed to be unique.
 * @member {String} nickname
 */
AccountAllOf.prototype['nickname'] = undefined;

/**
 * The status of the account. Currently the only possible value is \"active\", but more values may be added in the future.
 * @member {String} account_status
 */
AccountAllOf.prototype['account_status'] = undefined;

/**
 * @member {String} display_name
 */
AccountAllOf.prototype['display_name'] = undefined;

/**
 * @member {String} website
 */
AccountAllOf.prototype['website'] = undefined;

/**
 * @member {Date} created_on
 */
AccountAllOf.prototype['created_on'] = undefined;

/**
 * @member {String} uuid
 */
AccountAllOf.prototype['uuid'] = undefined;

/**
 * @member {Boolean} has_2fa_enabled
 */
AccountAllOf.prototype['has_2fa_enabled'] = undefined;






export default AccountAllOf;

