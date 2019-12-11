"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommitStatus model module.
 * @module model/CommitStatus
 * @version 1.1.0
 */
var CommitStatus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommitStatus</code>.
   * Post status to a commit
   * @alias module:model/CommitStatus
   */
  function CommitStatus() {
    _classCallCheck(this, CommitStatus);

    CommitStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommitStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitStatus} obj Optional instance to populate.
     * @return {module:model/CommitStatus} The populated <code>CommitStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitStatus();

        if (data.hasOwnProperty('allow_failure')) {
          obj['allow_failure'] = _ApiClient["default"].convertToType(data['allow_failure'], 'String');
        }

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('finished_at')) {
          obj['finished_at'] = _ApiClient["default"].convertToType(data['finished_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('ref')) {
          obj['ref'] = _ApiClient["default"].convertToType(data['ref'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('started_at')) {
          obj['started_at'] = _ApiClient["default"].convertToType(data['started_at'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('target_url')) {
          obj['target_url'] = _ApiClient["default"].convertToType(data['target_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommitStatus;
}();
/**
 * @member {String} allow_failure
 */


CommitStatus.prototype['allow_failure'] = undefined;
/**
 * @member {module:model/UserBasic} author
 */

CommitStatus.prototype['author'] = undefined;
/**
 * @member {String} created_at
 */

CommitStatus.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

CommitStatus.prototype['description'] = undefined;
/**
 * @member {String} finished_at
 */

CommitStatus.prototype['finished_at'] = undefined;
/**
 * @member {String} id
 */

CommitStatus.prototype['id'] = undefined;
/**
 * @member {String} name
 */

CommitStatus.prototype['name'] = undefined;
/**
 * @member {String} ref
 */

CommitStatus.prototype['ref'] = undefined;
/**
 * @member {String} sha
 */

CommitStatus.prototype['sha'] = undefined;
/**
 * @member {String} started_at
 */

CommitStatus.prototype['started_at'] = undefined;
/**
 * @member {String} status
 */

CommitStatus.prototype['status'] = undefined;
/**
 * @member {String} target_url
 */

CommitStatus.prototype['target_url'] = undefined;
var _default = CommitStatus;
exports["default"] = _default;