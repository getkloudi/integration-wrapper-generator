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
 * The InlineResponse20018Group model module.
 * @module model/InlineResponse20018Group
 * @version 1.2.0
 */
class InlineResponse20018Group {
    /**
     * Constructs a new <code>InlineResponse20018Group</code>.
     * @alias module:model/InlineResponse20018Group
     * @param name {String} 
     * @param self {String} 
     */
    constructor(name, self) { 
        
        InlineResponse20018Group.initialize(this, name, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, self) { 
        obj['name'] = name;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20018Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018Group} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018Group} The populated <code>InlineResponse20018Group</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20018Group();

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
 * @member {String} name
 */
InlineResponse20018Group.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20018Group.prototype['self'] = undefined;






export default InlineResponse20018Group;

