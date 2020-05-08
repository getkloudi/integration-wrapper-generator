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
 * The InlineResponse2007AssociatedItems model module.
 * @module model/InlineResponse2007AssociatedItems
 * @version 1.3.1
 */
class InlineResponse2007AssociatedItems {
    /**
     * Constructs a new <code>InlineResponse2007AssociatedItems</code>.
     * @alias module:model/InlineResponse2007AssociatedItems
     * @param id {String} 
     * @param name {String} 
     * @param parentId {String} 
     * @param parentName {String} 
     * @param typeName {String} 
     */
    constructor(id, name, parentId, parentName, typeName) { 
        
        InlineResponse2007AssociatedItems.initialize(this, id, name, parentId, parentName, typeName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, parentId, parentName, typeName) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['parentId'] = parentId;
        obj['parentName'] = parentName;
        obj['typeName'] = typeName;
    }

    /**
     * Constructs a <code>InlineResponse2007AssociatedItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007AssociatedItems} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007AssociatedItems} The populated <code>InlineResponse2007AssociatedItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007AssociatedItems();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('parentName')) {
                obj['parentName'] = ApiClient.convertToType(data['parentName'], 'String');
            }
            if (data.hasOwnProperty('typeName')) {
                obj['typeName'] = ApiClient.convertToType(data['typeName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse2007AssociatedItems.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse2007AssociatedItems.prototype['name'] = undefined;

/**
 * @member {String} parentId
 */
InlineResponse2007AssociatedItems.prototype['parentId'] = undefined;

/**
 * @member {String} parentName
 */
InlineResponse2007AssociatedItems.prototype['parentName'] = undefined;

/**
 * @member {String} typeName
 */
InlineResponse2007AssociatedItems.prototype['typeName'] = undefined;






export default InlineResponse2007AssociatedItems;

