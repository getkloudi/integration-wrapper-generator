"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeReservedInstancesModificationsRequest model module.
 * @module model/DescribeReservedInstancesModificationsRequest
 * @version 1.0.0
 */
var DescribeReservedInstancesModificationsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeReservedInstancesModificationsRequest</code>.
   * Contains the parameters for DescribeReservedInstancesModifications.
   * @alias module:model/DescribeReservedInstancesModificationsRequest
   */
  function DescribeReservedInstancesModificationsRequest() {
    _classCallCheck(this, DescribeReservedInstancesModificationsRequest);

    DescribeReservedInstancesModificationsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeReservedInstancesModificationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeReservedInstancesModificationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeReservedInstancesModificationsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeReservedInstancesModificationsRequest} The populated <code>DescribeReservedInstancesModificationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeReservedInstancesModificationsRequest();

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('ReservedInstancesModificationIds')) {
          obj['ReservedInstancesModificationIds'] = _ApiClient["default"].convertToType(data['ReservedInstancesModificationIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeReservedInstancesModificationsRequest;
}();
/**
 * @member {Array.<module:model/Filter>} Filters
 */


DescribeReservedInstancesModificationsRequest.prototype['Filters'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeReservedInstancesModificationsRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} ReservedInstancesModificationIds
 */

DescribeReservedInstancesModificationsRequest.prototype['ReservedInstancesModificationIds'] = undefined;
var _default = DescribeReservedInstancesModificationsRequest;
exports["default"] = _default;