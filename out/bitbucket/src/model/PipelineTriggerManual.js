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
import PipelineTrigger from './PipelineTrigger';

/**
 * The PipelineTriggerManual model module.
 * @module model/PipelineTriggerManual
 * @version 1.1.0
 */
class PipelineTriggerManual {
    /**
     * Constructs a new <code>PipelineTriggerManual</code>.
     * @alias module:model/PipelineTriggerManual
     * @extends module:model/PipelineTrigger
     * @implements module:model/PipelineTrigger
     * @param type {String} 
     */
    constructor(type) { 
        PipelineTrigger.initialize(this, type);
        PipelineTriggerManual.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>PipelineTriggerManual</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineTriggerManual} obj Optional instance to populate.
     * @return {module:model/PipelineTriggerManual} The populated <code>PipelineTriggerManual</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineTriggerManual();
            PipelineTrigger.constructFromObject(data, obj);
            PipelineTrigger.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement PipelineTrigger interface:
/**
 * @member {String} type
 */
PipelineTrigger.prototype['type'] = undefined;




export default PipelineTriggerManual;

