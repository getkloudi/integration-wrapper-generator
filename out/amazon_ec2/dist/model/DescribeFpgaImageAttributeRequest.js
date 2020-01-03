"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FpgaImageAttributeName = _interopRequireDefault(require("./FpgaImageAttributeName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeFpgaImageAttributeRequest model module.
 * @module model/DescribeFpgaImageAttributeRequest
 * @version 1.0.0
 */
var DescribeFpgaImageAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFpgaImageAttributeRequest</code>.
   * @alias module:model/DescribeFpgaImageAttributeRequest
   * @param attribute {module:model/FpgaImageAttributeName} 
   * @param fpgaImageId {String} 
   */
  function DescribeFpgaImageAttributeRequest(attribute, fpgaImageId) {
    _classCallCheck(this, DescribeFpgaImageAttributeRequest);

    DescribeFpgaImageAttributeRequest.initialize(this, attribute, fpgaImageId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFpgaImageAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, attribute, fpgaImageId) {
      obj['Attribute'] = attribute;
      obj['FpgaImageId'] = fpgaImageId;
    }
    /**
     * Constructs a <code>DescribeFpgaImageAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFpgaImageAttributeRequest} obj Optional instance to populate.
     * @return {module:model/DescribeFpgaImageAttributeRequest} The populated <code>DescribeFpgaImageAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFpgaImageAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _FpgaImageAttributeName["default"].constructFromObject(data['Attribute']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('FpgaImageId')) {
          obj['FpgaImageId'] = _ApiClient["default"].convertToType(data['FpgaImageId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeFpgaImageAttributeRequest;
}();
/**
 * @member {module:model/FpgaImageAttributeName} Attribute
 */


DescribeFpgaImageAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeFpgaImageAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} FpgaImageId
 */

DescribeFpgaImageAttributeRequest.prototype['FpgaImageId'] = undefined;
var _default = DescribeFpgaImageAttributeRequest;
exports["default"] = _default;