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
 * The DescribeBundleTasksRequest model module.
 * @module model/DescribeBundleTasksRequest
 * @version 1.1.0
 */
var DescribeBundleTasksRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeBundleTasksRequest</code>.
   * @alias module:model/DescribeBundleTasksRequest
   */
  function DescribeBundleTasksRequest() {
    _classCallCheck(this, DescribeBundleTasksRequest);

    DescribeBundleTasksRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeBundleTasksRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeBundleTasksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeBundleTasksRequest} obj Optional instance to populate.
     * @return {module:model/DescribeBundleTasksRequest} The populated <code>DescribeBundleTasksRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeBundleTasksRequest();

        if (data.hasOwnProperty('BundleIds')) {
          obj['BundleIds'] = _ApiClient["default"].convertToType(data['BundleIds'], ['String']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeBundleTasksRequest;
}();
/**
 * @member {Array.<String>} BundleIds
 */


DescribeBundleTasksRequest.prototype['BundleIds'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeBundleTasksRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeBundleTasksRequest.prototype['Filters'] = undefined;
var _default = DescribeBundleTasksRequest;
exports["default"] = _default;