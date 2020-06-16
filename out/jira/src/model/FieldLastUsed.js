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
 * The FieldLastUsed model module.
 * @module model/FieldLastUsed
 * @version 1.4.0
 */
class FieldLastUsed {
    /**
     * Constructs a new <code>FieldLastUsed</code>.
     * Information about the most recent use of a field.
     * @alias module:model/FieldLastUsed
     */
    constructor() { 
        
        FieldLastUsed.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldLastUsed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldLastUsed} obj Optional instance to populate.
     * @return {module:model/FieldLastUsed} The populated <code>FieldLastUsed</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldLastUsed();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Last used value type:   *  *TRACKED*: field is tracked and a last used date is available.  *  *NOT\\_TRACKED*: field is not tracked, last used date is not available.  *  *NO\\_INFORMATION*: field is tracked, but no last used date is available.
 * @member {module:model/FieldLastUsed.TypeEnum} type
 */
FieldLastUsed.prototype['type'] = undefined;

/**
 * The date when the value of the field last changed.
 * @member {Date} value
 */
FieldLastUsed.prototype['value'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
FieldLastUsed['TypeEnum'] = {

    /**
     * value: "TRACKED"
     * @const
     */
    "TRACKED": "TRACKED",

    /**
     * value: "NOT_TRACKED"
     * @const
     */
    "NOT_TRACKED": "NOT_TRACKED",

    /**
     * value: "NO_INFORMATION"
     * @const
     */
    "NO_INFORMATION": "NO_INFORMATION"
};



export default FieldLastUsed;

