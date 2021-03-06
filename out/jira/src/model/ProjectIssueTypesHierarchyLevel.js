/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IssueTypeInfo from './IssueTypeInfo';

/**
 * The ProjectIssueTypesHierarchyLevel model module.
 * @module model/ProjectIssueTypesHierarchyLevel
 * @version 1.4.0
 */
class ProjectIssueTypesHierarchyLevel {
    /**
     * Constructs a new <code>ProjectIssueTypesHierarchyLevel</code>.
     * Details of an issue type hierarchy level.
     * @alias module:model/ProjectIssueTypesHierarchyLevel
     */
    constructor() { 
        
        ProjectIssueTypesHierarchyLevel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectIssueTypesHierarchyLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectIssueTypesHierarchyLevel} obj Optional instance to populate.
     * @return {module:model/ProjectIssueTypesHierarchyLevel} The populated <code>ProjectIssueTypesHierarchyLevel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectIssueTypesHierarchyLevel();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('issueTypes')) {
                obj['issueTypes'] = ApiClient.convertToType(data['issueTypes'], [IssueTypeInfo]);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the issue type hierarchy level.
 * @member {String} entityId
 */
ProjectIssueTypesHierarchyLevel.prototype['entityId'] = undefined;

/**
 * The list of issue types in the hierarchy level.
 * @member {Array.<module:model/IssueTypeInfo>} issueTypes
 */
ProjectIssueTypesHierarchyLevel.prototype['issueTypes'] = undefined;

/**
 * The level of the issue type hierarchy level.
 * @member {Number} level
 */
ProjectIssueTypesHierarchyLevel.prototype['level'] = undefined;

/**
 * The name of the issue type hierarchy level.
 * @member {String} name
 */
ProjectIssueTypesHierarchyLevel.prototype['name'] = undefined;






export default ProjectIssueTypesHierarchyLevel;

