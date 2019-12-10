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
import UserBasic from './UserBasic';

/**
 * The Pipeline model module.
 * @module model/Pipeline
 * @version 1.0.0
 */
class Pipeline {
    /**
     * Constructs a new <code>Pipeline</code>.
     * This feature was introduced in GitLab 8.11.
     * @alias module:model/Pipeline
     */
    constructor() { 
        
        Pipeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Pipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pipeline} obj Optional instance to populate.
     * @return {module:model/Pipeline} The populated <code>Pipeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pipeline();

            if (data.hasOwnProperty('before_sha')) {
                obj['before_sha'] = ApiClient.convertToType(data['before_sha'], 'String');
            }
            if (data.hasOwnProperty('committed_at')) {
                obj['committed_at'] = ApiClient.convertToType(data['committed_at'], 'String');
            }
            if (data.hasOwnProperty('coverage')) {
                obj['coverage'] = ApiClient.convertToType(data['coverage'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('finished_at')) {
                obj['finished_at'] = ApiClient.convertToType(data['finished_at'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('ref')) {
                obj['ref'] = ApiClient.convertToType(data['ref'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = UserBasic.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('yaml_errors')) {
                obj['yaml_errors'] = ApiClient.convertToType(data['yaml_errors'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} before_sha
 */
Pipeline.prototype['before_sha'] = undefined;

/**
 * @member {String} committed_at
 */
Pipeline.prototype['committed_at'] = undefined;

/**
 * @member {String} coverage
 */
Pipeline.prototype['coverage'] = undefined;

/**
 * @member {String} created_at
 */
Pipeline.prototype['created_at'] = undefined;

/**
 * @member {String} duration
 */
Pipeline.prototype['duration'] = undefined;

/**
 * @member {String} finished_at
 */
Pipeline.prototype['finished_at'] = undefined;

/**
 * @member {String} id
 */
Pipeline.prototype['id'] = undefined;

/**
 * @member {String} ref
 */
Pipeline.prototype['ref'] = undefined;

/**
 * @member {String} sha
 */
Pipeline.prototype['sha'] = undefined;

/**
 * @member {String} started_at
 */
Pipeline.prototype['started_at'] = undefined;

/**
 * @member {String} status
 */
Pipeline.prototype['status'] = undefined;

/**
 * @member {String} tag
 */
Pipeline.prototype['tag'] = undefined;

/**
 * @member {String} updated_at
 */
Pipeline.prototype['updated_at'] = undefined;

/**
 * @member {module:model/UserBasic} user
 */
Pipeline.prototype['user'] = undefined;

/**
 * @member {String} yaml_errors
 */
Pipeline.prototype['yaml_errors'] = undefined;






export default Pipeline;
