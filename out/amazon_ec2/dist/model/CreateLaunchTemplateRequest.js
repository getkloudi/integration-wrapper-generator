"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestLaunchTemplateData = _interopRequireDefault(require("./RequestLaunchTemplateData"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateLaunchTemplateRequest model module.
 * @module model/CreateLaunchTemplateRequest
 * @version 1.0.0
 */
var CreateLaunchTemplateRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateLaunchTemplateRequest</code>.
   * @alias module:model/CreateLaunchTemplateRequest
   * @param launchTemplateData {module:model/RequestLaunchTemplateData} 
   * @param launchTemplateName {String} 
   */
  function CreateLaunchTemplateRequest(launchTemplateData, launchTemplateName) {
    _classCallCheck(this, CreateLaunchTemplateRequest);

    CreateLaunchTemplateRequest.initialize(this, launchTemplateData, launchTemplateName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateLaunchTemplateRequest, null, [{
    key: "initialize",
    value: function initialize(obj, launchTemplateData, launchTemplateName) {
      obj['LaunchTemplateData'] = launchTemplateData;
      obj['LaunchTemplateName'] = launchTemplateName;
    }
    /**
     * Constructs a <code>CreateLaunchTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLaunchTemplateRequest} obj Optional instance to populate.
     * @return {module:model/CreateLaunchTemplateRequest} The populated <code>CreateLaunchTemplateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateLaunchTemplateRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('LaunchTemplateData')) {
          obj['LaunchTemplateData'] = _RequestLaunchTemplateData["default"].constructFromObject(data['LaunchTemplateData']);
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('VersionDescription')) {
          obj['VersionDescription'] = _ApiClient["default"].convertToType(data['VersionDescription'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateLaunchTemplateRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateLaunchTemplateRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateLaunchTemplateRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/RequestLaunchTemplateData} LaunchTemplateData
 */

CreateLaunchTemplateRequest.prototype['LaunchTemplateData'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

CreateLaunchTemplateRequest.prototype['LaunchTemplateName'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateLaunchTemplateRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} VersionDescription
 */

CreateLaunchTemplateRequest.prototype['VersionDescription'] = undefined;
var _default = CreateLaunchTemplateRequest;
exports["default"] = _default;