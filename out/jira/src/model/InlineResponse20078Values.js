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
 * The InlineResponse20078Values model module.
 * @module model/InlineResponse20078Values
 * @version 1.2.0
 */
class InlineResponse20078Values {
    /**
     * Constructs a new <code>InlineResponse20078Values</code>.
     * @alias module:model/InlineResponse20078Values
     * @param archived {Boolean} 
     * @param description {String} 
     * @param id {String} 
     * @param name {String} 
     * @param overdue {Boolean} 
     * @param projectId {Number} 
     * @param releaseDate {String} 
     * @param released {Boolean} 
     * @param self {String} 
     * @param userReleaseDate {String} 
     */
    constructor(archived, description, id, name, overdue, projectId, releaseDate, released, self, userReleaseDate) { 
        
        InlineResponse20078Values.initialize(this, archived, description, id, name, overdue, projectId, releaseDate, released, self, userReleaseDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, archived, description, id, name, overdue, projectId, releaseDate, released, self, userReleaseDate) { 
        obj['archived'] = archived;
        obj['description'] = description;
        obj['id'] = id;
        obj['name'] = name;
        obj['overdue'] = overdue;
        obj['projectId'] = projectId;
        obj['releaseDate'] = releaseDate;
        obj['released'] = released;
        obj['self'] = self;
        obj['userReleaseDate'] = userReleaseDate;
    }

    /**
     * Constructs a <code>InlineResponse20078Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20078Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20078Values} The populated <code>InlineResponse20078Values</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20078Values();

            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('overdue')) {
                obj['overdue'] = ApiClient.convertToType(data['overdue'], 'Boolean');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'Number');
            }
            if (data.hasOwnProperty('releaseDate')) {
                obj['releaseDate'] = ApiClient.convertToType(data['releaseDate'], 'String');
            }
            if (data.hasOwnProperty('released')) {
                obj['released'] = ApiClient.convertToType(data['released'], 'Boolean');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('userReleaseDate')) {
                obj['userReleaseDate'] = ApiClient.convertToType(data['userReleaseDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} archived
 */
InlineResponse20078Values.prototype['archived'] = undefined;

/**
 * @member {String} description
 */
InlineResponse20078Values.prototype['description'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20078Values.prototype['id'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20078Values.prototype['name'] = undefined;

/**
 * @member {Boolean} overdue
 */
InlineResponse20078Values.prototype['overdue'] = undefined;

/**
 * @member {Number} projectId
 */
InlineResponse20078Values.prototype['projectId'] = undefined;

/**
 * @member {String} releaseDate
 */
InlineResponse20078Values.prototype['releaseDate'] = undefined;

/**
 * @member {Boolean} released
 */
InlineResponse20078Values.prototype['released'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20078Values.prototype['self'] = undefined;

/**
 * @member {String} userReleaseDate
 */
InlineResponse20078Values.prototype['userReleaseDate'] = undefined;






export default InlineResponse20078Values;

