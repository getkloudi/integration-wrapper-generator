"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20087Issues = _interopRequireDefault(require("./InlineResponse20087Issues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20087 model module.
 * @module model/InlineResponse20087
 * @version 1.3.1
 */
var InlineResponse20087 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20087</code>.
   * 
   * @alias module:model/InlineResponse20087
   * @param expand {String} 
   * @param issues {Array.<module:model/InlineResponse20087Issues>} 
   * @param maxResults {Number} 
   * @param startAt {Number} 
   * @param total {Number} 
   * @param warningMessages {Array.<Object>} 
   */
  function InlineResponse20087(expand, issues, maxResults, startAt, total, warningMessages) {
    _classCallCheck(this, InlineResponse20087);

    InlineResponse20087.initialize(this, expand, issues, maxResults, startAt, total, warningMessages);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20087, null, [{
    key: "initialize",
    value: function initialize(obj, expand, issues, maxResults, startAt, total, warningMessages) {
      obj['expand'] = expand;
      obj['issues'] = issues;
      obj['maxResults'] = maxResults;
      obj['startAt'] = startAt;
      obj['total'] = total;
      obj['warningMessages'] = warningMessages;
    }
    /**
     * Constructs a <code>InlineResponse20087</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20087} obj Optional instance to populate.
     * @return {module:model/InlineResponse20087} The populated <code>InlineResponse20087</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20087();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], [_InlineResponse20087Issues["default"]]);
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('warningMessages')) {
          obj['warningMessages'] = _ApiClient["default"].convertToType(data['warningMessages'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20087;
}();
/**
 * @member {String} expand
 */


InlineResponse20087.prototype['expand'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20087Issues>} issues
 */

InlineResponse20087.prototype['issues'] = undefined;
/**
 * @member {Number} maxResults
 */

InlineResponse20087.prototype['maxResults'] = undefined;
/**
 * @member {Number} startAt
 */

InlineResponse20087.prototype['startAt'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse20087.prototype['total'] = undefined;
/**
 * @member {Array.<Object>} warningMessages
 */

InlineResponse20087.prototype['warningMessages'] = undefined;
var _default = InlineResponse20087;
exports["default"] = _default;