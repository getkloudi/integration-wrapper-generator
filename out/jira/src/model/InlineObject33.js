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
 * The InlineObject33 model module.
 * @module model/InlineObject33
 * @version 1.0.0
 */
class InlineObject33 {
    /**
     * Constructs a new <code>InlineObject33</code>.
     * @alias module:model/InlineObject33
     */
    constructor() { 
        
        InlineObject33.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject33</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject33} obj Optional instance to populate.
     * @return {module:model/InlineObject33} The populated <code>InlineObject33</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject33();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The description of the issue type.
 * @member {String} description
 */
InlineObject33.prototype['description'] = undefined;

/**
 * The unique name for the issue type. Maximum length 60 characters. Required.
 * @member {String} name
 */
InlineObject33.prototype['name'] = undefined;

/**
 * Whether the issue type is subtype or standard. Defaults to standard.
 * @member {module:model/InlineObject33.TypeEnum} type
 */
InlineObject33.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject33['TypeEnum'] = {

    /**
     * value: "subtask"
     * @const
     */
    "subtask": "subtask",

    /**
     * value: "standard"
     * @const
     */
    "standard": "standard"
};



export default InlineObject33;

