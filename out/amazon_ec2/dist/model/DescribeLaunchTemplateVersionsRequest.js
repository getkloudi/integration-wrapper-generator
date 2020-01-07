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
 * The DescribeLaunchTemplateVersionsRequest model module.
 * @module model/DescribeLaunchTemplateVersionsRequest
 * @version 1.1.0
 */
var DescribeLaunchTemplateVersionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeLaunchTemplateVersionsRequest</code>.
   * @alias module:model/DescribeLaunchTemplateVersionsRequest
   */
  function DescribeLaunchTemplateVersionsRequest() {
    _classCallCheck(this, DescribeLaunchTemplateVersionsRequest);

    DescribeLaunchTemplateVersionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeLaunchTemplateVersionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeLaunchTemplateVersionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeLaunchTemplateVersionsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeLaunchTemplateVersionsRequest} The populated <code>DescribeLaunchTemplateVersionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeLaunchTemplateVersionsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('LaunchTemplateId')) {
          obj['LaunchTemplateId'] = _ApiClient["default"].convertToType(data['LaunchTemplateId'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('MaxVersion')) {
          obj['MaxVersion'] = _ApiClient["default"].convertToType(data['MaxVersion'], 'String');
        }

        if (data.hasOwnProperty('MinVersion')) {
          obj['MinVersion'] = _ApiClient["default"].convertToType(data['MinVersion'], 'String');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('Versions')) {
          obj['Versions'] = _ApiClient["default"].convertToType(data['Versions'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeLaunchTemplateVersionsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeLaunchTemplateVersionsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeLaunchTemplateVersionsRequest.prototype['Filters'] = undefined;
/**
 * @member {String} LaunchTemplateId
 */

DescribeLaunchTemplateVersionsRequest.prototype['LaunchTemplateId'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

DescribeLaunchTemplateVersionsRequest.prototype['LaunchTemplateName'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeLaunchTemplateVersionsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} MaxVersion
 */

DescribeLaunchTemplateVersionsRequest.prototype['MaxVersion'] = undefined;
/**
 * @member {String} MinVersion
 */

DescribeLaunchTemplateVersionsRequest.prototype['MinVersion'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeLaunchTemplateVersionsRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} Versions
 */

DescribeLaunchTemplateVersionsRequest.prototype['Versions'] = undefined;
var _default = DescribeLaunchTemplateVersionsRequest;
exports["default"] = _default;