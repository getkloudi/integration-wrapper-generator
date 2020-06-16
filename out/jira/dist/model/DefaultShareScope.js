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
 * The DefaultShareScope model module.
 * @module model/DefaultShareScope
 * @version 1.4.0
 */
var DefaultShareScope = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DefaultShareScope</code>.
   * Details of the scope of the default sharing for new filters and dashboards.
   * @alias module:model/DefaultShareScope
   * @param scope {module:model/DefaultShareScope.ScopeEnum} The scope of the default sharing for new filters and dashboards:   *  `AUTHENTICATED` Shared with all logged-in users.  *  `GLOBAL` Shared with all logged-in users. This shows as `AUTHENTICATED` in the response.  *  `PRIVATE` Not shared with any users.
   */
  function DefaultShareScope(scope) {
    _classCallCheck(this, DefaultShareScope);

    DefaultShareScope.initialize(this, scope);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DefaultShareScope, null, [{
    key: "initialize",
    value: function initialize(obj, scope) {
      obj['scope'] = scope;
    }
    /**
     * Constructs a <code>DefaultShareScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DefaultShareScope} obj Optional instance to populate.
     * @return {module:model/DefaultShareScope} The populated <code>DefaultShareScope</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DefaultShareScope();

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DefaultShareScope;
}();
/**
 * The scope of the default sharing for new filters and dashboards:   *  `AUTHENTICATED` Shared with all logged-in users.  *  `GLOBAL` Shared with all logged-in users. This shows as `AUTHENTICATED` in the response.  *  `PRIVATE` Not shared with any users.
 * @member {module:model/DefaultShareScope.ScopeEnum} scope
 */


DefaultShareScope.prototype['scope'] = undefined;
/**
 * Allowed values for the <code>scope</code> property.
 * @enum {String}
 * @readonly
 */

DefaultShareScope['ScopeEnum'] = {
  /**
   * value: "GLOBAL"
   * @const
   */
  "GLOBAL": "GLOBAL",

  /**
   * value: "AUTHENTICATED"
   * @const
   */
  "AUTHENTICATED": "AUTHENTICATED",

  /**
   * value: "PRIVATE"
   * @const
   */
  "PRIVATE": "PRIVATE"
};
var _default = DefaultShareScope;
exports["default"] = _default;