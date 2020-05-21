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
import IssueAttachmentAllOf from './IssueAttachmentAllOf';
import ModelObject from './ModelObject';

/**
 * The IssueAttachment model module.
 * @module model/IssueAttachment
 * @version 1.2.0
 */
class IssueAttachment {
    /**
     * Constructs a new <code>IssueAttachment</code>.
     * @alias module:model/IssueAttachment
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/IssueAttachmentAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);IssueAttachmentAllOf.initialize(this);
        IssueAttachment.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>IssueAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueAttachment} obj Optional instance to populate.
     * @return {module:model/IssueAttachment} The populated <code>IssueAttachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueAttachment();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            IssueAttachmentAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = BranchingModelSettingsAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
IssueAttachment.prototype['links'] = undefined;

/**
 * @member {String} name
 */
IssueAttachment.prototype['name'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement IssueAttachmentAllOf interface:
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */
IssueAttachmentAllOf.prototype['links'] = undefined;
/**
 * @member {String} name
 */
IssueAttachmentAllOf.prototype['name'] = undefined;




export default IssueAttachment;

