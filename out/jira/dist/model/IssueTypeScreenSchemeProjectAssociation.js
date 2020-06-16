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
 * The IssueTypeScreenSchemeProjectAssociation model module.
 * @module model/IssueTypeScreenSchemeProjectAssociation
 * @version 1.4.0
 */
var IssueTypeScreenSchemeProjectAssociation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeScreenSchemeProjectAssociation</code>.
   * Associated issue type screen scheme and project.
   * @alias module:model/IssueTypeScreenSchemeProjectAssociation
   */
  function IssueTypeScreenSchemeProjectAssociation() {
    _classCallCheck(this, IssueTypeScreenSchemeProjectAssociation);

    IssueTypeScreenSchemeProjectAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeScreenSchemeProjectAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueTypeScreenSchemeProjectAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeScreenSchemeProjectAssociation} obj Optional instance to populate.
     * @return {module:model/IssueTypeScreenSchemeProjectAssociation} The populated <code>IssueTypeScreenSchemeProjectAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeScreenSchemeProjectAssociation();

        if (data.hasOwnProperty('issueTypeScreenSchemeId')) {
          obj['issueTypeScreenSchemeId'] = _ApiClient["default"].convertToType(data['issueTypeScreenSchemeId'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueTypeScreenSchemeProjectAssociation;
}();
/**
 * The ID of the issue type screen scheme.
 * @member {String} issueTypeScreenSchemeId
 */


IssueTypeScreenSchemeProjectAssociation.prototype['issueTypeScreenSchemeId'] = undefined;
/**
 * The ID of the project.
 * @member {String} projectId
 */

IssueTypeScreenSchemeProjectAssociation.prototype['projectId'] = undefined;
var _default = IssueTypeScreenSchemeProjectAssociation;
exports["default"] = _default;