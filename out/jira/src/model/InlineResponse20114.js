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

/**
 * The InlineResponse20114 model module.
 * @module model/InlineResponse20114
 * @version 1.3.0
 */
class InlineResponse20114 {
    /**
     * Constructs a new <code>InlineResponse20114</code>.
     * 
     * @alias module:model/InlineResponse20114
     * @param defaultWorkflow {String} 
     * @param description {String} 
     * @param draft {Boolean} 
     * @param id {Number} 
     * @param issueTypeMappings {module:model/InlineResponse20114IssueTypeMappings} 
     * @param name {String} 
     * @param self {String} 
     */
    constructor(defaultWorkflow, description, draft, id, issueTypeMappings, name, self) { 
        
        InlineResponse20114.initialize(this, defaultWorkflow, description, draft, id, issueTypeMappings, name, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, defaultWorkflow, description, draft, id, issueTypeMappings, name, self) { 
        obj['defaultWorkflow'] = defaultWorkflow;
        obj['description'] = description;
        obj['draft'] = draft;
        obj['id'] = id;
        obj['issueTypeMappings'] = issueTypeMappings;
        obj['name'] = name;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20114</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20114} obj Optional instance to populate.
     * @return {module:model/InlineResponse20114} The populated <code>InlineResponse20114</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20114();

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
 * @member {String} defaultWorkflow
 */
InlineResponse20114.prototype['defaultWorkflow'] = undefined;

/**
 * @member {String} description
 */
InlineResponse20114.prototype['description'] = undefined;

/**
 * @member {Boolean} draft
 */
InlineResponse20114.prototype['draft'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20114.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse20114IssueTypeMappings} issueTypeMappings
 */
InlineResponse20114.prototype['issueTypeMappings'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20114.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20114.prototype['self'] = undefined;






export default InlineResponse20114;

