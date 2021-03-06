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
import PipelineStateInProgressStage from './PipelineStateInProgressStage';

/**
 * The PipelineStateInProgressAllOf model module.
 * @module model/PipelineStateInProgressAllOf
 * @version 1.2.0
 */
class PipelineStateInProgressAllOf {
    /**
     * Constructs a new <code>PipelineStateInProgressAllOf</code>.
     * A Bitbucket Pipelines IN_PROGRESS pipeline state.
     * @alias module:model/PipelineStateInProgressAllOf
     */
    constructor() { 
        
        PipelineStateInProgressAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineStateInProgressAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateInProgressAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStateInProgressAllOf} The populated <code>PipelineStateInProgressAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStateInProgressAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = PipelineStateInProgressStage.constructFromObject(data['stage']);
            }
        }
        return obj;
    }


}

/**
 * The name of pipeline state (IN_PROGRESS).
 * @member {module:model/PipelineStateInProgressAllOf.NameEnum} name
 */
PipelineStateInProgressAllOf.prototype['name'] = undefined;

/**
 * @member {module:model/PipelineStateInProgressStage} stage
 */
PipelineStateInProgressAllOf.prototype['stage'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStateInProgressAllOf['NameEnum'] = {

    /**
     * value: "IN_PROGRESS"
     * @const
     */
    "IN_PROGRESS": "IN_PROGRESS"
};



export default PipelineStateInProgressAllOf;

