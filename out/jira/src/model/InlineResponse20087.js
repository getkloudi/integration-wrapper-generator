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
import InlineResponse20087Issues from './InlineResponse20087Issues';

/**
 * The InlineResponse20087 model module.
 * @module model/InlineResponse20087
 * @version 1.1.0
 */
class InlineResponse20087 {
    /**
     * Constructs a new <code>InlineResponse20087</code>.
     * 
     * @alias module:model/InlineResponse20087
     * @param expand {String} 
     * @param issues {Array.<module:model/InlineResponse20087Issues>} 
     * @param maxResults {Number} 
     * @param startAt {Number} 
     * @param total {Number} 
     * @param warningMessages {Array.<Object>} 
     */
    constructor(expand, issues, maxResults, startAt, total, warningMessages) { 
        
        InlineResponse20087.initialize(this, expand, issues, maxResults, startAt, total, warningMessages);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expand, issues, maxResults, startAt, total, warningMessages) { 
        obj['expand'] = expand;
        obj['issues'] = issues;
        obj['maxResults'] = maxResults;
        obj['startAt'] = startAt;
        obj['total'] = total;
        obj['warningMessages'] = warningMessages;
    }

    /**
     * Constructs a <code>InlineResponse20087</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20087} obj Optional instance to populate.
     * @return {module:model/InlineResponse20087} The populated <code>InlineResponse20087</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20087();

            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('issues')) {
                obj['issues'] = ApiClient.convertToType(data['issues'], [InlineResponse20087Issues]);
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
            if (data.hasOwnProperty('warningMessages')) {
                obj['warningMessages'] = ApiClient.convertToType(data['warningMessages'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} expand
 */
InlineResponse20087.prototype['expand'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20087Issues>} issues
 */
InlineResponse20087.prototype['issues'] = undefined;

/**
 * @member {Number} maxResults
 */
InlineResponse20087.prototype['maxResults'] = undefined;

/**
 * @member {Number} startAt
 */
InlineResponse20087.prototype['startAt'] = undefined;

/**
 * @member {Number} total
 */
InlineResponse20087.prototype['total'] = undefined;

/**
 * @member {Array.<Object>} warningMessages
 */
InlineResponse20087.prototype['warningMessages'] = undefined;






export default InlineResponse20087;
