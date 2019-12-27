"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineTrigger = _interopRequireDefault(require("./PipelineTrigger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineTriggerManual model module.
 * @module model/PipelineTriggerManual
 * @version 1.1.2
 */
var PipelineTriggerManual =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineTriggerManual</code>.
   * @alias module:model/PipelineTriggerManual
   * @extends module:model/PipelineTrigger
   * @implements module:model/PipelineTrigger
   * @param type {String} 
   */
  function PipelineTriggerManual(type) {
    _classCallCheck(this, PipelineTriggerManual);

    _PipelineTrigger["default"].initialize(this, type);

    PipelineTriggerManual.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineTriggerManual, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineTriggerManual</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineTriggerManual} obj Optional instance to populate.
     * @return {module:model/PipelineTriggerManual} The populated <code>PipelineTriggerManual</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineTriggerManual();

        _PipelineTrigger["default"].constructFromObject(data, obj);

        _PipelineTrigger["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return PipelineTriggerManual;
}(); // Implement PipelineTrigger interface:

/**
 * @member {String} type
 */


_PipelineTrigger["default"].prototype['type'] = undefined;
var _default = PipelineTriggerManual;
exports["default"] = _default;