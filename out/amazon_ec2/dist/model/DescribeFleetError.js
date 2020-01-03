"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceLifecycle = _interopRequireDefault(require("./InstanceLifecycle"));

var _LaunchTemplateAndOverridesResponse = _interopRequireDefault(require("./LaunchTemplateAndOverridesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeFleetError model module.
 * @module model/DescribeFleetError
 * @version 1.0.0
 */
var DescribeFleetError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFleetError</code>.
   * Describes the instances that could not be launched by the fleet.
   * @alias module:model/DescribeFleetError
   */
  function DescribeFleetError() {
    _classCallCheck(this, DescribeFleetError);

    DescribeFleetError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFleetError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeFleetError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFleetError} obj Optional instance to populate.
     * @return {module:model/DescribeFleetError} The populated <code>DescribeFleetError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFleetError();

        if (data.hasOwnProperty('ErrorCode')) {
          obj['ErrorCode'] = _ApiClient["default"].convertToType(data['ErrorCode'], 'String');
        }

        if (data.hasOwnProperty('ErrorMessage')) {
          obj['ErrorMessage'] = _ApiClient["default"].convertToType(data['ErrorMessage'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateAndOverrides')) {
          obj['LaunchTemplateAndOverrides'] = _LaunchTemplateAndOverridesResponse["default"].constructFromObject(data['LaunchTemplateAndOverrides']);
        }

        if (data.hasOwnProperty('Lifecycle')) {
          obj['Lifecycle'] = _InstanceLifecycle["default"].constructFromObject(data['Lifecycle']);
        }
      }

      return obj;
    }
  }]);

  return DescribeFleetError;
}();
/**
 * @member {String} ErrorCode
 */


DescribeFleetError.prototype['ErrorCode'] = undefined;
/**
 * @member {String} ErrorMessage
 */

DescribeFleetError.prototype['ErrorMessage'] = undefined;
/**
 * @member {module:model/LaunchTemplateAndOverridesResponse} LaunchTemplateAndOverrides
 */

DescribeFleetError.prototype['LaunchTemplateAndOverrides'] = undefined;
/**
 * @member {module:model/InstanceLifecycle} Lifecycle
 */

DescribeFleetError.prototype['Lifecycle'] = undefined;
var _default = DescribeFleetError;
exports["default"] = _default;