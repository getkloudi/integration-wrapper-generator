"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _PipelineCommitTargetAllOf = _interopRequireDefault(require("./PipelineCommitTargetAllOf"));

var _PipelineSelector = _interopRequireDefault(require("./PipelineSelector"));

var _PipelineTarget = _interopRequireDefault(require("./PipelineTarget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineCommitTarget model module.
 * @module model/PipelineCommitTarget
 * @version 1.2.0
 */
var PipelineCommitTarget = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PipelineCommitTarget</code>.
   * @alias module:model/PipelineCommitTarget
   * @implements module:model/PipelineTarget
   * @implements module:model/PipelineCommitTargetAllOf
   * @param type {String} 
   */
  function PipelineCommitTarget(type) {
    _classCallCheck(this, PipelineCommitTarget);

    _PipelineTarget["default"].initialize(this, type);

    _PipelineCommitTargetAllOf["default"].initialize(this);

    PipelineCommitTarget.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineCommitTarget, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PipelineCommitTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineCommitTarget} obj Optional instance to populate.
     * @return {module:model/PipelineCommitTarget} The populated <code>PipelineCommitTarget</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineCommitTarget();

        _PipelineTarget["default"].constructFromObject(data, obj);

        _PipelineCommitTargetAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

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

  return PipelineCommitTarget;
}();
/**
 * @member {String} type
 */


PipelineCommitTarget.prototype['type'] = undefined;
/**
 * @member {module:model/Commit} commit
 */

PipelineCommitTarget.prototype['commit'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */

PipelineCommitTarget.prototype['selector'] = undefined; // Implement PipelineTarget interface:

/**
 * @member {String} type
 */

_PipelineTarget["default"].prototype['type'] = undefined; // Implement PipelineCommitTargetAllOf interface:

/**
 * @member {module:model/Commit} commit
 */

_PipelineCommitTargetAllOf["default"].prototype['commit'] = undefined;
/**
 * @member {module:model/PipelineSelector} selector
 */

_PipelineCommitTargetAllOf["default"].prototype['selector'] = undefined;
var _default = PipelineCommitTarget;
exports["default"] = _default;