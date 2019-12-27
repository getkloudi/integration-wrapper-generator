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
import Commit from './Commit';
import PipelineSelector from './PipelineSelector';

/**
 * The PipelineCommitTargetAllOf model module.
 * @module model/PipelineCommitTargetAllOf
 * @version 1.1.2
 */
class PipelineCommitTargetAllOf {
    /**
     * Constructs a new <code>PipelineCommitTargetAllOf</code>.
     * A Bitbucket Pipelines commit target.
     * @alias module:model/PipelineCommitTargetAllOf
     */
    constructor() { 
        
        PipelineCommitTargetAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineCommitTargetAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineCommitTargetAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineCommitTargetAllOf} The populated <code>PipelineCommitTargetAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineCommitTargetAllOf();

            if (data.hasOwnProperty('commit')) {
                obj['commit'] = Commit.constructFromObject(data['commit']);
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = PipelineSelector.constructFromObject(data['selector']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Commit} commit
 */
PipelineCommitTargetAllOf.prototype['commit'] = undefined;

/**
 * @member {module:model/PipelineSelector} selector
 */
PipelineCommitTargetAllOf.prototype['selector'] = undefined;






export default PipelineCommitTargetAllOf;

