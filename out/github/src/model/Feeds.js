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
import FeedsLinks from './FeedsLinks';

/**
 * The Feeds model module.
 * @module model/Feeds
 * @version 1.4.6
 */
class Feeds {
    /**
     * Constructs a new <code>Feeds</code>.
     * @alias module:model/Feeds
     */
    constructor() { 
        
        Feeds.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Feeds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Feeds} obj Optional instance to populate.
     * @return {module:model/Feeds} The populated <code>Feeds</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Feeds();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = FeedsLinks.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('current_user_actor_url')) {
                obj['current_user_actor_url'] = ApiClient.convertToType(data['current_user_actor_url'], 'String');
            }
            if (data.hasOwnProperty('current_user_organization_url')) {
                obj['current_user_organization_url'] = ApiClient.convertToType(data['current_user_organization_url'], 'String');
            }
            if (data.hasOwnProperty('current_user_public')) {
                obj['current_user_public'] = ApiClient.convertToType(data['current_user_public'], 'String');
            }
            if (data.hasOwnProperty('current_user_url')) {
                obj['current_user_url'] = ApiClient.convertToType(data['current_user_url'], 'String');
            }
            if (data.hasOwnProperty('timeline_url')) {
                obj['timeline_url'] = ApiClient.convertToType(data['timeline_url'], 'String');
            }
            if (data.hasOwnProperty('user_url')) {
                obj['user_url'] = ApiClient.convertToType(data['user_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FeedsLinks} _links
 */
Feeds.prototype['_links'] = undefined;

/**
 * @member {String} current_user_actor_url
 */
Feeds.prototype['current_user_actor_url'] = undefined;

/**
 * @member {String} current_user_organization_url
 */
Feeds.prototype['current_user_organization_url'] = undefined;

/**
 * @member {String} current_user_public
 */
Feeds.prototype['current_user_public'] = undefined;

/**
 * @member {String} current_user_url
 */
Feeds.prototype['current_user_url'] = undefined;

/**
 * @member {String} timeline_url
 */
Feeds.prototype['timeline_url'] = undefined;

/**
 * @member {String} user_url
 */
Feeds.prototype['user_url'] = undefined;






export default Feeds;

