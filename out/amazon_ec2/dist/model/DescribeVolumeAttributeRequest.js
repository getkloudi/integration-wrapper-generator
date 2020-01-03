"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeAttributeName = _interopRequireDefault(require("./VolumeAttributeName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVolumeAttributeRequest model module.
 * @module model/DescribeVolumeAttributeRequest
 * @version 1.0.0
 */
var DescribeVolumeAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVolumeAttributeRequest</code>.
   * @alias module:model/DescribeVolumeAttributeRequest
   * @param attribute {module:model/VolumeAttributeName} 
   * @param volumeId {String} 
   */
  function DescribeVolumeAttributeRequest(attribute, volumeId) {
    _classCallCheck(this, DescribeVolumeAttributeRequest);

    DescribeVolumeAttributeRequest.initialize(this, attribute, volumeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVolumeAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, attribute, volumeId) {
      obj['Attribute'] = attribute;
      obj['VolumeId'] = volumeId;
    }
    /**
     * Constructs a <code>DescribeVolumeAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVolumeAttributeRequest} obj Optional instance to populate.
     * @return {module:model/DescribeVolumeAttributeRequest} The populated <code>DescribeVolumeAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVolumeAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _VolumeAttributeName["default"].constructFromObject(data['Attribute']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeVolumeAttributeRequest;
}();
/**
 * @member {module:model/VolumeAttributeName} Attribute
 */


DescribeVolumeAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeVolumeAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VolumeId
 */

DescribeVolumeAttributeRequest.prototype['VolumeId'] = undefined;
var _default = DescribeVolumeAttributeRequest;
exports["default"] = _default;