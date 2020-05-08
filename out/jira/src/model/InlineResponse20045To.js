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
 * The InlineResponse20045To model module.
 * @module model/InlineResponse20045To
 * @version 1.1.0
 */
class InlineResponse20045To {
    /**
     * Constructs a new <code>InlineResponse20045To</code>.
     * @alias module:model/InlineResponse20045To
     * @param description {String} 
     * @param iconUrl {String} 
     * @param id {String} 
     * @param name {String} 
     * @param self {String} 
     * @param statusCategory {module:model/InlineResponse20045ToStatusCategory} 
     */
    constructor(description, iconUrl, id, name, self, statusCategory) { 
        
        InlineResponse20045To.initialize(this, description, iconUrl, id, name, self, statusCategory);
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
     * Constructs a <code>InlineResponse20045To</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20045To} obj Optional instance to populate.
     * @return {module:model/InlineResponse20045To} The populated <code>InlineResponse20045To</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20045To();

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
InlineResponse20045To.prototype['description'] = undefined;

/**
 * @member {String} iconUrl
 */
InlineResponse20045To.prototype['iconUrl'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20045To.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20045To.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20045To.prototype['self'] = undefined;

/**
 * @member {module:model/InlineResponse20045ToStatusCategory} statusCategory
 */
InlineResponse20045To.prototype['statusCategory'] = undefined;






export default InlineResponse20045To;

