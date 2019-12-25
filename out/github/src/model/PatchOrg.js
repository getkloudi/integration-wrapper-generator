/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
 * The PatchOrg model module.
 * @module model/PatchOrg
 * @version 1.4.0
 */
class PatchOrg {
    /**
     * Constructs a new <code>PatchOrg</code>.
     * @alias module:model/PatchOrg
     */
    constructor() { 
        
        PatchOrg.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchOrg</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchOrg} obj Optional instance to populate.
     * @return {module:model/PatchOrg} The populated <code>PatchOrg</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchOrg();

            if (data.hasOwnProperty('billing_email')) {
                obj['billing_email'] = ApiClient.convertToType(data['billing_email'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Billing email address. This address is not publicized.
 * @member {String} billing_email
 */
PatchOrg.prototype['billing_email'] = undefined;

/**
 * @member {String} company
 */
PatchOrg.prototype['company'] = undefined;

/**
 * Publicly visible email address.
 * @member {String} email
 */
PatchOrg.prototype['email'] = undefined;

/**
 * @member {String} location
 */
PatchOrg.prototype['location'] = undefined;

/**
 * @member {String} name
 */
PatchOrg.prototype['name'] = undefined;






export default PatchOrg;

