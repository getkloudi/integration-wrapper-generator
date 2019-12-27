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
import ModelObject from './ModelObject';
import PipelineAllOf from './PipelineAllOf';
import PipelineState from './PipelineState';
import PipelineTarget from './PipelineTarget';
import PipelineTrigger from './PipelineTrigger';
import Repository from './Repository';

/**
 * The Pipeline model module.
 * @module model/Pipeline
 * @version 1.1.0
 */
class Pipeline {
    /**
     * Constructs a new <code>Pipeline</code>.
     * @alias module:model/Pipeline
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/PipelineAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);PipelineAllOf.initialize(this);
        Pipeline.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Pipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pipeline} obj Optional instance to populate.
     * @return {module:model/Pipeline} The populated <code>Pipeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pipeline();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            PipelineAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('build_seconds_used')) {
                obj['build_seconds_used'] = ApiClient.convertToType(data['build_seconds_used'], 'Number');
            }
            if (data.hasOwnProperty('completed_on')) {
                obj['completed_on'] = ApiClient.convertToType(data['completed_on'], 'Date');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = Account.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = Repository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = PipelineState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = PipelineTarget.constructFromObject(data['target']);
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = PipelineTrigger.constructFromObject(data['trigger']);
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The number of build seconds used by this pipeline.
 * @member {Number} build_seconds_used
 */
Pipeline.prototype['build_seconds_used'] = undefined;

/**
 * The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress.
 * @member {Date} completed_on
 */
Pipeline.prototype['completed_on'] = undefined;

/**
 * The timestamp when the pipeline was created.
 * @member {Date} created_on
 */
Pipeline.prototype['created_on'] = undefined;

/**
 * @member {module:model/Account} creator
 */
Pipeline.prototype['creator'] = undefined;

/**
 * @member {module:model/Repository} repository
 */
Pipeline.prototype['repository'] = undefined;

/**
 * @member {module:model/PipelineState} state
 */
Pipeline.prototype['state'] = undefined;

/**
 * @member {module:model/PipelineTarget} target
 */
Pipeline.prototype['target'] = undefined;

/**
 * @member {module:model/PipelineTrigger} trigger
 */
Pipeline.prototype['trigger'] = undefined;

/**
 * The UUID identifying the pipeline.
 * @member {String} uuid
 */
Pipeline.prototype['uuid'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement PipelineAllOf interface:
/**
 * The number of build seconds used by this pipeline.
 * @member {Number} build_seconds_used
 */
PipelineAllOf.prototype['build_seconds_used'] = undefined;
/**
 * The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress.
 * @member {Date} completed_on
 */
PipelineAllOf.prototype['completed_on'] = undefined;
/**
 * The timestamp when the pipeline was created.
 * @member {Date} created_on
 */
PipelineAllOf.prototype['created_on'] = undefined;
/**
 * @member {module:model/Account} creator
 */
PipelineAllOf.prototype['creator'] = undefined;
/**
 * @member {module:model/Repository} repository
 */
PipelineAllOf.prototype['repository'] = undefined;
/**
 * @member {module:model/PipelineState} state
 */
PipelineAllOf.prototype['state'] = undefined;
/**
 * @member {module:model/PipelineTarget} target
 */
PipelineAllOf.prototype['target'] = undefined;
/**
 * @member {module:model/PipelineTrigger} trigger
 */
PipelineAllOf.prototype['trigger'] = undefined;
/**
 * The UUID identifying the pipeline.
 * @member {String} uuid
 */
PipelineAllOf.prototype['uuid'] = undefined;




export default Pipeline;

