/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
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
import LabelBasic from './LabelBasic';

/**
 * The List model module.
 * @module model/List
 * @version 1.1.0
 */
class List {
    /**
     * Constructs a new <code>List</code>.
     * This feature was introduced in 8.13
     * @alias module:model/List
     */
    constructor() { 
        
        List.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>List</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/List} obj Optional instance to populate.
     * @return {module:model/List} The populated <code>List</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new List();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = LabelBasic.constructFromObject(data['label']);
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
List.prototype['id'] = undefined;

/**
 * @member {module:model/LabelBasic} label
 */
List.prototype['label'] = undefined;

/**
 * @member {String} position
 */
List.prototype['position'] = undefined;






export default List;

