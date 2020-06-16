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
 * The FieldUpdateOperation model module.
 * @module model/FieldUpdateOperation
 * @version 1.4.0
 */
var FieldUpdateOperation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldUpdateOperation</code>.
   * Details of an operation to perform on a field.
   * @alias module:model/FieldUpdateOperation
   */
  function FieldUpdateOperation() {
    _classCallCheck(this, FieldUpdateOperation);

    FieldUpdateOperation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldUpdateOperation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FieldUpdateOperation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldUpdateOperation} obj Optional instance to populate.
     * @return {module:model/FieldUpdateOperation} The populated <code>FieldUpdateOperation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldUpdateOperation();

        if (data.hasOwnProperty('add')) {
          obj['add'] = _ApiClient["default"].convertToType(data['add'], Object);
        }

        if (data.hasOwnProperty('edit')) {
          obj['edit'] = _ApiClient["default"].convertToType(data['edit'], Object);
        }

        if (data.hasOwnProperty('remove')) {
          obj['remove'] = _ApiClient["default"].convertToType(data['remove'], Object);
        }

        if (data.hasOwnProperty('set')) {
          obj['set'] = _ApiClient["default"].convertToType(data['set'], Object);
        }
      }

      return obj;
    }
  }]);

  return FieldUpdateOperation;
}();
/**
 * A map containing the name of a field and the value to add to it.
 * @member {Object} add
 */


FieldUpdateOperation.prototype['add'] = undefined;
/**
 * A map containing the name of a field and the value to edit in it.
 * @member {Object} edit
 */

FieldUpdateOperation.prototype['edit'] = undefined;
/**
 * A map containing the name of a field and the value to removed from it.
 * @member {Object} remove
 */

FieldUpdateOperation.prototype['remove'] = undefined;
/**
 * A map containing the name of a field and the value to set in it.
 * @member {Object} set
 */

FieldUpdateOperation.prototype['set'] = undefined;
var _default = FieldUpdateOperation;
exports["default"] = _default;