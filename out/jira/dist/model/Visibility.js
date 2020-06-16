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
 * The Visibility model module.
 * @module model/Visibility
 * @version 1.4.0
 */
var Visibility = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Visibility</code>.
   * The group or role to which this item is visible.
   * @alias module:model/Visibility
   */
  function Visibility() {
    _classCallCheck(this, Visibility);

    Visibility.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Visibility, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Visibility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Visibility} obj Optional instance to populate.
     * @return {module:model/Visibility} The populated <code>Visibility</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Visibility();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Visibility;
}();
/**
 * Whether visibility of this item is restricted to a group or role.
 * @member {module:model/Visibility.TypeEnum} type
 */


Visibility.prototype['type'] = undefined;
/**
 * The name of the group or role to which visibility of this item is restricted.
 * @member {String} value
 */

Visibility.prototype['value'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Visibility['TypeEnum'] = {
  /**
   * value: "group"
   * @const
   */
  "group": "group",

  /**
   * value: "role"
   * @const
   */
  "role": "role"
};
var _default = Visibility;
exports["default"] = _default;