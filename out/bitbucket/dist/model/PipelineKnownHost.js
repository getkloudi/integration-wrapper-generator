"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineKnownHostAllOf = _interopRequireDefault(require("./PipelineKnownHostAllOf"));

var _PipelineSshPublicKey = _interopRequireDefault(require("./PipelineSshPublicKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineKnownHost model module.
 * @module model/PipelineKnownHost
 * @version 1.1.2
 */
var PipelineKnownHost =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineKnownHost</code>.
   * @alias module:model/PipelineKnownHost
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineKnownHostAllOf
   * @param type {String} 
   */
  function PipelineKnownHost(type) {
    _classCallCheck(this, PipelineKnownHost);

    _ModelObject["default"].initialize(this, type);

    _PipelineKnownHostAllOf["default"].initialize(this);

    PipelineKnownHost.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineKnownHost, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineKnownHost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineKnownHost} obj Optional instance to populate.
     * @return {module:model/PipelineKnownHost} The populated <code>PipelineKnownHost</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineKnownHost();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineKnownHostAllOf["default"].constructFromObject(data, obj);

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

  return PipelineKnownHost;
}();
/**
 * The UUID identifying the known host.
 * @member {String} uuid
 */


PipelineKnownHost.prototype['uuid'] = undefined;
/**
 * The hostname of the known host.
 * @member {String} hostname
 */

PipelineKnownHost.prototype['hostname'] = undefined;
/**
 * @member {module:model/PipelineSshPublicKey} public_key
 */

PipelineKnownHost.prototype['public_key'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineKnownHostAllOf interface:

/**
 * The UUID identifying the known host.
 * @member {String} uuid
 */

_PipelineKnownHostAllOf["default"].prototype['uuid'] = undefined;
/**
 * The hostname of the known host.
 * @member {String} hostname
 */

_PipelineKnownHostAllOf["default"].prototype['hostname'] = undefined;
/**
 * @member {module:model/PipelineSshPublicKey} public_key
 */

_PipelineKnownHostAllOf["default"].prototype['public_key'] = undefined;
var _default = PipelineKnownHost;
exports["default"] = _default;