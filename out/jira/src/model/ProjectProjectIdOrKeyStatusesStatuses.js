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
 * The ProjectProjectIdOrKeyStatusesStatuses model module.
 * @module model/ProjectProjectIdOrKeyStatusesStatuses
 * @version 1.0.0
 */
class ProjectProjectIdOrKeyStatusesStatuses {
    /**
     * Constructs a new <code>ProjectProjectIdOrKeyStatusesStatuses</code>.
     * @alias module:model/ProjectProjectIdOrKeyStatusesStatuses
     * @param description {String} 
     * @param iconUrl {String} 
     * @param id {String} 
     * @param name {String} 
     * @param self {String} 
     */
    constructor(description, iconUrl, id, name, self) { 
        
        ProjectProjectIdOrKeyStatusesStatuses.initialize(this, description, iconUrl, id, name, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, iconUrl, id, name, self) { 
        obj['description'] = description;
        obj['iconUrl'] = iconUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>ProjectProjectIdOrKeyStatusesStatuses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectProjectIdOrKeyStatusesStatuses} obj Optional instance to populate.
     * @return {module:model/ProjectProjectIdOrKeyStatusesStatuses} The populated <code>ProjectProjectIdOrKeyStatusesStatuses</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectProjectIdOrKeyStatusesStatuses();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
ProjectProjectIdOrKeyStatusesStatuses.prototype['description'] = undefined;

/**
 * @member {String} iconUrl
 */
ProjectProjectIdOrKeyStatusesStatuses.prototype['iconUrl'] = undefined;

/**
 * @member {String} id
 */
ProjectProjectIdOrKeyStatusesStatuses.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProjectProjectIdOrKeyStatusesStatuses.prototype['name'] = undefined;

/**
 * @member {String} self
 */
ProjectProjectIdOrKeyStatusesStatuses.prototype['self'] = undefined;






export default ProjectProjectIdOrKeyStatusesStatuses;

