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
 * The LocalGatewayRouteTableVpcAssociation model module.
 * @module model/LocalGatewayRouteTableVpcAssociation
 * @version 1.1.0
 */
var LocalGatewayRouteTableVpcAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LocalGatewayRouteTableVpcAssociation</code>.
   * Describes an association between a local gateway route table and a VPC.
   * @alias module:model/LocalGatewayRouteTableVpcAssociation
   */
  function LocalGatewayRouteTableVpcAssociation() {
    _classCallCheck(this, LocalGatewayRouteTableVpcAssociation);

    LocalGatewayRouteTableVpcAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocalGatewayRouteTableVpcAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocalGatewayRouteTableVpcAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalGatewayRouteTableVpcAssociation} obj Optional instance to populate.
     * @return {module:model/LocalGatewayRouteTableVpcAssociation} The populated <code>LocalGatewayRouteTableVpcAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocalGatewayRouteTableVpcAssociation();

        if (data.hasOwnProperty('LocalGatewayId')) {
          obj['LocalGatewayId'] = _ApiClient["default"].convertToType(data['LocalGatewayId'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableId')) {
          obj['LocalGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableId'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableVpcAssociationId')) {
          obj['LocalGatewayRouteTableVpcAssociationId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableVpcAssociationId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ApiClient["default"].convertToType(data['State'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LocalGatewayRouteTableVpcAssociation;
}();
/**
 * @member {String} LocalGatewayId
 */


LocalGatewayRouteTableVpcAssociation.prototype['LocalGatewayId'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableId
 */

LocalGatewayRouteTableVpcAssociation.prototype['LocalGatewayRouteTableId'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableVpcAssociationId
 */

LocalGatewayRouteTableVpcAssociation.prototype['LocalGatewayRouteTableVpcAssociationId'] = undefined;
/**
 * @member {String} State
 */

LocalGatewayRouteTableVpcAssociation.prototype['State'] = undefined;
/**
 * @member {String} VpcId
 */

LocalGatewayRouteTableVpcAssociation.prototype['VpcId'] = undefined;
var _default = LocalGatewayRouteTableVpcAssociation;
exports["default"] = _default;