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
import ScreenTypeIDsBean from './ScreenTypeIDsBean';

/**
 * The ScreenScheme model module.
 * @module model/ScreenScheme
 * @version 1.4.0
 */
class ScreenScheme {
    /**
     * Constructs a new <code>ScreenScheme</code>.
     * A screen scheme.
     * @alias module:model/ScreenScheme
     */
    constructor() { 
        
        ScreenScheme.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScreenScheme} obj Optional instance to populate.
     * @return {module:model/ScreenScheme} The populated <code>ScreenScheme</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenScheme();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('screens')) {
                obj['screens'] = ApiClient.convertToType(data['screens'], ScreenTypeIDsBean);
            }
        }
        return obj;
    }


}

/**
 * The description of the screen scheme.
 * @member {String} description
 */
ScreenScheme.prototype['description'] = undefined;

/**
 * The ID of the screen scheme.
 * @member {Number} id
 */
ScreenScheme.prototype['id'] = undefined;

/**
 * The name of the screen scheme.
 * @member {String} name
 */
ScreenScheme.prototype['name'] = undefined;

/**
 * IDs of the screens for the associated screen types.
 * @member {module:model/ScreenTypeIDsBean} screens
 */
ScreenScheme.prototype['screens'] = undefined;






export default ScreenScheme;

