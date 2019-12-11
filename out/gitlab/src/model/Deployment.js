/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
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
import Build from './Build';
import EnvironmentBasic from './EnvironmentBasic';
import UserBasic from './UserBasic';

/**
 * The Deployment model module.
 * @module model/Deployment
 * @version 1.1.0
 */
class Deployment {
    /**
     * Constructs a new <code>Deployment</code>.
     * This feature was introduced in GitLab 8.11.
     * @alias module:model/Deployment
     */
    constructor() { 
        
        Deployment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Deployment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deployment} obj Optional instance to populate.
     * @return {module:model/Deployment} The populated <code>Deployment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Deployment();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deployable')) {
                obj['deployable'] = Build.constructFromObject(data['deployable']);
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = EnvironmentBasic.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('iid')) {
                obj['iid'] = ApiClient.convertToType(data['iid'], 'String');
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserBasic.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} created_at
 */
Deployment.prototype['created_at'] = undefined;

/**
 * @member {module:model/Build} deployable
 */
Deployment.prototype['deployable'] = undefined;

/**
 * @member {module:model/EnvironmentBasic} environment
 */
Deployment.prototype['environment'] = undefined;

/**
 * @member {String} id
 */
Deployment.prototype['id'] = undefined;

/**
 * @member {String} iid
 */
Deployment.prototype['iid'] = undefined;

/**
 * @member {String} ref
 */
Deployment.prototype['ref'] = undefined;

/**
 * @member {String} sha
 */
Deployment.prototype['sha'] = undefined;

/**
 * @member {module:model/UserBasic} user
 */
Deployment.prototype['user'] = undefined;






export default Deployment;

