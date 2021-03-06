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
import BranchingModelAllOfBranchTypes from './BranchingModelAllOfBranchTypes';
import BranchingModelAllOfDevelopment from './BranchingModelAllOfDevelopment';

/**
 * The BranchingModelAllOf model module.
 * @module model/BranchingModelAllOf
 * @version 1.2.0
 */
class BranchingModelAllOf {
    /**
     * Constructs a new <code>BranchingModelAllOf</code>.
     * A repository&#39;s branching model
     * @alias module:model/BranchingModelAllOf
     */
    constructor() { 
        
        BranchingModelAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BranchingModelAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchingModelAllOf} obj Optional instance to populate.
     * @return {module:model/BranchingModelAllOf} The populated <code>BranchingModelAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BranchingModelAllOf();

            if (data.hasOwnProperty('branch_types')) {
                obj['branch_types'] = ApiClient.convertToType(data['branch_types'], [BranchingModelAllOfBranchTypes]);
            }
            if (data.hasOwnProperty('development')) {
                obj['development'] = BranchingModelAllOfDevelopment.constructFromObject(data['development']);
            }
            if (data.hasOwnProperty('production')) {
                obj['production'] = BranchingModelAllOfDevelopment.constructFromObject(data['production']);
            }
        }
        return obj;
    }


}

/**
 * The active branch types.
 * @member {Array.<module:model/BranchingModelAllOfBranchTypes>} branch_types
 */
BranchingModelAllOf.prototype['branch_types'] = undefined;

/**
 * @member {module:model/BranchingModelAllOfDevelopment} development
 */
BranchingModelAllOf.prototype['development'] = undefined;

/**
 * @member {module:model/BranchingModelAllOfDevelopment} production
 */
BranchingModelAllOf.prototype['production'] = undefined;






export default BranchingModelAllOf;

