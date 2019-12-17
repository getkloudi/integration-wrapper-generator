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
 * The HookBody model module.
 * @module model/HookBody
 * @version 1.3.0
 */
var HookBody =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>HookBody</code>.
   * @alias module:model/HookBody
   */
  function HookBody() {
    _classCallCheck(this, HookBody);

    HookBody.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HookBody, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HookBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HookBody} obj Optional instance to populate.
     * @return {module:model/HookBody} The populated <code>HookBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HookBody();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('add_events')) {
          obj['add_events'] = _ApiClient["default"].convertToType(data['add_events'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return HookBody;
}();
/**
 * @member {Boolean} active
 */


HookBody.prototype['active'] = undefined;
/**
 * @member {Array.<String>} add_events
 */

HookBody.prototype['add_events'] = undefined;
var _default = HookBody;
exports["default"] = _default;