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
 * The InlineObject31 model module.
 * @module model/InlineObject31
 * @version 1.1.0
 */
var InlineObject31 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject31</code>.
   * @alias module:model/InlineObject31
   */
  function InlineObject31() {
    _classCallCheck(this, InlineObject31);

    InlineObject31.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject31, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject31</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject31} obj Optional instance to populate.
     * @return {module:model/InlineObject31} The populated <code>InlineObject31</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject31();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('inward')) {
          obj['inward'] = _ApiClient["default"].convertToType(data['inward'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('outward')) {
          obj['outward'] = _ApiClient["default"].convertToType(data['outward'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject31;
}();
/**
 * The ID of the issue link type and is used as follows:
 * @member {String} id
 */


InlineObject31.prototype['id'] = undefined;
/**
 * The description of the issue link type inward link and is used as follows:
 * @member {String} inward
 */

InlineObject31.prototype['inward'] = undefined;
/**
 * The name of the issue link type and is used as follows:
 * @member {String} name
 */

InlineObject31.prototype['name'] = undefined;
/**
 * The description of the issue link type outward link and is used as follows:
 * @member {String} outward
 */

InlineObject31.prototype['outward'] = undefined;
var _default = InlineObject31;
exports["default"] = _default;