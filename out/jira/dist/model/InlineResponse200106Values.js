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
 * The InlineResponse200106Values model module.
 * @module model/InlineResponse200106Values
 * @version 1.0.0
 */
var InlineResponse200106Values = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200106Values</code>.
   * @alias module:model/InlineResponse200106Values
   * @param updatedTime {Number} 
   * @param worklogId {Number} 
   */
  function InlineResponse200106Values(updatedTime, worklogId) {
    _classCallCheck(this, InlineResponse200106Values);

    InlineResponse200106Values.initialize(this, updatedTime, worklogId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200106Values, null, [{
    key: "initialize",
    value: function initialize(obj, updatedTime, worklogId) {
      obj['updatedTime'] = updatedTime;
      obj['worklogId'] = worklogId;
    }
    /**
     * Constructs a <code>InlineResponse200106Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200106Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse200106Values} The populated <code>InlineResponse200106Values</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200106Values();

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [Object]);
        }

        if (data.hasOwnProperty('updatedTime')) {
          obj['updatedTime'] = _ApiClient["default"].convertToType(data['updatedTime'], 'Number');
        }

        if (data.hasOwnProperty('worklogId')) {
          obj['worklogId'] = _ApiClient["default"].convertToType(data['worklogId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200106Values;
}();
/**
 * @member {Array.<Object>} properties
 */


InlineResponse200106Values.prototype['properties'] = undefined;
/**
 * @member {Number} updatedTime
 */

InlineResponse200106Values.prototype['updatedTime'] = undefined;
/**
 * @member {Number} worklogId
 */

InlineResponse200106Values.prototype['worklogId'] = undefined;
var _default = InlineResponse200106Values;
exports["default"] = _default;