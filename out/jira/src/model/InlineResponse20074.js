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
import InlineResponse2004Author from './InlineResponse2004Author';

/**
 * The InlineResponse20074 model module.
 * @module model/InlineResponse20074
 * @version 1.1.0
 */
class InlineResponse20074 {
    /**
     * Constructs a new <code>InlineResponse20074</code>.
     * @alias module:model/InlineResponse20074
     * @param assignee {module:model/InlineResponse2004Author} 
     * @param assigneeType {String} 
     * @param description {String} 
     * @param id {String} 
     * @param isAssigneeTypeValid {Boolean} 
     * @param lead {module:model/InlineResponse2004Author} 
     * @param name {String} 
     * @param project {String} 
     * @param projectId {Number} 
     * @param realAssignee {module:model/InlineResponse2004Author} 
     * @param realAssigneeType {String} 
     * @param self {String} 
     */
    constructor(assignee, assigneeType, description, id, isAssigneeTypeValid, lead, name, project, projectId, realAssignee, realAssigneeType, self) { 
        
        InlineResponse20074.initialize(this, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, name, project, projectId, realAssignee, realAssigneeType, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, name, project, projectId, realAssignee, realAssigneeType, self) { 
        obj['assignee'] = assignee;
        obj['assigneeType'] = assigneeType;
        obj['description'] = description;
        obj['id'] = id;
        obj['isAssigneeTypeValid'] = isAssigneeTypeValid;
        obj['lead'] = lead;
        obj['name'] = name;
        obj['project'] = project;
        obj['projectId'] = projectId;
        obj['realAssignee'] = realAssignee;
        obj['realAssigneeType'] = realAssigneeType;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20074</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20074} obj Optional instance to populate.
     * @return {module:model/InlineResponse20074} The populated <code>InlineResponse20074</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20074();

            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = InlineResponse2004Author.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('assigneeType')) {
                obj['assigneeType'] = ApiClient.convertToType(data['assigneeType'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isAssigneeTypeValid')) {
                obj['isAssigneeTypeValid'] = ApiClient.convertToType(data['isAssigneeTypeValid'], 'Boolean');
            }
            if (data.hasOwnProperty('lead')) {
                obj['lead'] = InlineResponse2004Author.constructFromObject(data['lead']);
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
                obj['realAssignee'] = InlineResponse2004Author.constructFromObject(data['realAssignee']);
            }
            if (data.hasOwnProperty('realAssigneeType')) {
                obj['realAssigneeType'] = ApiClient.convertToType(data['realAssigneeType'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004Author} assignee
 */
InlineResponse20074.prototype['assignee'] = undefined;

/**
 * @member {String} assigneeType
 */
InlineResponse20074.prototype['assigneeType'] = undefined;

/**
 * @member {String} description
 */
InlineResponse20074.prototype['description'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20074.prototype['id'] = undefined;

/**
 * @member {Boolean} isAssigneeTypeValid
 */
InlineResponse20074.prototype['isAssigneeTypeValid'] = undefined;

/**
 * @member {module:model/InlineResponse2004Author} lead
 */
InlineResponse20074.prototype['lead'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20074.prototype['name'] = undefined;

/**
 * @member {String} project
 */
InlineResponse20074.prototype['project'] = undefined;

/**
 * @member {Number} projectId
 */
InlineResponse20074.prototype['projectId'] = undefined;

/**
 * @member {module:model/InlineResponse2004Author} realAssignee
 */
InlineResponse20074.prototype['realAssignee'] = undefined;

/**
 * @member {String} realAssigneeType
 */
InlineResponse20074.prototype['realAssigneeType'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20074.prototype['self'] = undefined;






export default InlineResponse20074;

