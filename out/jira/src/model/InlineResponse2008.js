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
import InlineResponse2008System from './InlineResponse2008System';

/**
 * The InlineResponse2008 model module.
 * @module model/InlineResponse2008
 * @version 1.0.0
 */
class InlineResponse2008 {
    /**
     * Constructs a new <code>InlineResponse2008</code>.
     * 
     * @alias module:model/InlineResponse2008
     * @param system {Array.<module:model/InlineResponse2008System>} 
     */
    constructor(system) { 
        
        InlineResponse2008.initialize(this, system);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, system) { 
        obj['system'] = system;
    }

    /**
     * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008();

            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], [InlineResponse2008System]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InlineResponse2008System>} system
 */
InlineResponse2008.prototype['system'] = undefined;






export default InlineResponse2008;

