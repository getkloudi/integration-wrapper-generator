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
 * The InlineResponse200104 model module.
 * @module model/InlineResponse200104
 * @version 1.1.0
 */
class InlineResponse200104 {
    /**
     * Constructs a new <code>InlineResponse200104</code>.
     * 
     * @alias module:model/InlineResponse200104
     * @param issueType {String} 
     * @param workflow {String} 
     */
    constructor(issueType, workflow) { 
        
        InlineResponse200104.initialize(this, issueType, workflow);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueType, workflow) { 
        obj['issueType'] = issueType;
        obj['workflow'] = workflow;
    }

    /**
     * Constructs a <code>InlineResponse200104</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200104} obj Optional instance to populate.
     * @return {module:model/InlineResponse200104} The populated <code>InlineResponse200104</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200104();

            if (data.hasOwnProperty('issueType')) {
                obj['issueType'] = ApiClient.convertToType(data['issueType'], 'String');
            }
            if (data.hasOwnProperty('workflow')) {
                obj['workflow'] = ApiClient.convertToType(data['workflow'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} issueType
 */
InlineResponse200104.prototype['issueType'] = undefined;

/**
 * @member {String} workflow
 */
InlineResponse200104.prototype['workflow'] = undefined;






export default InlineResponse200104;
