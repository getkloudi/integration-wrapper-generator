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
import Commit from './Commit';

/**
 * The CommitCommentAllOf model module.
 * @module model/CommitCommentAllOf
 * @version 1.2.0
 */
class CommitCommentAllOf {
    /**
     * Constructs a new <code>CommitCommentAllOf</code>.
     * A commit comment.
     * @alias module:model/CommitCommentAllOf
     */
    constructor() { 
        
        CommitCommentAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommitCommentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitCommentAllOf} obj Optional instance to populate.
     * @return {module:model/CommitCommentAllOf} The populated <code>CommitCommentAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommitCommentAllOf();

            if (data.hasOwnProperty('commit')) {
                obj['commit'] = Commit.constructFromObject(data['commit']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Commit} commit
 */
CommitCommentAllOf.prototype['commit'] = undefined;






export default CommitCommentAllOf;

