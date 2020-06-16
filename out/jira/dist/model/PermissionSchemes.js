"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PermissionScheme = _interopRequireDefault(require("./PermissionScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PermissionSchemes model module.
 * @module model/PermissionSchemes
 * @version 1.4.0
 */
var PermissionSchemes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PermissionSchemes</code>.
   * List of all permission schemes.
   * @alias module:model/PermissionSchemes
   */
  function PermissionSchemes() {
    _classCallCheck(this, PermissionSchemes);

    PermissionSchemes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PermissionSchemes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PermissionSchemes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionSchemes} obj Optional instance to populate.
     * @return {module:model/PermissionSchemes} The populated <code>PermissionSchemes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PermissionSchemes();

        if (data.hasOwnProperty('permissionSchemes')) {
          obj['permissionSchemes'] = _ApiClient["default"].convertToType(data['permissionSchemes'], [_PermissionScheme["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PermissionSchemes;
}();
/**
 * Permission schemes list.
 * @member {Array.<module:model/PermissionScheme>} permissionSchemes
 */


PermissionSchemes.prototype['permissionSchemes'] = undefined;
var _default = PermissionSchemes;
exports["default"] = _default;