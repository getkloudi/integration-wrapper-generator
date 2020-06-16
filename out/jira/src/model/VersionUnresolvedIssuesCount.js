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
 * The VersionUnresolvedIssuesCount model module.
 * @module model/VersionUnresolvedIssuesCount
 * @version 1.4.0
 */
class VersionUnresolvedIssuesCount {
    /**
     * Constructs a new <code>VersionUnresolvedIssuesCount</code>.
     * Count of a version&#39;s unresolved issues.
     * @alias module:model/VersionUnresolvedIssuesCount
     */
    constructor() { 
        
        VersionUnresolvedIssuesCount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VersionUnresolvedIssuesCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionUnresolvedIssuesCount} obj Optional instance to populate.
     * @return {module:model/VersionUnresolvedIssuesCount} The populated <code>VersionUnresolvedIssuesCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionUnresolvedIssuesCount();

            if (data.hasOwnProperty('issuesCount')) {
                obj['issuesCount'] = ApiClient.convertToType(data['issuesCount'], 'Number');
            }
            if (data.hasOwnProperty('issuesUnresolvedCount')) {
                obj['issuesUnresolvedCount'] = ApiClient.convertToType(data['issuesUnresolvedCount'], 'Number');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Count of issues.
 * @member {Number} issuesCount
 */
VersionUnresolvedIssuesCount.prototype['issuesCount'] = undefined;

/**
 * Count of unresolved issues.
 * @member {Number} issuesUnresolvedCount
 */
VersionUnresolvedIssuesCount.prototype['issuesUnresolvedCount'] = undefined;

/**
 * The URL of these count details.
 * @member {String} self
 */
VersionUnresolvedIssuesCount.prototype['self'] = undefined;






export default VersionUnresolvedIssuesCount;

