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

/**
 * The BranchingModelSettingsAllOfDevelopment model module.
 * @module model/BranchingModelSettingsAllOfDevelopment
 * @version 1.2.0
 */
class BranchingModelSettingsAllOfDevelopment {
    /**
     * Constructs a new <code>BranchingModelSettingsAllOfDevelopment</code>.
     * @alias module:model/BranchingModelSettingsAllOfDevelopment
     */
    constructor() { 
        
        BranchingModelSettingsAllOfDevelopment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchingModelSettingsAllOfDevelopment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelSettingsAllOfDevelopment} obj Optional instance to populate.
     * @return {module:model/BranchingModelSettingsAllOfDevelopment} The populated <code>BranchingModelSettingsAllOfDevelopment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchingModelSettingsAllOfDevelopment();

            if (data.hasOwnProperty('is_valid')) {
                obj['is_valid'] = ApiClient.convertToType(data['is_valid'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('use_mainbranch')) {
                obj['use_mainbranch'] = ApiClient.convertToType(data['use_mainbranch'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Indicates if the configured branch is valid, that is, if the configured branch actually exists currently. Is always `true` when `use_mainbranch` is `true` (even if the main branch does not exist). This field is read-only. This field is ignored when updating/creating settings.
 * @member {Boolean} is_valid
 */
BranchingModelSettingsAllOfDevelopment.prototype['is_valid'] = undefined;

/**
 * The configured branch. It must be `null` when `use_mainbranch` is `true`. Otherwise it must be a non-empty value. It is possible for the configured branch to not exist (e.g. it was deleted after the settings are set). In this case `is_valid` will be `false`. The branch must exist when updating/setting the `name` or an error will occur.
 * @member {String} name
 */
BranchingModelSettingsAllOfDevelopment.prototype['name'] = undefined;

/**
 * Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). When `true` the `name` must be `null` or not provided. When `false` the `name` must contain a non-empty branch name.
 * @member {Boolean} use_mainbranch
 */
BranchingModelSettingsAllOfDevelopment.prototype['use_mainbranch'] = undefined;






export default BranchingModelSettingsAllOfDevelopment;

