"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SimpleLink = _interopRequireDefault(require("./SimpleLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LinkGroup model module.
 * @module model/LinkGroup
 * @version 1.4.0
 */
var LinkGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkGroup</code>.
   * Details a link group, which defines issue operations.
   * @alias module:model/LinkGroup
   */
  function LinkGroup() {
    _classCallCheck(this, LinkGroup);

    LinkGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LinkGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkGroup} obj Optional instance to populate.
     * @return {module:model/LinkGroup} The populated <code>LinkGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkGroup();

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [LinkGroup]);
        }

        if (data.hasOwnProperty('header')) {
          obj['header'] = _SimpleLink["default"].constructFromObject(data['header']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_SimpleLink["default"]]);
        }

        if (data.hasOwnProperty('styleClass')) {
          obj['styleClass'] = _ApiClient["default"].convertToType(data['styleClass'], 'String');
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LinkGroup;
}();
/**
 * @member {Array.<module:model/LinkGroup>} groups
 */


LinkGroup.prototype['groups'] = undefined;
/**
 * @member {module:model/SimpleLink} header
 */

LinkGroup.prototype['header'] = undefined;
/**
 * @member {String} id
 */

LinkGroup.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/SimpleLink>} links
 */

LinkGroup.prototype['links'] = undefined;
/**
 * @member {String} styleClass
 */

LinkGroup.prototype['styleClass'] = undefined;
/**
 * @member {Number} weight
 */

LinkGroup.prototype['weight'] = undefined;
var _default = LinkGroup;
exports["default"] = _default;