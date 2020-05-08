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
 * The FieldSchema model module.
 * @module model/FieldSchema
 * @version 1.3.0
 */
var FieldSchema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldSchema</code>.
   * @alias module:model/FieldSchema
   * @param system {String} 
   * @param type {String} 
   */
  function FieldSchema(system, type) {
    _classCallCheck(this, FieldSchema);

    FieldSchema.initialize(this, system, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldSchema, null, [{
    key: "initialize",
    value: function initialize(obj, system, type) {
      obj['system'] = system;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>FieldSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldSchema} obj Optional instance to populate.
     * @return {module:model/FieldSchema} The populated <code>FieldSchema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldSchema();

        if (data.hasOwnProperty('system')) {
          obj['system'] = _ApiClient["default"].convertToType(data['system'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FieldSchema;
}();
/**
 * @member {String} system
 */


FieldSchema.prototype['system'] = undefined;
/**
 * @member {String} type
 */

FieldSchema.prototype['type'] = undefined;
var _default = FieldSchema;
exports["default"] = _default;