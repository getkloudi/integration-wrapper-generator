"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelinesConfigAllOf model module.
 * @module model/PipelinesConfigAllOf
 * @version 1.0.0
 */
var PipelinesConfigAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelinesConfigAllOf</code>.
   * The Pipelines configuration for a repository.
   * @alias module:model/PipelinesConfigAllOf
   */
  function PipelinesConfigAllOf() {
    _classCallCheck(this, PipelinesConfigAllOf);

    PipelinesConfigAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelinesConfigAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelinesConfigAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelinesConfigAllOf} obj Optional instance to populate.
     * @return {module:model/PipelinesConfigAllOf} The populated <code>PipelinesConfigAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelinesConfigAllOf();

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

  return PipelinesConfigAllOf;
}();
/**
 * Whether Pipelines is enabled for the repository.
 * @member {Boolean} enabled
 */


PipelinesConfigAllOf.prototype['enabled'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

PipelinesConfigAllOf.prototype['repository'] = undefined;
var _default = PipelinesConfigAllOf;
exports["default"] = _default;