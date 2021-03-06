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

/**
 * The MoveFieldBean model module.
 * @module model/MoveFieldBean
 * @version 1.4.0
 */
class MoveFieldBean {
    /**
     * Constructs a new <code>MoveFieldBean</code>.
     * @alias module:model/MoveFieldBean
     */
    constructor() { 
        
        MoveFieldBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MoveFieldBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MoveFieldBean} obj Optional instance to populate.
     * @return {module:model/MoveFieldBean} The populated <code>MoveFieldBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MoveFieldBean();

            if (data.hasOwnProperty('after')) {
                obj['after'] = ApiClient.convertToType(data['after'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the screen tab field after which to place the moved screen tab field. Required if `position` isn't provided.
 * @member {String} after
 */
MoveFieldBean.prototype['after'] = undefined;

/**
 * The named position to which the screen tab field should be moved. Required if `after` isn't provided.
 * @member {module:model/MoveFieldBean.PositionEnum} position
 */
MoveFieldBean.prototype['position'] = undefined;





/**
 * Allowed values for the <code>position</code> property.
 * @enum {String}
 * @readonly
 */
MoveFieldBean['PositionEnum'] = {

    /**
     * value: "Earlier"
     * @const
     */
    "Earlier": "Earlier",

    /**
     * value: "Later"
     * @const
     */
    "Later": "Later",

    /**
     * value: "First"
     * @const
     */
    "First": "First",

    /**
     * value: "Last"
     * @const
     */
    "Last": "Last"
};



export default MoveFieldBean;

