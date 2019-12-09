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
 * The PipelineSelectorAllOf model module.
 * @module model/PipelineSelectorAllOf
 * @version 1.0.0
 */
var PipelineSelectorAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineSelectorAllOf</code>.
   * A representation of the selector that was used to identify the pipeline in the YML file.
   * @alias module:model/PipelineSelectorAllOf
   */
  function PipelineSelectorAllOf() {
    _classCallCheck(this, PipelineSelectorAllOf);

    PipelineSelectorAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineSelectorAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineSelectorAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineSelectorAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineSelectorAllOf} The populated <code>PipelineSelectorAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineSelectorAllOf();

        if (data.hasOwnProperty('pattern')) {
          obj['pattern'] = _ApiClient["default"].convertToType(data['pattern'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineSelectorAllOf;
}();
/**
 * The name of the matching pipeline definition.
 * @member {String} pattern
 */


PipelineSelectorAllOf.prototype['pattern'] = undefined;
/**
 * The type of selector.
 * @member {module:model/PipelineSelectorAllOf.TypeEnum} type
 */

PipelineSelectorAllOf.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

PipelineSelectorAllOf['TypeEnum'] = {
  /**
   * value: "branches"
   * @const
   */
  "branches": "branches",

  /**
   * value: "tags"
   * @const
   */
  "tags": "tags",

  /**
   * value: "bookmarks"
   * @const
   */
  "bookmarks": "bookmarks",

  /**
   * value: "default"
   * @const
   */
  "default": "default",

  /**
   * value: "custom"
   * @const
   */
  "custom": "custom"
};
var _default = PipelineSelectorAllOf;
exports["default"] = _default;