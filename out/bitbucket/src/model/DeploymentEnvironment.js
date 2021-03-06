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
import DeploymentEnvironmentAllOf from './DeploymentEnvironmentAllOf';
import ModelObject from './ModelObject';

/**
 * The DeploymentEnvironment model module.
 * @module model/DeploymentEnvironment
 * @version 1.2.0
 */
class DeploymentEnvironment {
    /**
     * Constructs a new <code>DeploymentEnvironment</code>.
     * @alias module:model/DeploymentEnvironment
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/DeploymentEnvironmentAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);DeploymentEnvironmentAllOf.initialize(this);
        DeploymentEnvironment.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>DeploymentEnvironment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentEnvironment} obj Optional instance to populate.
     * @return {module:model/DeploymentEnvironment} The populated <code>DeploymentEnvironment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentEnvironment();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            DeploymentEnvironmentAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The UUID identifying the environment.
 * @member {String} uuid
 */
DeploymentEnvironment.prototype['uuid'] = undefined;

/**
 * The name of the environment.
 * @member {String} name
 */
DeploymentEnvironment.prototype['name'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement DeploymentEnvironmentAllOf interface:
/**
 * The UUID identifying the environment.
 * @member {String} uuid
 */
DeploymentEnvironmentAllOf.prototype['uuid'] = undefined;
/**
 * The name of the environment.
 * @member {String} name
 */
DeploymentEnvironmentAllOf.prototype['name'] = undefined;




export default DeploymentEnvironment;

