"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20035Groups = _interopRequireDefault(require("./InlineResponse20035Groups"));

var _InlineResponse20035Users = _interopRequireDefault(require("./InlineResponse20035Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20035 model module.
 * @module model/InlineResponse20035
 * @version 1.3.0
 */
var InlineResponse20035 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20035</code>.
   * 
   * @alias module:model/InlineResponse20035
   * @param groups {module:model/InlineResponse20035Groups} 
   * @param users {module:model/InlineResponse20035Users} 
   */
  function InlineResponse20035(groups, users) {
    _classCallCheck(this, InlineResponse20035);

    InlineResponse20035.initialize(this, groups, users);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20035, null, [{
    key: "initialize",
    value: function initialize(obj, groups, users) {
      obj['groups'] = groups;
      obj['users'] = users;
    }
    /**
     * Constructs a <code>InlineResponse20035</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20035} obj Optional instance to populate.
     * @return {module:model/InlineResponse20035} The populated <code>InlineResponse20035</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20035();

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _InlineResponse20035Groups["default"].constructFromObject(data['groups']);
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _InlineResponse20035Users["default"].constructFromObject(data['users']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20035;
}();
/**
 * @member {module:model/InlineResponse20035Groups} groups
 */


InlineResponse20035.prototype['groups'] = undefined;
/**
 * @member {module:model/InlineResponse20035Users} users
 */

InlineResponse20035.prototype['users'] = undefined;
var _default = InlineResponse20035;
exports["default"] = _default;