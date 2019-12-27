"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _Group = _interopRequireDefault(require("./Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BranchrestrictionAllOf model module.
 * @module model/BranchrestrictionAllOf
 * @version 1.1.0
 */
var BranchrestrictionAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>BranchrestrictionAllOf</code>.
   * A branch restriction rule.
   * @alias module:model/BranchrestrictionAllOf
   * @param kind {module:model/BranchrestrictionAllOf.KindEnum} The type of restriction that is being applied.
   * @param branchMatchKind {module:model/BranchrestrictionAllOf.BranchMatchKindEnum} Indicates how the restriction is matched against a branch. The default is `glob`.
   * @param pattern {String} Apply the restriction to branches that match this pattern. Active when `branch_match_kind` is `glob`. Will be empty when `branch_match_kind` is `branching_model`.
   */
  function BranchrestrictionAllOf(kind, branchMatchKind, pattern) {
    _classCallCheck(this, BranchrestrictionAllOf);

    BranchrestrictionAllOf.initialize(this, kind, branchMatchKind, pattern);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BranchrestrictionAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, kind, branchMatchKind, pattern) {
      obj['kind'] = kind;
      obj['branch_match_kind'] = branchMatchKind;
      obj['pattern'] = pattern;
    }
    /**
     * Constructs a <code>BranchrestrictionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BranchrestrictionAllOf} obj Optional instance to populate.
     * @return {module:model/BranchrestrictionAllOf} The populated <code>BranchrestrictionAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BranchrestrictionAllOf();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchingModelSettingsAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }

        if (data.hasOwnProperty('branch_match_kind')) {
          obj['branch_match_kind'] = _ApiClient["default"].convertToType(data['branch_match_kind'], 'String');
        }

        if (data.hasOwnProperty('branch_type')) {
          obj['branch_type'] = _ApiClient["default"].convertToType(data['branch_type'], 'String');
        }

        if (data.hasOwnProperty('pattern')) {
          obj['pattern'] = _ApiClient["default"].convertToType(data['pattern'], 'String');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_Account["default"]]);
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_Group["default"]]);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BranchrestrictionAllOf;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


BranchrestrictionAllOf.prototype['links'] = undefined;
/**
 * The branch restriction status' id.
 * @member {Number} id
 */

BranchrestrictionAllOf.prototype['id'] = undefined;
/**
 * The type of restriction that is being applied.
 * @member {module:model/BranchrestrictionAllOf.KindEnum} kind
 */

BranchrestrictionAllOf.prototype['kind'] = undefined;
/**
 * Indicates how the restriction is matched against a branch. The default is `glob`.
 * @member {module:model/BranchrestrictionAllOf.BranchMatchKindEnum} branch_match_kind
 */

BranchrestrictionAllOf.prototype['branch_match_kind'] = undefined;
/**
 * Apply the restriction to branches of this type. Active when `branch_match_kind` is `branching_model`. The branch type will be calculated using the branching model configured for the repository.
 * @member {module:model/BranchrestrictionAllOf.BranchTypeEnum} branch_type
 */

BranchrestrictionAllOf.prototype['branch_type'] = undefined;
/**
 * Apply the restriction to branches that match this pattern. Active when `branch_match_kind` is `glob`. Will be empty when `branch_match_kind` is `branching_model`.
 * @member {String} pattern
 */

BranchrestrictionAllOf.prototype['pattern'] = undefined;
/**
 * @member {Array.<module:model/Account>} users
 */

BranchrestrictionAllOf.prototype['users'] = undefined;
/**
 * @member {Array.<module:model/Group>} groups
 */

BranchrestrictionAllOf.prototype['groups'] = undefined;
/**
 * Value with kind-specific semantics: \"require_approvals_to_merge\" uses it to require a minimum number of approvals on a PR; \"require_default_reviewer_approvals_to_merge\" uses it to require a minimum number of approvals from default reviewers on a PR; \"require_passing_builds_to_merge\" uses it to require a minimum number of passing builds.
 * @member {Number} value
 */

BranchrestrictionAllOf.prototype['value'] = undefined;
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */

BranchrestrictionAllOf['KindEnum'] = {
  /**
   * value: "require_tasks_to_be_completed"
   * @const
   */
  "require_tasks_to_be_completed": "require_tasks_to_be_completed",

  /**
   * value: "force"
   * @const
   */
  "force": "force",

  /**
   * value: "restrict_merges"
   * @const
   */
  "restrict_merges": "restrict_merges",

  /**
   * value: "enforce_merge_checks"
   * @const
   */
  "enforce_merge_checks": "enforce_merge_checks",

  /**
   * value: "require_approvals_to_merge"
   * @const
   */
  "require_approvals_to_merge": "require_approvals_to_merge",

  /**
   * value: "delete"
   * @const
   */
  "delete": "delete",

  /**
   * value: "require_all_dependencies_merged"
   * @const
   */
  "require_all_dependencies_merged": "require_all_dependencies_merged",

  /**
   * value: "push"
   * @const
   */
  "push": "push",

  /**
   * value: "require_passing_builds_to_merge"
   * @const
   */
  "require_passing_builds_to_merge": "require_passing_builds_to_merge",

  /**
   * value: "reset_pullrequest_approvals_on_change"
   * @const
   */
  "reset_pullrequest_approvals_on_change": "reset_pullrequest_approvals_on_change",

  /**
   * value: "require_default_reviewer_approvals_to_merge"
   * @const
   */
  "require_default_reviewer_approvals_to_merge": "require_default_reviewer_approvals_to_merge"
};
/**
 * Allowed values for the <code>branch_match_kind</code> property.
 * @enum {String}
 * @readonly
 */

BranchrestrictionAllOf['BranchMatchKindEnum'] = {
  /**
   * value: "branching_model"
   * @const
   */
  "branching_model": "branching_model",

  /**
   * value: "glob"
   * @const
   */
  "glob": "glob"
};
/**
 * Allowed values for the <code>branch_type</code> property.
 * @enum {String}
 * @readonly
 */

BranchrestrictionAllOf['BranchTypeEnum'] = {
  /**
   * value: "feature"
   * @const
   */
  "feature": "feature",

  /**
   * value: "bugfix"
   * @const
   */
  "bugfix": "bugfix",

  /**
   * value: "release"
   * @const
   */
  "release": "release",

  /**
   * value: "hotfix"
   * @const
   */
  "hotfix": "hotfix",

  /**
   * value: "development"
   * @const
   */
  "development": "development",

  /**
   * value: "production"
   * @const
   */
  "production": "production"
};
var _default = BranchrestrictionAllOf;
exports["default"] = _default;