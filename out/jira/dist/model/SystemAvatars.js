"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SystemAvatars model module.
 * @module model/SystemAvatars
 * @version 1.4.0
 */
var SystemAvatars = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemAvatars</code>.
   * List of system avatars.
   * @alias module:model/SystemAvatars
   */
  function SystemAvatars() {
    _classCallCheck(this, SystemAvatars);

    SystemAvatars.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemAvatars, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SystemAvatars</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemAvatars} obj Optional instance to populate.
     * @return {module:model/SystemAvatars} The populated <code>SystemAvatars</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemAvatars();

        if (data.hasOwnProperty('system')) {
          obj['system'] = _ApiClient["default"].convertToType(data['system'], [_Avatar["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SystemAvatars;
}();
/**
 * A list of avatar details.
 * @member {Array.<module:model/Avatar>} system
 */


SystemAvatars.prototype['system'] = undefined;
var _default = SystemAvatars;
exports["default"] = _default;