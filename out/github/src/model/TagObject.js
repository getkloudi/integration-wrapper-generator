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

/**
 * The TagObject model module.
 * @module model/TagObject
 * @version 1.3.1
 */
class TagObject {
    /**
     * Constructs a new <code>TagObject</code>.
     * @alias module:model/TagObject
     */
    constructor() { 
        
        TagObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TagObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagObject} obj Optional instance to populate.
     * @return {module:model/TagObject} The populated <code>TagObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagObject();

            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} sha
 */
TagObject.prototype['sha'] = undefined;

/**
 * String of the type of the tagged object. Normally this is a commit but it can also be a tree or a blob.
 * @member {Object} type
 */
TagObject.prototype['type'] = undefined;

/**
 * @member {String} url
 */
TagObject.prototype['url'] = undefined;






export default TagObject;

