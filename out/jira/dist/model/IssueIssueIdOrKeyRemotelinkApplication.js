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
 * The IssueIssueIdOrKeyRemotelinkApplication model module.
 * @module model/IssueIssueIdOrKeyRemotelinkApplication
 * @version 1.3.1
 */
var IssueIssueIdOrKeyRemotelinkApplication = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueIssueIdOrKeyRemotelinkApplication</code>.
   * @alias module:model/IssueIssueIdOrKeyRemotelinkApplication
   * @param name {String} 
   * @param type {String} 
   */
  function IssueIssueIdOrKeyRemotelinkApplication(name, type) {
    _classCallCheck(this, IssueIssueIdOrKeyRemotelinkApplication);

    IssueIssueIdOrKeyRemotelinkApplication.initialize(this, name, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueIssueIdOrKeyRemotelinkApplication, null, [{
    key: "initialize",
    value: function initialize(obj, name, type) {
      obj['name'] = name;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>IssueIssueIdOrKeyRemotelinkApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueIssueIdOrKeyRemotelinkApplication} obj Optional instance to populate.
     * @return {module:model/IssueIssueIdOrKeyRemotelinkApplication} The populated <code>IssueIssueIdOrKeyRemotelinkApplication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueIssueIdOrKeyRemotelinkApplication();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueIssueIdOrKeyRemotelinkApplication;
}();
/**
 * @member {String} name
 */


IssueIssueIdOrKeyRemotelinkApplication.prototype['name'] = undefined;
/**
 * @member {String} type
 */

IssueIssueIdOrKeyRemotelinkApplication.prototype['type'] = undefined;
var _default = IssueIssueIdOrKeyRemotelinkApplication;
exports["default"] = _default;