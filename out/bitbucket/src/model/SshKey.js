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
import ModelObject from './ModelObject';
import SshKeyAllOf from './SshKeyAllOf';

/**
 * The SshKey model module.
 * @module model/SshKey
 * @version 1.1.2
 */
class SshKey {
    /**
     * Constructs a new <code>SshKey</code>.
     * @alias module:model/SshKey
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/SshKeyAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);SshKeyAllOf.initialize(this);
        SshKey.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>SshKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SshKey} obj Optional instance to populate.
     * @return {module:model/SshKey} The populated <code>SshKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SshKey();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            SshKeyAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('last_used')) {
                obj['last_used'] = ApiClient.convertToType(data['last_used'], 'Date');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = BranchingModelSettingsAllOfLinks.constructFromObject(data['links']);
            }
        }
        return obj;
    }


}

/**
 * The SSH key's immutable ID.
 * @member {String} uuid
 */
SshKey.prototype['uuid'] = undefined;

/**
 * The SSH public key value in OpenSSH format.
 * @member {String} key
 */
SshKey.prototype['key'] = undefined;

/**
 * The comment parsed from the SSH key (if present)
 * @member {String} comment
 */
SshKey.prototype['comment'] = undefined;

/**
 * The user-defined label for the SSH key
 * @member {String} label
 */
SshKey.prototype['label'] = undefined;

/**
 * @member {Date} created_on
 */
SshKey.prototype['created_on'] = undefined;

/**
 * @member {Date} last_used
 */
SshKey.prototype['last_used'] = undefined;

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
SshKey.prototype['links'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement SshKeyAllOf interface:
/**
 * The SSH key's immutable ID.
 * @member {String} uuid
 */
SshKeyAllOf.prototype['uuid'] = undefined;
/**
 * The SSH public key value in OpenSSH format.
 * @member {String} key
 */
SshKeyAllOf.prototype['key'] = undefined;
/**
 * The comment parsed from the SSH key (if present)
 * @member {String} comment
 */
SshKeyAllOf.prototype['comment'] = undefined;
/**
 * The user-defined label for the SSH key
 * @member {String} label
 */
SshKeyAllOf.prototype['label'] = undefined;
/**
 * @member {Date} created_on
 */
SshKeyAllOf.prototype['created_on'] = undefined;
/**
 * @member {Date} last_used
 */
SshKeyAllOf.prototype['last_used'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
SshKeyAllOf.prototype['links'] = undefined;




export default SshKey;

