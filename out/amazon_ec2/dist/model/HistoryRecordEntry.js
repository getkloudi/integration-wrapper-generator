"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventInformation = _interopRequireDefault(require("./EventInformation"));

var _FleetEventType = _interopRequireDefault(require("./FleetEventType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoryRecordEntry model module.
 * @module model/HistoryRecordEntry
 * @version 1.1.0
 */
var HistoryRecordEntry =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>HistoryRecordEntry</code>.
   * Describes an event in the history of an EC2 Fleet.
   * @alias module:model/HistoryRecordEntry
   */
  function HistoryRecordEntry() {
    _classCallCheck(this, HistoryRecordEntry);

    HistoryRecordEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoryRecordEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoryRecordEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoryRecordEntry} obj Optional instance to populate.
     * @return {module:model/HistoryRecordEntry} The populated <code>HistoryRecordEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoryRecordEntry();

        if (data.hasOwnProperty('EventInformation')) {
          obj['EventInformation'] = _EventInformation["default"].constructFromObject(data['EventInformation']);
        }

        if (data.hasOwnProperty('EventType')) {
          obj['EventType'] = _FleetEventType["default"].constructFromObject(data['EventType']);
        }

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient["default"].convertToType(data['Timestamp'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return HistoryRecordEntry;
}();
/**
 * @member {module:model/EventInformation} EventInformation
 */


HistoryRecordEntry.prototype['EventInformation'] = undefined;
/**
 * @member {module:model/FleetEventType} EventType
 */

HistoryRecordEntry.prototype['EventType'] = undefined;
/**
 * @member {Date} Timestamp
 */

HistoryRecordEntry.prototype['Timestamp'] = undefined;
var _default = HistoryRecordEntry;
exports["default"] = _default;