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
 * The DescribeKeyPairsRequest model module.
 * @module model/DescribeKeyPairsRequest
 * @version 1.0.0
 */
var DescribeKeyPairsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeKeyPairsRequest</code>.
   * @alias module:model/DescribeKeyPairsRequest
   */
  function DescribeKeyPairsRequest() {
    _classCallCheck(this, DescribeKeyPairsRequest);

    DescribeKeyPairsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeKeyPairsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeKeyPairsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeKeyPairsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeKeyPairsRequest} The populated <code>DescribeKeyPairsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeKeyPairsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('KeyNames')) {
          obj['KeyNames'] = _ApiClient["default"].convertToType(data['KeyNames'], ['String']);
        }

        if (data.hasOwnProperty('KeyPairIds')) {
          obj['KeyPairIds'] = _ApiClient["default"].convertToType(data['KeyPairIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeKeyPairsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeKeyPairsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeKeyPairsRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<String>} KeyNames
 */

DescribeKeyPairsRequest.prototype['KeyNames'] = undefined;
/**
 * @member {Array.<String>} KeyPairIds
 */

DescribeKeyPairsRequest.prototype['KeyPairIds'] = undefined;
var _default = DescribeKeyPairsRequest;
exports["default"] = _default;