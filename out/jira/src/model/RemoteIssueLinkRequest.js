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
 * The RemoteIssueLinkRequest model module.
 * @module model/RemoteIssueLinkRequest
 * @version 1.4.0
 */
class RemoteIssueLinkRequest {
    /**
     * Constructs a new <code>RemoteIssueLinkRequest</code>.
     * Details of a remote issue link.
     * @alias module:model/RemoteIssueLinkRequest
     */
    constructor() { 
        
        RemoteIssueLinkRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RemoteIssueLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteIssueLinkRequest} obj Optional instance to populate.
     * @return {module:model/RemoteIssueLinkRequest} The populated <code>RemoteIssueLinkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoteIssueLinkRequest();

            if (data.hasOwnProperty('application')) {
                obj['application'] = ApiClient.convertToType(data['application'], Application);
            }
            if (data.hasOwnProperty('globalId')) {
                obj['globalId'] = ApiClient.convertToType(data['globalId'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], RemoteObject);
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = ApiClient.convertToType(data['relationship'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Details of the remote application the linked item is in. For example, trello.
 * @member {module:model/Application} application
 */
RemoteIssueLinkRequest.prototype['application'] = undefined;

/**
 * An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.  Setting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.  The maximum length is 255 characters.
 * @member {String} globalId
 */
RemoteIssueLinkRequest.prototype['globalId'] = undefined;

/**
 * Details of the item linked to.
 * @member {module:model/RemoteObject} object
 */
RemoteIssueLinkRequest.prototype['object'] = undefined;

/**
 * Description of the relationship between the issue and the linked item. If not set, the relationship description \"links to\" is used in Jira.
 * @member {String} relationship
 */
RemoteIssueLinkRequest.prototype['relationship'] = undefined;






export default RemoteIssueLinkRequest;

