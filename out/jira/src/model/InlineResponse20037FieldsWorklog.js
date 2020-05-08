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
import InlineResponse2009Author from './InlineResponse2009Author';
import InlineResponse2009Body from './InlineResponse2009Body';
import InlineResponse2009Visibility from './InlineResponse2009Visibility';

/**
 * The InlineResponse20037FieldsWorklog model module.
 * @module model/InlineResponse20037FieldsWorklog
 * @version 1.1.0
 */
class InlineResponse20037FieldsWorklog {
    /**
     * Constructs a new <code>InlineResponse20037FieldsWorklog</code>.
     * @alias module:model/InlineResponse20037FieldsWorklog
     * @param id {String} 
     * @param issueId {String} 
     * @param self {String} 
     * @param started {String} 
     * @param timeSpent {String} 
     * @param timeSpentSeconds {Number} 
     * @param updated {String} 
     */
    constructor(id, issueId, self, started, timeSpent, timeSpentSeconds, updated) { 
        
        InlineResponse20037FieldsWorklog.initialize(this, id, issueId, self, started, timeSpent, timeSpentSeconds, updated);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, issueId, self, started, timeSpent, timeSpentSeconds, updated) { 
        obj['id'] = id;
        obj['issueId'] = issueId;
        obj['self'] = self;
        obj['started'] = started;
        obj['timeSpent'] = timeSpent;
        obj['timeSpentSeconds'] = timeSpentSeconds;
        obj['updated'] = updated;
    }

    /**
     * Constructs a <code>InlineResponse20037FieldsWorklog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsWorklog} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsWorklog} The populated <code>InlineResponse20037FieldsWorklog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20037FieldsWorklog();

            if (data.hasOwnProperty('author')) {
                obj['author'] = InlineResponse2009Author.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = InlineResponse2009Body.constructFromObject(data['comment']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('issueId')) {
                obj['issueId'] = ApiClient.convertToType(data['issueId'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('started')) {
                obj['started'] = ApiClient.convertToType(data['started'], 'String');
            }
            if (data.hasOwnProperty('timeSpent')) {
                obj['timeSpent'] = ApiClient.convertToType(data['timeSpent'], 'String');
            }
            if (data.hasOwnProperty('timeSpentSeconds')) {
                obj['timeSpentSeconds'] = ApiClient.convertToType(data['timeSpentSeconds'], 'Number');
            }
            if (data.hasOwnProperty('updateAuthor')) {
                obj['updateAuthor'] = InlineResponse2009Author.constructFromObject(data['updateAuthor']);
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'String');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = InlineResponse2009Visibility.constructFromObject(data['visibility']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2009Author} author
 */
InlineResponse20037FieldsWorklog.prototype['author'] = undefined;

/**
 * @member {module:model/InlineResponse2009Body} comment
 */
InlineResponse20037FieldsWorklog.prototype['comment'] = undefined;

/**
 * @member {String} id
 */
InlineResponse20037FieldsWorklog.prototype['id'] = undefined;

/**
 * @member {String} issueId
 */
InlineResponse20037FieldsWorklog.prototype['issueId'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20037FieldsWorklog.prototype['self'] = undefined;

/**
 * @member {String} started
 */
InlineResponse20037FieldsWorklog.prototype['started'] = undefined;

/**
 * @member {String} timeSpent
 */
InlineResponse20037FieldsWorklog.prototype['timeSpent'] = undefined;

/**
 * @member {Number} timeSpentSeconds
 */
InlineResponse20037FieldsWorklog.prototype['timeSpentSeconds'] = undefined;

/**
 * @member {module:model/InlineResponse2009Author} updateAuthor
 */
InlineResponse20037FieldsWorklog.prototype['updateAuthor'] = undefined;

/**
 * @member {String} updated
 */
InlineResponse20037FieldsWorklog.prototype['updated'] = undefined;

/**
 * @member {module:model/InlineResponse2009Visibility} visibility
 */
InlineResponse20037FieldsWorklog.prototype['visibility'] = undefined;






export default InlineResponse20037FieldsWorklog;
