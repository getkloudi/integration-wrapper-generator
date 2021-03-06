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
 * The PipelineStepStateCompletedExpiredAllOf model module.
 * @module model/PipelineStepStateCompletedExpiredAllOf
 * @version 1.2.0
 */
class PipelineStepStateCompletedExpiredAllOf {
    /**
     * Constructs a new <code>PipelineStepStateCompletedExpiredAllOf</code>.
     * A Bitbucket Pipelines EXPIRED pipeline step result.
     * @alias module:model/PipelineStepStateCompletedExpiredAllOf
     */
    constructor() { 
        
        PipelineStepStateCompletedExpiredAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineStepStateCompletedExpiredAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStepStateCompletedExpiredAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStepStateCompletedExpiredAllOf} The populated <code>PipelineStepStateCompletedExpiredAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStepStateCompletedExpiredAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the result (EXPIRED)
 * @member {module:model/PipelineStepStateCompletedExpiredAllOf.NameEnum} name
 */
PipelineStepStateCompletedExpiredAllOf.prototype['name'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStepStateCompletedExpiredAllOf['NameEnum'] = {

    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED"
};



export default PipelineStepStateCompletedExpiredAllOf;

