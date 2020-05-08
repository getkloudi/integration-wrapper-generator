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
import CloudidRestApi3FilterIdPermissionProjectProjectCategory from './CloudidRestApi3FilterIdPermissionProjectProjectCategory';
import InlineResponse2004AuthorAvatarUrls from './InlineResponse2004AuthorAvatarUrls';

/**
 * The InlineResponse20068Values model module.
 * @module model/InlineResponse20068Values
 * @version 1.1.0
 */
class InlineResponse20068Values {
    /**
     * Constructs a new <code>InlineResponse20068Values</code>.
     * @alias module:model/InlineResponse20068Values
     * @param id {String} 
     * @param key {String} 
     * @param name {String} 
     * @param self {String} 
     * @param simplified {Boolean} 
     * @param style {String} 
     */
    constructor(id, key, name, self, simplified, style) { 
        
        InlineResponse20068Values.initialize(this, id, key, name, self, simplified, style);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, key, name, self, simplified, style) { 
        obj['id'] = id;
        obj['key'] = key;
        obj['name'] = name;
        obj['self'] = self;
        obj['simplified'] = simplified;
        obj['style'] = style;
    }

    /**
     * Constructs a <code>InlineResponse20068Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20068Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20068Values} The populated <code>InlineResponse20068Values</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20068Values();

            if (data.hasOwnProperty('avatarUrls')) {
                obj['avatarUrls'] = InlineResponse2004AuthorAvatarUrls.constructFromObject(data['avatarUrls']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('projectCategory')) {
                obj['projectCategory'] = CloudidRestApi3FilterIdPermissionProjectProjectCategory.constructFromObject(data['projectCategory']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('simplified')) {
                obj['simplified'] = ApiClient.convertToType(data['simplified'], 'Boolean');
            }
            if (data.hasOwnProperty('style')) {
                obj['style'] = ApiClient.convertToType(data['style'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */
InlineResponse20068Values.prototype['avatarUrls'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20068Values.prototype['id'] = undefined;

/**
 * @member {String} key
 */
InlineResponse20068Values.prototype['key'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20068Values.prototype['name'] = undefined;

/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory} projectCategory
 */
InlineResponse20068Values.prototype['projectCategory'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20068Values.prototype['self'] = undefined;

/**
 * @member {Boolean} simplified
 */
InlineResponse20068Values.prototype['simplified'] = undefined;

/**
 * @member {String} style
 */
InlineResponse20068Values.prototype['style'] = undefined;






export default InlineResponse20068Values;

