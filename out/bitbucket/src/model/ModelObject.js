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

/**
 * The ModelObject model module.
 * @module model/ModelObject
 * @version 1.1.0
 */
class ModelObject {
    /**
     * Constructs a new <code>ModelObject</code>.
     * Base type for most resource objects. It defines the common &#x60;type&#x60; element that identifies an object&#39;s type. It also identifies the element as Swagger&#39;s &#x60;discriminator&#x60;.
     * @alias module:model/ModelObject
     * @param type {String} 
     */
    constructor(type) { 
        
        ModelObject.initialize(this, type);
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
     * Constructs a <code>ModelObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelObject} obj Optional instance to populate.
     * @return {module:model/ModelObject} The populated <code>ModelObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelObject();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;






export default ModelObject;

