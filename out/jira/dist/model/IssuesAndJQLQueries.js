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
 * The IssuesAndJQLQueries model module.
 * @module model/IssuesAndJQLQueries
 * @version 1.4.0
 */
var IssuesAndJQLQueries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssuesAndJQLQueries</code>.
   * List of issues and JQL queries.
   * @alias module:model/IssuesAndJQLQueries
   * @param issueIds {Array.<Number>} A list of issue IDs.
   * @param jqls {Array.<String>} A list of JQL queries.
   */
  function IssuesAndJQLQueries(issueIds, jqls) {
    _classCallCheck(this, IssuesAndJQLQueries);

    IssuesAndJQLQueries.initialize(this, issueIds, jqls);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssuesAndJQLQueries, null, [{
    key: "initialize",
    value: function initialize(obj, issueIds, jqls) {
      obj['issueIds'] = issueIds;
      obj['jqls'] = jqls;
    }
    /**
     * Constructs a <code>IssuesAndJQLQueries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssuesAndJQLQueries} obj Optional instance to populate.
     * @return {module:model/IssuesAndJQLQueries} The populated <code>IssuesAndJQLQueries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssuesAndJQLQueries();

        if (data.hasOwnProperty('issueIds')) {
          obj['issueIds'] = _ApiClient["default"].convertToType(data['issueIds'], ['Number']);
        }

        if (data.hasOwnProperty('jqls')) {
          obj['jqls'] = _ApiClient["default"].convertToType(data['jqls'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return IssuesAndJQLQueries;
}();
/**
 * A list of issue IDs.
 * @member {Array.<Number>} issueIds
 */


IssuesAndJQLQueries.prototype['issueIds'] = undefined;
/**
 * A list of JQL queries.
 * @member {Array.<String>} jqls
 */

IssuesAndJQLQueries.prototype['jqls'] = undefined;
var _default = IssuesAndJQLQueries;
exports["default"] = _default;