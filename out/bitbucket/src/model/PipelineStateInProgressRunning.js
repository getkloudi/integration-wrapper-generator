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
import PipelineStateInProgressRunningAllOf from './PipelineStateInProgressRunningAllOf';
import PipelineStateInProgressStage from './PipelineStateInProgressStage';

/**
 * The PipelineStateInProgressRunning model module.
 * @module model/PipelineStateInProgressRunning
 * @version 1.2.0
 */
class PipelineStateInProgressRunning {
    /**
     * Constructs a new <code>PipelineStateInProgressRunning</code>.
     * @alias module:model/PipelineStateInProgressRunning
     * @implements module:model/PipelineStateInProgressStage
     * @implements module:model/PipelineStateInProgressRunningAllOf
     * @param type {String} 
     */
    constructor(type) { 
        PipelineStateInProgressStage.initialize(this, type);PipelineStateInProgressRunningAllOf.initialize(this);
        PipelineStateInProgressRunning.initialize(this, type);
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
     * Constructs a <code>PipelineStateInProgressRunning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateInProgressRunning} obj Optional instance to populate.
     * @return {module:model/PipelineStateInProgressRunning} The populated <code>PipelineStateInProgressRunning</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStateInProgressRunning();
            PipelineStateInProgressStage.constructFromObject(data, obj);
            PipelineStateInProgressRunningAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
PipelineStateInProgressRunning.prototype['type'] = undefined;

/**
 * The name of the stage (RUNNING)
 * @member {module:model/PipelineStateInProgressRunning.NameEnum} name
 */
PipelineStateInProgressRunning.prototype['name'] = undefined;


// Implement PipelineStateInProgressStage interface:
/**
 * @member {String} type
 */
PipelineStateInProgressStage.prototype['type'] = undefined;
// Implement PipelineStateInProgressRunningAllOf interface:
/**
 * The name of the stage (RUNNING)
 * @member {module:model/PipelineStateInProgressRunningAllOf.NameEnum} name
 */
PipelineStateInProgressRunningAllOf.prototype['name'] = undefined;



/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStateInProgressRunning['NameEnum'] = {

    /**
     * value: "RUNNING"
     * @const
     */
    "RUNNING": "RUNNING"
};



export default PipelineStateInProgressRunning;

