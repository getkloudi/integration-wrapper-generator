"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

var _TransitGatewayRequestOptions = _interopRequireDefault(require("./TransitGatewayRequestOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTransitGatewayRequest model module.
 * @module model/CreateTransitGatewayRequest
 * @version 1.0.0
 */
var CreateTransitGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateTransitGatewayRequest</code>.
   * @alias module:model/CreateTransitGatewayRequest
   */
  function CreateTransitGatewayRequest() {
    _classCallCheck(this, CreateTransitGatewayRequest);

    CreateTransitGatewayRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTransitGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTransitGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTransitGatewayRequest} obj Optional instance to populate.
     * @return {module:model/CreateTransitGatewayRequest} The populated <code>CreateTransitGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTransitGatewayRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _TransitGatewayRequestOptions["default"].constructFromObject(data['Options']);
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreateTransitGatewayRequest;
}();
/**
 * @member {String} Description
 */


CreateTransitGatewayRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateTransitGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/TransitGatewayRequestOptions} Options
 */

CreateTransitGatewayRequest.prototype['Options'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateTransitGatewayRequest.prototype['TagSpecifications'] = undefined;
var _default = CreateTransitGatewayRequest;
exports["default"] = _default;