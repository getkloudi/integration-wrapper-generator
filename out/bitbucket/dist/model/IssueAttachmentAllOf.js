"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueAttachmentAllOf model module.
 * @module model/IssueAttachmentAllOf
 * @version 1.2.0
 */
var IssueAttachmentAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueAttachmentAllOf</code>.
   * An issue file attachment&#39;s meta data. Note this does not contain the file&#39;s actual contents.
   * @alias module:model/IssueAttachmentAllOf
   */
  function IssueAttachmentAllOf() {
    _classCallCheck(this, IssueAttachmentAllOf);

    IssueAttachmentAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueAttachmentAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueAttachmentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueAttachmentAllOf} obj Optional instance to populate.
     * @return {module:model/IssueAttachmentAllOf} The populated <code>IssueAttachmentAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueAttachmentAllOf();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchingModelSettingsAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueAttachmentAllOf;
}();
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */


IssueAttachmentAllOf.prototype['links'] = undefined;
/**
 * @member {String} name
 */

IssueAttachmentAllOf.prototype['name'] = undefined;
var _default = IssueAttachmentAllOf;
exports["default"] = _default;