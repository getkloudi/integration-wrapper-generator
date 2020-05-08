"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20037FieldsWorklog = _interopRequireDefault(require("./InlineResponse20037FieldsWorklog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20048 model module.
 * @module model/InlineResponse20048
 * @version 1.1.0
 */
var InlineResponse20048 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20048</code>.
   * 
   * @alias module:model/InlineResponse20048
   * @param maxResults {Number} 
   * @param startAt {Number} 
   * @param total {Number} 
   * @param worklogs {Array.<module:model/InlineResponse20037FieldsWorklog>} 
   */
  function InlineResponse20048(maxResults, startAt, total, worklogs) {
    _classCallCheck(this, InlineResponse20048);

    InlineResponse20048.initialize(this, maxResults, startAt, total, worklogs);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20048, null, [{
    key: "initialize",
    value: function initialize(obj, maxResults, startAt, total, worklogs) {
      obj['maxResults'] = maxResults;
      obj['startAt'] = startAt;
      obj['total'] = total;
      obj['worklogs'] = worklogs;
    }
    /**
     * Constructs a <code>InlineResponse20048</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20048} obj Optional instance to populate.
     * @return {module:model/InlineResponse20048} The populated <code>InlineResponse20048</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20048();

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('worklogs')) {
          obj['worklogs'] = _ApiClient["default"].convertToType(data['worklogs'], [_InlineResponse20037FieldsWorklog["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20048;
}();
/**
 * @member {Number} maxResults
 */


InlineResponse20048.prototype['maxResults'] = undefined;
/**
 * @member {Number} startAt
 */

InlineResponse20048.prototype['startAt'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse20048.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20037FieldsWorklog>} worklogs
 */

InlineResponse20048.prototype['worklogs'] = undefined;
var _default = InlineResponse20048;
exports["default"] = _default;