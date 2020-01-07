"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CoipPool model module.
 * @module model/CoipPool
 * @version 1.1.0
 */
var CoipPool =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CoipPool</code>.
   * Describes a customer-owned address pool.
   * @alias module:model/CoipPool
   */
  function CoipPool() {
    _classCallCheck(this, CoipPool);

    CoipPool.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CoipPool, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CoipPool</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoipPool} obj Optional instance to populate.
     * @return {module:model/CoipPool} The populated <code>CoipPool</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoipPool();

        if (data.hasOwnProperty('LocalGatewayRouteTableId')) {
          obj['LocalGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableId'], 'String');
        }

        if (data.hasOwnProperty('PoolCidrs')) {
          obj['PoolCidrs'] = _ApiClient["default"].convertToType(data['PoolCidrs'], ['String']);
        }

        if (data.hasOwnProperty('PoolId')) {
          obj['PoolId'] = _ApiClient["default"].convertToType(data['PoolId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CoipPool;
}();
/**
 * @member {String} LocalGatewayRouteTableId
 */


CoipPool.prototype['LocalGatewayRouteTableId'] = undefined;
/**
 * @member {Array.<String>} PoolCidrs
 */

CoipPool.prototype['PoolCidrs'] = undefined;
/**
 * @member {String} PoolId
 */

CoipPool.prototype['PoolId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

CoipPool.prototype['Tags'] = undefined;
var _default = CoipPool;
exports["default"] = _default;