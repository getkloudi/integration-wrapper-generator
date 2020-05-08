"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20018Dashboards = _interopRequireDefault(require("./InlineResponse20018Dashboards"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20018 model module.
 * @module model/InlineResponse20018
 * @version 1.0.0
 */
var InlineResponse20018 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20018</code>.
   * 
   * @alias module:model/InlineResponse20018
   * @param dashboards {Array.<module:model/InlineResponse20018Dashboards>} 
   * @param maxResults {Number} 
   * @param next {String} 
   * @param prev {String} 
   * @param startAt {Number} 
   * @param total {Number} 
   */
  function InlineResponse20018(dashboards, maxResults, next, prev, startAt, total) {
    _classCallCheck(this, InlineResponse20018);

    InlineResponse20018.initialize(this, dashboards, maxResults, next, prev, startAt, total);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20018, null, [{
    key: "initialize",
    value: function initialize(obj, dashboards, maxResults, next, prev, startAt, total) {
      obj['dashboards'] = dashboards;
      obj['maxResults'] = maxResults;
      obj['next'] = next;
      obj['prev'] = prev;
      obj['startAt'] = startAt;
      obj['total'] = total;
    }
    /**
     * Constructs a <code>InlineResponse20018</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018} The populated <code>InlineResponse20018</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20018();

        if (data.hasOwnProperty('dashboards')) {
          obj['dashboards'] = _ApiClient["default"].convertToType(data['dashboards'], [_InlineResponse20018Dashboards["default"]]);
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('prev')) {
          obj['prev'] = _ApiClient["default"].convertToType(data['prev'], 'String');
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20018;
}();
/**
 * @member {Array.<module:model/InlineResponse20018Dashboards>} dashboards
 */


InlineResponse20018.prototype['dashboards'] = undefined;
/**
 * @member {Number} maxResults
 */

InlineResponse20018.prototype['maxResults'] = undefined;
/**
 * @member {String} next
 */

InlineResponse20018.prototype['next'] = undefined;
/**
 * @member {String} prev
 */

InlineResponse20018.prototype['prev'] = undefined;
/**
 * @member {Number} startAt
 */

InlineResponse20018.prototype['startAt'] = undefined;
/**
 * @member {Number} total
 */

InlineResponse20018.prototype['total'] = undefined;
var _default = InlineResponse20018;
exports["default"] = _default;