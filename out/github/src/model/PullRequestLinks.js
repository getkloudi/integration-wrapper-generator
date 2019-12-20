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
 * The PullRequestLinks model module.
 * @module model/PullRequestLinks
 * @version 1.3.1
 */
class PullRequestLinks {
    /**
     * Constructs a new <code>PullRequestLinks</code>.
     * @alias module:model/PullRequestLinks
     */
    constructor() { 
        
        PullRequestLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PullRequestLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequestLinks} obj Optional instance to populate.
     * @return {module:model/PullRequestLinks} The populated <code>PullRequestLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullRequestLinks();

            if (data.hasOwnProperty('comments')) {
                obj['comments'] = PullRequestLinksComments.constructFromObject(data['comments']);
            }
            if (data.hasOwnProperty('html')) {
                obj['html'] = PullRequestLinksComments.constructFromObject(data['html']);
            }
            if (data.hasOwnProperty('review_comments')) {
                obj['review_comments'] = PullRequestLinksComments.constructFromObject(data['review_comments']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = PullRequestLinksComments.constructFromObject(data['self']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PullRequestLinksComments} comments
 */
PullRequestLinks.prototype['comments'] = undefined;

/**
 * @member {module:model/PullRequestLinksComments} html
 */
PullRequestLinks.prototype['html'] = undefined;

/**
 * @member {module:model/PullRequestLinksComments} review_comments
 */
PullRequestLinks.prototype['review_comments'] = undefined;

/**
 * @member {module:model/PullRequestLinksComments} self
 */
PullRequestLinks.prototype['self'] = undefined;






export default PullRequestLinks;

