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
 * The InlineObject19 model module.
 * @module model/InlineObject19
 * @version 1.1.0
 */
var InlineObject19 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject19</code>.
   * @alias module:model/InlineObject19
   */
  function InlineObject19() {
    _classCallCheck(this, InlineObject19);

    InlineObject19.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject19, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject19</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject19} obj Optional instance to populate.
     * @return {module:model/InlineObject19} The populated <code>InlineObject19</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject19();

        if (data.hasOwnProperty('currentValue')) {
          obj['currentValue'] = _ApiClient["default"].convertToType(data['currentValue'], Object);
        }

        if (data.hasOwnProperty('entityIds')) {
          obj['entityIds'] = _ApiClient["default"].convertToType(data['entityIds'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject19;
}();
/**
 * The value of properties to perform the bulk operation on.
 * @member {Object} currentValue
 */


InlineObject19.prototype['currentValue'] = undefined;
/**
 * List of issues to perform the bulk delete operation on.
 * @member {Array.<Number>} entityIds
 */

InlineObject19.prototype['entityIds'] = undefined;
var _default = InlineObject19;
exports["default"] = _default;