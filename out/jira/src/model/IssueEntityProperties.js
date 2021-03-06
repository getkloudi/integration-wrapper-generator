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
import JsonNode from './JsonNode';

/**
 * The IssueEntityProperties model module.
 * @module model/IssueEntityProperties
 * @version 1.4.0
 */
class IssueEntityProperties {
    /**
     * Constructs a new <code>IssueEntityProperties</code>.
     * Lists of issues and entity properties. See [Entity properties](https://developer.atlassian.com/cloud/jira/platform/jira-entity-properties/) for more information.
     * @alias module:model/IssueEntityProperties
     */
    constructor() { 
        
        IssueEntityProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueEntityProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEntityProperties} obj Optional instance to populate.
     * @return {module:model/IssueEntityProperties} The populated <code>IssueEntityProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueEntityProperties();

            if (data.hasOwnProperty('entitiesIds')) {
                obj['entitiesIds'] = ApiClient.convertToType(data['entitiesIds'], ['Number']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': JsonNode});
            }
        }
        return obj;
    }


}

/**
 * A list of entity property IDs.
 * @member {Array.<Number>} entitiesIds
 */
IssueEntityProperties.prototype['entitiesIds'] = undefined;

/**
 * A list of entity property keys and values.
 * @member {Object.<String, module:model/JsonNode>} properties
 */
IssueEntityProperties.prototype['properties'] = undefined;






export default IssueEntityProperties;

