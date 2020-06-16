"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleErrorCollection = _interopRequireDefault(require("./SimpleErrorCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RemoveOptionFromIssuesResult model module.
 * @module model/RemoveOptionFromIssuesResult
 * @version 1.4.0
 */
var RemoveOptionFromIssuesResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoveOptionFromIssuesResult</code>.
   * @alias module:model/RemoveOptionFromIssuesResult
   */
  function RemoveOptionFromIssuesResult() {
    _classCallCheck(this, RemoveOptionFromIssuesResult);

    RemoveOptionFromIssuesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoveOptionFromIssuesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RemoveOptionFromIssuesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveOptionFromIssuesResult} obj Optional instance to populate.
     * @return {module:model/RemoveOptionFromIssuesResult} The populated <code>RemoveOptionFromIssuesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoveOptionFromIssuesResult();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], _SimpleErrorCollection["default"]);
        }

        if (data.hasOwnProperty('modifiedIssues')) {
          obj['modifiedIssues'] = _ApiClient["default"].convertToType(data['modifiedIssues'], ['Number']);
        }

        if (data.hasOwnProperty('unmodifiedIssues')) {
          obj['unmodifiedIssues'] = _ApiClient["default"].convertToType(data['unmodifiedIssues'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return RemoveOptionFromIssuesResult;
}();
/**
 * A collection of errors related to unchanged issues. The collection size is limited, which means not all errors may be returned.
 * @member {module:model/SimpleErrorCollection} errors
 */


RemoveOptionFromIssuesResult.prototype['errors'] = undefined;
/**
 * The IDs of the modified issues.
 * @member {Array.<Number>} modifiedIssues
 */

RemoveOptionFromIssuesResult.prototype['modifiedIssues'] = undefined;
/**
 * The IDs of the unchanged issues, those issues where errors prevent modification.
 * @member {Array.<Number>} unmodifiedIssues
 */

RemoveOptionFromIssuesResult.prototype['unmodifiedIssues'] = undefined;
var _default = RemoveOptionFromIssuesResult;
exports["default"] = _default;