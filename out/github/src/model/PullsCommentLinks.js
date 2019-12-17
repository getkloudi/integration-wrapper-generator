/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PullRequestLinksComments from './PullRequestLinksComments';

/**
 * The PullsCommentLinks model module.
 * @module model/PullsCommentLinks
 * @version 1.3.0
 */
class PullsCommentLinks {
    /**
     * Constructs a new <code>PullsCommentLinks</code>.
     * @alias module:model/PullsCommentLinks
     */
    constructor() { 
        
        PullsCommentLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PullsCommentLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullsCommentLinks} obj Optional instance to populate.
     * @return {module:model/PullsCommentLinks} The populated <code>PullsCommentLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullsCommentLinks();

            if (data.hasOwnProperty('html')) {
                obj['html'] = PullRequestLinksComments.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('pull_request')) {
                obj['pull_request'] = PullRequestLinksComments.constructFromObject(data['pull_request']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = PullRequestLinksComments.constructFromObject(data['self']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PullRequestLinksComments} html
 */
PullsCommentLinks.prototype['html'] = undefined;

/**
 * @member {module:model/PullRequestLinksComments} pull_request
 */
PullsCommentLinks.prototype['pull_request'] = undefined;

/**
 * @member {module:model/PullRequestLinksComments} self
 */
PullsCommentLinks.prototype['self'] = undefined;






export default PullsCommentLinks;

