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
import PipelineCommitTargetAllOf from './PipelineCommitTargetAllOf';
import PipelineSelector from './PipelineSelector';
import PipelineTarget from './PipelineTarget';

/**
 * The PipelineCommitTarget model module.
 * @module model/PipelineCommitTarget
 * @version 1.1.2
 */
class PipelineCommitTarget {
    /**
     * Constructs a new <code>PipelineCommitTarget</code>.
     * @alias module:model/PipelineCommitTarget
     * @implements module:model/PipelineTarget
     * @implements module:model/PipelineCommitTargetAllOf
     * @param type {String} 
     */
    constructor(type) { 
        PipelineTarget.initialize(this, type);PipelineCommitTargetAllOf.initialize(this);
        PipelineCommitTarget.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>PipelineCommitTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineCommitTarget} obj Optional instance to populate.
     * @return {module:model/PipelineCommitTarget} The populated <code>PipelineCommitTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineCommitTarget();
            PipelineTarget.constructFromObject(data, obj);
            PipelineCommitTargetAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
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
 * @member {String} type
 */
PipelineCommitTarget.prototype['type'] = undefined;

/**
 * @member {module:model/Commit} commit
 */
PipelineCommitTarget.prototype['commit'] = undefined;

/**
 * @member {module:model/PipelineSelector} selector
 */
PipelineCommitTarget.prototype['selector'] = undefined;


// Implement PipelineTarget interface:
/**
 * @member {String} type
 */
PipelineTarget.prototype['type'] = undefined;
// Implement PipelineCommitTargetAllOf interface:
/**
 * @member {module:model/Commit} commit
 */
PipelineCommitTargetAllOf.prototype['commit'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */
PipelineCommitTargetAllOf.prototype['selector'] = undefined;




export default PipelineCommitTarget;

