"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NestedResponse = _interopRequireDefault(require("./NestedResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatedIssue model module.
 * @module model/CreatedIssue
 * @version 1.4.0
 */
var CreatedIssue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatedIssue</code>.
   * Details about a created issue or subtask.
   * @alias module:model/CreatedIssue
   */
  function CreatedIssue() {
    _classCallCheck(this, CreatedIssue);

    CreatedIssue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatedIssue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreatedIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatedIssue} obj Optional instance to populate.
     * @return {module:model/CreatedIssue} The populated <code>CreatedIssue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatedIssue();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('transition')) {
          obj['transition'] = _ApiClient["default"].convertToType(data['transition'], _NestedResponse["default"]);
        }
      }

      return obj;
    }
  }]);

  return CreatedIssue;
}();
/**
 * The ID of the created issue or subtask.
 * @member {String} id
 */


CreatedIssue.prototype['id'] = undefined;
/**
 * The key of the created issue or subtask.
 * @member {String} key
 */

CreatedIssue.prototype['key'] = undefined;
/**
 * The URL of the created issue or subtask.
 * @member {String} self
 */

CreatedIssue.prototype['self'] = undefined;
/**
 * The response code and messages related to any requested transition.
 * @member {module:model/NestedResponse} transition
 */

CreatedIssue.prototype['transition'] = undefined;
var _default = CreatedIssue;
exports["default"] = _default;