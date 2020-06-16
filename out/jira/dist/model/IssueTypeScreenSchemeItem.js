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
 * The IssueTypeScreenSchemeItem model module.
 * @module model/IssueTypeScreenSchemeItem
 * @version 1.4.0
 */
var IssueTypeScreenSchemeItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeScreenSchemeItem</code>.
   * The screen scheme for an issue type.
   * @alias module:model/IssueTypeScreenSchemeItem
   * @param issueTypeId {String} The ID of the issue type or *default*. When set to *default* this issue type screen scheme item applies to all issue types without a screen scheme.
   * @param issueTypeScreenSchemeId {String} The ID of the issue type screen scheme.
   * @param screenSchemeId {String} The ID of the screen scheme.
   */
  function IssueTypeScreenSchemeItem(issueTypeId, issueTypeScreenSchemeId, screenSchemeId) {
    _classCallCheck(this, IssueTypeScreenSchemeItem);

    IssueTypeScreenSchemeItem.initialize(this, issueTypeId, issueTypeScreenSchemeId, screenSchemeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeScreenSchemeItem, null, [{
    key: "initialize",
    value: function initialize(obj, issueTypeId, issueTypeScreenSchemeId, screenSchemeId) {
      obj['issueTypeId'] = issueTypeId;
      obj['issueTypeScreenSchemeId'] = issueTypeScreenSchemeId;
      obj['screenSchemeId'] = screenSchemeId;
    }
    /**
     * Constructs a <code>IssueTypeScreenSchemeItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeScreenSchemeItem} obj Optional instance to populate.
     * @return {module:model/IssueTypeScreenSchemeItem} The populated <code>IssueTypeScreenSchemeItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeScreenSchemeItem();

        if (data.hasOwnProperty('issueTypeId')) {
          obj['issueTypeId'] = _ApiClient["default"].convertToType(data['issueTypeId'], 'String');
        }

        if (data.hasOwnProperty('issueTypeScreenSchemeId')) {
          obj['issueTypeScreenSchemeId'] = _ApiClient["default"].convertToType(data['issueTypeScreenSchemeId'], 'String');
        }

        if (data.hasOwnProperty('screenSchemeId')) {
          obj['screenSchemeId'] = _ApiClient["default"].convertToType(data['screenSchemeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueTypeScreenSchemeItem;
}();
/**
 * The ID of the issue type or *default*. When set to *default* this issue type screen scheme item applies to all issue types without a screen scheme.
 * @member {String} issueTypeId
 */


IssueTypeScreenSchemeItem.prototype['issueTypeId'] = undefined;
/**
 * The ID of the issue type screen scheme.
 * @member {String} issueTypeScreenSchemeId
 */

IssueTypeScreenSchemeItem.prototype['issueTypeScreenSchemeId'] = undefined;
/**
 * The ID of the screen scheme.
 * @member {String} screenSchemeId
 */

IssueTypeScreenSchemeItem.prototype['screenSchemeId'] = undefined;
var _default = IssueTypeScreenSchemeItem;
exports["default"] = _default;