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
 * The FieldConfigurationItem model module.
 * @module model/FieldConfigurationItem
 * @version 1.4.0
 */
class FieldConfigurationItem {
    /**
     * Constructs a new <code>FieldConfigurationItem</code>.
     * A field within a field configuration.
     * @alias module:model/FieldConfigurationItem
     * @param id {String} The ID of the field within the field configuration.
     */
    constructor(id) { 
        
        FieldConfigurationItem.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>FieldConfigurationItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldConfigurationItem} obj Optional instance to populate.
     * @return {module:model/FieldConfigurationItem} The populated <code>FieldConfigurationItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldConfigurationItem();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isHidden')) {
                obj['isHidden'] = ApiClient.convertToType(data['isHidden'], 'Boolean');
            }
            if (data.hasOwnProperty('isRequired')) {
                obj['isRequired'] = ApiClient.convertToType(data['isRequired'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The description of the field within the field configuration.
 * @member {String} description
 */
FieldConfigurationItem.prototype['description'] = undefined;

/**
 * The ID of the field within the field configuration.
 * @member {String} id
 */
FieldConfigurationItem.prototype['id'] = undefined;

/**
 * Whether the field is hidden in the field configuration.
 * @member {Boolean} isHidden
 */
FieldConfigurationItem.prototype['isHidden'] = undefined;

/**
 * Whether the field is required in the field configuration.
 * @member {Boolean} isRequired
 */
FieldConfigurationItem.prototype['isRequired'] = undefined;






export default FieldConfigurationItem;

