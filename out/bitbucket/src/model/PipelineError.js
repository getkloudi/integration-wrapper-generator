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
import ModelObject from './ModelObject';
import PipelineErrorAllOf from './PipelineErrorAllOf';

/**
 * The PipelineError model module.
 * @module model/PipelineError
 * @version 1.1.2
 */
class PipelineError {
    /**
     * Constructs a new <code>PipelineError</code>.
     * @alias module:model/PipelineError
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/PipelineErrorAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);PipelineErrorAllOf.initialize(this);
        PipelineError.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>PipelineError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineError} obj Optional instance to populate.
     * @return {module:model/PipelineError} The populated <code>PipelineError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineError();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            PipelineErrorAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The error key.
 * @member {String} key
 */
PipelineError.prototype['key'] = undefined;

/**
 * The error message.
 * @member {String} message
 */
PipelineError.prototype['message'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement PipelineErrorAllOf interface:
/**
 * The error key.
 * @member {String} key
 */
PipelineErrorAllOf.prototype['key'] = undefined;
/**
 * The error message.
 * @member {String} message
 */
PipelineErrorAllOf.prototype['message'] = undefined;




export default PipelineError;

