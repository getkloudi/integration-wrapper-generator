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

/**
 * The WebhookSubscriptionAllOf model module.
 * @module model/WebhookSubscriptionAllOf
 * @version 1.1.0
 */
class WebhookSubscriptionAllOf {
    /**
     * Constructs a new <code>WebhookSubscriptionAllOf</code>.
     * A Webhook subscription.
     * @alias module:model/WebhookSubscriptionAllOf
     */
    constructor() { 
        
        WebhookSubscriptionAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookSubscriptionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookSubscriptionAllOf} obj Optional instance to populate.
     * @return {module:model/WebhookSubscriptionAllOf} The populated <code>WebhookSubscriptionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookSubscriptionAllOf();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('subject_type')) {
                obj['subject_type'] = ApiClient.convertToType(data['subject_type'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = Account.constructFromObject(data['subject']);
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The webhook's id
 * @member {String} uuid
 */
WebhookSubscriptionAllOf.prototype['uuid'] = undefined;

/**
 * The URL events get delivered to.
 * @member {String} url
 */
WebhookSubscriptionAllOf.prototype['url'] = undefined;

/**
 * A user-defined description of the webhook.
 * @member {String} description
 */
WebhookSubscriptionAllOf.prototype['description'] = undefined;

/**
 * The type of entity, which is `repository` in the case of webhook subscriptions on repositories.
 * @member {module:model/WebhookSubscriptionAllOf.SubjectTypeEnum} subject_type
 */
WebhookSubscriptionAllOf.prototype['subject_type'] = undefined;

/**
 * @member {module:model/Account} subject
 */
WebhookSubscriptionAllOf.prototype['subject'] = undefined;

/**
 * @member {Boolean} active
 */
WebhookSubscriptionAllOf.prototype['active'] = undefined;

/**
 * @member {Date} created_at
 */
WebhookSubscriptionAllOf.prototype['created_at'] = undefined;

/**
 * The events this webhook is subscribed to.
 * @member {Array.<module:model/WebhookSubscriptionAllOf.EventsEnum>} events
 */
WebhookSubscriptionAllOf.prototype['events'] = undefined;





/**
 * Allowed values for the <code>subject_type</code> property.
 * @enum {String}
 * @readonly
 */
WebhookSubscriptionAllOf['SubjectTypeEnum'] = {

    /**
     * value: "workspace"
     * @const
     */
    "workspace": "workspace",

    /**
     * value: "user"
     * @const
     */
    "user": "user",

    /**
     * value: "repository"
     * @const
     */
    "repository": "repository",

    /**
     * value: "team"
     * @const
     */
    "team": "team"
};


/**
 * Allowed values for the <code>events</code> property.
 * @enum {String}
 * @readonly
 */
WebhookSubscriptionAllOf['EventsEnum'] = {

    /**
     * value: "pullrequest:unapproved"
     * @const
     */
    "pullrequest:unapproved": "pullrequest:unapproved",

    /**
     * value: "issue:comment_created"
     * @const
     */
    "issue:comment_created": "issue:comment_created",

    /**
     * value: "pullrequest:approved"
     * @const
     */
    "pullrequest:approved": "pullrequest:approved",

    /**
     * value: "repo:created"
     * @const
     */
    "repo:created": "repo:created",

    /**
     * value: "repo:deleted"
     * @const
     */
    "repo:deleted": "repo:deleted",

    /**
     * value: "repo:imported"
     * @const
     */
    "repo:imported": "repo:imported",

    /**
     * value: "pullrequest:comment_updated"
     * @const
     */
    "pullrequest:comment_updated": "pullrequest:comment_updated",

    /**
     * value: "issue:updated"
     * @const
     */
    "issue:updated": "issue:updated",

    /**
     * value: "project:updated"
     * @const
     */
    "project:updated": "project:updated",

    /**
     * value: "pullrequest:comment_created"
     * @const
     */
    "pullrequest:comment_created": "pullrequest:comment_created",

    /**
     * value: "repo:commit_status_updated"
     * @const
     */
    "repo:commit_status_updated": "repo:commit_status_updated",

    /**
     * value: "pullrequest:updated"
     * @const
     */
    "pullrequest:updated": "pullrequest:updated",

    /**
     * value: "issue:created"
     * @const
     */
    "issue:created": "issue:created",

    /**
     * value: "repo:fork"
     * @const
     */
    "repo:fork": "repo:fork",

    /**
     * value: "pullrequest:comment_deleted"
     * @const
     */
    "pullrequest:comment_deleted": "pullrequest:comment_deleted",

    /**
     * value: "repo:commit_status_created"
     * @const
     */
    "repo:commit_status_created": "repo:commit_status_created",

    /**
     * value: "repo:updated"
     * @const
     */
    "repo:updated": "repo:updated",

    /**
     * value: "pullrequest:rejected"
     * @const
     */
    "pullrequest:rejected": "pullrequest:rejected",

    /**
     * value: "pullrequest:fulfilled"
     * @const
     */
    "pullrequest:fulfilled": "pullrequest:fulfilled",

    /**
     * value: "repo:push"
     * @const
     */
    "repo:push": "repo:push",

    /**
     * value: "pullrequest:created"
     * @const
     */
    "pullrequest:created": "pullrequest:created",

    /**
     * value: "repo:transfer"
     * @const
     */
    "repo:transfer": "repo:transfer",

    /**
     * value: "repo:commit_comment_created"
     * @const
     */
    "repo:commit_comment_created": "repo:commit_comment_created"
};



export default WebhookSubscriptionAllOf;

