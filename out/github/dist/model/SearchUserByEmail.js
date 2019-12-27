"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchUserByEmail model module.
 * @module model/SearchUserByEmail
 * @version 1.4.3
 */
var SearchUserByEmail =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SearchUserByEmail</code>.
   * @alias module:model/SearchUserByEmail
   */
  function SearchUserByEmail() {
    _classCallCheck(this, SearchUserByEmail);

    SearchUserByEmail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchUserByEmail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchUserByEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchUserByEmail} obj Optional instance to populate.
     * @return {module:model/SearchUserByEmail} The populated <code>SearchUserByEmail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchUserByEmail();

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return SearchUserByEmail;
}();
/**
 * @member {module:model/User} user
 */


SearchUserByEmail.prototype['user'] = undefined;
var _default = SearchUserByEmail;
exports["default"] = _default;