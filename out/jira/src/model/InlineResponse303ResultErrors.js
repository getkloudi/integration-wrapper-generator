/**
 * Jira
 * The Jira Cloud Platform REST API
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
 * The InlineResponse303ResultErrors model module.
 * @module model/InlineResponse303ResultErrors
 * @version 1.1.0
 */
class InlineResponse303ResultErrors {
    /**
     * Constructs a new <code>InlineResponse303ResultErrors</code>.
     * @alias module:model/InlineResponse303ResultErrors
     * @param errorMessages {Array.<Object>} 
     * @param errors {Object} 
     */
    constructor(errorMessages, errors) { 
        
        InlineResponse303ResultErrors.initialize(this, errorMessages, errors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, errorMessages, errors) { 
        obj['errorMessages'] = errorMessages;
        obj['errors'] = errors;
    }

    /**
     * Constructs a <code>InlineResponse303ResultErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse303ResultErrors} obj Optional instance to populate.
     * @return {module:model/InlineResponse303ResultErrors} The populated <code>InlineResponse303ResultErrors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse303ResultErrors();

            if (data.hasOwnProperty('errorMessages')) {
                obj['errorMessages'] = ApiClient.convertToType(data['errorMessages'], [Object]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} errorMessages
 */
InlineResponse303ResultErrors.prototype['errorMessages'] = undefined;

/**
 * @member {Object} errors
 */
InlineResponse303ResultErrors.prototype['errors'] = undefined;






export default InlineResponse303ResultErrors;

