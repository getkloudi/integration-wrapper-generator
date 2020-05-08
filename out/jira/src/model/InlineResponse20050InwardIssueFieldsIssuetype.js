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
import FilterIdPermissionRoleScope from './FilterIdPermissionRoleScope';

/**
 * The InlineResponse20050InwardIssueFieldsIssuetype model module.
 * @module model/InlineResponse20050InwardIssueFieldsIssuetype
 * @version 1.3.0
 */
class InlineResponse20050InwardIssueFieldsIssuetype {
    /**
     * Constructs a new <code>InlineResponse20050InwardIssueFieldsIssuetype</code>.
     * @alias module:model/InlineResponse20050InwardIssueFieldsIssuetype
     * @param avatarId {Number} 
     * @param description {String} 
     * @param iconUrl {String} 
     * @param id {String} 
     * @param name {String} 
     * @param scope {module:model/FilterIdPermissionRoleScope} 
     * @param self {String} 
     * @param subtask {Boolean} 
     */
    constructor(avatarId, description, iconUrl, id, name, scope, self, subtask) { 
        
        InlineResponse20050InwardIssueFieldsIssuetype.initialize(this, avatarId, description, iconUrl, id, name, scope, self, subtask);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, avatarId, description, iconUrl, id, name, scope, self, subtask) { 
        obj['avatarId'] = avatarId;
        obj['description'] = description;
        obj['iconUrl'] = iconUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['scope'] = scope;
        obj['self'] = self;
        obj['subtask'] = subtask;
    }

    /**
     * Constructs a <code>InlineResponse20050InwardIssueFieldsIssuetype</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050InwardIssueFieldsIssuetype} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050InwardIssueFieldsIssuetype} The populated <code>InlineResponse20050InwardIssueFieldsIssuetype</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050InwardIssueFieldsIssuetype();

            if (data.hasOwnProperty('avatarId')) {
                obj['avatarId'] = ApiClient.convertToType(data['avatarId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = FilterIdPermissionRoleScope.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('subtask')) {
                obj['subtask'] = ApiClient.convertToType(data['subtask'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} avatarId
 */
InlineResponse20050InwardIssueFieldsIssuetype.prototype['avatarId'] = undefined;

/**
 * @member {String} description
 */
InlineResponse20050InwardIssueFieldsIssuetype.prototype['description'] = undefined;

/**
 * @member {String} iconUrl
 */
InlineResponse20050InwardIssueFieldsIssuetype.prototype['iconUrl'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20050InwardIssueFieldsIssuetype.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20050InwardIssueFieldsIssuetype.prototype['name'] = undefined;

/**
 * @member {module:model/FilterIdPermissionRoleScope} scope
 */
InlineResponse20050InwardIssueFieldsIssuetype.prototype['scope'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20050InwardIssueFieldsIssuetype.prototype['self'] = undefined;

/**
 * @member {Boolean} subtask
 */
InlineResponse20050InwardIssueFieldsIssuetype.prototype['subtask'] = undefined;






export default InlineResponse20050InwardIssueFieldsIssuetype;

