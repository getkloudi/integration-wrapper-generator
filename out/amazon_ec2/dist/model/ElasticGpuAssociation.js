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
 * The ElasticGpuAssociation model module.
 * @module model/ElasticGpuAssociation
 * @version 1.1.0
 */
var ElasticGpuAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ElasticGpuAssociation</code>.
   * Describes the association between an instance and an Elastic Graphics accelerator.
   * @alias module:model/ElasticGpuAssociation
   */
  function ElasticGpuAssociation() {
    _classCallCheck(this, ElasticGpuAssociation);

    ElasticGpuAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ElasticGpuAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ElasticGpuAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElasticGpuAssociation} obj Optional instance to populate.
     * @return {module:model/ElasticGpuAssociation} The populated <code>ElasticGpuAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ElasticGpuAssociation();

        if (data.hasOwnProperty('ElasticGpuAssociationId')) {
          obj['ElasticGpuAssociationId'] = _ApiClient["default"].convertToType(data['ElasticGpuAssociationId'], 'String');
        }

        if (data.hasOwnProperty('ElasticGpuAssociationState')) {
          obj['ElasticGpuAssociationState'] = _ApiClient["default"].convertToType(data['ElasticGpuAssociationState'], 'String');
        }

        if (data.hasOwnProperty('ElasticGpuAssociationTime')) {
          obj['ElasticGpuAssociationTime'] = _ApiClient["default"].convertToType(data['ElasticGpuAssociationTime'], 'String');
        }

        if (data.hasOwnProperty('ElasticGpuId')) {
          obj['ElasticGpuId'] = _ApiClient["default"].convertToType(data['ElasticGpuId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ElasticGpuAssociation;
}();
/**
 * @member {String} ElasticGpuAssociationId
 */


ElasticGpuAssociation.prototype['ElasticGpuAssociationId'] = undefined;
/**
 * @member {String} ElasticGpuAssociationState
 */

ElasticGpuAssociation.prototype['ElasticGpuAssociationState'] = undefined;
/**
 * @member {String} ElasticGpuAssociationTime
 */

ElasticGpuAssociation.prototype['ElasticGpuAssociationTime'] = undefined;
/**
 * @member {String} ElasticGpuId
 */

ElasticGpuAssociation.prototype['ElasticGpuId'] = undefined;
var _default = ElasticGpuAssociation;
exports["default"] = _default;