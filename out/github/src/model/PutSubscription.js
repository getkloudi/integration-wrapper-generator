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
 * The PutSubscription model module.
 * @module model/PutSubscription
 * @version 1.4.3
 */
class PutSubscription {
    /**
     * Constructs a new <code>PutSubscription</code>.
     * @alias module:model/PutSubscription
     */
    constructor() { 
        
        PutSubscription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSubscription} obj Optional instance to populate.
     * @return {module:model/PutSubscription} The populated <code>PutSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSubscription();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('ignored')) {
                obj['ignored'] = ApiClient.convertToType(data['ignored'], 'Boolean');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], Object);
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
 * @member {String} created_at
 */
PutSubscription.prototype['created_at'] = undefined;

/**
 * @member {Boolean} ignored
 */
PutSubscription.prototype['ignored'] = undefined;

/**
 * @member {Object} reason
 */
PutSubscription.prototype['reason'] = undefined;

/**
 * @member {Boolean} subscribed
 */
PutSubscription.prototype['subscribed'] = undefined;

/**
 * @member {String} thread_url
 */
PutSubscription.prototype['thread_url'] = undefined;

/**
 * @member {String} url
 */
PutSubscription.prototype['url'] = undefined;






export default PutSubscription;

