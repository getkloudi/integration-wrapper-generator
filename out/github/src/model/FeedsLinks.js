/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
import FeedsLinksCurrentUser from './FeedsLinksCurrentUser';

/**
 * The FeedsLinks model module.
 * @module model/FeedsLinks
 * @version 1.4.5
 */
class FeedsLinks {
    /**
     * Constructs a new <code>FeedsLinks</code>.
     * @alias module:model/FeedsLinks
     */
    constructor() { 
        
        FeedsLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FeedsLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeedsLinks} obj Optional instance to populate.
     * @return {module:model/FeedsLinks} The populated <code>FeedsLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeedsLinks();

            if (data.hasOwnProperty('current_user')) {
                obj['current_user'] = FeedsLinksCurrentUser.constructFromObject(data['current_user']);
            }
            if (data.hasOwnProperty('current_user_actor')) {
                obj['current_user_actor'] = FeedsLinksCurrentUser.constructFromObject(data['current_user_actor']);
            }
            if (data.hasOwnProperty('current_user_organization')) {
                obj['current_user_organization'] = FeedsLinksCurrentUser.constructFromObject(data['current_user_organization']);
            }
            if (data.hasOwnProperty('current_user_public')) {
                obj['current_user_public'] = FeedsLinksCurrentUser.constructFromObject(data['current_user_public']);
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = FeedsLinksCurrentUser.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = FeedsLinksCurrentUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FeedsLinksCurrentUser} current_user
 */
FeedsLinks.prototype['current_user'] = undefined;

/**
 * @member {module:model/FeedsLinksCurrentUser} current_user_actor
 */
FeedsLinks.prototype['current_user_actor'] = undefined;

/**
 * @member {module:model/FeedsLinksCurrentUser} current_user_organization
 */
FeedsLinks.prototype['current_user_organization'] = undefined;

/**
 * @member {module:model/FeedsLinksCurrentUser} current_user_public
 */
FeedsLinks.prototype['current_user_public'] = undefined;

/**
 * @member {module:model/FeedsLinksCurrentUser} timeline
 */
FeedsLinks.prototype['timeline'] = undefined;

/**
 * @member {module:model/FeedsLinksCurrentUser} user
 */
FeedsLinks.prototype['user'] = undefined;






export default FeedsLinks;

