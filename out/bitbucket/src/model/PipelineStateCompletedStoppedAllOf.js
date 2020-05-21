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
 * The PipelineStateCompletedStoppedAllOf model module.
 * @module model/PipelineStateCompletedStoppedAllOf
 * @version 1.2.0
 */
class PipelineStateCompletedStoppedAllOf {
    /**
     * Constructs a new <code>PipelineStateCompletedStoppedAllOf</code>.
     * A Bitbucket Pipelines STOPPED pipeline result.
     * @alias module:model/PipelineStateCompletedStoppedAllOf
     */
    constructor() { 
        
        PipelineStateCompletedStoppedAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineStateCompletedStoppedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedStoppedAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedStoppedAllOf} The populated <code>PipelineStateCompletedStoppedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStateCompletedStoppedAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the stopped result (STOPPED).
 * @member {module:model/PipelineStateCompletedStoppedAllOf.NameEnum} name
 */
PipelineStateCompletedStoppedAllOf.prototype['name'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStateCompletedStoppedAllOf['NameEnum'] = {

    /**
     * value: "STOPPED"
     * @const
     */
    "STOPPED": "STOPPED"
};



export default PipelineStateCompletedStoppedAllOf;

