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
 * The InlineObject74 model module.
 * @module model/InlineObject74
 * @version 1.3.0
 */
var InlineObject74 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject74</code>.
   * @alias module:model/InlineObject74
   */
  function InlineObject74() {
    _classCallCheck(this, InlineObject74);

    InlineObject74.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject74, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject74</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject74} obj Optional instance to populate.
     * @return {module:model/InlineObject74} The populated <code>InlineObject74</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject74();

        if (data.hasOwnProperty('ids')) {
          obj['ids'] = _ApiClient["default"].convertToType(data['ids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject74;
}();
/**
 * A list of worklog IDs.
 * @member {Array.<Number>} ids
 */


InlineObject74.prototype['ids'] = undefined;
var _default = InlineObject74;
exports["default"] = _default;