"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20045Transitions = _interopRequireDefault(require("./InlineResponse20045Transitions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20045 model module.
 * @module model/InlineResponse20045
 * @version 1.3.1
 */
var InlineResponse20045 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20045</code>.
   * 
   * @alias module:model/InlineResponse20045
   * @param transitions {Array.<module:model/InlineResponse20045Transitions>} 
   */
  function InlineResponse20045(transitions) {
    _classCallCheck(this, InlineResponse20045);

    InlineResponse20045.initialize(this, transitions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20045, null, [{
    key: "initialize",
    value: function initialize(obj, transitions) {
      obj['transitions'] = transitions;
    }
    /**
     * Constructs a <code>InlineResponse20045</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20045} obj Optional instance to populate.
     * @return {module:model/InlineResponse20045} The populated <code>InlineResponse20045</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20045();

        if (data.hasOwnProperty('transitions')) {
          obj['transitions'] = _ApiClient["default"].convertToType(data['transitions'], [_InlineResponse20045Transitions["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20045;
}();
/**
 * @member {Array.<module:model/InlineResponse20045Transitions>} transitions
 */


InlineResponse20045.prototype['transitions'] = undefined;
var _default = InlineResponse20045;
exports["default"] = _default;