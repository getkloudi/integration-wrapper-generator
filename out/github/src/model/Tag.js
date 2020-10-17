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
import TagObject from './TagObject';
import TagTagger from './TagTagger';

/**
 * The Tag model module.
 * @module model/Tag
 * @version 1.4.5
 */
class Tag {
    /**
     * Constructs a new <code>Tag</code>.
     * @alias module:model/Tag
     */
    constructor() { 
        
        Tag.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tag} obj Optional instance to populate.
     * @return {module:model/Tag} The populated <code>Tag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tag();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = TagObject.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('tagger')) {
                obj['tagger'] = TagTagger.constructFromObject(data['tagger']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * String of the tag message.
 * @member {String} message
 */
Tag.prototype['message'] = undefined;

/**
 * @member {module:model/TagObject} object
 */
Tag.prototype['object'] = undefined;

/**
 * @member {String} sha
 */
Tag.prototype['sha'] = undefined;

/**
 * The tag's name. This is typically a version (e.g., \"v0.0.1\").
 * @member {String} tag
 */
Tag.prototype['tag'] = undefined;

/**
 * @member {module:model/TagTagger} tagger
 */
Tag.prototype['tagger'] = undefined;

/**
 * @member {String} url
 */
Tag.prototype['url'] = undefined;






export default Tag;

