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
 * The PipelineStepStateCompletedStoppedAllOf model module.
 * @module model/PipelineStepStateCompletedStoppedAllOf
 * @version 1.2.0
 */
class PipelineStepStateCompletedStoppedAllOf {
    /**
     * Constructs a new <code>PipelineStepStateCompletedStoppedAllOf</code>.
     * A Bitbucket Pipelines STOPPED pipeline step result.
     * @alias module:model/PipelineStepStateCompletedStoppedAllOf
     */
    constructor() { 
        
        PipelineStepStateCompletedStoppedAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineStepStateCompletedStoppedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedStoppedAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedStoppedAllOf} The populated <code>PipelineStepStateCompletedStoppedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStepStateCompletedStoppedAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

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
PipelineStepStateCompletedStoppedAllOf['NameEnum'] = {

    /**
     * value: "STOPPED"
     * @const
     */
    "STOPPED": "STOPPED"
};



export default PipelineStepStateCompletedStoppedAllOf;

