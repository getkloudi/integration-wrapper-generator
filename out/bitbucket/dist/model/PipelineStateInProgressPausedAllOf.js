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
 * The PipelineStateInProgressPausedAllOf model module.
 * @module model/PipelineStateInProgressPausedAllOf
 * @version 1.1.2
 */
var PipelineStateInProgressPausedAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineStateInProgressPausedAllOf</code>.
   * A Bitbucket Pipelines PAUSED stage of a pipeline that is in progress.
   * @alias module:model/PipelineStateInProgressPausedAllOf
   */
  function PipelineStateInProgressPausedAllOf() {
    _classCallCheck(this, PipelineStateInProgressPausedAllOf);

    PipelineStateInProgressPausedAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineStateInProgressPausedAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineStateInProgressPausedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineStateInProgressPausedAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineStateInProgressPausedAllOf} The populated <code>PipelineStateInProgressPausedAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineStateInProgressPausedAllOf();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineStateInProgressPausedAllOf;
}();
/**
 * The name of the stage (PAUSED)
 * @member {module:model/PipelineStateInProgressPausedAllOf.NameEnum} name
 */


PipelineStateInProgressPausedAllOf.prototype['name'] = undefined;
/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */

PipelineStateInProgressPausedAllOf['NameEnum'] = {
  /**
   * value: "PAUSED"
   * @const
   */
  "PAUSED": "PAUSED"
};
var _default = PipelineStateInProgressPausedAllOf;
exports["default"] = _default;