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
import InlineResponse20068Values from './InlineResponse20068Values';

/**
 * The InlineResponse20068 model module.
 * @module model/InlineResponse20068
 * @version 1.2.0
 */
class InlineResponse20068 {
    /**
     * Constructs a new <code>InlineResponse20068</code>.
     * 
     * @alias module:model/InlineResponse20068
     * @param isLast {Boolean} 
     * @param maxResults {Number} 
     * @param nextPage {String} 
     * @param self {String} 
     * @param startAt {Number} 
     * @param total {Number} 
     * @param values {Array.<module:model/InlineResponse20068Values>} 
     */
    constructor(isLast, maxResults, nextPage, self, startAt, total, values) { 
        
        InlineResponse20068.initialize(this, isLast, maxResults, nextPage, self, startAt, total, values);
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
     * Constructs a <code>InlineResponse20068</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20068} obj Optional instance to populate.
     * @return {module:model/InlineResponse20068} The populated <code>InlineResponse20068</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20068();

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
                obj['values'] = ApiClient.convertToType(data['values'], [InlineResponse20068Values]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isLast
 */
InlineResponse20068.prototype['isLast'] = undefined;

/**
 * @member {Number} maxResults
 */
InlineResponse20068.prototype['maxResults'] = undefined;

/**
 * @member {String} nextPage
 */
InlineResponse20068.prototype['nextPage'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20068.prototype['self'] = undefined;

/**
 * @member {Number} startAt
 */
InlineResponse20068.prototype['startAt'] = undefined;

/**
 * @member {Number} total
 */
InlineResponse20068.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20068Values>} values
 */
InlineResponse20068.prototype['values'] = undefined;






export default InlineResponse20068;

