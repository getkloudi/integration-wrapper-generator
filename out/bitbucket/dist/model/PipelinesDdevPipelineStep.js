"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelinesDdevPipelineStep model module.
 * @module model/PipelinesDdevPipelineStep
 * @version 1.2.0
 */
var PipelinesDdevPipelineStep = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelinesDdevPipelineStep</code>.
   * @alias module:model/PipelinesDdevPipelineStep
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @param type {String} 
   */
  function PipelinesDdevPipelineStep(type) {
    _classCallCheck(this, PipelinesDdevPipelineStep);

    _ModelObject["default"].initialize(this, type);

    PipelinesDdevPipelineStep.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelinesDdevPipelineStep, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelinesDdevPipelineStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelinesDdevPipelineStep} obj Optional instance to populate.
     * @return {module:model/PipelinesDdevPipelineStep} The populated <code>PipelinesDdevPipelineStep</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelinesDdevPipelineStep();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return PipelinesDdevPipelineStep;
}(); // Implement ModelObject interface:

/**
 * @member {String} type
 */


_ModelObject["default"].prototype['type'] = undefined;
var _default = PipelinesDdevPipelineStep;
exports["default"] = _default;