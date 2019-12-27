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
import BranchingModelSettingsAllOfBranchTypes from './BranchingModelSettingsAllOfBranchTypes';
import BranchingModelSettingsAllOfDevelopment from './BranchingModelSettingsAllOfDevelopment';
import BranchingModelSettingsAllOfLinks from './BranchingModelSettingsAllOfLinks';
import BranchingModelSettingsAllOfProduction from './BranchingModelSettingsAllOfProduction';

/**
 * The BranchingModelSettingsAllOf model module.
 * @module model/BranchingModelSettingsAllOf
 * @version 1.1.0
 */
class BranchingModelSettingsAllOf {
    /**
     * Constructs a new <code>BranchingModelSettingsAllOf</code>.
     * A repository&#39;s branching model settings
     * @alias module:model/BranchingModelSettingsAllOf
     */
    constructor() { 
        
        BranchingModelSettingsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchingModelSettingsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelSettingsAllOf} obj Optional instance to populate.
     * @return {module:model/BranchingModelSettingsAllOf} The populated <code>BranchingModelSettingsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchingModelSettingsAllOf();

            if (data.hasOwnProperty('links')) {
                obj['links'] = BranchingModelSettingsAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('branch_types')) {
                obj['branch_types'] = ApiClient.convertToType(data['branch_types'], [BranchingModelSettingsAllOfBranchTypes]);
            }
            if (data.hasOwnProperty('development')) {
                obj['development'] = BranchingModelSettingsAllOfDevelopment.constructFromObject(data['development']);
            }
            if (data.hasOwnProperty('production')) {
                obj['production'] = BranchingModelSettingsAllOfProduction.constructFromObject(data['production']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
BranchingModelSettingsAllOf.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/BranchingModelSettingsAllOfBranchTypes>} branch_types
 */
BranchingModelSettingsAllOf.prototype['branch_types'] = undefined;

/**
 * @member {module:model/BranchingModelSettingsAllOfDevelopment} development
 */
BranchingModelSettingsAllOf.prototype['development'] = undefined;

/**
 * @member {module:model/BranchingModelSettingsAllOfProduction} production
 */
BranchingModelSettingsAllOf.prototype['production'] = undefined;






export default BranchingModelSettingsAllOf;

