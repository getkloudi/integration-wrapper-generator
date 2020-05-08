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
import CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication from './CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication';
import CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject from './CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject';

/**
 * The InlineResponse20042 model module.
 * @module model/InlineResponse20042
 * @version 1.1.0
 */
class InlineResponse20042 {
    /**
     * Constructs a new <code>InlineResponse20042</code>.
     * @alias module:model/InlineResponse20042
     * @param application {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication} 
     * @param globalId {String} 
     * @param id {Number} 
     * @param _object {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject} 
     * @param relationship {String} 
     * @param self {String} 
     */
    constructor(application, globalId, id, _object, relationship, self) { 
        
        InlineResponse20042.initialize(this, application, globalId, id, _object, relationship, self);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, application, globalId, id, _object, relationship, self) { 
        obj['application'] = application;
        obj['globalId'] = globalId;
        obj['id'] = id;
        obj['object'] = _object;
        obj['relationship'] = relationship;
        obj['self'] = self;
    }

    /**
     * Constructs a <code>InlineResponse20042</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20042} obj Optional instance to populate.
     * @return {module:model/InlineResponse20042} The populated <code>InlineResponse20042</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20042();

            if (data.hasOwnProperty('application')) {
                obj['application'] = CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication.constructFromObject(data['application']);
            }
            if (data.hasOwnProperty('globalId')) {
                obj['globalId'] = ApiClient.convertToType(data['globalId'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = ApiClient.convertToType(data['relationship'], 'String');
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication} application
 */
InlineResponse20042.prototype['application'] = undefined;

/**
 * @member {String} globalId
 */
InlineResponse20042.prototype['globalId'] = undefined;

/**
 * @member {Number} id
 */
InlineResponse20042.prototype['id'] = undefined;

/**
 * @member {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject} object
 */
InlineResponse20042.prototype['object'] = undefined;

/**
 * @member {String} relationship
 */
InlineResponse20042.prototype['relationship'] = undefined;

/**
 * @member {String} self
 */
InlineResponse20042.prototype['self'] = undefined;






export default InlineResponse20042;

