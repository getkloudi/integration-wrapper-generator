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
 * The PullUpdate model module.
 * @module model/PullUpdate
 * @version 1.2.0
 */
class PullUpdate {
    /**
     * Constructs a new <code>PullUpdate</code>.
     * @alias module:model/PullUpdate
     */
    constructor() { 
        
        PullUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PullUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullUpdate} obj Optional instance to populate.
     * @return {module:model/PullUpdate} The populated <code>PullUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullUpdate();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
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
 * @member {String} body
 */
PullUpdate.prototype['body'] = undefined;

/**
 * @member {String} state
 */
PullUpdate.prototype['state'] = undefined;

/**
 * @member {String} title
 */
PullUpdate.prototype['title'] = undefined;






export default PullUpdate;

