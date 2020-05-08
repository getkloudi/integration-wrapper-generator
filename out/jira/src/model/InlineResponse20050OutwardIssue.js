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
import InlineResponse20050OutwardIssueFields from './InlineResponse20050OutwardIssueFields';

/**
 * The InlineResponse20050OutwardIssue model module.
 * @module model/InlineResponse20050OutwardIssue
 * @version 1.1.0
 */
class InlineResponse20050OutwardIssue {
    /**
     * Constructs a new <code>InlineResponse20050OutwardIssue</code>.
     * @alias module:model/InlineResponse20050OutwardIssue
     * @param fields {module:model/InlineResponse20050OutwardIssueFields} 
     * @param id {String} 
     * @param key {String} 
     * @param self {String} 
     */
    constructor(fields, id, key, self) { 
        
        InlineResponse20050OutwardIssue.initialize(this, fields, id, key, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fields, id, key, self) { 
        obj['fields'] = fields;
        obj['id'] = id;
        obj['key'] = key;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20050OutwardIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050OutwardIssue} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050OutwardIssue} The populated <code>InlineResponse20050OutwardIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050OutwardIssue();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = InlineResponse20050OutwardIssueFields.constructFromObject(data['fields']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20050OutwardIssueFields} fields
 */
InlineResponse20050OutwardIssue.prototype['fields'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20050OutwardIssue.prototype['id'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20050OutwardIssue.prototype['key'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20050OutwardIssue.prototype['self'] = undefined;






export default InlineResponse20050OutwardIssue;

