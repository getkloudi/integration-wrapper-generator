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
 * The InlineResponse20098 model module.
 * @module model/InlineResponse20098
 * @version 1.3.1
 */
class InlineResponse20098 {
    /**
     * Constructs a new <code>InlineResponse20098</code>.
     * 
     * @alias module:model/InlineResponse20098
     * @param issuesCount {Number} 
     * @param issuesUnresolvedCount {Number} 
     * @param self {String} 
     */
    constructor(issuesCount, issuesUnresolvedCount, self) { 
        
        InlineResponse20098.initialize(this, issuesCount, issuesUnresolvedCount, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issuesCount, issuesUnresolvedCount, self) { 
        obj['issuesCount'] = issuesCount;
        obj['issuesUnresolvedCount'] = issuesUnresolvedCount;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20098</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20098} obj Optional instance to populate.
     * @return {module:model/InlineResponse20098} The populated <code>InlineResponse20098</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20098();

            if (data.hasOwnProperty('issuesCount')) {
                obj['issuesCount'] = ApiClient.convertToType(data['issuesCount'], 'Number');
            }
            if (data.hasOwnProperty('issuesUnresolvedCount')) {
                obj['issuesUnresolvedCount'] = ApiClient.convertToType(data['issuesUnresolvedCount'], 'Number');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} issuesCount
 */
InlineResponse20098.prototype['issuesCount'] = undefined;

/**
 * @member {Number} issuesUnresolvedCount
 */
InlineResponse20098.prototype['issuesUnresolvedCount'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20098.prototype['self'] = undefined;






export default InlineResponse20098;

