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
 * The ColumnItem model module.
 * @module model/ColumnItem
 * @version 1.4.0
 */
class ColumnItem {
    /**
     * Constructs a new <code>ColumnItem</code>.
     * Details of an issue navigator column item.
     * @alias module:model/ColumnItem
     */
    constructor() { 
        
        ColumnItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ColumnItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ColumnItem} obj Optional instance to populate.
     * @return {module:model/ColumnItem} The populated <code>ColumnItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ColumnItem();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The issue navigator column label.
 * @member {String} label
 */
ColumnItem.prototype['label'] = undefined;

/**
 * The issue navigator column value.
 * @member {String} value
 */
ColumnItem.prototype['value'] = undefined;






export default ColumnItem;
