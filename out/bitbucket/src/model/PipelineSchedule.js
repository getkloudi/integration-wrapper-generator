/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ModelObject from './ModelObject';
import PipelineScheduleAllOf from './PipelineScheduleAllOf';
import PipelineSelector from './PipelineSelector';
import PipelineTarget from './PipelineTarget';

/**
 * The PipelineSchedule model module.
 * @module model/PipelineSchedule
 * @version 1.1.2
 */
class PipelineSchedule {
    /**
     * Constructs a new <code>PipelineSchedule</code>.
     * @alias module:model/PipelineSchedule
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/PipelineScheduleAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);PipelineScheduleAllOf.initialize(this);
        PipelineSchedule.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>PipelineSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineSchedule} obj Optional instance to populate.
     * @return {module:model/PipelineSchedule} The populated <code>PipelineSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineSchedule();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            PipelineScheduleAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = PipelineTarget.constructFromObject(data['target']);
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = PipelineSelector.constructFromObject(data['selector']);
            }
            if (data.hasOwnProperty('cron_pattern')) {
                obj['cron_pattern'] = ApiClient.convertToType(data['cron_pattern'], 'String');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The UUID identifying the schedule.
 * @member {String} uuid
 */
PipelineSchedule.prototype['uuid'] = undefined;

/**
 * Whether the schedule is enabled.
 * @member {Boolean} enabled
 */
PipelineSchedule.prototype['enabled'] = undefined;

/**
 * @member {module:model/PipelineTarget} target
 */
PipelineSchedule.prototype['target'] = undefined;

/**
 * @member {module:model/PipelineSelector} selector
 */
PipelineSchedule.prototype['selector'] = undefined;

/**
 * The cron expression that the schedule applies.
 * @member {String} cron_pattern
 */
PipelineSchedule.prototype['cron_pattern'] = undefined;

/**
 * The timestamp when the schedule was created.
 * @member {Date} created_on
 */
PipelineSchedule.prototype['created_on'] = undefined;

/**
 * The timestamp when the schedule was updated.
 * @member {Date} updated_on
 */
PipelineSchedule.prototype['updated_on'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement PipelineScheduleAllOf interface:
/**
 * The UUID identifying the schedule.
 * @member {String} uuid
 */
PipelineScheduleAllOf.prototype['uuid'] = undefined;
/**
 * Whether the schedule is enabled.
 * @member {Boolean} enabled
 */
PipelineScheduleAllOf.prototype['enabled'] = undefined;
/**
 * @member {module:model/PipelineTarget} target
 */
PipelineScheduleAllOf.prototype['target'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */
PipelineScheduleAllOf.prototype['selector'] = undefined;
/**
 * The cron expression that the schedule applies.
 * @member {String} cron_pattern
 */
PipelineScheduleAllOf.prototype['cron_pattern'] = undefined;
/**
 * The timestamp when the schedule was created.
 * @member {Date} created_on
 */
PipelineScheduleAllOf.prototype['created_on'] = undefined;
/**
 * The timestamp when the schedule was updated.
 * @member {Date} updated_on
 */
PipelineScheduleAllOf.prototype['updated_on'] = undefined;




export default PipelineSchedule;

