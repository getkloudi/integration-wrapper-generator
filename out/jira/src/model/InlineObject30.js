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
 * The InlineObject30 model module.
 * @module model/InlineObject30
 * @version 1.0.0
 */
class InlineObject30 {
    /**
     * Constructs a new <code>InlineObject30</code>.
     * @alias module:model/InlineObject30
     */
    constructor() { 
        
        InlineObject30.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject30</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject30} obj Optional instance to populate.
     * @return {module:model/InlineObject30} The populated <code>InlineObject30</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject30();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], Object);
            }
            if (data.hasOwnProperty('inwardIssue')) {
                obj['inwardIssue'] = ApiClient.convertToType(data['inwardIssue'], Object);
            }
            if (data.hasOwnProperty('outwardIssue')) {
                obj['outwardIssue'] = ApiClient.convertToType(data['outwardIssue'], Object);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
        }
        return obj;
    }


}

/**
 * A comment.
 * @member {Object} comment
 */
InlineObject30.prototype['comment'] = undefined;

/**
 * The ID or key of a linked issue.
 * @member {Object} inwardIssue
 */
InlineObject30.prototype['inwardIssue'] = undefined;

/**
 * The ID or key of a linked issue.
 * @member {Object} outwardIssue
 */
InlineObject30.prototype['outwardIssue'] = undefined;

/**
 * This bean is used as follows:
 * @member {Object} type
 */
InlineObject30.prototype['type'] = undefined;






export default InlineObject30;

