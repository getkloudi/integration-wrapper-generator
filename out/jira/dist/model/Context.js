"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Context model module.
 * @module model/Context
 * @version 1.4.0
 */
var Context = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Context</code>.
   * A context.
   * @alias module:model/Context
   */
  function Context() {
    _classCallCheck(this, Context);

    Context.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Context, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Context</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Context} obj Optional instance to populate.
     * @return {module:model/Context} The populated <code>Context</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Context();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], _Scope["default"]);
        }
      }

      return obj;
    }
  }]);

  return Context;
}();
/**
 * The ID of the context.
 * @member {Number} id
 */


Context.prototype['id'] = undefined;
/**
 * The name of the context.
 * @member {String} name
 */

Context.prototype['name'] = undefined;
/**
 * The scope of the context.
 * @member {module:model/Scope} scope
 */

Context.prototype['scope'] = undefined;
var _default = Context;
exports["default"] = _default;