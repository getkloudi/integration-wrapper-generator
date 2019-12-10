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
import ModelObject from './ModelObject';
import PipelineSelectorAllOf from './PipelineSelectorAllOf';

/**
 * The PipelineSelector model module.
 * @module model/PipelineSelector
 * @version 1.0.0
 */
class PipelineSelector {
    /**
     * Constructs a new <code>PipelineSelector</code>.
     * @alias module:model/PipelineSelector
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/PipelineSelectorAllOf
     * @param type {module:model/PipelineSelector.TypeEnum} The type of selector.
     */
    constructor(type) { 
        ModelObject.initialize(this, type);PipelineSelectorAllOf.initialize(this);
        PipelineSelector.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>PipelineSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineSelector} obj Optional instance to populate.
     * @return {module:model/PipelineSelector} The populated <code>PipelineSelector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineSelector();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            PipelineSelectorAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the matching pipeline definition.
 * @member {String} pattern
 */
PipelineSelector.prototype['pattern'] = undefined;

/**
 * The type of selector.
 * @member {module:model/PipelineSelector.TypeEnum} type
 */
PipelineSelector.prototype['type'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement PipelineSelectorAllOf interface:
/**
 * The name of the matching pipeline definition.
 * @member {String} pattern
 */
PipelineSelectorAllOf.prototype['pattern'] = undefined;
/**
 * The type of selector.
 * @member {module:model/PipelineSelectorAllOf.TypeEnum} type
 */
PipelineSelectorAllOf.prototype['type'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PipelineSelector['TypeEnum'] = {

    /**
     * value: "branches"
     * @const
     */
    "branches": "branches",

    /**
     * value: "tags"
     * @const
     */
    "tags": "tags",

    /**
     * value: "bookmarks"
     * @const
     */
    "bookmarks": "bookmarks",

    /**
     * value: "default"
     * @const
     */
    "default": "default",

    /**
     * value: "custom"
     * @const
     */
    "custom": "custom"
};



export default PipelineSelector;
