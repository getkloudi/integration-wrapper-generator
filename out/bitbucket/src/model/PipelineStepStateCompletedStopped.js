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
import PipelineStepStateCompletedResult from './PipelineStepStateCompletedResult';
import PipelineStepStateCompletedStoppedAllOf from './PipelineStepStateCompletedStoppedAllOf';

/**
 * The PipelineStepStateCompletedStopped model module.
 * @module model/PipelineStepStateCompletedStopped
 * @version 1.0.0
 */
class PipelineStepStateCompletedStopped {
    /**
     * Constructs a new <code>PipelineStepStateCompletedStopped</code>.
     * @alias module:model/PipelineStepStateCompletedStopped
     * @implements module:model/PipelineStepStateCompletedResult
     * @implements module:model/PipelineStepStateCompletedStoppedAllOf
     * @param type {String} 
     */
    constructor(type) { 
        PipelineStepStateCompletedResult.initialize(this, type);PipelineStepStateCompletedStoppedAllOf.initialize(this);
        PipelineStepStateCompletedStopped.initialize(this, type);
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
     * Constructs a <code>PipelineStepStateCompletedStopped</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedStopped} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedStopped} The populated <code>PipelineStepStateCompletedStopped</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStepStateCompletedStopped();
            PipelineStepStateCompletedResult.constructFromObject(data, obj);
            PipelineStepStateCompletedStoppedAllOf.constructFromObject(data, obj);

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
PipelineStepStateCompletedStopped.prototype['type'] = undefined;

/**
 * The name of the result (STOPPED)
 * @member {module:model/PipelineStepStateCompletedStopped.NameEnum} name
 */
PipelineStepStateCompletedStopped.prototype['name'] = undefined;


// Implement PipelineStepStateCompletedResult interface:
/**
 * @member {String} type
 */
PipelineStepStateCompletedResult.prototype['type'] = undefined;
// Implement PipelineStepStateCompletedStoppedAllOf interface:
/**
 * The name of the result (STOPPED)
 * @member {module:model/PipelineStepStateCompletedStoppedAllOf.NameEnum} name
 */
PipelineStepStateCompletedStoppedAllOf.prototype['name'] = undefined;



/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStepStateCompletedStopped['NameEnum'] = {

    /**
     * value: "STOPPED"
     * @const
     */
    "STOPPED": "STOPPED"
};



export default PipelineStepStateCompletedStopped;

