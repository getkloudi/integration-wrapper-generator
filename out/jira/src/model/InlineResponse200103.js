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
 * The InlineResponse200103 model module.
 * @module model/InlineResponse200103
 * @version 1.2.0
 */
class InlineResponse200103 {
    /**
     * Constructs a new <code>InlineResponse200103</code>.
     * 
     * @alias module:model/InlineResponse200103
     * @param workflow {String} 
     */
    constructor(workflow) { 
        
        InlineResponse200103.initialize(this, workflow);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, workflow) { 
        obj['workflow'] = workflow;
    }

    /**
     * Constructs a <code>InlineResponse200103</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200103} obj Optional instance to populate.
     * @return {module:model/InlineResponse200103} The populated <code>InlineResponse200103</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200103();

            if (data.hasOwnProperty('workflow')) {
                obj['workflow'] = ApiClient.convertToType(data['workflow'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} workflow
 */
InlineResponse200103.prototype['workflow'] = undefined;






export default InlineResponse200103;

