"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LocalGatewayRouteTableVpcAssociation = _interopRequireDefault(require("./LocalGatewayRouteTableVpcAssociation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateLocalGatewayRouteTableVpcAssociationResult model module.
 * @module model/CreateLocalGatewayRouteTableVpcAssociationResult
 * @version 1.1.0
 */
var CreateLocalGatewayRouteTableVpcAssociationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateLocalGatewayRouteTableVpcAssociationResult</code>.
   * @alias module:model/CreateLocalGatewayRouteTableVpcAssociationResult
   */
  function CreateLocalGatewayRouteTableVpcAssociationResult() {
    _classCallCheck(this, CreateLocalGatewayRouteTableVpcAssociationResult);

    CreateLocalGatewayRouteTableVpcAssociationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateLocalGatewayRouteTableVpcAssociationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateLocalGatewayRouteTableVpcAssociationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLocalGatewayRouteTableVpcAssociationResult} obj Optional instance to populate.
     * @return {module:model/CreateLocalGatewayRouteTableVpcAssociationResult} The populated <code>CreateLocalGatewayRouteTableVpcAssociationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateLocalGatewayRouteTableVpcAssociationResult();

        if (data.hasOwnProperty('LocalGatewayRouteTableVpcAssociation')) {
          obj['LocalGatewayRouteTableVpcAssociation'] = _LocalGatewayRouteTableVpcAssociation["default"].constructFromObject(data['LocalGatewayRouteTableVpcAssociation']);
        }
      }

      return obj;
    }
  }]);

  return CreateLocalGatewayRouteTableVpcAssociationResult;
}();
/**
 * @member {module:model/LocalGatewayRouteTableVpcAssociation} LocalGatewayRouteTableVpcAssociation
 */


CreateLocalGatewayRouteTableVpcAssociationResult.prototype['LocalGatewayRouteTableVpcAssociation'] = undefined;
var _default = CreateLocalGatewayRouteTableVpcAssociationResult;
exports["default"] = _default;