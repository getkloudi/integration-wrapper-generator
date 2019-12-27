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
import PipelineStepStateCompletedResult from './PipelineStepStateCompletedResult';
import PipelineStepStateCompletedSuccessfulAllOf from './PipelineStepStateCompletedSuccessfulAllOf';

/**
 * The PipelineStepStateCompletedSuccessful model module.
 * @module model/PipelineStepStateCompletedSuccessful
 * @version 1.1.0
 */
class PipelineStepStateCompletedSuccessful {
    /**
     * Constructs a new <code>PipelineStepStateCompletedSuccessful</code>.
     * @alias module:model/PipelineStepStateCompletedSuccessful
     * @implements module:model/PipelineStepStateCompletedResult
     * @implements module:model/PipelineStepStateCompletedSuccessfulAllOf
     * @param type {String} 
     */
    constructor(type) { 
        PipelineStepStateCompletedResult.initialize(this, type);PipelineStepStateCompletedSuccessfulAllOf.initialize(this);
        PipelineStepStateCompletedSuccessful.initialize(this, type);
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
     * Constructs a <code>PipelineStepStateCompletedSuccessful</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedSuccessful} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedSuccessful} The populated <code>PipelineStepStateCompletedSuccessful</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStepStateCompletedSuccessful();
            PipelineStepStateCompletedResult.constructFromObject(data, obj);
            PipelineStepStateCompletedSuccessfulAllOf.constructFromObject(data, obj);

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
PipelineStepStateCompletedSuccessful.prototype['type'] = undefined;

/**
 * The name of the result (SUCCESSFUL)
 * @member {module:model/PipelineStepStateCompletedSuccessful.NameEnum} name
 */
PipelineStepStateCompletedSuccessful.prototype['name'] = undefined;


// Implement PipelineStepStateCompletedResult interface:
/**
 * @member {String} type
 */
PipelineStepStateCompletedResult.prototype['type'] = undefined;
// Implement PipelineStepStateCompletedSuccessfulAllOf interface:
/**
 * The name of the result (SUCCESSFUL)
 * @member {module:model/PipelineStepStateCompletedSuccessfulAllOf.NameEnum} name
 */
PipelineStepStateCompletedSuccessfulAllOf.prototype['name'] = undefined;



/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStepStateCompletedSuccessful['NameEnum'] = {

    /**
     * value: "SUCCESSFUL"
     * @const
     */
    "SUCCESSFUL": "SUCCESSFUL"
};



export default PipelineStepStateCompletedSuccessful;

