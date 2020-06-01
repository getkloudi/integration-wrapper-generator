/**
 * Rollbar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class Event.
* @enum {}
* @readonly
*/
export default class Event {
    
        /**
         * value: "new"
         * @const
         */
        "new" = "new";

    
        /**
         * value: "repeated"
         * @const
         */
        "repeated" = "repeated";

    
        /**
         * value: "reactivated"
         * @const
         */
        "reactivated" = "reactivated";

    
        /**
         * value: "resolved"
         * @const
         */
        "resolved" = "resolved";

    

    /**
    * Returns a <code>Event</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Event} The enum <code>Event</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
