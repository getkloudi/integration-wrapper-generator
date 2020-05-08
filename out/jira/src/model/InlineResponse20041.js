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
import InlineResponse20041Fields from './InlineResponse20041Fields';

/**
 * The InlineResponse20041 model module.
 * @module model/InlineResponse20041
 * @version 1.3.0
 */
class InlineResponse20041 {
    /**
     * Constructs a new <code>InlineResponse20041</code>.
     * 
     * @alias module:model/InlineResponse20041
     * @param fields {module:model/InlineResponse20041Fields} 
     */
    constructor(fields) { 
        
        InlineResponse20041.initialize(this, fields);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fields) { 
        obj['fields'] = fields;
    }

    /**
     * Constructs a <code>InlineResponse20041</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20041} obj Optional instance to populate.
     * @return {module:model/InlineResponse20041} The populated <code>InlineResponse20041</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20041();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = InlineResponse20041Fields.constructFromObject(data['fields']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20041Fields} fields
 */
InlineResponse20041.prototype['fields'] = undefined;






export default InlineResponse20041;

