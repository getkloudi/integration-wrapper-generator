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
import ModelObject from './ModelObject';

/**
 * The PipelineTarget model module.
 * @module model/PipelineTarget
 * @version 1.1.0
 */
class PipelineTarget {
    /**
     * Constructs a new <code>PipelineTarget</code>.
     * @alias module:model/PipelineTarget
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);
        PipelineTarget.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>PipelineTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineTarget} obj Optional instance to populate.
     * @return {module:model/PipelineTarget} The populated <code>PipelineTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineTarget();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;




export default PipelineTarget;

