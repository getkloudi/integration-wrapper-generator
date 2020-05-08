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
 * The InlineResponse2009Author model module.
 * @module model/InlineResponse2009Author
 * @version 1.3.0
 */
class InlineResponse2009Author {
    /**
     * Constructs a new <code>InlineResponse2009Author</code>.
     * @alias module:model/InlineResponse2009Author
     * @param active {Boolean} 
     * @param displayName {String} 
     * @param name {String} 
     * @param self {String} 
     */
    constructor(active, displayName, name, self) { 
        
        InlineResponse2009Author.initialize(this, active, displayName, name, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, active, displayName, name, self) { 
        obj['active'] = active;
        obj['displayName'] = displayName;
        obj['name'] = name;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse2009Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009Author} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009Author} The populated <code>InlineResponse2009Author</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009Author();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
InlineResponse2009Author.prototype['active'] = undefined;

/**
 * @member {String} displayName
 */
InlineResponse2009Author.prototype['displayName'] = undefined;

/**
 * @member {String} name
 */
InlineResponse2009Author.prototype['name'] = undefined;

/**
 * @member {String} self
 */
InlineResponse2009Author.prototype['self'] = undefined;






export default InlineResponse2009Author;

