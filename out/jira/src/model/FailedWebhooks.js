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
import FailedWebhook from './FailedWebhook';

/**
 * The FailedWebhooks model module.
 * @module model/FailedWebhooks
 * @version 1.4.0
 */
class FailedWebhooks {
    /**
     * Constructs a new <code>FailedWebhooks</code>.
     * A page of failed webhooks.
     * @alias module:model/FailedWebhooks
     * @param maxResults {Number} The maximum number of items on the page. If the list of values is shorter than this number, then there are no more pages.
     * @param values {Array.<module:model/FailedWebhook>} The list of webhooks.
     */
    constructor(maxResults, values) { 
        
        FailedWebhooks.initialize(this, maxResults, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxResults, values) { 
        obj['maxResults'] = maxResults;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>FailedWebhooks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailedWebhooks} obj Optional instance to populate.
     * @return {module:model/FailedWebhooks} The populated <code>FailedWebhooks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FailedWebhooks();

            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [FailedWebhook]);
            }
        }
        return obj;
    }


}

/**
 * The maximum number of items on the page. If the list of values is shorter than this number, then there are no more pages.
 * @member {Number} maxResults
 */
FailedWebhooks.prototype['maxResults'] = undefined;

/**
 * The URL to the next page of results. Present only if the request returned at least one result.The next page may be empty at the time of receiving the response, but new failed webhooks may appear in time. You can save the URL to the next page and query for new results periodically (for example, every hour).
 * @member {String} next
 */
FailedWebhooks.prototype['next'] = undefined;

/**
 * The list of webhooks.
 * @member {Array.<module:model/FailedWebhook>} values
 */
FailedWebhooks.prototype['values'] = undefined;






export default FailedWebhooks;
