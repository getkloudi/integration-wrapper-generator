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
import ComponentAllOf from './ComponentAllOf';
import ModelObject from './ModelObject';

/**
 * The Component model module.
 * @module model/Component
 * @version 1.1.2
 */
class Component {
    /**
     * Constructs a new <code>Component</code>.
     * @alias module:model/Component
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/ComponentAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);ComponentAllOf.initialize(this);
        Component.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Component</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Component} obj Optional instance to populate.
     * @return {module:model/Component} The populated <code>Component</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Component();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            ComponentAllOf.constructFromObject(data, obj);

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
Component.prototype['links'] = undefined;

/**
 * @member {String} name
 */
Component.prototype['name'] = undefined;

/**
 * @member {Number} id
 */
Component.prototype['id'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement ComponentAllOf interface:
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
ComponentAllOf.prototype['links'] = undefined;
/**
 * @member {String} name
 */
ComponentAllOf.prototype['name'] = undefined;
/**
 * @member {Number} id
 */
ComponentAllOf.prototype['id'] = undefined;




export default Component;

