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

/**
 * The PipelineScheduleExecutionErroredAllOf model module.
 * @module model/PipelineScheduleExecutionErroredAllOf
 * @version 1.1.2
 */
class PipelineScheduleExecutionErroredAllOf {
    /**
     * Constructs a new <code>PipelineScheduleExecutionErroredAllOf</code>.
     * A Pipelines schedule execution that failed to be executed.
     * @alias module:model/PipelineScheduleExecutionErroredAllOf
     */
    constructor() { 
        
        PipelineScheduleExecutionErroredAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineScheduleExecutionErroredAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineScheduleExecutionErroredAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineScheduleExecutionErroredAllOf} The populated <code>PipelineScheduleExecutionErroredAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineScheduleExecutionErroredAllOf();

            if (data.hasOwnProperty('error')) {
                obj['error'] = PipelineError.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PipelineError} error
 */
PipelineScheduleExecutionErroredAllOf.prototype['error'] = undefined;






export default PipelineScheduleExecutionErroredAllOf;

