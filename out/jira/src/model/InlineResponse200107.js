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
 * The InlineResponse200107 model module.
 * @module model/InlineResponse200107
 * @version 1.3.0
 */
class InlineResponse200107 {
    /**
     * Constructs a new <code>InlineResponse200107</code>.
     * @alias module:model/InlineResponse200107
     * @param author {module:model/InlineResponse2009Author} 
     * @param comment {module:model/InlineResponse2009Body} 
     * @param id {String} 
     * @param issueId {String} 
     * @param self {String} 
     * @param started {String} 
     * @param timeSpent {String} 
     * @param timeSpentSeconds {Number} 
     * @param updateAuthor {module:model/InlineResponse2009Author} 
     * @param updated {String} 
     * @param visibility {module:model/InlineResponse2009Visibility} 
     */
    constructor(author, comment, id, issueId, self, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) { 
        
        InlineResponse200107.initialize(this, author, comment, id, issueId, self, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, author, comment, id, issueId, self, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) { 
        obj['author'] = author;
        obj['comment'] = comment;
        obj['id'] = id;
        obj['issueId'] = issueId;
        obj['self'] = self;
        obj['started'] = started;
        obj['timeSpent'] = timeSpent;
        obj['timeSpentSeconds'] = timeSpentSeconds;
        obj['updateAuthor'] = updateAuthor;
        obj['updated'] = updated;
        obj['visibility'] = visibility;
    }

    /**
     * Constructs a <code>InlineResponse200107</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200107} obj Optional instance to populate.
     * @return {module:model/InlineResponse200107} The populated <code>InlineResponse200107</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200107();

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
InlineResponse200107.prototype['author'] = undefined;

/**
 * @member {module:model/InlineResponse2009Body} comment
 */
InlineResponse200107.prototype['comment'] = undefined;

/**
 * @member {String} id
 */
InlineResponse200107.prototype['id'] = undefined;

/**
 * @member {String} issueId
 */
InlineResponse200107.prototype['issueId'] = undefined;

/**
 * @member {String} self
 */
InlineResponse200107.prototype['self'] = undefined;

/**
 * @member {String} started
 */
InlineResponse200107.prototype['started'] = undefined;

/**
 * @member {String} timeSpent
 */
InlineResponse200107.prototype['timeSpent'] = undefined;

/**
 * @member {Number} timeSpentSeconds
 */
InlineResponse200107.prototype['timeSpentSeconds'] = undefined;

/**
 * @member {module:model/InlineResponse2009Author} updateAuthor
 */
InlineResponse200107.prototype['updateAuthor'] = undefined;

/**
 * @member {String} updated
 */
InlineResponse200107.prototype['updated'] = undefined;

/**
 * @member {module:model/InlineResponse2009Visibility} visibility
 */
InlineResponse200107.prototype['visibility'] = undefined;






export default InlineResponse200107;

