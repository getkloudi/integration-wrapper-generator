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
 * The Namespace model module.
 * @module model/Namespace
 * @version 1.0.0
 */
var Namespace =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Namespace</code>.
   * Get a namespaces list
   * @alias module:model/Namespace
   */
  function Namespace() {
    _classCallCheck(this, Namespace);

    Namespace.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Namespace, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Namespace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Namespace} obj Optional instance to populate.
     * @return {module:model/Namespace} The populated <code>Namespace</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Namespace();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Namespace;
}();
/**
 * @member {String} id
 */


Namespace.prototype['id'] = undefined;
/**
 * @member {String} kind
 */

Namespace.prototype['kind'] = undefined;
/**
 * @member {String} name
 */

Namespace.prototype['name'] = undefined;
/**
 * @member {String} path
 */

Namespace.prototype['path'] = undefined;
var _default = Namespace;
exports["default"] = _default;