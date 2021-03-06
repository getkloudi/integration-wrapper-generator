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
 * The FunctionReferenceData model module.
 * @module model/FunctionReferenceData
 * @version 1.4.0
 */
class FunctionReferenceData {
    /**
     * Constructs a new <code>FunctionReferenceData</code>.
     * Details of functions that can be used in advanced searches.
     * @alias module:model/FunctionReferenceData
     */
    constructor() { 
        
        FunctionReferenceData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FunctionReferenceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionReferenceData} obj Optional instance to populate.
     * @return {module:model/FunctionReferenceData} The populated <code>FunctionReferenceData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunctionReferenceData();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('isList')) {
                obj['isList'] = ApiClient.convertToType(data['isList'], 'String');
            }
            if (data.hasOwnProperty('types')) {
                obj['types'] = ApiClient.convertToType(data['types'], ['String']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The display name of the function.
 * @member {String} displayName
 */
FunctionReferenceData.prototype['displayName'] = undefined;

/**
 * Whether the function can take a list of arguments.
 * @member {module:model/FunctionReferenceData.IsListEnum} isList
 */
FunctionReferenceData.prototype['isList'] = undefined;

/**
 * The data types returned by the function.
 * @member {Array.<String>} types
 */
FunctionReferenceData.prototype['types'] = undefined;

/**
 * The function identifier.
 * @member {String} value
 */
FunctionReferenceData.prototype['value'] = undefined;





/**
 * Allowed values for the <code>isList</code> property.
 * @enum {String}
 * @readonly
 */
FunctionReferenceData['IsListEnum'] = {

    /**
     * value: "true"
     * @const
     */
    "true": "true",

    /**
     * value: "false"
     * @const
     */
    "false": "false"
};



export default FunctionReferenceData;

