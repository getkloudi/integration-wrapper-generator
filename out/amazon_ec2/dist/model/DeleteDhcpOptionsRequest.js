"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteDhcpOptionsRequest model module.
 * @module model/DeleteDhcpOptionsRequest
 * @version 1.0.0
 */
var DeleteDhcpOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteDhcpOptionsRequest</code>.
   * @alias module:model/DeleteDhcpOptionsRequest
   * @param dhcpOptionsId {String} 
   */
  function DeleteDhcpOptionsRequest(dhcpOptionsId) {
    _classCallCheck(this, DeleteDhcpOptionsRequest);

    DeleteDhcpOptionsRequest.initialize(this, dhcpOptionsId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteDhcpOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, dhcpOptionsId) {
      obj['DhcpOptionsId'] = dhcpOptionsId;
    }
    /**
     * Constructs a <code>DeleteDhcpOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteDhcpOptionsRequest} obj Optional instance to populate.
     * @return {module:model/DeleteDhcpOptionsRequest} The populated <code>DeleteDhcpOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteDhcpOptionsRequest();

        if (data.hasOwnProperty('DhcpOptionsId')) {
          obj['DhcpOptionsId'] = _ApiClient["default"].convertToType(data['DhcpOptionsId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return DeleteDhcpOptionsRequest;
}();
/**
 * @member {String} DhcpOptionsId
 */


DeleteDhcpOptionsRequest.prototype['DhcpOptionsId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DeleteDhcpOptionsRequest.prototype['DryRun'] = undefined;
var _default = DeleteDhcpOptionsRequest;
exports["default"] = _default;