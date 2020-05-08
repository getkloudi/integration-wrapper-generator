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

/**
 * The InlineResponse2016 model module.
 * @module model/InlineResponse2016
 * @version 1.3.0
 */
class InlineResponse2016 {
    /**
     * Constructs a new <code>InlineResponse2016</code>.
     * 
     * @alias module:model/InlineResponse2016
     * @param id {String} 
     * @param inward {String} 
     * @param name {String} 
     * @param outward {String} 
     * @param self {String} 
     */
    constructor(id, inward, name, outward, self) { 
        
        InlineResponse2016.initialize(this, id, inward, name, outward, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, inward, name, outward, self) { 
        obj['id'] = id;
        obj['inward'] = inward;
        obj['name'] = name;
        obj['outward'] = outward;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse2016</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2016} obj Optional instance to populate.
     * @return {module:model/InlineResponse2016} The populated <code>InlineResponse2016</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2016();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inward')) {
                obj['inward'] = ApiClient.convertToType(data['inward'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('outward')) {
                obj['outward'] = ApiClient.convertToType(data['outward'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse2016.prototype['id'] = undefined;

/**
 * @member {String} inward
 */
InlineResponse2016.prototype['inward'] = undefined;

/**
 * @member {String} name
 */
InlineResponse2016.prototype['name'] = undefined;

/**
 * @member {String} outward
 */
InlineResponse2016.prototype['outward'] = undefined;

/**
 * @member {String} self
 */
InlineResponse2016.prototype['self'] = undefined;






export default InlineResponse2016;

