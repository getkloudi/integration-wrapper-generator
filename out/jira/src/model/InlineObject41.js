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
 * The InlineObject41 model module.
 * @module model/InlineObject41
 * @version 1.1.0
 */
class InlineObject41 {
    /**
     * Constructs a new <code>InlineObject41</code>.
     * @alias module:model/InlineObject41
     */
    constructor() { 
        
        InlineObject41.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject41</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject41} obj Optional instance to populate.
     * @return {module:model/InlineObject41} The populated <code>InlineObject41</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject41();

            if (data.hasOwnProperty('assigneeType')) {
                obj['assigneeType'] = ApiClient.convertToType(data['assigneeType'], 'String');
            }
            if (data.hasOwnProperty('avatarId')) {
                obj['avatarId'] = ApiClient.convertToType(data['avatarId'], 'Number');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('issueSecurityScheme')) {
                obj['issueSecurityScheme'] = ApiClient.convertToType(data['issueSecurityScheme'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('lead')) {
                obj['lead'] = ApiClient.convertToType(data['lead'], 'String');
            }
            if (data.hasOwnProperty('leadAccountId')) {
                obj['leadAccountId'] = ApiClient.convertToType(data['leadAccountId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notificationScheme')) {
                obj['notificationScheme'] = ApiClient.convertToType(data['notificationScheme'], 'Number');
            }
            if (data.hasOwnProperty('permissionScheme')) {
                obj['permissionScheme'] = ApiClient.convertToType(data['permissionScheme'], 'Number');
            }
            if (data.hasOwnProperty('projectTemplateKey')) {
                obj['projectTemplateKey'] = ApiClient.convertToType(data['projectTemplateKey'], 'String');
            }
            if (data.hasOwnProperty('projectTypeKey')) {
                obj['projectTypeKey'] = ApiClient.convertToType(data['projectTypeKey'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The default assignee when creating issues for this project.
 * @member {module:model/InlineObject41.AssigneeTypeEnum} assigneeType
 */
InlineObject41.prototype['assigneeType'] = undefined;

/**
 * An integer value for the project's avatar.
 * @member {Number} avatarId
 */
InlineObject41.prototype['avatarId'] = undefined;

/**
 * The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
 * @member {Number} categoryId
 */
InlineObject41.prototype['categoryId'] = undefined;

/**
 * A brief description of the project.
 * @member {String} description
 */
InlineObject41.prototype['description'] = undefined;

/**
 * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the Get issue security schemes resource to get all issue security scheme IDs.
 * @member {Number} issueSecurityScheme
 */
InlineObject41.prototype['issueSecurityScheme'] = undefined;

/**
 * Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. Max length is 10 characters. Required when creating a project. Optional when updating a project.
 * @member {String} key
 */
InlineObject41.prototype['key'] = undefined;

/**
 * Sets the username of the project lead. Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project.
 * @member {String} lead
 */
InlineObject41.prototype['lead'] = undefined;

/**
 * Sets the project lead account id.Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project.
 * @member {String} leadAccountId
 */
InlineObject41.prototype['leadAccountId'] = undefined;

/**
 * The name of the project. Required when creating a project. Optional when updating a project.
 * @member {String} name
 */
InlineObject41.prototype['name'] = undefined;

/**
 * The ID of the notification scheme for the project. Use the Get notification schemes resource to get a list of notification scheme IDs.
 * @member {Number} notificationScheme
 */
InlineObject41.prototype['notificationScheme'] = undefined;

/**
 * The ID of the permission scheme for the project. Use the Get all permission schemes resource to see a list of all permission scheme IDs.
 * @member {Number} permissionScheme
 */
InlineObject41.prototype['permissionScheme'] = undefined;

/**
 * A prebuilt configuration for a project. The type of the projectTemplateKey must match with the type of the projectTypeKey. Required when creating a project. Not applicable for the Update project resource.
 * @member {module:model/InlineObject41.ProjectTemplateKeyEnum} projectTemplateKey
 */
InlineObject41.prototype['projectTemplateKey'] = undefined;

/**
 * The project type, which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource. See the Update project type resource instead.
 * @member {module:model/InlineObject41.ProjectTypeKeyEnum} projectTypeKey
 */
InlineObject41.prototype['projectTypeKey'] = undefined;

/**
 * A link to information about this project, such as project documentation
 * @member {String} url
 */
InlineObject41.prototype['url'] = undefined;





/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject41['AssigneeTypeEnum'] = {

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


/**
 * Allowed values for the <code>projectTemplateKey</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject41['ProjectTemplateKeyEnum'] = {

    /**
     * value: "com.pyxis.greenhopper.jira:gh-simplified-agility"
     * @const
     */
    "pyxis.greenhopper.jira:gh-simplified-agility": "com.pyxis.greenhopper.jira:gh-simplified-agility",

    /**
     * value: "com.pyxis.greenhopper.jira:gh-simplified-basic"
     * @const
     */
    "pyxis.greenhopper.jira:gh-simplified-basic": "com.pyxis.greenhopper.jira:gh-simplified-basic",

    /**
     * value: "com.pyxis.greenhopper.jira:gh-simplified-kanban"
     * @const
     */
    "pyxis.greenhopper.jira:gh-simplified-kanban": "com.pyxis.greenhopper.jira:gh-simplified-kanban",

    /**
     * value: "com.pyxis.greenhopper.jira:gh-simplified-scrum"
     * @const
     */
    "pyxis.greenhopper.jira:gh-simplified-scrum": "com.pyxis.greenhopper.jira:gh-simplified-scrum",

    /**
     * value: "com.atlassian.servicedesk:simplified-it-service-desk"
     * @const
     */
    "atlassian.servicedesk:simplified-it-service-desk": "com.atlassian.servicedesk:simplified-it-service-desk",

    /**
     * value: "com.atlassian.servicedesk:simplified-internal-service-desk"
     * @const
     */
    "atlassian.servicedesk:simplified-internal-service-desk": "com.atlassian.servicedesk:simplified-internal-service-desk",

    /**
     * value: "com.atlassian.servicedesk:simplified-external-service-desk"
     * @const
     */
    "atlassian.servicedesk:simplified-external-service-desk": "com.atlassian.servicedesk:simplified-external-service-desk",

    /**
     * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-content-management"
     * @const
     */
    "atlassian.jira-core-project-templates:jira-core-simplified-content-management": "com.atlassian.jira-core-project-templates:jira-core-simplified-content-management",

    /**
     * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval"
     * @const
     */
    "atlassian.jira-core-project-templates:jira-core-simplified-document-approval": "com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval",

    /**
     * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking"
     * @const
     */
    "atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking": "com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking"
};


/**
 * Allowed values for the <code>projectTypeKey</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject41['ProjectTypeKeyEnum'] = {

    /**
     * value: "software"
     * @const
     */
    "software": "software",

    /**
     * value: "service_desk"
     * @const
     */
    "service_desk": "service_desk",

    /**
     * value: "business"
     * @const
     */
    "business": "business"
};



export default InlineObject41;

