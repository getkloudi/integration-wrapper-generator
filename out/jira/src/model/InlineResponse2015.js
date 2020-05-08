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
 * The InlineResponse2015 model module.
 * @module model/InlineResponse2015
 * @version 1.1.0
 */
class InlineResponse2015 {
    /**
     * Constructs a new <code>InlineResponse2015</code>.
     * 
     * @alias module:model/InlineResponse2015
     * @param author {module:model/InlineResponse2009Author} 
     * @param body {module:model/InlineResponse2009Body} 
     * @param created {String} 
     * @param id {String} 
     * @param self {String} 
     * @param updateAuthor {module:model/InlineResponse2009Author} 
     * @param updated {String} 
     * @param visibility {module:model/InlineResponse2009Visibility} 
     */
    constructor(author, body, created, id, self, updateAuthor, updated, visibility) { 
        
        InlineResponse2015.initialize(this, author, body, created, id, self, updateAuthor, updated, visibility);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, author, body, created, id, self, updateAuthor, updated, visibility) { 
        obj['author'] = author;
        obj['body'] = body;
        obj['created'] = created;
        obj['id'] = id;
        obj['self'] = self;
        obj['updateAuthor'] = updateAuthor;
        obj['updated'] = updated;
        obj['visibility'] = visibility;
    }

    /**
     * Constructs a <code>InlineResponse2015</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2015} obj Optional instance to populate.
     * @return {module:model/InlineResponse2015} The populated <code>InlineResponse2015</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2015();

            if (data.hasOwnProperty('author')) {
                obj['author'] = InlineResponse2009Author.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = InlineResponse2009Body.constructFromObject(data['body']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
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
InlineResponse2015.prototype['author'] = undefined;

/**
 * @member {module:model/InlineResponse2009Body} body
 */
InlineResponse2015.prototype['body'] = undefined;

/**
 * @member {String} created
 */
InlineResponse2015.prototype['created'] = undefined;

/**
 * @member {String} id
 */
InlineResponse2015.prototype['id'] = undefined;

/**
 * @member {String} self
 */
InlineResponse2015.prototype['self'] = undefined;

/**
 * @member {module:model/InlineResponse2009Author} updateAuthor
 */
InlineResponse2015.prototype['updateAuthor'] = undefined;

/**
 * @member {String} updated
 */
InlineResponse2015.prototype['updated'] = undefined;

/**
 * @member {module:model/InlineResponse2009Visibility} visibility
 */
InlineResponse2015.prototype['visibility'] = undefined;






export default InlineResponse2015;
