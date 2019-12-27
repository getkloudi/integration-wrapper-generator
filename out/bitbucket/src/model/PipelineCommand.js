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
import PipelineLogRange from './PipelineLogRange';

/**
 * The PipelineCommand model module.
 * @module model/PipelineCommand
 * @version 1.1.0
 */
class PipelineCommand {
    /**
     * Constructs a new <code>PipelineCommand</code>.
     * An executable pipeline command.
     * @alias module:model/PipelineCommand
     */
    constructor() { 
        
        PipelineCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineCommand} obj Optional instance to populate.
     * @return {module:model/PipelineCommand} The populated <code>PipelineCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineCommand();

            if (data.hasOwnProperty('command')) {
                obj['command'] = ApiClient.convertToType(data['command'], 'String');
            }
            if (data.hasOwnProperty('log_range')) {
                obj['log_range'] = PipelineLogRange.constructFromObject(data['log_range']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The executable command.
 * @member {String} command
 */
PipelineCommand.prototype['command'] = undefined;

/**
 * @member {module:model/PipelineLogRange} log_range
 */
PipelineCommand.prototype['log_range'] = undefined;

/**
 * The name of the command.
 * @member {String} name
 */
PipelineCommand.prototype['name'] = undefined;






export default PipelineCommand;

