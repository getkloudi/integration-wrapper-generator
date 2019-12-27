"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _Participant = _interopRequireDefault(require("./Participant"));

var _PullrequestAllOf = _interopRequireDefault(require("./PullrequestAllOf"));

var _PullrequestAllOfLinks = _interopRequireDefault(require("./PullrequestAllOfLinks"));

var _PullrequestAllOfMergeCommit = _interopRequireDefault(require("./PullrequestAllOfMergeCommit"));

var _PullrequestAllOfRendered = _interopRequireDefault(require("./PullrequestAllOfRendered"));

var _PullrequestAllOfRenderedTitle = _interopRequireDefault(require("./PullrequestAllOfRenderedTitle"));

var _PullrequestEndpoint = _interopRequireDefault(require("./PullrequestEndpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Pullrequest model module.
 * @module model/Pullrequest
 * @version 1.1.0
 */
var Pullrequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Pullrequest</code>.
   * @alias module:model/Pullrequest
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PullrequestAllOf
   * @param type {String} 
   */
  function Pullrequest(type) {
    _classCallCheck(this, Pullrequest);

    _ModelObject["default"].initialize(this, type);

    _PullrequestAllOf["default"].initialize(this);

    Pullrequest.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Pullrequest, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Pullrequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pullrequest} obj Optional instance to populate.
     * @return {module:model/Pullrequest} The populated <code>Pullrequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pullrequest();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PullrequestAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PullrequestAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('rendered')) {
          obj['rendered'] = _PullrequestAllOfRendered["default"].constructFromObject(data['rendered']);
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _PullrequestAllOfRenderedTitle["default"].constructFromObject(data['summary']);
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('author')) {
          obj['author'] = _Account["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _PullrequestEndpoint["default"].constructFromObject(data['source']);
        }

        if (data.hasOwnProperty('destination')) {
          obj['destination'] = _PullrequestEndpoint["default"].constructFromObject(data['destination']);
        }

        if (data.hasOwnProperty('merge_commit')) {
          obj['merge_commit'] = _PullrequestAllOfMergeCommit["default"].constructFromObject(data['merge_commit']);
        }

        if (data.hasOwnProperty('comment_count')) {
          obj['comment_count'] = _ApiClient["default"].convertToType(data['comment_count'], 'Number');
        }

        if (data.hasOwnProperty('task_count')) {
          obj['task_count'] = _ApiClient["default"].convertToType(data['task_count'], 'Number');
        }

        if (data.hasOwnProperty('close_source_branch')) {
          obj['close_source_branch'] = _ApiClient["default"].convertToType(data['close_source_branch'], 'Boolean');
        }

        if (data.hasOwnProperty('closed_by')) {
          obj['closed_by'] = _Account["default"].constructFromObject(data['closed_by']);
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }

        if (data.hasOwnProperty('reviewers')) {
          obj['reviewers'] = _ApiClient["default"].convertToType(data['reviewers'], [_Account["default"]]);
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_Participant["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Pullrequest;
}();
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

Pullrequest.prototype['participants'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PullrequestAllOf interface:

/**
 * @member {module:model/PullrequestAllOfLinks} links
 */

_PullrequestAllOf["default"].prototype['links'] = undefined;
/**
 * The pull request's unique ID. Note that pull request IDs are only unique within their associated repository.
 * @member {Number} id
 */

_PullrequestAllOf["default"].prototype['id'] = undefined;
/**
 * Title of the pull request.
 * @member {String} title
 */

_PullrequestAllOf["default"].prototype['title'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRendered} rendered
 */

_PullrequestAllOf["default"].prototype['rendered'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} summary
 */

_PullrequestAllOf["default"].prototype['summary'] = undefined;
/**
 * The pull request's current status.
 * @member {module:model/PullrequestAllOf.StateEnum} state
 */

_PullrequestAllOf["default"].prototype['state'] = undefined;
/**
 * @member {module:model/Account} author
 */

_PullrequestAllOf["default"].prototype['author'] = undefined;
/**
 * @member {module:model/PullrequestEndpoint} source
 */

_PullrequestAllOf["default"].prototype['source'] = undefined;
/**
 * @member {module:model/PullrequestEndpoint} destination
 */

_PullrequestAllOf["default"].prototype['destination'] = undefined;
/**
 * @member {module:model/PullrequestAllOfMergeCommit} merge_commit
 */

_PullrequestAllOf["default"].prototype['merge_commit'] = undefined;
/**
 * The number of comments for a specific pull request.
 * @member {Number} comment_count
 */

_PullrequestAllOf["default"].prototype['comment_count'] = undefined;
/**
 * The number of open tasks for a specific pull request.
 * @member {Number} task_count
 */

_PullrequestAllOf["default"].prototype['task_count'] = undefined;
/**
 * A boolean flag indicating if merging the pull request closes the source branch.
 * @member {Boolean} close_source_branch
 */

_PullrequestAllOf["default"].prototype['close_source_branch'] = undefined;
/**
 * @member {module:model/Account} closed_by
 */

_PullrequestAllOf["default"].prototype['closed_by'] = undefined;
/**
 * Explains why a pull request was declined. This field is only applicable to pull requests in rejected state.
 * @member {String} reason
 */

_PullrequestAllOf["default"].prototype['reason'] = undefined;
/**
 * The ISO8601 timestamp the request was created.
 * @member {Date} created_on
 */

_PullrequestAllOf["default"].prototype['created_on'] = undefined;
/**
 * The ISO8601 timestamp the request was last updated.
 * @member {Date} updated_on
 */

_PullrequestAllOf["default"].prototype['updated_on'] = undefined;
/**
 * The list of users that were added as reviewers on this pull request when it was created. For performance reasons, the API only includes this list on a pull request's `self` URL.
 * @member {Array.<module:model/Account>} reviewers
 */

_PullrequestAllOf["default"].prototype['reviewers'] = undefined;
/**
 *         The list of users that are collaborating on this pull request.         Collaborators are user that:          * are added to the pull request as a reviewer (part of the reviewers           list)         * are not explicit reviewers, but have commented on the pull request         * are not explicit reviewers, but have approved the pull request          Each user is wrapped in an object that indicates the user's role and         whether they have approved the pull request. For performance reasons,         the API only returns this list when an API requests a pull request by         id.         
 * @member {Array.<module:model/Participant>} participants
 */

_PullrequestAllOf["default"].prototype['participants'] = undefined;
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
var _default = Pullrequest;
exports["default"] = _default;