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
 * The Pipeline model module.
 * @module model/Pipeline
 * @version 1.1.0
 */
var Pipeline =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Pipeline</code>.
   * This feature was introduced in GitLab 8.11.
   * @alias module:model/Pipeline
   */
  function Pipeline() {
    _classCallCheck(this, Pipeline);

    Pipeline.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Pipeline, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Pipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pipeline} obj Optional instance to populate.
     * @return {module:model/Pipeline} The populated <code>Pipeline</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pipeline();

        if (data.hasOwnProperty('before_sha')) {
          obj['before_sha'] = _ApiClient["default"].convertToType(data['before_sha'], 'String');
        }

        if (data.hasOwnProperty('committed_at')) {
          obj['committed_at'] = _ApiClient["default"].convertToType(data['committed_at'], 'String');
        }

        if (data.hasOwnProperty('coverage')) {
          obj['coverage'] = _ApiClient["default"].convertToType(data['coverage'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'String');
        }

        if (data.hasOwnProperty('finished_at')) {
          obj['finished_at'] = _ApiClient["default"].convertToType(data['finished_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
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

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _UserBasic["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('yaml_errors')) {
          obj['yaml_errors'] = _ApiClient["default"].convertToType(data['yaml_errors'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Pipeline;
}();
/**
 * @member {String} before_sha
 */


Pipeline.prototype['before_sha'] = undefined;
/**
 * @member {String} committed_at
 */

Pipeline.prototype['committed_at'] = undefined;
/**
 * @member {String} coverage
 */

Pipeline.prototype['coverage'] = undefined;
/**
 * @member {String} created_at
 */

Pipeline.prototype['created_at'] = undefined;
/**
 * @member {String} duration
 */

Pipeline.prototype['duration'] = undefined;
/**
 * @member {String} finished_at
 */

Pipeline.prototype['finished_at'] = undefined;
/**
 * @member {String} id
 */

Pipeline.prototype['id'] = undefined;
/**
 * @member {String} ref
 */

Pipeline.prototype['ref'] = undefined;
/**
 * @member {String} sha
 */

Pipeline.prototype['sha'] = undefined;
/**
 * @member {String} started_at
 */

Pipeline.prototype['started_at'] = undefined;
/**
 * @member {String} status
 */

Pipeline.prototype['status'] = undefined;
/**
 * @member {String} tag
 */

Pipeline.prototype['tag'] = undefined;
/**
 * @member {String} updated_at
 */

Pipeline.prototype['updated_at'] = undefined;
/**
 * @member {module:model/UserBasic} user
 */

Pipeline.prototype['user'] = undefined;
/**
 * @member {String} yaml_errors
 */

Pipeline.prototype['yaml_errors'] = undefined;
var _default = Pipeline;
exports["default"] = _default;