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
 * The IssueChangeChangesAssignee model module.
 * @module model/IssueChangeChangesAssignee
 * @version 1.1.0
 */
var IssueChangeChangesAssignee =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssueChangeChangesAssignee</code>.
   * @alias module:model/IssueChangeChangesAssignee
   */
  function IssueChangeChangesAssignee() {
    _classCallCheck(this, IssueChangeChangesAssignee);

    IssueChangeChangesAssignee.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueChangeChangesAssignee, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueChangeChangesAssignee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueChangeChangesAssignee} obj Optional instance to populate.
     * @return {module:model/IssueChangeChangesAssignee} The populated <code>IssueChangeChangesAssignee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueChangeChangesAssignee();

        if (data.hasOwnProperty('old')) {
          obj['old'] = _ApiClient["default"].convertToType(data['old'], 'String');
        }

        if (data.hasOwnProperty('new')) {
          obj['new'] = _ApiClient["default"].convertToType(data['new'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueChangeChangesAssignee;
}();
/**
 * @member {String} old
 */


IssueChangeChangesAssignee.prototype['old'] = undefined;
/**
 * @member {String} new
 */

IssueChangeChangesAssignee.prototype['new'] = undefined;
var _default = IssueChangeChangesAssignee;
exports["default"] = _default;