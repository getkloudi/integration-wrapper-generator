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
 * The InlineResponse20022ConfigScopeProjects2 model module.
 * @module model/InlineResponse20022ConfigScopeProjects2
 * @version 1.1.0
 */
class InlineResponse20022ConfigScopeProjects2 {
    /**
     * Constructs a new <code>InlineResponse20022ConfigScopeProjects2</code>.
     * @alias module:model/InlineResponse20022ConfigScopeProjects2
     * @param id {Number} 
     */
    constructor(id) { 
        
        InlineResponse20022ConfigScopeProjects2.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>InlineResponse20022ConfigScopeProjects2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022ConfigScopeProjects2} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022ConfigScopeProjects2} The populated <code>InlineResponse20022ConfigScopeProjects2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20022ConfigScopeProjects2();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Object]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} attributes
 */
InlineResponse20022ConfigScopeProjects2.prototype['attributes'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20022ConfigScopeProjects2.prototype['id'] = undefined;






export default InlineResponse20022ConfigScopeProjects2;
