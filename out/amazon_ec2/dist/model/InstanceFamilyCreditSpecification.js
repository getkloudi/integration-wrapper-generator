"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UnlimitedSupportedInstanceFamily = _interopRequireDefault(require("./UnlimitedSupportedInstanceFamily"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceFamilyCreditSpecification model module.
 * @module model/InstanceFamilyCreditSpecification
 * @version 1.0.0
 */
var InstanceFamilyCreditSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceFamilyCreditSpecification</code>.
   * Describes the default credit option for CPU usage of a burstable performance instance family.
   * @alias module:model/InstanceFamilyCreditSpecification
   */
  function InstanceFamilyCreditSpecification() {
    _classCallCheck(this, InstanceFamilyCreditSpecification);

    InstanceFamilyCreditSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceFamilyCreditSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceFamilyCreditSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceFamilyCreditSpecification} obj Optional instance to populate.
     * @return {module:model/InstanceFamilyCreditSpecification} The populated <code>InstanceFamilyCreditSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceFamilyCreditSpecification();

        if (data.hasOwnProperty('CpuCredits')) {
          obj['CpuCredits'] = _ApiClient["default"].convertToType(data['CpuCredits'], 'String');
        }

        if (data.hasOwnProperty('InstanceFamily')) {
          obj['InstanceFamily'] = _UnlimitedSupportedInstanceFamily["default"].constructFromObject(data['InstanceFamily']);
        }
      }

      return obj;
    }
  }]);

  return InstanceFamilyCreditSpecification;
}();
/**
 * @member {String} CpuCredits
 */


InstanceFamilyCreditSpecification.prototype['CpuCredits'] = undefined;
/**
 * @member {module:model/UnlimitedSupportedInstanceFamily} InstanceFamily
 */

InstanceFamilyCreditSpecification.prototype['InstanceFamily'] = undefined;
var _default = InstanceFamilyCreditSpecification;
exports["default"] = _default;