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
import Pullrequest from './Pullrequest';
import PullrequestAllOfRenderedTitle from './PullrequestAllOfRenderedTitle';
import PullrequestCommentAllOf from './PullrequestCommentAllOf';
import User from './User';

/**
 * The PullrequestComment model module.
 * @module model/PullrequestComment
 * @version 1.2.0
 */
class PullrequestComment {
    /**
     * Constructs a new <code>PullrequestComment</code>.
     * @alias module:model/PullrequestComment
     * @implements module:model/Comment
     * @implements module:model/PullrequestCommentAllOf
     * @param type {String} 
     */
    constructor(type) { 
        Comment.initialize(this, type);PullrequestCommentAllOf.initialize(this);
        PullrequestComment.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>PullrequestComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestComment} obj Optional instance to populate.
     * @return {module:model/PullrequestComment} The populated <code>PullrequestComment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullrequestComment();
            Comment.constructFromObject(data, obj);
            PullrequestCommentAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
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
            if (data.hasOwnProperty('pullrequest')) {
                obj['pullrequest'] = Pullrequest.constructFromObject(data['pullrequest']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
PullrequestComment.prototype['type'] = undefined;

/**
 * @member {Number} id
 */
PullrequestComment.prototype['id'] = undefined;

/**
 * @member {Date} created_on
 */
PullrequestComment.prototype['created_on'] = undefined;

/**
 * @member {Date} updated_on
 */
PullrequestComment.prototype['updated_on'] = undefined;

/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */
PullrequestComment.prototype['content'] = undefined;

/**
 * @member {module:model/User} user
 */
PullrequestComment.prototype['user'] = undefined;

/**
 * @member {Boolean} deleted
 */
PullrequestComment.prototype['deleted'] = undefined;

/**
 * @member {module:model/Comment} parent
 */
PullrequestComment.prototype['parent'] = undefined;

/**
 * @member {module:model/CommentAllOfInline} inline
 */
PullrequestComment.prototype['inline'] = undefined;

/**
 * @member {module:model/CommentAllOfLinks} links
 */
PullrequestComment.prototype['links'] = undefined;

/**
 * @member {module:model/Pullrequest} pullrequest
 */
PullrequestComment.prototype['pullrequest'] = undefined;


// Implement Comment interface:
/**
 * @member {String} type
 */
Comment.prototype['type'] = undefined;
/**
 * @member {Number} id
 */
Comment.prototype['id'] = undefined;
/**
 * @member {Date} created_on
 */
Comment.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */
Comment.prototype['updated_on'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */
Comment.prototype['content'] = undefined;
/**
 * @member {module:model/User} user
 */
Comment.prototype['user'] = undefined;
/**
 * @member {Boolean} deleted
 */
Comment.prototype['deleted'] = undefined;
/**
 * @member {module:model/Comment} parent
 */
Comment.prototype['parent'] = undefined;
/**
 * @member {module:model/CommentAllOfInline} inline
 */
Comment.prototype['inline'] = undefined;
/**
 * @member {module:model/CommentAllOfLinks} links
 */
Comment.prototype['links'] = undefined;
// Implement PullrequestCommentAllOf interface:
/**
 * @member {module:model/Pullrequest} pullrequest
 */
PullrequestCommentAllOf.prototype['pullrequest'] = undefined;




export default PullrequestComment;

