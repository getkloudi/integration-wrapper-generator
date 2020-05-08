/**
 * Jira
 * The Jira Cloud Platform REST API
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
import InlineResponse20041Fields from './InlineResponse20041Fields';
import InlineResponse20045To from './InlineResponse20045To';

/**
 * The InlineResponse20045Transitions model module.
 * @module model/InlineResponse20045Transitions
 * @version 1.1.0
 */
class InlineResponse20045Transitions {
    /**
     * Constructs a new <code>InlineResponse20045Transitions</code>.
     * @alias module:model/InlineResponse20045Transitions
     * @param hasScreen {Boolean} 
     * @param id {String} 
     * @param isConditional {Boolean} 
     * @param isGlobal {Boolean} 
     * @param isInitial {Boolean} 
     * @param name {String} 
     */
    constructor(hasScreen, id, isConditional, isGlobal, isInitial, name) { 
        
        InlineResponse20045Transitions.initialize(this, hasScreen, id, isConditional, isGlobal, isInitial, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hasScreen, id, isConditional, isGlobal, isInitial, name) { 
        obj['hasScreen'] = hasScreen;
        obj['id'] = id;
        obj['isConditional'] = isConditional;
        obj['isGlobal'] = isGlobal;
        obj['isInitial'] = isInitial;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>InlineResponse20045Transitions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20045Transitions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20045Transitions} The populated <code>InlineResponse20045Transitions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20045Transitions();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = InlineResponse20041Fields.constructFromObject(data['fields']);
            }
            if (data.hasOwnProperty('hasScreen')) {
                obj['hasScreen'] = ApiClient.convertToType(data['hasScreen'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isConditional')) {
                obj['isConditional'] = ApiClient.convertToType(data['isConditional'], 'Boolean');
            }
            if (data.hasOwnProperty('isGlobal')) {
                obj['isGlobal'] = ApiClient.convertToType(data['isGlobal'], 'Boolean');
            }
            if (data.hasOwnProperty('isInitial')) {
                obj['isInitial'] = ApiClient.convertToType(data['isInitial'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = InlineResponse20045To.constructFromObject(data['to']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20041Fields} fields
 */
InlineResponse20045Transitions.prototype['fields'] = undefined;

/**
 * @member {Boolean} hasScreen
 */
InlineResponse20045Transitions.prototype['hasScreen'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20045Transitions.prototype['id'] = undefined;

/**
 * @member {Boolean} isConditional
 */
InlineResponse20045Transitions.prototype['isConditional'] = undefined;

/**
 * @member {Boolean} isGlobal
 */
InlineResponse20045Transitions.prototype['isGlobal'] = undefined;

/**
 * @member {Boolean} isInitial
 */
InlineResponse20045Transitions.prototype['isInitial'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20045Transitions.prototype['name'] = undefined;

/**
 * @member {module:model/InlineResponse20045To} to
 */
InlineResponse20045Transitions.prototype['to'] = undefined;






export default InlineResponse20045Transitions;

