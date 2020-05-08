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
 * The InlineResponse2009Values model module.
 * @module model/InlineResponse2009Values
 * @version 1.3.0
 */
class InlineResponse2009Values {
    /**
     * Constructs a new <code>InlineResponse2009Values</code>.
     * @alias module:model/InlineResponse2009Values
     * @param created {String} 
     * @param id {String} 
     * @param self {String} 
     * @param updated {String} 
     */
    constructor(created, id, self, updated) { 
        
        InlineResponse2009Values.initialize(this, created, id, self, updated);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, created, id, self, updated) { 
        obj['created'] = created;
        obj['id'] = id;
        obj['self'] = self;
        obj['updated'] = updated;
    }

    /**
     * Constructs a <code>InlineResponse2009Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009Values} The populated <code>InlineResponse2009Values</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009Values();

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
InlineResponse2009Values.prototype['author'] = undefined;

/**
 * @member {module:model/InlineResponse2009Body} body
 */
InlineResponse2009Values.prototype['body'] = undefined;

/**
 * @member {String} created
 */
InlineResponse2009Values.prototype['created'] = undefined;

/**
 * @member {String} id
 */
InlineResponse2009Values.prototype['id'] = undefined;

/**
 * @member {String} self
 */
InlineResponse2009Values.prototype['self'] = undefined;

/**
 * @member {module:model/InlineResponse2009Author} updateAuthor
 */
InlineResponse2009Values.prototype['updateAuthor'] = undefined;

/**
 * @member {String} updated
 */
InlineResponse2009Values.prototype['updated'] = undefined;

/**
 * @member {module:model/InlineResponse2009Visibility} visibility
 */
InlineResponse2009Values.prototype['visibility'] = undefined;






export default InlineResponse2009Values;

