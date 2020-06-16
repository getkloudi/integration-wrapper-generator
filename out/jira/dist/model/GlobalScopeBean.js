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
 * The GlobalScopeBean model module.
 * @module model/GlobalScopeBean
 * @version 1.4.0
 */
var GlobalScopeBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GlobalScopeBean</code>.
   * @alias module:model/GlobalScopeBean
   */
  function GlobalScopeBean() {
    _classCallCheck(this, GlobalScopeBean);

    GlobalScopeBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GlobalScopeBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GlobalScopeBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalScopeBean} obj Optional instance to populate.
     * @return {module:model/GlobalScopeBean} The populated <code>GlobalScopeBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GlobalScopeBean();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return GlobalScopeBean;
}();
/**
 * Defines the behavior of the option in the global context.If notSelectable is set, the option cannot be set as the field's value. This is useful for archiving an option that has previously been selected but shouldn't be used anymore.If defaultValue is set, the option is selected by default.
 * @member {Array.<module:model/GlobalScopeBean.AttributesEnum>} attributes
 */


GlobalScopeBean.prototype['attributes'] = undefined;
/**
 * Allowed values for the <code>attributes</code> property.
 * @enum {String}
 * @readonly
 */

GlobalScopeBean['AttributesEnum'] = {
  /**
   * value: "notSelectable"
   * @const
   */
  "notSelectable": "notSelectable",

  /**
   * value: "defaultValue"
   * @const
   */
  "defaultValue": "defaultValue"
};
var _default = GlobalScopeBean;
exports["default"] = _default;