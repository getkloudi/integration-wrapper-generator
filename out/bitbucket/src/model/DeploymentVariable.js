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
import DeploymentVariableAllOf from './DeploymentVariableAllOf';
import ModelObject from './ModelObject';

/**
 * The DeploymentVariable model module.
 * @module model/DeploymentVariable
 * @version 1.2.0
 */
class DeploymentVariable {
    /**
     * Constructs a new <code>DeploymentVariable</code>.
     * @alias module:model/DeploymentVariable
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/DeploymentVariableAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);DeploymentVariableAllOf.initialize(this);
        DeploymentVariable.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>DeploymentVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentVariable} obj Optional instance to populate.
     * @return {module:model/DeploymentVariable} The populated <code>DeploymentVariable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentVariable();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            DeploymentVariableAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('secured')) {
                obj['secured'] = ApiClient.convertToType(data['secured'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The UUID identifying the variable.
 * @member {String} uuid
 */
DeploymentVariable.prototype['uuid'] = undefined;

/**
 * The unique name of the variable.
 * @member {String} key
 */
DeploymentVariable.prototype['key'] = undefined;

/**
 * The value of the variable. If the variable is secured, this will be empty.
 * @member {String} value
 */
DeploymentVariable.prototype['value'] = undefined;

/**
 * If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
 * @member {Boolean} secured
 */
DeploymentVariable.prototype['secured'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement DeploymentVariableAllOf interface:
/**
 * The UUID identifying the variable.
 * @member {String} uuid
 */
DeploymentVariableAllOf.prototype['uuid'] = undefined;
/**
 * The unique name of the variable.
 * @member {String} key
 */
DeploymentVariableAllOf.prototype['key'] = undefined;
/**
 * The value of the variable. If the variable is secured, this will be empty.
 * @member {String} value
 */
DeploymentVariableAllOf.prototype['value'] = undefined;
/**
 * If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
 * @member {Boolean} secured
 */
DeploymentVariableAllOf.prototype['secured'] = undefined;




export default DeploymentVariable;

