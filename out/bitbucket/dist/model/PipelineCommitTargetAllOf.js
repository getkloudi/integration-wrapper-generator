"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _PipelineSelector = _interopRequireDefault(require("./PipelineSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineCommitTargetAllOf model module.
 * @module model/PipelineCommitTargetAllOf
 * @version 1.2.0
 */
var PipelineCommitTargetAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineCommitTargetAllOf</code>.
   * A Bitbucket Pipelines commit target.
   * @alias module:model/PipelineCommitTargetAllOf
   */
  function PipelineCommitTargetAllOf() {
    _classCallCheck(this, PipelineCommitTargetAllOf);

    PipelineCommitTargetAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineCommitTargetAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineCommitTargetAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineCommitTargetAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineCommitTargetAllOf} The populated <code>PipelineCommitTargetAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineCommitTargetAllOf();

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _Commit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('selector')) {
          obj['selector'] = _PipelineSelector["default"].constructFromObject(data['selector']);
        }
      }

      return obj;
    }
  }]);

  return PipelineCommitTargetAllOf;
}();
/**
 * @member {module:model/Commit} commit
 */


PipelineCommitTargetAllOf.prototype['commit'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */

PipelineCommitTargetAllOf.prototype['selector'] = undefined;
var _default = PipelineCommitTargetAllOf;
exports["default"] = _default;