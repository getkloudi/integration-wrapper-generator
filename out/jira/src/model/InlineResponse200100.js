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
 * The InlineResponse200100 model module.
 * @module model/InlineResponse200100
 * @version 1.3.1
 */
class InlineResponse200100 {
    /**
     * Constructs a new <code>InlineResponse200100</code>.
     * @alias module:model/InlineResponse200100
     * @param _default {Boolean} 
     * @param description {String} 
     * @param lastModifiedDate {String} 
     * @param lastModifiedUser {String} 
     * @param lastModifiedUserAccountId {String} 
     * @param name {String} 
     * @param steps {Number} 
     */
    constructor(_default, description, lastModifiedDate, lastModifiedUser, lastModifiedUserAccountId, name, steps) { 
        
        InlineResponse200100.initialize(this, _default, description, lastModifiedDate, lastModifiedUser, lastModifiedUserAccountId, name, steps);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _default, description, lastModifiedDate, lastModifiedUser, lastModifiedUserAccountId, name, steps) { 
        obj['default'] = _default;
        obj['description'] = description;
        obj['lastModifiedDate'] = lastModifiedDate;
        obj['lastModifiedUser'] = lastModifiedUser;
        obj['lastModifiedUserAccountId'] = lastModifiedUserAccountId;
        obj['name'] = name;
        obj['steps'] = steps;
    }

    /**
     * Constructs a <code>InlineResponse200100</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200100} obj Optional instance to populate.
     * @return {module:model/InlineResponse200100} The populated <code>InlineResponse200100</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200100();

            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedDate')) {
                obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedUser')) {
                obj['lastModifiedUser'] = ApiClient.convertToType(data['lastModifiedUser'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedUserAccountId')) {
                obj['lastModifiedUserAccountId'] = ApiClient.convertToType(data['lastModifiedUserAccountId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = ApiClient.convertToType(data['steps'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} default
 */
InlineResponse200100.prototype['default'] = undefined;

/**
 * @member {String} description
 */
InlineResponse200100.prototype['description'] = undefined;

/**
 * @member {String} lastModifiedDate
 */
InlineResponse200100.prototype['lastModifiedDate'] = undefined;

/**
 * @member {String} lastModifiedUser
 */
InlineResponse200100.prototype['lastModifiedUser'] = undefined;

/**
 * @member {String} lastModifiedUserAccountId
 */
InlineResponse200100.prototype['lastModifiedUserAccountId'] = undefined;

/**
 * @member {String} name
 */
InlineResponse200100.prototype['name'] = undefined;

/**
 * @member {Number} steps
 */
InlineResponse200100.prototype['steps'] = undefined;






export default InlineResponse200100;

