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
 * The IssueTypeScheme model module.
 * @module model/IssueTypeScheme
 * @version 1.4.0
 */
class IssueTypeScheme {
    /**
     * Constructs a new <code>IssueTypeScheme</code>.
     * Details of an issue type scheme.
     * @alias module:model/IssueTypeScheme
     * @param id {String} The ID of the issue type scheme.
     * @param name {String} The name of the issue type scheme.
     */
    constructor(id, name) { 
        
        IssueTypeScheme.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>IssueTypeScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeScheme} obj Optional instance to populate.
     * @return {module:model/IssueTypeScheme} The populated <code>IssueTypeScheme</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTypeScheme();

            if (data.hasOwnProperty('defaultIssueTypeId')) {
                obj['defaultIssueTypeId'] = ApiClient.convertToType(data['defaultIssueTypeId'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isDefault')) {
                obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the default issue type of the issue type scheme.
 * @member {String} defaultIssueTypeId
 */
IssueTypeScheme.prototype['defaultIssueTypeId'] = undefined;

/**
 * The description of the issue type scheme.
 * @member {String} description
 */
IssueTypeScheme.prototype['description'] = undefined;

/**
 * The ID of the issue type scheme.
 * @member {String} id
 */
IssueTypeScheme.prototype['id'] = undefined;

/**
 * Whether the issue type scheme is the default.
 * @member {Boolean} isDefault
 */
IssueTypeScheme.prototype['isDefault'] = undefined;

/**
 * The name of the issue type scheme.
 * @member {String} name
 */
IssueTypeScheme.prototype['name'] = undefined;






export default IssueTypeScheme;

