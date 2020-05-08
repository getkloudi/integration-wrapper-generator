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
import InlineResponse20037FieldsWorklog from './InlineResponse20037FieldsWorklog';

/**
 * The InlineResponse20048 model module.
 * @module model/InlineResponse20048
 * @version 1.1.0
 */
class InlineResponse20048 {
    /**
     * Constructs a new <code>InlineResponse20048</code>.
     * 
     * @alias module:model/InlineResponse20048
     * @param maxResults {Number} 
     * @param startAt {Number} 
     * @param total {Number} 
     * @param worklogs {Array.<module:model/InlineResponse20037FieldsWorklog>} 
     */
    constructor(maxResults, startAt, total, worklogs) { 
        
        InlineResponse20048.initialize(this, maxResults, startAt, total, worklogs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxResults, startAt, total, worklogs) { 
        obj['maxResults'] = maxResults;
        obj['startAt'] = startAt;
        obj['total'] = total;
        obj['worklogs'] = worklogs;
    }

    /**
     * Constructs a <code>InlineResponse20048</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20048} obj Optional instance to populate.
     * @return {module:model/InlineResponse20048} The populated <code>InlineResponse20048</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20048();

            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('worklogs')) {
                obj['worklogs'] = ApiClient.convertToType(data['worklogs'], [InlineResponse20037FieldsWorklog]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} maxResults
 */
InlineResponse20048.prototype['maxResults'] = undefined;

/**
 * @member {Number} startAt
 */
InlineResponse20048.prototype['startAt'] = undefined;

/**
 * @member {Number} total
 */
InlineResponse20048.prototype['total'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20037FieldsWorklog>} worklogs
 */
InlineResponse20048.prototype['worklogs'] = undefined;






export default InlineResponse20048;
