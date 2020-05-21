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
 * The CommentAllOfLinks model module.
 * @module model/CommentAllOfLinks
 * @version 1.2.0
 */
class CommentAllOfLinks {
    /**
     * Constructs a new <code>CommentAllOfLinks</code>.
     * @alias module:model/CommentAllOfLinks
     */
    constructor() { 
        
        CommentAllOfLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentAllOfLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentAllOfLinks} obj Optional instance to populate.
     * @return {module:model/CommentAllOfLinks} The populated <code>CommentAllOfLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentAllOfLinks();

            if (data.hasOwnProperty('self')) {
                obj['self'] = SubjectTypesRepositoryEvents.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = SubjectTypesRepositoryEvents.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = SubjectTypesRepositoryEvents.constructFromObject(data['code']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SubjectTypesRepositoryEvents} self
 */
CommentAllOfLinks.prototype['self'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} html
 */
CommentAllOfLinks.prototype['html'] = undefined;

/**
 * @member {module:model/SubjectTypesRepositoryEvents} code
 */
CommentAllOfLinks.prototype['code'] = undefined;






export default CommentAllOfLinks;

