"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChangeDetails = _interopRequireDefault(require("./ChangeDetails"));

var _HistoryMetadata = _interopRequireDefault(require("./HistoryMetadata"));

var _UserDetails = _interopRequireDefault(require("./UserDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Changelog model module.
 * @module model/Changelog
 * @version 1.4.0
 */
var Changelog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Changelog</code>.
   * A changelog.
   * @alias module:model/Changelog
   */
  function Changelog() {
    _classCallCheck(this, Changelog);

    Changelog.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Changelog, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Changelog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Changelog} obj Optional instance to populate.
     * @return {module:model/Changelog} The populated <code>Changelog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Changelog();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _UserDetails["default"]);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('historyMetadata')) {
          obj['historyMetadata'] = _ApiClient["default"].convertToType(data['historyMetadata'], _HistoryMetadata["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_ChangeDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Changelog;
}();
/**
 * The user who made the change.
 * @member {module:model/UserDetails} author
 */


Changelog.prototype['author'] = undefined;
/**
 * The date on which the change took place.
 * @member {Date} created
 */

Changelog.prototype['created'] = undefined;
/**
 * The history metadata associated with the changed.
 * @member {module:model/HistoryMetadata} historyMetadata
 */

Changelog.prototype['historyMetadata'] = undefined;
/**
 * The ID of the changelog.
 * @member {String} id
 */

Changelog.prototype['id'] = undefined;
/**
 * The list of items changed.
 * @member {Array.<module:model/ChangeDetails>} items
 */

Changelog.prototype['items'] = undefined;
var _default = Changelog;
exports["default"] = _default;