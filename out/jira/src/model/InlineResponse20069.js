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
 * The InlineResponse20069 model module.
 * @module model/InlineResponse20069
 * @version 1.2.0
 */
class InlineResponse20069 {
    /**
     * Constructs a new <code>InlineResponse20069</code>.
     * @alias module:model/InlineResponse20069
     * @param color {String} 
     * @param descriptionI18nKey {String} 
     * @param formattedKey {String} 
     * @param icon {String} 
     * @param key {String} 
     */
    constructor(color, descriptionI18nKey, formattedKey, icon, key) { 
        
        InlineResponse20069.initialize(this, color, descriptionI18nKey, formattedKey, icon, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, color, descriptionI18nKey, formattedKey, icon, key) { 
        obj['color'] = color;
        obj['descriptionI18nKey'] = descriptionI18nKey;
        obj['formattedKey'] = formattedKey;
        obj['icon'] = icon;
        obj['key'] = key;
    }

    /**
     * Constructs a <code>InlineResponse20069</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20069} obj Optional instance to populate.
     * @return {module:model/InlineResponse20069} The populated <code>InlineResponse20069</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20069();

            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('descriptionI18nKey')) {
                obj['descriptionI18nKey'] = ApiClient.convertToType(data['descriptionI18nKey'], 'String');
            }
            if (data.hasOwnProperty('formattedKey')) {
                obj['formattedKey'] = ApiClient.convertToType(data['formattedKey'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} color
 */
InlineResponse20069.prototype['color'] = undefined;

/**
 * @member {String} descriptionI18nKey
 */
InlineResponse20069.prototype['descriptionI18nKey'] = undefined;

/**
 * @member {String} formattedKey
 */
InlineResponse20069.prototype['formattedKey'] = undefined;

/**
 * @member {String} icon
 */
InlineResponse20069.prototype['icon'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20069.prototype['key'] = undefined;






export default InlineResponse20069;

