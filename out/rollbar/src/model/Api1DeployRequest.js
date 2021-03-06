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
 * The Api1DeployRequest model module.
 * @module model/Api1DeployRequest
 * @version 1.1.0
 */
class Api1DeployRequest {
    /**
     * Constructs a new <code>Api1DeployRequest</code>.
     * @alias module:model/Api1DeployRequest
     * @param environment {String} Environment to which the revision was deployed
     * @param revision {String} Git SHA of revision being deployed
     */
    constructor(environment, revision) { 
        
        Api1DeployRequest.initialize(this, environment, revision);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, environment, revision) { 
        obj['environment'] = environment;
        obj['revision'] = revision;
    }

    /**
     * Constructs a <code>Api1DeployRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1DeployRequest} obj Optional instance to populate.
     * @return {module:model/Api1DeployRequest} The populated <code>Api1DeployRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Api1DeployRequest();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = ApiClient.convertToType(data['revision'], 'String');
            }
            if (data.hasOwnProperty('rollbar_username')) {
                obj['rollbar_username'] = ApiClient.convertToType(data['rollbar_username'], 'String');
            }
            if (data.hasOwnProperty('local_username')) {
                obj['local_username'] = ApiClient.convertToType(data['local_username'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Environment to which the revision was deployed
 * @member {String} environment
 */
Api1DeployRequest.prototype['environment'] = undefined;

/**
 * Git SHA of revision being deployed
 * @member {String} revision
 */
Api1DeployRequest.prototype['revision'] = undefined;

/**
 * Rollbar username of person who deployed
 * @member {String} rollbar_username
 */
Api1DeployRequest.prototype['rollbar_username'] = undefined;

/**
 * Local username of person who deployed.  Displayed in web app if no `rollbar_username` was specified.
 * @member {String} local_username
 */
Api1DeployRequest.prototype['local_username'] = undefined;

/**
 * Additional text to include with the deploy
 * @member {String} comment
 */
Api1DeployRequest.prototype['comment'] = undefined;

/**
 * Status of the deployment - `started`, `succeeded` _(default)_, `failed`, or `timed_out`.
 * @member {String} status
 */
Api1DeployRequest.prototype['status'] = undefined;






export default Api1DeployRequest;

