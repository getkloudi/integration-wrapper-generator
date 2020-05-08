"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication = _interopRequireDefault(require("./CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication"));

var _CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject = _interopRequireDefault(require("./CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20044 model module.
 * @module model/InlineResponse20044
 * @version 1.2.0
 */
var InlineResponse20044 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20044</code>.
   * 
   * @alias module:model/InlineResponse20044
   * @param application {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication} 
   * @param globalId {String} 
   * @param id {Number} 
   * @param _object {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject} 
   * @param relationship {String} 
   * @param self {String} 
   */
  function InlineResponse20044(application, globalId, id, _object, relationship, self) {
    _classCallCheck(this, InlineResponse20044);

    InlineResponse20044.initialize(this, application, globalId, id, _object, relationship, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20044, null, [{
    key: "initialize",
    value: function initialize(obj, application, globalId, id, _object, relationship, self) {
      obj['application'] = application;
      obj['globalId'] = globalId;
      obj['id'] = id;
      obj['object'] = _object;
      obj['relationship'] = relationship;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20044</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20044} obj Optional instance to populate.
     * @return {module:model/InlineResponse20044} The populated <code>InlineResponse20044</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20044();

        if (data.hasOwnProperty('application')) {
          obj['application'] = _CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication["default"].constructFromObject(data['application']);
        }

        if (data.hasOwnProperty('globalId')) {
          obj['globalId'] = _ApiClient["default"].convertToType(data['globalId'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = _CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject["default"].constructFromObject(data['object']);
        }

        if (data.hasOwnProperty('relationship')) {
          obj['relationship'] = _ApiClient["default"].convertToType(data['relationship'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20044;
}();
/**
 * @member {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkApplication} application
 */


InlineResponse20044.prototype['application'] = undefined;
/**
 * @member {String} globalId
 */

InlineResponse20044.prototype['globalId'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20044.prototype['id'] = undefined;
/**
 * @member {module:model/CloudidRestApi3IssueIssueIdOrKeyRemotelinkObject} object
 */

InlineResponse20044.prototype['object'] = undefined;
/**
 * @member {String} relationship
 */

InlineResponse20044.prototype['relationship'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20044.prototype['self'] = undefined;
var _default = InlineResponse20044;
exports["default"] = _default;