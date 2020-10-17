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
 * The IssueEventIssueLabels model module.
 * @module model/IssueEventIssueLabels
 * @version 1.4.4
 */
class IssueEventIssueLabels {
    /**
     * Constructs a new <code>IssueEventIssueLabels</code>.
     * @alias module:model/IssueEventIssueLabels
     */
    constructor() { 
        
        IssueEventIssueLabels.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueEventIssueLabels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventIssueLabels} obj Optional instance to populate.
     * @return {module:model/IssueEventIssueLabels} The populated <code>IssueEventIssueLabels</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueEventIssueLabels();

            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} color
 */
IssueEventIssueLabels.prototype['color'] = undefined;

/**
 * @member {String} name
 */
IssueEventIssueLabels.prototype['name'] = undefined;

/**
 * @member {String} url
 */
IssueEventIssueLabels.prototype['url'] = undefined;






export default IssueEventIssueLabels;

