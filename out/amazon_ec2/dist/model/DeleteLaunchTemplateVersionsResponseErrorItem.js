"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResponseError = _interopRequireDefault(require("./ResponseError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteLaunchTemplateVersionsResponseErrorItem model module.
 * @module model/DeleteLaunchTemplateVersionsResponseErrorItem
 * @version 1.0.0
 */
var DeleteLaunchTemplateVersionsResponseErrorItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteLaunchTemplateVersionsResponseErrorItem</code>.
   * Describes a launch template version that could not be deleted.
   * @alias module:model/DeleteLaunchTemplateVersionsResponseErrorItem
   */
  function DeleteLaunchTemplateVersionsResponseErrorItem() {
    _classCallCheck(this, DeleteLaunchTemplateVersionsResponseErrorItem);

    DeleteLaunchTemplateVersionsResponseErrorItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteLaunchTemplateVersionsResponseErrorItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteLaunchTemplateVersionsResponseErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteLaunchTemplateVersionsResponseErrorItem} obj Optional instance to populate.
     * @return {module:model/DeleteLaunchTemplateVersionsResponseErrorItem} The populated <code>DeleteLaunchTemplateVersionsResponseErrorItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteLaunchTemplateVersionsResponseErrorItem();

        if (data.hasOwnProperty('LaunchTemplateId')) {
          obj['LaunchTemplateId'] = _ApiClient["default"].convertToType(data['LaunchTemplateId'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplateName')) {
          obj['LaunchTemplateName'] = _ApiClient["default"].convertToType(data['LaunchTemplateName'], 'String');
        }

        if (data.hasOwnProperty('ResponseError')) {
          obj['ResponseError'] = _ResponseError["default"].constructFromObject(data['ResponseError']);
        }

        if (data.hasOwnProperty('VersionNumber')) {
          obj['VersionNumber'] = _ApiClient["default"].convertToType(data['VersionNumber'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DeleteLaunchTemplateVersionsResponseErrorItem;
}();
/**
 * @member {String} LaunchTemplateId
 */


DeleteLaunchTemplateVersionsResponseErrorItem.prototype['LaunchTemplateId'] = undefined;
/**
 * @member {String} LaunchTemplateName
 */

DeleteLaunchTemplateVersionsResponseErrorItem.prototype['LaunchTemplateName'] = undefined;
/**
 * @member {module:model/ResponseError} ResponseError
 */

DeleteLaunchTemplateVersionsResponseErrorItem.prototype['ResponseError'] = undefined;
/**
 * @member {Number} VersionNumber
 */

DeleteLaunchTemplateVersionsResponseErrorItem.prototype['VersionNumber'] = undefined;
var _default = DeleteLaunchTemplateVersionsResponseErrorItem;
exports["default"] = _default;