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
import Component from './Component';
import IssueAllOf from './IssueAllOf';
import IssueAllOfLinks from './IssueAllOfLinks';
import Milestone from './Milestone';
import ModelObject from './ModelObject';
import PullrequestAllOfRenderedTitle from './PullrequestAllOfRenderedTitle';
import Repository from './Repository';
import User from './User';
import Version from './Version';

/**
 * The Issue model module.
 * @module model/Issue
 * @version 1.1.2
 */
class Issue {
    /**
     * Constructs a new <code>Issue</code>.
     * @alias module:model/Issue
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @implements module:model/IssueAllOf
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);IssueAllOf.initialize(this);
        Issue.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Issue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Issue} obj Optional instance to populate.
     * @return {module:model/Issue} The populated <code>Issue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Issue();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);
            IssueAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = IssueAllOfLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('repository')) {
                obj['repository'] = Repository.constructFromObject(data['repository']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('reporter')) {
                obj['reporter'] = User.constructFromObject(data['reporter']);
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = User.constructFromObject(data['assignee']);
            }
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'Date');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'Date');
            }
            if (data.hasOwnProperty('edited_on')) {
                obj['edited_on'] = ApiClient.convertToType(data['edited_on'], 'Date');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('milestone')) {
                obj['milestone'] = Milestone.constructFromObject(data['milestone']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = Version.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('component')) {
                obj['component'] = Component.constructFromObject(data['component']);
            }
            if (data.hasOwnProperty('votes')) {
                obj['votes'] = ApiClient.convertToType(data['votes'], 'Number');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = PullrequestAllOfRenderedTitle.constructFromObject(data['content']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/IssueAllOfLinks} links
 */
Issue.prototype['links'] = undefined;

/**
 * @member {Number} id
 */
Issue.prototype['id'] = undefined;

/**
 * @member {module:model/Repository} repository
 */
Issue.prototype['repository'] = undefined;

/**
 * @member {String} title
 */
Issue.prototype['title'] = undefined;

/**
 * @member {module:model/User} reporter
 */
Issue.prototype['reporter'] = undefined;

/**
 * @member {module:model/User} assignee
 */
Issue.prototype['assignee'] = undefined;

/**
 * @member {Date} created_on
 */
Issue.prototype['created_on'] = undefined;

/**
 * @member {Date} updated_on
 */
Issue.prototype['updated_on'] = undefined;

/**
 * @member {Date} edited_on
 */
Issue.prototype['edited_on'] = undefined;

/**
 * @member {module:model/Issue.StateEnum} state
 */
Issue.prototype['state'] = undefined;

/**
 * @member {module:model/Issue.KindEnum} kind
 */
Issue.prototype['kind'] = undefined;

/**
 * @member {module:model/Issue.PriorityEnum} priority
 */
Issue.prototype['priority'] = undefined;

/**
 * @member {module:model/Milestone} milestone
 */
Issue.prototype['milestone'] = undefined;

/**
 * @member {module:model/Version} version
 */
Issue.prototype['version'] = undefined;

/**
 * @member {module:model/Component} component
 */
Issue.prototype['component'] = undefined;

/**
 * @member {Number} votes
 */
Issue.prototype['votes'] = undefined;

/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */
Issue.prototype['content'] = undefined;


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;
// Implement IssueAllOf interface:
/**
 * @member {module:model/IssueAllOfLinks} links
 */
IssueAllOf.prototype['links'] = undefined;
/**
 * @member {Number} id
 */
IssueAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Repository} repository
 */
IssueAllOf.prototype['repository'] = undefined;
/**
 * @member {String} title
 */
IssueAllOf.prototype['title'] = undefined;
/**
 * @member {module:model/User} reporter
 */
IssueAllOf.prototype['reporter'] = undefined;
/**
 * @member {module:model/User} assignee
 */
IssueAllOf.prototype['assignee'] = undefined;
/**
 * @member {Date} created_on
 */
IssueAllOf.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */
IssueAllOf.prototype['updated_on'] = undefined;
/**
 * @member {Date} edited_on
 */
IssueAllOf.prototype['edited_on'] = undefined;
/**
 * @member {module:model/IssueAllOf.StateEnum} state
 */
IssueAllOf.prototype['state'] = undefined;
/**
 * @member {module:model/IssueAllOf.KindEnum} kind
 */
IssueAllOf.prototype['kind'] = undefined;
/**
 * @member {module:model/IssueAllOf.PriorityEnum} priority
 */
IssueAllOf.prototype['priority'] = undefined;
/**
 * @member {module:model/Milestone} milestone
 */
IssueAllOf.prototype['milestone'] = undefined;
/**
 * @member {module:model/Version} version
 */
IssueAllOf.prototype['version'] = undefined;
/**
 * @member {module:model/Component} component
 */
IssueAllOf.prototype['component'] = undefined;
/**
 * @member {Number} votes
 */
IssueAllOf.prototype['votes'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */
IssueAllOf.prototype['content'] = undefined;



/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
Issue['StateEnum'] = {

    /**
     * value: "new"
     * @const
     */
    "new": "new",

    /**
     * value: "open"
     * @const
     */
    "open": "open",

    /**
     * value: "resolved"
     * @const
     */
    "resolved": "resolved",

    /**
     * value: "on hold"
     * @const
     */
    "on hold": "on hold",

    /**
     * value: "invalid"
     * @const
     */
    "invalid": "invalid",

    /**
     * value: "duplicate"
     * @const
     */
    "duplicate": "duplicate",

    /**
     * value: "wontfix"
     * @const
     */
    "wontfix": "wontfix",

    /**
     * value: "closed"
     * @const
     */
    "closed": "closed"
};


/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Issue['KindEnum'] = {

    /**
     * value: "bug"
     * @const
     */
    "bug": "bug",

    /**
     * value: "enhancement"
     * @const
     */
    "enhancement": "enhancement",

    /**
     * value: "proposal"
     * @const
     */
    "proposal": "proposal",

    /**
     * value: "task"
     * @const
     */
    "task": "task"
};


/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
Issue['PriorityEnum'] = {

    /**
     * value: "trivial"
     * @const
     */
    "trivial": "trivial",

    /**
     * value: "minor"
     * @const
     */
    "minor": "minor",

    /**
     * value: "major"
     * @const
     */
    "major": "major",

    /**
     * value: "critical"
     * @const
     */
    "critical": "critical",

    /**
     * value: "blocker"
     * @const
     */
    "blocker": "blocker"
};



export default Issue;

