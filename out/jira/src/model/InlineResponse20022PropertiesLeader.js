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
 * The InlineResponse20022PropertiesLeader model module.
 * @module model/InlineResponse20022PropertiesLeader
 * @version 1.2.0
 */
class InlineResponse20022PropertiesLeader {
    /**
     * Constructs a new <code>InlineResponse20022PropertiesLeader</code>.
     * @alias module:model/InlineResponse20022PropertiesLeader
     * @param email {String} 
     * @param name {String} 
     */
    constructor(email, name) { 
        
        InlineResponse20022PropertiesLeader.initialize(this, email, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, name) { 
        obj['email'] = email;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>InlineResponse20022PropertiesLeader</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022PropertiesLeader} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022PropertiesLeader} The populated <code>InlineResponse20022PropertiesLeader</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20022PropertiesLeader();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
InlineResponse20022PropertiesLeader.prototype['email'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20022PropertiesLeader.prototype['name'] = undefined;






export default InlineResponse20022PropertiesLeader;

