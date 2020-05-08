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
import InlineResponse20022PropertiesLeader from './InlineResponse20022PropertiesLeader';

/**
 * The InlineResponse20022Properties model module.
 * @module model/InlineResponse20022Properties
 * @version 1.1.0
 */
class InlineResponse20022Properties {
    /**
     * Constructs a new <code>InlineResponse20022Properties</code>.
     * @alias module:model/InlineResponse20022Properties
     * @param description {String} 
     * @param founded {String} 
     * @param leader {module:model/InlineResponse20022PropertiesLeader} 
     * @param members {Number} 
     */
    constructor(description, founded, leader, members) { 
        
        InlineResponse20022Properties.initialize(this, description, founded, leader, members);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, founded, leader, members) { 
        obj['description'] = description;
        obj['founded'] = founded;
        obj['leader'] = leader;
        obj['members'] = members;
    }

    /**
     * Constructs a <code>InlineResponse20022Properties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022Properties} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022Properties} The populated <code>InlineResponse20022Properties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20022Properties();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('founded')) {
                obj['founded'] = ApiClient.convertToType(data['founded'], 'String');
            }
            if (data.hasOwnProperty('leader')) {
                obj['leader'] = InlineResponse20022PropertiesLeader.constructFromObject(data['leader']);
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
InlineResponse20022Properties.prototype['description'] = undefined;

/**
 * @member {String} founded
 */
InlineResponse20022Properties.prototype['founded'] = undefined;

/**
 * @member {module:model/InlineResponse20022PropertiesLeader} leader
 */
InlineResponse20022Properties.prototype['leader'] = undefined;

/**
 * @member {Number} members
 */
InlineResponse20022Properties.prototype['members'] = undefined;






export default InlineResponse20022Properties;
