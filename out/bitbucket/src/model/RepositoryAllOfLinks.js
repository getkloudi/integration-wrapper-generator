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
 * The RepositoryAllOfLinks model module.
 * @module model/RepositoryAllOfLinks
 * @version 1.1.2
 */
class RepositoryAllOfLinks {
    /**
     * Constructs a new <code>RepositoryAllOfLinks</code>.
     * @alias module:model/RepositoryAllOfLinks
     */
    constructor() { 
        
        RepositoryAllOfLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RepositoryAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepositoryAllOfLinks} obj Optional instance to populate.
     * @return {module:model/RepositoryAllOfLinks} The populated <code>RepositoryAllOfLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RepositoryAllOfLinks();

            if (data.hasOwnProperty('self')) {
                obj['self'] = SubjectTypesRepositoryEvents.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = SubjectTypesRepositoryEvents.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = SubjectTypesRepositoryEvents.constructFromObject(data['avatar']);
            }
            if (data.hasOwnProperty('pullrequests')) {
                obj['pullrequests'] = SubjectTypesRepositoryEvents.constructFromObject(data['pullrequests']);
            }
            if (data.hasOwnProperty('commits')) {
                obj['commits'] = SubjectTypesRepositoryEvents.constructFromObject(data['commits']);
            }
            if (data.hasOwnProperty('forks')) {
                obj['forks'] = SubjectTypesRepositoryEvents.constructFromObject(data['forks']);
            }
            if (data.hasOwnProperty('watchers')) {
                obj['watchers'] = SubjectTypesRepositoryEvents.constructFromObject(data['watchers']);
            }
            if (data.hasOwnProperty('downloads')) {
                obj['downloads'] = SubjectTypesRepositoryEvents.constructFromObject(data['downloads']);
            }
            if (data.hasOwnProperty('clone')) {
                obj['clone'] = ApiClient.convertToType(data['clone'], [SubjectTypesRepositoryEvents]);
            }
            if (data.hasOwnProperty('hooks')) {
                obj['hooks'] = SubjectTypesRepositoryEvents.constructFromObject(data['hooks']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */
RepositoryAllOfLinks.prototype['self'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} html
 */
RepositoryAllOfLinks.prototype['html'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} avatar
 */
RepositoryAllOfLinks.prototype['avatar'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} pullrequests
 */
RepositoryAllOfLinks.prototype['pullrequests'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} commits
 */
RepositoryAllOfLinks.prototype['commits'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} forks
 */
RepositoryAllOfLinks.prototype['forks'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} watchers
 */
RepositoryAllOfLinks.prototype['watchers'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} downloads
 */
RepositoryAllOfLinks.prototype['downloads'] = undefined;

/**
 * @member {Array.<module:model/SubjectTypesRepositoryEvents>} clone
 */
RepositoryAllOfLinks.prototype['clone'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} hooks
 */
RepositoryAllOfLinks.prototype['hooks'] = undefined;






export default RepositoryAllOfLinks;

