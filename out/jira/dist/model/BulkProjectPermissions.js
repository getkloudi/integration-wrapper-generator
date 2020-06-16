"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BulkProjectPermissions model module.
 * @module model/BulkProjectPermissions
 * @version 1.4.0
 */
var BulkProjectPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BulkProjectPermissions</code>.
   * Details of project permissions and associated issues and projects to look up.
   * @alias module:model/BulkProjectPermissions
   * @param permissions {Array.<String>} List of project permissions.
   */
  function BulkProjectPermissions(permissions) {
    _classCallCheck(this, BulkProjectPermissions);

    BulkProjectPermissions.initialize(this, permissions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BulkProjectPermissions, null, [{
    key: "initialize",
    value: function initialize(obj, permissions) {
      obj['permissions'] = permissions;
    }
    /**
     * Constructs a <code>BulkProjectPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkProjectPermissions} obj Optional instance to populate.
     * @return {module:model/BulkProjectPermissions} The populated <code>BulkProjectPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BulkProjectPermissions();

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], ['Number']);
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], ['String']);
        }

        if (data.hasOwnProperty('projects')) {
          obj['projects'] = _ApiClient["default"].convertToType(data['projects'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return BulkProjectPermissions;
}();
/**
 * List of issue IDs.
 * @member {Array.<Number>} issues
 */


BulkProjectPermissions.prototype['issues'] = undefined;
/**
 * List of project permissions.
 * @member {Array.<String>} permissions
 */

BulkProjectPermissions.prototype['permissions'] = undefined;
/**
 * List of project IDs.
 * @member {Array.<Number>} projects
 */

BulkProjectPermissions.prototype['projects'] = undefined;
var _default = BulkProjectPermissions;
exports["default"] = _default;