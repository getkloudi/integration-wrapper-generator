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
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 1.2.0
 */
class InlineObject2 {
    /**
     * Constructs a new <code>InlineObject2</code>.
     * @alias module:model/InlineObject2
     */
    constructor() { 
        
        InlineObject2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject2();

            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], Object);
            }
            if (data.hasOwnProperty('assigneeType')) {
                obj['assigneeType'] = ApiClient.convertToType(data['assigneeType'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('lead')) {
                obj['lead'] = ApiClient.convertToType(data['lead'], Object);
            }
            if (data.hasOwnProperty('leadAccountId')) {
                obj['leadAccountId'] = ApiClient.convertToType(data['leadAccountId'], 'String');
            }
            if (data.hasOwnProperty('leadUserName')) {
                obj['leadUserName'] = ApiClient.convertToType(data['leadUserName'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'Number');
            }
            if (data.hasOwnProperty('realAssignee')) {
                obj['realAssignee'] = ApiClient.convertToType(data['realAssignee'], Object);
            }
        }
        return obj;
    }


}

/**
 * A user.
 * @member {Object} assignee
 */
InlineObject2.prototype['assignee'] = undefined;

/**
 * The nominal user type used to determine the assignee for issues created with this component. See realAssigneeType for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:
 * @member {module:model/InlineObject2.AssigneeTypeEnum} assigneeType
 */
InlineObject2.prototype['assigneeType'] = undefined;

/**
 * The description for the component. Optional when creating or updating a component.
 * @member {String} description
 */
InlineObject2.prototype['description'] = undefined;

/**
 * A user.
 * @member {Object} lead
 */
InlineObject2.prototype['lead'] = undefined;

/**
 * The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.Optional when creating or updating a component.
 * @member {String} leadAccountId
 */
InlineObject2.prototype['leadAccountId'] = undefined;

/**
 * This property has been deprecated in favour of leadAccountId due to privacy changes. See the migration guide for details.The username of the component's lead user. Optional when creating or updating a component.
 * @member {String} leadUserName
 */
InlineObject2.prototype['leadUserName'] = undefined;

/**
 * The unique name for the component in the project. Required when creating a component. Optional when updating a component. Maximum length 255 chars.
 * @member {String} name
 */
InlineObject2.prototype['name'] = undefined;

/**
 * The key of the project to which the component is assigned. Required when creating a component. Can't be updated.
 * @member {String} project
 */
InlineObject2.prototype['project'] = undefined;

/**
 * Not used.
 * @member {Number} projectId
 */
InlineObject2.prototype['projectId'] = undefined;

/**
 * A user.
 * @member {Object} realAssignee
 */
InlineObject2.prototype['realAssignee'] = undefined;





/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject2['AssigneeTypeEnum'] = {

    /**
     * value: "PROJECT_DEFAULT"
     * @const
     */
    "PROJECT_DEFAULT": "PROJECT_DEFAULT",

    /**
     * value: "COMPONENT_LEAD"
     * @const
     */
    "COMPONENT_LEAD": "COMPONENT_LEAD",

    /**
     * value: "PROJECT_LEAD"
     * @const
     */
    "PROJECT_LEAD": "PROJECT_LEAD",

    /**
     * value: "UNASSIGNED"
     * @const
     */
    "UNASSIGNED": "UNASSIGNED"
};



export default InlineObject2;

