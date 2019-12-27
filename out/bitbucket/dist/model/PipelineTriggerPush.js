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
 * The PipelineTriggerPush model module.
 * @module model/PipelineTriggerPush
 * @version 1.1.2
 */
var PipelineTriggerPush =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineTriggerPush</code>.
   * @alias module:model/PipelineTriggerPush
   * @extends module:model/PipelineTrigger
   * @implements module:model/PipelineTrigger
   * @param type {String} 
   */
  function PipelineTriggerPush(type) {
    _classCallCheck(this, PipelineTriggerPush);

    _PipelineTrigger["default"].initialize(this, type);

    PipelineTriggerPush.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineTriggerPush, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineTriggerPush</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineTriggerPush} obj Optional instance to populate.
     * @return {module:model/PipelineTriggerPush} The populated <code>PipelineTriggerPush</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineTriggerPush();

        _PipelineTrigger["default"].constructFromObject(data, obj);

        _PipelineTrigger["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return PipelineTriggerPush;
}(); // Implement PipelineTrigger interface:

/**
 * @member {String} type
 */


_PipelineTrigger["default"].prototype['type'] = undefined;
var _default = PipelineTriggerPush;
exports["default"] = _default;