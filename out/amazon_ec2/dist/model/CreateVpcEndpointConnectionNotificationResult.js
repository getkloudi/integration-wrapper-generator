"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConnectionNotification = _interopRequireDefault(require("./ConnectionNotification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVpcEndpointConnectionNotificationResult model module.
 * @module model/CreateVpcEndpointConnectionNotificationResult
 * @version 1.0.0
 */
var CreateVpcEndpointConnectionNotificationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpcEndpointConnectionNotificationResult</code>.
   * @alias module:model/CreateVpcEndpointConnectionNotificationResult
   */
  function CreateVpcEndpointConnectionNotificationResult() {
    _classCallCheck(this, CreateVpcEndpointConnectionNotificationResult);

    CreateVpcEndpointConnectionNotificationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpcEndpointConnectionNotificationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateVpcEndpointConnectionNotificationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpcEndpointConnectionNotificationResult} obj Optional instance to populate.
     * @return {module:model/CreateVpcEndpointConnectionNotificationResult} The populated <code>CreateVpcEndpointConnectionNotificationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpcEndpointConnectionNotificationResult();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('ConnectionNotification')) {
          obj['ConnectionNotification'] = _ConnectionNotification["default"].constructFromObject(data['ConnectionNotification']);
        }
      }

      return obj;
    }
  }]);

  return CreateVpcEndpointConnectionNotificationResult;
}();
/**
 * @member {String} ClientToken
 */


CreateVpcEndpointConnectionNotificationResult.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/ConnectionNotification} ConnectionNotification
 */

CreateVpcEndpointConnectionNotificationResult.prototype['ConnectionNotification'] = undefined;
var _default = CreateVpcEndpointConnectionNotificationResult;
exports["default"] = _default;