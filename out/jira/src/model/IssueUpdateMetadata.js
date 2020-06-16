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
import FieldMetadata from './FieldMetadata';

/**
 * The IssueUpdateMetadata model module.
 * @module model/IssueUpdateMetadata
 * @version 1.4.0
 */
class IssueUpdateMetadata {
    /**
     * Constructs a new <code>IssueUpdateMetadata</code>.
     * A list of editable field details.
     * @alias module:model/IssueUpdateMetadata
     */
    constructor() { 
        
        IssueUpdateMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueUpdateMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueUpdateMetadata} obj Optional instance to populate.
     * @return {module:model/IssueUpdateMetadata} The populated <code>IssueUpdateMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueUpdateMetadata();

            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': FieldMetadata});
            }
        }
        return obj;
    }


}

/**
 * A list of editable field details.
 * @member {Object.<String, module:model/FieldMetadata>} fields
 */
IssueUpdateMetadata.prototype['fields'] = undefined;






export default IssueUpdateMetadata;

