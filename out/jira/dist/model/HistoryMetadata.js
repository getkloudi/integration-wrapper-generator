"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HistoryMetadataParticipant = _interopRequireDefault(require("./HistoryMetadataParticipant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoryMetadata model module.
 * @module model/HistoryMetadata
 * @version 1.4.0
 */
var HistoryMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoryMetadata</code>.
   * Details of issue history metadata.
   * @alias module:model/HistoryMetadata
   */
  function HistoryMetadata() {
    _classCallCheck(this, HistoryMetadata);

    HistoryMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoryMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoryMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoryMetadata} obj Optional instance to populate.
     * @return {module:model/HistoryMetadata} The populated <code>HistoryMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoryMetadata();

        if (data.hasOwnProperty('activityDescription')) {
          obj['activityDescription'] = _ApiClient["default"].convertToType(data['activityDescription'], 'String');
        }

        if (data.hasOwnProperty('activityDescriptionKey')) {
          obj['activityDescriptionKey'] = _ApiClient["default"].convertToType(data['activityDescriptionKey'], 'String');
        }

        if (data.hasOwnProperty('actor')) {
          obj['actor'] = _ApiClient["default"].convertToType(data['actor'], _HistoryMetadataParticipant["default"]);
        }

        if (data.hasOwnProperty('cause')) {
          obj['cause'] = _ApiClient["default"].convertToType(data['cause'], _HistoryMetadataParticipant["default"]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('descriptionKey')) {
          obj['descriptionKey'] = _ApiClient["default"].convertToType(data['descriptionKey'], 'String');
        }

        if (data.hasOwnProperty('emailDescription')) {
          obj['emailDescription'] = _ApiClient["default"].convertToType(data['emailDescription'], 'String');
        }

        if (data.hasOwnProperty('emailDescriptionKey')) {
          obj['emailDescriptionKey'] = _ApiClient["default"].convertToType(data['emailDescriptionKey'], 'String');
        }

        if (data.hasOwnProperty('extraData')) {
          obj['extraData'] = _ApiClient["default"].convertToType(data['extraData'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('generator')) {
          obj['generator'] = _ApiClient["default"].convertToType(data['generator'], _HistoryMetadataParticipant["default"]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HistoryMetadata;
}();
/**
 * The activity described in the history record.
 * @member {String} activityDescription
 */


HistoryMetadata.prototype['activityDescription'] = undefined;
/**
 * The key of the activity described in the history record.
 * @member {String} activityDescriptionKey
 */

HistoryMetadata.prototype['activityDescriptionKey'] = undefined;
/**
 * Details of the user whose action created the history record.
 * @member {module:model/HistoryMetadataParticipant} actor
 */

HistoryMetadata.prototype['actor'] = undefined;
/**
 * Details of the cause that triggered the creation the history record.
 * @member {module:model/HistoryMetadataParticipant} cause
 */

HistoryMetadata.prototype['cause'] = undefined;
/**
 * The description of the history record.
 * @member {String} description
 */

HistoryMetadata.prototype['description'] = undefined;
/**
 * The description key of the history record.
 * @member {String} descriptionKey
 */

HistoryMetadata.prototype['descriptionKey'] = undefined;
/**
 * The description of the email address associated the history record.
 * @member {String} emailDescription
 */

HistoryMetadata.prototype['emailDescription'] = undefined;
/**
 * The description key of the email address associated the history record.
 * @member {String} emailDescriptionKey
 */

HistoryMetadata.prototype['emailDescriptionKey'] = undefined;
/**
 * Additional arbitrary information about the history record.
 * @member {Object.<String, String>} extraData
 */

HistoryMetadata.prototype['extraData'] = undefined;
/**
 * Details of the system that generated the history record.
 * @member {module:model/HistoryMetadataParticipant} generator
 */

HistoryMetadata.prototype['generator'] = undefined;
/**
 * The type of the history record.
 * @member {String} type
 */

HistoryMetadata.prototype['type'] = undefined;
var _default = HistoryMetadata;
exports["default"] = _default;