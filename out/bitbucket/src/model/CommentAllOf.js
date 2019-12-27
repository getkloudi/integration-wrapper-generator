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
import Comment from './Comment';
import CommentAllOfInline from './CommentAllOfInline';
import CommentAllOfLinks from './CommentAllOfLinks';
import PullrequestAllOfRenderedTitle from './PullrequestAllOfRenderedTitle';
import User from './User';

/**
 * The CommentAllOf model module.
 * @module model/CommentAllOf
 * @version 1.1.0
 */
class CommentAllOf {
    /**
     * Constructs a new <code>CommentAllOf</code>.
     * The base type for all comments. This type should be considered abstract. Each of the \&quot;commentable\&quot; resources defines its own subtypes (e.g. &#x60;issue_comment&#x60;).
     * @alias module:model/CommentAllOf
     */
    constructor() { 
        
        CommentAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentAllOf} obj Optional instance to populate.
     * @return {module:model/CommentAllOf} The populated <code>CommentAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommentAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = PullrequestAllOfRenderedTitle.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = Comment.constructFromObject(data['parent']);
            }
            if (data.hasOwnProperty('inline')) {
                obj['inline'] = CommentAllOfInline.constructFromObject(data['inline']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CommentAllOfLinks.constructFromObject(data['links']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
CommentAllOf.prototype['id'] = undefined;

/**
 * @member {Date} created_on
 */
CommentAllOf.prototype['created_on'] = undefined;

/**
 * @member {Date} updated_on
 */
CommentAllOf.prototype['updated_on'] = undefined;

/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */
CommentAllOf.prototype['content'] = undefined;

/**
 * @member {module:model/User} user
 */
CommentAllOf.prototype['user'] = undefined;

/**
 * @member {Boolean} deleted
 */
CommentAllOf.prototype['deleted'] = undefined;

/**
 * @member {module:model/Comment} parent
 */
CommentAllOf.prototype['parent'] = undefined;

/**
 * @member {module:model/CommentAllOfInline} inline
 */
CommentAllOf.prototype['inline'] = undefined;

/**
 * @member {module:model/CommentAllOfLinks} links
 */
CommentAllOf.prototype['links'] = undefined;






export default CommentAllOf;
