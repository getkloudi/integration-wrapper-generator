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
import PipelineStepStateCompletedFailedAllOf from './PipelineStepStateCompletedFailedAllOf';
import PipelineStepStateCompletedResult from './PipelineStepStateCompletedResult';

/**
 * The PipelineStepStateCompletedFailed model module.
 * @module model/PipelineStepStateCompletedFailed
 * @version 1.1.0
 */
class PipelineStepStateCompletedFailed {
    /**
     * Constructs a new <code>PipelineStepStateCompletedFailed</code>.
     * @alias module:model/PipelineStepStateCompletedFailed
     * @implements module:model/PipelineStepStateCompletedResult
     * @implements module:model/PipelineStepStateCompletedFailedAllOf
     * @param type {String} 
     */
    constructor(type) { 
        PipelineStepStateCompletedResult.initialize(this, type);PipelineStepStateCompletedFailedAllOf.initialize(this);
        PipelineStepStateCompletedFailed.initialize(this, type);
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
     * Constructs a <code>PipelineStepStateCompletedFailed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedFailed} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedFailed} The populated <code>PipelineStepStateCompletedFailed</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStepStateCompletedFailed();
            PipelineStepStateCompletedResult.constructFromObject(data, obj);
            PipelineStepStateCompletedFailedAllOf.constructFromObject(data, obj);

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
PipelineStepStateCompletedFailed.prototype['type'] = undefined;

/**
 * The name of the result (FAILED)
 * @member {module:model/PipelineStepStateCompletedFailed.NameEnum} name
 */
PipelineStepStateCompletedFailed.prototype['name'] = undefined;


// Implement PipelineStepStateCompletedResult interface:
/**
 * @member {String} type
 */
PipelineStepStateCompletedResult.prototype['type'] = undefined;
// Implement PipelineStepStateCompletedFailedAllOf interface:
/**
 * The name of the result (FAILED)
 * @member {module:model/PipelineStepStateCompletedFailedAllOf.NameEnum} name
 */
PipelineStepStateCompletedFailedAllOf.prototype['name'] = undefined;



/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStepStateCompletedFailed['NameEnum'] = {

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"
};



export default PipelineStepStateCompletedFailed;

