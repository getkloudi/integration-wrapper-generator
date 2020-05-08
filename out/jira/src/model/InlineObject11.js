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
 * The InlineObject11 model module.
 * @module model/InlineObject11
 * @version 1.2.0
 */
class InlineObject11 {
    /**
     * Constructs a new <code>InlineObject11</code>.
     * @alias module:model/InlineObject11
     */
    constructor() { 
        
        InlineObject11.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject11} obj Optional instance to populate.
     * @return {module:model/InlineObject11} The populated <code>InlineObject11</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject11();

            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The scope of the default sharing for new filters and dashboards:
 * @member {module:model/InlineObject11.ScopeEnum} scope
 */
InlineObject11.prototype['scope'] = undefined;





/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject11['ScopeEnum'] = {

    /**
     * value: "GLOBAL"
     * @const
     */
    "GLOBAL": "GLOBAL",

    /**
     * value: "AUTHENTICATED"
     * @const
     */
    "AUTHENTICATED": "AUTHENTICATED",

    /**
     * value: "PRIVATE"
     * @const
     */
    "PRIVATE": "PRIVATE"
};



export default InlineObject11;

