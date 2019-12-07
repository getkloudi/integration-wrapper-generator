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
import Actor from './Actor';
import ActorPlan from './ActorPlan';

/**
 * The Organization model module.
 * @module model/Organization
 * @version v3
 */
class Organization {
    /**
     * Constructs a new <code>Organization</code>.
     * @alias module:model/Organization
     * @extends module:model/Actor
     * @implements module:model/Actor
     */
    constructor() { 
        Actor.initialize(this);
        Organization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Organization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Organization} obj Optional instance to populate.
     * @return {module:model/Organization} The populated <code>Organization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Organization();
            Actor.constructFromObject(data, obj);
            Actor.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement Actor interface:
/**
 * @member {String} avatar_url
 */
Actor.prototype['avatar_url'] = undefined;
/**
 * @member {String} bio
 */
Actor.prototype['bio'] = undefined;
/**
 * The website URL from the profile page
 * @member {String} blog
 */
Actor.prototype['blog'] = undefined;
/**
 * @member {Number} collaborators
 */
Actor.prototype['collaborators'] = undefined;
/**
 * @member {String} company
 */
Actor.prototype['company'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */
Actor.prototype['created_at'] = undefined;
/**
 * @member {Number} disk_usage
 */
Actor.prototype['disk_usage'] = undefined;
/**
 * Note: The returned email is the user’s publicly visible email address (or null if the user has not specified a public email address in their profile).
 * @member {String} email
 */
Actor.prototype['email'] = undefined;
/**
 * @member {Number} followers
 */
Actor.prototype['followers'] = undefined;
/**
 * @member {String} followers_url
 */
Actor.prototype['followers_url'] = undefined;
/**
 * @member {Number} following
 */
Actor.prototype['following'] = undefined;
/**
 * @member {String} following_url
 */
Actor.prototype['following_url'] = undefined;
/**
 * @member {String} gists_url
 */
Actor.prototype['gists_url'] = undefined;
/**
 * @member {String} gravatar_id
 */
Actor.prototype['gravatar_id'] = undefined;
/**
 * @member {Boolean} hireable
 */
Actor.prototype['hireable'] = undefined;
/**
 * @member {String} html_url
 */
Actor.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */
Actor.prototype['id'] = undefined;
/**
 * @member {String} location
 */
Actor.prototype['location'] = undefined;
/**
 * The account username
 * @member {String} login
 */
Actor.prototype['login'] = undefined;
/**
 * The full account name
 * @member {String} name
 */
Actor.prototype['name'] = undefined;
/**
 * @member {String} organizations_url
 */
Actor.prototype['organizations_url'] = undefined;
/**
 * @member {Number} owned_private_repos
 */
Actor.prototype['owned_private_repos'] = undefined;
/**
 * @member {module:model/ActorPlan} plan
 */
Actor.prototype['plan'] = undefined;
/**
 * @member {Number} private_gists
 */
Actor.prototype['private_gists'] = undefined;
/**
 * @member {Number} public_gists
 */
Actor.prototype['public_gists'] = undefined;
/**
 * @member {Number} public_repos
 */
Actor.prototype['public_repos'] = undefined;
/**
 * @member {String} starred_url
 */
Actor.prototype['starred_url'] = undefined;
/**
 * @member {String} subscriptions_url
 */
Actor.prototype['subscriptions_url'] = undefined;
/**
 * @member {Number} total_private_repos
 */
Actor.prototype['total_private_repos'] = undefined;
/**
 * @member {module:model/Actor.TypeEnum} type
 */
Actor.prototype['type'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */
Actor.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */
Actor.prototype['url'] = undefined;




export default Organization;

