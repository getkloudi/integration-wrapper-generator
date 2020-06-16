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
 * The BulkProjectPermissionGrants model module.
 * @module model/BulkProjectPermissionGrants
 * @version 1.4.0
 */
var BulkProjectPermissionGrants = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BulkProjectPermissionGrants</code>.
   * List of project permissions and the projects and issues those permissions grant access to.
   * @alias module:model/BulkProjectPermissionGrants
   * @param issues {Array.<Number>} IDs of the issues the user has the permission for.
   * @param permission {String} A project permission,
   * @param projects {Array.<Number>} IDs of the projects the user has the permission for.
   */
  function BulkProjectPermissionGrants(issues, permission, projects) {
    _classCallCheck(this, BulkProjectPermissionGrants);

    BulkProjectPermissionGrants.initialize(this, issues, permission, projects);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BulkProjectPermissionGrants, null, [{
    key: "initialize",
    value: function initialize(obj, issues, permission, projects) {
      obj['issues'] = issues;
      obj['permission'] = permission;
      obj['projects'] = projects;
    }
    /**
     * Constructs a <code>BulkProjectPermissionGrants</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkProjectPermissionGrants} obj Optional instance to populate.
     * @return {module:model/BulkProjectPermissionGrants} The populated <code>BulkProjectPermissionGrants</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BulkProjectPermissionGrants();

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], ['Number']);
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }

        if (data.hasOwnProperty('projects')) {
          obj['projects'] = _ApiClient["default"].convertToType(data['projects'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return BulkProjectPermissionGrants;
}();
/**
 * IDs of the issues the user has the permission for.
 * @member {Array.<Number>} issues
 */


BulkProjectPermissionGrants.prototype['issues'] = undefined;
/**
 * A project permission,
 * @member {String} permission
 */

BulkProjectPermissionGrants.prototype['permission'] = undefined;
/**
 * IDs of the projects the user has the permission for.
 * @member {Array.<Number>} projects
 */

BulkProjectPermissionGrants.prototype['projects'] = undefined;
var _default = BulkProjectPermissionGrants;
exports["default"] = _default;