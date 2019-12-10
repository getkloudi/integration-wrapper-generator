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

/**
 * The ProjectStatistics model module.
 * @module model/ProjectStatistics
 * @version 1.0.0
 */
class ProjectStatistics {
    /**
     * Constructs a new <code>ProjectStatistics</code>.
     * @alias module:model/ProjectStatistics
     */
    constructor() { 
        
        ProjectStatistics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectStatistics} obj Optional instance to populate.
     * @return {module:model/ProjectStatistics} The populated <code>ProjectStatistics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectStatistics();

            if (data.hasOwnProperty('build_artifacts_size')) {
                obj['build_artifacts_size'] = ApiClient.convertToType(data['build_artifacts_size'], 'String');
            }
            if (data.hasOwnProperty('commit_count')) {
                obj['commit_count'] = ApiClient.convertToType(data['commit_count'], 'String');
            }
            if (data.hasOwnProperty('lfs_objects_size')) {
                obj['lfs_objects_size'] = ApiClient.convertToType(data['lfs_objects_size'], 'String');
            }
            if (data.hasOwnProperty('repository_size')) {
                obj['repository_size'] = ApiClient.convertToType(data['repository_size'], 'String');
            }
            if (data.hasOwnProperty('storage_size')) {
                obj['storage_size'] = ApiClient.convertToType(data['storage_size'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} build_artifacts_size
 */
ProjectStatistics.prototype['build_artifacts_size'] = undefined;

/**
 * @member {String} commit_count
 */
ProjectStatistics.prototype['commit_count'] = undefined;

/**
 * @member {String} lfs_objects_size
 */
ProjectStatistics.prototype['lfs_objects_size'] = undefined;

/**
 * @member {String} repository_size
 */
ProjectStatistics.prototype['repository_size'] = undefined;

/**
 * @member {String} storage_size
 */
ProjectStatistics.prototype['storage_size'] = undefined;






export default ProjectStatistics;

