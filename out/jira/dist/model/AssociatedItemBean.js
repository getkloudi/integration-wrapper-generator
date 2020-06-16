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
 * The AssociatedItemBean model module.
 * @module model/AssociatedItemBean
 * @version 1.4.0
 */
var AssociatedItemBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AssociatedItemBean</code>.
   * Details of an item associated with the changed record.
   * @alias module:model/AssociatedItemBean
   */
  function AssociatedItemBean() {
    _classCallCheck(this, AssociatedItemBean);

    AssociatedItemBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociatedItemBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AssociatedItemBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociatedItemBean} obj Optional instance to populate.
     * @return {module:model/AssociatedItemBean} The populated <code>AssociatedItemBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociatedItemBean();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('parentId')) {
          obj['parentId'] = _ApiClient["default"].convertToType(data['parentId'], 'String');
        }

        if (data.hasOwnProperty('parentName')) {
          obj['parentName'] = _ApiClient["default"].convertToType(data['parentName'], 'String');
        }

        if (data.hasOwnProperty('typeName')) {
          obj['typeName'] = _ApiClient["default"].convertToType(data['typeName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssociatedItemBean;
}();
/**
 * The ID of the associated record.
 * @member {String} id
 */


AssociatedItemBean.prototype['id'] = undefined;
/**
 * The name of the associated record.
 * @member {String} name
 */

AssociatedItemBean.prototype['name'] = undefined;
/**
 * The ID of the associated parent record.
 * @member {String} parentId
 */

AssociatedItemBean.prototype['parentId'] = undefined;
/**
 * The name of the associated parent record.
 * @member {String} parentName
 */

AssociatedItemBean.prototype['parentName'] = undefined;
/**
 * The type of the associated record.
 * @member {String} typeName
 */

AssociatedItemBean.prototype['typeName'] = undefined;
var _default = AssociatedItemBean;
exports["default"] = _default;