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
 * The InlineResponse200104 model module.
 * @module model/InlineResponse200104
 * @version 1.2.0
 */
var InlineResponse200104 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200104</code>.
   * 
   * @alias module:model/InlineResponse200104
   * @param issueType {String} 
   * @param workflow {String} 
   */
  function InlineResponse200104(issueType, workflow) {
    _classCallCheck(this, InlineResponse200104);

    InlineResponse200104.initialize(this, issueType, workflow);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200104, null, [{
    key: "initialize",
    value: function initialize(obj, issueType, workflow) {
      obj['issueType'] = issueType;
      obj['workflow'] = workflow;
    }
    /**
     * Constructs a <code>InlineResponse200104</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200104} obj Optional instance to populate.
     * @return {module:model/InlineResponse200104} The populated <code>InlineResponse200104</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200104();

        if (data.hasOwnProperty('issueType')) {
          obj['issueType'] = _ApiClient["default"].convertToType(data['issueType'], 'String');
        }

        if (data.hasOwnProperty('workflow')) {
          obj['workflow'] = _ApiClient["default"].convertToType(data['workflow'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200104;
}();
/**
 * @member {String} issueType
 */


InlineResponse200104.prototype['issueType'] = undefined;
/**
 * @member {String} workflow
 */

InlineResponse200104.prototype['workflow'] = undefined;
var _default = InlineResponse200104;
exports["default"] = _default;