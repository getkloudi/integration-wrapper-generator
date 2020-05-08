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
 * The InlineObject9 model module.
 * @module model/InlineObject9
 * @version 1.3.0
 */
var InlineObject9 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject9</code>.
   * @alias module:model/InlineObject9
   */
  function InlineObject9() {
    _classCallCheck(this, InlineObject9);

    InlineObject9.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject9, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject9</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject9} obj Optional instance to populate.
     * @return {module:model/InlineObject9} The populated <code>InlineObject9</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject9();

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], Object);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], Object);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject9;
}();
/**
 * @member {Object} config
 */


InlineObject9.prototype['config'] = undefined;
/**
 * The properties can be any arbitrary key value pairs. These properties can be searched using JQL, if the extractions (see https://developer.atlassian.com/cloud/jira/platform/modules/issue-field-option-property-index/) are defined in the descriptor for the issue field module.
 * @member {Object} properties
 */

InlineObject9.prototype['properties'] = undefined;
/**
 * The option's name, which is displayed in the UI.
 * @member {String} value
 */

InlineObject9.prototype['value'] = undefined;
var _default = InlineObject9;
exports["default"] = _default;