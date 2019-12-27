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
import PipelineVariableAllOf from './PipelineVariableAllOf';

/**
 * The PipelineVariable model module.
 * @module model/PipelineVariable
 * @version 1.1.2
 */
class PipelineVariable {
    /**
     * Constructs a new <code>PipelineVariable</code>.
     * @alias module:model/PipelineVariable
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/PipelineVariableAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);PipelineVariableAllOf.initialize(this);
        PipelineVariable.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>PipelineVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineVariable} obj Optional instance to populate.
     * @return {module:model/PipelineVariable} The populated <code>PipelineVariable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineVariable();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            PipelineVariableAllOf.constructFromObject(data, obj);

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
PipelineVariable.prototype['uuid'] = undefined;

/**
 * The unique name of the variable.
 * @member {String} key
 */
PipelineVariable.prototype['key'] = undefined;

/**
 * The value of the variable. If the variable is secured, this will be empty.
 * @member {String} value
 */
PipelineVariable.prototype['value'] = undefined;

/**
 * If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
 * @member {Boolean} secured
 */
PipelineVariable.prototype['secured'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement PipelineVariableAllOf interface:
/**
 * The UUID identifying the variable.
 * @member {String} uuid
 */
PipelineVariableAllOf.prototype['uuid'] = undefined;
/**
 * The unique name of the variable.
 * @member {String} key
 */
PipelineVariableAllOf.prototype['key'] = undefined;
/**
 * The value of the variable. If the variable is secured, this will be empty.
 * @member {String} value
 */
PipelineVariableAllOf.prototype['value'] = undefined;
/**
 * If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API.
 * @member {Boolean} secured
 */
PipelineVariableAllOf.prototype['secured'] = undefined;




export default PipelineVariable;

