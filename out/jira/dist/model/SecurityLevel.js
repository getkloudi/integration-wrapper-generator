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
 * The SecurityLevel model module.
 * @module model/SecurityLevel
 * @version 1.4.0
 */
var SecurityLevel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecurityLevel</code>.
   * Details of an issue level security item.
   * @alias module:model/SecurityLevel
   */
  function SecurityLevel() {
    _classCallCheck(this, SecurityLevel);

    SecurityLevel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecurityLevel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecurityLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecurityLevel} obj Optional instance to populate.
     * @return {module:model/SecurityLevel} The populated <code>SecurityLevel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecurityLevel();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
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

  return SecurityLevel;
}();
/**
 * The description of the issue level security item.
 * @member {String} description
 */


SecurityLevel.prototype['description'] = undefined;
/**
 * The ID of the issue level security item.
 * @member {String} id
 */

SecurityLevel.prototype['id'] = undefined;
/**
 * The name of the issue level security item.
 * @member {String} name
 */

SecurityLevel.prototype['name'] = undefined;
/**
 * The URL of the issue level security item.
 * @member {String} self
 */

SecurityLevel.prototype['self'] = undefined;
var _default = SecurityLevel;
exports["default"] = _default;