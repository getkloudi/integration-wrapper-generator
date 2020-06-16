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
import IssueUpdateDetails from './IssueUpdateDetails';

/**
 * The IssuesUpdateBean model module.
 * @module model/IssuesUpdateBean
 * @version 1.4.0
 */
class IssuesUpdateBean {
    /**
     * Constructs a new <code>IssuesUpdateBean</code>.
     * @alias module:model/IssuesUpdateBean
     */
    constructor() { 
        
        IssuesUpdateBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssuesUpdateBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuesUpdateBean} obj Optional instance to populate.
     * @return {module:model/IssuesUpdateBean} The populated <code>IssuesUpdateBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssuesUpdateBean();

            if (data.hasOwnProperty('issueUpdates')) {
                obj['issueUpdates'] = ApiClient.convertToType(data['issueUpdates'], [IssueUpdateDetails]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/IssueUpdateDetails>} issueUpdates
 */
IssuesUpdateBean.prototype['issueUpdates'] = undefined;






export default IssuesUpdateBean;

