"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HttpTokensState = _interopRequireDefault(require("./HttpTokensState"));

var _InstanceMetadataEndpointState = _interopRequireDefault(require("./InstanceMetadataEndpointState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceMetadataOptionsRequest model module.
 * @module model/InstanceMetadataOptionsRequest
 * @version 1.1.0
 */
var InstanceMetadataOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceMetadataOptionsRequest</code>.
   * The metadata options for the instance.
   * @alias module:model/InstanceMetadataOptionsRequest
   */
  function InstanceMetadataOptionsRequest() {
    _classCallCheck(this, InstanceMetadataOptionsRequest);

    InstanceMetadataOptionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceMetadataOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceMetadataOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceMetadataOptionsRequest} obj Optional instance to populate.
     * @return {module:model/InstanceMetadataOptionsRequest} The populated <code>InstanceMetadataOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceMetadataOptionsRequest();

        if (data.hasOwnProperty('HttpEndpoint')) {
          obj['HttpEndpoint'] = _InstanceMetadataEndpointState["default"].constructFromObject(data['HttpEndpoint']);
        }

        if (data.hasOwnProperty('HttpPutResponseHopLimit')) {
          obj['HttpPutResponseHopLimit'] = _ApiClient["default"].convertToType(data['HttpPutResponseHopLimit'], 'Number');
        }

        if (data.hasOwnProperty('HttpTokens')) {
          obj['HttpTokens'] = _HttpTokensState["default"].constructFromObject(data['HttpTokens']);
        }
      }

      return obj;
    }
  }]);

  return InstanceMetadataOptionsRequest;
}();
/**
 * @member {module:model/InstanceMetadataEndpointState} HttpEndpoint
 */


InstanceMetadataOptionsRequest.prototype['HttpEndpoint'] = undefined;
/**
 * @member {Number} HttpPutResponseHopLimit
 */

InstanceMetadataOptionsRequest.prototype['HttpPutResponseHopLimit'] = undefined;
/**
 * @member {module:model/HttpTokensState} HttpTokens
 */

InstanceMetadataOptionsRequest.prototype['HttpTokens'] = undefined;
var _default = InstanceMetadataOptionsRequest;
exports["default"] = _default;