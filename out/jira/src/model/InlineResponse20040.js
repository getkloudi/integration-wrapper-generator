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
import InlineResponse2009Values from './InlineResponse2009Values';

/**
 * The InlineResponse20040 model module.
 * @module model/InlineResponse20040
 * @version 1.3.0
 */
class InlineResponse20040 {
    /**
     * Constructs a new <code>InlineResponse20040</code>.
     * 
     * @alias module:model/InlineResponse20040
     * @param comments {Array.<module:model/InlineResponse2009Values>} 
     * @param maxResults {Number} 
     * @param startAt {Number} 
     * @param total {Number} 
     */
    constructor(comments, maxResults, startAt, total) { 
        
        InlineResponse20040.initialize(this, comments, maxResults, startAt, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, comments, maxResults, startAt, total) { 
        obj['comments'] = comments;
        obj['maxResults'] = maxResults;
        obj['startAt'] = startAt;
        obj['total'] = total;
    }

    /**
     * Constructs a <code>InlineResponse20040</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20040} obj Optional instance to populate.
     * @return {module:model/InlineResponse20040} The populated <code>InlineResponse20040</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20040();

            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], [InlineResponse2009Values]);
            }
            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InlineResponse2009Values>} comments
 */
InlineResponse20040.prototype['comments'] = undefined;

/**
 * @member {Number} maxResults
 */
InlineResponse20040.prototype['maxResults'] = undefined;

/**
 * @member {Number} startAt
 */
InlineResponse20040.prototype['startAt'] = undefined;

/**
 * @member {Number} total
 */
InlineResponse20040.prototype['total'] = undefined;






export default InlineResponse20040;

