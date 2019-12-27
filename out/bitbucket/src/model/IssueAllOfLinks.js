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
import SubjectTypesRepositoryEvents from './SubjectTypesRepositoryEvents';

/**
 * The IssueAllOfLinks model module.
 * @module model/IssueAllOfLinks
 * @version 1.1.0
 */
class IssueAllOfLinks {
    /**
     * Constructs a new <code>IssueAllOfLinks</code>.
     * @alias module:model/IssueAllOfLinks
     */
    constructor() { 
        
        IssueAllOfLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueAllOfLinks} obj Optional instance to populate.
     * @return {module:model/IssueAllOfLinks} The populated <code>IssueAllOfLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueAllOfLinks();

            if (data.hasOwnProperty('self')) {
                obj['self'] = SubjectTypesRepositoryEvents.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = SubjectTypesRepositoryEvents.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = SubjectTypesRepositoryEvents.constructFromObject(data['comments']);
            }
            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = SubjectTypesRepositoryEvents.constructFromObject(data['attachments']);
            }
            if (data.hasOwnProperty('watch')) {
                obj['watch'] = SubjectTypesRepositoryEvents.constructFromObject(data['watch']);
            }
            if (data.hasOwnProperty('vote')) {
                obj['vote'] = SubjectTypesRepositoryEvents.constructFromObject(data['vote']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */
IssueAllOfLinks.prototype['self'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} html
 */
IssueAllOfLinks.prototype['html'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} comments
 */
IssueAllOfLinks.prototype['comments'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} attachments
 */
IssueAllOfLinks.prototype['attachments'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} watch
 */
IssueAllOfLinks.prototype['watch'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} vote
 */
IssueAllOfLinks.prototype['vote'] = undefined;






export default IssueAllOfLinks;

