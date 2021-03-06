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
 * The ApplicationProperty model module.
 * @module model/ApplicationProperty
 * @version 1.4.0
 */
class ApplicationProperty {
    /**
     * Constructs a new <code>ApplicationProperty</code>.
     * Details of an application property.
     * @alias module:model/ApplicationProperty
     */
    constructor() { 
        
        ApplicationProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationProperty} obj Optional instance to populate.
     * @return {module:model/ApplicationProperty} The populated <code>ApplicationProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationProperty();

            if (data.hasOwnProperty('allowedValues')) {
                obj['allowedValues'] = ApiClient.convertToType(data['allowedValues'], ['String']);
            }
            if (data.hasOwnProperty('defaultValue')) {
                obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'String');
            }
            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
            if (data.hasOwnProperty('example')) {
                obj['example'] = ApiClient.convertToType(data['example'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The allowed values, if applicable.
 * @member {Array.<String>} allowedValues
 */
ApplicationProperty.prototype['allowedValues'] = undefined;

/**
 * The default value of the application property.
 * @member {String} defaultValue
 */
ApplicationProperty.prototype['defaultValue'] = undefined;

/**
 * The description of the application property.
 * @member {String} desc
 */
ApplicationProperty.prototype['desc'] = undefined;

/**
 * @member {String} example
 */
ApplicationProperty.prototype['example'] = undefined;

/**
 * The ID of the application property. The ID and key are the same.
 * @member {String} id
 */
ApplicationProperty.prototype['id'] = undefined;

/**
 * The key of the application property. The ID and key are the same.
 * @member {String} key
 */
ApplicationProperty.prototype['key'] = undefined;

/**
 * The name of the application property.
 * @member {String} name
 */
ApplicationProperty.prototype['name'] = undefined;

/**
 * The data type of the application property.
 * @member {String} type
 */
ApplicationProperty.prototype['type'] = undefined;

/**
 * The new value.
 * @member {String} value
 */
ApplicationProperty.prototype['value'] = undefined;






export default ApplicationProperty;

