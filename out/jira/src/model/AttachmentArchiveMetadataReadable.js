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
import AttachmentArchiveItemReadable from './AttachmentArchiveItemReadable';

/**
 * The AttachmentArchiveMetadataReadable model module.
 * @module model/AttachmentArchiveMetadataReadable
 * @version 1.4.0
 */
class AttachmentArchiveMetadataReadable {
    /**
     * Constructs a new <code>AttachmentArchiveMetadataReadable</code>.
     * Metadata for an archive (for example a zip) and its contents.
     * @alias module:model/AttachmentArchiveMetadataReadable
     */
    constructor() { 
        
        AttachmentArchiveMetadataReadable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentArchiveMetadataReadable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentArchiveMetadataReadable} obj Optional instance to populate.
     * @return {module:model/AttachmentArchiveMetadataReadable} The populated <code>AttachmentArchiveMetadataReadable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentArchiveMetadataReadable();

            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], [AttachmentArchiveItemReadable]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('totalEntryCount')) {
                obj['totalEntryCount'] = ApiClient.convertToType(data['totalEntryCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The list of the items included in the archive.
 * @member {Array.<module:model/AttachmentArchiveItemReadable>} entries
 */
AttachmentArchiveMetadataReadable.prototype['entries'] = undefined;

/**
 * The ID of the attachment.
 * @member {Number} id
 */
AttachmentArchiveMetadataReadable.prototype['id'] = undefined;

/**
 * The MIME type of the attachment.
 * @member {String} mediaType
 */
AttachmentArchiveMetadataReadable.prototype['mediaType'] = undefined;

/**
 * The name of the archive file.
 * @member {String} name
 */
AttachmentArchiveMetadataReadable.prototype['name'] = undefined;

/**
 * The number of items included in the archive.
 * @member {Number} totalEntryCount
 */
AttachmentArchiveMetadataReadable.prototype['totalEntryCount'] = undefined;






export default AttachmentArchiveMetadataReadable;

