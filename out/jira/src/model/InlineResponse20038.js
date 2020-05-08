/**
 * Jira
 * The Jira Cloud Platform REST API
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
import IssueIssueIdOrKeyAttachmentsAuthor from './IssueIssueIdOrKeyAttachmentsAuthor';

/**
 * The InlineResponse20038 model module.
 * @module model/InlineResponse20038
 * @version 1.3.0
 */
class InlineResponse20038 {
    /**
     * Constructs a new <code>InlineResponse20038</code>.
     * @alias module:model/InlineResponse20038
     * @param author {module:model/IssueIssueIdOrKeyAttachmentsAuthor} 
     * @param content {String} 
     * @param created {String} 
     * @param filename {String} 
     * @param id {String} 
     * @param mimeType {String} 
     * @param self {String} 
     * @param size {Number} 
     * @param thumbnail {String} 
     */
    constructor(author, content, created, filename, id, mimeType, self, size, thumbnail) { 
        
        InlineResponse20038.initialize(this, author, content, created, filename, id, mimeType, self, size, thumbnail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, author, content, created, filename, id, mimeType, self, size, thumbnail) { 
        obj['author'] = author;
        obj['content'] = content;
        obj['created'] = created;
        obj['filename'] = filename;
        obj['id'] = id;
        obj['mimeType'] = mimeType;
        obj['self'] = self;
        obj['size'] = size;
        obj['thumbnail'] = thumbnail;
    }

    /**
     * Constructs a <code>InlineResponse20038</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20038} obj Optional instance to populate.
     * @return {module:model/InlineResponse20038} The populated <code>InlineResponse20038</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20038();

            if (data.hasOwnProperty('author')) {
                obj['author'] = IssueIssueIdOrKeyAttachmentsAuthor.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('mimeType')) {
                obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('thumbnail')) {
                obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/IssueIssueIdOrKeyAttachmentsAuthor} author
 */
InlineResponse20038.prototype['author'] = undefined;

/**
 * @member {String} content
 */
InlineResponse20038.prototype['content'] = undefined;

/**
 * @member {String} created
 */
InlineResponse20038.prototype['created'] = undefined;

/**
 * @member {String} filename
 */
InlineResponse20038.prototype['filename'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20038.prototype['id'] = undefined;

/**
 * @member {String} mimeType
 */
InlineResponse20038.prototype['mimeType'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20038.prototype['self'] = undefined;

/**
 * @member {Number} size
 */
InlineResponse20038.prototype['size'] = undefined;

/**
 * @member {String} thumbnail
 */
InlineResponse20038.prototype['thumbnail'] = undefined;






export default InlineResponse20038;

