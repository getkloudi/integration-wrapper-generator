"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomFieldReplacement = _interopRequireDefault(require("./CustomFieldReplacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteAndReplaceVersionBean model module.
 * @module model/DeleteAndReplaceVersionBean
 * @version 1.4.0
 */
var DeleteAndReplaceVersionBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteAndReplaceVersionBean</code>.
   * @alias module:model/DeleteAndReplaceVersionBean
   */
  function DeleteAndReplaceVersionBean() {
    _classCallCheck(this, DeleteAndReplaceVersionBean);

    DeleteAndReplaceVersionBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteAndReplaceVersionBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteAndReplaceVersionBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAndReplaceVersionBean} obj Optional instance to populate.
     * @return {module:model/DeleteAndReplaceVersionBean} The populated <code>DeleteAndReplaceVersionBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteAndReplaceVersionBean();

        if (data.hasOwnProperty('customFieldReplacementList')) {
          obj['customFieldReplacementList'] = _ApiClient["default"].convertToType(data['customFieldReplacementList'], [_CustomFieldReplacement["default"]]);
        }

        if (data.hasOwnProperty('moveAffectedIssuesTo')) {
          obj['moveAffectedIssuesTo'] = _ApiClient["default"].convertToType(data['moveAffectedIssuesTo'], 'Number');
        }

        if (data.hasOwnProperty('moveFixIssuesTo')) {
          obj['moveFixIssuesTo'] = _ApiClient["default"].convertToType(data['moveFixIssuesTo'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DeleteAndReplaceVersionBean;
}();
/**
 * An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version.
 * @member {Array.<module:model/CustomFieldReplacement>} customFieldReplacementList
 */


DeleteAndReplaceVersionBean.prototype['customFieldReplacementList'] = undefined;
/**
 * The ID of the version to update `affectedVersion` to when the field contains the deleted version.
 * @member {Number} moveAffectedIssuesTo
 */

DeleteAndReplaceVersionBean.prototype['moveAffectedIssuesTo'] = undefined;
/**
 * The ID of the version to update `fixVersion` to when the field contains the deleted version.
 * @member {Number} moveFixIssuesTo
 */

DeleteAndReplaceVersionBean.prototype['moveFixIssuesTo'] = undefined;
var _default = DeleteAndReplaceVersionBean;
exports["default"] = _default;