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
 * The RepoTreeObject model module.
 * @module model/RepoTreeObject
 * @version 1.1.0
 */
var RepoTreeObject =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepoTreeObject</code>.
   * Get a project repository tree
   * @alias module:model/RepoTreeObject
   */
  function RepoTreeObject() {
    _classCallCheck(this, RepoTreeObject);

    RepoTreeObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepoTreeObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepoTreeObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoTreeObject} obj Optional instance to populate.
     * @return {module:model/RepoTreeObject} The populated <code>RepoTreeObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepoTreeObject();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('mode')) {
          obj['mode'] = _ApiClient["default"].convertToType(data['mode'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepoTreeObject;
}();
/**
 * @member {String} id
 */


RepoTreeObject.prototype['id'] = undefined;
/**
 * @member {String} mode
 */

RepoTreeObject.prototype['mode'] = undefined;
/**
 * @member {String} name
 */

RepoTreeObject.prototype['name'] = undefined;
/**
 * @member {String} path
 */

RepoTreeObject.prototype['path'] = undefined;
/**
 * @member {String} type
 */

RepoTreeObject.prototype['type'] = undefined;
var _default = RepoTreeObject;
exports["default"] = _default;