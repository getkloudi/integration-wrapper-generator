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

/**
 * The InlineObject12 model module.
 * @module model/InlineObject12
 * @version 1.2.0
 */
class InlineObject12 {
    /**
     * Constructs a new <code>InlineObject12</code>.
     * @alias module:model/InlineObject12
     */
    constructor() { 
        
        InlineObject12.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject12</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject12} obj Optional instance to populate.
     * @return {module:model/InlineObject12} The populated <code>InlineObject12</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject12();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], Object);
            }
            if (data.hasOwnProperty('sharePermissions')) {
                obj['sharePermissions'] = ApiClient.convertToType(data['sharePermissions'], [Object]);
            }
            if (data.hasOwnProperty('sharedUsers')) {
                obj['sharedUsers'] = ApiClient.convertToType(data['sharedUsers'], Object);
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], Object);
            }
        }
        return obj;
    }


}

/**
 * A description of the filter (e.g., This filter returns open bugs for the Example project).
 * @member {String} description
 */
InlineObject12.prototype['description'] = undefined;

/**
 * The name of the filter (e.g., Open bugs for Example project). Must be unique.
 * @member {String} name
 */
InlineObject12.prototype['name'] = undefined;

/**
 * A user.
 * @member {Object} owner
 */
InlineObject12.prototype['owner'] = undefined;

/**
 * The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter.
 * @member {Array.<Object>} sharePermissions
 */
InlineObject12.prototype['sharePermissions'] = undefined;

/**
 * @member {Object} sharedUsers
 */
InlineObject12.prototype['sharedUsers'] = undefined;

/**
 * @member {Object} subscriptions
 */
InlineObject12.prototype['subscriptions'] = undefined;






export default InlineObject12;

