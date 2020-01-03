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
 * The DescribeLaunchTemplatesRequest model module.
 * @module model/DescribeLaunchTemplatesRequest
 * @version 1.0.0
 */
var DescribeLaunchTemplatesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeLaunchTemplatesRequest</code>.
   * @alias module:model/DescribeLaunchTemplatesRequest
   */
  function DescribeLaunchTemplatesRequest() {
    _classCallCheck(this, DescribeLaunchTemplatesRequest);

    DescribeLaunchTemplatesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeLaunchTemplatesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeLaunchTemplatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeLaunchTemplatesRequest} obj Optional instance to populate.
     * @return {module:model/DescribeLaunchTemplatesRequest} The populated <code>DescribeLaunchTemplatesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeLaunchTemplatesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('LaunchTemplateIds')) {
          obj['LaunchTemplateIds'] = _ApiClient["default"].convertToType(data['LaunchTemplateIds'], ['String']);
        }

        if (data.hasOwnProperty('LaunchTemplateNames')) {
          obj['LaunchTemplateNames'] = _ApiClient["default"].convertToType(data['LaunchTemplateNames'], ['String']);
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

  return DescribeLaunchTemplatesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeLaunchTemplatesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeLaunchTemplatesRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<String>} LaunchTemplateIds
 */

DescribeLaunchTemplatesRequest.prototype['LaunchTemplateIds'] = undefined;
/**
 * @member {Array.<String>} LaunchTemplateNames
 */

DescribeLaunchTemplatesRequest.prototype['LaunchTemplateNames'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeLaunchTemplatesRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeLaunchTemplatesRequest.prototype['NextToken'] = undefined;
var _default = DescribeLaunchTemplatesRequest;
exports["default"] = _default;