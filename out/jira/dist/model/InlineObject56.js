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
 * The InlineObject56 model module.
 * @module model/InlineObject56
 * @version 1.2.0
 */
var InlineObject56 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject56</code>.
   * @alias module:model/InlineObject56
   */
  function InlineObject56() {
    _classCallCheck(this, InlineObject56);

    InlineObject56.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject56, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject56</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject56} obj Optional instance to populate.
     * @return {module:model/InlineObject56} The populated <code>InlineObject56</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject56();

        if (data.hasOwnProperty('after')) {
          obj['after'] = _ApiClient["default"].convertToType(data['after'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject56;
}();
/**
 * The ID of the screen tab field after which to place the moved screen tab field. Required if position isn't provided.
 * @member {String} after
 */


InlineObject56.prototype['after'] = undefined;
/**
 * The named position to which the screen tab field should be moved. Required if after isn't provided.
 * @member {module:model/InlineObject56.PositionEnum} position
 */

InlineObject56.prototype['position'] = undefined;
/**
 * Allowed values for the <code>position</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject56['PositionEnum'] = {
  /**
   * value: "Earlier"
   * @const
   */
  "Earlier": "Earlier",

  /**
   * value: "Later"
   * @const
   */
  "Later": "Later",

  /**
   * value: "First"
   * @const
   */
  "First": "First",

  /**
   * value: "Last"
   * @const
   */
  "Last": "Last"
};
var _default = InlineObject56;
exports["default"] = _default;