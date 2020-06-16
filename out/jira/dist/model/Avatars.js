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
 * The Avatars model module.
 * @module model/Avatars
 * @version 1.4.0
 */
var Avatars = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Avatars</code>.
   * Details about system and custom avatars.
   * @alias module:model/Avatars
   */
  function Avatars() {
    _classCallCheck(this, Avatars);

    Avatars.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Avatars, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Avatars</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Avatars} obj Optional instance to populate.
     * @return {module:model/Avatars} The populated <code>Avatars</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Avatars();

        if (data.hasOwnProperty('custom')) {
          obj['custom'] = _ApiClient["default"].convertToType(data['custom'], [_Avatar["default"]]);
        }

        if (data.hasOwnProperty('system')) {
          obj['system'] = _ApiClient["default"].convertToType(data['system'], [_Avatar["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Avatars;
}();
/**
 * Custom avatars list.
 * @member {Array.<module:model/Avatar>} custom
 */


Avatars.prototype['custom'] = undefined;
/**
 * System avatars list.
 * @member {Array.<module:model/Avatar>} system
 */

Avatars.prototype['system'] = undefined;
var _default = Avatars;
exports["default"] = _default;