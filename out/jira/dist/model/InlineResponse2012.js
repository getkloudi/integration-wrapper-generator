"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2012Users = _interopRequireDefault(require("./InlineResponse2012Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2012 model module.
 * @module model/InlineResponse2012
 * @version 1.2.0
 */
var InlineResponse2012 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2012</code>.
   * 
   * @alias module:model/InlineResponse2012
   * @param expand {String} 
   * @param name {String} 
   * @param self {String} 
   * @param users {module:model/InlineResponse2012Users} 
   */
  function InlineResponse2012(expand, name, self, users) {
    _classCallCheck(this, InlineResponse2012);

    InlineResponse2012.initialize(this, expand, name, self, users);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2012, null, [{
    key: "initialize",
    value: function initialize(obj, expand, name, self, users) {
      obj['expand'] = expand;
      obj['name'] = name;
      obj['self'] = self;
      obj['users'] = users;
    }
    /**
     * Constructs a <code>InlineResponse2012</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2012} obj Optional instance to populate.
     * @return {module:model/InlineResponse2012} The populated <code>InlineResponse2012</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2012();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _InlineResponse2012Users["default"].constructFromObject(data['users']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2012;
}();
/**
 * @member {String} expand
 */


InlineResponse2012.prototype['expand'] = undefined;
/**
 * @member {String} name
 */

InlineResponse2012.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse2012.prototype['self'] = undefined;
/**
 * @member {module:model/InlineResponse2012Users} users
 */

InlineResponse2012.prototype['users'] = undefined;
var _default = InlineResponse2012;
exports["default"] = _default;