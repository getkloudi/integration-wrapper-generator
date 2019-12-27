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
import PipelineCommand from './PipelineCommand';
import PipelineImage from './PipelineImage';
import PipelineStepState from './PipelineStepState';

/**
 * The PipelineStepAllOf model module.
 * @module model/PipelineStepAllOf
 * @version 1.1.0
 */
class PipelineStepAllOf {
    /**
     * Constructs a new <code>PipelineStepAllOf</code>.
     * A step of a Bitbucket pipeline. This represents the actual result of the step execution.
     * @alias module:model/PipelineStepAllOf
     */
    constructor() { 
        
        PipelineStepAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineStepAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStepAllOf} The populated <code>PipelineStepAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStepAllOf();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('started_on')) {
                obj['started_on'] = ApiClient.convertToType(data['started_on'], 'Date');
            }
            if (data.hasOwnProperty('completed_on')) {
                obj['completed_on'] = ApiClient.convertToType(data['completed_on'], 'Date');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = PipelineStepState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = PipelineImage.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('setup_commands')) {
                obj['setup_commands'] = ApiClient.convertToType(data['setup_commands'], [PipelineCommand]);
            }
            if (data.hasOwnProperty('script_commands')) {
                obj['script_commands'] = ApiClient.convertToType(data['script_commands'], [PipelineCommand]);
            }
        }
        return obj;
    }


}

/**
 * The UUID identifying the step.
 * @member {String} uuid
 */
PipelineStepAllOf.prototype['uuid'] = undefined;

/**
 * The timestamp when the step execution was started. This is not set when the step hasn't executed yet.
 * @member {Date} started_on
 */
PipelineStepAllOf.prototype['started_on'] = undefined;

/**
 * The timestamp when the step execution was completed. This is not set if the step is still in progress.
 * @member {Date} completed_on
 */
PipelineStepAllOf.prototype['completed_on'] = undefined;

/**
 * @member {module:model/PipelineStepState} state
 */
PipelineStepAllOf.prototype['state'] = undefined;

/**
 * @member {module:model/PipelineImage} image
 */
PipelineStepAllOf.prototype['image'] = undefined;

/**
 * The list of commands that are executed as part of the setup phase of the build. These commands are executed outside the build container.
 * @member {Array.<module:model/PipelineCommand>} setup_commands
 */
PipelineStepAllOf.prototype['setup_commands'] = undefined;

/**
 * The list of build commands. These commands are executed in the build container.
 * @member {Array.<module:model/PipelineCommand>} script_commands
 */
PipelineStepAllOf.prototype['script_commands'] = undefined;






export default PipelineStepAllOf;

