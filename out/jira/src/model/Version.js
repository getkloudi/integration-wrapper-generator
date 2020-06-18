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
import SimpleLink from './SimpleLink';
import VersionIssuesStatus from './VersionIssuesStatus';

/**
 * The Version model module.
 * @module model/Version
 * @version 1.4.0
 */
class Version {
    /**
     * Constructs a new <code>Version</code>.
     * Details about a project version.
     * @alias module:model/Version
     */
    constructor() { 
        
        Version.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Version} obj Optional instance to populate.
     * @return {module:model/Version} The populated <code>Version</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Version();

            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('issuesStatusForFixVersion')) {
                obj['issuesStatusForFixVersion'] = ApiClient.convertToType(data['issuesStatusForFixVersion'], VersionIssuesStatus);
            }
            if (data.hasOwnProperty('moveUnfixedIssuesTo')) {
                obj['moveUnfixedIssuesTo'] = ApiClient.convertToType(data['moveUnfixedIssuesTo'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [SimpleLink]);
            }
            if (data.hasOwnProperty('overdue')) {
                obj['overdue'] = ApiClient.convertToType(data['overdue'], 'Boolean');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'Number');
            }
            if (data.hasOwnProperty('releaseDate')) {
                obj['releaseDate'] = ApiClient.convertToType(data['releaseDate'], 'Date');
            }
            if (data.hasOwnProperty('released')) {
                obj['released'] = ApiClient.convertToType(data['released'], 'Boolean');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('userReleaseDate')) {
                obj['userReleaseDate'] = ApiClient.convertToType(data['userReleaseDate'], 'String');
            }
            if (data.hasOwnProperty('userStartDate')) {
                obj['userStartDate'] = ApiClient.convertToType(data['userStartDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Indicates that the version is archived. Optional when creating or updating a version.
 * @member {Boolean} archived
 */
Version.prototype['archived'] = undefined;

/**
 * The description of the version. Optional when creating or updating a version.
 * @member {String} description
 */
Version.prototype['description'] = undefined;

/**
 * Use [expand](em>#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.  Optional for create and update.
 * @member {String} expand
 */
Version.prototype['expand'] = undefined;

/**
 * The ID of the version.
 * @member {String} id
 */
Version.prototype['id'] = undefined;

/**
 * If the expand option `issuesstatus` is used, returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.
 * @member {module:model/VersionIssuesStatus} issuesStatusForFixVersion
 */
Version.prototype['issuesStatusForFixVersion'] = undefined;

/**
 * The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version.
 * @member {String} moveUnfixedIssuesTo
 */
Version.prototype['moveUnfixedIssuesTo'] = undefined;

/**
 * The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters.
 * @member {String} name
 */
Version.prototype['name'] = undefined;

/**
 * If the expand option `operations` is used, returns the list of operations available for this version.
 * @member {Array.<module:model/SimpleLink>} operations
 */
Version.prototype['operations'] = undefined;

/**
 * Indicates that the version is overdue.
 * @member {Boolean} overdue
 */
Version.prototype['overdue'] = undefined;

/**
 * Deprecated. Use `projectId`.
 * @member {String} project
 */
Version.prototype['project'] = undefined;

/**
 * The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version.
 * @member {Number} projectId
 */
Version.prototype['projectId'] = undefined;

/**
 * The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {Date} releaseDate
 */
Version.prototype['releaseDate'] = undefined;

/**
 * Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version.
 * @member {Boolean} released
 */
Version.prototype['released'] = undefined;

/**
 * The URL of the version.
 * @member {String} self
 */
Version.prototype['self'] = undefined;

/**
 * The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version.
 * @member {Date} startDate
 */
Version.prototype['startDate'] = undefined;

/**
 * The date on which work on this version is expected to finish, expressed in the instance's *Day/Month/Year Format* date format.
 * @member {String} userReleaseDate
 */
Version.prototype['userReleaseDate'] = undefined;

/**
 * The date on which work on this version is expected to start, expressed in the instance's *Day/Month/Year Format* date format.
 * @member {String} userStartDate
 */
Version.prototype['userStartDate'] = undefined;






export default Version;
