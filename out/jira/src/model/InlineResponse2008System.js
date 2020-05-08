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
import InlineResponse2004AuthorAvatarUrls from './InlineResponse2004AuthorAvatarUrls';

/**
 * The InlineResponse2008System model module.
 * @module model/InlineResponse2008System
 * @version 1.1.0
 */
class InlineResponse2008System {
    /**
     * Constructs a new <code>InlineResponse2008System</code>.
     * @alias module:model/InlineResponse2008System
     * @param id {String} 
     * @param isDeletable {Boolean} 
     * @param isSelected {Boolean} 
     * @param isSystemAvatar {Boolean} 
     */
    constructor(id, isDeletable, isSelected, isSystemAvatar) { 
        
        InlineResponse2008System.initialize(this, id, isDeletable, isSelected, isSystemAvatar);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, isDeletable, isSelected, isSystemAvatar) { 
        obj['id'] = id;
        obj['isDeletable'] = isDeletable;
        obj['isSelected'] = isSelected;
        obj['isSystemAvatar'] = isSystemAvatar;
    }

    /**
     * Constructs a <code>InlineResponse2008System</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008System} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008System} The populated <code>InlineResponse2008System</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008System();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isDeletable')) {
                obj['isDeletable'] = ApiClient.convertToType(data['isDeletable'], 'Boolean');
            }
            if (data.hasOwnProperty('isSelected')) {
                obj['isSelected'] = ApiClient.convertToType(data['isSelected'], 'Boolean');
            }
            if (data.hasOwnProperty('isSystemAvatar')) {
                obj['isSystemAvatar'] = ApiClient.convertToType(data['isSystemAvatar'], 'Boolean');
            }
            if (data.hasOwnProperty('urls')) {
                obj['urls'] = InlineResponse2004AuthorAvatarUrls.constructFromObject(data['urls']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse2008System.prototype['id'] = undefined;

/**
 * @member {Boolean} isDeletable
 */
InlineResponse2008System.prototype['isDeletable'] = undefined;

/**
 * @member {Boolean} isSelected
 */
InlineResponse2008System.prototype['isSelected'] = undefined;

/**
 * @member {Boolean} isSystemAvatar
 */
InlineResponse2008System.prototype['isSystemAvatar'] = undefined;

/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} urls
 */
InlineResponse2008System.prototype['urls'] = undefined;






export default InlineResponse2008System;

