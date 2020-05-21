"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _Workspace = _interopRequireDefault(require("./Workspace"));

var _WorkspaceMembershipAllOf = _interopRequireDefault(require("./WorkspaceMembershipAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkspaceMembership model module.
 * @module model/WorkspaceMembership
 * @version 1.2.0
 */
var WorkspaceMembership = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkspaceMembership</code>.
   * @alias module:model/WorkspaceMembership
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/WorkspaceMembershipAllOf
   * @param type {String} 
   */
  function WorkspaceMembership(type) {
    _classCallCheck(this, WorkspaceMembership);

    _ModelObject["default"].initialize(this, type);

    _WorkspaceMembershipAllOf["default"].initialize(this);

    WorkspaceMembership.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkspaceMembership, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>WorkspaceMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkspaceMembership} obj Optional instance to populate.
     * @return {module:model/WorkspaceMembership} The populated <code>WorkspaceMembership</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkspaceMembership();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _WorkspaceMembershipAllOf["default"].constructFromObject(data, obj);

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

  return WorkspaceMembership;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


WorkspaceMembership.prototype['links'] = undefined;
/**
 * @member {module:model/Account} user
 */

WorkspaceMembership.prototype['user'] = undefined;
/**
 * @member {module:model/Workspace} workspace
 */

WorkspaceMembership.prototype['workspace'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement WorkspaceMembershipAllOf interface:

/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

_WorkspaceMembershipAllOf["default"].prototype['links'] = undefined;
/**
 * @member {module:model/Account} user
 */

_WorkspaceMembershipAllOf["default"].prototype['user'] = undefined;
/**
 * @member {module:model/Workspace} workspace
 */

_WorkspaceMembershipAllOf["default"].prototype['workspace'] = undefined;
var _default = WorkspaceMembership;
exports["default"] = _default;