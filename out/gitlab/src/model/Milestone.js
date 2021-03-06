/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
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
 * The Milestone model module.
 * @module model/Milestone
 * @version 1.1.0
 */
class Milestone {
    /**
     * Constructs a new <code>Milestone</code>.
     * Update an existing project milestone
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

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('iid')) {
                obj['iid'] = ApiClient.convertToType(data['iid'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} created_at
 */
Milestone.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
Milestone.prototype['description'] = undefined;

/**
 * @member {String} due_date
 */
Milestone.prototype['due_date'] = undefined;

/**
 * @member {String} id
 */
Milestone.prototype['id'] = undefined;

/**
 * @member {String} iid
 */
Milestone.prototype['iid'] = undefined;

/**
 * @member {String} project_id
 */
Milestone.prototype['project_id'] = undefined;

/**
 * @member {String} start_date
 */
Milestone.prototype['start_date'] = undefined;

/**
 * @member {String} state
 */
Milestone.prototype['state'] = undefined;

/**
 * @member {String} title
 */
Milestone.prototype['title'] = undefined;

/**
 * @member {String} updated_at
 */
Milestone.prototype['updated_at'] = undefined;






export default Milestone;

