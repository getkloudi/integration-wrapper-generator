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
 * The DeleteLaunchTemplateVersionsRequest model module.
 * @module model/DeleteLaunchTemplateVersionsRequest
 * @version 1.1.0
 */
var DeleteLaunchTemplateVersionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteLaunchTemplateVersionsRequest</code>.
   * @alias module:model/DeleteLaunchTemplateVersionsRequest
   * @param versions {Array.<String>} 
   */
  function DeleteLaunchTemplateVersionsRequest(versions) {
    _classCallCheck(this, DeleteLaunchTemplateVersionsRequest);

    DeleteLaunchTemplateVersionsRequest.initialize(this, versions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteLaunchTemplateVersionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, versions) {
      obj['Versions'] = versions;
    }
    /**
     * Constructs a <code>DeleteLaunchTemplateVersionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteLaunchTemplateVersionsRequest} obj Optional instance to populate.
     * @return {module:model/DeleteLaunchTemplateVersionsRequest} The populated <code>DeleteLaunchTemplateVersionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteLaunchTemplateVersionsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('LaunchTemplateId')) {
          obj['LaunchTemplateId'] = _ApiClient["default"].convertToType(data['LaunchTemplateId'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }

        if (data.hasOwnProperty('Versions')) {
          obj['Versions'] = _ApiClient["default"].convertToType(data['Versions'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DeleteLaunchTemplateVersionsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteLaunchTemplateVersionsRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} LaunchTemplateId
 */

DeleteLaunchTemplateVersionsRequest.prototype['LaunchTemplateId'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

DeleteLaunchTemplateVersionsRequest.prototype['LaunchTemplateName'] = undefined;
/**
 * @member {Array.<String>} Versions
 */

DeleteLaunchTemplateVersionsRequest.prototype['Versions'] = undefined;
var _default = DeleteLaunchTemplateVersionsRequest;
exports["default"] = _default;