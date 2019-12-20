"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Milestone model module.
 * @module model/Milestone
 * @version 1.3.1
 */
var Milestone =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Milestone</code>.
   * @alias module:model/Milestone
   */
  function Milestone() {
    _classCallCheck(this, Milestone);

    Milestone.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Milestone, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Milestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Milestone} obj Optional instance to populate.
     * @return {module:model/Milestone} The populated <code>Milestone</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Milestone();

        if (data.hasOwnProperty('closed_issues')) {
          obj['closed_issues'] = _ApiClient["default"].convertToType(data['closed_issues'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _User["default"].constructFromObject(data['creator']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('due_on')) {
          obj['due_on'] = _ApiClient["default"].convertToType(data['due_on'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('open_issues')) {
          obj['open_issues'] = _ApiClient["default"].convertToType(data['open_issues'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Milestone;
}();
/**
 * @member {Number} closed_issues
 */


Milestone.prototype['closed_issues'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */

Milestone.prototype['created_at'] = undefined;
/**
 * @member {module:model/User} creator
 */

Milestone.prototype['creator'] = undefined;
/**
 * @member {String} description
 */

Milestone.prototype['description'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} due_on
 */

Milestone.prototype['due_on'] = undefined;
/**
 * @member {Number} number
 */

Milestone.prototype['number'] = undefined;
/**
 * @member {Number} open_issues
 */

Milestone.prototype['open_issues'] = undefined;
/**
 * @member {module:model/Milestone.StateEnum} state
 */

Milestone.prototype['state'] = undefined;
/**
 * @member {String} title
 */

Milestone.prototype['title'] = undefined;
/**
 * @member {String} url
 */

Milestone.prototype['url'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

Milestone['StateEnum'] = {
  /**
   * value: "open"
   * @const
   */
  "open": "open",

  /**
   * value: "closed"
   * @const
   */
  "closed": "closed"
};
var _default = Milestone;
exports["default"] = _default;