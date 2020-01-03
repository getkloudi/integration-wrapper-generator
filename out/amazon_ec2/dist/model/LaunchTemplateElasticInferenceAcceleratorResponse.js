"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateElasticInferenceAcceleratorResponse model module.
 * @module model/LaunchTemplateElasticInferenceAcceleratorResponse
 * @version 1.0.0
 */
var LaunchTemplateElasticInferenceAcceleratorResponse =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateElasticInferenceAcceleratorResponse</code>.
   *  Describes an elastic inference accelerator. 
   * @alias module:model/LaunchTemplateElasticInferenceAcceleratorResponse
   */
  function LaunchTemplateElasticInferenceAcceleratorResponse() {
    _classCallCheck(this, LaunchTemplateElasticInferenceAcceleratorResponse);

    LaunchTemplateElasticInferenceAcceleratorResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateElasticInferenceAcceleratorResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateElasticInferenceAcceleratorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateElasticInferenceAcceleratorResponse} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateElasticInferenceAcceleratorResponse} The populated <code>LaunchTemplateElasticInferenceAcceleratorResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateElasticInferenceAcceleratorResponse();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateElasticInferenceAcceleratorResponse;
}();
/**
 * @member {Number} Count
 */


LaunchTemplateElasticInferenceAcceleratorResponse.prototype['Count'] = undefined;
/**
 * @member {String} Type
 */

LaunchTemplateElasticInferenceAcceleratorResponse.prototype['Type'] = undefined;
var _default = LaunchTemplateElasticInferenceAcceleratorResponse;
exports["default"] = _default;