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
 * The ChangedValueBean model module.
 * @module model/ChangedValueBean
 * @version 1.4.0
 */
var ChangedValueBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChangedValueBean</code>.
   * Details of names changed in the record event.
   * @alias module:model/ChangedValueBean
   */
  function ChangedValueBean() {
    _classCallCheck(this, ChangedValueBean);

    ChangedValueBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChangedValueBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChangedValueBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangedValueBean} obj Optional instance to populate.
     * @return {module:model/ChangedValueBean} The populated <code>ChangedValueBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChangedValueBean();

        if (data.hasOwnProperty('changedFrom')) {
          obj['changedFrom'] = _ApiClient["default"].convertToType(data['changedFrom'], 'String');
        }

        if (data.hasOwnProperty('changedTo')) {
          obj['changedTo'] = _ApiClient["default"].convertToType(data['changedTo'], 'String');
        }

        if (data.hasOwnProperty('fieldName')) {
          obj['fieldName'] = _ApiClient["default"].convertToType(data['fieldName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChangedValueBean;
}();
/**
 * The value of the field before the change.
 * @member {String} changedFrom
 */


ChangedValueBean.prototype['changedFrom'] = undefined;
/**
 * The value of the field after the change.
 * @member {String} changedTo
 */

ChangedValueBean.prototype['changedTo'] = undefined;
/**
 * The name of the field changed.
 * @member {String} fieldName
 */

ChangedValueBean.prototype['fieldName'] = undefined;
var _default = ChangedValueBean;
exports["default"] = _default;