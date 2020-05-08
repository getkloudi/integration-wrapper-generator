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
 * The InlineResponse20037FieldsTimetracking model module.
 * @module model/InlineResponse20037FieldsTimetracking
 * @version 1.1.0
 */
class InlineResponse20037FieldsTimetracking {
    /**
     * Constructs a new <code>InlineResponse20037FieldsTimetracking</code>.
     * @alias module:model/InlineResponse20037FieldsTimetracking
     * @param originalEstimate {String} 
     * @param originalEstimateSeconds {Number} 
     * @param remainingEstimate {String} 
     * @param remainingEstimateSeconds {Number} 
     * @param timeSpent {String} 
     * @param timeSpentSeconds {Number} 
     */
    constructor(originalEstimate, originalEstimateSeconds, remainingEstimate, remainingEstimateSeconds, timeSpent, timeSpentSeconds) { 
        
        InlineResponse20037FieldsTimetracking.initialize(this, originalEstimate, originalEstimateSeconds, remainingEstimate, remainingEstimateSeconds, timeSpent, timeSpentSeconds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, originalEstimate, originalEstimateSeconds, remainingEstimate, remainingEstimateSeconds, timeSpent, timeSpentSeconds) { 
        obj['originalEstimate'] = originalEstimate;
        obj['originalEstimateSeconds'] = originalEstimateSeconds;
        obj['remainingEstimate'] = remainingEstimate;
        obj['remainingEstimateSeconds'] = remainingEstimateSeconds;
        obj['timeSpent'] = timeSpent;
        obj['timeSpentSeconds'] = timeSpentSeconds;
    }

    /**
     * Constructs a <code>InlineResponse20037FieldsTimetracking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsTimetracking} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsTimetracking} The populated <code>InlineResponse20037FieldsTimetracking</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20037FieldsTimetracking();

            if (data.hasOwnProperty('originalEstimate')) {
                obj['originalEstimate'] = ApiClient.convertToType(data['originalEstimate'], 'String');
            }
            if (data.hasOwnProperty('originalEstimateSeconds')) {
                obj['originalEstimateSeconds'] = ApiClient.convertToType(data['originalEstimateSeconds'], 'Number');
            }
            if (data.hasOwnProperty('remainingEstimate')) {
                obj['remainingEstimate'] = ApiClient.convertToType(data['remainingEstimate'], 'String');
            }
            if (data.hasOwnProperty('remainingEstimateSeconds')) {
                obj['remainingEstimateSeconds'] = ApiClient.convertToType(data['remainingEstimateSeconds'], 'Number');
            }
            if (data.hasOwnProperty('timeSpent')) {
                obj['timeSpent'] = ApiClient.convertToType(data['timeSpent'], 'String');
            }
            if (data.hasOwnProperty('timeSpentSeconds')) {
                obj['timeSpentSeconds'] = ApiClient.convertToType(data['timeSpentSeconds'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} originalEstimate
 */
InlineResponse20037FieldsTimetracking.prototype['originalEstimate'] = undefined;

/**
 * @member {Number} originalEstimateSeconds
 */
InlineResponse20037FieldsTimetracking.prototype['originalEstimateSeconds'] = undefined;

/**
 * @member {String} remainingEstimate
 */
InlineResponse20037FieldsTimetracking.prototype['remainingEstimate'] = undefined;

/**
 * @member {Number} remainingEstimateSeconds
 */
InlineResponse20037FieldsTimetracking.prototype['remainingEstimateSeconds'] = undefined;

/**
 * @member {String} timeSpent
 */
InlineResponse20037FieldsTimetracking.prototype['timeSpent'] = undefined;

/**
 * @member {Number} timeSpentSeconds
 */
InlineResponse20037FieldsTimetracking.prototype['timeSpentSeconds'] = undefined;






export default InlineResponse20037FieldsTimetracking;
