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
 * The ScreenableTab model module.
 * @module model/ScreenableTab
 * @version 1.4.0
 */
var ScreenableTab = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenableTab</code>.
   * A screen tab.
   * @alias module:model/ScreenableTab
   * @param name {String} The name of the screen tab. The maximum length is 255 characters.
   */
  function ScreenableTab(name) {
    _classCallCheck(this, ScreenableTab);

    ScreenableTab.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenableTab, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>ScreenableTab</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScreenableTab} obj Optional instance to populate.
     * @return {module:model/ScreenableTab} The populated <code>ScreenableTab</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenableTab();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenableTab;
}();
/**
 * The ID of the screen tab.
 * @member {Number} id
 */


ScreenableTab.prototype['id'] = undefined;
/**
 * The name of the screen tab. The maximum length is 255 characters.
 * @member {String} name
 */

ScreenableTab.prototype['name'] = undefined;
var _default = ScreenableTab;
exports["default"] = _default;