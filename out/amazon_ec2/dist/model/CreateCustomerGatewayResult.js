"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomerGateway = _interopRequireDefault(require("./CustomerGateway"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCustomerGatewayResult model module.
 * @module model/CreateCustomerGatewayResult
 * @version 1.1.0
 */
var CreateCustomerGatewayResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateCustomerGatewayResult</code>.
   * Contains the output of CreateCustomerGateway.
   * @alias module:model/CreateCustomerGatewayResult
   */
  function CreateCustomerGatewayResult() {
    _classCallCheck(this, CreateCustomerGatewayResult);

    CreateCustomerGatewayResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCustomerGatewayResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateCustomerGatewayResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCustomerGatewayResult} obj Optional instance to populate.
     * @return {module:model/CreateCustomerGatewayResult} The populated <code>CreateCustomerGatewayResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCustomerGatewayResult();

        if (data.hasOwnProperty('CustomerGateway')) {
          obj['CustomerGateway'] = _CustomerGateway["default"].constructFromObject(data['CustomerGateway']);
        }
      }

      return obj;
    }
  }]);

  return CreateCustomerGatewayResult;
}();
/**
 * @member {module:model/CustomerGateway} CustomerGateway
 */


CreateCustomerGatewayResult.prototype['CustomerGateway'] = undefined;
var _default = CreateCustomerGatewayResult;
exports["default"] = _default;