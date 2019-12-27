/**
 * Bitbucket
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
import ModelObject from './ModelObject';
import WebhookSubscriptionAllOf from './WebhookSubscriptionAllOf';

/**
 * The WebhookSubscription model module.
 * @module model/WebhookSubscription
 * @version 1.1.0
 */
class WebhookSubscription {
    /**
     * Constructs a new <code>WebhookSubscription</code>.
     * @alias module:model/WebhookSubscription
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/WebhookSubscriptionAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);WebhookSubscriptionAllOf.initialize(this);
        WebhookSubscription.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>WebhookSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookSubscription} obj Optional instance to populate.
     * @return {module:model/WebhookSubscription} The populated <code>WebhookSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookSubscription();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            WebhookSubscriptionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], ['String']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = Object.constructFromObject(data['subject']);
            }
            if (data.hasOwnProperty('subject_type')) {
                obj['subject_type'] = ApiClient.convertToType(data['subject_type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
WebhookSubscription.prototype['active'] = undefined;

/**
 * @member {Date} created_at
 */
WebhookSubscription.prototype['created_at'] = undefined;

/**
 * A user-defined description of the webhook.
 * @member {String} description
 */
WebhookSubscription.prototype['description'] = undefined;

/**
 * The events this webhook is subscribed to.
 * @member {Array.<module:model/WebhookSubscription.EventsEnum>} events
 */
WebhookSubscription.prototype['events'] = undefined;

/**
 * @member {Object} subject
 */
WebhookSubscription.prototype['subject'] = undefined;

/**
 * The type of entity, which is `repository` in the case of webhook subscriptions on repositories.
 * @member {module:model/WebhookSubscription.SubjectTypeEnum} subject_type
 */
WebhookSubscription.prototype['subject_type'] = undefined;

/**
 * The URL events get delivered to.
 * @member {String} url
 */
WebhookSubscription.prototype['url'] = undefined;

/**
 * The webhook's id
 * @member {String} uuid
 */
WebhookSubscription.prototype['uuid'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement WebhookSubscriptionAllOf interface:
/**
 * @member {Boolean} active
 */
WebhookSubscriptionAllOf.prototype['active'] = undefined;
/**
 * @member {Date} created_at
 */
WebhookSubscriptionAllOf.prototype['created_at'] = undefined;
/**
 * A user-defined description of the webhook.
 * @member {String} description
 */
WebhookSubscriptionAllOf.prototype['description'] = undefined;
/**
 * The events this webhook is subscribed to.
 * @member {Array.<module:model/WebhookSubscriptionAllOf.EventsEnum>} events
 */
WebhookSubscriptionAllOf.prototype['events'] = undefined;
/**
 * @member {Object} subject
 */
WebhookSubscriptionAllOf.prototype['subject'] = undefined;
/**
 * The type of entity, which is `repository` in the case of webhook subscriptions on repositories.
 * @member {module:model/WebhookSubscriptionAllOf.SubjectTypeEnum} subject_type
 */
WebhookSubscriptionAllOf.prototype['subject_type'] = undefined;
/**
 * The URL events get delivered to.
 * @member {String} url
 */
WebhookSubscriptionAllOf.prototype['url'] = undefined;
/**
 * The webhook's id
 * @member {String} uuid
 */
WebhookSubscriptionAllOf.prototype['uuid'] = undefined;



/**
 * Allowed values for the <code>events</code> property.
 * @enum {String}
 * @readonly
 */
WebhookSubscription['EventsEnum'] = {

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


/**
 * Allowed values for the <code>subject_type</code> property.
 * @enum {String}
 * @readonly
 */
WebhookSubscription['SubjectTypeEnum'] = {

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



export default WebhookSubscription;

