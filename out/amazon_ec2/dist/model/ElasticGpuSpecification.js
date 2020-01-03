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
 * The ElasticGpuSpecification model module.
 * @module model/ElasticGpuSpecification
 * @version 1.0.0
 */
var ElasticGpuSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ElasticGpuSpecification</code>.
   * A specification for an Elastic Graphics accelerator.
   * @alias module:model/ElasticGpuSpecification
   * @param type {String} 
   */
  function ElasticGpuSpecification(type) {
    _classCallCheck(this, ElasticGpuSpecification);

    ElasticGpuSpecification.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ElasticGpuSpecification, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['Type'] = type;
    }
    /**
     * Constructs a <code>ElasticGpuSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElasticGpuSpecification} obj Optional instance to populate.
     * @return {module:model/ElasticGpuSpecification} The populated <code>ElasticGpuSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ElasticGpuSpecification();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ElasticGpuSpecification;
}();
/**
 * @member {String} Type
 */


ElasticGpuSpecification.prototype['Type'] = undefined;
var _default = ElasticGpuSpecification;
exports["default"] = _default;