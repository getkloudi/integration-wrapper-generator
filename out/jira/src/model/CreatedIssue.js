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
import NestedResponse from './NestedResponse';

/**
 * The CreatedIssue model module.
 * @module model/CreatedIssue
 * @version 1.4.0
 */
class CreatedIssue {
    /**
     * Constructs a new <code>CreatedIssue</code>.
     * Details about a created issue or subtask.
     * @alias module:model/CreatedIssue
     */
    constructor() { 
        
        CreatedIssue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatedIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatedIssue} obj Optional instance to populate.
     * @return {module:model/CreatedIssue} The populated <code>CreatedIssue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatedIssue();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('transition')) {
                obj['transition'] = ApiClient.convertToType(data['transition'], NestedResponse);
            }
        }
        return obj;
    }


}

/**
 * The ID of the created issue or subtask.
 * @member {String} id
 */
CreatedIssue.prototype['id'] = undefined;

/**
 * The key of the created issue or subtask.
 * @member {String} key
 */
CreatedIssue.prototype['key'] = undefined;

/**
 * The URL of the created issue or subtask.
 * @member {String} self
 */
CreatedIssue.prototype['self'] = undefined;

/**
 * The response code and messages related to any requested transition.
 * @member {module:model/NestedResponse} transition
 */
CreatedIssue.prototype['transition'] = undefined;






export default CreatedIssue;

