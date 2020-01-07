"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RouteTableAssociationState = _interopRequireDefault(require("./RouteTableAssociationState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RouteTableAssociation model module.
 * @module model/RouteTableAssociation
 * @version 1.1.0
 */
var RouteTableAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RouteTableAssociation</code>.
   * Describes an association between a route table and a subnet or gateway.
   * @alias module:model/RouteTableAssociation
   */
  function RouteTableAssociation() {
    _classCallCheck(this, RouteTableAssociation);

    RouteTableAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RouteTableAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RouteTableAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RouteTableAssociation} obj Optional instance to populate.
     * @return {module:model/RouteTableAssociation} The populated <code>RouteTableAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RouteTableAssociation();

        if (data.hasOwnProperty('AssociationState')) {
          obj['AssociationState'] = _RouteTableAssociationState["default"].constructFromObject(data['AssociationState']);
        }

        if (data.hasOwnProperty('GatewayId')) {
          obj['GatewayId'] = _ApiClient["default"].convertToType(data['GatewayId'], 'String');
        }

        if (data.hasOwnProperty('Main')) {
          obj['Main'] = _ApiClient["default"].convertToType(data['Main'], 'Boolean');
        }

        if (data.hasOwnProperty('RouteTableAssociationId')) {
          obj['RouteTableAssociationId'] = _ApiClient["default"].convertToType(data['RouteTableAssociationId'], 'String');
        }

        if (data.hasOwnProperty('RouteTableId')) {
          obj['RouteTableId'] = _ApiClient["default"].convertToType(data['RouteTableId'], 'String');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RouteTableAssociation;
}();
/**
 * @member {module:model/RouteTableAssociationState} AssociationState
 */


RouteTableAssociation.prototype['AssociationState'] = undefined;
/**
 * @member {String} GatewayId
 */

RouteTableAssociation.prototype['GatewayId'] = undefined;
/**
 * @member {Boolean} Main
 */

RouteTableAssociation.prototype['Main'] = undefined;
/**
 * @member {String} RouteTableAssociationId
 */

RouteTableAssociation.prototype['RouteTableAssociationId'] = undefined;
/**
 * @member {String} RouteTableId
 */

RouteTableAssociation.prototype['RouteTableId'] = undefined;
/**
 * @member {String} SubnetId
 */

RouteTableAssociation.prototype['SubnetId'] = undefined;
var _default = RouteTableAssociation;
exports["default"] = _default;