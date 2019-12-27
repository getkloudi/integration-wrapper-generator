"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineLogRange = _interopRequireDefault(require("./PipelineLogRange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineCommand model module.
 * @module model/PipelineCommand
 * @version 1.1.0
 */
var PipelineCommand =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineCommand</code>.
   * An executable pipeline command.
   * @alias module:model/PipelineCommand
   */
  function PipelineCommand() {
    _classCallCheck(this, PipelineCommand);

    PipelineCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineCommand} obj Optional instance to populate.
     * @return {module:model/PipelineCommand} The populated <code>PipelineCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineCommand();

        if (data.hasOwnProperty('command')) {
          obj['command'] = _ApiClient["default"].convertToType(data['command'], 'String');
        }

        if (data.hasOwnProperty('log_range')) {
          obj['log_range'] = _PipelineLogRange["default"].constructFromObject(data['log_range']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineCommand;
}();
/**
 * The executable command.
 * @member {String} command
 */


PipelineCommand.prototype['command'] = undefined;
/**
 * @member {module:model/PipelineLogRange} log_range
 */

PipelineCommand.prototype['log_range'] = undefined;
/**
 * The name of the command.
 * @member {String} name
 */

PipelineCommand.prototype['name'] = undefined;
var _default = PipelineCommand;
exports["default"] = _default;