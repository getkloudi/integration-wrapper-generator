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
 * The Subscription model module.
 * @module model/Subscription
 * @version 1.3.0
 */
class Subscription {
    /**
     * Constructs a new <code>Subscription</code>.
     * @alias module:model/Subscription
     */
    constructor() { 
        
        Subscription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subscription} obj Optional instance to populate.
     * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subscription();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('ignored')) {
                obj['ignored'] = ApiClient.convertToType(data['ignored'], 'Boolean');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('repository_url')) {
                obj['repository_url'] = ApiClient.convertToType(data['repository_url'], 'String');
            }
            if (data.hasOwnProperty('subscribed')) {
                obj['subscribed'] = ApiClient.convertToType(data['subscribed'], 'Boolean');
            }
            if (data.hasOwnProperty('thread_url')) {
                obj['thread_url'] = ApiClient.convertToType(data['thread_url'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */
Subscription.prototype['created_at'] = undefined;

/**
 * @member {Boolean} ignored
 */
Subscription.prototype['ignored'] = undefined;

/**
 * @member {String} reason
 */
Subscription.prototype['reason'] = undefined;

/**
 * @member {String} repository_url
 */
Subscription.prototype['repository_url'] = undefined;

/**
 * @member {Boolean} subscribed
 */
Subscription.prototype['subscribed'] = undefined;

/**
 * @member {String} thread_url
 */
Subscription.prototype['thread_url'] = undefined;

/**
 * @member {String} url
 */
Subscription.prototype['url'] = undefined;






export default Subscription;

