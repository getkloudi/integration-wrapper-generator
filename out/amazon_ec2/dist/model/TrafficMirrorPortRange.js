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
 * The TrafficMirrorPortRange model module.
 * @module model/TrafficMirrorPortRange
 * @version 1.0.0
 */
var TrafficMirrorPortRange =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TrafficMirrorPortRange</code>.
   * Describes the Traffic Mirror port range.
   * @alias module:model/TrafficMirrorPortRange
   */
  function TrafficMirrorPortRange() {
    _classCallCheck(this, TrafficMirrorPortRange);

    TrafficMirrorPortRange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TrafficMirrorPortRange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TrafficMirrorPortRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrafficMirrorPortRange} obj Optional instance to populate.
     * @return {module:model/TrafficMirrorPortRange} The populated <code>TrafficMirrorPortRange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrafficMirrorPortRange();

        if (data.hasOwnProperty('FromPort')) {
          obj['FromPort'] = _ApiClient["default"].convertToType(data['FromPort'], 'Number');
        }

        if (data.hasOwnProperty('ToPort')) {
          obj['ToPort'] = _ApiClient["default"].convertToType(data['ToPort'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TrafficMirrorPortRange;
}();
/**
 * @member {Number} FromPort
 */


TrafficMirrorPortRange.prototype['FromPort'] = undefined;
/**
 * @member {Number} ToPort
 */

TrafficMirrorPortRange.prototype['ToPort'] = undefined;
var _default = TrafficMirrorPortRange;
exports["default"] = _default;