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
import PipelineSshPublicKey from './PipelineSshPublicKey';

/**
 * The PipelineKnownHostAllOf model module.
 * @module model/PipelineKnownHostAllOf
 * @version 1.0.0
 */
class PipelineKnownHostAllOf {
    /**
     * Constructs a new <code>PipelineKnownHostAllOf</code>.
     * A Pipelines known host.
     * @alias module:model/PipelineKnownHostAllOf
     */
    constructor() { 
        
        PipelineKnownHostAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineKnownHostAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineKnownHostAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineKnownHostAllOf} The populated <code>PipelineKnownHostAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineKnownHostAllOf();

            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = PipelineSshPublicKey.constructFromObject(data['public_key']);
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The hostname of the known host.
 * @member {String} hostname
 */
PipelineKnownHostAllOf.prototype['hostname'] = undefined;

/**
 * @member {module:model/PipelineSshPublicKey} public_key
 */
PipelineKnownHostAllOf.prototype['public_key'] = undefined;

/**
 * The UUID identifying the known host.
 * @member {String} uuid
 */
PipelineKnownHostAllOf.prototype['uuid'] = undefined;






export default PipelineKnownHostAllOf;

