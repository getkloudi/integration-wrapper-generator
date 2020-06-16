"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PermissionGrant = _interopRequireDefault(require("./PermissionGrant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PermissionGrants model module.
 * @module model/PermissionGrants
 * @version 1.4.0
 */
var PermissionGrants = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PermissionGrants</code>.
   * List of permission grants.
   * @alias module:model/PermissionGrants
   */
  function PermissionGrants() {
    _classCallCheck(this, PermissionGrants);

    PermissionGrants.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PermissionGrants, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PermissionGrants</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionGrants} obj Optional instance to populate.
     * @return {module:model/PermissionGrants} The populated <code>PermissionGrants</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PermissionGrants();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_PermissionGrant["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PermissionGrants;
}();
/**
 * Expand options that include additional permission grant details in the response.
 * @member {String} expand
 */


PermissionGrants.prototype['expand'] = undefined;
/**
 * Permission grants list.
 * @member {Array.<module:model/PermissionGrant>} permissions
 */

PermissionGrants.prototype['permissions'] = undefined;
var _default = PermissionGrants;
exports["default"] = _default;