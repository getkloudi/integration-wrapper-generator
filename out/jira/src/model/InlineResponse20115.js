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
import InlineResponse20114IssueTypeMappings from './InlineResponse20114IssueTypeMappings';
import InlineResponse20115LastModifiedUser from './InlineResponse20115LastModifiedUser';
import InlineResponse20115OriginalIssueTypeMappings from './InlineResponse20115OriginalIssueTypeMappings';

/**
 * The InlineResponse20115 model module.
 * @module model/InlineResponse20115
 * @version 1.3.1
 */
class InlineResponse20115 {
    /**
     * Constructs a new <code>InlineResponse20115</code>.
     * 
     * @alias module:model/InlineResponse20115
     * @param defaultWorkflow {String} 
     * @param description {String} 
     * @param draft {Boolean} 
     * @param id {Number} 
     * @param issueTypeMappings {module:model/InlineResponse20114IssueTypeMappings} 
     * @param lastModified {String} 
     * @param lastModifiedUser {module:model/InlineResponse20115LastModifiedUser} 
     * @param name {String} 
     * @param originalDefaultWorkflow {String} 
     * @param originalIssueTypeMappings {module:model/InlineResponse20115OriginalIssueTypeMappings} 
     * @param self {String} 
     */
    constructor(defaultWorkflow, description, draft, id, issueTypeMappings, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self) { 
        
        InlineResponse20115.initialize(this, defaultWorkflow, description, draft, id, issueTypeMappings, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, defaultWorkflow, description, draft, id, issueTypeMappings, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, self) { 
        obj['defaultWorkflow'] = defaultWorkflow;
        obj['description'] = description;
        obj['draft'] = draft;
        obj['id'] = id;
        obj['issueTypeMappings'] = issueTypeMappings;
        obj['lastModified'] = lastModified;
        obj['lastModifiedUser'] = lastModifiedUser;
        obj['name'] = name;
        obj['originalDefaultWorkflow'] = originalDefaultWorkflow;
        obj['originalIssueTypeMappings'] = originalIssueTypeMappings;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20115</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20115} obj Optional instance to populate.
     * @return {module:model/InlineResponse20115} The populated <code>InlineResponse20115</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20115();

            if (data.hasOwnProperty('defaultWorkflow')) {
                obj['defaultWorkflow'] = ApiClient.convertToType(data['defaultWorkflow'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('issueTypeMappings')) {
                obj['issueTypeMappings'] = InlineResponse20114IssueTypeMappings.constructFromObject(data['issueTypeMappings']);
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedUser')) {
                obj['lastModifiedUser'] = InlineResponse20115LastModifiedUser.constructFromObject(data['lastModifiedUser']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('originalDefaultWorkflow')) {
                obj['originalDefaultWorkflow'] = ApiClient.convertToType(data['originalDefaultWorkflow'], 'String');
            }
            if (data.hasOwnProperty('originalIssueTypeMappings')) {
                obj['originalIssueTypeMappings'] = InlineResponse20115OriginalIssueTypeMappings.constructFromObject(data['originalIssueTypeMappings']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} defaultWorkflow
 */
InlineResponse20115.prototype['defaultWorkflow'] = undefined;

/**
 * @member {String} description
 */
InlineResponse20115.prototype['description'] = undefined;

/**
 * @member {Boolean} draft
 */
InlineResponse20115.prototype['draft'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20115.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse20114IssueTypeMappings} issueTypeMappings
 */
InlineResponse20115.prototype['issueTypeMappings'] = undefined;

/**
 * @member {String} lastModified
 */
InlineResponse20115.prototype['lastModified'] = undefined;

/**
 * @member {module:model/InlineResponse20115LastModifiedUser} lastModifiedUser
 */
InlineResponse20115.prototype['lastModifiedUser'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20115.prototype['name'] = undefined;

/**
 * @member {String} originalDefaultWorkflow
 */
InlineResponse20115.prototype['originalDefaultWorkflow'] = undefined;

/**
 * @member {module:model/InlineResponse20115OriginalIssueTypeMappings} originalIssueTypeMappings
 */
InlineResponse20115.prototype['originalIssueTypeMappings'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20115.prototype['self'] = undefined;






export default InlineResponse20115;

