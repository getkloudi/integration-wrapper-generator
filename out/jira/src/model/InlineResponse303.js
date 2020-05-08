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
import InlineResponse303Result from './InlineResponse303Result';

/**
 * The InlineResponse303 model module.
 * @module model/InlineResponse303
 * @version 1.3.1
 */
class InlineResponse303 {
    /**
     * Constructs a new <code>InlineResponse303</code>.
     * 
     * @alias module:model/InlineResponse303
     * @param description {String} 
     * @param elapsedRuntime {Number} 
     * @param id {String} 
     * @param result {module:model/InlineResponse303Result} 
     * @param self {String} 
     * @param status {String} 
     */
    constructor(description, elapsedRuntime, id, result, self, status) { 
        
        InlineResponse303.initialize(this, description, elapsedRuntime, id, result, self, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, elapsedRuntime, id, result, self, status) { 
        obj['description'] = description;
        obj['elapsedRuntime'] = elapsedRuntime;
        obj['id'] = id;
        obj['result'] = result;
        obj['self'] = self;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>InlineResponse303</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse303} obj Optional instance to populate.
     * @return {module:model/InlineResponse303} The populated <code>InlineResponse303</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse303();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('elapsedRuntime')) {
                obj['elapsedRuntime'] = ApiClient.convertToType(data['elapsedRuntime'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = InlineResponse303Result.constructFromObject(data['result']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
InlineResponse303.prototype['description'] = undefined;

/**
 * @member {Number} elapsedRuntime
 */
InlineResponse303.prototype['elapsedRuntime'] = undefined;

/**
 * @member {String} id
 */
InlineResponse303.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse303Result} result
 */
InlineResponse303.prototype['result'] = undefined;

/**
 * @member {String} self
 */
InlineResponse303.prototype['self'] = undefined;

/**
 * @member {String} status
 */
InlineResponse303.prototype['status'] = undefined;






export default InlineResponse303;

