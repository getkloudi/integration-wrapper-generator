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
 * The InlineResponse20017 model module.
 * @module model/InlineResponse20017
 * @version 1.2.0
 */
class InlineResponse20017 {
    /**
     * Constructs a new <code>InlineResponse20017</code>.
     * 
     * @alias module:model/InlineResponse20017
     * @param self {String} 
     * @param value {String} 
     */
    constructor(self, value) { 
        
        InlineResponse20017.initialize(this, self, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, self, value) { 
        obj['self'] = self;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>InlineResponse20017</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20017} obj Optional instance to populate.
     * @return {module:model/InlineResponse20017} The populated <code>InlineResponse20017</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20017();

            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} self
 */
InlineResponse20017.prototype['self'] = undefined;

/**
 * @member {String} value
 */
InlineResponse20017.prototype['value'] = undefined;






export default InlineResponse20017;

