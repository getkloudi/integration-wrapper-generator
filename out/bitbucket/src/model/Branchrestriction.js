/**
 * Bitbucket
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
import BranchrestrictionAllOf from './BranchrestrictionAllOf';
import BranchrestrictionAllOfLinks from './BranchrestrictionAllOfLinks';
import Group from './Group';
import ModelObject from './ModelObject';

/**
 * The Branchrestriction model module.
 * @module model/Branchrestriction
 * @version 1.0.0
 */
class Branchrestriction {
    /**
     * Constructs a new <code>Branchrestriction</code>.
     * @alias module:model/Branchrestriction
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/BranchrestrictionAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);BranchrestrictionAllOf.initialize(this);
        Branchrestriction.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Branchrestriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Branchrestriction} obj Optional instance to populate.
     * @return {module:model/Branchrestriction} The populated <code>Branchrestriction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Branchrestriction();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            BranchrestrictionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [Group]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = BranchrestrictionAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [Account]);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Group>} groups
 */
Branchrestriction.prototype['groups'] = undefined;

/**
 * The branch restriction status' id.
 * @member {Number} id
 */
Branchrestriction.prototype['id'] = undefined;

/**
 * The type of restriction that is being applied
 * @member {module:model/Branchrestriction.KindEnum} kind
 */
Branchrestriction.prototype['kind'] = undefined;

/**
 * @member {module:model/BranchrestrictionAllOfLinks} links
 */
Branchrestriction.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/Account>} users
 */
Branchrestriction.prototype['users'] = undefined;

/**
 * Value with kind-specific semantics: \"require_approvals_to_merge\" uses it to require a minimum number of approvals on a PR; \"require_passing_builds_to_merge\" uses it to require a minimum number of passing builds.
 * @member {Number} value
 */
Branchrestriction.prototype['value'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement BranchrestrictionAllOf interface:
/**
 * @member {Array.<module:model/Group>} groups
 */
BranchrestrictionAllOf.prototype['groups'] = undefined;
/**
 * The branch restriction status' id.
 * @member {Number} id
 */
BranchrestrictionAllOf.prototype['id'] = undefined;
/**
 * The type of restriction that is being applied
 * @member {module:model/BranchrestrictionAllOf.KindEnum} kind
 */
BranchrestrictionAllOf.prototype['kind'] = undefined;
/**
 * @member {module:model/BranchrestrictionAllOfLinks} links
 */
BranchrestrictionAllOf.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/Account>} users
 */
BranchrestrictionAllOf.prototype['users'] = undefined;
/**
 * Value with kind-specific semantics: \"require_approvals_to_merge\" uses it to require a minimum number of approvals on a PR; \"require_passing_builds_to_merge\" uses it to require a minimum number of passing builds.
 * @member {Number} value
 */
BranchrestrictionAllOf.prototype['value'] = undefined;



/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Branchrestriction['KindEnum'] = {

    /**
     * value: "require_tasks_to_be_completed"
     * @const
     */
    "require_tasks_to_be_completed": "require_tasks_to_be_completed",

    /**
     * value: "require_passing_builds_to_merge"
     * @const
     */
    "require_passing_builds_to_merge": "require_passing_builds_to_merge",

    /**
     * value: "force"
     * @const
     */
    "force": "force",

    /**
     * value: "require_all_dependencies_merged"
     * @const
     */
    "require_all_dependencies_merged": "require_all_dependencies_merged",

    /**
     * value: "push"
     * @const
     */
    "push": "push",

    /**
     * value: "require_approvals_to_merge"
     * @const
     */
    "require_approvals_to_merge": "require_approvals_to_merge",

    /**
     * value: "enforce_merge_checks"
     * @const
     */
    "enforce_merge_checks": "enforce_merge_checks",

    /**
     * value: "restrict_merges"
     * @const
     */
    "restrict_merges": "restrict_merges",

    /**
     * value: "reset_pullrequest_approvals_on_change"
     * @const
     */
    "reset_pullrequest_approvals_on_change": "reset_pullrequest_approvals_on_change",

    /**
     * value: "delete"
     * @const
     */
    "delete": "delete"
};



export default Branchrestriction;
