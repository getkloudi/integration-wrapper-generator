/**
 * Rollbar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Api1ProguardRequest model module.
 * @module model/Api1ProguardRequest
 * @version 1.1.0
 */
class Api1ProguardRequest {
    /**
     * Constructs a new <code>Api1ProguardRequest</code>.
     * @alias module:model/Api1ProguardRequest
     * @param version {String} The current code version. This must match the `android:versionName` in your app's `AndroidManifest.xml`, corresponding to the version the `mapping.txt` was generated for.
     * @param mapping {File} Your `mapping.txt` file.
     */
    constructor(version, mapping) { 
        
        Api1ProguardRequest.initialize(this, version, mapping);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, version, mapping) { 
        obj['version'] = version;
        obj['mapping'] = mapping;
    }

    /**
     * Constructs a <code>Api1ProguardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1ProguardRequest} obj Optional instance to populate.
     * @return {module:model/Api1ProguardRequest} The populated <code>Api1ProguardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Api1ProguardRequest();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('mapping')) {
                obj['mapping'] = ApiClient.convertToType(data['mapping'], File);
            }
        }
        return obj;
    }


}

/**
 * The current code version. This must match the `android:versionName` in your app's `AndroidManifest.xml`, corresponding to the version the `mapping.txt` was generated for.
 * @member {String} version
 */
Api1ProguardRequest.prototype['version'] = undefined;

/**
 * Your `mapping.txt` file.
 * @member {File} mapping
 */
Api1ProguardRequest.prototype['mapping'] = undefined;






export default Api1ProguardRequest;

