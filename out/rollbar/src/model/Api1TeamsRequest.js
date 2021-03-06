/**
 * Rollbar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Api1TeamsRequest model module.
 * @module model/Api1TeamsRequest
 * @version 1.1.0
 */
class Api1TeamsRequest {
    /**
     * Constructs a new <code>Api1TeamsRequest</code>.
     * @alias module:model/Api1TeamsRequest
     * @param name {String} Name of the team. Max length 32 characters.
     * @param accessLevel {String} Can be `standard`, `light`, or `view`.
     */
    constructor(name, accessLevel) { 
        
        Api1TeamsRequest.initialize(this, name, accessLevel);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, accessLevel) { 
        obj['name'] = name;
        obj['access_level'] = accessLevel;
    }

    /**
     * Constructs a <code>Api1TeamsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1TeamsRequest} obj Optional instance to populate.
     * @return {module:model/Api1TeamsRequest} The populated <code>Api1TeamsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Api1TeamsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('access_level')) {
                obj['access_level'] = ApiClient.convertToType(data['access_level'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the team. Max length 32 characters.
 * @member {String} name
 */
Api1TeamsRequest.prototype['name'] = undefined;

/**
 * Can be `standard`, `light`, or `view`.
 * @member {String} access_level
 */
Api1TeamsRequest.prototype['access_level'] = undefined;






export default Api1TeamsRequest;

