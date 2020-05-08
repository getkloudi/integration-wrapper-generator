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
 * The InlineResponse20011Value model module.
 * @module model/InlineResponse20011Value
 * @version 1.3.1
 */
class InlineResponse20011Value {
    /**
     * Constructs a new <code>InlineResponse20011Value</code>.
     * @alias module:model/InlineResponse20011Value
     * @param strideConversationId {String} 
     * @param supportTime {String} 
     */
    constructor(strideConversationId, supportTime) { 
        
        InlineResponse20011Value.initialize(this, strideConversationId, supportTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, strideConversationId, supportTime) { 
        obj['stride.conversation.id'] = strideConversationId;
        obj['support.time'] = supportTime;
    }

    /**
     * Constructs a <code>InlineResponse20011Value</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20011Value} obj Optional instance to populate.
     * @return {module:model/InlineResponse20011Value} The populated <code>InlineResponse20011Value</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20011Value();

            if (data.hasOwnProperty('stride.conversation.id')) {
                obj['stride.conversation.id'] = ApiClient.convertToType(data['stride.conversation.id'], 'String');
            }
            if (data.hasOwnProperty('support.time')) {
                obj['support.time'] = ApiClient.convertToType(data['support.time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} stride.conversation.id
 */
InlineResponse20011Value.prototype['stride.conversation.id'] = undefined;

/**
 * @member {String} support.time
 */
InlineResponse20011Value.prototype['support.time'] = undefined;






export default InlineResponse20011Value;

