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
 * The ScreenTypeIDsBean model module.
 * @module model/ScreenTypeIDsBean
 * @version 1.4.0
 */
var ScreenTypeIDsBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenTypeIDsBean</code>.
   * IDs of the screens for the various screen types associated with the screen scheme.
   * @alias module:model/ScreenTypeIDsBean
   * @param create {Number} The ID of the create screen.
   * @param edit {Number} The ID of the edit screen.
   * @param view {Number} The ID of the view screen.
   */
  function ScreenTypeIDsBean(create, edit, view) {
    _classCallCheck(this, ScreenTypeIDsBean);

    ScreenTypeIDsBean.initialize(this, create, edit, view);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenTypeIDsBean, null, [{
    key: "initialize",
    value: function initialize(obj, create, edit, view) {
      obj['create'] = create;
      obj['edit'] = edit;
      obj['view'] = view;
    }
    /**
     * Constructs a <code>ScreenTypeIDsBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScreenTypeIDsBean} obj Optional instance to populate.
     * @return {module:model/ScreenTypeIDsBean} The populated <code>ScreenTypeIDsBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenTypeIDsBean();

        if (data.hasOwnProperty('create')) {
          obj['create'] = _ApiClient["default"].convertToType(data['create'], 'Number');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Number');
        }

        if (data.hasOwnProperty('edit')) {
          obj['edit'] = _ApiClient["default"].convertToType(data['edit'], 'Number');
        }

        if (data.hasOwnProperty('view')) {
          obj['view'] = _ApiClient["default"].convertToType(data['view'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScreenTypeIDsBean;
}();
/**
 * The ID of the create screen.
 * @member {Number} create
 */


ScreenTypeIDsBean.prototype['create'] = undefined;
/**
 * The ID of the default screen.
 * @member {Number} default
 */

ScreenTypeIDsBean.prototype['default'] = undefined;
/**
 * The ID of the edit screen.
 * @member {Number} edit
 */

ScreenTypeIDsBean.prototype['edit'] = undefined;
/**
 * The ID of the view screen.
 * @member {Number} view
 */

ScreenTypeIDsBean.prototype['view'] = undefined;
var _default = ScreenTypeIDsBean;
exports["default"] = _default;