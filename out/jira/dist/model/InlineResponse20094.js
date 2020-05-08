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
 * The InlineResponse20094 model module.
 * @module model/InlineResponse20094
 * @version 1.0.0
 */
var InlineResponse20094 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20094</code>.
   * 
   * @alias module:model/InlineResponse20094
   * @param header {String} 
   * @param total {Number} 
   * @param users {Array.<module:model/InlineResponse20035UsersUsers>} 
   */
  function InlineResponse20094(header, total, users) {
    _classCallCheck(this, InlineResponse20094);

    InlineResponse20094.initialize(this, header, total, users);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20094, null, [{
    key: "initialize",
    value: function initialize(obj, header, total, users) {
      obj['header'] = header;
      obj['total'] = total;
      obj['users'] = users;
    }
    /**
     * Constructs a <code>InlineResponse20094</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20094} obj Optional instance to populate.
     * @return {module:model/InlineResponse20094} The populated <code>InlineResponse20094</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20094();

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

  return InlineResponse20094;
}();
/**
 * @member {String} header
 */


InlineResponse20094.prototype['header'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse20094.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20035UsersUsers>} users
 */

InlineResponse20094.prototype['users'] = undefined;
var _default = InlineResponse20094;
exports["default"] = _default;