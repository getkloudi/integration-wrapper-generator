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
 * The InlineResponse20075 model module.
 * @module model/InlineResponse20075
 * @version 1.2.0
 */
var InlineResponse20075 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20075</code>.
   * 
   * @alias module:model/InlineResponse20075
   * @param administrators {String} 
   * @param developers {String} 
   * @param users {String} 
   */
  function InlineResponse20075(administrators, developers, users) {
    _classCallCheck(this, InlineResponse20075);

    InlineResponse20075.initialize(this, administrators, developers, users);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20075, null, [{
    key: "initialize",
    value: function initialize(obj, administrators, developers, users) {
      obj['Administrators'] = administrators;
      obj['Developers'] = developers;
      obj['Users'] = users;
    }
    /**
     * Constructs a <code>InlineResponse20075</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20075} obj Optional instance to populate.
     * @return {module:model/InlineResponse20075} The populated <code>InlineResponse20075</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20075();

        if (data.hasOwnProperty('Administrators')) {
          obj['Administrators'] = _ApiClient["default"].convertToType(data['Administrators'], 'String');
        }

        if (data.hasOwnProperty('Developers')) {
          obj['Developers'] = _ApiClient["default"].convertToType(data['Developers'], 'String');
        }

        if (data.hasOwnProperty('Users')) {
          obj['Users'] = _ApiClient["default"].convertToType(data['Users'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20075;
}();
/**
 * @member {String} Administrators
 */


InlineResponse20075.prototype['Administrators'] = undefined;
/**
 * @member {String} Developers
 */

InlineResponse20075.prototype['Developers'] = undefined;
/**
 * @member {String} Users
 */

InlineResponse20075.prototype['Users'] = undefined;
var _default = InlineResponse20075;
exports["default"] = _default;