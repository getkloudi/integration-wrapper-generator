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
 * The InlineResponse20113 model module.
 * @module model/InlineResponse20113
 * @version 1.3.1
 */
class InlineResponse20113 {
    /**
     * Constructs a new <code>InlineResponse20113</code>.
     * 
     * @alias module:model/InlineResponse20113
     * @param archived {Boolean} 
     * @param description {String} 
     * @param name {String} 
     * @param project {String} 
     * @param projectId {Number} 
     * @param releaseDate {String} 
     * @param released {Boolean} 
     * @param userReleaseDate {String} 
     */
    constructor(archived, description, name, project, projectId, releaseDate, released, userReleaseDate) { 
        
        InlineResponse20113.initialize(this, archived, description, name, project, projectId, releaseDate, released, userReleaseDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, archived, description, name, project, projectId, releaseDate, released, userReleaseDate) { 
        obj['archived'] = archived;
        obj['description'] = description;
        obj['name'] = name;
        obj['project'] = project;
        obj['projectId'] = projectId;
        obj['releaseDate'] = releaseDate;
        obj['released'] = released;
        obj['userReleaseDate'] = userReleaseDate;
    }

    /**
     * Constructs a <code>InlineResponse20113</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20113} obj Optional instance to populate.
     * @return {module:model/InlineResponse20113} The populated <code>InlineResponse20113</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20113();

            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'Number');
            }
            if (data.hasOwnProperty('releaseDate')) {
                obj['releaseDate'] = ApiClient.convertToType(data['releaseDate'], 'String');
            }
            if (data.hasOwnProperty('released')) {
                obj['released'] = ApiClient.convertToType(data['released'], 'Boolean');
            }
            if (data.hasOwnProperty('userReleaseDate')) {
                obj['userReleaseDate'] = ApiClient.convertToType(data['userReleaseDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} archived
 */
InlineResponse20113.prototype['archived'] = undefined;

/**
 * @member {String} description
 */
InlineResponse20113.prototype['description'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20113.prototype['name'] = undefined;

/**
 * @member {String} project
 */
InlineResponse20113.prototype['project'] = undefined;

/**
 * @member {Number} projectId
 */
InlineResponse20113.prototype['projectId'] = undefined;

/**
 * @member {String} releaseDate
 */
InlineResponse20113.prototype['releaseDate'] = undefined;

/**
 * @member {Boolean} released
 */
InlineResponse20113.prototype['released'] = undefined;

/**
 * @member {String} userReleaseDate
 */
InlineResponse20113.prototype['userReleaseDate'] = undefined;






export default InlineResponse20113;

