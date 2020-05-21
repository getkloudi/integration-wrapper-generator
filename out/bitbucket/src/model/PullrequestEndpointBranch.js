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
 * The PullrequestEndpointBranch model module.
 * @module model/PullrequestEndpointBranch
 * @version 1.2.0
 */
class PullrequestEndpointBranch {
    /**
     * Constructs a new <code>PullrequestEndpointBranch</code>.
     * @alias module:model/PullrequestEndpointBranch
     */
    constructor() { 
        
        PullrequestEndpointBranch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PullrequestEndpointBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestEndpointBranch} obj Optional instance to populate.
     * @return {module:model/PullrequestEndpointBranch} The populated <code>PullrequestEndpointBranch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PullrequestEndpointBranch();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('merge_strategies')) {
                obj['merge_strategies'] = ApiClient.convertToType(data['merge_strategies'], ['String']);
            }
            if (data.hasOwnProperty('default_merge_strategy')) {
                obj['default_merge_strategy'] = ApiClient.convertToType(data['default_merge_strategy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PullrequestEndpointBranch.prototype['name'] = undefined;

/**
 * Available merge strategies, when this endpoint is the destination of the pull request.
 * @member {Array.<module:model/PullrequestEndpointBranch.MergeStrategiesEnum>} merge_strategies
 */
PullrequestEndpointBranch.prototype['merge_strategies'] = undefined;

/**
 * The default merge strategy, when this endpoint is the destination of the pull request.
 * @member {String} default_merge_strategy
 */
PullrequestEndpointBranch.prototype['default_merge_strategy'] = undefined;





/**
 * Allowed values for the <code>mergeStrategies</code> property.
 * @enum {String}
 * @readonly
 */
PullrequestEndpointBranch['MergeStrategiesEnum'] = {

    /**
     * value: "merge_commit"
     * @const
     */
    "merge_commit": "merge_commit",

    /**
     * value: "squash"
     * @const
     */
    "squash": "squash",

    /**
     * value: "fast_forward"
     * @const
     */
    "fast_forward": "fast_forward"
};



export default PullrequestEndpointBranch;

