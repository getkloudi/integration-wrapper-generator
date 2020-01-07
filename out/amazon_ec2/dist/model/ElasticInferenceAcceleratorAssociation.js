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
 * The ElasticInferenceAcceleratorAssociation model module.
 * @module model/ElasticInferenceAcceleratorAssociation
 * @version 1.1.0
 */
var ElasticInferenceAcceleratorAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ElasticInferenceAcceleratorAssociation</code>.
   *  Describes the association between an instance and an elastic inference accelerator. 
   * @alias module:model/ElasticInferenceAcceleratorAssociation
   */
  function ElasticInferenceAcceleratorAssociation() {
    _classCallCheck(this, ElasticInferenceAcceleratorAssociation);

    ElasticInferenceAcceleratorAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ElasticInferenceAcceleratorAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ElasticInferenceAcceleratorAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElasticInferenceAcceleratorAssociation} obj Optional instance to populate.
     * @return {module:model/ElasticInferenceAcceleratorAssociation} The populated <code>ElasticInferenceAcceleratorAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ElasticInferenceAcceleratorAssociation();

        if (data.hasOwnProperty('ElasticInferenceAcceleratorArn')) {
          obj['ElasticInferenceAcceleratorArn'] = _ApiClient["default"].convertToType(data['ElasticInferenceAcceleratorArn'], 'String');
        }

        if (data.hasOwnProperty('ElasticInferenceAcceleratorAssociationId')) {
          obj['ElasticInferenceAcceleratorAssociationId'] = _ApiClient["default"].convertToType(data['ElasticInferenceAcceleratorAssociationId'], 'String');
        }

        if (data.hasOwnProperty('ElasticInferenceAcceleratorAssociationState')) {
          obj['ElasticInferenceAcceleratorAssociationState'] = _ApiClient["default"].convertToType(data['ElasticInferenceAcceleratorAssociationState'], 'String');
        }

        if (data.hasOwnProperty('ElasticInferenceAcceleratorAssociationTime')) {
          obj['ElasticInferenceAcceleratorAssociationTime'] = _ApiClient["default"].convertToType(data['ElasticInferenceAcceleratorAssociationTime'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return ElasticInferenceAcceleratorAssociation;
}();
/**
 * @member {String} ElasticInferenceAcceleratorArn
 */


ElasticInferenceAcceleratorAssociation.prototype['ElasticInferenceAcceleratorArn'] = undefined;
/**
 * @member {String} ElasticInferenceAcceleratorAssociationId
 */

ElasticInferenceAcceleratorAssociation.prototype['ElasticInferenceAcceleratorAssociationId'] = undefined;
/**
 * @member {String} ElasticInferenceAcceleratorAssociationState
 */

ElasticInferenceAcceleratorAssociation.prototype['ElasticInferenceAcceleratorAssociationState'] = undefined;
/**
 * @member {Date} ElasticInferenceAcceleratorAssociationTime
 */

ElasticInferenceAcceleratorAssociation.prototype['ElasticInferenceAcceleratorAssociationTime'] = undefined;
var _default = ElasticInferenceAcceleratorAssociation;
exports["default"] = _default;