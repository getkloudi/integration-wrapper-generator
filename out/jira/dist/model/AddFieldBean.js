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
 * The AddFieldBean model module.
 * @module model/AddFieldBean
 * @version 1.4.0
 */
var AddFieldBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddFieldBean</code>.
   * @alias module:model/AddFieldBean
   * @param fieldId {String} The ID of the field to add.
   */
  function AddFieldBean(fieldId) {
    _classCallCheck(this, AddFieldBean);

    AddFieldBean.initialize(this, fieldId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddFieldBean, null, [{
    key: "initialize",
    value: function initialize(obj, fieldId) {
      obj['fieldId'] = fieldId;
    }
    /**
     * Constructs a <code>AddFieldBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFieldBean} obj Optional instance to populate.
     * @return {module:model/AddFieldBean} The populated <code>AddFieldBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddFieldBean();

        if (data.hasOwnProperty('fieldId')) {
          obj['fieldId'] = _ApiClient["default"].convertToType(data['fieldId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddFieldBean;
}();
/**
 * The ID of the field to add.
 * @member {String} fieldId
 */


AddFieldBean.prototype['fieldId'] = undefined;
var _default = AddFieldBean;
exports["default"] = _default;