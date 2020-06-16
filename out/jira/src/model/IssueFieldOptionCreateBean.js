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
import IssueFieldOptionConfiguration from './IssueFieldOptionConfiguration';

/**
 * The IssueFieldOptionCreateBean model module.
 * @module model/IssueFieldOptionCreateBean
 * @version 1.4.0
 */
class IssueFieldOptionCreateBean {
    /**
     * Constructs a new <code>IssueFieldOptionCreateBean</code>.
     * @alias module:model/IssueFieldOptionCreateBean
     * @param value {String} The option's name, which is displayed in Jira.
     */
    constructor(value) { 
        
        IssueFieldOptionCreateBean.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['value'] = value;
    }

    /**
     * Constructs a <code>IssueFieldOptionCreateBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueFieldOptionCreateBean} obj Optional instance to populate.
     * @return {module:model/IssueFieldOptionCreateBean} The populated <code>IssueFieldOptionCreateBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueFieldOptionCreateBean();

            if (data.hasOwnProperty('config')) {
                obj['config'] = IssueFieldOptionConfiguration.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/IssueFieldOptionConfiguration} config
 */
IssueFieldOptionCreateBean.prototype['config'] = undefined;

/**
 * The properties of the option as arbitrary key-value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module.
 * @member {Object.<String, Object>} properties
 */
IssueFieldOptionCreateBean.prototype['properties'] = undefined;

/**
 * The option's name, which is displayed in Jira.
 * @member {String} value
 */
IssueFieldOptionCreateBean.prototype['value'] = undefined;






export default IssueFieldOptionCreateBean;

