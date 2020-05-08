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
 * The InlineResponse20019SharePermissions model module.
 * @module model/InlineResponse20019SharePermissions
 * @version 1.3.1
 */
var InlineResponse20019SharePermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20019SharePermissions</code>.
   * @alias module:model/InlineResponse20019SharePermissions
   * @param type {String} 
   */
  function InlineResponse20019SharePermissions(type) {
    _classCallCheck(this, InlineResponse20019SharePermissions);

    InlineResponse20019SharePermissions.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20019SharePermissions, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse20019SharePermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20019SharePermissions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20019SharePermissions} The populated <code>InlineResponse20019SharePermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20019SharePermissions();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20019SharePermissions;
}();
/**
 * @member {String} type
 */


InlineResponse20019SharePermissions.prototype['type'] = undefined;
var _default = InlineResponse20019SharePermissions;
exports["default"] = _default;