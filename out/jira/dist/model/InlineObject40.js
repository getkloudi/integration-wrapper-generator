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
 * The InlineObject40 model module.
 * @module model/InlineObject40
 * @version 1.2.0
 */
var InlineObject40 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject40</code>.
   * @alias module:model/InlineObject40
   */
  function InlineObject40() {
    _classCallCheck(this, InlineObject40);

    InlineObject40.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject40, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject40</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject40} obj Optional instance to populate.
     * @return {module:model/InlineObject40} The populated <code>InlineObject40</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject40();

        if (data.hasOwnProperty('holder')) {
          obj['holder'] = _ApiClient["default"].convertToType(data['holder'], Object);
        }

        if (data.hasOwnProperty('permission')) {
          obj['permission'] = _ApiClient["default"].convertToType(data['permission'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject40;
}();
/**
 * The user or group being granted the permission. It consists of a type and a type-dependent parameter. See holderfor more information.
 * @member {Object} holder
 */


InlineObject40.prototype['holder'] = undefined;
/**
 * The permission to grant. Choose from the list of built-in permissions or from any custom permissions that have been added by apps. For more information about custom permissions, see the project permission and global permission module documentation.
 * @member {String} permission
 */

InlineObject40.prototype['permission'] = undefined;
var _default = InlineObject40;
exports["default"] = _default;