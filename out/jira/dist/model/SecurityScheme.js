"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SecurityLevel = _interopRequireDefault(require("./SecurityLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SecurityScheme model module.
 * @module model/SecurityScheme
 * @version 1.4.0
 */
var SecurityScheme = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecurityScheme</code>.
   * Details about a security scheme.
   * @alias module:model/SecurityScheme
   */
  function SecurityScheme() {
    _classCallCheck(this, SecurityScheme);

    SecurityScheme.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecurityScheme, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecurityScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecurityScheme} obj Optional instance to populate.
     * @return {module:model/SecurityScheme} The populated <code>SecurityScheme</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecurityScheme();

        if (data.hasOwnProperty('defaultSecurityLevelId')) {
          obj['defaultSecurityLevelId'] = _ApiClient["default"].convertToType(data['defaultSecurityLevelId'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('levels')) {
          obj['levels'] = _ApiClient["default"].convertToType(data['levels'], [_SecurityLevel["default"]]);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SecurityScheme;
}();
/**
 * The ID of the default security level.
 * @member {Number} defaultSecurityLevelId
 */


SecurityScheme.prototype['defaultSecurityLevelId'] = undefined;
/**
 * The description of the issue security scheme.
 * @member {String} description
 */

SecurityScheme.prototype['description'] = undefined;
/**
 * The ID of the issue security scheme.
 * @member {Number} id
 */

SecurityScheme.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/SecurityLevel>} levels
 */

SecurityScheme.prototype['levels'] = undefined;
/**
 * The name of the issue security scheme.
 * @member {String} name
 */

SecurityScheme.prototype['name'] = undefined;
/**
 * The URL of the issue security scheme.
 * @member {String} self
 */

SecurityScheme.prototype['self'] = undefined;
var _default = SecurityScheme;
exports["default"] = _default;