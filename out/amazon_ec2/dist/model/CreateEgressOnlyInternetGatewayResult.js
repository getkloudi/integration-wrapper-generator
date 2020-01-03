"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EgressOnlyInternetGateway = _interopRequireDefault(require("./EgressOnlyInternetGateway"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateEgressOnlyInternetGatewayResult model module.
 * @module model/CreateEgressOnlyInternetGatewayResult
 * @version 1.0.0
 */
var CreateEgressOnlyInternetGatewayResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateEgressOnlyInternetGatewayResult</code>.
   * @alias module:model/CreateEgressOnlyInternetGatewayResult
   */
  function CreateEgressOnlyInternetGatewayResult() {
    _classCallCheck(this, CreateEgressOnlyInternetGatewayResult);

    CreateEgressOnlyInternetGatewayResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateEgressOnlyInternetGatewayResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateEgressOnlyInternetGatewayResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEgressOnlyInternetGatewayResult} obj Optional instance to populate.
     * @return {module:model/CreateEgressOnlyInternetGatewayResult} The populated <code>CreateEgressOnlyInternetGatewayResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateEgressOnlyInternetGatewayResult();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('EgressOnlyInternetGateway')) {
          obj['EgressOnlyInternetGateway'] = _EgressOnlyInternetGateway["default"].constructFromObject(data['EgressOnlyInternetGateway']);
        }
      }

      return obj;
    }
  }]);

  return CreateEgressOnlyInternetGatewayResult;
}();
/**
 * @member {String} ClientToken
 */


CreateEgressOnlyInternetGatewayResult.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/EgressOnlyInternetGateway} EgressOnlyInternetGateway
 */

CreateEgressOnlyInternetGatewayResult.prototype['EgressOnlyInternetGateway'] = undefined;
var _default = CreateEgressOnlyInternetGatewayResult;
exports["default"] = _default;