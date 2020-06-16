"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupLabel = _interopRequireDefault(require("./GroupLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FoundGroup model module.
 * @module model/FoundGroup
 * @version 1.4.0
 */
var FoundGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FoundGroup</code>.
   * A group found in a search.
   * @alias module:model/FoundGroup
   */
  function FoundGroup() {
    _classCallCheck(this, FoundGroup);

    FoundGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FoundGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FoundGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FoundGroup} obj Optional instance to populate.
     * @return {module:model/FoundGroup} The populated <code>FoundGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FoundGroup();

        if (data.hasOwnProperty('groupId')) {
          obj['groupId'] = _ApiClient["default"].convertToType(data['groupId'], 'String');
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], [_GroupLabel["default"]]);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FoundGroup;
}();
/**
 * The ID of the group, if available, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*.
 * @member {String} groupId
 */


FoundGroup.prototype['groupId'] = undefined;
/**
 * The group name with the matched query string highlighted with the HTML bold tag.
 * @member {String} html
 */

FoundGroup.prototype['html'] = undefined;
/**
 * @member {Array.<module:model/GroupLabel>} labels
 */

FoundGroup.prototype['labels'] = undefined;
/**
 * The name of the group.
 * @member {String} name
 */

FoundGroup.prototype['name'] = undefined;
var _default = FoundGroup;
exports["default"] = _default;