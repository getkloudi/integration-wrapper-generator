"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PermissionHolder = _interopRequireDefault(require("./PermissionHolder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueSecurityLevelMember model module.
 * @module model/IssueSecurityLevelMember
 * @version 1.4.0
 */
var IssueSecurityLevelMember = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueSecurityLevelMember</code>.
   * Issue security level member.
   * @alias module:model/IssueSecurityLevelMember
   * @param id {Number} The ID of the issue security level member.
   * @param issueSecurityLevelId {Number} The ID of the issue security level.
   */
  function IssueSecurityLevelMember(id, issueSecurityLevelId) {
    _classCallCheck(this, IssueSecurityLevelMember);

    IssueSecurityLevelMember.initialize(this, id, issueSecurityLevelId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueSecurityLevelMember, null, [{
    key: "initialize",
    value: function initialize(obj, id, issueSecurityLevelId) {
      obj['id'] = id;
      obj['issueSecurityLevelId'] = issueSecurityLevelId;
    }
    /**
     * Constructs a <code>IssueSecurityLevelMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueSecurityLevelMember} obj Optional instance to populate.
     * @return {module:model/IssueSecurityLevelMember} The populated <code>IssueSecurityLevelMember</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueSecurityLevelMember();

        if (data.hasOwnProperty('holder')) {
          obj['holder'] = _ApiClient["default"].convertToType(data['holder'], _PermissionHolder["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('issueSecurityLevelId')) {
          obj['issueSecurityLevelId'] = _ApiClient["default"].convertToType(data['issueSecurityLevelId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return IssueSecurityLevelMember;
}();
/**
 * The user or group being granted the permission. It consists of a `type` and a type-dependent `parameter`. See [Holder object](#holder-object) in *Get all permission schemes* for more information.
 * @member {module:model/PermissionHolder} holder
 */


IssueSecurityLevelMember.prototype['holder'] = undefined;
/**
 * The ID of the issue security level member.
 * @member {Number} id
 */

IssueSecurityLevelMember.prototype['id'] = undefined;
/**
 * The ID of the issue security level.
 * @member {Number} issueSecurityLevelId
 */

IssueSecurityLevelMember.prototype['issueSecurityLevelId'] = undefined;
var _default = IssueSecurityLevelMember;
exports["default"] = _default;