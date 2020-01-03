"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestLaunchTemplateData = _interopRequireDefault(require("./RequestLaunchTemplateData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateLaunchTemplateVersionRequest model module.
 * @module model/CreateLaunchTemplateVersionRequest
 * @version 1.0.0
 */
var CreateLaunchTemplateVersionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateLaunchTemplateVersionRequest</code>.
   * @alias module:model/CreateLaunchTemplateVersionRequest
   * @param launchTemplateData {module:model/RequestLaunchTemplateData} 
   */
  function CreateLaunchTemplateVersionRequest(launchTemplateData) {
    _classCallCheck(this, CreateLaunchTemplateVersionRequest);

    CreateLaunchTemplateVersionRequest.initialize(this, launchTemplateData);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateLaunchTemplateVersionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, launchTemplateData) {
      obj['LaunchTemplateData'] = launchTemplateData;
    }
    /**
     * Constructs a <code>CreateLaunchTemplateVersionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLaunchTemplateVersionRequest} obj Optional instance to populate.
     * @return {module:model/CreateLaunchTemplateVersionRequest} The populated <code>CreateLaunchTemplateVersionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateLaunchTemplateVersionRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('LaunchTemplateData')) {
          obj['LaunchTemplateData'] = _RequestLaunchTemplateData["default"].constructFromObject(data['LaunchTemplateData']);
        }

        if (data.hasOwnProperty('LaunchTemplateId')) {
          obj['LaunchTemplateId'] = _ApiClient["default"].convertToType(data['LaunchTemplateId'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }

        if (data.hasOwnProperty('SourceVersion')) {
          obj['SourceVersion'] = _ApiClient["default"].convertToType(data['SourceVersion'], 'String');
        }

        if (data.hasOwnProperty('VersionDescription')) {
          obj['VersionDescription'] = _ApiClient["default"].convertToType(data['VersionDescription'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateLaunchTemplateVersionRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateLaunchTemplateVersionRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateLaunchTemplateVersionRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/RequestLaunchTemplateData} LaunchTemplateData
 */

CreateLaunchTemplateVersionRequest.prototype['LaunchTemplateData'] = undefined;
/**
 * @member {String} LaunchTemplateId
 */

CreateLaunchTemplateVersionRequest.prototype['LaunchTemplateId'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

CreateLaunchTemplateVersionRequest.prototype['LaunchTemplateName'] = undefined;
/**
 * @member {String} SourceVersion
 */

CreateLaunchTemplateVersionRequest.prototype['SourceVersion'] = undefined;
/**
 * @member {String} VersionDescription
 */

CreateLaunchTemplateVersionRequest.prototype['VersionDescription'] = undefined;
var _default = CreateLaunchTemplateVersionRequest;
exports["default"] = _default;