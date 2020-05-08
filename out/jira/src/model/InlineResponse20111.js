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
 * The InlineResponse20111 model module.
 * @module model/InlineResponse20111
 * @version 1.3.1
 */
class InlineResponse20111 {
    /**
     * Constructs a new <code>InlineResponse20111</code>.
     * 
     * @alias module:model/InlineResponse20111
     * @param id {String} 
     * @param isDeletable {Boolean} 
     * @param isSelected {Boolean} 
     * @param isSystemAvatar {Boolean} 
     */
    constructor(id, isDeletable, isSelected, isSystemAvatar) { 
        
        InlineResponse20111.initialize(this, id, isDeletable, isSelected, isSystemAvatar);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, isDeletable, isSelected, isSystemAvatar) { 
        obj['id'] = id;
        obj['isDeletable'] = isDeletable;
        obj['isSelected'] = isSelected;
        obj['isSystemAvatar'] = isSystemAvatar;
    }

    /**
     * Constructs a <code>InlineResponse20111</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20111} obj Optional instance to populate.
     * @return {module:model/InlineResponse20111} The populated <code>InlineResponse20111</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20111();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isDeletable')) {
                obj['isDeletable'] = ApiClient.convertToType(data['isDeletable'], 'Boolean');
            }
            if (data.hasOwnProperty('isSelected')) {
                obj['isSelected'] = ApiClient.convertToType(data['isSelected'], 'Boolean');
            }
            if (data.hasOwnProperty('isSystemAvatar')) {
                obj['isSystemAvatar'] = ApiClient.convertToType(data['isSystemAvatar'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse20111.prototype['id'] = undefined;

/**
 * @member {Boolean} isDeletable
 */
InlineResponse20111.prototype['isDeletable'] = undefined;

/**
 * @member {Boolean} isSelected
 */
InlineResponse20111.prototype['isSelected'] = undefined;

/**
 * @member {Boolean} isSystemAvatar
 */
InlineResponse20111.prototype['isSystemAvatar'] = undefined;






export default InlineResponse20111;

