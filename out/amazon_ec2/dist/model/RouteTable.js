"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PropagatingVgw = _interopRequireDefault(require("./PropagatingVgw"));

var _Route = _interopRequireDefault(require("./Route"));

var _RouteTableAssociation = _interopRequireDefault(require("./RouteTableAssociation"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RouteTable model module.
 * @module model/RouteTable
 * @version 1.1.0
 */
var RouteTable =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RouteTable</code>.
   * Describes a route table.
   * @alias module:model/RouteTable
   */
  function RouteTable() {
    _classCallCheck(this, RouteTable);

    RouteTable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RouteTable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RouteTable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RouteTable} obj Optional instance to populate.
     * @return {module:model/RouteTable} The populated <code>RouteTable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RouteTable();

        if (data.hasOwnProperty('Associations')) {
          obj['Associations'] = _ApiClient["default"].convertToType(data['Associations'], [_RouteTableAssociation["default"]]);
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('PropagatingVgws')) {
          obj['PropagatingVgws'] = _ApiClient["default"].convertToType(data['PropagatingVgws'], [_PropagatingVgw["default"]]);
        }

        if (data.hasOwnProperty('RouteTableId')) {
          obj['RouteTableId'] = _ApiClient["default"].convertToType(data['RouteTableId'], 'String');
        }

        if (data.hasOwnProperty('Routes')) {
          obj['Routes'] = _ApiClient["default"].convertToType(data['Routes'], [_Route["default"]]);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RouteTable;
}();
/**
 * @member {Array.<module:model/RouteTableAssociation>} Associations
 */


RouteTable.prototype['Associations'] = undefined;
/**
 * @member {String} OwnerId
 */

RouteTable.prototype['OwnerId'] = undefined;
/**
 * @member {Array.<module:model/PropagatingVgw>} PropagatingVgws
 */

RouteTable.prototype['PropagatingVgws'] = undefined;
/**
 * @member {String} RouteTableId
 */

RouteTable.prototype['RouteTableId'] = undefined;
/**
 * @member {Array.<module:model/Route>} Routes
 */

RouteTable.prototype['Routes'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

RouteTable.prototype['Tags'] = undefined;
/**
 * @member {String} VpcId
 */

RouteTable.prototype['VpcId'] = undefined;
var _default = RouteTable;
exports["default"] = _default;