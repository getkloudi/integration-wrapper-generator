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
import Worklog from './Worklog';

/**
 * The PageOfWorklogs model module.
 * @module model/PageOfWorklogs
 * @version 1.4.0
 */
class PageOfWorklogs {
    /**
     * Constructs a new <code>PageOfWorklogs</code>.
     * Paginated list of worklog details
     * @alias module:model/PageOfWorklogs
     */
    constructor() { 
        
        PageOfWorklogs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageOfWorklogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageOfWorklogs} obj Optional instance to populate.
     * @return {module:model/PageOfWorklogs} The populated <code>PageOfWorklogs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageOfWorklogs();

            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('worklogs')) {
                obj['worklogs'] = ApiClient.convertToType(data['worklogs'], [Worklog]);
            }
        }
        return obj;
    }


}

/**
 * The maximum number of results that could be on the page.
 * @member {Number} maxResults
 */
PageOfWorklogs.prototype['maxResults'] = undefined;

/**
 * The index of the first item returned on the page.
 * @member {Number} startAt
 */
PageOfWorklogs.prototype['startAt'] = undefined;

/**
 * The number of results on the page.
 * @member {Number} total
 */
PageOfWorklogs.prototype['total'] = undefined;

/**
 * List of worklogs.
 * @member {Array.<module:model/Worklog>} worklogs
 */
PageOfWorklogs.prototype['worklogs'] = undefined;






export default PageOfWorklogs;
