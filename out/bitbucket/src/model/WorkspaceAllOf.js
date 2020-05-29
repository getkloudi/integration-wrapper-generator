/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WorkspaceAllOfLinks from './WorkspaceAllOfLinks';

/**
 * The WorkspaceAllOf model module.
 * @module model/WorkspaceAllOf
 * @version 1.2.0
 */
class WorkspaceAllOf {
    /**
     * Constructs a new <code>WorkspaceAllOf</code>.
     * A Bitbucket workspace.             Workspaces are used to organize repositories.
     * @alias module:model/WorkspaceAllOf
     */
    constructor() { 
        
        WorkspaceAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkspaceAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceAllOf} obj Optional instance to populate.
     * @return {module:model/WorkspaceAllOf} The populated <code>WorkspaceAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceAllOf();

            if (data.hasOwnProperty('links')) {
                obj['links'] = WorkspaceAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('is_private')) {
                obj['is_private'] = ApiClient.convertToType(data['is_private'], 'Boolean');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WorkspaceAllOfLinks} links
 */
WorkspaceAllOf.prototype['links'] = undefined;

/**
 * The workspace's immutable id.
 * @member {String} uuid
 */
WorkspaceAllOf.prototype['uuid'] = undefined;

/**
 * The name of the workspace.
 * @member {String} name
 */
WorkspaceAllOf.prototype['name'] = undefined;

/**
 * The short label that identifies this workspace.
 * @member {String} slug
 */
WorkspaceAllOf.prototype['slug'] = undefined;

/**
 * Indicates whether the workspace is publicly accessible, or whether it is private to the members and consequently only visible to members. Note that private workspaces cannot contain public repositories.
 * @member {Boolean} is_private
 */
WorkspaceAllOf.prototype['is_private'] = undefined;

/**
 * @member {Date} created_on
 */
WorkspaceAllOf.prototype['created_on'] = undefined;

/**
 * @member {Date} updated_on
 */
WorkspaceAllOf.prototype['updated_on'] = undefined;






export default WorkspaceAllOf;
