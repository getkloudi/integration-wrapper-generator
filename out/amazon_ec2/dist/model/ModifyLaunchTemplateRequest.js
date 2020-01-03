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
 * The ModifyLaunchTemplateRequest model module.
 * @module model/ModifyLaunchTemplateRequest
 * @version 1.0.0
 */
var ModifyLaunchTemplateRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyLaunchTemplateRequest</code>.
   * @alias module:model/ModifyLaunchTemplateRequest
   */
  function ModifyLaunchTemplateRequest() {
    _classCallCheck(this, ModifyLaunchTemplateRequest);

    ModifyLaunchTemplateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyLaunchTemplateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyLaunchTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyLaunchTemplateRequest} obj Optional instance to populate.
     * @return {module:model/ModifyLaunchTemplateRequest} The populated <code>ModifyLaunchTemplateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyLaunchTemplateRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DefaultVersion')) {
          obj['DefaultVersion'] = _ApiClient["default"].convertToType(data['DefaultVersion'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('LaunchTemplateId')) {
          obj['LaunchTemplateId'] = _ApiClient["default"].convertToType(data['LaunchTemplateId'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyLaunchTemplateRequest;
}();
/**
 * @member {String} ClientToken
 */


ModifyLaunchTemplateRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} DefaultVersion
 */

ModifyLaunchTemplateRequest.prototype['DefaultVersion'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyLaunchTemplateRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} LaunchTemplateId
 */

ModifyLaunchTemplateRequest.prototype['LaunchTemplateId'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

ModifyLaunchTemplateRequest.prototype['LaunchTemplateName'] = undefined;
var _default = ModifyLaunchTemplateRequest;
exports["default"] = _default;