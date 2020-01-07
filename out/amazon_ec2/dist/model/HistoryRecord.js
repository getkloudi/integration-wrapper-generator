"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventInformation = _interopRequireDefault(require("./EventInformation"));

var _EventType = _interopRequireDefault(require("./EventType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoryRecord model module.
 * @module model/HistoryRecord
 * @version 1.1.0
 */
var HistoryRecord =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>HistoryRecord</code>.
   * Describes an event in the history of the Spot Fleet request.
   * @alias module:model/HistoryRecord
   */
  function HistoryRecord() {
    _classCallCheck(this, HistoryRecord);

    HistoryRecord.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoryRecord, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoryRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoryRecord} obj Optional instance to populate.
     * @return {module:model/HistoryRecord} The populated <code>HistoryRecord</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoryRecord();

        if (data.hasOwnProperty('EventInformation')) {
          obj['EventInformation'] = _EventInformation["default"].constructFromObject(data['EventInformation']);
        }

        if (data.hasOwnProperty('EventType')) {
          obj['EventType'] = _EventType["default"].constructFromObject(data['EventType']);
        }

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient["default"].convertToType(data['Timestamp'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return HistoryRecord;
}();
/**
 * @member {module:model/EventInformation} EventInformation
 */


HistoryRecord.prototype['EventInformation'] = undefined;
/**
 * @member {module:model/EventType} EventType
 */

HistoryRecord.prototype['EventType'] = undefined;
/**
 * @member {Date} Timestamp
 */

HistoryRecord.prototype['Timestamp'] = undefined;
var _default = HistoryRecord;
exports["default"] = _default;