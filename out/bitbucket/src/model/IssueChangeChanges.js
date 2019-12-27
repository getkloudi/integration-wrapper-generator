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
import IssueChangeChangesAssignee from './IssueChangeChangesAssignee';

/**
 * The IssueChangeChanges model module.
 * @module model/IssueChangeChanges
 * @version 1.1.0
 */
class IssueChangeChanges {
    /**
     * Constructs a new <code>IssueChangeChanges</code>.
     * @alias module:model/IssueChangeChanges
     */
    constructor() { 
        
        IssueChangeChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueChangeChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueChangeChanges} obj Optional instance to populate.
     * @return {module:model/IssueChangeChanges} The populated <code>IssueChangeChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueChangeChanges();

            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = IssueChangeChangesAssignee.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = IssueChangeChangesAssignee.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = IssueChangeChangesAssignee.constructFromObject(data['title']);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = IssueChangeChangesAssignee.constructFromObject(data['kind']);
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = IssueChangeChangesAssignee.constructFromObject(data['milestone']);
            }
            if (data.hasOwnProperty('component')) {
                obj['component'] = IssueChangeChangesAssignee.constructFromObject(data['component']);
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = IssueChangeChangesAssignee.constructFromObject(data['priority']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = IssueChangeChangesAssignee.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = IssueChangeChangesAssignee.constructFromObject(data['content']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/IssueChangeChangesAssignee} assignee
 */
IssueChangeChanges.prototype['assignee'] = undefined;

/**
 * @member {module:model/IssueChangeChangesAssignee} state
 */
IssueChangeChanges.prototype['state'] = undefined;

/**
 * @member {module:model/IssueChangeChangesAssignee} title
 */
IssueChangeChanges.prototype['title'] = undefined;

/**
 * @member {module:model/IssueChangeChangesAssignee} kind
 */
IssueChangeChanges.prototype['kind'] = undefined;

/**
 * @member {module:model/IssueChangeChangesAssignee} milestone
 */
IssueChangeChanges.prototype['milestone'] = undefined;

/**
 * @member {module:model/IssueChangeChangesAssignee} component
 */
IssueChangeChanges.prototype['component'] = undefined;

/**
 * @member {module:model/IssueChangeChangesAssignee} priority
 */
IssueChangeChanges.prototype['priority'] = undefined;

/**
 * @member {module:model/IssueChangeChangesAssignee} version
 */
IssueChangeChanges.prototype['version'] = undefined;

/**
 * @member {module:model/IssueChangeChangesAssignee} content
 */
IssueChangeChanges.prototype['content'] = undefined;






export default IssueChangeChanges;

