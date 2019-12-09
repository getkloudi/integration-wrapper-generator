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
import PipelineStateCompletedResult from './PipelineStateCompletedResult';
import PipelineStateCompletedSuccessfulAllOf from './PipelineStateCompletedSuccessfulAllOf';

/**
 * The PipelineStateCompletedSuccessful model module.
 * @module model/PipelineStateCompletedSuccessful
 * @version 1.0.0
 */
class PipelineStateCompletedSuccessful {
    /**
     * Constructs a new <code>PipelineStateCompletedSuccessful</code>.
     * @alias module:model/PipelineStateCompletedSuccessful
     * @implements module:model/PipelineStateCompletedResult
     * @implements module:model/PipelineStateCompletedSuccessfulAllOf
     * @param type {String} 
     */
    constructor(type) { 
        PipelineStateCompletedResult.initialize(this, type);PipelineStateCompletedSuccessfulAllOf.initialize(this);
        PipelineStateCompletedSuccessful.initialize(this, type);
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
     * Constructs a <code>PipelineStateCompletedSuccessful</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedSuccessful} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedSuccessful} The populated <code>PipelineStateCompletedSuccessful</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStateCompletedSuccessful();
            PipelineStateCompletedResult.constructFromObject(data, obj);
            PipelineStateCompletedSuccessfulAllOf.constructFromObject(data, obj);

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
PipelineStateCompletedSuccessful.prototype['type'] = undefined;

/**
 * The name of the successful result (SUCCESSFUL).
 * @member {module:model/PipelineStateCompletedSuccessful.NameEnum} name
 */
PipelineStateCompletedSuccessful.prototype['name'] = undefined;


// Implement PipelineStateCompletedResult interface:
/**
 * @member {String} type
 */
PipelineStateCompletedResult.prototype['type'] = undefined;
// Implement PipelineStateCompletedSuccessfulAllOf interface:
/**
 * The name of the successful result (SUCCESSFUL).
 * @member {module:model/PipelineStateCompletedSuccessfulAllOf.NameEnum} name
 */
PipelineStateCompletedSuccessfulAllOf.prototype['name'] = undefined;



/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStateCompletedSuccessful['NameEnum'] = {

    /**
     * value: "SUCCESSFUL"
     * @const
     */
    "SUCCESSFUL": "SUCCESSFUL"
};



export default PipelineStateCompletedSuccessful;

