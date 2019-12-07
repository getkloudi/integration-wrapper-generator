/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
import Actor from './Actor';

/**
 * The SearchCodeRepository model module.
 * @module model/SearchCodeRepository
 * @version 1.0.0
 */
class SearchCodeRepository {
    /**
     * Constructs a new <code>SearchCodeRepository</code>.
     * @alias module:model/SearchCodeRepository
     */
    constructor() { 
        
        SearchCodeRepository.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchCodeRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchCodeRepository} obj Optional instance to populate.
     * @return {module:model/SearchCodeRepository} The populated <code>SearchCodeRepository</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchCodeRepository();

            if (data.hasOwnProperty('archive_url')) {
                obj['archive_url'] = ApiClient.convertToType(data['archive_url'], 'String');
            }
            if (data.hasOwnProperty('assignees_url')) {
                obj['assignees_url'] = ApiClient.convertToType(data['assignees_url'], 'String');
            }
            if (data.hasOwnProperty('blobs_url')) {
                obj['blobs_url'] = ApiClient.convertToType(data['blobs_url'], 'String');
            }
            if (data.hasOwnProperty('branches_url')) {
                obj['branches_url'] = ApiClient.convertToType(data['branches_url'], 'String');
            }
            if (data.hasOwnProperty('collaborators_url')) {
                obj['collaborators_url'] = ApiClient.convertToType(data['collaborators_url'], 'String');
            }
            if (data.hasOwnProperty('comments_url')) {
                obj['comments_url'] = ApiClient.convertToType(data['comments_url'], 'String');
            }
            if (data.hasOwnProperty('commits_url')) {
                obj['commits_url'] = ApiClient.convertToType(data['commits_url'], 'String');
            }
            if (data.hasOwnProperty('compare_url')) {
                obj['compare_url'] = ApiClient.convertToType(data['compare_url'], 'String');
            }
            if (data.hasOwnProperty('contents_url')) {
                obj['contents_url'] = ApiClient.convertToType(data['contents_url'], 'String');
            }
            if (data.hasOwnProperty('contributors_url')) {
                obj['contributors_url'] = ApiClient.convertToType(data['contributors_url'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('downloads_url')) {
                obj['downloads_url'] = ApiClient.convertToType(data['downloads_url'], 'String');
            }
            if (data.hasOwnProperty('events_url')) {
                obj['events_url'] = ApiClient.convertToType(data['events_url'], 'String');
            }
            if (data.hasOwnProperty('fork')) {
                obj['fork'] = ApiClient.convertToType(data['fork'], 'Boolean');
            }
            if (data.hasOwnProperty('forks_url')) {
                obj['forks_url'] = ApiClient.convertToType(data['forks_url'], 'String');
            }
            if (data.hasOwnProperty('full_name')) {
                obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
            }
            if (data.hasOwnProperty('git_commits_url')) {
                obj['git_commits_url'] = ApiClient.convertToType(data['git_commits_url'], 'String');
            }
            if (data.hasOwnProperty('git_refs_url')) {
                obj['git_refs_url'] = ApiClient.convertToType(data['git_refs_url'], 'String');
            }
            if (data.hasOwnProperty('git_tags_url')) {
                obj['git_tags_url'] = ApiClient.convertToType(data['git_tags_url'], 'String');
            }
            if (data.hasOwnProperty('hooks_url')) {
                obj['hooks_url'] = ApiClient.convertToType(data['hooks_url'], 'String');
            }
            if (data.hasOwnProperty('html_url')) {
                obj['html_url'] = ApiClient.convertToType(data['html_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('issue_comment_url')) {
                obj['issue_comment_url'] = ApiClient.convertToType(data['issue_comment_url'], 'String');
            }
            if (data.hasOwnProperty('issue_events_url')) {
                obj['issue_events_url'] = ApiClient.convertToType(data['issue_events_url'], 'String');
            }
            if (data.hasOwnProperty('issues_url')) {
                obj['issues_url'] = ApiClient.convertToType(data['issues_url'], 'String');
            }
            if (data.hasOwnProperty('keys_url')) {
                obj['keys_url'] = ApiClient.convertToType(data['keys_url'], 'String');
            }
            if (data.hasOwnProperty('labels_url')) {
                obj['labels_url'] = ApiClient.convertToType(data['labels_url'], 'String');
            }
            if (data.hasOwnProperty('languages_url')) {
                obj['languages_url'] = ApiClient.convertToType(data['languages_url'], 'String');
            }
            if (data.hasOwnProperty('merges_url')) {
                obj['merges_url'] = ApiClient.convertToType(data['merges_url'], 'String');
            }
            if (data.hasOwnProperty('milestones_url')) {
                obj['milestones_url'] = ApiClient.convertToType(data['milestones_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notifications_url')) {
                obj['notifications_url'] = ApiClient.convertToType(data['notifications_url'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = Actor.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('pulls_url')) {
                obj['pulls_url'] = ApiClient.convertToType(data['pulls_url'], 'String');
            }
            if (data.hasOwnProperty('stargazers_url')) {
                obj['stargazers_url'] = ApiClient.convertToType(data['stargazers_url'], 'String');
            }
            if (data.hasOwnProperty('statuses_url')) {
                obj['statuses_url'] = ApiClient.convertToType(data['statuses_url'], 'String');
            }
            if (data.hasOwnProperty('subscribers_url')) {
                obj['subscribers_url'] = ApiClient.convertToType(data['subscribers_url'], 'String');
            }
            if (data.hasOwnProperty('subscription_url')) {
                obj['subscription_url'] = ApiClient.convertToType(data['subscription_url'], 'String');
            }
            if (data.hasOwnProperty('tags_url')) {
                obj['tags_url'] = ApiClient.convertToType(data['tags_url'], 'String');
            }
            if (data.hasOwnProperty('teams_url')) {
                obj['teams_url'] = ApiClient.convertToType(data['teams_url'], 'String');
            }
            if (data.hasOwnProperty('trees_url')) {
                obj['trees_url'] = ApiClient.convertToType(data['trees_url'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} archive_url
 */
SearchCodeRepository.prototype['archive_url'] = undefined;

/**
 * @member {String} assignees_url
 */
SearchCodeRepository.prototype['assignees_url'] = undefined;

/**
 * @member {String} blobs_url
 */
SearchCodeRepository.prototype['blobs_url'] = undefined;

/**
 * @member {String} branches_url
 */
SearchCodeRepository.prototype['branches_url'] = undefined;

/**
 * @member {String} collaborators_url
 */
SearchCodeRepository.prototype['collaborators_url'] = undefined;

/**
 * @member {String} comments_url
 */
SearchCodeRepository.prototype['comments_url'] = undefined;

/**
 * @member {String} commits_url
 */
SearchCodeRepository.prototype['commits_url'] = undefined;

/**
 * @member {String} compare_url
 */
SearchCodeRepository.prototype['compare_url'] = undefined;

/**
 * @member {String} contents_url
 */
SearchCodeRepository.prototype['contents_url'] = undefined;

/**
 * @member {String} contributors_url
 */
SearchCodeRepository.prototype['contributors_url'] = undefined;

/**
 * @member {String} description
 */
SearchCodeRepository.prototype['description'] = undefined;

/**
 * @member {String} downloads_url
 */
SearchCodeRepository.prototype['downloads_url'] = undefined;

/**
 * @member {String} events_url
 */
SearchCodeRepository.prototype['events_url'] = undefined;

/**
 * @member {Boolean} fork
 */
SearchCodeRepository.prototype['fork'] = undefined;

/**
 * @member {String} forks_url
 */
SearchCodeRepository.prototype['forks_url'] = undefined;

/**
 * @member {String} full_name
 */
SearchCodeRepository.prototype['full_name'] = undefined;

/**
 * @member {String} git_commits_url
 */
SearchCodeRepository.prototype['git_commits_url'] = undefined;

/**
 * @member {String} git_refs_url
 */
SearchCodeRepository.prototype['git_refs_url'] = undefined;

/**
 * @member {String} git_tags_url
 */
SearchCodeRepository.prototype['git_tags_url'] = undefined;

/**
 * @member {String} hooks_url
 */
SearchCodeRepository.prototype['hooks_url'] = undefined;

/**
 * @member {String} html_url
 */
SearchCodeRepository.prototype['html_url'] = undefined;

/**
 * @member {Number} id
 */
SearchCodeRepository.prototype['id'] = undefined;

/**
 * @member {String} issue_comment_url
 */
SearchCodeRepository.prototype['issue_comment_url'] = undefined;

/**
 * @member {String} issue_events_url
 */
SearchCodeRepository.prototype['issue_events_url'] = undefined;

/**
 * @member {String} issues_url
 */
SearchCodeRepository.prototype['issues_url'] = undefined;

/**
 * @member {String} keys_url
 */
SearchCodeRepository.prototype['keys_url'] = undefined;

/**
 * @member {String} labels_url
 */
SearchCodeRepository.prototype['labels_url'] = undefined;

/**
 * @member {String} languages_url
 */
SearchCodeRepository.prototype['languages_url'] = undefined;

/**
 * @member {String} merges_url
 */
SearchCodeRepository.prototype['merges_url'] = undefined;

/**
 * @member {String} milestones_url
 */
SearchCodeRepository.prototype['milestones_url'] = undefined;

/**
 * @member {String} name
 */
SearchCodeRepository.prototype['name'] = undefined;

/**
 * @member {String} notifications_url
 */
SearchCodeRepository.prototype['notifications_url'] = undefined;

/**
 * @member {module:model/Actor} owner
 */
SearchCodeRepository.prototype['owner'] = undefined;

/**
 * @member {Boolean} private
 */
SearchCodeRepository.prototype['private'] = undefined;

/**
 * @member {String} pulls_url
 */
SearchCodeRepository.prototype['pulls_url'] = undefined;

/**
 * @member {String} stargazers_url
 */
SearchCodeRepository.prototype['stargazers_url'] = undefined;

/**
 * @member {String} statuses_url
 */
SearchCodeRepository.prototype['statuses_url'] = undefined;

/**
 * @member {String} subscribers_url
 */
SearchCodeRepository.prototype['subscribers_url'] = undefined;

/**
 * @member {String} subscription_url
 */
SearchCodeRepository.prototype['subscription_url'] = undefined;

/**
 * @member {String} tags_url
 */
SearchCodeRepository.prototype['tags_url'] = undefined;

/**
 * @member {String} teams_url
 */
SearchCodeRepository.prototype['teams_url'] = undefined;

/**
 * @member {String} trees_url
 */
SearchCodeRepository.prototype['trees_url'] = undefined;

/**
 * @member {String} url
 */
SearchCodeRepository.prototype['url'] = undefined;






export default SearchCodeRepository;

