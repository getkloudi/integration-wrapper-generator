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
 * The InlineResponse200105 model module.
 * @module model/InlineResponse200105
 * @version 1.1.0
 */
var InlineResponse200105 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200105</code>.
   * 
   * @alias module:model/InlineResponse200105
   * @param defaultMapping {Boolean} 
   * @param issueTypes {Array.<Object>} 
   * @param workflow {String} 
   */
  function InlineResponse200105(defaultMapping, issueTypes, workflow) {
    _classCallCheck(this, InlineResponse200105);

    InlineResponse200105.initialize(this, defaultMapping, issueTypes, workflow);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200105, null, [{
    key: "initialize",
    value: function initialize(obj, defaultMapping, issueTypes, workflow) {
      obj['defaultMapping'] = defaultMapping;
      obj['issueTypes'] = issueTypes;
      obj['workflow'] = workflow;
    }
    /**
     * Constructs a <code>InlineResponse200105</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200105} obj Optional instance to populate.
     * @return {module:model/InlineResponse200105} The populated <code>InlineResponse200105</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200105();

        if (data.hasOwnProperty('defaultMapping')) {
          obj['defaultMapping'] = _ApiClient["default"].convertToType(data['defaultMapping'], 'Boolean');
        }

        if (data.hasOwnProperty('issueTypes')) {
          obj['issueTypes'] = _ApiClient["default"].convertToType(data['issueTypes'], [Object]);
        }

        if (data.hasOwnProperty('workflow')) {
          obj['workflow'] = _ApiClient["default"].convertToType(data['workflow'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200105;
}();
/**
 * @member {Boolean} defaultMapping
 */


InlineResponse200105.prototype['defaultMapping'] = undefined;
/**
 * @member {Array.<Object>} issueTypes
 */

InlineResponse200105.prototype['issueTypes'] = undefined;
/**
 * @member {String} workflow
 */

InlineResponse200105.prototype['workflow'] = undefined;
var _default = InlineResponse200105;
exports["default"] = _default;