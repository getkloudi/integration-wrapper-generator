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
import PipelineSshPublicKeyAllOf from './PipelineSshPublicKeyAllOf';

/**
 * The PipelineSshPublicKey model module.
 * @module model/PipelineSshPublicKey
 * @version 1.1.0
 */
class PipelineSshPublicKey {
    /**
     * Constructs a new <code>PipelineSshPublicKey</code>.
     * @alias module:model/PipelineSshPublicKey
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/PipelineSshPublicKeyAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);PipelineSshPublicKeyAllOf.initialize(this);
        PipelineSshPublicKey.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>PipelineSshPublicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineSshPublicKey} obj Optional instance to populate.
     * @return {module:model/PipelineSshPublicKey} The populated <code>PipelineSshPublicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineSshPublicKey();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            PipelineSshPublicKeyAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('key_type')) {
                obj['key_type'] = ApiClient.convertToType(data['key_type'], 'String');
            }
            if (data.hasOwnProperty('md5_fingerprint')) {
                obj['md5_fingerprint'] = ApiClient.convertToType(data['md5_fingerprint'], 'String');
            }
            if (data.hasOwnProperty('sha256_fingerprint')) {
                obj['sha256_fingerprint'] = ApiClient.convertToType(data['sha256_fingerprint'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The base64 encoded public key.
 * @member {String} key
 */
PipelineSshPublicKey.prototype['key'] = undefined;

/**
 * The type of the public key.
 * @member {String} key_type
 */
PipelineSshPublicKey.prototype['key_type'] = undefined;

/**
 * The MD5 fingerprint of the public key.
 * @member {String} md5_fingerprint
 */
PipelineSshPublicKey.prototype['md5_fingerprint'] = undefined;

/**
 * The SHA-256 fingerprint of the public key.
 * @member {String} sha256_fingerprint
 */
PipelineSshPublicKey.prototype['sha256_fingerprint'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement PipelineSshPublicKeyAllOf interface:
/**
 * The base64 encoded public key.
 * @member {String} key
 */
PipelineSshPublicKeyAllOf.prototype['key'] = undefined;
/**
 * The type of the public key.
 * @member {String} key_type
 */
PipelineSshPublicKeyAllOf.prototype['key_type'] = undefined;
/**
 * The MD5 fingerprint of the public key.
 * @member {String} md5_fingerprint
 */
PipelineSshPublicKeyAllOf.prototype['md5_fingerprint'] = undefined;
/**
 * The SHA-256 fingerprint of the public key.
 * @member {String} sha256_fingerprint
 */
PipelineSshPublicKeyAllOf.prototype['sha256_fingerprint'] = undefined;




export default PipelineSshPublicKey;

