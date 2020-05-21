"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _Workspace = _interopRequireDefault(require("./Workspace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkspaceMembershipAllOf model module.
 * @module model/WorkspaceMembershipAllOf
 * @version 1.2.0
 */
var WorkspaceMembershipAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkspaceMembershipAllOf</code>.
   * A Bitbucket workspace membership.             Links a user to a workspace.
   * @alias module:model/WorkspaceMembershipAllOf
   */
  function WorkspaceMembershipAllOf() {
    _classCallCheck(this, WorkspaceMembershipAllOf);

    WorkspaceMembershipAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkspaceMembershipAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkspaceMembershipAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceMembershipAllOf} obj Optional instance to populate.
     * @return {module:model/WorkspaceMembershipAllOf} The populated <code>WorkspaceMembershipAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkspaceMembershipAllOf();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchingModelSettingsAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _Account["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('workspace')) {
          obj['workspace'] = _Workspace["default"].constructFromObject(data['workspace']);
        }
      }

      return obj;
    }
  }]);

  return WorkspaceMembershipAllOf;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


WorkspaceMembershipAllOf.prototype['links'] = undefined;
/**
 * @member {module:model/Account} user
 */

WorkspaceMembershipAllOf.prototype['user'] = undefined;
/**
 * @member {module:model/Workspace} workspace
 */

WorkspaceMembershipAllOf.prototype['workspace'] = undefined;
var _default = WorkspaceMembershipAllOf;
exports["default"] = _default;