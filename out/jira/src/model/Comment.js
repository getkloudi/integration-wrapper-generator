/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntityProperty from './EntityProperty';
import UserDetails from './UserDetails';
import Visibility from './Visibility';

/**
 * The Comment model module.
 * @module model/Comment
 * @version 1.4.0
 */
class Comment {
    /**
     * Constructs a new <code>Comment</code>.
     * A comment.
     * @alias module:model/Comment
     */
    constructor() { 
        
        Comment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Comment} obj Optional instance to populate.
     * @return {module:model/Comment} The populated <code>Comment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Comment();

            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], UserDetails);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], Object);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('jsdPublic')) {
                obj['jsdPublic'] = ApiClient.convertToType(data['jsdPublic'], 'Boolean');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [EntityProperty]);
            }
            if (data.hasOwnProperty('renderedBody')) {
                obj['renderedBody'] = ApiClient.convertToType(data['renderedBody'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('updateAuthor')) {
                obj['updateAuthor'] = ApiClient.convertToType(data['updateAuthor'], UserDetails);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], Visibility);
            }
        }
        return obj;
    }


}

/**
 * The ID of the user who created the comment.
 * @member {module:model/UserDetails} author
 */
Comment.prototype['author'] = undefined;

/**
 * The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/).
 * @member {Object} body
 */
Comment.prototype['body'] = undefined;

/**
 * The date and time at which the comment was created.
 * @member {Date} created
 */
Comment.prototype['created'] = undefined;

/**
 * The ID of the comment.
 * @member {String} id
 */
Comment.prototype['id'] = undefined;

/**
 * Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation.
 * @member {Boolean} jsdPublic
 */
Comment.prototype['jsdPublic'] = undefined;

/**
 * A list of comment properties. Optional on create and update.
 * @member {Array.<module:model/EntityProperty>} properties
 */
Comment.prototype['properties'] = undefined;

/**
 * The rendered version of the comment.
 * @member {String} renderedBody
 */
Comment.prototype['renderedBody'] = undefined;

/**
 * The URL of the comment.
 * @member {String} self
 */
Comment.prototype['self'] = undefined;

/**
 * The ID of the user who updated the comment last.
 * @member {module:model/UserDetails} updateAuthor
 */
Comment.prototype['updateAuthor'] = undefined;

/**
 * The date and time at which the comment was updated last.
 * @member {Date} updated
 */
Comment.prototype['updated'] = undefined;

/**
 * The group or role to which this comment is visible. Optional on create and update.
 * @member {module:model/Visibility} visibility
 */
Comment.prototype['visibility'] = undefined;






export default Comment;

