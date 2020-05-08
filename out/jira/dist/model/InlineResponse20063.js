"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20063Permissions = _interopRequireDefault(require("./InlineResponse20063Permissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20063 model module.
 * @module model/InlineResponse20063
 * @version 1.3.0
 */
var InlineResponse20063 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20063</code>.
   * 
   * @alias module:model/InlineResponse20063
   * @param permissions {module:model/InlineResponse20063Permissions} 
   */
  function InlineResponse20063(permissions) {
    _classCallCheck(this, InlineResponse20063);

    InlineResponse20063.initialize(this, permissions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20063, null, [{
    key: "initialize",
    value: function initialize(obj, permissions) {
      obj['permissions'] = permissions;
    }
    /**
     * Constructs a <code>InlineResponse20063</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20063} obj Optional instance to populate.
     * @return {module:model/InlineResponse20063} The populated <code>InlineResponse20063</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20063();

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _InlineResponse20063Permissions["default"].constructFromObject(data['permissions']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20063;
}();
/**
 * @member {module:model/InlineResponse20063Permissions} permissions
 */


InlineResponse20063.prototype['permissions'] = undefined;
var _default = InlineResponse20063;
exports["default"] = _default;