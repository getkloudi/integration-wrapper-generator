"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2018Permissions = _interopRequireDefault(require("./InlineResponse2018Permissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20066 model module.
 * @module model/InlineResponse20066
 * @version 1.0.0
 */
var InlineResponse20066 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20066</code>.
   * 
   * @alias module:model/InlineResponse20066
   * @param expand {String} 
   * @param permissions {Array.<module:model/InlineResponse2018Permissions>} 
   */
  function InlineResponse20066(expand, permissions) {
    _classCallCheck(this, InlineResponse20066);

    InlineResponse20066.initialize(this, expand, permissions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20066, null, [{
    key: "initialize",
    value: function initialize(obj, expand, permissions) {
      obj['expand'] = expand;
      obj['permissions'] = permissions;
    }
    /**
     * Constructs a <code>InlineResponse20066</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20066} obj Optional instance to populate.
     * @return {module:model/InlineResponse20066} The populated <code>InlineResponse20066</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20066();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_InlineResponse2018Permissions["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20066;
}();
/**
 * @member {String} expand
 */


InlineResponse20066.prototype['expand'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2018Permissions>} permissions
 */

InlineResponse20066.prototype['permissions'] = undefined;
var _default = InlineResponse20066;
exports["default"] = _default;