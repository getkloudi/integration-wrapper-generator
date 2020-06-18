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
 * The SimpleErrorCollection model module.
 * @module model/SimpleErrorCollection
 * @version 1.4.0
 */
class SimpleErrorCollection {
    /**
     * Constructs a new <code>SimpleErrorCollection</code>.
     * @alias module:model/SimpleErrorCollection
     */
    constructor() { 
        
        SimpleErrorCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimpleErrorCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleErrorCollection} obj Optional instance to populate.
     * @return {module:model/SimpleErrorCollection} The populated <code>SimpleErrorCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleErrorCollection();

            if (data.hasOwnProperty('errorMessages')) {
                obj['errorMessages'] = ApiClient.convertToType(data['errorMessages'], ['String']);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], {'String': 'String'});
            }
            if (data.hasOwnProperty('httpStatusCode')) {
                obj['httpStatusCode'] = ApiClient.convertToType(data['httpStatusCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The list of error messages produced by this operation. For example, \"input parameter 'key' must be provided\"
 * @member {Array.<String>} errorMessages
 */
SimpleErrorCollection.prototype['errorMessages'] = undefined;

/**
 * The list of errors by parameter returned by the operation. For example,\"projectKey\": \"Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters.\"
 * @member {Object.<String, String>} errors
 */
SimpleErrorCollection.prototype['errors'] = undefined;

/**
 * @member {Number} httpStatusCode
 */
SimpleErrorCollection.prototype['httpStatusCode'] = undefined;






export default SimpleErrorCollection;
