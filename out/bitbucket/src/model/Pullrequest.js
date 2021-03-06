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
import Account from './Account';
import ModelObject from './ModelObject';
import Participant from './Participant';
import PullrequestAllOf from './PullrequestAllOf';
import PullrequestAllOfLinks from './PullrequestAllOfLinks';
import PullrequestAllOfMergeCommit from './PullrequestAllOfMergeCommit';
import PullrequestAllOfRendered from './PullrequestAllOfRendered';
import PullrequestAllOfRenderedTitle from './PullrequestAllOfRenderedTitle';
import PullrequestEndpoint from './PullrequestEndpoint';

/**
 * The Pullrequest model module.
 * @module model/Pullrequest
 * @version 1.2.0
 */
class Pullrequest {
    /**
     * Constructs a new <code>Pullrequest</code>.
     * @alias module:model/Pullrequest
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/PullrequestAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);PullrequestAllOf.initialize(this);
        Pullrequest.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Pullrequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pullrequest} obj Optional instance to populate.
     * @return {module:model/Pullrequest} The populated <code>Pullrequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pullrequest();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            PullrequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PullrequestAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('rendered')) {
                obj['rendered'] = PullrequestAllOfRendered.constructFromObject(data['rendered']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = PullrequestAllOfRenderedTitle.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = Account.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = PullrequestEndpoint.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = PullrequestEndpoint.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('merge_commit')) {
                obj['merge_commit'] = PullrequestAllOfMergeCommit.constructFromObject(data['merge_commit']);
            }
            if (data.hasOwnProperty('comment_count')) {
                obj['comment_count'] = ApiClient.convertToType(data['comment_count'], 'Number');
            }
            if (data.hasOwnProperty('task_count')) {
                obj['task_count'] = ApiClient.convertToType(data['task_count'], 'Number');
            }
            if (data.hasOwnProperty('close_source_branch')) {
                obj['close_source_branch'] = ApiClient.convertToType(data['close_source_branch'], 'Boolean');
            }
            if (data.hasOwnProperty('closed_by')) {
                obj['closed_by'] = Account.constructFromObject(data['closed_by']);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
            }
            if (data.hasOwnProperty('reviewers')) {
                obj['reviewers'] = ApiClient.convertToType(data['reviewers'], [Account]);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], [Participant]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PullrequestAllOfLinks} links
 */
Pullrequest.prototype['links'] = undefined;

/**
 * The pull request's unique ID. Note that pull request IDs are only unique within their associated repository.
 * @member {Number} id
 */
Pullrequest.prototype['id'] = undefined;

/**
 * Title of the pull request.
 * @member {String} title
 */
Pullrequest.prototype['title'] = undefined;

/**
 * @member {module:model/PullrequestAllOfRendered} rendered
 */
Pullrequest.prototype['rendered'] = undefined;

/**
 * @member {module:model/PullrequestAllOfRenderedTitle} summary
 */
Pullrequest.prototype['summary'] = undefined;

/**
 * The pull request's current status.
 * @member {module:model/Pullrequest.StateEnum} state
 */
Pullrequest.prototype['state'] = undefined;

/**
 * @member {module:model/Account} author
 */
Pullrequest.prototype['author'] = undefined;

/**
 * @member {module:model/PullrequestEndpoint} source
 */
Pullrequest.prototype['source'] = undefined;

/**
 * @member {module:model/PullrequestEndpoint} destination
 */
Pullrequest.prototype['destination'] = undefined;

/**
 * @member {module:model/PullrequestAllOfMergeCommit} merge_commit
 */
Pullrequest.prototype['merge_commit'] = undefined;

/**
 * The number of comments for a specific pull request.
 * @member {Number} comment_count
 */
Pullrequest.prototype['comment_count'] = undefined;

/**
 * The number of open tasks for a specific pull request.
 * @member {Number} task_count
 */
Pullrequest.prototype['task_count'] = undefined;

/**
 * A boolean flag indicating if merging the pull request closes the source branch.
 * @member {Boolean} close_source_branch
 */
Pullrequest.prototype['close_source_branch'] = undefined;

/**
 * @member {module:model/Account} closed_by
 */
Pullrequest.prototype['closed_by'] = undefined;

/**
 * Explains why a pull request was declined. This field is only applicable to pull requests in rejected state.
 * @member {String} reason
 */
Pullrequest.prototype['reason'] = undefined;

/**
 * The ISO8601 timestamp the request was created.
 * @member {Date} created_on
 */
Pullrequest.prototype['created_on'] = undefined;

/**
 * The ISO8601 timestamp the request was last updated.
 * @member {Date} updated_on
 */
Pullrequest.prototype['updated_on'] = undefined;

/**
 * The list of users that were added as reviewers on this pull request when it was created. For performance reasons, the API only includes this list on a pull request's `self` URL.
 * @member {Array.<module:model/Account>} reviewers
 */
Pullrequest.prototype['reviewers'] = undefined;

/**
 *         The list of users that are collaborating on this pull request.         Collaborators are user that:          * are added to the pull request as a reviewer (part of the reviewers           list)         * are not explicit reviewers, but have commented on the pull request         * are not explicit reviewers, but have approved the pull request          Each user is wrapped in an object that indicates the user's role and         whether they have approved the pull request. For performance reasons,         the API only returns this list when an API requests a pull request by         id.         
 * @member {Array.<module:model/Participant>} participants
 */
Pullrequest.prototype['participants'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement PullrequestAllOf interface:
/**
 * @member {module:model/PullrequestAllOfLinks} links
 */
PullrequestAllOf.prototype['links'] = undefined;
/**
 * The pull request's unique ID. Note that pull request IDs are only unique within their associated repository.
 * @member {Number} id
 */
PullrequestAllOf.prototype['id'] = undefined;
/**
 * Title of the pull request.
 * @member {String} title
 */
PullrequestAllOf.prototype['title'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRendered} rendered
 */
PullrequestAllOf.prototype['rendered'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} summary
 */
PullrequestAllOf.prototype['summary'] = undefined;
/**
 * The pull request's current status.
 * @member {module:model/PullrequestAllOf.StateEnum} state
 */
PullrequestAllOf.prototype['state'] = undefined;
/**
 * @member {module:model/Account} author
 */
PullrequestAllOf.prototype['author'] = undefined;
/**
 * @member {module:model/PullrequestEndpoint} source
 */
PullrequestAllOf.prototype['source'] = undefined;
/**
 * @member {module:model/PullrequestEndpoint} destination
 */
PullrequestAllOf.prototype['destination'] = undefined;
/**
 * @member {module:model/PullrequestAllOfMergeCommit} merge_commit
 */
PullrequestAllOf.prototype['merge_commit'] = undefined;
/**
 * The number of comments for a specific pull request.
 * @member {Number} comment_count
 */
PullrequestAllOf.prototype['comment_count'] = undefined;
/**
 * The number of open tasks for a specific pull request.
 * @member {Number} task_count
 */
PullrequestAllOf.prototype['task_count'] = undefined;
/**
 * A boolean flag indicating if merging the pull request closes the source branch.
 * @member {Boolean} close_source_branch
 */
PullrequestAllOf.prototype['close_source_branch'] = undefined;
/**
 * @member {module:model/Account} closed_by
 */
PullrequestAllOf.prototype['closed_by'] = undefined;
/**
 * Explains why a pull request was declined. This field is only applicable to pull requests in rejected state.
 * @member {String} reason
 */
PullrequestAllOf.prototype['reason'] = undefined;
/**
 * The ISO8601 timestamp the request was created.
 * @member {Date} created_on
 */
PullrequestAllOf.prototype['created_on'] = undefined;
/**
 * The ISO8601 timestamp the request was last updated.
 * @member {Date} updated_on
 */
PullrequestAllOf.prototype['updated_on'] = undefined;
/**
 * The list of users that were added as reviewers on this pull request when it was created. For performance reasons, the API only includes this list on a pull request's `self` URL.
 * @member {Array.<module:model/Account>} reviewers
 */
PullrequestAllOf.prototype['reviewers'] = undefined;
/**
 *         The list of users that are collaborating on this pull request.         Collaborators are user that:          * are added to the pull request as a reviewer (part of the reviewers           list)         * are not explicit reviewers, but have commented on the pull request         * are not explicit reviewers, but have approved the pull request          Each user is wrapped in an object that indicates the user's role and         whether they have approved the pull request. For performance reasons,         the API only returns this list when an API requests a pull request by         id.         
 * @member {Array.<module:model/Participant>} participants
 */
PullrequestAllOf.prototype['participants'] = undefined;



/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Pullrequest['StateEnum'] = {

    /**
     * value: "MERGED"
     * @const
     */
    "MERGED": "MERGED",

    /**
     * value: "SUPERSEDED"
     * @const
     */
    "SUPERSEDED": "SUPERSEDED",

    /**
     * value: "OPEN"
     * @const
     */
    "OPEN": "OPEN",

    /**
     * value: "DECLINED"
     * @const
     */
    "DECLINED": "DECLINED"
};



export default Pullrequest;

