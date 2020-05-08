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
import InlineResponse20019SharePermissions from './InlineResponse20019SharePermissions';

/**
 * The InlineResponse20019 model module.
 * @module model/InlineResponse20019
 * @version 1.1.0
 */
class InlineResponse20019 {
    /**
     * Constructs a new <code>InlineResponse20019</code>.
     * 
     * @alias module:model/InlineResponse20019
     * @param id {String} 
     * @param isFavourite {Boolean} 
     * @param name {String} 
     * @param popularity {Number} 
     * @param self {String} 
     * @param sharePermissions {Array.<module:model/InlineResponse20019SharePermissions>} 
     * @param view {String} 
     */
    constructor(id, isFavourite, name, popularity, self, sharePermissions, view) { 
        
        InlineResponse20019.initialize(this, id, isFavourite, name, popularity, self, sharePermissions, view);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, isFavourite, name, popularity, self, sharePermissions, view) { 
        obj['id'] = id;
        obj['isFavourite'] = isFavourite;
        obj['name'] = name;
        obj['popularity'] = popularity;
        obj['self'] = self;
        obj['sharePermissions'] = sharePermissions;
        obj['view'] = view;
    }

    /**
     * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20019} obj Optional instance to populate.
     * @return {module:model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20019();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isFavourite')) {
                obj['isFavourite'] = ApiClient.convertToType(data['isFavourite'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('popularity')) {
                obj['popularity'] = ApiClient.convertToType(data['popularity'], 'Number');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('sharePermissions')) {
                obj['sharePermissions'] = ApiClient.convertToType(data['sharePermissions'], [InlineResponse20019SharePermissions]);
            }
            if (data.hasOwnProperty('view')) {
                obj['view'] = ApiClient.convertToType(data['view'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse20019.prototype['id'] = undefined;

/**
 * @member {Boolean} isFavourite
 */
InlineResponse20019.prototype['isFavourite'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20019.prototype['name'] = undefined;

/**
 * @member {Number} popularity
 */
InlineResponse20019.prototype['popularity'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20019.prototype['self'] = undefined;

/**
 * @member {Array.<module:model/InlineResponse20019SharePermissions>} sharePermissions
 */
InlineResponse20019.prototype['sharePermissions'] = undefined;

/**
 * @member {String} view
 */
InlineResponse20019.prototype['view'] = undefined;






export default InlineResponse20019;

