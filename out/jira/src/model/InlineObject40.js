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
 * The InlineObject40 model module.
 * @module model/InlineObject40
 * @version 1.1.0
 */
class InlineObject40 {
    /**
     * Constructs a new <code>InlineObject40</code>.
     * @alias module:model/InlineObject40
     */
    constructor() { 
        
        InlineObject40.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject40</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject40} obj Optional instance to populate.
     * @return {module:model/InlineObject40} The populated <code>InlineObject40</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject40();

            if (data.hasOwnProperty('holder')) {
                obj['holder'] = ApiClient.convertToType(data['holder'], Object);
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The user or group being granted the permission. It consists of a type and a type-dependent parameter. See holderfor more information.
 * @member {Object} holder
 */
InlineObject40.prototype['holder'] = undefined;

/**
 * The permission to grant. Choose from the list of built-in permissions or from any custom permissions that have been added by apps. For more information about custom permissions, see the project permission and global permission module documentation.
 * @member {String} permission
 */
InlineObject40.prototype['permission'] = undefined;






export default InlineObject40;

