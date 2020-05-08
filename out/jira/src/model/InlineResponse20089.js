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
import InlineResponse20045ToStatusCategory from './InlineResponse20045ToStatusCategory';

/**
 * The InlineResponse20089 model module.
 * @module model/InlineResponse20089
 * @version 1.3.1
 */
class InlineResponse20089 {
    /**
     * Constructs a new <code>InlineResponse20089</code>.
     * 
     * @alias module:model/InlineResponse20089
     * @param description {String} 
     * @param iconUrl {String} 
     * @param id {String} 
     * @param name {String} 
     * @param self {String} 
     * @param statusCategory {module:model/InlineResponse20045ToStatusCategory} 
     */
    constructor(description, iconUrl, id, name, self, statusCategory) { 
        
        InlineResponse20089.initialize(this, description, iconUrl, id, name, self, statusCategory);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, iconUrl, id, name, self, statusCategory) { 
        obj['description'] = description;
        obj['iconUrl'] = iconUrl;
        obj['id'] = id;
        obj['name'] = name;
        obj['self'] = self;
        obj['statusCategory'] = statusCategory;
    }

    /**
     * Constructs a <code>InlineResponse20089</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20089} obj Optional instance to populate.
     * @return {module:model/InlineResponse20089} The populated <code>InlineResponse20089</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20089();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('statusCategory')) {
                obj['statusCategory'] = InlineResponse20045ToStatusCategory.constructFromObject(data['statusCategory']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
InlineResponse20089.prototype['description'] = undefined;

/**
 * @member {String} iconUrl
 */
InlineResponse20089.prototype['iconUrl'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20089.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20089.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20089.prototype['self'] = undefined;

/**
 * @member {module:model/InlineResponse20045ToStatusCategory} statusCategory
 */
InlineResponse20089.prototype['statusCategory'] = undefined;






export default InlineResponse20089;

