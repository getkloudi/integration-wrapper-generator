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
import ActorPlan from './ActorPlan';

/**
 * The Actor model module.
 * @module model/Actor
 * @version 1.3.0
 */
class Actor {
    /**
     * Constructs a new <code>Actor</code>.
     * A user or organization
     * @alias module:model/Actor
     */
    constructor() { 
        
        Actor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Actor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Actor} obj Optional instance to populate.
     * @return {module:model/Actor} The populated <code>Actor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Actor();

            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
            }
            if (data.hasOwnProperty('bio')) {
                obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
            }
            if (data.hasOwnProperty('blog')) {
                obj['blog'] = ApiClient.convertToType(data['blog'], 'String');
            }
            if (data.hasOwnProperty('collaborators')) {
                obj['collaborators'] = ApiClient.convertToType(data['collaborators'], 'Number');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('disk_usage')) {
                obj['disk_usage'] = ApiClient.convertToType(data['disk_usage'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('followers')) {
                obj['followers'] = ApiClient.convertToType(data['followers'], 'Number');
            }
            if (data.hasOwnProperty('followers_url')) {
                obj['followers_url'] = ApiClient.convertToType(data['followers_url'], 'String');
            }
            if (data.hasOwnProperty('following')) {
                obj['following'] = ApiClient.convertToType(data['following'], 'Number');
            }
            if (data.hasOwnProperty('following_url')) {
                obj['following_url'] = ApiClient.convertToType(data['following_url'], 'String');
            }
            if (data.hasOwnProperty('gists_url')) {
                obj['gists_url'] = ApiClient.convertToType(data['gists_url'], 'String');
            }
            if (data.hasOwnProperty('gravatar_id')) {
                obj['gravatar_id'] = ApiClient.convertToType(data['gravatar_id'], 'String');
            }
            if (data.hasOwnProperty('hireable')) {
                obj['hireable'] = ApiClient.convertToType(data['hireable'], 'Boolean');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('organizations_url')) {
                obj['organizations_url'] = ApiClient.convertToType(data['organizations_url'], 'String');
            }
            if (data.hasOwnProperty('owned_private_repos')) {
                obj['owned_private_repos'] = ApiClient.convertToType(data['owned_private_repos'], 'Number');
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = ActorPlan.constructFromObject(data['plan']);
            }
            if (data.hasOwnProperty('private_gists')) {
                obj['private_gists'] = ApiClient.convertToType(data['private_gists'], 'Number');
            }
            if (data.hasOwnProperty('public_gists')) {
                obj['public_gists'] = ApiClient.convertToType(data['public_gists'], 'Number');
            }
            if (data.hasOwnProperty('public_repos')) {
                obj['public_repos'] = ApiClient.convertToType(data['public_repos'], 'Number');
            }
            if (data.hasOwnProperty('starred_url')) {
                obj['starred_url'] = ApiClient.convertToType(data['starred_url'], 'String');
            }
            if (data.hasOwnProperty('subscriptions_url')) {
                obj['subscriptions_url'] = ApiClient.convertToType(data['subscriptions_url'], 'String');
            }
            if (data.hasOwnProperty('total_private_repos')) {
                obj['total_private_repos'] = ApiClient.convertToType(data['total_private_repos'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

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





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Actor['TypeEnum'] = {

    /**
     * value: "User"
     * @const
     */
    "User": "User",

    /**
     * value: "Organization"
     * @const
     */
    "Organization": "Organization"
};



export default Actor;

