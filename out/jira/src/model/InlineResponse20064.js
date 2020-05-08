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
import InlineResponse20064Projects from './InlineResponse20064Projects';

/**
 * The InlineResponse20064 model module.
 * @module model/InlineResponse20064
 * @version 1.0.0
 */
class InlineResponse20064 {
    /**
     * Constructs a new <code>InlineResponse20064</code>.
     * 
     * @alias module:model/InlineResponse20064
     * @param projects {Array.<module:model/InlineResponse20064Projects>} 
     */
    constructor(projects) { 
        
        InlineResponse20064.initialize(this, projects);
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
     * Constructs a <code>InlineResponse20064</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20064} obj Optional instance to populate.
     * @return {module:model/InlineResponse20064} The populated <code>InlineResponse20064</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20064();

            if (data.hasOwnProperty('projects')) {
                obj['projects'] = ApiClient.convertToType(data['projects'], [InlineResponse20064Projects]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InlineResponse20064Projects>} projects
 */
InlineResponse20064.prototype['projects'] = undefined;






export default InlineResponse20064;

