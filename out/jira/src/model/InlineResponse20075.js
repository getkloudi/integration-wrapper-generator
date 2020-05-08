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
 * The InlineResponse20075 model module.
 * @module model/InlineResponse20075
 * @version 1.0.0
 */
class InlineResponse20075 {
    /**
     * Constructs a new <code>InlineResponse20075</code>.
     * 
     * @alias module:model/InlineResponse20075
     * @param administrators {String} 
     * @param developers {String} 
     * @param users {String} 
     */
    constructor(administrators, developers, users) { 
        
        InlineResponse20075.initialize(this, administrators, developers, users);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, administrators, developers, users) { 
        obj['Administrators'] = administrators;
        obj['Developers'] = developers;
        obj['Users'] = users;
    }

    /**
     * Constructs a <code>InlineResponse20075</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20075} obj Optional instance to populate.
     * @return {module:model/InlineResponse20075} The populated <code>InlineResponse20075</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20075();

            if (data.hasOwnProperty('Administrators')) {
                obj['Administrators'] = ApiClient.convertToType(data['Administrators'], 'String');
            }
            if (data.hasOwnProperty('Developers')) {
                obj['Developers'] = ApiClient.convertToType(data['Developers'], 'String');
            }
            if (data.hasOwnProperty('Users')) {
                obj['Users'] = ApiClient.convertToType(data['Users'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Administrators
 */
InlineResponse20075.prototype['Administrators'] = undefined;

/**
 * @member {String} Developers
 */
InlineResponse20075.prototype['Developers'] = undefined;

/**
 * @member {String} Users
 */
InlineResponse20075.prototype['Users'] = undefined;






export default InlineResponse20075;

