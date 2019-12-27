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
import SubjectTypesRepositoryEvents from './SubjectTypesRepositoryEvents';

/**
 * The AccountAllOfLinks model module.
 * @module model/AccountAllOfLinks
 * @version 1.1.0
 */
class AccountAllOfLinks {
    /**
     * Constructs a new <code>AccountAllOfLinks</code>.
     * @alias module:model/AccountAllOfLinks
     */
    constructor() { 
        
        AccountAllOfLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountAllOfLinks} obj Optional instance to populate.
     * @return {module:model/AccountAllOfLinks} The populated <code>AccountAllOfLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountAllOfLinks();

            if (data.hasOwnProperty('self')) {
                obj['self'] = SubjectTypesRepositoryEvents.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = SubjectTypesRepositoryEvents.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = SubjectTypesRepositoryEvents.constructFromObject(data['avatar']);
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = SubjectTypesRepositoryEvents.constructFromObject(data['followers']);
            }
            if (data.hasOwnProperty('following')) {
                obj['following'] = SubjectTypesRepositoryEvents.constructFromObject(data['following']);
            }
            if (data.hasOwnProperty('repositories')) {
                obj['repositories'] = SubjectTypesRepositoryEvents.constructFromObject(data['repositories']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */
AccountAllOfLinks.prototype['self'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} html
 */
AccountAllOfLinks.prototype['html'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} avatar
 */
AccountAllOfLinks.prototype['avatar'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} followers
 */
AccountAllOfLinks.prototype['followers'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} following
 */
AccountAllOfLinks.prototype['following'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} repositories
 */
AccountAllOfLinks.prototype['repositories'] = undefined;






export default AccountAllOfLinks;

