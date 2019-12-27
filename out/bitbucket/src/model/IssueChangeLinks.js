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
 * The IssueChangeLinks model module.
 * @module model/IssueChangeLinks
 * @version 1.1.0
 */
class IssueChangeLinks {
    /**
     * Constructs a new <code>IssueChangeLinks</code>.
     * @alias module:model/IssueChangeLinks
     */
    constructor() { 
        
        IssueChangeLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueChangeLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueChangeLinks} obj Optional instance to populate.
     * @return {module:model/IssueChangeLinks} The populated <code>IssueChangeLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueChangeLinks();

            if (data.hasOwnProperty('self')) {
                obj['self'] = SubjectTypesRepositoryEvents.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('issue')) {
                obj['issue'] = SubjectTypesRepositoryEvents.constructFromObject(data['issue']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */
IssueChangeLinks.prototype['self'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} issue
 */
IssueChangeLinks.prototype['issue'] = undefined;






export default IssueChangeLinks;
