/**
 * Jira
 * The Jira Cloud Platform REST API
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse20036Projects from './InlineResponse20036Projects';

/**
 * The InlineResponse20036 model module.
 * @module model/InlineResponse20036
 * @version 1.3.0
 */
class InlineResponse20036 {
    /**
     * Constructs a new <code>InlineResponse20036</code>.
     * 
     * @alias module:model/InlineResponse20036
     * @param projects {Array.<module:model/InlineResponse20036Projects>} 
     */
    constructor(projects) { 
        
        InlineResponse20036.initialize(this, projects);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, projects) { 
        obj['projects'] = projects;
    }

    /**
     * Constructs a <code>InlineResponse20036</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20036} obj Optional instance to populate.
     * @return {module:model/InlineResponse20036} The populated <code>InlineResponse20036</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20036();

            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [InlineResponse20036Projects]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InlineResponse20036Projects>} projects
 */
InlineResponse20036.prototype['projects'] = undefined;






export default InlineResponse20036;

