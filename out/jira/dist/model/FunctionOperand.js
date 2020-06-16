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
 * The FunctionOperand model module.
 * @module model/FunctionOperand
 * @version 1.4.0
 */
var FunctionOperand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FunctionOperand</code>.
   * An operand that is a function. See [Advanced searching - functions reference](https://confluence.atlassian.com/x/dwiiLQ) for more information about JQL functions.
   * @alias module:model/FunctionOperand
   * @param _function {String} The name of the function.
   */
  function FunctionOperand(_function) {
    _classCallCheck(this, FunctionOperand);

    FunctionOperand.initialize(this, _function);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FunctionOperand, null, [{
    key: "initialize",
    value: function initialize(obj, _function) {
      obj['function'] = _function;
    }
    /**
     * Constructs a <code>FunctionOperand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionOperand} obj Optional instance to populate.
     * @return {module:model/FunctionOperand} The populated <code>FunctionOperand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FunctionOperand();

        if (data.hasOwnProperty('arguments')) {
          obj['arguments'] = _ApiClient["default"].convertToType(data['arguments'], ['String']);
        }

        if (data.hasOwnProperty('function')) {
          obj['function'] = _ApiClient["default"].convertToType(data['function'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FunctionOperand;
}();
/**
 * The list of function arguments.
 * @member {Array.<String>} arguments
 */


FunctionOperand.prototype['arguments'] = undefined;
/**
 * The name of the function.
 * @member {String} function
 */

FunctionOperand.prototype['function'] = undefined;
var _default = FunctionOperand;
exports["default"] = _default;