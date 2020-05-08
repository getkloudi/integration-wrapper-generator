/**
 * Jira
 * The Jira Cloud Platform REST API
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
import InlineResponse20026Subscriptions from './InlineResponse20026Subscriptions';
import InlineResponse2004Author from './InlineResponse2004Author';

/**
 * The InlineResponse20028 model module.
 * @module model/InlineResponse20028
 * @version 1.1.0
 */
class InlineResponse20028 {
    /**
     * Constructs a new <code>InlineResponse20028</code>.
     * @alias module:model/InlineResponse20028
     * @param description {String} 
     * @param favourite {Boolean} 
     * @param favouritedCount {Number} 
     * @param id {String} 
     * @param jql {String} 
     * @param name {String} 
     * @param owner {module:model/InlineResponse2004Author} 
     * @param searchUrl {String} 
     * @param self {String} 
     * @param sharePermissions {Array.<Object>} 
     * @param subscriptions {module:model/InlineResponse20026Subscriptions} 
     * @param viewUrl {String} 
     */
    constructor(description, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, subscriptions, viewUrl) { 
        
        InlineResponse20028.initialize(this, description, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, subscriptions, viewUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, subscriptions, viewUrl) { 
        obj['description'] = description;
        obj['favourite'] = favourite;
        obj['favouritedCount'] = favouritedCount;
        obj['id'] = id;
        obj['jql'] = jql;
        obj['name'] = name;
        obj['owner'] = owner;
        obj['searchUrl'] = searchUrl;
        obj['self'] = self;
        obj['sharePermissions'] = sharePermissions;
        obj['subscriptions'] = subscriptions;
        obj['viewUrl'] = viewUrl;
    }

    /**
     * Constructs a <code>InlineResponse20028</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20028} obj Optional instance to populate.
     * @return {module:model/InlineResponse20028} The populated <code>InlineResponse20028</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20028();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('favourite')) {
                obj['favourite'] = ApiClient.convertToType(data['favourite'], 'Boolean');
            }
            if (data.hasOwnProperty('favouritedCount')) {
                obj['favouritedCount'] = ApiClient.convertToType(data['favouritedCount'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('jql')) {
                obj['jql'] = ApiClient.convertToType(data['jql'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = InlineResponse2004Author.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('searchUrl')) {
                obj['searchUrl'] = ApiClient.convertToType(data['searchUrl'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('sharePermissions')) {
                obj['sharePermissions'] = ApiClient.convertToType(data['sharePermissions'], [Object]);
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = InlineResponse20026Subscriptions.constructFromObject(data['subscriptions']);
            }
            if (data.hasOwnProperty('viewUrl')) {
                obj['viewUrl'] = ApiClient.convertToType(data['viewUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
InlineResponse20028.prototype['description'] = undefined;

/**
 * @member {Boolean} favourite
 */
InlineResponse20028.prototype['favourite'] = undefined;

/**
 * @member {Number} favouritedCount
 */
InlineResponse20028.prototype['favouritedCount'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20028.prototype['id'] = undefined;

/**
 * @member {String} jql
 */
InlineResponse20028.prototype['jql'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20028.prototype['name'] = undefined;

/**
 * @member {module:model/InlineResponse2004Author} owner
 */
InlineResponse20028.prototype['owner'] = undefined;

/**
 * @member {String} searchUrl
 */
InlineResponse20028.prototype['searchUrl'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20028.prototype['self'] = undefined;

/**
 * @member {Array.<Object>} sharePermissions
 */
InlineResponse20028.prototype['sharePermissions'] = undefined;

/**
 * @member {module:model/InlineResponse20026Subscriptions} subscriptions
 */
InlineResponse20028.prototype['subscriptions'] = undefined;

/**
 * @member {String} viewUrl
 */
InlineResponse20028.prototype['viewUrl'] = undefined;






export default InlineResponse20028;

