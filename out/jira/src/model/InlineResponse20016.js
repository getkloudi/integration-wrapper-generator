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
 * The InlineResponse20016 model module.
 * @module model/InlineResponse20016
 * @version 1.3.0
 */
class InlineResponse20016 {
    /**
     * Constructs a new <code>InlineResponse20016</code>.
     * 
     * @alias module:model/InlineResponse20016
     * @param defaultUnit {String} 
     * @param timeFormat {String} 
     * @param workingDaysPerWeek {Number} 
     * @param workingHoursPerDay {Number} 
     */
    constructor(defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay) { 
        
        InlineResponse20016.initialize(this, defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, defaultUnit, timeFormat, workingDaysPerWeek, workingHoursPerDay) { 
        obj['defaultUnit'] = defaultUnit;
        obj['timeFormat'] = timeFormat;
        obj['workingDaysPerWeek'] = workingDaysPerWeek;
        obj['workingHoursPerDay'] = workingHoursPerDay;
    }

    /**
     * Constructs a <code>InlineResponse20016</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20016} obj Optional instance to populate.
     * @return {module:model/InlineResponse20016} The populated <code>InlineResponse20016</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20016();

            if (data.hasOwnProperty('defaultUnit')) {
                obj['defaultUnit'] = ApiClient.convertToType(data['defaultUnit'], 'String');
            }
            if (data.hasOwnProperty('timeFormat')) {
                obj['timeFormat'] = ApiClient.convertToType(data['timeFormat'], 'String');
            }
            if (data.hasOwnProperty('workingDaysPerWeek')) {
                obj['workingDaysPerWeek'] = ApiClient.convertToType(data['workingDaysPerWeek'], 'Number');
            }
            if (data.hasOwnProperty('workingHoursPerDay')) {
                obj['workingHoursPerDay'] = ApiClient.convertToType(data['workingHoursPerDay'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} defaultUnit
 */
InlineResponse20016.prototype['defaultUnit'] = undefined;

/**
 * @member {String} timeFormat
 */
InlineResponse20016.prototype['timeFormat'] = undefined;

/**
 * @member {Number} workingDaysPerWeek
 */
InlineResponse20016.prototype['workingDaysPerWeek'] = undefined;

/**
 * @member {Number} workingHoursPerDay
 */
InlineResponse20016.prototype['workingHoursPerDay'] = undefined;






export default InlineResponse20016;

