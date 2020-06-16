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
 * The VersionMoveBean model module.
 * @module model/VersionMoveBean
 * @version 1.4.0
 */
var VersionMoveBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionMoveBean</code>.
   * @alias module:model/VersionMoveBean
   */
  function VersionMoveBean() {
    _classCallCheck(this, VersionMoveBean);

    VersionMoveBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionMoveBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionMoveBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionMoveBean} obj Optional instance to populate.
     * @return {module:model/VersionMoveBean} The populated <code>VersionMoveBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionMoveBean();

        if (data.hasOwnProperty('after')) {
          obj['after'] = _ApiClient["default"].convertToType(data['after'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VersionMoveBean;
}();
/**
 * The URL (self link) of the version after which to place the moved version. Cannot be used with `position`.
 * @member {String} after
 */


VersionMoveBean.prototype['after'] = undefined;
/**
 * An absolute position in which to place the moved version. Cannot be used with `after`.
 * @member {module:model/VersionMoveBean.PositionEnum} position
 */

VersionMoveBean.prototype['position'] = undefined;
/**
 * Allowed values for the <code>position</code> property.
 * @enum {String}
 * @readonly
 */

VersionMoveBean['PositionEnum'] = {
  /**
   * value: "Earlier"
   * @const
   */
  "Earlier": "Earlier",

  /**
   * value: "Later"
   * @const
   */
  "Later": "Later",

  /**
   * value: "First"
   * @const
   */
  "First": "First",

  /**
   * value: "Last"
   * @const
   */
  "Last": "Last"
};
var _default = VersionMoveBean;
exports["default"] = _default;