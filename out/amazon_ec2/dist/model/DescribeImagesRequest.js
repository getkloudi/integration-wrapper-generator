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
 * The DescribeImagesRequest model module.
 * @module model/DescribeImagesRequest
 * @version 1.1.0
 */
var DescribeImagesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeImagesRequest</code>.
   * @alias module:model/DescribeImagesRequest
   */
  function DescribeImagesRequest() {
    _classCallCheck(this, DescribeImagesRequest);

    DescribeImagesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeImagesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeImagesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeImagesRequest} obj Optional instance to populate.
     * @return {module:model/DescribeImagesRequest} The populated <code>DescribeImagesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeImagesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ExecutableUsers')) {
          obj['ExecutableUsers'] = _ApiClient["default"].convertToType(data['ExecutableUsers'], ['String']);
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('ImageIds')) {
          obj['ImageIds'] = _ApiClient["default"].convertToType(data['ImageIds'], ['String']);
        }

        if (data.hasOwnProperty('Owners')) {
          obj['Owners'] = _ApiClient["default"].convertToType(data['Owners'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeImagesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeImagesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} ExecutableUsers
 */

DescribeImagesRequest.prototype['ExecutableUsers'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeImagesRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<String>} ImageIds
 */

DescribeImagesRequest.prototype['ImageIds'] = undefined;
/**
 * @member {Array.<String>} Owners
 */

DescribeImagesRequest.prototype['Owners'] = undefined;
var _default = DescribeImagesRequest;
exports["default"] = _default;