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
 * The GroupLabel model module.
 * @module model/GroupLabel
 * @version 1.4.0
 */
class GroupLabel {
    /**
     * Constructs a new <code>GroupLabel</code>.
     * A group label.
     * @alias module:model/GroupLabel
     */
    constructor() { 
        
        GroupLabel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupLabel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupLabel} obj Optional instance to populate.
     * @return {module:model/GroupLabel} The populated <code>GroupLabel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupLabel();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The group label name.
 * @member {String} text
 */
GroupLabel.prototype['text'] = undefined;

/**
 * The title of the group label.
 * @member {String} title
 */
GroupLabel.prototype['title'] = undefined;

/**
 * The type of the group label.
 * @member {module:model/GroupLabel.TypeEnum} type
 */
GroupLabel.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
GroupLabel['TypeEnum'] = {

    /**
     * value: "ADMIN"
     * @const
     */
    "ADMIN": "ADMIN",

    /**
     * value: "SINGLE"
     * @const
     */
    "SINGLE": "SINGLE",

    /**
     * value: "MULTIPLE"
     * @const
     */
    "MULTIPLE": "MULTIPLE"
};



export default GroupLabel;

