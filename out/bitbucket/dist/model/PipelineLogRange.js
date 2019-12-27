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
 * The PipelineLogRange model module.
 * @module model/PipelineLogRange
 * @version 1.1.0
 */
var PipelineLogRange =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineLogRange</code>.
   * A reference to a range of bytes in a log file (does not contain the actual bytes).
   * @alias module:model/PipelineLogRange
   */
  function PipelineLogRange() {
    _classCallCheck(this, PipelineLogRange);

    PipelineLogRange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineLogRange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineLogRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineLogRange} obj Optional instance to populate.
     * @return {module:model/PipelineLogRange} The populated <code>PipelineLogRange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineLogRange();

        if (data.hasOwnProperty('first_byte_position')) {
          obj['first_byte_position'] = _ApiClient["default"].convertToType(data['first_byte_position'], 'Number');
        }

        if (data.hasOwnProperty('last_byte_position')) {
          obj['last_byte_position'] = _ApiClient["default"].convertToType(data['last_byte_position'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PipelineLogRange;
}();
/**
 * The position of the first byte of the range in the log.
 * @member {Number} first_byte_position
 */


PipelineLogRange.prototype['first_byte_position'] = undefined;
/**
 * The position of the last byte of the range in the log.
 * @member {Number} last_byte_position
 */

PipelineLogRange.prototype['last_byte_position'] = undefined;
var _default = PipelineLogRange;
exports["default"] = _default;