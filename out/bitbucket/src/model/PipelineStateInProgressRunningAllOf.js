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

/**
 * The PipelineStateInProgressRunningAllOf model module.
 * @module model/PipelineStateInProgressRunningAllOf
 * @version 1.1.2
 */
class PipelineStateInProgressRunningAllOf {
    /**
     * Constructs a new <code>PipelineStateInProgressRunningAllOf</code>.
     * A Bitbucket Pipelines RUNNING stage of a pipeline that is in progress.
     * @alias module:model/PipelineStateInProgressRunningAllOf
     */
    constructor() { 
        
        PipelineStateInProgressRunningAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineStateInProgressRunningAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateInProgressRunningAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStateInProgressRunningAllOf} The populated <code>PipelineStateInProgressRunningAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStateInProgressRunningAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

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
PipelineStateInProgressRunningAllOf['NameEnum'] = {

    /**
     * value: "RUNNING"
     * @const
     */
    "RUNNING": "RUNNING"
};



export default PipelineStateInProgressRunningAllOf;

