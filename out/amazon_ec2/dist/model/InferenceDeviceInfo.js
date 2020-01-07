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
 * The InferenceDeviceInfo model module.
 * @module model/InferenceDeviceInfo
 * @version 1.1.0
 */
var InferenceDeviceInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InferenceDeviceInfo</code>.
   * Describes the Inference accelerators for the instance type.
   * @alias module:model/InferenceDeviceInfo
   */
  function InferenceDeviceInfo() {
    _classCallCheck(this, InferenceDeviceInfo);

    InferenceDeviceInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InferenceDeviceInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InferenceDeviceInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InferenceDeviceInfo} obj Optional instance to populate.
     * @return {module:model/InferenceDeviceInfo} The populated <code>InferenceDeviceInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InferenceDeviceInfo();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('Manufacturer')) {
          obj['Manufacturer'] = _ApiClient["default"].convertToType(data['Manufacturer'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InferenceDeviceInfo;
}();
/**
 * @member {Number} Count
 */


InferenceDeviceInfo.prototype['Count'] = undefined;
/**
 * @member {String} Manufacturer
 */

InferenceDeviceInfo.prototype['Manufacturer'] = undefined;
/**
 * @member {String} Name
 */

InferenceDeviceInfo.prototype['Name'] = undefined;
var _default = InferenceDeviceInfo;
exports["default"] = _default;