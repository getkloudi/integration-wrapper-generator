"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HttpTokensState = _interopRequireDefault(require("./HttpTokensState"));

var _InstanceMetadataEndpointState = _interopRequireDefault(require("./InstanceMetadataEndpointState"));

var _InstanceMetadataOptionsState = _interopRequireDefault(require("./InstanceMetadataOptionsState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceMetadataOptionsResponse model module.
 * @module model/InstanceMetadataOptionsResponse
 * @version 1.0.0
 */
var InstanceMetadataOptionsResponse =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceMetadataOptionsResponse</code>.
   * The metadata options for the instance.
   * @alias module:model/InstanceMetadataOptionsResponse
   */
  function InstanceMetadataOptionsResponse() {
    _classCallCheck(this, InstanceMetadataOptionsResponse);

    InstanceMetadataOptionsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceMetadataOptionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceMetadataOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceMetadataOptionsResponse} obj Optional instance to populate.
     * @return {module:model/InstanceMetadataOptionsResponse} The populated <code>InstanceMetadataOptionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceMetadataOptionsResponse();

        if (data.hasOwnProperty('HttpEndpoint')) {
          obj['HttpEndpoint'] = _InstanceMetadataEndpointState["default"].constructFromObject(data['HttpEndpoint']);
        }

        if (data.hasOwnProperty('HttpPutResponseHopLimit')) {
          obj['HttpPutResponseHopLimit'] = _ApiClient["default"].convertToType(data['HttpPutResponseHopLimit'], 'Number');
        }

        if (data.hasOwnProperty('HttpTokens')) {
          obj['HttpTokens'] = _HttpTokensState["default"].constructFromObject(data['HttpTokens']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _InstanceMetadataOptionsState["default"].constructFromObject(data['State']);
        }
      }

      return obj;
    }
  }]);

  return InstanceMetadataOptionsResponse;
}();
/**
 * @member {module:model/InstanceMetadataEndpointState} HttpEndpoint
 */


InstanceMetadataOptionsResponse.prototype['HttpEndpoint'] = undefined;
/**
 * @member {Number} HttpPutResponseHopLimit
 */

InstanceMetadataOptionsResponse.prototype['HttpPutResponseHopLimit'] = undefined;
/**
 * @member {module:model/HttpTokensState} HttpTokens
 */

InstanceMetadataOptionsResponse.prototype['HttpTokens'] = undefined;
/**
 * @member {module:model/InstanceMetadataOptionsState} State
 */

InstanceMetadataOptionsResponse.prototype['State'] = undefined;
var _default = InstanceMetadataOptionsResponse;
exports["default"] = _default;