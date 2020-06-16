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
 * The JQLQueryWithUnknownUsers model module.
 * @module model/JQLQueryWithUnknownUsers
 * @version 1.4.0
 */
var JQLQueryWithUnknownUsers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JQLQueryWithUnknownUsers</code>.
   * JQL queries that contained users that could not be found
   * @alias module:model/JQLQueryWithUnknownUsers
   */
  function JQLQueryWithUnknownUsers() {
    _classCallCheck(this, JQLQueryWithUnknownUsers);

    JQLQueryWithUnknownUsers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JQLQueryWithUnknownUsers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JQLQueryWithUnknownUsers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JQLQueryWithUnknownUsers} obj Optional instance to populate.
     * @return {module:model/JQLQueryWithUnknownUsers} The populated <code>JQLQueryWithUnknownUsers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JQLQueryWithUnknownUsers();

        if (data.hasOwnProperty('convertedQuery')) {
          obj['convertedQuery'] = _ApiClient["default"].convertToType(data['convertedQuery'], 'String');
        }

        if (data.hasOwnProperty('originalQuery')) {
          obj['originalQuery'] = _ApiClient["default"].convertToType(data['originalQuery'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JQLQueryWithUnknownUsers;
}();
/**
 * The converted query, with accountIDs instead of user identifiers, or 'unknown' for users that could not be found
 * @member {String} convertedQuery
 */


JQLQueryWithUnknownUsers.prototype['convertedQuery'] = undefined;
/**
 * The original query, for reference
 * @member {String} originalQuery
 */

JQLQueryWithUnknownUsers.prototype['originalQuery'] = undefined;
var _default = JQLQueryWithUnknownUsers;
exports["default"] = _default;