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
 * The CreateFleetError model module.
 * @module model/CreateFleetError
 * @version 1.1.0
 */
var CreateFleetError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateFleetError</code>.
   * Describes the instances that could not be launched by the fleet.
   * @alias module:model/CreateFleetError
   */
  function CreateFleetError() {
    _classCallCheck(this, CreateFleetError);

    CreateFleetError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFleetError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateFleetError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFleetError} obj Optional instance to populate.
     * @return {module:model/CreateFleetError} The populated <code>CreateFleetError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFleetError();

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

  return CreateFleetError;
}();
/**
 * @member {String} ErrorCode
 */


CreateFleetError.prototype['ErrorCode'] = undefined;
/**
 * @member {String} ErrorMessage
 */

CreateFleetError.prototype['ErrorMessage'] = undefined;
/**
 * @member {module:model/LaunchTemplateAndOverridesResponse} LaunchTemplateAndOverrides
 */

CreateFleetError.prototype['LaunchTemplateAndOverrides'] = undefined;
/**
 * @member {module:model/InstanceLifecycle} Lifecycle
 */

CreateFleetError.prototype['Lifecycle'] = undefined;
var _default = CreateFleetError;
exports["default"] = _default;