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
 * The InlineResponse20037FieldsAttachment model module.
 * @module model/InlineResponse20037FieldsAttachment
 * @version 1.1.0
 */
class InlineResponse20037FieldsAttachment {
    /**
     * Constructs a new <code>InlineResponse20037FieldsAttachment</code>.
     * @alias module:model/InlineResponse20037FieldsAttachment
     * @param content {String} 
     * @param created {String} 
     * @param filename {String} 
     * @param id {Number} 
     * @param mimeType {String} 
     * @param self {String} 
     * @param size {Number} 
     * @param thumbnail {String} 
     */
    constructor(content, created, filename, id, mimeType, self, size, thumbnail) { 
        
        InlineResponse20037FieldsAttachment.initialize(this, content, created, filename, id, mimeType, self, size, thumbnail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content, created, filename, id, mimeType, self, size, thumbnail) { 
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
     * Constructs a <code>InlineResponse20037FieldsAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsAttachment} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsAttachment} The populated <code>InlineResponse20037FieldsAttachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20037FieldsAttachment();

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
InlineResponse20037FieldsAttachment.prototype['author'] = undefined;

/**
 * @member {String} content
 */
InlineResponse20037FieldsAttachment.prototype['content'] = undefined;

/**
 * @member {String} created
 */
InlineResponse20037FieldsAttachment.prototype['created'] = undefined;

/**
 * @member {String} filename
 */
InlineResponse20037FieldsAttachment.prototype['filename'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20037FieldsAttachment.prototype['id'] = undefined;

/**
 * @member {String} mimeType
 */
InlineResponse20037FieldsAttachment.prototype['mimeType'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20037FieldsAttachment.prototype['self'] = undefined;

/**
 * @member {Number} size
 */
InlineResponse20037FieldsAttachment.prototype['size'] = undefined;

/**
 * @member {String} thumbnail
 */
InlineResponse20037FieldsAttachment.prototype['thumbnail'] = undefined;






export default InlineResponse20037FieldsAttachment;
