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
import PipelineStateCompletedExpiredAllOf from './PipelineStateCompletedExpiredAllOf';
import PipelineStateCompletedResult from './PipelineStateCompletedResult';

/**
 * The PipelineStateCompletedExpired model module.
 * @module model/PipelineStateCompletedExpired
 * @version 1.2.0
 */
class PipelineStateCompletedExpired {
    /**
     * Constructs a new <code>PipelineStateCompletedExpired</code>.
     * @alias module:model/PipelineStateCompletedExpired
     * @implements module:model/PipelineStateCompletedResult
     * @implements module:model/PipelineStateCompletedExpiredAllOf
     * @param type {String} 
     */
    constructor(type) { 
        PipelineStateCompletedResult.initialize(this, type);PipelineStateCompletedExpiredAllOf.initialize(this);
        PipelineStateCompletedExpired.initialize(this, type);
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
     * Constructs a <code>PipelineStateCompletedExpired</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateCompletedExpired} obj Optional instance to populate.
     * @return {module:model/PipelineStateCompletedExpired} The populated <code>PipelineStateCompletedExpired</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStateCompletedExpired();
            PipelineStateCompletedResult.constructFromObject(data, obj);
            PipelineStateCompletedExpiredAllOf.constructFromObject(data, obj);

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
PipelineStateCompletedExpired.prototype['type'] = undefined;

/**
 * The name of the stopped result (EXPIRED).
 * @member {module:model/PipelineStateCompletedExpired.NameEnum} name
 */
PipelineStateCompletedExpired.prototype['name'] = undefined;


// Implement PipelineStateCompletedResult interface:
/**
 * @member {String} type
 */
PipelineStateCompletedResult.prototype['type'] = undefined;
// Implement PipelineStateCompletedExpiredAllOf interface:
/**
 * The name of the stopped result (EXPIRED).
 * @member {module:model/PipelineStateCompletedExpiredAllOf.NameEnum} name
 */
PipelineStateCompletedExpiredAllOf.prototype['name'] = undefined;



/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
PipelineStateCompletedExpired['NameEnum'] = {

    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED"
};



export default PipelineStateCompletedExpired;

