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
import InlineResponse2007Records from './InlineResponse2007Records';

/**
 * The InlineResponse2007 model module.
 * @module model/InlineResponse2007
 * @version 1.1.0
 */
class InlineResponse2007 {
    /**
     * Constructs a new <code>InlineResponse2007</code>.
     * 
     * @alias module:model/InlineResponse2007
     * @param limit {Number} 
     * @param offset {Number} 
     * @param records {Array.<module:model/InlineResponse2007Records>} 
     * @param total {Number} 
     */
    constructor(limit, offset, records, total) { 
        
        InlineResponse2007.initialize(this, limit, offset, records, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, limit, offset, records, total) { 
        obj['limit'] = limit;
        obj['offset'] = offset;
        obj['records'] = records;
        obj['total'] = total;
    }

    /**
     * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007();

            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('records')) {
                obj['records'] = ApiClient.convertToType(data['records'], [InlineResponse2007Records]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} limit
 */
InlineResponse2007.prototype['limit'] = undefined;

/**
 * @member {Number} offset
 */
InlineResponse2007.prototype['offset'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse2007Records>} records
 */
InlineResponse2007.prototype['records'] = undefined;

/**
 * @member {Number} total
 */
InlineResponse2007.prototype['total'] = undefined;






export default InlineResponse2007;

