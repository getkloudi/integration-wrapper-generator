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
 * The InlineObject71 model module.
 * @module model/InlineObject71
 * @version 1.2.0
 */
var InlineObject71 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject71</code>.
   * @alias module:model/InlineObject71
   */
  function InlineObject71() {
    _classCallCheck(this, InlineObject71);

    InlineObject71.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject71, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject71</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject71} obj Optional instance to populate.
     * @return {module:model/InlineObject71} The populated <code>InlineObject71</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject71();

        if (data.hasOwnProperty('defaultMapping')) {
          obj['defaultMapping'] = _ApiClient["default"].convertToType(data['defaultMapping'], 'Boolean');
        }

        if (data.hasOwnProperty('issueTypes')) {
          obj['issueTypes'] = _ApiClient["default"].convertToType(data['issueTypes'], ['String']);
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

  return InlineObject71;
}();
/**
 * Indicates whether the workflow is the default workflow for the workflow scheme.
 * @member {Boolean} defaultMapping
 */


InlineObject71.prototype['defaultMapping'] = undefined;
/**
 * The list of issue type IDs.
 * @member {Array.<String>} issueTypes
 */

InlineObject71.prototype['issueTypes'] = undefined;
/**
 * Indicates whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to false.
 * @member {Boolean} updateDraftIfNeeded
 */

InlineObject71.prototype['updateDraftIfNeeded'] = undefined;
/**
 * The name of the workflow. For example, jira. Optional if updating the workflow-issue types mapping.
 * @member {String} workflow
 */

InlineObject71.prototype['workflow'] = undefined;
var _default = InlineObject71;
exports["default"] = _default;