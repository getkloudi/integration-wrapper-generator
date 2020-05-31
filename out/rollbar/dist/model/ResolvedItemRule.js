"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResolvedItemRule model module.
 * @module model/ResolvedItemRule
 * @version 1.1.0
 */
var ResolvedItemRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResolvedItemRule</code>.
   * @alias module:model/ResolvedItemRule
   * @param trigger {String} An error/message is marked Resolved.
   */
  function ResolvedItemRule(trigger) {
    _classCallCheck(this, ResolvedItemRule);

    ResolvedItemRule.initialize(this, trigger);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResolvedItemRule, null, [{
    key: "initialize",
    value: function initialize(obj, trigger) {
      obj['trigger'] = trigger;
    }
    /**
     * Constructs a <code>ResolvedItemRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResolvedItemRule} obj Optional instance to populate.
     * @return {module:model/ResolvedItemRule} The populated <code>ResolvedItemRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResolvedItemRule();

        if (data.hasOwnProperty('trigger')) {
          obj['trigger'] = _ApiClient["default"].convertToType(data['trigger'], 'String');
        }

        if (data.hasOwnProperty('filters')) {
          obj['filters'] = _ApiClient["default"].convertToType(data['filters'], [_Filter["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ResolvedItemRule;
}();
/**
 * An error/message is marked Resolved.
 * @member {String} trigger
 * @default 'resolved_item'
 */


ResolvedItemRule.prototype['trigger'] = 'resolved_item';
/**
 * @member {Array.<module:model/Filter1>} filters
 */

ResolvedItemRule.prototype['filters'] = undefined;
var _default = ResolvedItemRule;
exports["default"] = _default;