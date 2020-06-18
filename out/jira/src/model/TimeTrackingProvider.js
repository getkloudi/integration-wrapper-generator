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

/**
 * The TimeTrackingProvider model module.
 * @module model/TimeTrackingProvider
 * @version 1.4.0
 */
class TimeTrackingProvider {
    /**
     * Constructs a new <code>TimeTrackingProvider</code>.
     * Details about the time tracking provider.
     * @alias module:model/TimeTrackingProvider
     * @param key {String} The key for the time tracking provider. For example, *JIRA*.
     */
    constructor(key) { 
        
        TimeTrackingProvider.initialize(this, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key) { 
        obj['key'] = key;
    }

    /**
     * Constructs a <code>TimeTrackingProvider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeTrackingProvider} obj Optional instance to populate.
     * @return {module:model/TimeTrackingProvider} The populated <code>TimeTrackingProvider</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeTrackingProvider();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The key for the time tracking provider. For example, *JIRA*.
 * @member {String} key
 */
TimeTrackingProvider.prototype['key'] = undefined;

/**
 * The name of the time tracking provider. For example, *JIRA provided time tracking*.
 * @member {String} name
 */
TimeTrackingProvider.prototype['name'] = undefined;

/**
 * The URL of the configuration page for the time tracking provider app. For example, *_/example/config/url*. This property is only returned if the `adminPageKey` property is set in the module descriptor of the time tracking provider app.
 * @member {String} url
 */
TimeTrackingProvider.prototype['url'] = undefined;






export default TimeTrackingProvider;
