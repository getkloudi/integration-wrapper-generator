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
 * The LaunchTemplateElasticInferenceAccelerator model module.
 * @module model/LaunchTemplateElasticInferenceAccelerator
 * @version 1.1.0
 */
var LaunchTemplateElasticInferenceAccelerator =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateElasticInferenceAccelerator</code>.
   *  Describes an elastic inference accelerator. 
   * @alias module:model/LaunchTemplateElasticInferenceAccelerator
   * @param type {String} 
   */
  function LaunchTemplateElasticInferenceAccelerator(type) {
    _classCallCheck(this, LaunchTemplateElasticInferenceAccelerator);

    LaunchTemplateElasticInferenceAccelerator.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateElasticInferenceAccelerator, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['Type'] = type;
    }
    /**
     * Constructs a <code>LaunchTemplateElasticInferenceAccelerator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateElasticInferenceAccelerator} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateElasticInferenceAccelerator} The populated <code>LaunchTemplateElasticInferenceAccelerator</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateElasticInferenceAccelerator();

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

  return LaunchTemplateElasticInferenceAccelerator;
}();
/**
 * @member {Number} Count
 */


LaunchTemplateElasticInferenceAccelerator.prototype['Count'] = undefined;
/**
 * @member {String} Type
 */

LaunchTemplateElasticInferenceAccelerator.prototype['Type'] = undefined;
var _default = LaunchTemplateElasticInferenceAccelerator;
exports["default"] = _default;