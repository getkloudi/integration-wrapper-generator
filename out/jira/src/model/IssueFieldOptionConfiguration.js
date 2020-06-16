/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IssueFieldOptionScopeBean from './IssueFieldOptionScopeBean';

/**
 * The IssueFieldOptionConfiguration model module.
 * @module model/IssueFieldOptionConfiguration
 * @version 1.4.0
 */
class IssueFieldOptionConfiguration {
    /**
     * Constructs a new <code>IssueFieldOptionConfiguration</code>.
     * Details of the projects the option is available in.
     * @alias module:model/IssueFieldOptionConfiguration
     */
    constructor() { 
        
        IssueFieldOptionConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueFieldOptionConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueFieldOptionConfiguration} obj Optional instance to populate.
     * @return {module:model/IssueFieldOptionConfiguration} The populated <code>IssueFieldOptionConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueFieldOptionConfiguration();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], IssueFieldOptionScopeBean);
            }
        }
        return obj;
    }


}

/**
 * DEPRECATED
 * @member {Array.<module:model/IssueFieldOptionConfiguration.AttributesEnum>} attributes
 */
IssueFieldOptionConfiguration.prototype['attributes'] = undefined;

/**
 * Defines the projects that the option is available in. If the scope is not defined, then the option is available in all projects.
 * @member {module:model/IssueFieldOptionScopeBean} scope
 */
IssueFieldOptionConfiguration.prototype['scope'] = undefined;





/**
 * Allowed values for the <code>attributes</code> property.
 * @enum {String}
 * @readonly
 */
IssueFieldOptionConfiguration['AttributesEnum'] = {

    /**
     * value: "notSelectable"
     * @const
     */
    "notSelectable": "notSelectable",

    /**
     * value: "defaultValue"
     * @const
     */
    "defaultValue": "defaultValue"
};



export default IssueFieldOptionConfiguration;

