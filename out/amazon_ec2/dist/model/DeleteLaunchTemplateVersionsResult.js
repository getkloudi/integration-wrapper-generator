"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeleteLaunchTemplateVersionsResponseErrorItem = _interopRequireDefault(require("./DeleteLaunchTemplateVersionsResponseErrorItem"));

var _DeleteLaunchTemplateVersionsResponseSuccessItem = _interopRequireDefault(require("./DeleteLaunchTemplateVersionsResponseSuccessItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteLaunchTemplateVersionsResult model module.
 * @module model/DeleteLaunchTemplateVersionsResult
 * @version 1.0.0
 */
var DeleteLaunchTemplateVersionsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteLaunchTemplateVersionsResult</code>.
   * @alias module:model/DeleteLaunchTemplateVersionsResult
   */
  function DeleteLaunchTemplateVersionsResult() {
    _classCallCheck(this, DeleteLaunchTemplateVersionsResult);

    DeleteLaunchTemplateVersionsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteLaunchTemplateVersionsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteLaunchTemplateVersionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteLaunchTemplateVersionsResult} obj Optional instance to populate.
     * @return {module:model/DeleteLaunchTemplateVersionsResult} The populated <code>DeleteLaunchTemplateVersionsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteLaunchTemplateVersionsResult();

        if (data.hasOwnProperty('SuccessfullyDeletedLaunchTemplateVersions')) {
          obj['SuccessfullyDeletedLaunchTemplateVersions'] = _ApiClient["default"].convertToType(data['SuccessfullyDeletedLaunchTemplateVersions'], [_DeleteLaunchTemplateVersionsResponseSuccessItem["default"]]);
        }

        if (data.hasOwnProperty('UnsuccessfullyDeletedLaunchTemplateVersions')) {
          obj['UnsuccessfullyDeletedLaunchTemplateVersions'] = _ApiClient["default"].convertToType(data['UnsuccessfullyDeletedLaunchTemplateVersions'], [_DeleteLaunchTemplateVersionsResponseErrorItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DeleteLaunchTemplateVersionsResult;
}();
/**
 * @member {Array.<module:model/DeleteLaunchTemplateVersionsResponseSuccessItem>} SuccessfullyDeletedLaunchTemplateVersions
 */


DeleteLaunchTemplateVersionsResult.prototype['SuccessfullyDeletedLaunchTemplateVersions'] = undefined;
/**
 * @member {Array.<module:model/DeleteLaunchTemplateVersionsResponseErrorItem>} UnsuccessfullyDeletedLaunchTemplateVersions
 */

DeleteLaunchTemplateVersionsResult.prototype['UnsuccessfullyDeletedLaunchTemplateVersions'] = undefined;
var _default = DeleteLaunchTemplateVersionsResult;
exports["default"] = _default;