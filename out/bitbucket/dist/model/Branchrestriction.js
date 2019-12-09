"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _BranchrestrictionAllOf = _interopRequireDefault(require("./BranchrestrictionAllOf"));

var _BranchrestrictionAllOfLinks = _interopRequireDefault(require("./BranchrestrictionAllOfLinks"));

var _Group = _interopRequireDefault(require("./Group"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Branchrestriction model module.
 * @module model/Branchrestriction
 * @version 1.0.0
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
   */
  function Branchrestriction(type) {
    _classCallCheck(this, Branchrestriction);

    _ModelObject["default"].initialize(this, type);

    _BranchrestrictionAllOf["default"].initialize(this);

    Branchrestriction.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Branchrestriction, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
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

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_Group["default"]]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchrestrictionAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_Account["default"]]);
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
 * @member {Array.<module:model/Group>} groups
 */


Branchrestriction.prototype['groups'] = undefined;
/**
 * The branch restriction status' id.
 * @member {Number} id
 */

Branchrestriction.prototype['id'] = undefined;
/**
 * The type of restriction that is being applied
 * @member {module:model/Branchrestriction.KindEnum} kind
 */

Branchrestriction.prototype['kind'] = undefined;
/**
 * @member {module:model/BranchrestrictionAllOfLinks} links
 */

Branchrestriction.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/Account>} users
 */

Branchrestriction.prototype['users'] = undefined;
/**
 * Value with kind-specific semantics: \"require_approvals_to_merge\" uses it to require a minimum number of approvals on a PR; \"require_passing_builds_to_merge\" uses it to require a minimum number of passing builds.
 * @member {Number} value
 */

Branchrestriction.prototype['value'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement BranchrestrictionAllOf interface:

/**
 * @member {Array.<module:model/Group>} groups
 */

_BranchrestrictionAllOf["default"].prototype['groups'] = undefined;
/**
 * The branch restriction status' id.
 * @member {Number} id
 */

_BranchrestrictionAllOf["default"].prototype['id'] = undefined;
/**
 * The type of restriction that is being applied
 * @member {module:model/BranchrestrictionAllOf.KindEnum} kind
 */

_BranchrestrictionAllOf["default"].prototype['kind'] = undefined;
/**
 * @member {module:model/BranchrestrictionAllOfLinks} links
 */

_BranchrestrictionAllOf["default"].prototype['links'] = undefined;
/**
 * @member {Array.<module:model/Account>} users
 */

_BranchrestrictionAllOf["default"].prototype['users'] = undefined;
/**
 * Value with kind-specific semantics: \"require_approvals_to_merge\" uses it to require a minimum number of approvals on a PR; \"require_passing_builds_to_merge\" uses it to require a minimum number of passing builds.
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
   * value: "require_passing_builds_to_merge"
   * @const
   */
  "require_passing_builds_to_merge": "require_passing_builds_to_merge",

  /**
   * value: "force"
   * @const
   */
  "force": "force",

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
   * value: "require_approvals_to_merge"
   * @const
   */
  "require_approvals_to_merge": "require_approvals_to_merge",

  /**
   * value: "enforce_merge_checks"
   * @const
   */
  "enforce_merge_checks": "enforce_merge_checks",

  /**
   * value: "restrict_merges"
   * @const
   */
  "restrict_merges": "restrict_merges",

  /**
   * value: "reset_pullrequest_approvals_on_change"
   * @const
   */
  "reset_pullrequest_approvals_on_change": "reset_pullrequest_approvals_on_change",

  /**
   * value: "delete"
   * @const
   */
  "delete": "delete"
};
var _default = Branchrestriction;
exports["default"] = _default;