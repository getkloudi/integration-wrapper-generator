"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelinesConfigAllOf = _interopRequireDefault(require("./PipelinesConfigAllOf"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelinesConfig model module.
 * @module model/PipelinesConfig
 * @version 1.1.0
 */
var PipelinesConfig =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelinesConfig</code>.
   * @alias module:model/PipelinesConfig
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelinesConfigAllOf
   * @param type {String} 
   */
  function PipelinesConfig(type) {
    _classCallCheck(this, PipelinesConfig);

    _ModelObject["default"].initialize(this, type);

    _PipelinesConfigAllOf["default"].initialize(this);

    PipelinesConfig.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelinesConfig, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelinesConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelinesConfig} obj Optional instance to populate.
     * @return {module:model/PipelinesConfig} The populated <code>PipelinesConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelinesConfig();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelinesConfigAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }
      }

      return obj;
    }
  }]);

  return PipelinesConfig;
}();
/**
 * Whether Pipelines is enabled for the repository.
 * @member {Boolean} enabled
 */


PipelinesConfig.prototype['enabled'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

PipelinesConfig.prototype['repository'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelinesConfigAllOf interface:

/**
 * Whether Pipelines is enabled for the repository.
 * @member {Boolean} enabled
 */

_PipelinesConfigAllOf["default"].prototype['enabled'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

_PipelinesConfigAllOf["default"].prototype['repository'] = undefined;
var _default = PipelinesConfig;
exports["default"] = _default;