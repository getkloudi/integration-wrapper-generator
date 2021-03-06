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
 * The ProjectHook model module.
 * @module model/ProjectHook
 * @version 1.1.0
 */
class ProjectHook {
    /**
     * Constructs a new <code>ProjectHook</code>.
     * Deletes project hook
     * @alias module:model/ProjectHook
     */
    constructor() { 
        
        ProjectHook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectHook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectHook} obj Optional instance to populate.
     * @return {module:model/ProjectHook} The populated <code>ProjectHook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectHook();

            if (data.hasOwnProperty('build_events')) {
                obj['build_events'] = ApiClient.convertToType(data['build_events'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('enable_ssl_verification')) {
                obj['enable_ssl_verification'] = ApiClient.convertToType(data['enable_ssl_verification'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('issues_events')) {
                obj['issues_events'] = ApiClient.convertToType(data['issues_events'], 'String');
            }
            if (data.hasOwnProperty('merge_requests_events')) {
                obj['merge_requests_events'] = ApiClient.convertToType(data['merge_requests_events'], 'String');
            }
            if (data.hasOwnProperty('note_events')) {
                obj['note_events'] = ApiClient.convertToType(data['note_events'], 'String');
            }
            if (data.hasOwnProperty('pipeline_events')) {
                obj['pipeline_events'] = ApiClient.convertToType(data['pipeline_events'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('push_events')) {
                obj['push_events'] = ApiClient.convertToType(data['push_events'], 'String');
            }
            if (data.hasOwnProperty('tag_push_events')) {
                obj['tag_push_events'] = ApiClient.convertToType(data['tag_push_events'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('wiki_page_events')) {
                obj['wiki_page_events'] = ApiClient.convertToType(data['wiki_page_events'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} build_events
 */
ProjectHook.prototype['build_events'] = undefined;

/**
 * @member {String} created_at
 */
ProjectHook.prototype['created_at'] = undefined;

/**
 * @member {String} enable_ssl_verification
 */
ProjectHook.prototype['enable_ssl_verification'] = undefined;

/**
 * @member {String} id
 */
ProjectHook.prototype['id'] = undefined;

/**
 * @member {String} issues_events
 */
ProjectHook.prototype['issues_events'] = undefined;

/**
 * @member {String} merge_requests_events
 */
ProjectHook.prototype['merge_requests_events'] = undefined;

/**
 * @member {String} note_events
 */
ProjectHook.prototype['note_events'] = undefined;

/**
 * @member {String} pipeline_events
 */
ProjectHook.prototype['pipeline_events'] = undefined;

/**
 * @member {String} project_id
 */
ProjectHook.prototype['project_id'] = undefined;

/**
 * @member {String} push_events
 */
ProjectHook.prototype['push_events'] = undefined;

/**
 * @member {String} tag_push_events
 */
ProjectHook.prototype['tag_push_events'] = undefined;

/**
 * @member {String} url
 */
ProjectHook.prototype['url'] = undefined;

/**
 * @member {String} wiki_page_events
 */
ProjectHook.prototype['wiki_page_events'] = undefined;






export default ProjectHook;

