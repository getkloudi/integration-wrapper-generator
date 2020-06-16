"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenTypeIDsBean = _interopRequireDefault(require("./ScreenTypeIDsBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScreenScheme model module.
 * @module model/ScreenScheme
 * @version 1.4.0
 */
var ScreenScheme = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenScheme</code>.
   * A screen scheme.
   * @alias module:model/ScreenScheme
   */
  function ScreenScheme() {
    _classCallCheck(this, ScreenScheme);

    ScreenScheme.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenScheme, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScreenScheme} obj Optional instance to populate.
     * @return {module:model/ScreenScheme} The populated <code>ScreenScheme</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenScheme();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('screens')) {
          obj['screens'] = _ApiClient["default"].convertToType(data['screens'], _ScreenTypeIDsBean["default"]);
        }
      }

      return obj;
    }
  }]);

  return ScreenScheme;
}();
/**
 * The description of the screen scheme.
 * @member {String} description
 */


ScreenScheme.prototype['description'] = undefined;
/**
 * The ID of the screen scheme.
 * @member {Number} id
 */

ScreenScheme.prototype['id'] = undefined;
/**
 * The name of the screen scheme.
 * @member {String} name
 */

ScreenScheme.prototype['name'] = undefined;
/**
 * IDs of the screens for the associated screen types.
 * @member {module:model/ScreenTypeIDsBean} screens
 */

ScreenScheme.prototype['screens'] = undefined;
var _default = ScreenScheme;
exports["default"] = _default;