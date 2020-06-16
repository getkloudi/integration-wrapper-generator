"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FoundGroup = _interopRequireDefault(require("./FoundGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FoundGroups model module.
 * @module model/FoundGroups
 * @version 1.4.0
 */
var FoundGroups = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FoundGroups</code>.
   * The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups.
   * @alias module:model/FoundGroups
   */
  function FoundGroups() {
    _classCallCheck(this, FoundGroups);

    FoundGroups.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FoundGroups, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FoundGroups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FoundGroups} obj Optional instance to populate.
     * @return {module:model/FoundGroups} The populated <code>FoundGroups</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FoundGroups();

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_FoundGroup["default"]]);
        }

        if (data.hasOwnProperty('header')) {
          obj['header'] = _ApiClient["default"].convertToType(data['header'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return FoundGroups;
}();
/**
 * @member {Array.<module:model/FoundGroup>} groups
 */


FoundGroups.prototype['groups'] = undefined;
/**
 * Header text indicating the number of groups in the response and the total number of groups found in the search.
 * @member {String} header
 */

FoundGroups.prototype['header'] = undefined;
/**
 * The total number of groups found in the search.
 * @member {Number} total
 */

FoundGroups.prototype['total'] = undefined;
var _default = FoundGroups;
exports["default"] = _default;