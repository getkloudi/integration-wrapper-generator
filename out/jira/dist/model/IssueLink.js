"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueLinkType = _interopRequireDefault(require("./IssueLinkType"));

var _LinkedIssue = _interopRequireDefault(require("./LinkedIssue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueLink model module.
 * @module model/IssueLink
 * @version 1.4.0
 */
var IssueLink = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueLink</code>.
   * Details of a link between issues.
   * @alias module:model/IssueLink
   */
  function IssueLink() {
    _classCallCheck(this, IssueLink);

    IssueLink.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueLink, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueLink} obj Optional instance to populate.
     * @return {module:model/IssueLink} The populated <code>IssueLink</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueLink();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('inwardIssue')) {
          obj['inwardIssue'] = _ApiClient["default"].convertToType(data['inwardIssue'], _LinkedIssue["default"]);
        }

        if (data.hasOwnProperty('outwardIssue')) {
          obj['outwardIssue'] = _ApiClient["default"].convertToType(data['outwardIssue'], _LinkedIssue["default"]);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], _IssueLinkType["default"]);
        }
      }

      return obj;
    }
  }]);

  return IssueLink;
}();
/**
 * The ID of the issue link.
 * @member {String} id
 */


IssueLink.prototype['id'] = undefined;
/**
 * The issue the link joins to.
 * @member {module:model/LinkedIssue} inwardIssue
 */

IssueLink.prototype['inwardIssue'] = undefined;
/**
 * The issue the link originates from.
 * @member {module:model/LinkedIssue} outwardIssue
 */

IssueLink.prototype['outwardIssue'] = undefined;
/**
 * The URL of the issue link.
 * @member {String} self
 */

IssueLink.prototype['self'] = undefined;
/**
 * The type of link between the issues.
 * @member {module:model/IssueLinkType} type
 */

IssueLink.prototype['type'] = undefined;
var _default = IssueLink;
exports["default"] = _default;