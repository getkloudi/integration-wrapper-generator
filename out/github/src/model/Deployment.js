/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DeploymentPayload from './DeploymentPayload';

/**
 * The Deployment model module.
 * @module model/Deployment
 * @version 1.4.1
 */
class Deployment {
    /**
     * Constructs a new <code>Deployment</code>.
     * @alias module:model/Deployment
     */
    constructor() { 
        
        Deployment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Deployment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deployment} obj Optional instance to populate.
     * @return {module:model/Deployment} The populated <code>Deployment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Deployment();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = DeploymentPayload.constructFromObject(data['payload']);
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
Deployment.prototype['description'] = undefined;

/**
 * @member {module:model/DeploymentPayload} payload
 */
Deployment.prototype['payload'] = undefined;

/**
 * @member {String} ref
 */
Deployment.prototype['ref'] = undefined;






export default Deployment;

