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
 * The InlineResponse20071Roles model module.
 * @module model/InlineResponse20071Roles
 * @version 1.3.1
 */
var InlineResponse20071Roles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20071Roles</code>.
   * @alias module:model/InlineResponse20071Roles
   * @param developers {String} 
   */
  function InlineResponse20071Roles(developers) {
    _classCallCheck(this, InlineResponse20071Roles);

    InlineResponse20071Roles.initialize(this, developers);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20071Roles, null, [{
    key: "initialize",
    value: function initialize(obj, developers) {
      obj['Developers'] = developers;
    }
    /**
     * Constructs a <code>InlineResponse20071Roles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20071Roles} obj Optional instance to populate.
     * @return {module:model/InlineResponse20071Roles} The populated <code>InlineResponse20071Roles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20071Roles();

        if (data.hasOwnProperty('Developers')) {
          obj['Developers'] = _ApiClient["default"].convertToType(data['Developers'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20071Roles;
}();
/**
 * @member {String} Developers
 */


InlineResponse20071Roles.prototype['Developers'] = undefined;
var _default = InlineResponse20071Roles;
exports["default"] = _default;