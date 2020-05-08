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
 * The InlineObject72 model module.
 * @module model/InlineObject72
 * @version 1.0.0
 */
var InlineObject72 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject72</code>.
   * @alias module:model/InlineObject72
   */
  function InlineObject72() {
    _classCallCheck(this, InlineObject72);

    InlineObject72.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject72, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject72</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject72} obj Optional instance to populate.
     * @return {module:model/InlineObject72} The populated <code>InlineObject72</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject72();

        if (data.hasOwnProperty('issueType')) {
          obj['issueType'] = _ApiClient["default"].convertToType(data['issueType'], 'String');
        }

        if (data.hasOwnProperty('updateDraftIfNeeded')) {
          obj['updateDraftIfNeeded'] = _ApiClient["default"].convertToType(data['updateDraftIfNeeded'], 'Boolean');
        }

        if (data.hasOwnProperty('workflow')) {
          obj['workflow'] = _ApiClient["default"].convertToType(data['workflow'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject72;
}();
/**
 * The ID of the issue type. Not required if updating the issue type-workflow mapping.
 * @member {String} issueType
 */


InlineObject72.prototype['issueType'] = undefined;
/**
 * Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false. Only applicable when updating the workflow-issue types mapping.
 * @member {Boolean} updateDraftIfNeeded
 */

InlineObject72.prototype['updateDraftIfNeeded'] = undefined;
/**
 * The name of the workflow. For example, jira.
 * @member {String} workflow
 */

InlineObject72.prototype['workflow'] = undefined;
var _default = InlineObject72;
exports["default"] = _default;