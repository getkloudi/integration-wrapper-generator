"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChangedWorklog = _interopRequireDefault(require("./ChangedWorklog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ChangedWorklogs model module.
 * @module model/ChangedWorklogs
 * @version 1.4.0
 */
var ChangedWorklogs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChangedWorklogs</code>.
   * List of changed worklogs.
   * @alias module:model/ChangedWorklogs
   */
  function ChangedWorklogs() {
    _classCallCheck(this, ChangedWorklogs);

    ChangedWorklogs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChangedWorklogs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChangedWorklogs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangedWorklogs} obj Optional instance to populate.
     * @return {module:model/ChangedWorklogs} The populated <code>ChangedWorklogs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChangedWorklogs();

        if (data.hasOwnProperty('lastPage')) {
          obj['lastPage'] = _ApiClient["default"].convertToType(data['lastPage'], 'Boolean');
        }

        if (data.hasOwnProperty('nextPage')) {
          obj['nextPage'] = _ApiClient["default"].convertToType(data['nextPage'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('since')) {
          obj['since'] = _ApiClient["default"].convertToType(data['since'], 'Number');
        }

        if (data.hasOwnProperty('until')) {
          obj['until'] = _ApiClient["default"].convertToType(data['until'], 'Number');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_ChangedWorklog["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ChangedWorklogs;
}();
/**
 * @member {Boolean} lastPage
 */


ChangedWorklogs.prototype['lastPage'] = undefined;
/**
 * The URL of the next list of changed worklogs.
 * @member {String} nextPage
 */

ChangedWorklogs.prototype['nextPage'] = undefined;
/**
 * The URL of this changed worklogs list.
 * @member {String} self
 */

ChangedWorklogs.prototype['self'] = undefined;
/**
 * The datetime of the first worklog item in the list.
 * @member {Number} since
 */

ChangedWorklogs.prototype['since'] = undefined;
/**
 * The datetime of the last worklog item in the list.
 * @member {Number} until
 */

ChangedWorklogs.prototype['until'] = undefined;
/**
 * Changed worklog list.
 * @member {Array.<module:model/ChangedWorklog>} values
 */

ChangedWorklogs.prototype['values'] = undefined;
var _default = ChangedWorklogs;
exports["default"] = _default;