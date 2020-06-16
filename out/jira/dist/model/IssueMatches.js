"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueMatchesForJQL = _interopRequireDefault(require("./IssueMatchesForJQL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueMatches model module.
 * @module model/IssueMatches
 * @version 1.4.0
 */
var IssueMatches = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueMatches</code>.
   * A list of matched issues or errors for each JQL query, in the order the JQL queries were passed.
   * @alias module:model/IssueMatches
   * @param matches {Array.<module:model/IssueMatchesForJQL>} 
   */
  function IssueMatches(matches) {
    _classCallCheck(this, IssueMatches);

    IssueMatches.initialize(this, matches);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueMatches, null, [{
    key: "initialize",
    value: function initialize(obj, matches) {
      obj['matches'] = matches;
    }
    /**
     * Constructs a <code>IssueMatches</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueMatches} obj Optional instance to populate.
     * @return {module:model/IssueMatches} The populated <code>IssueMatches</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueMatches();

        if (data.hasOwnProperty('matches')) {
          obj['matches'] = _ApiClient["default"].convertToType(data['matches'], [_IssueMatchesForJQL["default"]]);
        }
      }

      return obj;
    }
  }]);

  return IssueMatches;
}();
/**
 * @member {Array.<module:model/IssueMatchesForJQL>} matches
 */


IssueMatches.prototype['matches'] = undefined;
var _default = IssueMatches;
exports["default"] = _default;