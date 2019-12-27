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

/**
 * The DeploymentStateUndeployedAllOf model module.
 * @module model/DeploymentStateUndeployedAllOf
 * @version 1.1.0
 */
class DeploymentStateUndeployedAllOf {
    /**
     * Constructs a new <code>DeploymentStateUndeployedAllOf</code>.
     * A Bitbucket Deployment UNDEPLOYED deployment state.
     * @alias module:model/DeploymentStateUndeployedAllOf
     */
    constructor() { 
        
        DeploymentStateUndeployedAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentStateUndeployedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateUndeployedAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentStateUndeployedAllOf} The populated <code>DeploymentStateUndeployedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentStateUndeployedAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('trigger_url')) {
                obj['trigger_url'] = ApiClient.convertToType(data['trigger_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of deployment state (UNDEPLOYED).
 * @member {module:model/DeploymentStateUndeployedAllOf.NameEnum} name
 */
DeploymentStateUndeployedAllOf.prototype['name'] = undefined;

/**
 * Link to trigger the deployment.
 * @member {String} trigger_url
 */
DeploymentStateUndeployedAllOf.prototype['trigger_url'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
DeploymentStateUndeployedAllOf['NameEnum'] = {

    /**
     * value: "UNDEPLOYED"
     * @const
     */
    "UNDEPLOYED": "UNDEPLOYED"
};



export default DeploymentStateUndeployedAllOf;
