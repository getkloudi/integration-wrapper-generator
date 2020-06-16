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
import EntityProperty from './EntityProperty';
import FieldUpdateOperation from './FieldUpdateOperation';
import HistoryMetadata from './HistoryMetadata';
import IssueTransition from './IssueTransition';

/**
 * The IssueUpdateDetails model module.
 * @module model/IssueUpdateDetails
 * @version 1.4.0
 */
class IssueUpdateDetails {
    /**
     * Constructs a new <code>IssueUpdateDetails</code>.
     * Details of an issue update request.
     * @alias module:model/IssueUpdateDetails
     */
    constructor() { 
        
        IssueUpdateDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueUpdateDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueUpdateDetails} obj Optional instance to populate.
     * @return {module:model/IssueUpdateDetails} The populated <code>IssueUpdateDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueUpdateDetails();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': Object});
            }
            if (data.hasOwnProperty('historyMetadata')) {
                obj['historyMetadata'] = ApiClient.convertToType(data['historyMetadata'], HistoryMetadata);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [EntityProperty]);
            }
            if (data.hasOwnProperty('transition')) {
                obj['transition'] = ApiClient.convertToType(data['transition'], IssueTransition);
            }
            if (data.hasOwnProperty('update')) {
                obj['update'] = ApiClient.convertToType(data['update'], {'String': [FieldUpdateOperation]});
            }
        }
        return obj;
    }


}

/**
 * List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`.
 * @member {Object.<String, Object>} fields
 */
IssueUpdateDetails.prototype['fields'] = undefined;

/**
 * Additional issue history details.
 * @member {module:model/HistoryMetadata} historyMetadata
 */
IssueUpdateDetails.prototype['historyMetadata'] = undefined;

/**
 * Details of issue properties to be add or update.
 * @member {Array.<module:model/EntityProperty>} properties
 */
IssueUpdateDetails.prototype['properties'] = undefined;

/**
 * Details of a transition. Required when performing a transition, optional when creating or editing an issue.
 * @member {module:model/IssueTransition} transition
 */
IssueUpdateDetails.prototype['transition'] = undefined;

/**
 * List of operations to perform on issue screen fields. Note that fields included in here cannot be included in `fields`.
 * @member {Object.<String, Array.<module:model/FieldUpdateOperation>>} update
 */
IssueUpdateDetails.prototype['update'] = undefined;






export default IssueUpdateDetails;

