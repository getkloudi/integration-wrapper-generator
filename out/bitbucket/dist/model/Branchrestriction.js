"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _BranchrestrictionAllOf = _interopRequireDefault(require("./BranchrestrictionAllOf"));

var _Group = _interopRequireDefault(require("./Group"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Branchrestriction model module.
 * @module model/Branchrestriction
 * @version 1.1.2
 */
var Branchrestriction =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Branchrestriction</code>.
   * @alias module:model/Branchrestriction
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/BranchrestrictionAllOf
   * @param type {String} 
   * @param kind {module:model/Branchrestriction.KindEnum} The type of restriction that is being applied.
   * @param branchMatchKind {module:model/Branchrestriction.BranchMatchKindEnum} Indicates how the restriction is matched against a branch. The default is `glob`.
   * @param pattern {String} Apply the restriction to branches that match this pattern. Active when `branch_match_kind` is `glob`. Will be empty when `branch_match_kind` is `branching_model`.
   */
  function Branchrestriction(type, kind, branchMatchKind, pattern) {
    _classCallCheck(this, Branchrestriction);

    _ModelObject["default"].initialize(this, type);

    _BranchrestrictionAllOf["default"].initialize(this, kind, branchMatchKind, pattern);

    Branchrestriction.initialize(this, type, kind, branchMatchKind, pattern);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Branchrestriction, null, [{
    key: "initialize",
    value: function initialize(obj, type, kind, branchMatchKind, pattern) {
      obj['kind'] = kind;
      obj['branch_match_kind'] = branchMatchKind;
      obj['pattern'] = pattern;
    }
    /**
     * Constructs a <code>Branchrestriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Branchrestriction} obj Optional instance to populate.
     * @return {module:model/Branchrestriction} The populated <code>Branchrestriction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Branchrestriction();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _BranchrestrictionAllOf["default"].constructFromObject(data, obj);

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

  return Branchrestriction;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


Branchrestriction.prototype['links'] = undefined;
/**
 * The branch restriction status' id.
 * @member {Number} id
 */

Branchrestriction.prototype['id'] = undefined;
/**
 * The type of restriction that is being applied.
 * @member {module:model/Branchrestriction.KindEnum} kind
 */

Branchrestriction.prototype['kind'] = undefined;
/**
 * Indicates how the restriction is matched against a branch. The default is `glob`.
 * @member {module:model/Branchrestriction.BranchMatchKindEnum} branch_match_kind
 */

Branchrestriction.prototype['branch_match_kind'] = undefined;
/**
 * Apply the restriction to branches of this type. Active when `branch_match_kind` is `branching_model`. The branch type will be calculated using the branching model configured for the repository.
 * @member {module:model/Branchrestriction.BranchTypeEnum} branch_type
 */

Branchrestriction.prototype['branch_type'] = undefined;
/**
 * Apply the restriction to branches that match this pattern. Active when `branch_match_kind` is `glob`. Will be empty when `branch_match_kind` is `branching_model`.
 * @member {String} pattern
 */

Branchrestriction.prototype['pattern'] = undefined;
/**
 * @member {Array.<module:model/Account>} users
 */

Branchrestriction.prototype['users'] = undefined;
/**
 * @member {Array.<module:model/Group>} groups
 */

Branchrestriction.prototype['groups'] = undefined;
/**
 * Value with kind-specific semantics: \"require_approvals_to_merge\" uses it to require a minimum number of approvals on a PR; \"require_default_reviewer_approvals_to_merge\" uses it to require a minimum number of approvals from default reviewers on a PR; \"require_passing_builds_to_merge\" uses it to require a minimum number of passing builds.
 * @member {Number} value
 */

Branchrestriction.prototype['value'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement BranchrestrictionAllOf interface:

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

_BranchrestrictionAllOf["default"].prototype['links'] = undefined;
/**
 * The branch restriction status' id.
 * @member {Number} id
 */

_BranchrestrictionAllOf["default"].prototype['id'] = undefined;
/**
 * The type of restriction that is being applied.
 * @member {module:model/BranchrestrictionAllOf.KindEnum} kind
 */

_BranchrestrictionAllOf["default"].prototype['kind'] = undefined;
/**
 * Indicates how the restriction is matched against a branch. The default is `glob`.
 * @member {module:model/BranchrestrictionAllOf.BranchMatchKindEnum} branch_match_kind
 */

_BranchrestrictionAllOf["default"].prototype['branch_match_kind'] = undefined;
/**
 * Apply the restriction to branches of this type. Active when `branch_match_kind` is `branching_model`. The branch type will be calculated using the branching model configured for the repository.
 * @member {module:model/BranchrestrictionAllOf.BranchTypeEnum} branch_type
 */

_BranchrestrictionAllOf["default"].prototype['branch_type'] = undefined;
/**
 * Apply the restriction to branches that match this pattern. Active when `branch_match_kind` is `glob`. Will be empty when `branch_match_kind` is `branching_model`.
 * @member {String} pattern
 */

_BranchrestrictionAllOf["default"].prototype['pattern'] = undefined;
/**
 * @member {Array.<module:model/Account>} users
 */

_BranchrestrictionAllOf["default"].prototype['users'] = undefined;
/**
 * @member {Array.<module:model/Group>} groups
 */

_BranchrestrictionAllOf["default"].prototype['groups'] = undefined;
/**
 * Value with kind-specific semantics: \"require_approvals_to_merge\" uses it to require a minimum number of approvals on a PR; \"require_default_reviewer_approvals_to_merge\" uses it to require a minimum number of approvals from default reviewers on a PR; \"require_passing_builds_to_merge\" uses it to require a minimum number of passing builds.
 * @member {Number} value
 */

_BranchrestrictionAllOf["default"].prototype['value'] = undefined;
/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */

Branchrestriction['KindEnum'] = {
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

Branchrestriction['BranchMatchKindEnum'] = {
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

Branchrestriction['BranchTypeEnum'] = {
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
var _default = Branchrestriction;
exports["default"] = _default;