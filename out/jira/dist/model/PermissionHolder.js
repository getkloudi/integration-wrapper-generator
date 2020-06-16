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
 * The PermissionHolder model module.
 * @module model/PermissionHolder
 * @version 1.4.0
 */
var PermissionHolder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PermissionHolder</code>.
   * Details of a user, group, field, or project role that holds a permission. See [Holder object](#holder-object) in *Get all permission schemes* for more information.
   * @alias module:model/PermissionHolder
   * @param type {String} The type of permission holder.
   */
  function PermissionHolder(type) {
    _classCallCheck(this, PermissionHolder);

    PermissionHolder.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PermissionHolder, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PermissionHolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionHolder} obj Optional instance to populate.
     * @return {module:model/PermissionHolder} The populated <code>PermissionHolder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PermissionHolder();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('parameter')) {
          obj['parameter'] = _ApiClient["default"].convertToType(data['parameter'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PermissionHolder;
}();
/**
 * Expand options that include additional permission holder details in the response.
 * @member {String} expand
 */


PermissionHolder.prototype['expand'] = undefined;
/**
 * The identifier of permission holder.
 * @member {String} parameter
 */

PermissionHolder.prototype['parameter'] = undefined;
/**
 * The type of permission holder.
 * @member {String} type
 */

PermissionHolder.prototype['type'] = undefined;
var _default = PermissionHolder;
exports["default"] = _default;