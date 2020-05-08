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
import InlineResponse20018Group from './InlineResponse20018Group';

/**
 * The InlineResponse20018SharePermissions model module.
 * @module model/InlineResponse20018SharePermissions
 * @version 1.3.1
 */
class InlineResponse20018SharePermissions {
    /**
     * Constructs a new <code>InlineResponse20018SharePermissions</code>.
     * @alias module:model/InlineResponse20018SharePermissions
     * @param id {Number} 
     * @param type {String} 
     */
    constructor(id, type) { 
        
        InlineResponse20018SharePermissions.initialize(this, id, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type) { 
        obj['id'] = id;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>InlineResponse20018SharePermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018SharePermissions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018SharePermissions} The populated <code>InlineResponse20018SharePermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20018SharePermissions();

            if (data.hasOwnProperty('group')) {
                obj['group'] = InlineResponse20018Group.constructFromObject(data['group']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20018Group} group
 */
InlineResponse20018SharePermissions.prototype['group'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20018SharePermissions.prototype['id'] = undefined;

/**
 * @member {String} type
 */
InlineResponse20018SharePermissions.prototype['type'] = undefined;






export default InlineResponse20018SharePermissions;

