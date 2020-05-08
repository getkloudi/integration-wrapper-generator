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
 * The InlineResponse20073Values model module.
 * @module model/InlineResponse20073Values
 * @version 1.2.0
 */
class InlineResponse20073Values {
    /**
     * Constructs a new <code>InlineResponse20073Values</code>.
     * @alias module:model/InlineResponse20073Values
     * @param assigneeType {String} 
     * @param description {String} 
     * @param id {String} 
     * @param isAssigneeTypeValid {Boolean} 
     * @param issueCount {Number} 
     * @param name {String} 
     * @param project {String} 
     * @param projectId {Number} 
     * @param realAssigneeType {String} 
     * @param self {String} 
     */
    constructor(assigneeType, description, id, isAssigneeTypeValid, issueCount, name, project, projectId, realAssigneeType, self) { 
        
        InlineResponse20073Values.initialize(this, assigneeType, description, id, isAssigneeTypeValid, issueCount, name, project, projectId, realAssigneeType, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assigneeType, description, id, isAssigneeTypeValid, issueCount, name, project, projectId, realAssigneeType, self) { 
        obj['assigneeType'] = assigneeType;
        obj['description'] = description;
        obj['id'] = id;
        obj['isAssigneeTypeValid'] = isAssigneeTypeValid;
        obj['issueCount'] = issueCount;
        obj['name'] = name;
        obj['project'] = project;
        obj['projectId'] = projectId;
        obj['realAssigneeType'] = realAssigneeType;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20073Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20073Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20073Values} The populated <code>InlineResponse20073Values</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20073Values();

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
            if (data.hasOwnProperty('issueCount')) {
                obj['issueCount'] = ApiClient.convertToType(data['issueCount'], 'Number');
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
InlineResponse20073Values.prototype['assignee'] = undefined;

/**
 * @member {String} assigneeType
 */
InlineResponse20073Values.prototype['assigneeType'] = undefined;

/**
 * @member {String} description
 */
InlineResponse20073Values.prototype['description'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20073Values.prototype['id'] = undefined;

/**
 * @member {Boolean} isAssigneeTypeValid
 */
InlineResponse20073Values.prototype['isAssigneeTypeValid'] = undefined;

/**
 * @member {Number} issueCount
 */
InlineResponse20073Values.prototype['issueCount'] = undefined;

/**
 * @member {module:model/InlineResponse2004Author} lead
 */
InlineResponse20073Values.prototype['lead'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20073Values.prototype['name'] = undefined;

/**
 * @member {String} project
 */
InlineResponse20073Values.prototype['project'] = undefined;

/**
 * @member {Number} projectId
 */
InlineResponse20073Values.prototype['projectId'] = undefined;

/**
 * @member {module:model/InlineResponse2004Author} realAssignee
 */
InlineResponse20073Values.prototype['realAssignee'] = undefined;

/**
 * @member {String} realAssigneeType
 */
InlineResponse20073Values.prototype['realAssigneeType'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20073Values.prototype['self'] = undefined;






export default InlineResponse20073Values;

