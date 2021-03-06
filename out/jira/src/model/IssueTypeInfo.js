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
 * The IssueTypeInfo model module.
 * @module model/IssueTypeInfo
 * @version 1.4.0
 */
class IssueTypeInfo {
    /**
     * Constructs a new <code>IssueTypeInfo</code>.
     * Details of an issue type.
     * @alias module:model/IssueTypeInfo
     */
    constructor() { 
        
        IssueTypeInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueTypeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeInfo} obj Optional instance to populate.
     * @return {module:model/IssueTypeInfo} The populated <code>IssueTypeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTypeInfo();

            if (data.hasOwnProperty('avatarId')) {
                obj['avatarId'] = ApiClient.convertToType(data['avatarId'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The avatar of the issue type.
 * @member {Number} avatarId
 */
IssueTypeInfo.prototype['avatarId'] = undefined;

/**
 * The ID of the issue type.
 * @member {Number} id
 */
IssueTypeInfo.prototype['id'] = undefined;

/**
 * The name of the issue type.
 * @member {String} name
 */
IssueTypeInfo.prototype['name'] = undefined;






export default IssueTypeInfo;

