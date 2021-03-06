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
 * The IssueCommentListRequestBean model module.
 * @module model/IssueCommentListRequestBean
 * @version 1.4.0
 */
var IssueCommentListRequestBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueCommentListRequestBean</code>.
   * @alias module:model/IssueCommentListRequestBean
   * @param ids {Array.<Number>} The list of comment IDs. A maximum of 1000 IDs can be specified.
   */
  function IssueCommentListRequestBean(ids) {
    _classCallCheck(this, IssueCommentListRequestBean);

    IssueCommentListRequestBean.initialize(this, ids);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueCommentListRequestBean, null, [{
    key: "initialize",
    value: function initialize(obj, ids) {
      obj['ids'] = ids;
    }
    /**
     * Constructs a <code>IssueCommentListRequestBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueCommentListRequestBean} obj Optional instance to populate.
     * @return {module:model/IssueCommentListRequestBean} The populated <code>IssueCommentListRequestBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueCommentListRequestBean();

        if (data.hasOwnProperty('ids')) {
          obj['ids'] = _ApiClient["default"].convertToType(data['ids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return IssueCommentListRequestBean;
}();
/**
 * The list of comment IDs. A maximum of 1000 IDs can be specified.
 * @member {Array.<Number>} ids
 */


IssueCommentListRequestBean.prototype['ids'] = undefined;
var _default = IssueCommentListRequestBean;
exports["default"] = _default;