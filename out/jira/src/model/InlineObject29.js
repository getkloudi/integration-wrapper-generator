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
 * The InlineObject29 model module.
 * @module model/InlineObject29
 * @version 1.3.0
 */
class InlineObject29 {
    /**
     * Constructs a new <code>InlineObject29</code>.
     * @alias module:model/InlineObject29
     */
    constructor() { 
        
        InlineObject29.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject29</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject29} obj Optional instance to populate.
     * @return {module:model/InlineObject29} The populated <code>InlineObject29</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject29();

            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], Object);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], Object);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [Object]);
            }
            if (data.hasOwnProperty('started')) {
                obj['started'] = ApiClient.convertToType(data['started'], 'String');
            }
            if (data.hasOwnProperty('timeSpent')) {
                obj['timeSpent'] = ApiClient.convertToType(data['timeSpent'], 'String');
            }
            if (data.hasOwnProperty('timeSpentSeconds')) {
                obj['timeSpentSeconds'] = ApiClient.convertToType(data['timeSpentSeconds'], 'Number');
            }
            if (data.hasOwnProperty('updateAuthor')) {
                obj['updateAuthor'] = ApiClient.convertToType(data['updateAuthor'], Object);
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], Object);
            }
        }
        return obj;
    }


}

/**
 * User details. Read only.
 * @member {Object} author
 */
InlineObject29.prototype['author'] = undefined;

/**
 * A comment about the worklog. Optional when creating or updating a worklog.
 * @member {Object} comment
 */
InlineObject29.prototype['comment'] = undefined;

/**
 * Details of properties for the worklog. Optional when creating or updating a worklog.
 * @member {Array.<Object>} properties
 */
InlineObject29.prototype['properties'] = undefined;

/**
 * The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.
 * @member {String} started
 */
InlineObject29.prototype['started'] = undefined;

/**
 * The time spent working on the issue as days (#d), hours (#h), or minutes (#m or #). Required when creating a worklog if timeSpentSeconds isn't provided. Optional when updating a worklog. Cannot be provided if timeSpentSecond is provided.
 * @member {String} timeSpent
 */
InlineObject29.prototype['timeSpent'] = undefined;

/**
 * The time in seconds spent working on the issue. Required when creating a worklog if timeSpent isn't provided. Optional when updating a worklog. Cannot be provided if timeSpent is provided.
 * @member {Number} timeSpentSeconds
 */
InlineObject29.prototype['timeSpentSeconds'] = undefined;

/**
 * User details. Read only.
 * @member {Object} updateAuthor
 */
InlineObject29.prototype['updateAuthor'] = undefined;

/**
 * The group or role to which this item is visible.
 * @member {Object} visibility
 */
InlineObject29.prototype['visibility'] = undefined;






export default InlineObject29;

