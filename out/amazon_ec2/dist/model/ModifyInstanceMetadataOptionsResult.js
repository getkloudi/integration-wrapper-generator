"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceMetadataOptionsResponse = _interopRequireDefault(require("./InstanceMetadataOptionsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyInstanceMetadataOptionsResult model module.
 * @module model/ModifyInstanceMetadataOptionsResult
 * @version 1.1.0
 */
var ModifyInstanceMetadataOptionsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyInstanceMetadataOptionsResult</code>.
   * @alias module:model/ModifyInstanceMetadataOptionsResult
   */
  function ModifyInstanceMetadataOptionsResult() {
    _classCallCheck(this, ModifyInstanceMetadataOptionsResult);

    ModifyInstanceMetadataOptionsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyInstanceMetadataOptionsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyInstanceMetadataOptionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyInstanceMetadataOptionsResult} obj Optional instance to populate.
     * @return {module:model/ModifyInstanceMetadataOptionsResult} The populated <code>ModifyInstanceMetadataOptionsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyInstanceMetadataOptionsResult();

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('InstanceMetadataOptions')) {
          obj['InstanceMetadataOptions'] = _InstanceMetadataOptionsResponse["default"].constructFromObject(data['InstanceMetadataOptions']);
        }
      }

      return obj;
    }
  }]);

  return ModifyInstanceMetadataOptionsResult;
}();
/**
 * @member {String} InstanceId
 */


ModifyInstanceMetadataOptionsResult.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/InstanceMetadataOptionsResponse} InstanceMetadataOptions
 */

ModifyInstanceMetadataOptionsResult.prototype['InstanceMetadataOptions'] = undefined;
var _default = ModifyInstanceMetadataOptionsResult;
exports["default"] = _default;