"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReservedInstancesModification = _interopRequireDefault(require("./ReservedInstancesModification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeReservedInstancesModificationsResult model module.
 * @module model/DescribeReservedInstancesModificationsResult
 * @version 1.0.0
 */
var DescribeReservedInstancesModificationsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeReservedInstancesModificationsResult</code>.
   * Contains the output of DescribeReservedInstancesModifications.
   * @alias module:model/DescribeReservedInstancesModificationsResult
   */
  function DescribeReservedInstancesModificationsResult() {
    _classCallCheck(this, DescribeReservedInstancesModificationsResult);

    DescribeReservedInstancesModificationsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeReservedInstancesModificationsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeReservedInstancesModificationsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeReservedInstancesModificationsResult} obj Optional instance to populate.
     * @return {module:model/DescribeReservedInstancesModificationsResult} The populated <code>DescribeReservedInstancesModificationsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeReservedInstancesModificationsResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('ReservedInstancesModifications')) {
          obj['ReservedInstancesModifications'] = _ApiClient["default"].convertToType(data['ReservedInstancesModifications'], [_ReservedInstancesModification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeReservedInstancesModificationsResult;
}();
/**
 * @member {String} NextToken
 */


DescribeReservedInstancesModificationsResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/ReservedInstancesModification>} ReservedInstancesModifications
 */

DescribeReservedInstancesModificationsResult.prototype['ReservedInstancesModifications'] = undefined;
var _default = DescribeReservedInstancesModificationsResult;
exports["default"] = _default;