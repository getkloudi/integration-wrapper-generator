"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BulkOperationErrorResult = _interopRequireDefault(require("./BulkOperationErrorResult"));

var _CreatedIssue = _interopRequireDefault(require("./CreatedIssue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreatedIssues model module.
 * @module model/CreatedIssues
 * @version 1.4.0
 */
var CreatedIssues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreatedIssues</code>.
   * Details about the issues created and the errors for requests that failed.
   * @alias module:model/CreatedIssues
   */
  function CreatedIssues() {
    _classCallCheck(this, CreatedIssues);

    CreatedIssues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreatedIssues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreatedIssues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatedIssues} obj Optional instance to populate.
     * @return {module:model/CreatedIssues} The populated <code>CreatedIssues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreatedIssues();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_BulkOperationErrorResult["default"]]);
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], [_CreatedIssue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreatedIssues;
}();
/**
 * Error details for failed issue creation requests.
 * @member {Array.<module:model/BulkOperationErrorResult>} errors
 */


CreatedIssues.prototype['errors'] = undefined;
/**
 * Details of the issues created.
 * @member {Array.<module:model/CreatedIssue>} issues
 */

CreatedIssues.prototype['issues'] = undefined;
var _default = CreatedIssues;
exports["default"] = _default;