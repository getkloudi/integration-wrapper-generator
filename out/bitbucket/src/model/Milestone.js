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
import BranchingModelSettingsAllOfLinks from './BranchingModelSettingsAllOfLinks';
import MilestoneAllOf from './MilestoneAllOf';
import ModelObject from './ModelObject';

/**
 * The Milestone model module.
 * @module model/Milestone
 * @version 1.2.0
 */
class Milestone {
    /**
     * Constructs a new <code>Milestone</code>.
     * @alias module:model/Milestone
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/MilestoneAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);MilestoneAllOf.initialize(this);
        Milestone.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Milestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Milestone} obj Optional instance to populate.
     * @return {module:model/Milestone} The populated <code>Milestone</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Milestone();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            MilestoneAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = BranchingModelSettingsAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
Milestone.prototype['links'] = undefined;

/**
 * @member {String} name
 */
Milestone.prototype['name'] = undefined;

/**
 * @member {Number} id
 */
Milestone.prototype['id'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement MilestoneAllOf interface:
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
MilestoneAllOf.prototype['links'] = undefined;
/**
 * @member {String} name
 */
MilestoneAllOf.prototype['name'] = undefined;
/**
 * @member {Number} id
 */
MilestoneAllOf.prototype['id'] = undefined;




export default Milestone;

