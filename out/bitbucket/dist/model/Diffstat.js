"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitFile = _interopRequireDefault(require("./CommitFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Diffstat model module.
 * @module model/Diffstat
 * @version 1.1.0
 */
var Diffstat =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Diffstat</code>.
   * A diffstat object that includes a summary of changes made to a file between two commits.
   * @alias module:model/Diffstat
   * @param type {String} 
   */
  function Diffstat(type) {
    _classCallCheck(this, Diffstat);

    Diffstat.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Diffstat, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Diffstat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Diffstat} obj Optional instance to populate.
     * @return {module:model/Diffstat} The populated <code>Diffstat</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Diffstat();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('lines_added')) {
          obj['lines_added'] = _ApiClient["default"].convertToType(data['lines_added'], 'Number');
        }

        if (data.hasOwnProperty('lines_removed')) {
          obj['lines_removed'] = _ApiClient["default"].convertToType(data['lines_removed'], 'Number');
        }

        if (data.hasOwnProperty('old')) {
          obj['old'] = _CommitFile["default"].constructFromObject(data['old']);
        }

        if (data.hasOwnProperty('new')) {
          obj['new'] = _CommitFile["default"].constructFromObject(data['new']);
        }
      }

      return obj;
    }
  }]);

  return Diffstat;
}();
/**
 * @member {String} type
 */


Diffstat.prototype['type'] = undefined;
/**
 * @member {module:model/Diffstat.StatusEnum} status
 */

Diffstat.prototype['status'] = undefined;
/**
 * @member {Number} lines_added
 */

Diffstat.prototype['lines_added'] = undefined;
/**
 * @member {Number} lines_removed
 */

Diffstat.prototype['lines_removed'] = undefined;
/**
 * @member {module:model/CommitFile} old
 */

Diffstat.prototype['old'] = undefined;
/**
 * @member {module:model/CommitFile} new
 */

Diffstat.prototype['new'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Diffstat['StatusEnum'] = {
  /**
   * value: "added"
   * @const
   */
  "added": "added",

  /**
   * value: "removed"
   * @const
   */
  "removed": "removed",

  /**
   * value: "modified"
   * @const
   */
  "modified": "modified",

  /**
   * value: "renamed"
   * @const
   */
  "renamed": "renamed"
};
var _default = Diffstat;
exports["default"] = _default;