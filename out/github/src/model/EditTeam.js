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
 * The EditTeam model module.
 * @module model/EditTeam
 * @version 1.4.6
 */
class EditTeam {
    /**
     * Constructs a new <code>EditTeam</code>.
     * @alias module:model/EditTeam
     * @param name {String} 
     */
    constructor(name) { 
        
        EditTeam.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>EditTeam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditTeam} obj Optional instance to populate.
     * @return {module:model/EditTeam} The populated <code>EditTeam</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EditTeam();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
EditTeam.prototype['name'] = undefined;

/**
 * @member {module:model/EditTeam.PermissionEnum} permission
 */
EditTeam.prototype['permission'] = undefined;





/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
EditTeam['PermissionEnum'] = {

    /**
     * value: "pull"
     * @const
     */
    "pull": "pull",

    /**
     * value: "push"
     * @const
     */
    "push": "push",

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin"
};



export default EditTeam;

