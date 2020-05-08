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
import InlineResponse2012Users from './InlineResponse2012Users';

/**
 * The InlineResponse2012 model module.
 * @module model/InlineResponse2012
 * @version 1.1.0
 */
class InlineResponse2012 {
    /**
     * Constructs a new <code>InlineResponse2012</code>.
     * 
     * @alias module:model/InlineResponse2012
     * @param expand {String} 
     * @param name {String} 
     * @param self {String} 
     * @param users {module:model/InlineResponse2012Users} 
     */
    constructor(expand, name, self, users) { 
        
        InlineResponse2012.initialize(this, expand, name, self, users);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, expand, name, self, users) { 
        obj['expand'] = expand;
        obj['name'] = name;
        obj['self'] = self;
        obj['users'] = users;
    }

    /**
     * Constructs a <code>InlineResponse2012</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2012} obj Optional instance to populate.
     * @return {module:model/InlineResponse2012} The populated <code>InlineResponse2012</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2012();

            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = InlineResponse2012Users.constructFromObject(data['users']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} expand
 */
InlineResponse2012.prototype['expand'] = undefined;

/**
 * @member {String} name
 */
InlineResponse2012.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse2012.prototype['self'] = undefined;

/**
 * @member {module:model/InlineResponse2012Users} users
 */
InlineResponse2012.prototype['users'] = undefined;






export default InlineResponse2012;

