"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceCapacity = _interopRequireDefault(require("./InstanceCapacity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AvailableCapacity model module.
 * @module model/AvailableCapacity
 * @version 1.0.0
 */
var AvailableCapacity =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AvailableCapacity</code>.
   * The capacity information for instances that can be launched onto the Dedicated Host. 
   * @alias module:model/AvailableCapacity
   */
  function AvailableCapacity() {
    _classCallCheck(this, AvailableCapacity);

    AvailableCapacity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvailableCapacity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvailableCapacity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableCapacity} obj Optional instance to populate.
     * @return {module:model/AvailableCapacity} The populated <code>AvailableCapacity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvailableCapacity();

        if (data.hasOwnProperty('AvailableInstanceCapacity')) {
          obj['AvailableInstanceCapacity'] = _ApiClient["default"].convertToType(data['AvailableInstanceCapacity'], [_InstanceCapacity["default"]]);
        }

        if (data.hasOwnProperty('AvailableVCpus')) {
          obj['AvailableVCpus'] = _ApiClient["default"].convertToType(data['AvailableVCpus'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AvailableCapacity;
}();
/**
 * @member {Array.<module:model/InstanceCapacity>} AvailableInstanceCapacity
 */


AvailableCapacity.prototype['AvailableInstanceCapacity'] = undefined;
/**
 * @member {Number} AvailableVCpus
 */

AvailableCapacity.prototype['AvailableVCpus'] = undefined;
var _default = AvailableCapacity;
exports["default"] = _default;