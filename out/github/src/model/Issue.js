/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects.
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
 * The Issue model module.
 * @module model/Issue
 * @version 1.4.6
 */
class Issue {
    /**
     * Constructs a new <code>Issue</code>.
     * @alias module:model/Issue
     */
    constructor() {
        Issue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {}

    /**
     * Constructs a <code>Issue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Issue} obj Optional instance to populate.
     * @return {module:model/Issue} The populated <code>Issue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Issue();

            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], ['String']);
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = ApiClient.convertToType(data['milestone'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }

            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }
}

/**
 * @member {String} assignee
 */
Issue.prototype['assignee'] = undefined;

/**
 * @member {String} body
 */
Issue.prototype['body'] = undefined;

/**
 * @member {Array.<String>} labels
 */
Issue.prototype['labels'] = undefined;

/**
 * @member {Number} milestone
 */
Issue.prototype['milestone'] = undefined;

/**
 * @member {String} title
 */
Issue.prototype['title'] = undefined;

/**
 * @member {String} url
 */
Issue.prototype['url'] = undefined;

/**
 * @member {Number} number
 */
Issue.prototype['number'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */
Repo.prototype['created_at'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */
Repo.prototype['updated_at'] = undefined;

export default Issue;
