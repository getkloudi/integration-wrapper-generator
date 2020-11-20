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
 * The GitRefPatch model module.
 * @module model/GitRefPatch
 * @version 1.4.6
 */
var GitRefPatch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GitRefPatch</code>.
   * @alias module:model/GitRefPatch
   */
  function GitRefPatch() {
    _classCallCheck(this, GitRefPatch);

    GitRefPatch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GitRefPatch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GitRefPatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitRefPatch} obj Optional instance to populate.
     * @return {module:model/GitRefPatch} The populated <code>GitRefPatch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GitRefPatch();

        if (data.hasOwnProperty('force')) {
          obj['force'] = _ApiClient["default"].convertToType(data['force'], 'Boolean');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GitRefPatch;
}();
/**
 * @member {Boolean} force
 */


GitRefPatch.prototype['force'] = undefined;
/**
 * @member {String} sha
 */

GitRefPatch.prototype['sha'] = undefined;
var _default = GitRefPatch;
exports["default"] = _default;