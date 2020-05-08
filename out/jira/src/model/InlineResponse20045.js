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
import InlineResponse20045Transitions from './InlineResponse20045Transitions';

/**
 * The InlineResponse20045 model module.
 * @module model/InlineResponse20045
 * @version 1.1.0
 */
class InlineResponse20045 {
    /**
     * Constructs a new <code>InlineResponse20045</code>.
     * 
     * @alias module:model/InlineResponse20045
     * @param transitions {Array.<module:model/InlineResponse20045Transitions>} 
     */
    constructor(transitions) { 
        
        InlineResponse20045.initialize(this, transitions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transitions) { 
        obj['transitions'] = transitions;
    }

    /**
     * Constructs a <code>InlineResponse20045</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20045} obj Optional instance to populate.
     * @return {module:model/InlineResponse20045} The populated <code>InlineResponse20045</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20045();

            if (data.hasOwnProperty('transitions')) {
                obj['transitions'] = ApiClient.convertToType(data['transitions'], [InlineResponse20045Transitions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InlineResponse20045Transitions>} transitions
 */
InlineResponse20045.prototype['transitions'] = undefined;






export default InlineResponse20045;

