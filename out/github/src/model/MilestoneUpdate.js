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
 * The MilestoneUpdate model module.
 * @module model/MilestoneUpdate
 * @version 1.4.0
 */
class MilestoneUpdate {
    /**
     * Constructs a new <code>MilestoneUpdate</code>.
     * @alias module:model/MilestoneUpdate
     */
    constructor() { 
        
        MilestoneUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MilestoneUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MilestoneUpdate} obj Optional instance to populate.
     * @return {module:model/MilestoneUpdate} The populated <code>MilestoneUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MilestoneUpdate();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('due_on')) {
                obj['due_on'] = ApiClient.convertToType(data['due_on'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
MilestoneUpdate.prototype['description'] = undefined;

/**
 * @member {String} due_on
 */
MilestoneUpdate.prototype['due_on'] = undefined;

/**
 * @member {String} state
 */
MilestoneUpdate.prototype['state'] = undefined;

/**
 * @member {String} title
 */
MilestoneUpdate.prototype['title'] = undefined;






export default MilestoneUpdate;

