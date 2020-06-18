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
 * The ProjectIdentifiers model module.
 * @module model/ProjectIdentifiers
 * @version 1.4.0
 */
class ProjectIdentifiers {
    /**
     * Constructs a new <code>ProjectIdentifiers</code>.
     * Identifiers for a project.
     * @alias module:model/ProjectIdentifiers
     * @param id {Number} The ID of the created project.
     * @param key {String} The key of the created project.
     * @param self {String} The URL of the created project.
     */
    constructor(id, key, self) { 
        
        ProjectIdentifiers.initialize(this, id, key, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, key, self) { 
        obj['id'] = id;
        obj['key'] = key;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>ProjectIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectIdentifiers} obj Optional instance to populate.
     * @return {module:model/ProjectIdentifiers} The populated <code>ProjectIdentifiers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectIdentifiers();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the created project.
 * @member {Number} id
 */
ProjectIdentifiers.prototype['id'] = undefined;

/**
 * The key of the created project.
 * @member {String} key
 */
ProjectIdentifiers.prototype['key'] = undefined;

/**
 * The URL of the created project.
 * @member {String} self
 */
ProjectIdentifiers.prototype['self'] = undefined;






export default ProjectIdentifiers;
