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
 * The IssueTypeSchemeMapping model module.
 * @module model/IssueTypeSchemeMapping
 * @version 1.4.0
 */
var IssueTypeSchemeMapping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeSchemeMapping</code>.
   * Issue type scheme item.
   * @alias module:model/IssueTypeSchemeMapping
   * @param issueTypeId {String} The ID of the issue type.
   * @param issueTypeSchemeId {String} The ID of the issue type scheme.
   */
  function IssueTypeSchemeMapping(issueTypeId, issueTypeSchemeId) {
    _classCallCheck(this, IssueTypeSchemeMapping);

    IssueTypeSchemeMapping.initialize(this, issueTypeId, issueTypeSchemeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeSchemeMapping, null, [{
    key: "initialize",
    value: function initialize(obj, issueTypeId, issueTypeSchemeId) {
      obj['issueTypeId'] = issueTypeId;
      obj['issueTypeSchemeId'] = issueTypeSchemeId;
    }
    /**
     * Constructs a <code>IssueTypeSchemeMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeSchemeMapping} obj Optional instance to populate.
     * @return {module:model/IssueTypeSchemeMapping} The populated <code>IssueTypeSchemeMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeSchemeMapping();

        if (data.hasOwnProperty('issueTypeId')) {
          obj['issueTypeId'] = _ApiClient["default"].convertToType(data['issueTypeId'], 'String');
        }

        if (data.hasOwnProperty('issueTypeSchemeId')) {
          obj['issueTypeSchemeId'] = _ApiClient["default"].convertToType(data['issueTypeSchemeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueTypeSchemeMapping;
}();
/**
 * The ID of the issue type.
 * @member {String} issueTypeId
 */


IssueTypeSchemeMapping.prototype['issueTypeId'] = undefined;
/**
 * The ID of the issue type scheme.
 * @member {String} issueTypeSchemeId
 */

IssueTypeSchemeMapping.prototype['issueTypeSchemeId'] = undefined;
var _default = IssueTypeSchemeMapping;
exports["default"] = _default;