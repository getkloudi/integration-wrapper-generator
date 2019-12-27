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
 * The PullrequestAllOfLinks model module.
 * @module model/PullrequestAllOfLinks
 * @version 1.1.2
 */
class PullrequestAllOfLinks {
    /**
     * Constructs a new <code>PullrequestAllOfLinks</code>.
     * @alias module:model/PullrequestAllOfLinks
     */
    constructor() { 
        
        PullrequestAllOfLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PullrequestAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestAllOfLinks} obj Optional instance to populate.
     * @return {module:model/PullrequestAllOfLinks} The populated <code>PullrequestAllOfLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullrequestAllOfLinks();

            if (data.hasOwnProperty('self')) {
                obj['self'] = SubjectTypesRepositoryEvents.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = SubjectTypesRepositoryEvents.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('commits')) {
                obj['commits'] = SubjectTypesRepositoryEvents.constructFromObject(data['commits']);
            }
            if (data.hasOwnProperty('approve')) {
                obj['approve'] = SubjectTypesRepositoryEvents.constructFromObject(data['approve']);
            }
            if (data.hasOwnProperty('diff')) {
                obj['diff'] = SubjectTypesRepositoryEvents.constructFromObject(data['diff']);
            }
            if (data.hasOwnProperty('diffstat')) {
                obj['diffstat'] = SubjectTypesRepositoryEvents.constructFromObject(data['diffstat']);
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = SubjectTypesRepositoryEvents.constructFromObject(data['comments']);
            }
            if (data.hasOwnProperty('activity')) {
                obj['activity'] = SubjectTypesRepositoryEvents.constructFromObject(data['activity']);
            }
            if (data.hasOwnProperty('merge')) {
                obj['merge'] = SubjectTypesRepositoryEvents.constructFromObject(data['merge']);
            }
            if (data.hasOwnProperty('decline')) {
                obj['decline'] = SubjectTypesRepositoryEvents.constructFromObject(data['decline']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */
PullrequestAllOfLinks.prototype['self'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} html
 */
PullrequestAllOfLinks.prototype['html'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} commits
 */
PullrequestAllOfLinks.prototype['commits'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} approve
 */
PullrequestAllOfLinks.prototype['approve'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} diff
 */
PullrequestAllOfLinks.prototype['diff'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} diffstat
 */
PullrequestAllOfLinks.prototype['diffstat'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} comments
 */
PullrequestAllOfLinks.prototype['comments'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} activity
 */
PullrequestAllOfLinks.prototype['activity'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} merge
 */
PullrequestAllOfLinks.prototype['merge'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} decline
 */
PullrequestAllOfLinks.prototype['decline'] = undefined;






export default PullrequestAllOfLinks;

