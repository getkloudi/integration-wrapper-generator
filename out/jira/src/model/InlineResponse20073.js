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
import InlineResponse20073Values from './InlineResponse20073Values';

/**
 * The InlineResponse20073 model module.
 * @module model/InlineResponse20073
 * @version 1.1.0
 */
class InlineResponse20073 {
    /**
     * Constructs a new <code>InlineResponse20073</code>.
     * 
     * @alias module:model/InlineResponse20073
     * @param isLast {Boolean} 
     * @param maxResults {Number} 
     * @param nextPage {String} 
     * @param self {String} 
     * @param startAt {Number} 
     * @param total {Number} 
     * @param values {Array.<module:model/InlineResponse20073Values>} 
     */
    constructor(isLast, maxResults, nextPage, self, startAt, total, values) { 
        
        InlineResponse20073.initialize(this, isLast, maxResults, nextPage, self, startAt, total, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isLast, maxResults, nextPage, self, startAt, total, values) { 
        obj['isLast'] = isLast;
        obj['maxResults'] = maxResults;
        obj['nextPage'] = nextPage;
        obj['self'] = self;
        obj['startAt'] = startAt;
        obj['total'] = total;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>InlineResponse20073</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20073} obj Optional instance to populate.
     * @return {module:model/InlineResponse20073} The populated <code>InlineResponse20073</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20073();

            if (data.hasOwnProperty('isLast')) {
                obj['isLast'] = ApiClient.convertToType(data['isLast'], 'Boolean');
            }
            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('nextPage')) {
                obj['nextPage'] = ApiClient.convertToType(data['nextPage'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [InlineResponse20073Values]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isLast
 */
InlineResponse20073.prototype['isLast'] = undefined;

/**
 * @member {Number} maxResults
 */
InlineResponse20073.prototype['maxResults'] = undefined;

/**
 * @member {String} nextPage
 */
InlineResponse20073.prototype['nextPage'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20073.prototype['self'] = undefined;

/**
 * @member {Number} startAt
 */
InlineResponse20073.prototype['startAt'] = undefined;

/**
 * @member {Number} total
 */
InlineResponse20073.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20073Values>} values
 */
InlineResponse20073.prototype['values'] = undefined;






export default InlineResponse20073;

