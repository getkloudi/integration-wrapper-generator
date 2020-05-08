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
import InlineResponse20095Link from './InlineResponse20095Link';

/**
 * The InlineResponse20099 model module.
 * @module model/InlineResponse20099
 * @version 1.3.1
 */
class InlineResponse20099 {
    /**
     * Constructs a new <code>InlineResponse20099</code>.
     * 
     * @alias module:model/InlineResponse20099
     * @param link {module:model/InlineResponse20095Link} 
     * @param name {String} 
     * @param self {String} 
     */
    constructor(link, name, self) { 
        
        InlineResponse20099.initialize(this, link, name, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, link, name, self) { 
        obj['link'] = link;
        obj['name'] = name;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20099</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20099} obj Optional instance to populate.
     * @return {module:model/InlineResponse20099} The populated <code>InlineResponse20099</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20099();

            if (data.hasOwnProperty('link')) {
                obj['link'] = InlineResponse20095Link.constructFromObject(data['link']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20095Link} link
 */
InlineResponse20099.prototype['link'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20099.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20099.prototype['self'] = undefined;






export default InlineResponse20099;

