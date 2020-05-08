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
 * The InlineObject27 model module.
 * @module model/InlineObject27
 * @version 1.1.0
 */
var InlineObject27 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject27</code>.
   * @alias module:model/InlineObject27
   */
  function InlineObject27() {
    _classCallCheck(this, InlineObject27);

    InlineObject27.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject27, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject27</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject27} obj Optional instance to populate.
     * @return {module:model/InlineObject27} The populated <code>InlineObject27</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject27();

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], Object);
        }

        if (data.hasOwnProperty('historyMetadata')) {
          obj['historyMetadata'] = _ApiClient["default"].convertToType(data['historyMetadata'], Object);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [Object]);
        }

        if (data.hasOwnProperty('transition')) {
          obj['transition'] = _ApiClient["default"].convertToType(data['transition'], Object);
        }

        if (data.hasOwnProperty('update')) {
          obj['update'] = _ApiClient["default"].convertToType(data['update'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineObject27;
}();
/**
 * List of issue screen field to update, specifying the sub-field to update and its value. This field provides a straightforward option when setting a single sub-field. When multiple sub-fields or other operations are required, use update. Fields included in here cannot be included in update.
 * @member {Object} fields
 */


InlineObject27.prototype['fields'] = undefined;
/**
 * Details of issue history metadata. Deprecated.
 * @member {Object} historyMetadata
 */

InlineObject27.prototype['historyMetadata'] = undefined;
/**
 * Details of issue properties to be add or update.
 * @member {Array.<Object>} properties
 */

InlineObject27.prototype['properties'] = undefined;
/**
 * Details of an issue transition.
 * @member {Object} transition
 */

InlineObject27.prototype['transition'] = undefined;
/**
 * List of operations to perform on issue screen fields. Note that fields included in here cannot be included in fields.
 * @member {Object} update
 */

InlineObject27.prototype['update'] = undefined;
var _default = InlineObject27;
exports["default"] = _default;