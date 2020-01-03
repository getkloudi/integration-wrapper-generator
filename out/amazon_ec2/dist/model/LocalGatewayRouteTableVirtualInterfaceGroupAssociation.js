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
 * The LocalGatewayRouteTableVirtualInterfaceGroupAssociation model module.
 * @module model/LocalGatewayRouteTableVirtualInterfaceGroupAssociation
 * @version 1.0.0
 */
var LocalGatewayRouteTableVirtualInterfaceGroupAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LocalGatewayRouteTableVirtualInterfaceGroupAssociation</code>.
   * Describes an association between a local gateway route table and a virtual interface group.
   * @alias module:model/LocalGatewayRouteTableVirtualInterfaceGroupAssociation
   */
  function LocalGatewayRouteTableVirtualInterfaceGroupAssociation() {
    _classCallCheck(this, LocalGatewayRouteTableVirtualInterfaceGroupAssociation);

    LocalGatewayRouteTableVirtualInterfaceGroupAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocalGatewayRouteTableVirtualInterfaceGroupAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocalGatewayRouteTableVirtualInterfaceGroupAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalGatewayRouteTableVirtualInterfaceGroupAssociation} obj Optional instance to populate.
     * @return {module:model/LocalGatewayRouteTableVirtualInterfaceGroupAssociation} The populated <code>LocalGatewayRouteTableVirtualInterfaceGroupAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocalGatewayRouteTableVirtualInterfaceGroupAssociation();

        if (data.hasOwnProperty('LocalGatewayId')) {
          obj['LocalGatewayId'] = _ApiClient["default"].convertToType(data['LocalGatewayId'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableId')) {
          obj['LocalGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableId'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableVirtualInterfaceGroupAssociationId')) {
          obj['LocalGatewayRouteTableVirtualInterfaceGroupAssociationId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableVirtualInterfaceGroupAssociationId'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayVirtualInterfaceGroupId')) {
          obj['LocalGatewayVirtualInterfaceGroupId'] = _ApiClient["default"].convertToType(data['LocalGatewayVirtualInterfaceGroupId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ApiClient["default"].convertToType(data['State'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}();
/**
 * @member {String} LocalGatewayId
 */


LocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype['LocalGatewayId'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableId
 */

LocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype['LocalGatewayRouteTableId'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableVirtualInterfaceGroupAssociationId
 */

LocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype['LocalGatewayRouteTableVirtualInterfaceGroupAssociationId'] = undefined;
/**
 * @member {String} LocalGatewayVirtualInterfaceGroupId
 */

LocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype['LocalGatewayVirtualInterfaceGroupId'] = undefined;
/**
 * @member {String} State
 */

LocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype['State'] = undefined;
var _default = LocalGatewayRouteTableVirtualInterfaceGroupAssociation;
exports["default"] = _default;