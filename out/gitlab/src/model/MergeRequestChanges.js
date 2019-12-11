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
import Milestone from './Milestone';
import RepoDiff from './RepoDiff';
import UserBasic from './UserBasic';

/**
 * The MergeRequestChanges model module.
 * @module model/MergeRequestChanges
 * @version 1.1.0
 */
class MergeRequestChanges {
    /**
     * Constructs a new <code>MergeRequestChanges</code>.
     * Show the merge request changes
     * @alias module:model/MergeRequestChanges
     */
    constructor() { 
        
        MergeRequestChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MergeRequestChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergeRequestChanges} obj Optional instance to populate.
     * @return {module:model/MergeRequestChanges} The populated <code>MergeRequestChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MergeRequestChanges();

            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = UserBasic.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = UserBasic.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = RepoDiff.constructFromObject(data['changes']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('downvotes')) {
                obj['downvotes'] = ApiClient.convertToType(data['downvotes'], 'String');
            }
            if (data.hasOwnProperty('force_remove_source_branch')) {
                obj['force_remove_source_branch'] = ApiClient.convertToType(data['force_remove_source_branch'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('iid')) {
                obj['iid'] = ApiClient.convertToType(data['iid'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], 'String');
            }
            if (data.hasOwnProperty('merge_commit_sha')) {
                obj['merge_commit_sha'] = ApiClient.convertToType(data['merge_commit_sha'], 'String');
            }
            if (data.hasOwnProperty('merge_status')) {
                obj['merge_status'] = ApiClient.convertToType(data['merge_status'], 'String');
            }
            if (data.hasOwnProperty('merge_when_build_succeeds')) {
                obj['merge_when_build_succeeds'] = ApiClient.convertToType(data['merge_when_build_succeeds'], 'String');
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = Milestone.constructFromObject(data['milestone']);
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('should_remove_source_branch')) {
                obj['should_remove_source_branch'] = ApiClient.convertToType(data['should_remove_source_branch'], 'String');
            }
            if (data.hasOwnProperty('source_branch')) {
                obj['source_branch'] = ApiClient.convertToType(data['source_branch'], 'String');
            }
            if (data.hasOwnProperty('source_project_id')) {
                obj['source_project_id'] = ApiClient.convertToType(data['source_project_id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('subscribed')) {
                obj['subscribed'] = ApiClient.convertToType(data['subscribed'], 'String');
            }
            if (data.hasOwnProperty('target_branch')) {
                obj['target_branch'] = ApiClient.convertToType(data['target_branch'], 'String');
            }
            if (data.hasOwnProperty('target_project_id')) {
                obj['target_project_id'] = ApiClient.convertToType(data['target_project_id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('upvotes')) {
                obj['upvotes'] = ApiClient.convertToType(data['upvotes'], 'String');
            }
            if (data.hasOwnProperty('user_notes_count')) {
                obj['user_notes_count'] = ApiClient.convertToType(data['user_notes_count'], 'String');
            }
            if (data.hasOwnProperty('web_url')) {
                obj['web_url'] = ApiClient.convertToType(data['web_url'], 'String');
            }
            if (data.hasOwnProperty('work_in_progress')) {
                obj['work_in_progress'] = ApiClient.convertToType(data['work_in_progress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/UserBasic} assignee
 */
MergeRequestChanges.prototype['assignee'] = undefined;

/**
 * @member {module:model/UserBasic} author
 */
MergeRequestChanges.prototype['author'] = undefined;

/**
 * @member {module:model/RepoDiff} changes
 */
MergeRequestChanges.prototype['changes'] = undefined;

/**
 * @member {String} created_at
 */
MergeRequestChanges.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
MergeRequestChanges.prototype['description'] = undefined;

/**
 * @member {String} downvotes
 */
MergeRequestChanges.prototype['downvotes'] = undefined;

/**
 * @member {String} force_remove_source_branch
 */
MergeRequestChanges.prototype['force_remove_source_branch'] = undefined;

/**
 * @member {String} id
 */
MergeRequestChanges.prototype['id'] = undefined;

/**
 * @member {String} iid
 */
MergeRequestChanges.prototype['iid'] = undefined;

/**
 * @member {String} labels
 */
MergeRequestChanges.prototype['labels'] = undefined;

/**
 * @member {String} merge_commit_sha
 */
MergeRequestChanges.prototype['merge_commit_sha'] = undefined;

/**
 * @member {String} merge_status
 */
MergeRequestChanges.prototype['merge_status'] = undefined;

/**
 * @member {String} merge_when_build_succeeds
 */
MergeRequestChanges.prototype['merge_when_build_succeeds'] = undefined;

/**
 * @member {module:model/Milestone} milestone
 */
MergeRequestChanges.prototype['milestone'] = undefined;

/**
 * @member {String} project_id
 */
MergeRequestChanges.prototype['project_id'] = undefined;

/**
 * @member {String} sha
 */
MergeRequestChanges.prototype['sha'] = undefined;

/**
 * @member {String} should_remove_source_branch
 */
MergeRequestChanges.prototype['should_remove_source_branch'] = undefined;

/**
 * @member {String} source_branch
 */
MergeRequestChanges.prototype['source_branch'] = undefined;

/**
 * @member {String} source_project_id
 */
MergeRequestChanges.prototype['source_project_id'] = undefined;

/**
 * @member {String} state
 */
MergeRequestChanges.prototype['state'] = undefined;

/**
 * @member {String} subscribed
 */
MergeRequestChanges.prototype['subscribed'] = undefined;

/**
 * @member {String} target_branch
 */
MergeRequestChanges.prototype['target_branch'] = undefined;

/**
 * @member {String} target_project_id
 */
MergeRequestChanges.prototype['target_project_id'] = undefined;

/**
 * @member {String} title
 */
MergeRequestChanges.prototype['title'] = undefined;

/**
 * @member {String} updated_at
 */
MergeRequestChanges.prototype['updated_at'] = undefined;

/**
 * @member {String} upvotes
 */
MergeRequestChanges.prototype['upvotes'] = undefined;

/**
 * @member {String} user_notes_count
 */
MergeRequestChanges.prototype['user_notes_count'] = undefined;

/**
 * @member {String} web_url
 */
MergeRequestChanges.prototype['web_url'] = undefined;

/**
 * @member {String} work_in_progress
 */
MergeRequestChanges.prototype['work_in_progress'] = undefined;






export default MergeRequestChanges;

