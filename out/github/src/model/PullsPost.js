/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
 * The PullsPost model module.
 * @module model/PullsPost
 * @version 1.4.6
 */
class PullsPost {
    /**
     * Constructs a new <code>PullsPost</code>.
     * @alias module:model/PullsPost
     */
    constructor() { 
        
        PullsPost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PullsPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullsPost} obj Optional instance to populate.
     * @return {module:model/PullsPost} The populated <code>PullsPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullsPost();

            if (data.hasOwnProperty('base')) {
                obj['base'] = ApiClient.convertToType(data['base'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('head')) {
                obj['head'] = ApiClient.convertToType(data['head'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} base
 */
PullsPost.prototype['base'] = undefined;

/**
 * @member {String} body
 */
PullsPost.prototype['body'] = undefined;

/**
 * @member {String} head
 */
PullsPost.prototype['head'] = undefined;

/**
 * @member {String} title
 */
PullsPost.prototype['title'] = undefined;






export default PullsPost;

