"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TransitGatewayRouteTableState = _interopRequireDefault(require("./TransitGatewayRouteTableState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransitGatewayRouteTable model module.
 * @module model/TransitGatewayRouteTable
 * @version 1.0.0
 */
var TransitGatewayRouteTable =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TransitGatewayRouteTable</code>.
   * Describes a transit gateway route table.
   * @alias module:model/TransitGatewayRouteTable
   */
  function TransitGatewayRouteTable() {
    _classCallCheck(this, TransitGatewayRouteTable);

    TransitGatewayRouteTable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransitGatewayRouteTable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransitGatewayRouteTable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransitGatewayRouteTable} obj Optional instance to populate.
     * @return {module:model/TransitGatewayRouteTable} The populated <code>TransitGatewayRouteTable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransitGatewayRouteTable();

        if (data.hasOwnProperty('CreationTime')) {
          obj['CreationTime'] = _ApiClient["default"].convertToType(data['CreationTime'], 'Date');
        }

        if (data.hasOwnProperty('DefaultAssociationRouteTable')) {
          obj['DefaultAssociationRouteTable'] = _ApiClient["default"].convertToType(data['DefaultAssociationRouteTable'], 'Boolean');
        }

        if (data.hasOwnProperty('DefaultPropagationRouteTable')) {
          obj['DefaultPropagationRouteTable'] = _ApiClient["default"].convertToType(data['DefaultPropagationRouteTable'], 'Boolean');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TransitGatewayRouteTableState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayRouteTableId')) {
          obj['TransitGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['TransitGatewayRouteTableId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransitGatewayRouteTable;
}();
/**
 * @member {Date} CreationTime
 */


TransitGatewayRouteTable.prototype['CreationTime'] = undefined;
/**
 * @member {Boolean} DefaultAssociationRouteTable
 */

TransitGatewayRouteTable.prototype['DefaultAssociationRouteTable'] = undefined;
/**
 * @member {Boolean} DefaultPropagationRouteTable
 */

TransitGatewayRouteTable.prototype['DefaultPropagationRouteTable'] = undefined;
/**
 * @member {module:model/TransitGatewayRouteTableState} State
 */

TransitGatewayRouteTable.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

TransitGatewayRouteTable.prototype['Tags'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

TransitGatewayRouteTable.prototype['TransitGatewayId'] = undefined;
/**
 * @member {String} TransitGatewayRouteTableId
 */

TransitGatewayRouteTable.prototype['TransitGatewayRouteTableId'] = undefined;
var _default = TransitGatewayRouteTable;
exports["default"] = _default;