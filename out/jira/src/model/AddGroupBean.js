/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AddGroupBean model module.
 * @module model/AddGroupBean
 * @version 1.4.0
 */
class AddGroupBean {
    /**
     * Constructs a new <code>AddGroupBean</code>.
     * @alias module:model/AddGroupBean
     * @param name {String} The name of the group.
     */
    constructor(name) { 
        
        AddGroupBean.initialize(this, name);
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
     * Constructs a <code>AddGroupBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddGroupBean} obj Optional instance to populate.
     * @return {module:model/AddGroupBean} The populated <code>AddGroupBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddGroupBean();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the group.
 * @member {String} name
 */
AddGroupBean.prototype['name'] = undefined;






export default AddGroupBean;
