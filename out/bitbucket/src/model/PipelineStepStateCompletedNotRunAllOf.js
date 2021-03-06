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
 * The PipelineStepStateCompletedNotRunAllOf model module.
 * @module model/PipelineStepStateCompletedNotRunAllOf
 * @version 1.2.0
 */
class PipelineStepStateCompletedNotRunAllOf {
    /**
     * Constructs a new <code>PipelineStepStateCompletedNotRunAllOf</code>.
     * A Bitbucket Pipelines NOT_RUN pipeline step result.
     * @alias module:model/PipelineStepStateCompletedNotRunAllOf
     */
    constructor() { 
        
        PipelineStepStateCompletedNotRunAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineStepStateCompletedNotRunAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedNotRunAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedNotRunAllOf} The populated <code>PipelineStepStateCompletedNotRunAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStepStateCompletedNotRunAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the result (NOT_RUN)
 * @member {module:model/PipelineStepStateCompletedNotRunAllOf.NameEnum} name
 */
PipelineStepStateCompletedNotRunAllOf.prototype['name'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStepStateCompletedNotRunAllOf['NameEnum'] = {

    /**
     * value: "NOT_RUN"
     * @const
     */
    "NOT_RUN": "NOT_RUN"
};



export default PipelineStepStateCompletedNotRunAllOf;

