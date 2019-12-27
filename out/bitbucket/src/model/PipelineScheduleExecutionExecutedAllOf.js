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
import Pipeline from './Pipeline';

/**
 * The PipelineScheduleExecutionExecutedAllOf model module.
 * @module model/PipelineScheduleExecutionExecutedAllOf
 * @version 1.1.0
 */
class PipelineScheduleExecutionExecutedAllOf {
    /**
     * Constructs a new <code>PipelineScheduleExecutionExecutedAllOf</code>.
     * A Pipelines executed schedule execution.
     * @alias module:model/PipelineScheduleExecutionExecutedAllOf
     */
    constructor() { 
        
        PipelineScheduleExecutionExecutedAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineScheduleExecutionExecutedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineScheduleExecutionExecutedAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineScheduleExecutionExecutedAllOf} The populated <code>PipelineScheduleExecutionExecutedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineScheduleExecutionExecutedAllOf();

            if (data.hasOwnProperty('pipeline')) {
                obj['pipeline'] = Pipeline.constructFromObject(data['pipeline']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Pipeline} pipeline
 */
PipelineScheduleExecutionExecutedAllOf.prototype['pipeline'] = undefined;






export default PipelineScheduleExecutionExecutedAllOf;

