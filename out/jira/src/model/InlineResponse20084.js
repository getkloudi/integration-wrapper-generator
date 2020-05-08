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
import CloudidRestApi3FilterIdPermissionRoleActors from './CloudidRestApi3FilterIdPermissionRoleActors';

/**
 * The InlineResponse20084 model module.
 * @module model/InlineResponse20084
 * @version 1.2.0
 */
class InlineResponse20084 {
    /**
     * Constructs a new <code>InlineResponse20084</code>.
     * 
     * @alias module:model/InlineResponse20084
     * @param actors {Array.<module:model/CloudidRestApi3FilterIdPermissionRoleActors>} 
     */
    constructor(actors) { 
        
        InlineResponse20084.initialize(this, actors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, actors) { 
        obj['actors'] = actors;
    }

    /**
     * Constructs a <code>InlineResponse20084</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20084} obj Optional instance to populate.
     * @return {module:model/InlineResponse20084} The populated <code>InlineResponse20084</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20084();

            if (data.hasOwnProperty('actors')) {
                obj['actors'] = ApiClient.convertToType(data['actors'], [CloudidRestApi3FilterIdPermissionRoleActors]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/CloudidRestApi3FilterIdPermissionRoleActors>} actors
 */
InlineResponse20084.prototype['actors'] = undefined;






export default InlineResponse20084;

