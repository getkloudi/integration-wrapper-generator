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
 * The FleetLaunchTemplateSpecificationRequest model module.
 * @module model/FleetLaunchTemplateSpecificationRequest
 * @version 1.1.0
 */
var FleetLaunchTemplateSpecificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FleetLaunchTemplateSpecificationRequest</code>.
   * The launch template to use. You must specify either the launch template ID or launch template name in the request. 
   * @alias module:model/FleetLaunchTemplateSpecificationRequest
   */
  function FleetLaunchTemplateSpecificationRequest() {
    _classCallCheck(this, FleetLaunchTemplateSpecificationRequest);

    FleetLaunchTemplateSpecificationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FleetLaunchTemplateSpecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FleetLaunchTemplateSpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FleetLaunchTemplateSpecificationRequest} obj Optional instance to populate.
     * @return {module:model/FleetLaunchTemplateSpecificationRequest} The populated <code>FleetLaunchTemplateSpecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FleetLaunchTemplateSpecificationRequest();

        if (data.hasOwnProperty('LaunchTemplateId')) {
          obj['LaunchTemplateId'] = _ApiClient["default"].convertToType(data['LaunchTemplateId'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FleetLaunchTemplateSpecificationRequest;
}();
/**
 * @member {String} LaunchTemplateId
 */


FleetLaunchTemplateSpecificationRequest.prototype['LaunchTemplateId'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

FleetLaunchTemplateSpecificationRequest.prototype['LaunchTemplateName'] = undefined;
/**
 * @member {String} Version
 */

FleetLaunchTemplateSpecificationRequest.prototype['Version'] = undefined;
var _default = FleetLaunchTemplateSpecificationRequest;
exports["default"] = _default;