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
 * The InlineResponse20095Link model module.
 * @module model/InlineResponse20095Link
 * @version 1.0.0
 */
class InlineResponse20095Link {
    /**
     * Constructs a new <code>InlineResponse20095Link</code>.
     * @alias module:model/InlineResponse20095Link
     * @param colors {Array.<Object>} 
     * @param globalId {String} 
     * @param myCustomLinkProperty {Boolean} 
     */
    constructor(colors, globalId, myCustomLinkProperty) { 
        
        InlineResponse20095Link.initialize(this, colors, globalId, myCustomLinkProperty);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, colors, globalId, myCustomLinkProperty) { 
        obj['colors'] = colors;
        obj['globalId'] = globalId;
        obj['myCustomLinkProperty'] = myCustomLinkProperty;
    }

    /**
     * Constructs a <code>InlineResponse20095Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20095Link} obj Optional instance to populate.
     * @return {module:model/InlineResponse20095Link} The populated <code>InlineResponse20095Link</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20095Link();

            if (data.hasOwnProperty('colors')) {
                obj['colors'] = ApiClient.convertToType(data['colors'], [Object]);
            }
            if (data.hasOwnProperty('globalId')) {
                obj['globalId'] = ApiClient.convertToType(data['globalId'], 'String');
            }
            if (data.hasOwnProperty('myCustomLinkProperty')) {
                obj['myCustomLinkProperty'] = ApiClient.convertToType(data['myCustomLinkProperty'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} colors
 */
InlineResponse20095Link.prototype['colors'] = undefined;

/**
 * @member {String} globalId
 */
InlineResponse20095Link.prototype['globalId'] = undefined;

/**
 * @member {Boolean} myCustomLinkProperty
 */
InlineResponse20095Link.prototype['myCustomLinkProperty'] = undefined;






export default InlineResponse20095Link;

