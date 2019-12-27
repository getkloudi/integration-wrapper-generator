"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PipelineSshPublicKey = _interopRequireDefault(require("./PipelineSshPublicKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineKnownHostAllOf model module.
 * @module model/PipelineKnownHostAllOf
 * @version 1.1.0
 */
var PipelineKnownHostAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineKnownHostAllOf</code>.
   * A Pipelines known host.
   * @alias module:model/PipelineKnownHostAllOf
   */
  function PipelineKnownHostAllOf() {
    _classCallCheck(this, PipelineKnownHostAllOf);

    PipelineKnownHostAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineKnownHostAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineKnownHostAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineKnownHostAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineKnownHostAllOf} The populated <code>PipelineKnownHostAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineKnownHostAllOf();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _PipelineSshPublicKey["default"].constructFromObject(data['public_key']);
        }
      }

      return obj;
    }
  }]);

  return PipelineKnownHostAllOf;
}();
/**
 * The UUID identifying the known host.
 * @member {String} uuid
 */


PipelineKnownHostAllOf.prototype['uuid'] = undefined;
/**
 * The hostname of the known host.
 * @member {String} hostname
 */

PipelineKnownHostAllOf.prototype['hostname'] = undefined;
/**
 * @member {module:model/PipelineSshPublicKey} public_key
 */

PipelineKnownHostAllOf.prototype['public_key'] = undefined;
var _default = PipelineKnownHostAllOf;
exports["default"] = _default;