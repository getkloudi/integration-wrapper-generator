"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Fields = _interopRequireDefault(require("./Fields"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LinkedIssue model module.
 * @module model/LinkedIssue
 * @version 1.4.0
 */
var LinkedIssue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkedIssue</code>.
   * The ID or key of a linked issue.
   * @alias module:model/LinkedIssue
   */
  function LinkedIssue() {
    _classCallCheck(this, LinkedIssue);

    LinkedIssue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkedIssue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LinkedIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedIssue} obj Optional instance to populate.
     * @return {module:model/LinkedIssue} The populated <code>LinkedIssue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkedIssue();

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], _Fields["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LinkedIssue;
}();
/**
 * The fields associated with the issue.
 * @member {module:model/Fields} fields
 */


LinkedIssue.prototype['fields'] = undefined;
/**
 * The ID of an issue. Required if `key` isn't provided.
 * @member {String} id
 */

LinkedIssue.prototype['id'] = undefined;
/**
 * The key of an issue. Required if `id` isn't provided.
 * @member {String} key
 */

LinkedIssue.prototype['key'] = undefined;
/**
 * The URL of the issue.
 * @member {String} self
 */

LinkedIssue.prototype['self'] = undefined;
var _default = LinkedIssue;
exports["default"] = _default;