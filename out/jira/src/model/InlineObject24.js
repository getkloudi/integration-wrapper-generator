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
 * The InlineObject24 model module.
 * @module model/InlineObject24
 * @version 1.3.1
 */
class InlineObject24 {
    /**
     * Constructs a new <code>InlineObject24</code>.
     * @alias module:model/InlineObject24
     */
    constructor() { 
        
        InlineObject24.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject24</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject24} obj Optional instance to populate.
     * @return {module:model/InlineObject24} The populated <code>InlineObject24</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject24();

            if (data.hasOwnProperty('htmlBody')) {
                obj['htmlBody'] = ApiClient.convertToType(data['htmlBody'], 'String');
            }
            if (data.hasOwnProperty('restrict')) {
                obj['restrict'] = ApiClient.convertToType(data['restrict'], Object);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('textBody')) {
                obj['textBody'] = ApiClient.convertToType(data['textBody'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], Object);
            }
        }
        return obj;
    }


}

/**
 * The HTML body of the email notification for the issue.
 * @member {String} htmlBody
 */
InlineObject24.prototype['htmlBody'] = undefined;

/**
 * @member {Object} restrict
 */
InlineObject24.prototype['restrict'] = undefined;

/**
 * The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
 * @member {String} subject
 */
InlineObject24.prototype['subject'] = undefined;

/**
 * The plain text body of the email notification for the issue.
 * @member {String} textBody
 */
InlineObject24.prototype['textBody'] = undefined;

/**
 * @member {Object} to
 */
InlineObject24.prototype['to'] = undefined;






export default InlineObject24;

