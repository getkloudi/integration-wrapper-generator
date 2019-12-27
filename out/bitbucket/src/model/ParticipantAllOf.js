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
import User from './User';

/**
 * The ParticipantAllOf model module.
 * @module model/ParticipantAllOf
 * @version 1.1.0
 */
class ParticipantAllOf {
    /**
     * Constructs a new <code>ParticipantAllOf</code>.
     * Object describing a user&#39;s role on resources like commits or pull requests.
     * @alias module:model/ParticipantAllOf
     */
    constructor() { 
        
        ParticipantAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParticipantAllOf} obj Optional instance to populate.
     * @return {module:model/ParticipantAllOf} The populated <code>ParticipantAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantAllOf();

            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('approved')) {
                obj['approved'] = ApiClient.convertToType(data['approved'], 'Boolean');
            }
            if (data.hasOwnProperty('participated_on')) {
                obj['participated_on'] = ApiClient.convertToType(data['participated_on'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/User} user
 */
ParticipantAllOf.prototype['user'] = undefined;

/**
 * @member {module:model/ParticipantAllOf.RoleEnum} role
 */
ParticipantAllOf.prototype['role'] = undefined;

/**
 * @member {Boolean} approved
 */
ParticipantAllOf.prototype['approved'] = undefined;

/**
 * The ISO8601 timestamp of the participant's action. For approvers, this is the time of their approval. For commenters and pull request reviewers who are not approvers, this is the time they last commented, or null if they have not commented.
 * @member {Date} participated_on
 */
ParticipantAllOf.prototype['participated_on'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
ParticipantAllOf['RoleEnum'] = {

    /**
     * value: "PARTICIPANT"
     * @const
     */
    "PARTICIPANT": "PARTICIPANT",

    /**
     * value: "REVIEWER"
     * @const
     */
    "REVIEWER": "REVIEWER"
};



export default ParticipantAllOf;

