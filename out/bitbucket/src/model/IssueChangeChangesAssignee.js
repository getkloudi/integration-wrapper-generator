/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The IssueChangeChangesAssignee model module.
 * @module model/IssueChangeChangesAssignee
 * @version 1.1.0
 */
class IssueChangeChangesAssignee {
    /**
     * Constructs a new <code>IssueChangeChangesAssignee</code>.
     * @alias module:model/IssueChangeChangesAssignee
     */
    constructor() { 
        
        IssueChangeChangesAssignee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueChangeChangesAssignee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueChangeChangesAssignee} obj Optional instance to populate.
     * @return {module:model/IssueChangeChangesAssignee} The populated <code>IssueChangeChangesAssignee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueChangeChangesAssignee();

            if (data.hasOwnProperty('old')) {
                obj['old'] = ApiClient.convertToType(data['old'], 'String');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} old
 */
IssueChangeChangesAssignee.prototype['old'] = undefined;

/**
 * @member {String} new
 */
IssueChangeChangesAssignee.prototype['new'] = undefined;






export default IssueChangeChangesAssignee;
