"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcPeeringConnection = _interopRequireDefault(require("./VpcPeeringConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpcPeeringConnectionsResult model module.
 * @module model/DescribeVpcPeeringConnectionsResult
 * @version 1.0.0
 */
var DescribeVpcPeeringConnectionsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcPeeringConnectionsResult</code>.
   * @alias module:model/DescribeVpcPeeringConnectionsResult
   */
  function DescribeVpcPeeringConnectionsResult() {
    _classCallCheck(this, DescribeVpcPeeringConnectionsResult);

    DescribeVpcPeeringConnectionsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcPeeringConnectionsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpcPeeringConnectionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcPeeringConnectionsResult} obj Optional instance to populate.
     * @return {module:model/DescribeVpcPeeringConnectionsResult} The populated <code>DescribeVpcPeeringConnectionsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcPeeringConnectionsResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('VpcPeeringConnections')) {
          obj['VpcPeeringConnections'] = _ApiClient["default"].convertToType(data['VpcPeeringConnections'], [_VpcPeeringConnection["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcPeeringConnectionsResult;
}();
/**
 * @member {String} NextToken
 */


DescribeVpcPeeringConnectionsResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/VpcPeeringConnection>} VpcPeeringConnections
 */

DescribeVpcPeeringConnectionsResult.prototype['VpcPeeringConnections'] = undefined;
var _default = DescribeVpcPeeringConnectionsResult;
exports["default"] = _default;