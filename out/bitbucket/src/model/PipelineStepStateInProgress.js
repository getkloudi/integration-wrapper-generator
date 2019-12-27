/**
 * Bitbucket
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
import PipelineStepState from './PipelineStepState';
import PipelineStepStateInProgressAllOf from './PipelineStepStateInProgressAllOf';

/**
 * The PipelineStepStateInProgress model module.
 * @module model/PipelineStepStateInProgress
 * @version 1.1.0
 */
class PipelineStepStateInProgress {
    /**
     * Constructs a new <code>PipelineStepStateInProgress</code>.
     * @alias module:model/PipelineStepStateInProgress
     * @implements module:model/PipelineStepState
     * @implements module:model/PipelineStepStateInProgressAllOf
     * @param type {String} 
     */
    constructor(type) { 
        PipelineStepState.initialize(this, type);PipelineStepStateInProgressAllOf.initialize(this);
        PipelineStepStateInProgress.initialize(this, type);
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
     * Constructs a <code>PipelineStepStateInProgress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateInProgress} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateInProgress} The populated <code>PipelineStepStateInProgress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStepStateInProgress();
            PipelineStepState.constructFromObject(data, obj);
            PipelineStepStateInProgressAllOf.constructFromObject(data, obj);

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
PipelineStepStateInProgress.prototype['type'] = undefined;

/**
 * The name of pipeline step state (IN_PROGRESS).
 * @member {module:model/PipelineStepStateInProgress.NameEnum} name
 */
PipelineStepStateInProgress.prototype['name'] = undefined;


// Implement PipelineStepState interface:
/**
 * @member {String} type
 */
PipelineStepState.prototype['type'] = undefined;
// Implement PipelineStepStateInProgressAllOf interface:
/**
 * The name of pipeline step state (IN_PROGRESS).
 * @member {module:model/PipelineStepStateInProgressAllOf.NameEnum} name
 */
PipelineStepStateInProgressAllOf.prototype['name'] = undefined;



/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStepStateInProgress['NameEnum'] = {

    /**
     * value: "IN_PROGRESS"
     * @const
     */
    "IN_PROGRESS": "IN_PROGRESS"
};



export default PipelineStepStateInProgress;

