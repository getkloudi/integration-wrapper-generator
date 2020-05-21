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
import Account from './Account';
import BranchingModelSettingsAllOfLinks from './BranchingModelSettingsAllOfLinks';
import ModelObject from './ModelObject';
import Workspace from './Workspace';
import WorkspaceMembershipAllOf from './WorkspaceMembershipAllOf';

/**
 * The WorkspaceMembership model module.
 * @module model/WorkspaceMembership
 * @version 1.2.0
 */
class WorkspaceMembership {
    /**
     * Constructs a new <code>WorkspaceMembership</code>.
     * @alias module:model/WorkspaceMembership
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/WorkspaceMembershipAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);WorkspaceMembershipAllOf.initialize(this);
        WorkspaceMembership.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>WorkspaceMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceMembership} obj Optional instance to populate.
     * @return {module:model/WorkspaceMembership} The populated <code>WorkspaceMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkspaceMembership();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            WorkspaceMembershipAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = BranchingModelSettingsAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = Account.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('workspace')) {
                obj['workspace'] = Workspace.constructFromObject(data['workspace']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
WorkspaceMembership.prototype['links'] = undefined;

/**
 * @member {module:model/Account} user
 */
WorkspaceMembership.prototype['user'] = undefined;

/**
 * @member {module:model/Workspace} workspace
 */
WorkspaceMembership.prototype['workspace'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement WorkspaceMembershipAllOf interface:
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
WorkspaceMembershipAllOf.prototype['links'] = undefined;
/**
 * @member {module:model/Account} user
 */
WorkspaceMembershipAllOf.prototype['user'] = undefined;
/**
 * @member {module:model/Workspace} workspace
 */
WorkspaceMembershipAllOf.prototype['workspace'] = undefined;




export default WorkspaceMembership;

