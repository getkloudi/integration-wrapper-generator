"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueTransition = _interopRequireDefault(require("./IssueTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Transitions model module.
 * @module model/Transitions
 * @version 1.4.0
 */
var Transitions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Transitions</code>.
   * List of issue transitions.
   * @alias module:model/Transitions
   */
  function Transitions() {
    _classCallCheck(this, Transitions);

    Transitions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Transitions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Transitions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transitions} obj Optional instance to populate.
     * @return {module:model/Transitions} The populated <code>Transitions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Transitions();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('transitions')) {
          obj['transitions'] = _ApiClient["default"].convertToType(data['transitions'], [_IssueTransition["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Transitions;
}();
/**
 * Expand options that include additional transitions details in the response.
 * @member {String} expand
 */


Transitions.prototype['expand'] = undefined;
/**
 * List of issue transitions.
 * @member {Array.<module:model/IssueTransition>} transitions
 */

Transitions.prototype['transitions'] = undefined;
var _default = Transitions;
exports["default"] = _default;