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
import InlineResponse2004AuthorAvatarUrls from './InlineResponse2004AuthorAvatarUrls';

/**
 * The InlineResponse20046Voters model module.
 * @module model/InlineResponse20046Voters
 * @version 1.0.0
 */
class InlineResponse20046Voters {
    /**
     * Constructs a new <code>InlineResponse20046Voters</code>.
     * @alias module:model/InlineResponse20046Voters
     * @param accountId {String} 
     * @param active {Boolean} 
     * @param displayName {String} 
     * @param key {String} 
     * @param name {String} 
     * @param self {String} 
     */
    constructor(accountId, active, displayName, key, name, self) { 
        
        InlineResponse20046Voters.initialize(this, accountId, active, displayName, key, name, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId, active, displayName, key, name, self) { 
        obj['accountId'] = accountId;
        obj['active'] = active;
        obj['displayName'] = displayName;
        obj['key'] = key;
        obj['name'] = name;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20046Voters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20046Voters} obj Optional instance to populate.
     * @return {module:model/InlineResponse20046Voters} The populated <code>InlineResponse20046Voters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20046Voters();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('avatarUrls')) {
                obj['avatarUrls'] = InlineResponse2004AuthorAvatarUrls.constructFromObject(data['avatarUrls']);
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
 * @member {String} accountId
 */
InlineResponse20046Voters.prototype['accountId'] = undefined;

/**
 * @member {Boolean} active
 */
InlineResponse20046Voters.prototype['active'] = undefined;

/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */
InlineResponse20046Voters.prototype['avatarUrls'] = undefined;

/**
 * @member {String} displayName
 */
InlineResponse20046Voters.prototype['displayName'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20046Voters.prototype['key'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20046Voters.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20046Voters.prototype['self'] = undefined;






export default InlineResponse20046Voters;

