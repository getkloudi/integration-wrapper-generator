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
 * The GroupName model module.
 * @module model/GroupName
 * @version 1.4.0
 */
var GroupName = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GroupName</code>.
   * Details about a group name.
   * @alias module:model/GroupName
   */
  function GroupName() {
    _classCallCheck(this, GroupName);

    GroupName.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GroupName, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GroupName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupName} obj Optional instance to populate.
     * @return {module:model/GroupName} The populated <code>GroupName</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupName();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GroupName;
}();
/**
 * The name of group.
 * @member {String} name
 */


GroupName.prototype['name'] = undefined;
/**
 * The URL for these group details.
 * @member {String} self
 */

GroupName.prototype['self'] = undefined;
var _default = GroupName;
exports["default"] = _default;