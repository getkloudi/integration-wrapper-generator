"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProjectForScope = _interopRequireDefault(require("./ProjectForScope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Scope model module.
 * @module model/Scope
 * @version 1.4.0
 */
var Scope = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Scope</code>.
   * The projects the item is associated with. Indicated for items associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
   * @alias module:model/Scope
   */
  function Scope() {
    _classCallCheck(this, Scope);

    Scope.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Scope, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Scope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scope} obj Optional instance to populate.
     * @return {module:model/Scope} The populated <code>Scope</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Scope();

        if (data.hasOwnProperty('project')) {
          obj['project'] = _ApiClient["default"].convertToType(data['project'], _ProjectForScope["default"]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Scope;
}();
/**
 * The project the item has scope in.
 * @member {module:model/ProjectForScope} project
 */


Scope.prototype['project'] = undefined;
/**
 * The type of scope.
 * @member {module:model/Scope.TypeEnum} type
 */

Scope.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Scope['TypeEnum'] = {
  /**
   * value: "PROJECT"
   * @const
   */
  "PROJECT": "PROJECT",

  /**
   * value: "TEMPLATE"
   * @const
   */
  "TEMPLATE": "TEMPLATE"
};
var _default = Scope;
exports["default"] = _default;