/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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

/**
 * The ReleaseCreate model module.
 * @module model/ReleaseCreate
 * @version 1.3.0
 */
class ReleaseCreate {
    /**
     * Constructs a new <code>ReleaseCreate</code>.
     * @alias module:model/ReleaseCreate
     */
    constructor() { 
        
        ReleaseCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReleaseCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReleaseCreate} obj Optional instance to populate.
     * @return {module:model/ReleaseCreate} The populated <code>ReleaseCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReleaseCreate();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('prerelease')) {
                obj['prerelease'] = ApiClient.convertToType(data['prerelease'], 'Boolean');
            }
            if (data.hasOwnProperty('tag_name')) {
                obj['tag_name'] = ApiClient.convertToType(data['tag_name'], 'String');
            }
            if (data.hasOwnProperty('target_commitish')) {
                obj['target_commitish'] = ApiClient.convertToType(data['target_commitish'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} body
 */
ReleaseCreate.prototype['body'] = undefined;

/**
 * @member {Boolean} draft
 */
ReleaseCreate.prototype['draft'] = undefined;

/**
 * @member {String} name
 */
ReleaseCreate.prototype['name'] = undefined;

/**
 * @member {Boolean} prerelease
 */
ReleaseCreate.prototype['prerelease'] = undefined;

/**
 * @member {String} tag_name
 */
ReleaseCreate.prototype['tag_name'] = undefined;

/**
 * @member {String} target_commitish
 */
ReleaseCreate.prototype['target_commitish'] = undefined;






export default ReleaseCreate;

