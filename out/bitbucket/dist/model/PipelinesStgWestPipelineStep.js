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
 * The PipelinesStgWestPipelineStep model module.
 * @module model/PipelinesStgWestPipelineStep
 * @version 1.1.0
 */
var PipelinesStgWestPipelineStep =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelinesStgWestPipelineStep</code>.
   * @alias module:model/PipelinesStgWestPipelineStep
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @param type {String} 
   */
  function PipelinesStgWestPipelineStep(type) {
    _classCallCheck(this, PipelinesStgWestPipelineStep);

    _ModelObject["default"].initialize(this, type);

    PipelinesStgWestPipelineStep.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelinesStgWestPipelineStep, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelinesStgWestPipelineStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelinesStgWestPipelineStep} obj Optional instance to populate.
     * @return {module:model/PipelinesStgWestPipelineStep} The populated <code>PipelinesStgWestPipelineStep</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelinesStgWestPipelineStep();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return PipelinesStgWestPipelineStep;
}(); // Implement ModelObject interface:

/**
 * @member {String} type
 */


_ModelObject["default"].prototype['type'] = undefined;
var _default = PipelinesStgWestPipelineStep;
exports["default"] = _default;