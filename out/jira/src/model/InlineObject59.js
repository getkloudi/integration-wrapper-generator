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
 * The InlineObject59 model module.
 * @module model/InlineObject59
 * @version 1.3.0
 */
class InlineObject59 {
    /**
     * Constructs a new <code>InlineObject59</code>.
     * @alias module:model/InlineObject59
     */
    constructor() { 
        
        InlineObject59.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject59</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject59} obj Optional instance to populate.
     * @return {module:model/InlineObject59} The populated <code>InlineObject59</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject59();

            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('issuesStatusForFixVersion')) {
                obj['issuesStatusForFixVersion'] = ApiClient.convertToType(data['issuesStatusForFixVersion'], Object);
            }
            if (data.hasOwnProperty('moveUnfixedIssuesTo')) {
                obj['moveUnfixedIssuesTo'] = ApiClient.convertToType(data['moveUnfixedIssuesTo'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [Object]);
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
            if (data.hasOwnProperty('remotelinks')) {
                obj['remotelinks'] = ApiClient.convertToType(data['remotelinks'], [Object]);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Indicates that the version is archived. Optional when creating or updating a version.
 * @member {Boolean} archived
 */
InlineObject59.prototype['archived'] = undefined;

/**
 * The description of the version. Optional when creating or updating a version.
 * @member {String} description
 */
InlineObject59.prototype['description'] = undefined;

/**
 * @member {Object} issuesStatusForFixVersion
 */
InlineObject59.prototype['issuesStatusForFixVersion'] = undefined;

/**
 * The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
 * @member {String} moveUnfixedIssuesTo
 */
InlineObject59.prototype['moveUnfixedIssuesTo'] = undefined;

/**
 * The unique name of the version. Required when creating a version. Optional when updating a version. Maximum length 255 chars.
 * @member {String} name
 */
InlineObject59.prototype['name'] = undefined;

/**
 * If the expand option operations is used, returns the list of operations available for this version. Read only.
 * @member {Array.<Object>} operations
 */
InlineObject59.prototype['operations'] = undefined;

/**
 * Deprecated. Use projectId.
 * @member {String} project
 */
InlineObject59.prototype['project'] = undefined;

/**
 * The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
 * @member {Number} projectId
 */
InlineObject59.prototype['projectId'] = undefined;

/**
 * The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {String} releaseDate
 */
InlineObject59.prototype['releaseDate'] = undefined;

/**
 * Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
 * @member {Boolean} released
 */
InlineObject59.prototype['released'] = undefined;

/**
 * If the expand option remotelinks is used, returns the list of remote links stored against this version. Read only.
 * @member {Array.<Object>} remotelinks
 */
InlineObject59.prototype['remotelinks'] = undefined;

/**
 * The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {String} startDate
 */
InlineObject59.prototype['startDate'] = undefined;






export default InlineObject59;

