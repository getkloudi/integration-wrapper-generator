/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WebhookDetails from './WebhookDetails';

/**
 * The WebhookRegistrationDetails model module.
 * @module model/WebhookRegistrationDetails
 * @version 1.4.0
 */
class WebhookRegistrationDetails {
    /**
     * Constructs a new <code>WebhookRegistrationDetails</code>.
     * Details of webhooks to register.
     * @alias module:model/WebhookRegistrationDetails
     * @param url {String} The URL that specifies where to send the webhooks.
     * @param webhooks {Array.<module:model/WebhookDetails>} A list of webhooks.
     */
    constructor(url, webhooks) { 
        
        WebhookRegistrationDetails.initialize(this, url, webhooks);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, webhooks) { 
        obj['url'] = url;
        obj['webhooks'] = webhooks;
    }

    /**
     * Constructs a <code>WebhookRegistrationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRegistrationDetails} obj Optional instance to populate.
     * @return {module:model/WebhookRegistrationDetails} The populated <code>WebhookRegistrationDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRegistrationDetails();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], [WebhookDetails]);
            }
        }
        return obj;
    }


}

/**
 * The URL that specifies where to send the webhooks.
 * @member {String} url
 */
WebhookRegistrationDetails.prototype['url'] = undefined;

/**
 * A list of webhooks.
 * @member {Array.<module:model/WebhookDetails>} webhooks
 */
WebhookRegistrationDetails.prototype['webhooks'] = undefined;






export default WebhookRegistrationDetails;
