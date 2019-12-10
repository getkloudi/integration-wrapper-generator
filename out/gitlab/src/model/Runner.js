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
 * The Runner model module.
 * @module model/Runner
 * @version 1.0.0
 */
class Runner {
    /**
     * Constructs a new <code>Runner</code>.
     * Remove a runner
     * @alias module:model/Runner
     */
    constructor() { 
        
        Runner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Runner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Runner} obj Optional instance to populate.
     * @return {module:model/Runner} The populated <code>Runner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Runner();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('is_shared')) {
                obj['is_shared'] = ApiClient.convertToType(data['is_shared'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} active
 */
Runner.prototype['active'] = undefined;

/**
 * @member {String} description
 */
Runner.prototype['description'] = undefined;

/**
 * @member {String} id
 */
Runner.prototype['id'] = undefined;

/**
 * @member {String} is_shared
 */
Runner.prototype['is_shared'] = undefined;

/**
 * @member {String} name
 */
Runner.prototype['name'] = undefined;






export default Runner;

