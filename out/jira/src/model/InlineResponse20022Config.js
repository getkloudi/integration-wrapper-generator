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
import InlineResponse20022ConfigScope from './InlineResponse20022ConfigScope';

/**
 * The InlineResponse20022Config model module.
 * @module model/InlineResponse20022Config
 * @version 1.2.0
 */
class InlineResponse20022Config {
    /**
     * Constructs a new <code>InlineResponse20022Config</code>.
     * @alias module:model/InlineResponse20022Config
     * @param attributes {Array.<Object>} 
     * @param scope {module:model/InlineResponse20022ConfigScope} 
     */
    constructor(attributes, scope) { 
        
        InlineResponse20022Config.initialize(this, attributes, scope);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attributes, scope) { 
        obj['attributes'] = attributes;
        obj['scope'] = scope;
    }

    /**
     * Constructs a <code>InlineResponse20022Config</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022Config} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022Config} The populated <code>InlineResponse20022Config</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20022Config();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Object]);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = InlineResponse20022ConfigScope.constructFromObject(data['scope']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} attributes
 */
InlineResponse20022Config.prototype['attributes'] = undefined;

/**
 * @member {module:model/InlineResponse20022ConfigScope} scope
 */
InlineResponse20022Config.prototype['scope'] = undefined;






export default InlineResponse20022Config;

