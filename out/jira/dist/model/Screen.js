"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Screen model module.
 * @module model/Screen
 * @version 1.4.0
 */
var Screen = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Screen</code>.
   * A screen.
   * @alias module:model/Screen
   */
  function Screen() {
    _classCallCheck(this, Screen);

    Screen.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Screen, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Screen</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Screen} obj Optional instance to populate.
     * @return {module:model/Screen} The populated <code>Screen</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Screen();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], _Scope["default"]);
        }
      }

      return obj;
    }
  }]);

  return Screen;
}();
/**
 * The ID of the screen.
 * @member {Number} id
 */


Screen.prototype['id'] = undefined;
/**
 * The name of the screen.
 * @member {String} name
 */

Screen.prototype['name'] = undefined;
/**
 * The scope of the screen.
 * @member {module:model/Scope} scope
 */

Screen.prototype['scope'] = undefined;
var _default = Screen;
exports["default"] = _default;