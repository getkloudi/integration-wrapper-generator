"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Actor = _interopRequireDefault(require("./Actor"));

var _IssueEventIssue = _interopRequireDefault(require("./IssueEventIssue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueEvent model module.
 * @module model/IssueEvent
 * @version 1.3.3
 */
var IssueEvent =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssueEvent</code>.
   * @alias module:model/IssueEvent
   */
  function IssueEvent() {
    _classCallCheck(this, IssueEvent);

    IssueEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEvent} obj Optional instance to populate.
     * @return {module:model/IssueEvent} The populated <code>IssueEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEvent();

        if (data.hasOwnProperty('actor')) {
          obj['actor'] = _Actor["default"].constructFromObject(data['actor']);
        }

        if (data.hasOwnProperty('commit_id')) {
          obj['commit_id'] = _ApiClient["default"].convertToType(data['commit_id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('issue')) {
          obj['issue'] = _IssueEventIssue["default"].constructFromObject(data['issue']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEvent;
}();
/**
 * @member {module:model/Actor} actor
 */


IssueEvent.prototype['actor'] = undefined;
/**
 * @member {String} commit_id
 */

IssueEvent.prototype['commit_id'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */

IssueEvent.prototype['created_at'] = undefined;
/**
 * @member {String} event
 */

IssueEvent.prototype['event'] = undefined;
/**
 * @member {module:model/IssueEventIssue} issue
 */

IssueEvent.prototype['issue'] = undefined;
/**
 * @member {String} url
 */

IssueEvent.prototype['url'] = undefined;
var _default = IssueEvent;
exports["default"] = _default;