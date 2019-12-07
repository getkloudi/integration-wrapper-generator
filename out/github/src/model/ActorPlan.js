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
 * The ActorPlan model module.
 * @module model/ActorPlan
 * @version v3
 */
class ActorPlan {
    /**
     * Constructs a new <code>ActorPlan</code>.
     * @alias module:model/ActorPlan
     */
    constructor() { 
        
        ActorPlan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActorPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActorPlan} obj Optional instance to populate.
     * @return {module:model/ActorPlan} The populated <code>ActorPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActorPlan();

            if (data.hasOwnProperty('collaborators')) {
                obj['collaborators'] = ApiClient.convertToType(data['collaborators'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('private_repos')) {
                obj['private_repos'] = ApiClient.convertToType(data['private_repos'], 'Number');
            }
            if (data.hasOwnProperty('space')) {
                obj['space'] = ApiClient.convertToType(data['space'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} collaborators
 */
ActorPlan.prototype['collaborators'] = undefined;

/**
 * @member {String} name
 */
ActorPlan.prototype['name'] = undefined;

/**
 * @member {Number} private_repos
 */
ActorPlan.prototype['private_repos'] = undefined;

/**
 * @member {Number} space
 */
ActorPlan.prototype['space'] = undefined;






export default ActorPlan;

