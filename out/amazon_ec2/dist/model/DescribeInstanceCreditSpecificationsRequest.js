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
 * The DescribeInstanceCreditSpecificationsRequest model module.
 * @module model/DescribeInstanceCreditSpecificationsRequest
 * @version 1.1.0
 */
var DescribeInstanceCreditSpecificationsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeInstanceCreditSpecificationsRequest</code>.
   * @alias module:model/DescribeInstanceCreditSpecificationsRequest
   */
  function DescribeInstanceCreditSpecificationsRequest() {
    _classCallCheck(this, DescribeInstanceCreditSpecificationsRequest);

    DescribeInstanceCreditSpecificationsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeInstanceCreditSpecificationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeInstanceCreditSpecificationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeInstanceCreditSpecificationsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeInstanceCreditSpecificationsRequest} The populated <code>DescribeInstanceCreditSpecificationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeInstanceCreditSpecificationsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('InstanceIds')) {
          obj['InstanceIds'] = _ApiClient["default"].convertToType(data['InstanceIds'], ['String']);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeInstanceCreditSpecificationsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeInstanceCreditSpecificationsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeInstanceCreditSpecificationsRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<String>} InstanceIds
 */

DescribeInstanceCreditSpecificationsRequest.prototype['InstanceIds'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeInstanceCreditSpecificationsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeInstanceCreditSpecificationsRequest.prototype['NextToken'] = undefined;
var _default = DescribeInstanceCreditSpecificationsRequest;
exports["default"] = _default;