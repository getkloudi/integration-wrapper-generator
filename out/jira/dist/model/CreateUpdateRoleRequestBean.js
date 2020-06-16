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
 * The CreateUpdateRoleRequestBean model module.
 * @module model/CreateUpdateRoleRequestBean
 * @version 1.4.0
 */
var CreateUpdateRoleRequestBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateUpdateRoleRequestBean</code>.
   * @alias module:model/CreateUpdateRoleRequestBean
   */
  function CreateUpdateRoleRequestBean() {
    _classCallCheck(this, CreateUpdateRoleRequestBean);

    CreateUpdateRoleRequestBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateUpdateRoleRequestBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateUpdateRoleRequestBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUpdateRoleRequestBean} obj Optional instance to populate.
     * @return {module:model/CreateUpdateRoleRequestBean} The populated <code>CreateUpdateRoleRequestBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateUpdateRoleRequestBean();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateUpdateRoleRequestBean;
}();
/**
 * A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.
 * @member {String} description
 */


CreateUpdateRoleRequestBean.prototype['description'] = undefined;
/**
 * The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role.
 * @member {String} name
 */

CreateUpdateRoleRequestBean.prototype['name'] = undefined;
var _default = CreateUpdateRoleRequestBean;
exports["default"] = _default;