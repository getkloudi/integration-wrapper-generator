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
import InlineResponse2004Author from './InlineResponse2004Author';

/**
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 1.1.0
 */
class InlineResponse2004 {
    /**
     * Constructs a new <code>InlineResponse2004</code>.
     * 
     * @alias module:model/InlineResponse2004
     * @param author {module:model/InlineResponse2004Author} 
     * @param content {String} 
     * @param created {String} 
     * @param filename {String} 
     * @param id {Number} 
     * @param mimeType {String} 
     * @param self {String} 
     * @param size {Number} 
     * @param thumbnail {String} 
     */
    constructor(author, content, created, filename, id, mimeType, self, size, thumbnail) { 
        
        InlineResponse2004.initialize(this, author, content, created, filename, id, mimeType, self, size, thumbnail);
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
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();

            if (data.hasOwnProperty('author')) {
                obj['author'] = InlineResponse2004Author.constructFromObject(data['author']);
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
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
 * @member {module:model/InlineResponse2004Author} author
 */
InlineResponse2004.prototype['author'] = undefined;

/**
 * @member {String} content
 */
InlineResponse2004.prototype['content'] = undefined;

/**
 * @member {String} created
 */
InlineResponse2004.prototype['created'] = undefined;

/**
 * @member {String} filename
 */
InlineResponse2004.prototype['filename'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse2004.prototype['id'] = undefined;

/**
 * @member {String} mimeType
 */
InlineResponse2004.prototype['mimeType'] = undefined;

/**
 * @member {String} self
 */
InlineResponse2004.prototype['self'] = undefined;

/**
 * @member {Number} size
 */
InlineResponse2004.prototype['size'] = undefined;

/**
 * @member {String} thumbnail
 */
InlineResponse2004.prototype['thumbnail'] = undefined;






export default InlineResponse2004;
