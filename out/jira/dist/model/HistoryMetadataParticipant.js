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
 * The HistoryMetadataParticipant model module.
 * @module model/HistoryMetadataParticipant
 * @version 1.4.0
 */
var HistoryMetadataParticipant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoryMetadataParticipant</code>.
   * Details of user or system associated with a issue history metadata item.
   * @alias module:model/HistoryMetadataParticipant
   */
  function HistoryMetadataParticipant() {
    _classCallCheck(this, HistoryMetadataParticipant);

    HistoryMetadataParticipant.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoryMetadataParticipant, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoryMetadataParticipant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoryMetadataParticipant} obj Optional instance to populate.
     * @return {module:model/HistoryMetadataParticipant} The populated <code>HistoryMetadataParticipant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoryMetadataParticipant();

        if (data.hasOwnProperty('avatarUrl')) {
          obj['avatarUrl'] = _ApiClient["default"].convertToType(data['avatarUrl'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('displayNameKey')) {
          obj['displayNameKey'] = _ApiClient["default"].convertToType(data['displayNameKey'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HistoryMetadataParticipant;
}();
/**
 * The URL to an avatar for the user or system associated with a history record.
 * @member {String} avatarUrl
 */


HistoryMetadataParticipant.prototype['avatarUrl'] = undefined;
/**
 * The display name of the user or system associated with a history record.
 * @member {String} displayName
 */

HistoryMetadataParticipant.prototype['displayName'] = undefined;
/**
 * The key of the display name of the user or system associated with a history record.
 * @member {String} displayNameKey
 */

HistoryMetadataParticipant.prototype['displayNameKey'] = undefined;
/**
 * The ID of the user or system associated with a history record.
 * @member {String} id
 */

HistoryMetadataParticipant.prototype['id'] = undefined;
/**
 * The type of the user or system associated with a history record.
 * @member {String} type
 */

HistoryMetadataParticipant.prototype['type'] = undefined;
/**
 * The URL of the user or system associated with a history record.
 * @member {String} url
 */

HistoryMetadataParticipant.prototype['url'] = undefined;
var _default = HistoryMetadataParticipant;
exports["default"] = _default;