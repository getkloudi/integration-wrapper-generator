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
 * The DeleteRouteTableRequest model module.
 * @module model/DeleteRouteTableRequest
 * @version 1.1.0
 */
var DeleteRouteTableRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteRouteTableRequest</code>.
   * @alias module:model/DeleteRouteTableRequest
   * @param routeTableId {String} 
   */
  function DeleteRouteTableRequest(routeTableId) {
    _classCallCheck(this, DeleteRouteTableRequest);

    DeleteRouteTableRequest.initialize(this, routeTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteRouteTableRequest, null, [{
    key: "initialize",
    value: function initialize(obj, routeTableId) {
      obj['RouteTableId'] = routeTableId;
    }
    /**
     * Constructs a <code>DeleteRouteTableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRouteTableRequest} obj Optional instance to populate.
     * @return {module:model/DeleteRouteTableRequest} The populated <code>DeleteRouteTableRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteRouteTableRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('RouteTableId')) {
          obj['RouteTableId'] = _ApiClient["default"].convertToType(data['RouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteRouteTableRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteRouteTableRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} RouteTableId
 */

DeleteRouteTableRequest.prototype['RouteTableId'] = undefined;
var _default = DeleteRouteTableRequest;
exports["default"] = _default;