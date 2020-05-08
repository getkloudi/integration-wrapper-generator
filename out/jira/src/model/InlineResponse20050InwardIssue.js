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
import InlineResponse20050InwardIssueFields from './InlineResponse20050InwardIssueFields';

/**
 * The InlineResponse20050InwardIssue model module.
 * @module model/InlineResponse20050InwardIssue
 * @version 1.3.0
 */
class InlineResponse20050InwardIssue {
    /**
     * Constructs a new <code>InlineResponse20050InwardIssue</code>.
     * @alias module:model/InlineResponse20050InwardIssue
     * @param fields {module:model/InlineResponse20050InwardIssueFields} 
     * @param id {String} 
     * @param key {String} 
     * @param self {String} 
     */
    constructor(fields, id, key, self) { 
        
        InlineResponse20050InwardIssue.initialize(this, fields, id, key, self);
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
     * Constructs a <code>InlineResponse20050InwardIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20050InwardIssue} obj Optional instance to populate.
     * @return {module:model/InlineResponse20050InwardIssue} The populated <code>InlineResponse20050InwardIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20050InwardIssue();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = InlineResponse20050InwardIssueFields.constructFromObject(data['fields']);
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
 * @member {module:model/InlineResponse20050InwardIssueFields} fields
 */
InlineResponse20050InwardIssue.prototype['fields'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20050InwardIssue.prototype['id'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20050InwardIssue.prototype['key'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20050InwardIssue.prototype['self'] = undefined;






export default InlineResponse20050InwardIssue;

