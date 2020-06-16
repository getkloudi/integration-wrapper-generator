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
import Application from './Application';
import RemoteObject from './RemoteObject';

/**
 * The RemoteIssueLink model module.
 * @module model/RemoteIssueLink
 * @version 1.4.0
 */
class RemoteIssueLink {
    /**
     * Constructs a new <code>RemoteIssueLink</code>.
     * Details of an issue remote link.
     * @alias module:model/RemoteIssueLink
     */
    constructor() { 
        
        RemoteIssueLink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RemoteIssueLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteIssueLink} obj Optional instance to populate.
     * @return {module:model/RemoteIssueLink} The populated <code>RemoteIssueLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoteIssueLink();

            if (data.hasOwnProperty('application')) {
                obj['application'] = ApiClient.convertToType(data['application'], Application);
            }
            if (data.hasOwnProperty('globalId')) {
                obj['globalId'] = ApiClient.convertToType(data['globalId'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], RemoteObject);
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = ApiClient.convertToType(data['relationship'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Details of the remote application the linked item is in.
 * @member {module:model/Application} application
 */
RemoteIssueLink.prototype['application'] = undefined;

/**
 * The global ID of the link, such as the ID of the item on the remote system.
 * @member {String} globalId
 */
RemoteIssueLink.prototype['globalId'] = undefined;

/**
 * The ID of the link.
 * @member {Number} id
 */
RemoteIssueLink.prototype['id'] = undefined;

/**
 * Details of the item linked to.
 * @member {module:model/RemoteObject} object
 */
RemoteIssueLink.prototype['object'] = undefined;

/**
 * Description of the relationship between the issue and the linked item.
 * @member {String} relationship
 */
RemoteIssueLink.prototype['relationship'] = undefined;

/**
 * The URL of the link.
 * @member {String} self
 */
RemoteIssueLink.prototype['self'] = undefined;






export default RemoteIssueLink;

