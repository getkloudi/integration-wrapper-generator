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
import InlineResponse20036Issuetypes from './InlineResponse20036Issuetypes';
import InlineResponse2004AuthorAvatarUrls from './InlineResponse2004AuthorAvatarUrls';

/**
 * The InlineResponse20036Projects model module.
 * @module model/InlineResponse20036Projects
 * @version 1.3.0
 */
class InlineResponse20036Projects {
    /**
     * Constructs a new <code>InlineResponse20036Projects</code>.
     * @alias module:model/InlineResponse20036Projects
     * @param id {String} 
     * @param key {String} 
     * @param name {String} 
     * @param self {String} 
     */
    constructor(id, key, name, self) { 
        
        InlineResponse20036Projects.initialize(this, id, key, name, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, key, name, self) { 
        obj['id'] = id;
        obj['key'] = key;
        obj['name'] = name;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20036Projects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20036Projects} obj Optional instance to populate.
     * @return {module:model/InlineResponse20036Projects} The populated <code>InlineResponse20036Projects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20036Projects();

            if (data.hasOwnProperty('avatarUrls')) {
                obj['avatarUrls'] = InlineResponse2004AuthorAvatarUrls.constructFromObject(data['avatarUrls']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('issuetypes')) {
                obj['issuetypes'] = ApiClient.convertToType(data['issuetypes'], [InlineResponse20036Issuetypes]);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */
InlineResponse20036Projects.prototype['avatarUrls'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20036Projects.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20036Issuetypes>} issuetypes
 */
InlineResponse20036Projects.prototype['issuetypes'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20036Projects.prototype['key'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20036Projects.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20036Projects.prototype['self'] = undefined;






export default InlineResponse20036Projects;

