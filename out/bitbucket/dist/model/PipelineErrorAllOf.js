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
 * The PipelineErrorAllOf model module.
 * @module model/PipelineErrorAllOf
 * @version 1.1.2
 */
var PipelineErrorAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineErrorAllOf</code>.
   * An error causing a pipeline failure.
   * @alias module:model/PipelineErrorAllOf
   */
  function PipelineErrorAllOf() {
    _classCallCheck(this, PipelineErrorAllOf);

    PipelineErrorAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineErrorAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineErrorAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineErrorAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineErrorAllOf} The populated <code>PipelineErrorAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineErrorAllOf();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineErrorAllOf;
}();
/**
 * The error key.
 * @member {String} key
 */


PipelineErrorAllOf.prototype['key'] = undefined;
/**
 * The error message.
 * @member {String} message
 */

PipelineErrorAllOf.prototype['message'] = undefined;
var _default = PipelineErrorAllOf;
exports["default"] = _default;