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
 * The InlineObject34 model module.
 * @module model/InlineObject34
 * @version 1.2.0
 */
class InlineObject34 {
    /**
     * Constructs a new <code>InlineObject34</code>.
     * @alias module:model/InlineObject34
     */
    constructor() { 
        
        InlineObject34.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject34</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject34} obj Optional instance to populate.
     * @return {module:model/InlineObject34} The populated <code>InlineObject34</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject34();

            if (data.hasOwnProperty('avatarId')) {
                obj['avatarId'] = ApiClient.convertToType(data['avatarId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of an issue type avatar.
 * @member {Number} avatarId
 */
InlineObject34.prototype['avatarId'] = undefined;

/**
 * The description of the issue type.
 * @member {String} description
 */
InlineObject34.prototype['description'] = undefined;

/**
 * The unique name for the issue type. Maximum length 60 characters.
 * @member {String} name
 */
InlineObject34.prototype['name'] = undefined;






export default InlineObject34;

