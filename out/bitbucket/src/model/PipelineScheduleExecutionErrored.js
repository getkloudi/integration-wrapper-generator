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
import PipelineError from './PipelineError';
import PipelineScheduleExecution from './PipelineScheduleExecution';
import PipelineScheduleExecutionErroredAllOf from './PipelineScheduleExecutionErroredAllOf';

/**
 * The PipelineScheduleExecutionErrored model module.
 * @module model/PipelineScheduleExecutionErrored
 * @version 1.2.0
 */
class PipelineScheduleExecutionErrored {
    /**
     * Constructs a new <code>PipelineScheduleExecutionErrored</code>.
     * @alias module:model/PipelineScheduleExecutionErrored
     * @implements module:model/PipelineScheduleExecution
     * @implements module:model/PipelineScheduleExecutionErroredAllOf
     * @param type {String} 
     */
    constructor(type) { 
        PipelineScheduleExecution.initialize(this, type);PipelineScheduleExecutionErroredAllOf.initialize(this);
        PipelineScheduleExecutionErrored.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>PipelineScheduleExecutionErrored</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineScheduleExecutionErrored} obj Optional instance to populate.
     * @return {module:model/PipelineScheduleExecutionErrored} The populated <code>PipelineScheduleExecutionErrored</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineScheduleExecutionErrored();
            PipelineScheduleExecution.constructFromObject(data, obj);
            PipelineScheduleExecutionErroredAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = PipelineError.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
PipelineScheduleExecutionErrored.prototype['type'] = undefined;

/**
 * @member {module:model/PipelineError} error
 */
PipelineScheduleExecutionErrored.prototype['error'] = undefined;


// Implement PipelineScheduleExecution interface:
/**
 * @member {String} type
 */
PipelineScheduleExecution.prototype['type'] = undefined;
// Implement PipelineScheduleExecutionErroredAllOf interface:
/**
 * @member {module:model/PipelineError} error
 */
PipelineScheduleExecutionErroredAllOf.prototype['error'] = undefined;




export default PipelineScheduleExecutionErrored;

