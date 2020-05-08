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
 * The InlineObject43 model module.
 * @module model/InlineObject43
 * @version 1.3.1
 */
class InlineObject43 {
    /**
     * Constructs a new <code>InlineObject43</code>.
     * @alias module:model/InlineObject43
     */
    constructor() { 
        
        InlineObject43.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject43</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject43} obj Optional instance to populate.
     * @return {module:model/InlineObject43} The populated <code>InlineObject43</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject43();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the avatar. Required when setting the project avatar, otherwise read only.
 * @member {String} id
 */
InlineObject43.prototype['id'] = undefined;






export default InlineObject43;

