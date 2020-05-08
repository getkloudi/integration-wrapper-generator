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
 * The InlineResponse2009BodyContent model module.
 * @module model/InlineResponse2009BodyContent
 * @version 1.1.0
 */
class InlineResponse2009BodyContent {
    /**
     * Constructs a new <code>InlineResponse2009BodyContent</code>.
     * @alias module:model/InlineResponse2009BodyContent
     * @param text {String} 
     * @param type {String} 
     */
    constructor(text, type) { 
        
        InlineResponse2009BodyContent.initialize(this, text, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, text, type) { 
        obj['text'] = text;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>InlineResponse2009BodyContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009BodyContent} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009BodyContent} The populated <code>InlineResponse2009BodyContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009BodyContent();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} text
 */
InlineResponse2009BodyContent.prototype['text'] = undefined;

/**
 * @member {String} type
 */
InlineResponse2009BodyContent.prototype['type'] = undefined;






export default InlineResponse2009BodyContent;

