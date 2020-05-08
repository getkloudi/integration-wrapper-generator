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
 * The InlineObject52 model module.
 * @module model/InlineObject52
 * @version 1.1.0
 */
class InlineObject52 {
    /**
     * Constructs a new <code>InlineObject52</code>.
     * @alias module:model/InlineObject52
     */
    constructor() { 
        
        InlineObject52.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject52</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject52} obj Optional instance to populate.
     * @return {module:model/InlineObject52} The populated <code>InlineObject52</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject52();

            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], ['String']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} group
 */
InlineObject52.prototype['group'] = undefined;

/**
 * The user account ID of the user to add as a default actor. When not in GDPR-strict-mode this may be user key instead, however this behaviour is deprecated. You can add multiple users separated by a comma (for example, \"user\":[\"12345678-9abc-def1-2345-6789abcdef12\", \"abcdef12-3456-789a-bcde-f123456789ab\"]).
 * @member {Array.<String>} user
 */
InlineObject52.prototype['user'] = undefined;






export default InlineObject52;

