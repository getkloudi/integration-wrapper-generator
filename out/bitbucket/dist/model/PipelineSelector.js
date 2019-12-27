"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineSelectorAllOf = _interopRequireDefault(require("./PipelineSelectorAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineSelector model module.
 * @module model/PipelineSelector
 * @version 1.1.0
 */
var PipelineSelector =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineSelector</code>.
   * @alias module:model/PipelineSelector
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineSelectorAllOf
   * @param type {module:model/PipelineSelector.TypeEnum} The type of selector.
   */
  function PipelineSelector(type) {
    _classCallCheck(this, PipelineSelector);

    _ModelObject["default"].initialize(this, type);

    _PipelineSelectorAllOf["default"].initialize(this);

    PipelineSelector.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineSelector, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineSelector} obj Optional instance to populate.
     * @return {module:model/PipelineSelector} The populated <code>PipelineSelector</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineSelector();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineSelectorAllOf["default"].constructFromObject(data, obj);

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

  return PipelineSelector;
}();
/**
 * The name of the matching pipeline definition.
 * @member {String} pattern
 */


PipelineSelector.prototype['pattern'] = undefined;
/**
 * The type of selector.
 * @member {module:model/PipelineSelector.TypeEnum} type
 */

PipelineSelector.prototype['type'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineSelectorAllOf interface:

/**
 * The name of the matching pipeline definition.
 * @member {String} pattern
 */

_PipelineSelectorAllOf["default"].prototype['pattern'] = undefined;
/**
 * The type of selector.
 * @member {module:model/PipelineSelectorAllOf.TypeEnum} type
 */

_PipelineSelectorAllOf["default"].prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

PipelineSelector['TypeEnum'] = {
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
var _default = PipelineSelector;
exports["default"] = _default;