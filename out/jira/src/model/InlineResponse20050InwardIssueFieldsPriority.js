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

/**
 * The InlineResponse20050InwardIssueFieldsPriority model module.
 * @module model/InlineResponse20050InwardIssueFieldsPriority
 * @version 1.3.0
 */
class InlineResponse20050InwardIssueFieldsPriority {
    /**
     * Constructs a new <code>InlineResponse20050InwardIssueFieldsPriority</code>.
     * @alias module:model/InlineResponse20050InwardIssueFieldsPriority
     * @param description {String} 
     * @param iconUrl {String} 
     * @param id {String} 
     * @param name {String} 
     * @param self {String} 
     * @param statusColor {String} 
     */
    constructor(description, iconUrl, id, name, self, statusColor) { 
        
        InlineResponse20050InwardIssueFieldsPriority.initialize(this, description, iconUrl, id, name, self, statusColor);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, iconUrl, id, name, self, statusColor) { 
        obj['description'] = description;
        obj['iconUrl'] = iconUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['self'] = self;
        obj['statusColor'] = statusColor;
    }

    /**
     * Constructs a <code>InlineResponse20050InwardIssueFieldsPriority</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050InwardIssueFieldsPriority} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050InwardIssueFieldsPriority} The populated <code>InlineResponse20050InwardIssueFieldsPriority</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050InwardIssueFieldsPriority();

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
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('statusColor')) {
                obj['statusColor'] = ApiClient.convertToType(data['statusColor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
InlineResponse20050InwardIssueFieldsPriority.prototype['description'] = undefined;

/**
 * @member {String} iconUrl
 */
InlineResponse20050InwardIssueFieldsPriority.prototype['iconUrl'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20050InwardIssueFieldsPriority.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20050InwardIssueFieldsPriority.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20050InwardIssueFieldsPriority.prototype['self'] = undefined;

/**
 * @member {String} statusColor
 */
InlineResponse20050InwardIssueFieldsPriority.prototype['statusColor'] = undefined;






export default InlineResponse20050InwardIssueFieldsPriority;

