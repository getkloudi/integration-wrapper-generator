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
 * The ReplaceRouteTableAssociationRequest model module.
 * @module model/ReplaceRouteTableAssociationRequest
 * @version 1.0.0
 */
var ReplaceRouteTableAssociationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReplaceRouteTableAssociationRequest</code>.
   * @alias module:model/ReplaceRouteTableAssociationRequest
   * @param associationId {String} 
   * @param routeTableId {String} 
   */
  function ReplaceRouteTableAssociationRequest(associationId, routeTableId) {
    _classCallCheck(this, ReplaceRouteTableAssociationRequest);

    ReplaceRouteTableAssociationRequest.initialize(this, associationId, routeTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReplaceRouteTableAssociationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, associationId, routeTableId) {
      obj['AssociationId'] = associationId;
      obj['RouteTableId'] = routeTableId;
    }
    /**
     * Constructs a <code>ReplaceRouteTableAssociationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReplaceRouteTableAssociationRequest} obj Optional instance to populate.
     * @return {module:model/ReplaceRouteTableAssociationRequest} The populated <code>ReplaceRouteTableAssociationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReplaceRouteTableAssociationRequest();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

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

  return ReplaceRouteTableAssociationRequest;
}();
/**
 * @member {String} AssociationId
 */


ReplaceRouteTableAssociationRequest.prototype['AssociationId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ReplaceRouteTableAssociationRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} RouteTableId
 */

ReplaceRouteTableAssociationRequest.prototype['RouteTableId'] = undefined;
var _default = ReplaceRouteTableAssociationRequest;
exports["default"] = _default;