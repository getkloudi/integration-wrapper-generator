"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ImageAttributeName = _interopRequireDefault(require("./ImageAttributeName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeImageAttributeRequest model module.
 * @module model/DescribeImageAttributeRequest
 * @version 1.1.0
 */
var DescribeImageAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeImageAttributeRequest</code>.
   * Contains the parameters for DescribeImageAttribute.
   * @alias module:model/DescribeImageAttributeRequest
   * @param attribute {module:model/ImageAttributeName} 
   * @param imageId {String} 
   */
  function DescribeImageAttributeRequest(attribute, imageId) {
    _classCallCheck(this, DescribeImageAttributeRequest);

    DescribeImageAttributeRequest.initialize(this, attribute, imageId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeImageAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, attribute, imageId) {
      obj['Attribute'] = attribute;
      obj['ImageId'] = imageId;
    }
    /**
     * Constructs a <code>DescribeImageAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeImageAttributeRequest} obj Optional instance to populate.
     * @return {module:model/DescribeImageAttributeRequest} The populated <code>DescribeImageAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeImageAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _ImageAttributeName["default"].constructFromObject(data['Attribute']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeImageAttributeRequest;
}();
/**
 * @member {module:model/ImageAttributeName} Attribute
 */


DescribeImageAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeImageAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} ImageId
 */

DescribeImageAttributeRequest.prototype['ImageId'] = undefined;
var _default = DescribeImageAttributeRequest;
exports["default"] = _default;