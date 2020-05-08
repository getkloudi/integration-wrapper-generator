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
import InlineResponse20060ApplicationRoles from './InlineResponse20060ApplicationRoles';

/**
 * The InlineResponse20092Values model module.
 * @module model/InlineResponse20092Values
 * @version 1.3.0
 */
class InlineResponse20092Values {
    /**
     * Constructs a new <code>InlineResponse20092Values</code>.
     * @alias module:model/InlineResponse20092Values
     * @param accountId {String} 
     * @param active {Boolean} 
     * @param displayName {String} 
     * @param emailAddress {String} 
     * @param key {String} 
     * @param name {String} 
     * @param self {String} 
     * @param timeZone {String} 
     */
    constructor(accountId, active, displayName, emailAddress, key, name, self, timeZone) { 
        
        InlineResponse20092Values.initialize(this, accountId, active, displayName, emailAddress, key, name, self, timeZone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId, active, displayName, emailAddress, key, name, self, timeZone) { 
        obj['accountId'] = accountId;
        obj['active'] = active;
        obj['displayName'] = displayName;
        obj['emailAddress'] = emailAddress;
        obj['key'] = key;
        obj['name'] = name;
        obj['self'] = self;
        obj['timeZone'] = timeZone;
    }

    /**
     * Constructs a <code>InlineResponse20092Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20092Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20092Values} The populated <code>InlineResponse20092Values</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20092Values();

            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('applicationRoles')) {
                obj['applicationRoles'] = InlineResponse20060ApplicationRoles.constructFromObject(data['applicationRoles']);
            }
            if (data.hasOwnProperty('avatarUrls')) {
                obj['avatarUrls'] = InlineResponse2004AuthorAvatarUrls.constructFromObject(data['avatarUrls']);
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = InlineResponse20060ApplicationRoles.constructFromObject(data['groups']);
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
 * @member {String} accountId
 */
InlineResponse20092Values.prototype['accountId'] = undefined;

/**
 * @member {Boolean} active
 */
InlineResponse20092Values.prototype['active'] = undefined;

/**
 * @member {module:model/InlineResponse20060ApplicationRoles} applicationRoles
 */
InlineResponse20092Values.prototype['applicationRoles'] = undefined;

/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */
InlineResponse20092Values.prototype['avatarUrls'] = undefined;

/**
 * @member {String} displayName
 */
InlineResponse20092Values.prototype['displayName'] = undefined;

/**
 * @member {String} emailAddress
 */
InlineResponse20092Values.prototype['emailAddress'] = undefined;

/**
 * @member {module:model/InlineResponse20060ApplicationRoles} groups
 */
InlineResponse20092Values.prototype['groups'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20092Values.prototype['key'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20092Values.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20092Values.prototype['self'] = undefined;

/**
 * @member {String} timeZone
 */
InlineResponse20092Values.prototype['timeZone'] = undefined;






export default InlineResponse20092Values;

