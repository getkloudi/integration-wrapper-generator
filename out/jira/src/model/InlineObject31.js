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
 * The InlineObject31 model module.
 * @module model/InlineObject31
 * @version 1.3.1
 */
class InlineObject31 {
    /**
     * Constructs a new <code>InlineObject31</code>.
     * @alias module:model/InlineObject31
     */
    constructor() { 
        
        InlineObject31.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject31</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject31} obj Optional instance to populate.
     * @return {module:model/InlineObject31} The populated <code>InlineObject31</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject31();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inward')) {
                obj['inward'] = ApiClient.convertToType(data['inward'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('outward')) {
                obj['outward'] = ApiClient.convertToType(data['outward'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the issue link type and is used as follows:
 * @member {String} id
 */
InlineObject31.prototype['id'] = undefined;

/**
 * The description of the issue link type inward link and is used as follows:
 * @member {String} inward
 */
InlineObject31.prototype['inward'] = undefined;

/**
 * The name of the issue link type and is used as follows:
 * @member {String} name
 */
InlineObject31.prototype['name'] = undefined;

/**
 * The description of the issue link type outward link and is used as follows:
 * @member {String} outward
 */
InlineObject31.prototype['outward'] = undefined;






export default InlineObject31;

