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
import InlineResponse2018Holder from './InlineResponse2018Holder';

/**
 * The InlineResponse2019 model module.
 * @module model/InlineResponse2019
 * @version 1.2.0
 */
class InlineResponse2019 {
    /**
     * Constructs a new <code>InlineResponse2019</code>.
     * 
     * @alias module:model/InlineResponse2019
     * @param holder {module:model/InlineResponse2018Holder} 
     * @param id {Number} 
     * @param permission {String} 
     * @param self {String} 
     */
    constructor(holder, id, permission, self) { 
        
        InlineResponse2019.initialize(this, holder, id, permission, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, holder, id, permission, self) { 
        obj['holder'] = holder;
        obj['id'] = id;
        obj['permission'] = permission;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse2019</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2019} obj Optional instance to populate.
     * @return {module:model/InlineResponse2019} The populated <code>InlineResponse2019</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2019();

            if (data.hasOwnProperty('holder')) {
                obj['holder'] = InlineResponse2018Holder.constructFromObject(data['holder']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2018Holder} holder
 */
InlineResponse2019.prototype['holder'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse2019.prototype['id'] = undefined;

/**
 * @member {String} permission
 */
InlineResponse2019.prototype['permission'] = undefined;

/**
 * @member {String} self
 */
InlineResponse2019.prototype['self'] = undefined;






export default InlineResponse2019;

