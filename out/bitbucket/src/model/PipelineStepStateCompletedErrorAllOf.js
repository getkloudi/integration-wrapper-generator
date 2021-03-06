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
import PipelineStepError from './PipelineStepError';

/**
 * The PipelineStepStateCompletedErrorAllOf model module.
 * @module model/PipelineStepStateCompletedErrorAllOf
 * @version 1.2.0
 */
class PipelineStepStateCompletedErrorAllOf {
    /**
     * Constructs a new <code>PipelineStepStateCompletedErrorAllOf</code>.
     * A Bitbucket Pipelines ERROR pipeline step result.
     * @alias module:model/PipelineStepStateCompletedErrorAllOf
     */
    constructor() { 
        
        PipelineStepStateCompletedErrorAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineStepStateCompletedErrorAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedErrorAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedErrorAllOf} The populated <code>PipelineStepStateCompletedErrorAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStepStateCompletedErrorAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = PipelineStepError.constructFromObject(data['error']);
            }
        }
        return obj;
    }


}

/**
 * The name of the result (ERROR)
 * @member {module:model/PipelineStepStateCompletedErrorAllOf.NameEnum} name
 */
PipelineStepStateCompletedErrorAllOf.prototype['name'] = undefined;

/**
 * @member {module:model/PipelineStepError} error
 */
PipelineStepStateCompletedErrorAllOf.prototype['error'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStepStateCompletedErrorAllOf['NameEnum'] = {

    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR"
};



export default PipelineStepStateCompletedErrorAllOf;

