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
import User from './User';

/**
 * The Milestone model module.
 * @module model/Milestone
 * @version 1.4.4
 */
class Milestone {
    /**
     * Constructs a new <code>Milestone</code>.
     * @alias module:model/Milestone
     */
    constructor() { 
        
        Milestone.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Milestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Milestone} obj Optional instance to populate.
     * @return {module:model/Milestone} The populated <code>Milestone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Milestone();

            if (data.hasOwnProperty('closed_issues')) {
                obj['closed_issues'] = ApiClient.convertToType(data['closed_issues'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = User.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('open_issues')) {
                obj['open_issues'] = ApiClient.convertToType(data['open_issues'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} closed_issues
 */
Milestone.prototype['closed_issues'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */
Milestone.prototype['created_at'] = undefined;

/**
 * @member {module:model/User} creator
 */
Milestone.prototype['creator'] = undefined;

/**
 * @member {String} description
 */
Milestone.prototype['description'] = undefined;

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} due_on
 */
Milestone.prototype['due_on'] = undefined;

/**
 * @member {Number} number
 */
Milestone.prototype['number'] = undefined;

/**
 * @member {Number} open_issues
 */
Milestone.prototype['open_issues'] = undefined;

/**
 * @member {module:model/Milestone.StateEnum} state
 */
Milestone.prototype['state'] = undefined;

/**
 * @member {String} title
 */
Milestone.prototype['title'] = undefined;

/**
 * @member {String} url
 */
Milestone.prototype['url'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Milestone['StateEnum'] = {

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed"
};



export default Milestone;

