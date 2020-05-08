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
import InlineResponse20013TimeTrackingConfiguration from './InlineResponse20013TimeTrackingConfiguration';

/**
 * The InlineResponse20013 model module.
 * @module model/InlineResponse20013
 * @version 1.1.0
 */
class InlineResponse20013 {
    /**
     * Constructs a new <code>InlineResponse20013</code>.
     * 
     * @alias module:model/InlineResponse20013
     * @param attachmentsEnabled {Boolean} 
     * @param issueLinkingEnabled {Boolean} 
     * @param subTasksEnabled {Boolean} 
     * @param timeTrackingConfiguration {module:model/InlineResponse20013TimeTrackingConfiguration} 
     * @param timeTrackingEnabled {Boolean} 
     * @param unassignedIssuesAllowed {Boolean} 
     * @param votingEnabled {Boolean} 
     * @param watchingEnabled {Boolean} 
     */
    constructor(attachmentsEnabled, issueLinkingEnabled, subTasksEnabled, timeTrackingConfiguration, timeTrackingEnabled, unassignedIssuesAllowed, votingEnabled, watchingEnabled) { 
        
        InlineResponse20013.initialize(this, attachmentsEnabled, issueLinkingEnabled, subTasksEnabled, timeTrackingConfiguration, timeTrackingEnabled, unassignedIssuesAllowed, votingEnabled, watchingEnabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attachmentsEnabled, issueLinkingEnabled, subTasksEnabled, timeTrackingConfiguration, timeTrackingEnabled, unassignedIssuesAllowed, votingEnabled, watchingEnabled) { 
        obj['attachmentsEnabled'] = attachmentsEnabled;
        obj['issueLinkingEnabled'] = issueLinkingEnabled;
        obj['subTasksEnabled'] = subTasksEnabled;
        obj['timeTrackingConfiguration'] = timeTrackingConfiguration;
        obj['timeTrackingEnabled'] = timeTrackingEnabled;
        obj['unassignedIssuesAllowed'] = unassignedIssuesAllowed;
        obj['votingEnabled'] = votingEnabled;
        obj['watchingEnabled'] = watchingEnabled;
    }

    /**
     * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20013} obj Optional instance to populate.
     * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20013();

            if (data.hasOwnProperty('attachmentsEnabled')) {
                obj['attachmentsEnabled'] = ApiClient.convertToType(data['attachmentsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('issueLinkingEnabled')) {
                obj['issueLinkingEnabled'] = ApiClient.convertToType(data['issueLinkingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('subTasksEnabled')) {
                obj['subTasksEnabled'] = ApiClient.convertToType(data['subTasksEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('timeTrackingConfiguration')) {
                obj['timeTrackingConfiguration'] = InlineResponse20013TimeTrackingConfiguration.constructFromObject(data['timeTrackingConfiguration']);
            }
            if (data.hasOwnProperty('timeTrackingEnabled')) {
                obj['timeTrackingEnabled'] = ApiClient.convertToType(data['timeTrackingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('unassignedIssuesAllowed')) {
                obj['unassignedIssuesAllowed'] = ApiClient.convertToType(data['unassignedIssuesAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('votingEnabled')) {
                obj['votingEnabled'] = ApiClient.convertToType(data['votingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('watchingEnabled')) {
                obj['watchingEnabled'] = ApiClient.convertToType(data['watchingEnabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} attachmentsEnabled
 */
InlineResponse20013.prototype['attachmentsEnabled'] = undefined;

/**
 * @member {Boolean} issueLinkingEnabled
 */
InlineResponse20013.prototype['issueLinkingEnabled'] = undefined;

/**
 * @member {Boolean} subTasksEnabled
 */
InlineResponse20013.prototype['subTasksEnabled'] = undefined;

/**
 * @member {module:model/InlineResponse20013TimeTrackingConfiguration} timeTrackingConfiguration
 */
InlineResponse20013.prototype['timeTrackingConfiguration'] = undefined;

/**
 * @member {Boolean} timeTrackingEnabled
 */
InlineResponse20013.prototype['timeTrackingEnabled'] = undefined;

/**
 * @member {Boolean} unassignedIssuesAllowed
 */
InlineResponse20013.prototype['unassignedIssuesAllowed'] = undefined;

/**
 * @member {Boolean} votingEnabled
 */
InlineResponse20013.prototype['votingEnabled'] = undefined;

/**
 * @member {Boolean} watchingEnabled
 */
InlineResponse20013.prototype['watchingEnabled'] = undefined;






export default InlineResponse20013;
