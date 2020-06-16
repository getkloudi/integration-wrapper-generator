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
import IssueTransition from './IssueTransition';

/**
 * The Transitions model module.
 * @module model/Transitions
 * @version 1.4.0
 */
class Transitions {
    /**
     * Constructs a new <code>Transitions</code>.
     * List of issue transitions.
     * @alias module:model/Transitions
     */
    constructor() { 
        
        Transitions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Transitions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transitions} obj Optional instance to populate.
     * @return {module:model/Transitions} The populated <code>Transitions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transitions();

            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('transitions')) {
                obj['transitions'] = ApiClient.convertToType(data['transitions'], [IssueTransition]);
            }
        }
        return obj;
    }


}

/**
 * Expand options that include additional transitions details in the response.
 * @member {String} expand
 */
Transitions.prototype['expand'] = undefined;

/**
 * List of issue transitions.
 * @member {Array.<module:model/IssueTransition>} transitions
 */
Transitions.prototype['transitions'] = undefined;






export default Transitions;

