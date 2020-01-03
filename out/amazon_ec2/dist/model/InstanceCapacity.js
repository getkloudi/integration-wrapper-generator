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
 * The InstanceCapacity model module.
 * @module model/InstanceCapacity
 * @version 1.0.0
 */
var InstanceCapacity =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceCapacity</code>.
   * Information about the number of instances that can be launched onto the Dedicated Host.
   * @alias module:model/InstanceCapacity
   */
  function InstanceCapacity() {
    _classCallCheck(this, InstanceCapacity);

    InstanceCapacity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceCapacity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceCapacity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceCapacity} obj Optional instance to populate.
     * @return {module:model/InstanceCapacity} The populated <code>InstanceCapacity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceCapacity();

        if (data.hasOwnProperty('AvailableCapacity')) {
          obj['AvailableCapacity'] = _ApiClient["default"].convertToType(data['AvailableCapacity'], 'Number');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }

        if (data.hasOwnProperty('TotalCapacity')) {
          obj['TotalCapacity'] = _ApiClient["default"].convertToType(data['TotalCapacity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InstanceCapacity;
}();
/**
 * @member {Number} AvailableCapacity
 */


InstanceCapacity.prototype['AvailableCapacity'] = undefined;
/**
 * @member {String} InstanceType
 */

InstanceCapacity.prototype['InstanceType'] = undefined;
/**
 * @member {Number} TotalCapacity
 */

InstanceCapacity.prototype['TotalCapacity'] = undefined;
var _default = InstanceCapacity;
exports["default"] = _default;