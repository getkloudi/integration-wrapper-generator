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
import StatusDetails from './StatusDetails';

/**
 * The IssueTransition model module.
 * @module model/IssueTransition
 * @version 1.4.0
 */
class IssueTransition {
    /**
     * Constructs a new <code>IssueTransition</code>.
     * Details of an issue transition.
     * @alias module:model/IssueTransition
     */
    constructor() { 
        
        IssueTransition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueTransition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTransition} obj Optional instance to populate.
     * @return {module:model/IssueTransition} The populated <code>IssueTransition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTransition();

            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': FieldMetadata});
            }
            if (data.hasOwnProperty('hasScreen')) {
                obj['hasScreen'] = ApiClient.convertToType(data['hasScreen'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isAvailable')) {
                obj['isAvailable'] = ApiClient.convertToType(data['isAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('isConditional')) {
                obj['isConditional'] = ApiClient.convertToType(data['isConditional'], 'Boolean');
            }
            if (data.hasOwnProperty('isGlobal')) {
                obj['isGlobal'] = ApiClient.convertToType(data['isGlobal'], 'Boolean');
            }
            if (data.hasOwnProperty('isInitial')) {
                obj['isInitial'] = ApiClient.convertToType(data['isInitial'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], StatusDetails);
            }
        }
        return obj;
    }


}

/**
 * Expand options that include additional transition details in the response.
 * @member {String} expand
 */
IssueTransition.prototype['expand'] = undefined;

/**
 * Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.
 * @member {Object.<String, module:model/FieldMetadata>} fields
 */
IssueTransition.prototype['fields'] = undefined;

/**
 * Whether there is a screen associated with the issue transition.
 * @member {Boolean} hasScreen
 */
IssueTransition.prototype['hasScreen'] = undefined;

/**
 * The ID of the issue transition. Required when specifying a transition to undertake.
 * @member {String} id
 */
IssueTransition.prototype['id'] = undefined;

/**
 * Whether the transition is available to be performed.
 * @member {Boolean} isAvailable
 */
IssueTransition.prototype['isAvailable'] = undefined;

/**
 * Whether the issue has to meet criteria before the issue transition is applied.
 * @member {Boolean} isConditional
 */
IssueTransition.prototype['isConditional'] = undefined;

/**
 * Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.
 * @member {Boolean} isGlobal
 */
IssueTransition.prototype['isGlobal'] = undefined;

/**
 * Whether this is the initial issue transition for the workflow.
 * @member {Boolean} isInitial
 */
IssueTransition.prototype['isInitial'] = undefined;

/**
 * The name of the issue transition.
 * @member {String} name
 */
IssueTransition.prototype['name'] = undefined;

/**
 * Details of the issue status after the transition.
 * @member {module:model/StatusDetails} to
 */
IssueTransition.prototype['to'] = undefined;






export default IssueTransition;
