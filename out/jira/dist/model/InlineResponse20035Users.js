"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20035UsersUsers = _interopRequireDefault(require("./InlineResponse20035UsersUsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20035Users model module.
 * @module model/InlineResponse20035Users
 * @version 1.3.1
 */
var InlineResponse20035Users = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20035Users</code>.
   * @alias module:model/InlineResponse20035Users
   * @param header {String} 
   * @param total {Number} 
   * @param users {Array.<module:model/InlineResponse20035UsersUsers>} 
   */
  function InlineResponse20035Users(header, total, users) {
    _classCallCheck(this, InlineResponse20035Users);

    InlineResponse20035Users.initialize(this, header, total, users);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20035Users, null, [{
    key: "initialize",
    value: function initialize(obj, header, total, users) {
      obj['header'] = header;
      obj['total'] = total;
      obj['users'] = users;
    }
    /**
     * Constructs a <code>InlineResponse20035Users</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20035Users} obj Optional instance to populate.
     * @return {module:model/InlineResponse20035Users} The populated <code>InlineResponse20035Users</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20035Users();

        if (data.hasOwnProperty('header')) {
          obj['header'] = _ApiClient["default"].convertToType(data['header'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_InlineResponse20035UsersUsers["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20035Users;
}();
/**
 * @member {String} header
 */


InlineResponse20035Users.prototype['header'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse20035Users.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20035UsersUsers>} users
 */

InlineResponse20035Users.prototype['users'] = undefined;
var _default = InlineResponse20035Users;
exports["default"] = _default;