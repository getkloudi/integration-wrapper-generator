/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Project from './Project';

/**
 * The PageBeanProject model module.
 * @module model/PageBeanProject
 * @version 1.4.0
 */
class PageBeanProject {
    /**
     * Constructs a new <code>PageBeanProject</code>.
     * A page of items.
     * @alias module:model/PageBeanProject
     */
    constructor() { 
        
        PageBeanProject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageBeanProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageBeanProject} obj Optional instance to populate.
     * @return {module:model/PageBeanProject} The populated <code>PageBeanProject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageBeanProject();

            if (data.hasOwnProperty('isLast')) {
                obj['isLast'] = ApiClient.convertToType(data['isLast'], 'Boolean');
            }
            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('nextPage')) {
                obj['nextPage'] = ApiClient.convertToType(data['nextPage'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [Project]);
            }
        }
        return obj;
    }


}

/**
 * Whether this is the last page.
 * @member {Boolean} isLast
 */
PageBeanProject.prototype['isLast'] = undefined;

/**
 * The maximum number of items that could be returned.
 * @member {Number} maxResults
 */
PageBeanProject.prototype['maxResults'] = undefined;

/**
 * If there is another page of results, the URL of the next page.
 * @member {String} nextPage
 */
PageBeanProject.prototype['nextPage'] = undefined;

/**
 * The URL of the page.
 * @member {String} self
 */
PageBeanProject.prototype['self'] = undefined;

/**
 * The index of the first item returned.
 * @member {Number} startAt
 */
PageBeanProject.prototype['startAt'] = undefined;

/**
 * The number of items returned.
 * @member {Number} total
 */
PageBeanProject.prototype['total'] = undefined;

/**
 * The list of items.
 * @member {Array.<module:model/Project>} values
 */
PageBeanProject.prototype['values'] = undefined;






export default PageBeanProject;
