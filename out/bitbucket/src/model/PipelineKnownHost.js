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
import PipelineKnownHostAllOf from './PipelineKnownHostAllOf';
import PipelineSshPublicKey from './PipelineSshPublicKey';

/**
 * The PipelineKnownHost model module.
 * @module model/PipelineKnownHost
 * @version 1.1.2
 */
class PipelineKnownHost {
    /**
     * Constructs a new <code>PipelineKnownHost</code>.
     * @alias module:model/PipelineKnownHost
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/PipelineKnownHostAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);PipelineKnownHostAllOf.initialize(this);
        PipelineKnownHost.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>PipelineKnownHost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineKnownHost} obj Optional instance to populate.
     * @return {module:model/PipelineKnownHost} The populated <code>PipelineKnownHost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineKnownHost();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            PipelineKnownHostAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = PipelineSshPublicKey.constructFromObject(data['public_key']);
            }
        }
        return obj;
    }


}

/**
 * The UUID identifying the known host.
 * @member {String} uuid
 */
PipelineKnownHost.prototype['uuid'] = undefined;

/**
 * The hostname of the known host.
 * @member {String} hostname
 */
PipelineKnownHost.prototype['hostname'] = undefined;

/**
 * @member {module:model/PipelineSshPublicKey} public_key
 */
PipelineKnownHost.prototype['public_key'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement PipelineKnownHostAllOf interface:
/**
 * The UUID identifying the known host.
 * @member {String} uuid
 */
PipelineKnownHostAllOf.prototype['uuid'] = undefined;
/**
 * The hostname of the known host.
 * @member {String} hostname
 */
PipelineKnownHostAllOf.prototype['hostname'] = undefined;
/**
 * @member {module:model/PipelineSshPublicKey} public_key
 */
PipelineKnownHostAllOf.prototype['public_key'] = undefined;




export default PipelineKnownHost;

